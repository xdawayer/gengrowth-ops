# inbox/ — 你唯一需要写文件的地方

所有内容(文章、任务卡、SOP)都先落在这里,机器人自动分拣到对应目录。

> **一句话规则**:**只用模板新建,只写到 inbox/**。其它目录(docs/、内容资产/、每日日报/ 等)是从 wiki 同步的,直接改会被覆盖。

---

## 标准工作流(以"写一篇文章"为例)

```
┌─────────────────────────────────────────────────────────────┐
│  1. 打开 Obsidian,定位到 gengrowth-ops vault                │
│                          ↓                                  │
│  2. Cmd+P → 输入 "Templater: Create new note from template" │
│     (或绑定快捷键 Cmd+Alt+N 一键唤起)                       │
│                          ↓                                  │
│  3. 在弹窗里选 "草稿-内容草稿"                               │
│                          ↓                                  │
│  4. 输入文章标题(如:"AI 出海 SEO 指南")                  │
│                          ↓                                  │
│  5. 选作者(Lynne / wzb / seo-operator / social-operator)  │
│                          ↓                                  │
│  6. 模板自动生成到 inbox/,frontmatter 已填好               │
│     - title / date / author / target / tags 全自动           │
│                          ↓                                  │
│  7. 在文件正文写内容(目标、正文、引用等)                  │
│                          ↓                                  │
│  8. 按 F5 提交(Obsidian Git 插件:Commit + Push)          │
│                          ↓                                  │
│  9. 机器人读 frontmatter 的 target 字段,自动搬到目标目录  │
│     - target: inbox/drafts/  → 草稿区                       │
│     - target: docs/03-marketing/  → 营销文档(走 PR 审批)  │
│     - target: task-collab/tasks/  → 任务卡                  │
└─────────────────────────────────────────────────────────────┘
```

---

## 可用模板速查

| 模板 | 用途 | 落地位置(target) | 是否需要审批 |
|---|---|---|---|
| **草稿-内容草稿** | 写文章、内容草稿 | `inbox/drafts/` | 否,直接进草稿区 |
| **任务卡** | 派发/认领任务 | `task-collab/tasks/` | 否 |
| **SOP-更新** | 写一条标准操作流程 | `docs/03-marketing/` | **是**,会自动开 PR 等 Lynne 审 |

挑模板的判断:
- 还没成形的想法 / 在写但没发的稿子 → **草稿-内容草稿**
- 要别人做的事(给自己也行) → **任务卡**
- 沉淀方法论、流程、规范 → **SOP-更新**

---

## 第一次使用?先做这 3 件事

1. **启用 Templater 插件**:Obsidian → 设置 → 第三方插件 → 关闭安全模式 → 浏览 → 搜 "Templater" → 安装并启用
2. **配置模板目录**:Templater 设置 → Template folder location → 填 `templates`
3. **(可选)绑定快捷键**:设置 → 快捷键 → 搜 "Templater: Create new note from template" → 绑 `Cmd+Alt+N`(Mac)或 `Ctrl+Alt+N`(Win)

完成后,在任何位置按快捷键就能弹出模板选择器,不需要先切到 inbox/ 再操作。

---

## 常见问题

| 现象 | 原因 / 解决 |
|---|---|
| 模板里 `<% title %>` 没被替换,显示原文 | Templater 没启用,或者你直接打开的是 templates/ 下的模板文件本身。要走"从模板新建"流程,而不是复制模板 |
| 弹窗里看不到模板列表 | Templater 设置里 Template folder location 没填 `templates` |
| 按 F5 没反应 | Obsidian Git 插件没启用,或本地有未解决的冲突 |
| 文件没被搬走,一直留在 inbox/ | 检查 frontmatter 的 `target:` 字段是不是被你误删了 |
| 提交后报冲突 | 截图发 wzb,**不要强推** |

---

## 不要做的事

- ❌ 不要直接在 `docs/`、`✍️ 内容资产/`、`每日日报/` 等同步目录里新建/修改文件
- ❌ 不要手动改 frontmatter 的 `target:` 字段去绕过审批
- ❌ 不要复制模板文件到 inbox/(那样 `<% %>` 不会被执行)
- ❌ 不要把不该入库的东西(密码、个人笔记、本地配置)写进 inbox/
