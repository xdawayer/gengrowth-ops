# 入职引导

欢迎加入 GenGrowth！

## 第一步：环境准备

1. 下载并安装 [Obsidian](https://obsidian.md/)
2. 接受 GitHub 邀请（邮件中）
3. 下载 Lynne 发给你的 vault 压缩包，解压后用 Obsidian 打开

## 第二步：Obsidian 插件确认

打开 Obsidian 后，进入 设置 → 第三方插件 → 关闭"安全模式"，然后在"社区插件浏览"里安装并启用：

- **Obsidian Git** — 用来同步文件（F5 = 提交并推送）
- **Templater** — 用来一键生成文件模板

## 第三步：配置 Templater（一键新建模板）

1. 设置 → Templater → **Template folder location** 填 `templates`
2. 设置 → 快捷键，搜 `Templater: Create new note from template`
3. 点右侧 **+**，按下 `Cmd+Alt+N`（Mac）/ `Ctrl+Alt+N`（Win）绑定

## 第四步：配置 Obsidian Git（F5 一键提交并推送）

### 4.1 绑定 F5

1. 设置 → 快捷键，搜索框输入 `commit-and-sync`（新版）或 `Create backup`（老版）
   - 完整命令名：**`Obsidian Git: Commit-and-sync`**（= `git add -A && git commit && pull && push`，一步到位）
   - 老版本（2024 之前）叫 `Obsidian Git: Create backup`，功能一样
   - ⚠️ **不要**绑 `Commit all changes`（那个不会推送）或 `Create new branch`（那个是建分支）
2. 点该命令右侧 **+**，按下 **F5**
3. 如果提示和默认命令冲突（默认 F5 = 重新加载窗口），选 **Force** 强制覆盖
4. 绑好后该命令右侧应显示 `F5` 而不是"未设置"

### 4.2 调插件参数

设置 → Obsidian Git，按下表配置：

| 选项 | 推荐值 | 说明 |
|---|---|---|
| Commit message on auto backup/commit | `vault: {{date}}` | 自动生成 commit 信息，不用手填 |
| Vault backup interval (minutes) | `0` | 0 = 只手动提交；想自动可设 10 |
| Pull updates on startup | ✅ 开启 | 打开 Obsidian 自动拉最新 |
| Disable push | ❌ 关闭 | 别勾，否则 F5 不会推到 GitHub |
| Sync method | `merge` | 多人协作冲突更少 |

### 4.3 验证 F5 能用

1. 在 inbox/ 随便新建一个文件，写两个字
2. 按 **F5**
3. 通知栏弹出 "Committed and pushed" 即成功
4. 去 GitHub `xdawayer/gengrowth-ops` 看是否出现新文件

## 第五步：完整跑一遍

1. 按 `Cmd+Alt+N`（Mac）/ `Ctrl+Alt+N`（Win）
2. 选择"草稿-内容草稿"模板
3. 填写标题，写几行内容
4. 按 **F5** 提交
5. 去 GitHub 网页看看文件是不是出现了

## 遇到问题

| 现象 | 原因 / 解决 |
|---|---|
| 按 F5 完全没反应 | 快捷键没绑成功，回 设置 → 快捷键 重新绑 |
| 弹 "Please specify a remote" | 仓库没配 remote，找 wzb |
| 弹 "Authentication failed" | GitHub 没登录，用 GitHub Desktop 先登录一次，或配置 PAT |
| 弹 "Nothing to commit" | 你没改任何文件，属于正常 |
| Obsidian 报错"冲突" | 截图发 wzb，**不要强推** |
| 模板里 `<% title %>` 没被替换 | Templater 没启用，或直接打开了模板文件本身。要走"从模板新建"流程 |
| 其他问题 | 飞书找 Lynne |
