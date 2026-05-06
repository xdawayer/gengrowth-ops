---
title: Vertex AI AIO 评估临时笔记
date: 2026-04-14
updated: 2026-04-14
type: note
tags:
  - vertex-ai
  - aio
  - evaluation
  - inbox
aliases:
  - vertex-ai-aio-notes
  - aio 评估临时笔记
---

Vertex AI工具，重点Vertex AI Evaluation-

| **阶段** | **Vertex AI 工具**         | **具体操作**                                          |
| ------ | ------------------------ | ------------------------------------------------- |
| **诊断** | **Model Garden**         | 调用 Gemini 1.5 Pro 分析现有网页，找出不符合 AIO 偏好的段落。         |
| **优化** | **Vertex AI Studio**     | 调试针对 AIO 优化的 System Prompt，定义内容的“引用风格”。           |
| **生产** | **Batch Prediction**     | 结合 Python SDK，将生成的优化内容批量同步到你的 CMS 或 GenGrowth 后台。 |
| **监控** | **Vertex AI Evaluation** | 建立 AIO 评分指标（如：引用率预测分数），监控内容质量波动。                  |
AIO审计标准参考
# Role
你是一位资深的 AIO (AI Optimization) 专家，精通 Google AI Overviews、Perplexity 等生成式引擎的抓取算法。你的任务是审计营销文案，评估其被 AI 引用为“核心答案”的概率，并提供改进建议。

# Audit Criteria (审计标准)
1. **结论先行 (Answer-First):** 关键问题是否在段落首句得到回答？
2. **结构化程度 (Structure):** 是否使用了列表、表格或清晰的小标题？
3. **事实密度 (Entity Density):** 是否包含具体的品牌词、数据、专有名词或唯一事实？
4. **语言简洁度 (Conciseness):** 是否剔除了无意义的营销修饰词（如 "cutting-edge", "revolutionary"）？
5. **权威性证明 (E-E-A-T):** 是否有明确的观点、案例支持或专家视角的语气？

# Workflow
1. **AIO 评分:** 给出 0-100 的分值（80分以上为优）。
2. **抓取风险点:** 指出文中哪些部分太啰嗦或太模糊，导致 AI 难以提取摘要。
3. **优化建议:** 提供具体的改写方案，重点在于优化“摘要位 (Snippet Space)”。
4. **模拟摘要:** 展示如果 Google AI 引用此文，会生成什么样的总结。

# Output Format
请按以下格式输出：
### 📊 AIO 潜力评分：[分数]
### ⚠️ 抓取障碍点：
* [点1]
### ✍️ AIO 优化建议：
* **原始:** [原句]
* **优化后:** [符合 AI 抓取逻辑的句子]
### 🤖 模拟 AI 摘要预览：
> [生成的 100 字以内摘要]


### 总结对比表

| **对比维度**   | **直接用 Gemini 1.5 Pro 写 Prompt 评估** | **使用 Vertex AI Evaluation**       |
| ---------- | ---------------------------------- | --------------------------------- |
| **底层引擎**   | LLM-as-a-judge (一样)                | LLM-as-a-judge (一样)               |
| **适用场景**   | **单次、实时的小规模反馈**                    | **大规模、系统性的版本回归测试**                |
| **开发成本**   | 低（改改 Prompt 就能跑）                   | 中等（需要对接 Evaluation SDK 和 Dataset） |
| **防作弊/偏差** | 无，需自己写逻辑处理位置偏差                     | 内置 AutoSxS，自动消除裁判偏差               |
| **历史数据追踪** | 无，只是返回 JSON，需自己建库                  | 自动沉淀指标，提供可视化看板                    |

#### A. LLM-as-a-Judge (让 AI 当裁判)

你不需要人工去给成百上千篇营销文案打分。你可以指定一个高阶模型（比如 Gemini 1.5 Pro）作为“裁判模型”，去批量评估低成本模型（比如 Gemini Flash）生成的文案。

#### B. 自定义评估维度 (Custom Rubrics)

这是对 GenGrowth 最有价值的功能。Vertex Eval 预设了流畅度、相关性、安全性等常规指标，但你完全可以**自定义 AIO 的专属指标**：

- 你可以定义一个名为 `AIO_Answer_First_Score` 的评估维度。
    
- 你可以定义一个 `Entity_Density` (实体密度) 的评估标准。
    
- 系统会根据你定义的标准，对你生成的营销内容进行 0-1 的精确评分，并给出扣分理由。
    

#### C. Pointwise (单点评分) 与 Pairwise (成对比较) 测试

- **Pointwise：** 给单篇文章打个绝对分（比如 85 分）。
    
- **Pairwise (A/B 测试)：** 假设你修改了 Claude Code 里的生成 Prompt，你不确定新 Prompt 写出来的文案是否更符合 AIO 标准。你可以让 Vertex Eval 对比“旧版文案”和“新版文案”，并判定“谁更胜一筹”，以此来验证你的优化是否有效。
    

#### D. 与自动化脚本完美契合

Vertex Eval 提供了完整的 Python SDK。你可以直接在 `audit.py` 脚本中调用 Evaluation API，它会返回一个高度结构化的评价报告。

