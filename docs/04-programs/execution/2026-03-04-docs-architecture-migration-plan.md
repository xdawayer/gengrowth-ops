---
title: Docs Architecture Migration Implementation Plan
date: 2026-03-04
updated: 2026-03-03
type: plan
tags:
  - migration
  - docs-architecture
  - execution
aliases:
  - 文档迁移计划
  - docs-migration-plan
---

# Docs Architecture Migration Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** 将 `gengrowth-wiki` 的正式文档迁移到以 `docs/` 为唯一入口的新架构，并补齐营销执行层文档。

**Architecture:** 先创建新的目录骨架，再按“公司 / 产品 / 营销 / 项目 / 治理 / 共享 / 归档”分批迁移正式文档。对重复目录先保留再归档，最后统一修复路径引用和残余旧目录。

**Tech Stack:** Markdown, shell (`mkdir`, `mv`, `rg`, `sed`, `find`), Obsidian vault structure

---

### Task 1: Create the New Docs Directory Skeleton

**Files:**
- Create: `docs/01-company/business-plan/`
- Create: `docs/01-company/strategy/`
- Create: `docs/01-company/org/`
- Create: `docs/02-product/01-prd/`
- Create: `docs/02-product/02-spec/`
- Create: `docs/02-product/03-design/`
- Create: `docs/02-product/04-reviews/`
- Create: `docs/02-product/05-framework/`
- Create: `docs/03-marketing/01-strategy/`
- Create: `docs/03-marketing/02-social-media/`
- Create: `docs/03-marketing/03-seo/`
- Create: `docs/03-marketing/04-content/`
- Create: `docs/03-marketing/05-campaigns/`
- Create: `docs/04-programs/planning/`
- Create: `docs/04-programs/milestones/`
- Create: `docs/04-programs/execution/`
- Create: `docs/05-governance/account-access/`
- Create: `docs/05-governance/client-collaboration/`
- Create: `docs/05-governance/contracts/`
- Create: `docs/05-governance/data-governance/`
- Create: `docs/06-shared/glossary/`
- Create: `docs/06-shared/templates/`
- Create: `docs/06-shared/rules/`
- Create: `docs/90-archive/`

**Step 1: Create directories**

Run:

```bash
mkdir -p \
  'docs/01-company/business-plan' \
  'docs/01-company/strategy' \
  'docs/01-company/org' \
  'docs/02-product/01-prd' \
  'docs/02-product/02-spec' \
  'docs/02-product/03-design' \
  'docs/02-product/04-reviews' \
  'docs/02-product/05-framework' \
  'docs/03-marketing/01-strategy' \
  'docs/03-marketing/02-social-media' \
  'docs/03-marketing/03-seo' \
  'docs/03-marketing/04-content' \
  'docs/03-marketing/05-campaigns' \
  'docs/04-programs/planning' \
  'docs/04-programs/milestones' \
  'docs/04-programs/execution' \
  'docs/05-governance/account-access' \
  'docs/05-governance/client-collaboration' \
  'docs/05-governance/contracts' \
  'docs/05-governance/data-governance' \
  'docs/06-shared/glossary' \
  'docs/06-shared/templates' \
  'docs/06-shared/rules' \
  'docs/90-archive'
```

**Step 2: Verify directories**

Run:

```bash
find 'docs' -maxdepth 2 -type d | sort
```

Expected: new top-level and second-level directories appear.

### Task 2: Move Company, Program, and Marketing Core Documents

**Files:**
- Modify/Move: `GenGrowth商业计划书.md`
- Modify/Move: `项目规划.md`
- Modify/Move: `GenGrowth整体营销框架/GenGrowth整体营销框架.md`

**Step 1: Move core documents**

Run:

```bash
mv 'GenGrowth商业计划书.md' 'docs/01-company/business-plan/GenGrowth商业计划书.md'
mv '项目规划.md' 'docs/04-programs/planning/项目规划.md'
mv 'GenGrowth整体营销框架/GenGrowth整体营销框架.md' 'docs/03-marketing/01-strategy/GenGrowth整体营销框架.md'
```

**Step 2: Verify moved files**

Run:

```bash
ls -1 'docs/01-company/business-plan' 'docs/04-programs/planning' 'docs/03-marketing/01-strategy'
```

Expected: all three files exist in new locations.

### Task 3: Move Existing Product Documents into the New Product Structure

**Files:**
- Modify/Move: `docs/prd/*`
- Modify/Move: `docs/specs/SPEC.md`
- Modify/Move: `docs/reviews/*`
- Modify/Move: `docs/plans/2026-03-04-gengrowth-website-design.md`

**Step 1: Move PRD, SPEC, review, and design docs**

Run:

```bash
mv 'docs/prd/'* 'docs/02-product/01-prd/'
mv 'docs/specs/SPEC.md' 'docs/02-product/02-spec/SPEC.md'
mv 'docs/reviews/'* 'docs/02-product/04-reviews/'
mv 'docs/plans/2026-03-04-gengrowth-website-design.md' 'docs/02-product/03-design/2026-03-04-gengrowth-website-design.md'
```

**Step 2: Verify product structure**

Run:

```bash
find 'docs/02-product' -maxdepth 2 -type f | sort
```

Expected: PRD versions, SPEC, review, and design doc are present.

### Task 4: Move Governance Documents into Governance Structure

**Files:**
- Modify/Move: `docs/plans/2026-03-04-account-governance-data-design.md`
- Modify/Move: `docs/plans/2026-03-04-client-data-authorization-terms.md`

**Step 1: Move governance docs**

Run:

```bash
mv 'docs/plans/2026-03-04-account-governance-data-design.md' 'docs/05-governance/account-access/2026-03-04-account-governance-data-design.md'
mv 'docs/plans/2026-03-04-client-data-authorization-terms.md' 'docs/05-governance/contracts/2026-03-04-client-data-authorization-terms.md'
```

**Step 2: Verify governance structure**

Run:

```bash
find 'docs/05-governance' -maxdepth 2 -type f | sort
```

Expected: governance docs appear in new folders.

### Task 5: Consolidate Duplicate Product Framework Content

**Files:**
- Read: `GenGrowth产品框架/GenGrowth产品框架草稿.md`
- Read: `🧩 GenGrowth产品框架/GenGrowth产品框架草稿.md`
- Modify/Move: one chosen canonical file into `docs/02-product/05-framework/`
- Modify/Move: duplicate into `docs/90-archive/`

**Step 1: Compare duplicate files**

Run:

```bash
diff -u 'GenGrowth产品框架/GenGrowth产品框架草稿.md' '🧩 GenGrowth产品框架/GenGrowth产品框架草稿.md' || true
```

Expected: understand whether files are identical or which one is newer.

**Step 2: Select canonical version and move/archive**

Run one of:

```bash
mv 'GenGrowth产品框架/GenGrowth产品框架草稿.md' 'docs/02-product/05-framework/GenGrowth产品框架草稿.md'
mv '🧩 GenGrowth产品框架/GenGrowth产品框架草稿.md' 'docs/90-archive/GenGrowth产品框架草稿-duplicate.md'
```

or the reverse depending on comparison result.

**Step 3: Verify only one active framework remains**

Run:

```bash
find 'docs/02-product/05-framework' 'docs/90-archive' -maxdepth 1 -type f | sort
```

Expected: one active framework file, one archived duplicate.

### Task 6: Create Social Media and SEO Operations Documents

**Files:**
- Create: `docs/03-marketing/02-social-media/social-media-operations.md`
- Create: `docs/03-marketing/03-seo/seo-operations.md`

**Step 1: Create social media operations doc**

Include sections:
1. 运营原则
2. 账号资产分层
3. 注册与授权流程
4. Profile 与资料规范
5. 内容节奏与角色分工
6. 审批与发布机制
7. 安全、撤权与交接
8. 周复盘模板

**Step 2: Create SEO operations doc**

Include sections:
1. SEO 运营目标与边界
2. 社媒测品转 SEO 固盘规则
3. 关键词/主题池管理
4. Blog 与资产页生产 SOP
5. 内链与收录推进
6. 复盘指标与节奏
7. 与营销/产品/项目协同关系

**Step 3: Verify files exist**

Run:

```bash
ls -1 'docs/03-marketing/02-social-media' 'docs/03-marketing/03-seo'
```

Expected: both new files exist.

### Task 7: Update References Across the Vault

**Files:**
- Modify: references in moved files throughout the vault

**Step 1: Search for old paths and filenames**

Run:

```bash
rg -n "docs/prd/|docs/specs/|docs/reviews/|docs/plans/2026-03-04-gengrowth-website-design.md|项目规划.md|GenGrowth商业计划书.md|GenGrowth整体营销框架.md|2026-03-04-account-governance-data-design.md|2026-03-04-client-data-authorization-terms.md" .
```

**Step 2: Update references with exact new paths**

Use precise edits in affected files.

**Step 3: Verify no stale formal-doc references remain**

Run:

```bash
rg -n "docs/prd/|docs/specs/|docs/reviews/|docs/plans/2026-03-04-gengrowth-website-design.md" .
```

Expected: only intended archive or migration docs remain, or zero results.

### Task 8: Archive or Clean Transitional Directories

**Files:**
- Modify/Move: empty transitional directories and replaced formal-doc files

**Step 1: Inspect transitional directories**

Run:

```bash
find 'docs/prd' 'docs/specs' 'docs/reviews' 'docs/plans' -maxdepth 2
```

**Step 2: If empty, leave or archive intentionally**

Keep `docs/plans/` only for the new architecture design and migration plan in this transition.

**Step 3: Verify top-level formal-doc structure**

Run:

```bash
find 'docs' -maxdepth 3 -type f | sort
```

Expected: formal documents now appear under the new architecture.

### Task 9: Final Verification and Record Update

**Files:**
- Modify: `docs/records/lynne-wang/2026-03-04-chat-record.md`

**Step 1: Verify moved files and new docs**

Run:

```bash
find 'docs' -maxdepth 3 -type f | sort
```

**Step 2: Verify duplicate framework issue is resolved**

Run:

```bash
find . -maxdepth 2 \( -path './GenGrowth产品框架*' -o -path './🧩 GenGrowth产品框架*' \) | sort
```

Expected: no active duplicate remains outside planned archive.

**Step 3: Append the migration summary to the daily record**

Capture:
1. new architecture adopted
2. migrated files
3. new social/SEO docs added
4. duplicate content handling
5. verification commands run
