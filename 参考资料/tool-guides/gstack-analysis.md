---
title: gstack 深度分析与使用手册
date: 2026-03-20
tags:
  - tool-analysis
  - claude-code
  - ai-engineering
  - gstack
---

# gstack 深度分析与使用手册

> 基于 [garrytan/gstack](https://github.com/garrytan/gstack) v0.9.0.1 源码分析

## 一、项目概览

**gstack** 是由 Y Combinator CEO Garry Tan 开发的开源 AI 工程工作流系统，将 Claude Code 转变为一个拥有 **21 个专业 Agent** 的虚拟工程团队。

### 核心特性

| 特性 | 说明 |
|------|------|
| 持久化无头浏览器 | 基于 Playwright + Chromium，~100ms/命令 |
| 21 个专业技能 | 覆盖从头脑风暴到发布的完整工程周期 |
| 多平台支持 | Claude Code、OpenAI Codex、Google Gemini、Cursor |
| 安全防护 | careful/freeze/guard 三层防护体系 |
| 隐私优先遥测 | 默认关闭，三级可选 |

### 设计哲学："煮沸湖泊"(Boil the Lake)

AI 将"完整性"的边际成本降到接近零。gstack 鼓励：
- 优先完整实现而非走捷径
- "湖泊"(可煮沸)：模块的 100% 覆盖率、完整功能、所有边界情况
- "海洋"(不可煮沸)：系统重写、跨季度迁移

### 效率压缩参考

| 任务类型 | 人类团队 | CC + gstack | 压缩比 |
|----------|----------|-------------|--------|
| 样板代码 | 2 天 | 15 分钟 | 100x |
| 测试 | 1 天 | 15 分钟 | 50x |
| 功能开发 | 1 周 | 30 分钟 | 30x |
| Bug 修复 + 测试 | 4 小时 | 15 分钟 | 20x |
| 架构设计 | 2 天 | 4 小时 | 5x |
| 研究调研 | 1 天 | 3 小时 | 3x |

---

## 二、系统架构

### 2.1 守护进程模型

```
┌──────────────────────────────────────────────┐
│                 Claude Code                   │
│  (读取 SKILL.md → 调用 $B 命令)              │
└──────────────┬───────────────────────────────┘
               │ HTTP (Bearer Token Auth)
               ▼
┌──────────────────────────────────────────────┐
│            Bun HTTP Server                    │
│  (长驻进程，管理 Chromium 生命周期)           │
│  端口: 随机 10000-60000                       │
│  空闲超时: 30 分钟                            │
└──────────────┬───────────────────────────────┘
               │
               ▼
┌──────────────────────────────────────────────┐
│           Chromium (Playwright)               │
│  (持久化 Cookie、Tab、Session)                │
└──────────────────────────────────────────────┘
```

- **首次调用**: ~3 秒 (启动守护进程)
- **后续调用**: ~100-200ms
- **上下文开销**: 0 token (纯文本输出)

### 2.2 为什么选择 Bun

1. **编译二进制** - `bun build --compile` 生成 58MB 单文件可执行程序
2. **原生 SQLite** - Cookie 解密无需 native add-on
3. **原生 TypeScript** - 开发时无需编译步骤
4. **内置 HTTP Server** - 轻量、快速

### 2.3 Ref 元素引用系统

**传统方案的问题**: CSS 选择器脆弱、XPath 冗长、DOM 操作在 CSP/框架下容易失效。

**gstack 的解决方案**: 基于 Playwright 的无障碍树 (Accessibility Tree)

```
1. page.locator(scope).ariaSnapshot() → YAML 格式的无障碍树
2. 解析器分配 ref: @e1, @e2, @e3...
3. 每个 ref 映射到 Playwright Locator: getByRole(role, { name }).nth(index)
4. 存储在 BrowserManager 实例中
```

**Ref 过期检测**:
- 导航时自动清除 (framenavigated 事件)
- SPA 场景下，`resolveRef()` 异步执行 `count()` 检查 (~5ms)
- 元素不存在时快速失败

**光标交互 Ref** (@c):
- 捕获非 ARIA 可点击元素 (cursor:pointer, onclick, tabindex)
- 与 @e ref 使用独立命名空间

### 2.4 安装方式

| 安装类型 | 路径 | 说明 |
|----------|------|------|
| Claude Code 全局 | `~/.claude/skills/gstack` | 推荐 |
| Codex 全局 | `~/.codex/skills/gstack` | OpenAI Codex CLI |
| 项目内嵌 | `.claude/skills/gstack` | 自动发现 |

---

## 三、21 个专业技能详解

### 3.1 规划与策略阶段

#### `/office-hours` - YC 办公时间 (v2.0.0)

**角色**: YC 合伙人
**用途**: 在写代码之前重新审视产品想法

**两种模式**:
- **创业模式**: 六个核心问题
  1. 需求现实 - 这个问题真的存在吗？
  2. 现状替代 - 人们现在怎么解决的？
  3. 极度具体 - 谁会为此"拼命"？
  4. 最窄切入 - 最小可行的切入点是什么？
  5. 观察力 - 你看到了什么别人没看到的？
  6. 未来适配 - 5 年后这个方向还成立吗？
- **Builder 模式**: 黑客马拉松/副业项目的热情头脑风暴

**输出**: 设计文档保存到 `~/.gstack/projects/`
**触发词**: "brainstorm", "office hours", "is this worth building"

---

#### `/plan-ceo-review` - CEO/创始人评审 (v1.0.0)

**角色**: CEO/创始人
**用途**: 找到隐藏在需求中的"10 星级产品"

**四种模式**:

| 模式 | 说明 |
|------|------|
| SCOPE EXPANSION | 放大梦想 |
| SELECTIVE EXPANSION | 精选扩展机会 |
| HOLD SCOPE | 保持范围，最大化严谨 |
| SCOPE REDUCTION | 最小可行方案 |

**输出**: 持久化到 `~/.gstack/projects/`
**触发词**: "think bigger", "strategy review", "rethink this"

---

#### `/plan-eng-review` - 工程经理评审 (v1.0.0)

**角色**: 工程经理/技术主管
**用途**: 锁定架构、数据流、边界情况、测试

**交付物**:
- 架构图 (时序图、状态图、组件图、数据流图)
- 边界情况分析
- 状态转换模型
- 测试矩阵
- 故障模式文档

**触发词**: "engineering review", "lock in the plan", "architecture review"

---

#### `/plan-design-review` - 高级设计师评审 (v2.0.0)

**角色**: 高级设计师
**用途**: 交互式计划模式设计审计

**方法论**:
1. 对每个设计维度打分 0-10
2. 解释"10 分"是什么样的
3. 编辑计划以达到更高分数
4. AI "套路"检测 (AI slop detection)

**工作模式**: Plan mode，需要用户交互
**触发词**: "design critique", "review the design plan"

---

#### `/design-consultation` - 设计合伙人 (v1.0.0)

**角色**: 设计合伙人/系统架构师
**用途**: 从零构建完整设计系统

**交付物**:
- 设计研究与格局分析
- 完整设计系统 (美学、排版、配色、布局、间距、动效)
- 字体 + 配色预览页面
- DESIGN.md 作为唯一真实来源

**触发词**: "design system", "brand guidelines", "create DESIGN.md"

---

### 3.2 代码审查与质量阶段

#### `/review` - 资深工程师代码审查 (v1.0.0)

**角色**: Staff Engineer
**用途**: PR 合入前代码审查 - 发现 CI 遗漏的 Bug

**审查重点**:
- SQL 注入防护
- LLM 信任边界违规
- 条件副作用
- 结构性问题
- 自动修复明显问题
- 标记完整性缺口

**触发词**: "code review", "pre-landing review", "check my diff"

---

#### `/investigate` - 系统化调试 (v1.0.0)

**角色**: 系统化调试专家
**用途**: 根因调试，铁律："不调查就不修复"

**四阶段流程**:

```
调查 → 分析 → 假设 → 实施
```

1. **Investigate** - 收集证据
2. **Analyze** - 理解模式
3. **Hypothesize** - 形成理论
4. **Implement** - 基于根因修复

**安全特性**: 自动冻结被调查模块的编辑权限
**触发词**: "debug this", "why is this broken", "root cause analysis"

---

#### `/design-review` - 设计师+编码 审查 (v2.0.0)

**角色**: 懂代码的设计师
**用途**: 实时站点视觉审计 + 修复循环

**方法论**:
- 80 项设计审计清单 (视觉一致性、间距、层级、AI 套路、交互)
- 每次修复用原子提交
- 修复前后截图对比
- 计划模式设计审查请用 `/plan-design-review`

**触发词**: "audit the design", "visual QA", "design polish"

---

### 3.3 测试与质量保障阶段

#### `/qa` - QA 主管 (v2.0.0)

**角色**: QA Lead
**用途**: 系统化测试并修复 Bug

**方法论**:
1. 打开真实浏览器，点击遍历流程
2. 发现 Bug，在源码中修复
3. 每个修复一个原子提交
4. 重新验证每个修复
5. 自动生成回归测试

**三个层级**:

| 层级 | 覆盖范围 |
|------|----------|
| Quick | 仅 Critical + High |
| Standard | + Medium |
| Exhaustive | + Cosmetic |

**输出**: 修复前后健康评分、发布就绪度摘要
**触发词**: "qa", "test and fix", "does this work"

---

#### `/qa-only` - QA 报告 (v1.0.0)

**角色**: QA Reporter
**用途**: 仅报告不修改代码
**区别**: 与 `/qa` 相同方法论，但只生成结构化报告
**触发词**: "qa report only", "test but don't fix"

---

### 3.4 发布与文档阶段

#### `/ship` - 发布工程师 (v1.0.0)

**角色**: Release Engineer
**用途**: 一个命令完成整个发布流程

**步骤**:
```
1. 检测 + 合并基础分支
2. 运行测试 (无则自动 bootstrap)
3. 审计测试覆盖率
4. Review diff
5. 升级 VERSION
6. 更新 CHANGELOG
7. Commit + Push
8. 创建 PR
9. 自动调用 /document-release 更新文档
```

**触发词**: "ship", "deploy", "create a PR", "push to main"

---

#### `/document-release` - 技术写作 (v1.0.0)

**角色**: Technical Writer
**用途**: 发布后文档更新

**更新范围**: README, ARCHITECTURE, CONTRIBUTING, CLAUDE.md, CHANGELOG, TODOS, VERSION

**特性**: 与已发布代码交叉比对
**自动触发**: 由 `/ship` 在最后一步自动调用
**触发词**: "update the docs", "sync documentation"

---

#### `/retro` - 周回顾 (v2.0.0)

**角色**: Engineering Manager
**用途**: 带指标的周回顾

**输出**:
- 每人贡献分解
- 发布连续天数
- 代码质量趋势
- 测试健康指标
- gstack 使用统计
- 成长机会

**特性**: 持久化历史，跨周趋势分析；支持多人反馈
**触发词**: "weekly retro", "what did we ship"

---

### 3.5 浏览器与测试工具

#### `/browse` - 核心浏览器技术

**角色**: QA Engineer
**用途**: 真实 Chromium 自动化，~100ms/命令

**命令分类**:

| 类别 | 命令 |
|------|------|
| 导航 | `goto`, `back`, `forward`, `reload`, `url` |
| 读取 | `text`, `html`, `links`, `forms`, `accessibility` |
| 快照 | `snapshot` (-i 交互, -d diff, -a 标注, -C 光标交互, -o 输出) |
| 交互 | `click`, `fill`, `select`, `hover`, `type`, `press`, `scroll`, `wait`, `viewport`, `upload` |
| 检查 | `js`, `eval`, `css`, `attrs`, `is`, `console`, `network`, `dialog`, `cookies`, `storage`, `perf` |
| 视觉 | `screenshot` (全页/视口/元素/裁剪), `pdf`, `responsive` |
| 比较 | `diff <url1> <url2>` |
| 对话框 | `dialog-accept`, `dialog-dismiss` |
| 标签页 | `tabs`, `tab`, `newtab`, `closetab` |
| Cookie | `cookie-import`, `cookie-import-browser` |
| 批量 | `chain` (JSON 批处理) |
| 交接 | `handoff [reason]`, `resume` (用于验证码/MFA/认证) |

**安全**: Bearer Token 认证，仅绑定 localhost，只读 Cookie 数据库
**多工作区**: 每个项目在 `.gstack/browse.json` 中有独立浏览器实例

---

#### `/setup-browser-cookies` - Cookie 导入 (v1.0.0)

**角色**: Session Manager
**用途**: 从真实浏览器导入 Cookie 用于认证测试

**支持浏览器**: Comet, Chrome, Arc, Brave, Edge

**流程**:
1. 打开交互式选择器 UI
2. 用户选择要导入的域名
3. Keychain 访问需要用户批准 (macOS)
4. 进程内解密 (PBKDF2 + AES-128-CBC)
5. 加载到 Playwright 上下文 (从不以明文写入磁盘)

**触发词**: "import cookies", "authenticate the browser", "login to the site"

---

### 3.6 跨模型分析

#### `/codex` - 多 AI 第二意见 (v1.0.0)

**角色**: OpenAI Codex CLI 封装
**用途**: 来自完全不同 AI 的独立审查

**三种模式**:

| 模式 | 说明 |
|------|------|
| review | 通过/失败门控 - 标记关键问题 [P1] |
| challenge | 对抗模式 - 尝试攻破你的代码 |
| consult | 开放对话，支持会话连续性 |

**跨模型分析**: 当 `/review` (Claude) 和 `/codex` (OpenAI) 同时运行时，显示重叠 + 各自独有发现
**触发词**: "codex review", "second opinion", "adversarial challenge"

---

### 3.7 安全与控制技能

#### `/careful` - 安全警告 (v0.1.0)

**角色**: Safety Guardian
**用途**: 在执行危险命令前发出警告

**保护的命令**:
- `rm -rf` / `rm -r` / `rm --recursive`
- `DROP TABLE` / `DROP DATABASE` / `TRUNCATE`
- `git push --force` / `-f`
- `git reset --hard`
- `git checkout .` / `git restore .`
- `kubectl delete`
- `docker rm -f` / `docker system prune`

**白名单例外** (不警告):
- `rm -rf node_modules`, `.next`, `dist`, `__pycache__`, `.cache`, `build`, `.turbo`, `coverage`

**Hook 类型**: PreToolUse on Bash
**触发词**: "be careful", "safety mode", "prod mode"

---

#### `/freeze` - 编辑锁定 (v0.1.0)

**角色**: Scope Lock
**用途**: 将文件编辑限制在一个目录内

**机制**: 硬阻止 (非警告) Edit/Write 超出边界的操作
**状态文件**: `~/.gstack/freeze-dir.txt`
**触发词**: "freeze", "restrict edits", "lock down edits"

---

#### `/guard` - 完全安全 (v0.1.0)

**角色**: Maximum Safety
**用途**: 一键组合 `/careful` + `/freeze`
**使用场景**: 生产环境操作、线上系统调试
**触发词**: "guard mode", "full safety", "maximum safety"

---

#### `/unfreeze` - 解锁 (v0.1.0)

**角色**: Release Lock
**用途**: 清除 `/freeze` 设定的边界
**操作**: 删除 `~/.gstack/freeze-dir.txt`
**触发词**: "unfreeze", "remove freeze", "unlock edits"

---

#### `/gstack-upgrade` - 自我更新 (v1.1.0)

**角色**: Version Manager
**用途**: 升级 gstack 到最新版

**特性**:
- 自动检测安装类型 (global-git, local-git, vendored, vendored-global)
- 自动升级选项
- 渐进式延迟提醒 (24h → 48h → 1 周)
- 显示更新日志
- 失败时备份 + 回滚

**触发词**: "upgrade gstack", "get latest version"

---

## 四、完整工作流示例

### 4.1 从创意到发布的标准流程

```
/office-hours          → 产品创意验证
    ↓
/plan-ceo-review       → 战略层面评审
    ↓
/plan-eng-review       → 架构锁定
    ↓
/plan-design-review    → 设计审计
    ↓
/design-consultation   → 设计系统构建
    ↓
[编码实现]
    ↓
/review                → 代码审查 (Claude)
/codex                 → 第二意见 (OpenAI)
    ↓
/qa                    → 测试 + 修复
    ↓
/design-review         → 视觉审计 + 修复
    ↓
/ship                  → 发布 (自动调用 /document-release)
    ↓
/retro                 → 周回顾
```

### 4.2 调试流程

```
发现 Bug
    ↓
/careful               → 开启安全模式
    ↓
/freeze [dir]          → 锁定编辑范围
    ↓
/investigate           → 根因分析 (四阶段)
    ↓
修复
    ↓
/qa                    → 验证修复
    ↓
/unfreeze              → 解除锁定
    ↓
/ship                  → 发布修复
```

### 4.3 生产环境操作

```
/guard                 → 组合启用 careful + freeze
    ↓
操作生产系统
    ↓
/unfreeze              → 完成后解除
```

---

## 五、浏览器命令速查表

### 5.1 基础导航

```bash
$B goto https://example.com       # 访问 URL
$B back                           # 后退
$B forward                        # 前进
$B reload                         # 刷新
$B url                            # 获取当前 URL
```

### 5.2 页面快照与交互

```bash
$B snapshot                       # 基础快照
$B snapshot -i                    # 交互式 (显示 @e ref)
$B snapshot -d                    # Diff 模式 (与上次比较)
$B snapshot -a                    # 标注模式
$B snapshot -C                    # 光标交互 (显示 @c ref)

$B click @e3                      # 点击元素
$B fill @e5 "hello world"         # 填充输入框
$B select @e7 "option1"           # 下拉选择
$B hover @e2                      # 悬停
$B scroll down 500                # 滚动
$B wait @e4                       # 等待元素出现
```

### 5.3 数据读取

```bash
$B text @e1                       # 获取元素文本
$B html @e1                       # 获取元素 HTML
$B links                          # 获取所有链接
$B forms                          # 获取所有表单
$B accessibility                  # 无障碍树
```

### 5.4 检查与调试

```bash
$B js "document.title"            # 执行 JavaScript
$B console                        # 控制台日志
$B network                        # 网络请求
$B cookies                        # Cookie 列表
$B storage                        # localStorage/sessionStorage
$B perf                           # 性能指标
```

### 5.5 视觉捕获

```bash
$B screenshot                     # 全页截图
$B screenshot --viewport          # 视口截图
$B screenshot @e1                 # 元素截图
$B responsive                     # 多设备响应式预览
$B pdf                            # 导出 PDF
$B diff url1 url2                 # 两个 URL 视觉对比
```

### 5.6 认证与交接

```bash
$B cookie-import-browser          # 从浏览器导入 Cookie
$B handoff "Stuck on CAPTCHA"     # 交接给可见浏览器 (人工处理)
$B resume                         # 人工处理完后恢复无头模式
```

---

## 六、配置与遥测

### 6.1 配置系统

**配置文件**: `~/.gstack/config.yaml`

```bash
gstack-config set KEY VALUE       # 设置配置
gstack-config get KEY             # 读取配置
```

| 配置项 | 说明 | 值 |
|--------|------|----|
| `telemetry` | 遥测模式 | off / anonymous / community |
| `proactive` | 主动技能建议 | true / false |
| `auto_upgrade` | 自动更新 | true / false |
| `update_check` | 版本检查 | true / false |
| `gstack_contributor` | 贡献者模式 | true / false |

### 6.2 遥测系统 (隐私优先)

**默认关闭**，首次运行时询问用户：

| 模式 | 收集内容 |
|------|----------|
| Community | 技能名、耗时、成功/失败、版本、OS、设备 ID |
| Anonymous | 仅计数器 (无唯一 ID) |
| Off | 不发送任何数据 |

**绝不收集**: 代码、文件路径、仓库名、分支名、提示词、用户生成内容

**本地分析**: `~/.gstack/analytics/skill-usage.jsonl` (始终可用)

```bash
gstack-analytics                  # 个人统计面板
gstack-community-dashboard        # 社区脉搏
```

### 6.3 会话管理

- 会话跟踪: `~/.gstack/sessions/$PPID`
- 活跃判定: 最近 120 分钟内有修改
- **ELI16 模式**: 3+ 活跃会话时，每次提问附带项目/分支上下文，防止窗口混淆

---

## 七、测试体系

### 7.1 三层测试

| 层级 | 命令 | 成本 | 耗时 | 内容 |
|------|------|------|------|------|
| 1 - 静态 | `bun test` | 免费 | <5s | 命令验证、快照标志、SKILL.md 正确性 |
| 2 - E2E | `bun run test:e2e` | ~$3.85 | ~20min | 通过 `claude -p` 全技能执行 |
| 3 - LLM 评审 | `bun run test:evals` | ~$0.15 | ~30s | Sonnet 对文档清晰/完整/可操作性打分 |

### 7.2 基于 Diff 的测试选择

- 每个测试声明文件依赖 (`test/helpers/touchfiles.ts`)
- 仅运行受变更影响的测试
- `EVALS_ALL=1` 强制运行全部
- `eval:select` 预览将运行的测试

### 7.3 可观测性

```
~/.gstack-dev/
├── e2e-live.json                   # 当前测试状态
├── evals/_partial-e2e.json         # 已完成测试 (survive kill)
└── e2e-runs/{runId}/
    ├── progress.log                # 追加式文本日志
    ├── {test}.ndjson               # 原始 claude -p 输出
    └── {test}-failure.json         # 诊断数据
```

---

## 八、开发者指南

### 8.1 开发模式设置

```bash
git clone https://github.com/garrytan/gstack.git
cd gstack
bun install
bin/dev-setup              # 符号链接到 .claude/skills/gstack
# 直接编辑 SKILL.md，在 Claude Code 中测试
bin/dev-teardown           # 恢复全局安装
```

### 8.2 构建系统

```bash
bun run build              # 完整构建 (模板 + 二进制)
bun run gen:skill-docs     # 仅重新生成 SKILL.md
bun run dev <cmd>          # 开发模式测试 CLI
bun run server             # 直接运行服务器
bun run skill:check        # 技能健康面板
bun run dev:skill          # 监视模式: 自动重生成 + 验证
```

### 8.3 模板系统

**输入**: `SKILL.md.tmpl` (人工撰写的模板 + 占位符)
**处理**: `gen-skill-docs.ts` 读取源码元数据
**输出**: `SKILL.md` (自动生成，提交到 Git)

| 占位符 | 来源 | 生成内容 |
|--------|------|----------|
| `{{COMMAND_REFERENCE}}` | commands.ts | 分类命令表 |
| `{{SNAPSHOT_FLAGS}}` | snapshot.ts | 标志参考 |
| `{{PREAMBLE}}` | gen-skill-docs.ts | 更新检查、会话追踪 |
| `{{BROWSE_SETUP}}` | gen-skill-docs.ts | 二进制发现 + 设置 |
| `{{BASE_BRANCH_DETECT}}` | gen-skill-docs.ts | 动态基础分支检测 |
| `{{QA_METHODOLOGY}}` | gen-skill-docs.ts | QA 方法论 |
| `{{DESIGN_METHODOLOGY}}` | gen-skill-docs.ts | 设计审计方法论 |
| `{{TEST_BOOTSTRAP}}` | gen-skill-docs.ts | 测试框架检测 |

### 8.4 项目目录结构

```
gstack/
├── browse/              # 无头浏览器 CLI (Playwright + Bun)
│   ├── src/
│   │   ├── commands.ts  # 命令注册中心 (唯一真实来源)
│   │   ├── snapshot.ts  # Ref 系统 + 无障碍
│   │   ├── server.ts    # Bun HTTP 服务器
│   │   ├── browser-manager.ts  # Chromium 生命周期
│   │   └── buffers.ts   # 环形缓冲区 (日志)
│   └── dist/            # 编译后的二进制
├── scripts/             # 构建工具
│   ├── gen-skill-docs.ts
│   ├── skill-check.ts
│   └── eval-*.ts
├── test/                # 技能验证 + 评估测试
├── bin/                 # 可执行脚本
│   ├── gstack-config
│   ├── gstack-analytics
│   └── gstack-update-check
├── supabase/            # 遥测后端 (可选)
├── docs/                # 用户文档
├── [21个技能目录]/       # 每个含 SKILL.md
├── SKILL.md.tmpl        # 根技能模板
├── ARCHITECTURE.md      # 系统设计
├── BROWSER.md           # 浏览器参考
└── package.json
```

---

## 九、关键设计决策

### 9.1 为什么用 Markdown 定义技能而不用代码？

- Claude Code 在技能加载时读取 SKILL.md，无需构建步骤
- CI 可通过 `--dry-run` + `git diff --exit-code` 验证新鲜度
- Git blame 可追踪命令添加/移除时间

### 9.2 为什么生成的 SKILL.md 提交到 Git？

- 运行时无法执行构建步骤
- 保证版本一致性
- 便于审查变更

### 9.3 平台无关设计原则

技能绝不硬编码框架特定模式：
1. 先读 CLAUDE.md 获取项目配置 (测试命令等)
2. 缺失则用 AskUserQuestion 让用户告知
3. 将答案持久化到 CLAUDE.md 供下次使用

---

## 十、路线图 (TODOS.md)

### 浏览器增强
- 将服务器打包到二进制中
- Sessions: 隔离的浏览器实例
- 视频录制
- 状态持久化
- Auth vault: 加密凭证存储
- Iframe 支持
- 语义定位器 (`find role/label/text/placeholder/testid`)
- 设备预设: 移动端/平板模拟
- 网络 Mock: 拦截/阻止/模拟请求

### 技能改进
- Greptile 集成: 用于 `/review` 和 `/investigate` 的代码搜索
- 计划中的多 Agent 工作流: 并发技能执行

### 基础设施
- Conductor 工作区: 多会话并行 (10-15 个 sprint)
- 跨模型分析面板: `/review` + `/codex` 比较

---

## 十一、与其他工具的对比

| 特性 | gstack | 原生 Claude Code | Cursor |
|------|--------|------------------|--------|
| 专业化 Agent 数 | 21 | 0 | 0 |
| 真实浏览器测试 | 持久化 Chromium | 无 | 无 |
| 跨模型审查 | Claude + Codex | 仅 Claude | 多模型但无结构化对比 |
| 安全防护 | 三层 (careful/freeze/guard) | 基础权限 | 基础权限 |
| 完整工作流 | 创意→发布→回顾 | 需手动组合 | 需手动组合 |
| Cookie 导入 | 5 种浏览器 | 无 | 无 |
| CAPTCHA 交接 | handoff/resume | 无 | 无 |

---

## 十二、快速开始

### 安装

```bash
# Claude Code 全局安装
git clone https://github.com/garrytan/gstack.git ~/.claude/skills/gstack
cd ~/.claude/skills/gstack && bun install && bun run build
```

### 首次使用

```bash
# 在 Claude Code 中:
/office-hours             # 开始头脑风暴
/qa                       # 测试你的应用
/review                   # 审查代码
/ship                     # 发布
```

### 常用命令速记

| 你想做什么 | 使用技能 |
|-----------|----------|
| 验证产品想法 | `/office-hours` |
| 战略评审 | `/plan-ceo-review` |
| 锁定架构 | `/plan-eng-review` |
| 设计评审 | `/plan-design-review` |
| 建设计系统 | `/design-consultation` |
| 调试 Bug | `/investigate` |
| 测试 + 修复 | `/qa` |
| 仅测试报告 | `/qa-only` |
| 代码审查 | `/review` |
| 第二意见 | `/codex` |
| 视觉审计 | `/design-review` |
| 发布 | `/ship` |
| 更新文档 | `/document-release` |
| 周回顾 | `/retro` |
| 安全模式 | `/careful` |
| 锁定编辑 | `/freeze [dir]` |
| 最大安全 | `/guard` |
| 解锁 | `/unfreeze` |
| 升级 gstack | `/gstack-upgrade` |
