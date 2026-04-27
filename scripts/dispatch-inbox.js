#!/usr/bin/env node

/**
 * inbox 自动分拣脚本
 *
 * 作用：运营往 inbox/ 丢文件后，这个脚本读文件头的 target 和 review 字段，
 *       自动把文件搬到目标目录（review=none）或开 PR（review=required）。
 *
 * 由 GitHub Action (.github/workflows/dispatch.yml) 自动调用，不需要手动运行。
 *
 * 环境变量：
 *   CHANGED_FILES  - 换行分隔的变更文件列表（由 Action 提供）
 *   GITHUB_TOKEN   - GitHub 自动提供的 token
 *   BASE_BRANCH    - 默认 main
 */

const fs = require("fs");
const path = require("path");
const { execSync } = require("child_process");

// ---- 配置 ----

const BASE_BRANCH = process.env.BASE_BRANCH || "main";
const GH_TOKEN = process.env.GH_TOKEN || process.env.GITHUB_TOKEN;
const RUN_ID = process.env.GITHUB_RUN_ID || String(Date.now());

// 允许的目标目录（运营写的 target 必须在这里面）
const ALLOWED_TARGETS = [
  "content-drafts/",
  "seo/sop/",
  "social/sop/",
  "content-published/",
  "execution/",
  "onboarding/",
];

// 这些目录强制走 PR 审批，运营写 review=none 也会被覆盖成 required
const REQUIRED_TARGETS = [
  "seo/sop/",
  "social/sop/",
  "content-published/",
  "onboarding/",
];

// ---- 工具函数 ----

function normalizeDir(p) {
  if (!p) return "";
  let v = String(p).trim().replace(/\\/g, "/");
  if (!v.endsWith("/")) v += "/";
  return v;
}

function log(msg) {
  console.log(`[dispatch] ${msg}`);
}

function sh(cmd) {
  return execSync(cmd, { stdio: "pipe", encoding: "utf8" }).trim();
}

/**
 * 简易 frontmatter 解析（不依赖第三方库）
 * 读取文件开头 --- ... --- 之间的 YAML 键值对
 */
function parseFrontmatter(content) {
  const match = content.match(/^---\r?\n([\s\S]*?)\r?\n---/);
  if (!match) return {};

  const result = {};
  for (const line of match[1].split("\n")) {
    const idx = line.indexOf(":");
    if (idx > 0) {
      const key = line.slice(0, idx).trim();
      const val = line.slice(idx + 1).trim().replace(/^["']|["']$/g, "");
      result[key] = val;
    }
  }
  return result;
}

// ---- 主逻辑 ----

function main() {
  if (!GH_TOKEN) {
    throw new Error("缺少 GITHUB_TOKEN。请检查 Action 配置。");
  }

  // 读取变更文件列表，只处理 inbox/ 下的
  const changed = (process.env.CHANGED_FILES || "")
    .split(/\r?\n/)
    .map((s) => s.trim())
    .filter((f) => f && f.startsWith("inbox/"));

  if (changed.length === 0) {
    log("inbox/ 没有变化，跳过。");
    return;
  }

  const errors = [];
  const warnings = [];
  const toMove = [];

  // ---- 第一步：校验所有文件 ----

  for (const file of changed) {
    // 文件已删除 = no-op（运营撤回了）
    if (!fs.existsSync(file)) {
      log(`跳过已删除文件: ${file}`);
      continue;
    }

    const content = fs.readFileSync(file, "utf8");
    const fm = parseFrontmatter(content);

    let target = fm.target ? normalizeDir(fm.target) : "";
    let review = String(fm.review || "required").toLowerCase();

    // 校验 target
    if (!target) {
      errors.push(`${file}: frontmatter 缺少 target 字段。请在文件头加上 target: content-drafts/ 这样的目标路径。`);
      continue;
    }

    if (!ALLOWED_TARGETS.includes(target)) {
      errors.push(`${file}: target "${target}" 不在允许列表。允许的值: ${ALLOWED_TARGETS.join(", ")}`);
      continue;
    }

    // 校验 review
    if (!["none", "required"].includes(review)) {
      errors.push(`${file}: review 字段只能是 none 或 required，当前是 "${review}"`);
      continue;
    }

    // 强制审批：某些目录即使写 none 也会升级为 required
    if (review === "none" && REQUIRED_TARGETS.includes(target)) {
      review = "required";
      warnings.push(`${file}: 目标 ${target} 强制审批，已自动改成 review=required`);
    }

    // 检查目标位置是否有同名文件
    const fileName = path.basename(file);
    const dest = path.join(target, fileName);
    if (fs.existsSync(dest)) {
      errors.push(`${file}: 目标 ${dest} 已有同名文件，请改个名字再提交。`);
      continue;
    }

    toMove.push({ from: file, to: dest, review });
  }

  // 打印警告
  for (const w of warnings) {
    log(`⚠️ ${w}`);
  }

  // 有错误就停，不搬任何文件
  if (errors.length > 0) {
    log("❌ 校验失败：");
    for (const e of errors) {
      log(`  - ${e}`);
    }
    process.exit(1);
  }

  if (toMove.length === 0) {
    log("没有需要搬运的文件，结束。");
    return;
  }

  // ---- 第二步：搬运文件 ----

  for (const item of toMove) {
    fs.mkdirSync(path.dirname(item.to), { recursive: true });
    fs.renameSync(item.from, item.to);
    log(`✅ ${item.from} → ${item.to} (review=${item.review})`);
  }

  // 配置 git 身份（Action 环境需要）
  sh('git config user.name "github-actions[bot]"');
  sh('git config user.email "github-actions[bot]@users.noreply.github.com"');
  sh("git add -A");

  const summary = toMove.map((m) => `- ${m.from} → ${m.to} (${m.review})`).join("\n");
  const commitMsg = `chore(dispatch): 自动分拣 inbox 文件\n\n${summary}`;

  // ---- 第三步：决定直推还是开 PR ----

  const needPR = toMove.some((m) => m.review === "required");

  if (needPR) {
    // 开 PR 流程
    const branch = `auto/dispatch-${RUN_ID}`;
    sh(`git checkout -b ${branch}`);
    sh(`git commit -m ${JSON.stringify(commitMsg)}`);
    sh(`git push origin ${branch}`);

    const title = `[自动分拣] inbox 文件待审批 (${new Date().toISOString().slice(0, 10)})`;
    const body = `自动分拣结果：\n\n${summary}\n\n> 本 PR 由 dispatch-inbox.js 自动创建，审批后合并即可。`;

    const prUrl = sh(
      `gh pr create --base ${BASE_BRANCH} --head ${branch} --title ${JSON.stringify(title)} --body ${JSON.stringify(body)}`
    );

    log(`📋 已创建 PR: ${prUrl}`);
  } else {
    // 直推到 main（所有文件都是 review=none）
    sh(`git commit -m ${JSON.stringify(commitMsg)}`);
    sh(`git push origin ${BASE_BRANCH}`);
    log("📦 已直接推送到 main。");
  }
}

try {
  main();
} catch (err) {
  console.error(`[dispatch] ❌ ERROR: ${err.message}`);
  process.exit(1);
}
