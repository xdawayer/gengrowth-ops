---
title: Docs README And Reference Implementation Plan
date: 2026-03-05
updated: 2026-03-03
type: plan
tags:
  - readme
  - docs-architecture
  - execution
aliases:
  - README补充计划
  - docs-readme-plan
---

# Docs README And Reference Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** 为新 `docs` 架构补充模块级入口说明，并为根目录剩余非正式资料建立最小治理说明。

**Architecture:** 在每个一级模块下新增一个简洁的 `README.md`，统一说明模块定位、包含/不包含内容、主要入口和维护人。同时在仓库根目录新增 `REFERENCE.md`，定义根目录保留资料的性质与使用边界。

**Tech Stack:** Markdown, shell, Obsidian vault structure

---

### Task 1: Add Module-Level READMEs

**Files:**
- Create: `docs/01-company/README.md`
- Create: `docs/02-product/README.md`
- Create: `docs/03-marketing/README.md`
- Create: `docs/04-programs/README.md`
- Create: `docs/05-governance/README.md`
- Create: `docs/06-shared/README.md`
- Create: `docs/90-archive/README.md`
- Create: `docs/records/README.md`

**Step 1: Write each README**

Each file must include:
1. 模块定位
2. 包含内容
3. 不包含内容
4. 主要入口文档
5. 主要维护人

**Step 2: Verify files exist**

Run:

```bash
find 'docs' -maxdepth 2 -name 'README.md' | sort
```

Expected: module-level README files appear.

### Task 2: Add Root Reference Guide

**Files:**
- Create: `REFERENCE.md`

**Step 1: Write root reference guide**

Include:
1. 根目录保留内容的定义
2. 哪些属于学习资料
3. 哪些属于工作台资料
4. 哪些内容不应再放到根目录
5. 如何判断一个新文档应进入 `docs/` 还是保留在根目录

**Step 2: Verify file exists**

Run:

```bash
ls -1 'REFERENCE.md'
```

Expected: file exists.

### Task 3: Verify and Record

**Files:**
- Modify: `docs/records/lynne-wang/2026-03-05-chat-record.md`

**Step 1: Verify entry files**

Run:

```bash
find 'docs' -maxdepth 2 -name 'README.md' | sort
```

and:

```bash
ls -1 'REFERENCE.md'
```

**Step 2: Append record**

Capture:
1. plan file added
2. module README files added
3. root reference file added
4. verification commands run
