---
title: Obsidian 入门设置
sources:
  - "[[K-Karpathy-LLM-Wiki]]"
  - "[[kepano-I-like-karpathys-Obsidian-setup-as-a-way-to-mitigate]]"
  - "[[Lessnoise365-我准备写一套Obsidian核心教程，]]"
  - "[[gregisenberg-howtouseobsidian+claudecodetobuilda247personaloperatingsystemand]]"
  - "[[MinLiBuilds-你们嘴巴真严啊，深度用Obsidian必用的小技巧。]]"
  - "本 vault 当前 .obsidian/community-plugins.json"
related:
  - "[[K-Karpathy-LLM-Wiki]]"
  - "[[Z-知识管理方法论]]"
  - "[[C-Claude-Code]]"
tags:
  - Obsidian
  - 知识管理
  - 入门
last_compiled: 2026-04-28
---

# Obsidian 入门设置

## 一句话

Obsidian 是一个把笔记存成 ==本地 Markdown 文件== 的笔记软件——你写的每一篇笔记都是一个 `.md` 文件，存在你自己电脑上，软件只是个"阅读器+编辑器"。这一篇带你**从零装好、能用、能同步**，跑通最少够用的设置。

> [!tip] 这篇适合谁
> - 完全没用过 Obsidian 的小白
> - 装了但只用过最基础功能、想知道"还差哪几步"的人
>
> 不讲极客玩法，只讲跑通主流程必须的东西。

---

## 为什么选 Obsidian（先理解一句话）

Obsidian 创始人 Kepano 提了一个核心理念：**File over app**——文件比软件更长寿。

| 传统笔记软件（Notion/印象笔记） | Obsidian |
|---|---|
| 笔记存在它家服务器，导出麻烦 | 笔记是你电脑上的 `.md` 文件，随时打开 |
| 软件停服 = 笔记可能没了 | 软件停了，文件还在 |
| 协作强 | 个人沉淀强 |

> [!info] 一句话类比
> Notion 像租房（功能好但东西归房东），Obsidian 像自建房（房子是你的，自己装修）。

---

## 第 1 步：装上 Obsidian

1. 去 [obsidian.md](https://obsidian.md) 下载对应系统（Mac / Windows / Linux 都有）
2. 装好打开，会让你"创建 Vault（保管库）"或"打开已有 Vault"
3. **Vault 就是一个普通文件夹**，里面所有 `.md` 文件就是你的笔记

> [!tip] Vault 放哪？
> 推荐放在 ==iCloud / OneDrive / Dropbox== 这种自动同步的文件夹里，最简单的多设备同步方案就是 0 配置完成的。
>
> 进阶方案见后面"同步"一节。

---

## 第 2 步：理解三个核心概念

只要懂这三个，你就上手了 80%：

| 概念 | 是什么 | 类比 |
|---|---|---|
| **Vault（保管库）** | 一个文件夹，装所有笔记 | 你的整个图书馆 |
| **Note（笔记）** | 一个 `.md` 文件 | 一本书 |
| **Wiki Link（双链）** | 用 `[[笔记名]]` 互相引用 | 书里指到另一本书的"参见 XXX 章" |

> [!example] 双链长这样
> 在笔记里写 `[[Obsidian 入门设置]]`，Obsidian 会自动渲染成蓝色可点击链接，点一下就跳过去。这是 Obsidian 最核心的能力——==让知识形成网络，而不是文件夹里的孤岛==。

---

## 第 3 步：调几个一定要改的默认设置

打开"设置"（左下角齿轮），按下面表格改：

| 在哪 | 改什么 | 为什么 |
|---|---|---|
| 编辑器 → 默认编辑模式 | 改成 ==Live Preview（实时预览）== | 边写边看效果，最舒服 |
| 文件与链接 → 新建笔记位置 | "在指定文件夹"（推荐 `Notes/Inbox/`） | 新笔记默认进收件箱，避免乱扔 |
| 文件与链接 → 默认链接格式 | ==Wiki link `[[]]`== | Obsidian 原生格式，最好用 |
| 文件与链接 → 自动更新内部链接 | 打开 | 改文件名时链接不会断 |
| 外观 → 主题 | 装一个 Minimal 或保持默认 | 看起来舒服优先 |
| 快捷键 → 命令面板 | `Cmd/Ctrl + P` | 所有功能都能搜出来调用 |

> [!warning] 一个新手常踩的坑
> 默认链接格式如果是 "相对路径"，重命名/移动文件时容易断。**一定改成 Wiki link**。

---

## 第 4 步：装这几个核心插件（够用就行）

打开"设置 → 第三方插件 → 关闭安全模式 → 浏览社区插件"。

下面这几个是**几乎所有人都会装的**，你这个 vault 里也都装了：

| 插件 | 干啥用的 | 必要程度 |
|---|---|---|
| **Obsidian Git** | 自动 commit/push 到 GitHub，备份+多设备同步 | ⭐⭐⭐ 必装 |
| **Templater** | 笔记模板（比如每天日记自动带日期/标题） | ⭐⭐⭐ 必装 |
| **Dataview** | 把笔记当数据库查询（比如"列出本月所有读书笔记"） | ⭐⭐ 强推 |
| **Calendar** | 侧边栏日历，点日期跳到当天日记 | ⭐⭐ 强推 |
| **Excalidraw** | 手绘风格画图，思维导图/草图 | ⭐⭐ 看需求 |
| **Outliner** | 列表操作增强（`Tab/Shift+Tab` 升降级、整块拖拽） | ⭐⭐ 推荐 |
| **Custom Attachment Location** | 图片/附件统一放到指定文件夹（不要散落） | ⭐⭐ 推荐 |
| **Copilot** 或 **Claudian** | 在 Obsidian 里直接和 AI 对话 | ⭐⭐ 看需求 |

> [!tip] 选择困难症的话
> 先装前 4 个（Git / Templater / Dataview / Calendar），用一段时间再按需加。==插件装太多反而会拖慢启动==。

---

## 第 5 步：搭一个最简文件夹结构

新手最容易卡在"我的笔记该怎么分类"。给你一个**经过验证的极简结构**（参考 [[K-Karpathy-LLM-Wiki|Karpathy 的 LLM Wiki 五层架构]]）：

```
你的 Vault/
├── Notes/          ← 收件箱：新东西先丢这（剪藏、想法、对话）
│   ├── Inbox/      ← 碎片想法
│   ├── Clippings/  ← 网页剪藏
│   └── Conversation/ ← AI 对话
├── Knowledge/      ← 知识库：方法论、概念（整理后的"为什么"）
├── Tech/           ← 工具箱：教程、工具用法（整理后的"怎么做"）
├── Life/           ← 行动区：投资、健康、计划
└── Writing/        ← 产出区：要发的文章、报告
```

> [!info] 一个口诀
> ==**一个入口（Notes/），多个终点。**== 所有新内容先进 Notes/，定期挪到合适的文件夹。这样你永远不用纠结"这条想法到底放哪"，先扔再说。

不想分这么细？最最最简版只要两个文件夹：

```
Inbox/    ← 没整理的
Garden/   ← 整理过的
```

---

## 第 6 步：解决同步（多设备最大坑）

Obsidian 本身**不带云同步**（官方付费的 Obsidian Sync 也行，但要钱）。免费方案：

| 方案 | 难度 | 适合谁 |
|---|---|---|
| 把 Vault 放 iCloud / OneDrive / Dropbox | ⭐ 最简单 | 只用 1-2 台设备、不在意冲突 |
| **Obsidian Git 插件**（推荐） | ⭐⭐ 中等 | 想要版本历史 + 多设备 + 永久免费 |
| Obsidian Sync（官方付费） | ⭐ 装好就用 | 有钱、想省事、要手机端 |
| Syncthing | ⭐⭐⭐ 进阶 | 不想上云的极客 |

> [!tip] 推荐组合
> **Obsidian Git** + 一个 GitHub 私有仓库。装好后会自动 commit + push，每次改完笔记几分钟内就备份到云上。换设备 `git clone` 一下就完整搬过去。
>
> 你这个 vault 已经在用这套方案。

> [!warning] iCloud / Dropbox 的坑
> 多设备同时编辑容易产生冲突文件（`xxx (conflicted copy).md`）。用 Git 方案虽然多一步学习，但版本历史救过命无数次。

---

## 第 7 步：第一次跑通的练习

跟着做一遍，10 分钟内你就"上手"了：

1. **新建一篇笔记**：`Cmd/Ctrl + N`，标题写"我的第一篇笔记"
2. **写点东西**：随便写，试一下 `**粗体**`、`# 标题`、`- 列表`
3. **加个双链**：写 `[[Obsidian 入门设置]]`，看它变蓝
4. **加个标签**：写 `#我的标签`
5. **打开命令面板**：`Cmd/Ctrl + P`，搜"Daily"，试试创建当天日记
6. **打开图谱视图**：`Cmd/Ctrl + G`（或左侧栏图标），看你的笔记网络

跑通这 6 步，你已经会用 Obsidian 了。

---

## 进阶：两个 Vault 策略（来自 Obsidian CEO）

> [!info] 进阶概念，可以先跳过
> 这是 [[kepano-I-like-karpathys-Obsidian-setup-as-a-way-to-mitigate|kepano 的建议]]，等你深度使用后再考虑。

如果你之后会让 AI Agent 大量帮你处理笔记（如 Karpathy 那套 LLM Wiki 流程），可以拆成两个 Vault：

| Vault | 用途 | 信噪比 |
|---|---|---|
| **个人主 Vault** | 你自己写、自己读 | 高（精挑细选） |
| **Messy Vault** | 给 AI Agent 折腾、自动化任务 | 低（大量原始数据） |

这样能避免 AI 生成的内容污染你精心整理的主库。

---

## 常见问题

> [!example] Q：和 Notion 比，怎么选？
> 个人沉淀、长期知识库 → Obsidian。团队协作、项目管理 → Notion。两者并不冲突。

> [!example] Q：手机能用吗？
> 能。官方有 iOS / Android App。同步用 Obsidian Sync（付费）或自己搭 Git/iCloud 方案。

> [!example] Q：Markdown 不会写怎么办？
> Live Preview 模式下边写边渲染，几乎不需要"学"语法。常用的就 `#` 标题、`**` 粗体、`-` 列表、`[[]]` 双链——一周就熟了。

> [!example] Q：要不要花钱买 Obsidian？
> 个人用 ==免费==。商业用要买 License。Sync 和 Publish 是付费服务，可选不可选。

---

## 接下来可以看什么

按你的兴趣分支：

- **想搞一套 AI 知识库工作流** → [[K-Karpathy-LLM-Wiki]]（用 AI Agent 自动整理笔记的范式）
- **想理解知识管理的方法论** → [[Z-知识管理方法论]]
- **想让 Claude Code 在 Vault 里跑自动化** → [[C-Claude-Code]]
- **想看深度玩家的小技巧** → [[MinLiBuilds-你们嘴巴真严啊，深度用Obsidian必用的小技巧。]]（图床、内容搬运到公众号）

---

## 相关阅读

- [[K-Karpathy-LLM-Wiki]] — 把 Obsidian 升级成 "AI 编译的知识库"
- [[Z-知识管理方法论]] — 笔记之外的更广方法论
- [[C-Claude-Code]] — 在 Vault 里跑 AI Agent 的工具
