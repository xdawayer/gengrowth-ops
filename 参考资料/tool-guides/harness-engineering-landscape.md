---
title: Harness Engineering 全景研究
date: 2026-04-16
updated: 2026-04-16
type: reference
tags:
  - harness-engineering
  - agentic-workflow
  - ai-architecture
  - openclaw
aliases:
  - harness engineering
  - agent harness 对比
---

# Harness Engineering 全景研究

> **核心公式（行业共识）**
> `Agent = Model + Harness`
> "The model generates responses. The harness handles everything else." — DecodingAI
> "The model is commodity. The harness is moat." — Aakash Gupta

---

## 一、核心概念定义

**Parallel.ai 官方定义（最完整）：**
> "An agent harness is the software infrastructure that wraps around a large language model (LLM) or AI agent, handling everything except the model itself... the complete architectural system surrounding an LLM that manages the lifecycle of context: from intent capture through specification, compilation, execution, verification, and persistence."

**arXiv 学术定义（最精确）：**
> "the runtime orchestration layer that wraps the core reasoning loop and coordinates tool execution, context management, safety enforcement, and session persistence around it"

**Scaffolding vs Harness 的精确区分（arXiv 2603.05344）：**

| 概念 | 时序 | 职责 | 性质 |
|------|------|------|------|
| **Scaffolding（脚手架）** | 第一个 prompt 之前 | 构建 system prompt、工具 schema、注册子 Agent | 静态构建阶段 |
| **Harness（执行层）** | 第一个 prompt 之后 | 工具调度、上下文管理、安全执法、会话持久化 | 动态运行时基础设施 |

---

## 二、各平台官方来源与核心立场

### Anthropic（最系统化）

**官方文档链接：**
- [Effective harnesses for long-running agents](https://www.anthropic.com/engineering/effective-harnesses-for-long-running-agents)
- [Harness design for long-running apps](https://www.anthropic.com/engineering/harness-design-long-running-apps)
- [Managed Agents](https://www.anthropic.com/engineering/managed-agents)
- [Building Effective Agents](https://www.anthropic.com/research/building-effective-agents)

**核心原文：**
> "every component in a harness encodes an assumption about what the model can't do on its own"
> "separating the agent doing the work from the agent judging it proves to be a strong lever"
> "Harnesses encode assumptions that go stale as models improve"

**三层架构（Managed Agents）：**
```
Brain   = Claude 模型 + Harness（推理循环）
Hands   = Sandbox（工具执行隔离环境）
Session = Event Log（持久化事件日志，可回溯）
```
三层通过 `execute(name, input) → string` 标准接口解耦，任一层可独立替换。

**三 Agent 分工模式（2026 最新）：**

| Agent | 职责 |
|-------|------|
| Planner | 将简短 prompt 扩展为完整产品规格 |
| Generator | 增量实现功能 + 自我评估 |
| Evaluator | 用 Playwright 交互测试，独立质量评判（反 GAN 模式） |

---

### OpenAI（最完整生产案例）

**官方文档链接：**
- [Harness engineering: leveraging Codex](https://openai.com/index/harness-engineering/)
- [Unlocking the Codex harness](https://openai.com/index/unlocking-the-codex-harness/)

**官方定义：**
> "the emerging discipline of designing constraints, tools, feedback loops, documentation, and verification systems that guide powerful but unpredictable AI agents to produce reliable, maintainable, and scalable software outputs"

**五大设计要素：** Constraints → Tools → Feedback loops → Documentation → Verification systems

通过双向 JSON-RPC 连接 Web App、CLI、IDE、macOS App，统一入口。第一个生产提交于 2025年8月底落地空代码库。

---

### Google / Gemini（不使用"Harness"这个词）

**官方文档链接：**
- [Agents Overview | Gemini API](https://ai.google.dev/gemini-api/docs/agents)
- [Choose your agentic AI architecture components](https://docs.cloud.google.com/architecture/choose-agentic-ai-architecture-components)
- [Scion Supported Harnesses](https://googlecloudplatform.github.io/scion/supported-harnesses/)

Google 以 **ADK (Agent Development Kit)** + **Vertex AI Agent Engine** 替代 Harness 概念，重点在 8 层企业架构（Frontend → ADK → Tools → Memory → Patterns → Runtime → Models → Model Runtime），并推 Apigee API hub 做 API 治理。推荐 MCP 协议作为企业级工具集成标准。

---

### AWS AgentCore（企业合规首选）

**官方文档链接：**
- [Amazon Bedrock AgentCore Gateway](https://aws.amazon.com/blogs/machine-learning/introducing-amazon-bedrock-agentcore-gateway-transforming-enterprise-ai-agent-tool-development/)
- [AWS re:Invent 2025: Bedrock AgentCore](https://www.refactored.pro/blog/2025/12/4/aws-reinvent-2025-bedrock-agentcorethe-deterministic-guardrails-that-make-autonomous-ai-safe-for-the-enterprise)

**最大差异化：** 安全策略在 **LLM 推理循环之外**执行，实现确定性（非概率性）执法。框架无关，支持 LangChain、CrewAI 等任意框架，原生 MCP，客户 VPC 直连（无需网络对等）。

---

### Microsoft Foundry Agent Service

**官方文档链接：**
- [Introducing Microsoft Agent Framework](https://azure.microsoft.com/en-us/blog/introducing-microsoft-agent-framework/)
- [Build and scale AI agents with Microsoft Foundry](https://azure.microsoft.com/en-us/blog/microsoft-foundry-scale-innovation-on-a-modular-interoperable-and-secure-agent-stack/)
- [Multi-Agent Workflows in Foundry Agent Service](https://devblogs.microsoft.com/foundry/introducing-multi-agent-workflows-in-foundry-agent-service/)

护城河在企业生态整合：1000+ 预置工具、SharePoint/OneLake 接入自动执行 Purview 安全策略、一键发布至 M365/Teams，每次部署需 Admin Center 审批。

---

### 权威第三方

- [arXiv 2603.05344 — Building AI Coding Agents for the Terminal](https://arxiv.org/html/2603.05344v1)
- [Martin Fowler — Harness engineering for coding agent users](https://martinfowler.com/articles/exploring-gen-ai/harness-engineering.html)
- [Parallel.ai — What is an agent harness?](https://parallel.ai/articles/what-is-an-agent-harness)
- [Analytics Vidhya — Agent Frameworks vs Runtimes vs Harnesses](https://www.analyticsvidhya.com/blog/2025/12/agent-frameworks-vs-runtimes-vs-harnesses/)
- [DecodingAI — Agentic Harness Engineering](https://www.decodingai.com/p/agentic-harness-engineering)
- [Aakash Gupta — 2025 Was Agents. 2026 Is Agent Harnesses.](https://aakashgupta.medium.com/2025-was-agents-2026-is-agent-harnesses-heres-why-that-changes-everything-073e9877655e)
- [InfoQ — Anthropic Three-Agent Harness](https://www.infoq.com/news/2026/04/anthropic-three-agent-harness-ai/)
- [InfoQ — OpenAI Harness Engineering with Codex](https://www.infoq.com/news/2026/02/openai-harness-engineering-codex/)

**Martin Fowler 双控制机制：**
- **Guides（前馈控制）**：文档、规则 → 在行动前预防不良输出
- **Sensors（反馈控制）**：测试、Linter、类型检查 → 在行动后检测问题

---

## 三、各家架构核心要素对比（含优劣势）

### 3.1 要素对比总表

| 架构维度 | Anthropic | OpenAI | Google | AWS | Microsoft |
|---------|-----------|--------|--------|-----|-----------|
| 核心术语 | Agent Harness / ACI | Harness Engineering | ADK / Agent Engine | AgentCore | Foundry Agent Service |
| 多 Agent 模式 | Planner+Generator+Evaluator | 单 Agent + 验证回路 | 框架编排 | 框架无关调度 | 可视化工作流 |
| 安全执法位置 | Harness 内（模型感知） | Verification Systems | Guardrails（prompt 层） | **LLM 循环之外（确定性）** | Admin Center 审批 |
| 上下文管理 | 自动压缩 + Handoff Artifact | 声明式 prompt | Long Context | 跨会话 Memory 服务 | Managed Memory |
| 工具标准 | 自研 + MCP | JSON-RPC API | Function Calling + MCP | MCP 原生（zero-code） | 1000+ 预置 + MCP |
| 持久化 | Git + Event Log | App Server 状态 | Firestore/Cloud SQL | 托管 Memory 服务 | Azure 托管存储 |
| 多 Agent 协调 | 并行/串行 + 反 GAN | 多 Codex Agent 协作 | CrewAI / LangGraph | 框架无关调度 | 可视化工作流 + API 编排 |
| 企业护城河 | VPC 对等 + 可审计 | IDE/Web/CLI 统一 | Vertex+Apigee 治理 | VPC 直连 + 确定性安全 | M365/Teams 生态 |
| 开源程度 | 部分开源（Agent SDK） | 闭源为主（Codex） | ADK 开源 | 闭源（托管服务） | 部分开源 |
| 适合规模 | 中型团队生产 Agent | 中大型工程团队 | 中大型技术团队 | 大型企业合规场景 | 大型 Microsoft 生态企业 |

---

### 3.2 各家优劣势分析

#### Anthropic

**优势：**
- 官方文档最系统化，工程博客持续输出，是目前 Harness Engineering 的最佳学习资料
- 三 Agent 分工（Planner/Generator/Evaluator）经过生产验证，反 GAN 模式对输出质量提升效果显著
- Brain/Hands/Session 三层解耦设计优雅，架构可持续演进
- ACI（Agent-Computer Interface）概念提升了工具设计的工程化标准

**劣势：**
- 安全执法仍在 Harness 内（模型感知），不是完全确定性执法，高合规场景存在概率性风险
- Managed Agents 服务目前需要接入 Anthropic 的托管基础设施，私有化部署复杂
- 依赖 Claude 模型，模型多样性不如框架无关方案

---

#### OpenAI

**优势：**
- Codex 是迄今最完整的生产级 Harness 工程案例，工程方法论有真实落地背书
- 双向 JSON-RPC 架构使 Web/CLI/IDE/App 统一入口，开发体验统一
- 五要素框架（Constraints/Tools/Feedback/Documentation/Verification）条理清晰，适合团队规范化

**劣势：**
- Codex 高度闭源，外部难以直接复用架构，学习价值 > 复用价值
- 强绑定 OpenAI 模型生态，异构模型场景切换成本高
- 验证回路目前主要针对代码场景，泛化到其他企业场景需要额外工程

---

#### Google ADK / Gemini

**优势：**
- ADK 完全开源，可自由定制，不绑定 Google 云服务
- 与 Vertex AI、Apigee 原生集成，企业级 API 治理能力强
- Long Context 能力突出，减少分块处理的工程复杂度
- Scion CLI 工具链成熟，支持 Resume/Interject/Hooks 等高阶能力

**劣势：**
- 官方文档不使用"Harness"统一术语，概念分散，学习曲线较陡
- 企业架构 8 层设计理解成本高，不适合快速原型
- Gemini 模型在 Agent 任务稳定性上与 Claude/GPT-4o 仍有差距（截至 2026Q1）

---

#### AWS AgentCore

**优势：**
- **唯一**在 LLM 推理循环之外做确定性安全执法的主流方案，金融/医疗/法律首选
- 框架无关，LangChain、CrewAI、任意 SDK 均可接入，迁移成本低
- MCP 原生支持，zero-code 工具创建，企业已有 API 可快速接入
- VPC 直连（无需网络对等），满足金融级网络隔离要求

**劣势：**
- 完全托管，私有化部署能力弱
- AgentCore 本身没有推理能力，只是基础设施层，需要叠加模型和框架才能工作
- 相对较新（2025年10月 GA），生态成熟度和最佳实践积累不足
- 定价复杂，大规模使用成本难以预测

---

#### Microsoft Foundry Agent Service

**优势：**
- 对 Microsoft 365 生态企业来说是天然选择，Teams/SharePoint/OneLake 开箱即用
- 1000+ 预置工具减少集成工作量，企业标准场景覆盖最广
- Purview 安全策略自动应用，合规审计链路完整
- 可视化工作流编排，非技术用户可参与 Agent 设计

**劣势：**
- 强绑定 Microsoft 生态，跨云或异构环境使用成本极高
- Admin Center 审批流程增加了部署灵活性的代价，快速迭代受限
- 对非 Microsoft 技术栈企业几乎没有吸引力
- 创新节奏相对保守，功能更新依赖 Microsoft 发布周期

---

## 四、OpenClaw 对比分析

### 4.1 定位

OpenClaw 是以 **Claude Code 为执行单元**的多 Agent 编排 Harness，设计哲学最接近 Anthropic 的 Managed Agents，但更轻量，更面向开发者工作流（而非企业合规场景）。

### 4.2 架构对比

| 维度 | OpenClaw | Anthropic Managed Agents | OpenAI Codex Harness | AWS AgentCore |
|------|----------|--------------------------|---------------------|---------------|
| **执行单元** | Claude Code（完整 CLI Agent） | 通过 API 调用 Claude | GPT-5.2-Codex（专用模型） | 框架无关（任意 Agent） |
| **编排方式** | 生成式编排（Claude 写代码调用其他 Claude） | 声明式三 Agent 分工 | 声明式工作流定义 | 配置驱动（YAML/SDK） |
| **Scaffolding 层** | CLAUDE.md + skills/ 目录 | 系统 prompt + Managed 接口 | JSON-RPC API schema | Policy 配置文件 |
| **工具执行** | Shell/Bash 工具（本地沙箱） | 隔离 Sandbox（Brain/Hands 分离） | App Server Lambda | AgentCore Gateway |
| **安全执法** | CLAUDE.md 约束 + 人工审批 | Harness 内模型感知执法 | Verification Systems | **LLM 循环之外确定性执法** |
| **会话持久化** | Git 状态 + 文件系统 | Event Log（结构化） | App Server 状态 | 托管 Memory 服务 |
| **上下文压缩** | 依赖 Claude 自身能力 | 自动压缩 + 结构化 Handoff | 声明式 prompt 管理 | 外部 Memory 卸载 |
| **企业合规** | 弱（无审计链路） | 中（可审计 Event Log） | 中（声明式可追溯） | 强（确定性策略执法） |
| **部署复杂度** | **极低**（本地即可运行） | 中（需接入 Managed 服务） | 中（需 App Server） | 高（VPC、IAM、托管服务） |
| **适合规模** | 个人/小团队快速实验 | 中型团队生产 Agent | 中大型工程团队 | 大型企业合规场景 |

### 4.3 OpenClaw 优势

1. **零基础设施启动成本** — 不需要 Sandbox、Runtime、VPC，本地 Claude Code 就是执行单元，5分钟可以跑起来第一个多 Agent 工作流
2. **Claude Code 能力全复用** — 每个子 Agent 都是完整的 Claude Code 实例，继承 Tool Use、File Edit、Bash 执行等全套能力，不需要额外定义工具 schema
3. **Harness 即代码** — CLAUDE.md + skills/ 目录就是 Harness 配置，版本控制天然支持，无需学习额外 SDK/YAML
4. **编排极度灵活** — 编排逻辑本身也由 Claude 生成，可以动态调整多 Agent 拓扑，不受声明式框架限制
5. **生态最新** — 直接跟随 Claude 最新能力迭代，无中间层延迟

### 4.4 OpenClaw 劣势

1. **安全执法是概率性的** — 依赖 CLAUDE.md 的 prompt 约束和 Claude 的遵从度，AWS AgentCore 在 LLM 循环之外做确定性策略执法，金融/医疗场景 OpenClaw 目前无法替代
2. **缺乏结构化 Event Log** — Anthropic Managed Agents 有完整的 Brain/Hands/Session 三层 + Event Log，OpenClaw 的会话持久化靠 Git 和文件系统，故障恢复和可审计性弱
3. **没有主动上下文压缩** — 没有 Reduce/Offload/Isolate 压缩策略，长任务容易遇到 token 压力
4. **缺乏独立 Evaluator** — Anthropic 的反 GAN 模式（Generator + 独立 Evaluator）是提升输出质量的核心杠杆，OpenClaw 目前的单 Agent 自我评估能力相对有限
5. **可观测性弱** — 无原生的追踪、监控、审计能力，生产环境问题排查困难

---

## 五、企业架构指导意义

### 5.1 护城河转移

> "The model is commodity. The harness is moat."

Manus 用同一个模型重写了 6 次 Harness，性能持续提升；Vercel 删除 80% 的工具，Agent 效果反而提升。**企业工程投入应向 Harness 倾斜，而非专注于模型选型。**

### 5.2 安全执法位置决定合规等级

| 执法位置 | 代表方案 | 适合场景 |
|---------|---------|---------|
| 模型内（概率性） | 大多数 prompt 工程方案 | 低风险内部工具 |
| Harness 内（模型感知） | Anthropic Managed Agents | 中风险 SaaS 产品 |
| LLM 循环之外（确定性） | AWS AgentCore | 金融、医疗、法律等高合规场景 |
| 管理中心审批 | Microsoft Foundry | 大型组织治理场景 |

### 5.3 上下文工程是核心约束

**三原则（Hugo Bowne-Anderson）：**
- **Reduce（压缩）** — 主动缩减传入模型的上下文（轨迹摘要、工具调用压缩）
- **Offload（卸载）** — 将信息移出 prompt（外部存储、原子工具委托）
- **Isolate（隔离）** — 多 Agent 架构中将 token 密集型子任务委托给专用 Agent

### 5.4 演进路径建议

```
阶段一：单 Agent + 简单工具调用（OpenClaw 完全够用）
    ↓
阶段二：ReAct 循环 + 反馈传感器（补 Sensors：测试/Linter/类型检查）
    ↓
阶段三：Planner-Generator-Evaluator 三层分工（引入独立 Evaluator）
    ↓
阶段四：结构化 Event Log + Sandbox 隔离（生产级可审计）
    ↓
阶段五：LLM 循环外确定性安全执法（企业合规场景）
```

### 5.5 Harness 会随模型进化持续简化

> "Harnesses encode assumptions that go stale as models improve"

架构需要为"剥离脚手架"留出空间，每半年评估哪些控制层已不再必要。**Harness 工程不是一次性设计，而是持续演进的能力。**

### 5.6 基于 OpenClaw 的分阶段补强建议

| 阶段 | 建议 |
|------|------|
| 快速验证期 | OpenClaw 完全够用，不要过早引入复杂 Runtime |
| 规模化前 | 补充结构化 Event Log（参考 Anthropic Brain/Hands/Session 三层模式） |
| 引入外部数据或 API | 升级工具执行到隔离 Sandbox，防止工具调用污染主 Agent 上下文 |
| 合规要求出现 | 在 LLM 循环之外叠加确定性策略层（参考 AWS AgentCore Gateway 模式），而不是全部推倒重来 |

---

## 六、Framework vs Runtime vs Harness 三层区分

```
Framework（框架）
    → 快速原型：LangChain、LangGraph、CrewAI
    → 用于：定义 Agent 逻辑、工具调用、多 Agent 拓扑

Runtime（运行时）
    → 生产部署 + 长时运行：AWS AgentCore、Vertex AI Agent Engine
    → 用于：执行环境、状态管理、可观测性

Harness（Harness）
    → 特定场景的完整解决方案：OpenAI Codex、Anthropic Managed Agents、Microsoft Foundry
    → 用于：面向特定用例的完整工程方法论

三层叠加，不互斥。OpenClaw ≈ 轻量 Harness，不含独立 Runtime 层。
```

---

*研究日期：2026-04-16 | 来源：Anthropic Engineering Blog、OpenAI Blog、Google AI Developers、AWS Machine Learning Blog、Microsoft Azure Blog、arXiv、Martin Fowler、Parallel.ai*
