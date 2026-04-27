---
title: Task 协同模块
date: 2026-03-06
updated: 2026-03-06
type: framework
version: v1.0
status: active
tags:
  - task
  - collaboration
  - obsidian
  - tasks-plugin
aliases:
  - task-collab
  - 任务协同中心
---

# Task 协同模块

本目录是独立于 `docs/` 的任务协同模块，用于日常任务管理与执行跟踪。

## 目录结构

```text
task-collab/
├── README.md
├── task-board.md
├── templates/
│   └── task-template.md
└── tasks/
    └── YYYY-MM-DD-<topic>-task.md
```

## 使用规则

1. 后续每个任务描述使用 1 个独立文档，放在 `task-collab/tasks/`。
2. 文件命名使用 `YYYY-MM-DD-<topic>-task.md`。
3. 在单任务文档内保留 1 条主任务行（`- [ ] ... #task`）和验收标准。
4. 统一在 `task-collab/task-board.md` 查看聚合看板。

## 入口

- 看板入口：`task-collab/task-board.md`
- 新任务模板：`task-collab/templates/task-template.md`
- 当前任务示例：`task-collab/tasks/2026-03-06-tiktok-link-content-sync-task.md`
