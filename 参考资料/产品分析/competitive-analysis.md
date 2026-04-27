# GenGrowth 竞品分析报告

> 版本: 1.0
> 日期: 2026-03-18
> 更新: 2026-04-23 (同步 Okara AI CMO 最新 dossier 结论与 Ahrefs 证据)
> 目的: GenGrowth 综合竞品分析，覆盖直接竞品、邻近工具、市场定位及战略建议
> 触发事件: Okara AI CMO 产品评估 (2026-03-16 发布)

---

## 摘要

GenGrowth 所处的市场正在快速演变，"AI 驱动的增长自动化"正在成为一个全新的产品品类。竞争格局可分为四层:

1. **核心直接竞品**: AI CMO / AI 营销执行平台 (Okara AI CMO, Helena/Enrich Labs, BabyLoveGrowth)
2. **次级直接竞品与潜在升级者**: Blaze.ai, Kana
3. **邻近与替代工具**: Gumloop, La Growth Machine，以及 SEO 平台、GEO 追踪器、社媒排程工具、AI 写作工具
4. **现状替代方案**: 手动流程、招人、咨询

**市场规模**: Agentic AI 市场预计 2026 年将超过 109 亿美元。Gartner 预测到年底 40% 的企业应用将嵌入任务型 AI Agent (2025 年不到 5%)。

GenGrowth 的核心差异化是**完整闭环的 AI 营销增长团队** -- 从 4 项输入的 onboarding，到信号驱动的策略、执行、归因和自优化 -- 而竞品要么只自动化部分环节，要么虽然能执行，但更像通用营销执行团队，缺少深度归因与实验框架。以 Okara 为例，它已经证明 `AI CMO + builder + $99/mo` 这套叙事可以有效获客，但最新 dossier 也显示其搜索流量仍高度集中在首页与少数博客页，执行和闭环能力仍弱于其营销故事。

---

## 总览文档与增长情报档案的分工

- [competitive-analysis.md](/Users/lynne/gengrowth-wiki/参考资料/产品分析/competitive-analysis.md) 保留为稳定层：
  竞品分层、定位、能力矩阵、定价格局、战略建议。
- `competitor-dossiers/` 保留为动态层：
  营销方案、流量信号、用户规模、付费用户估算、证据链与置信度。
- 如果动态数据与旧版总览里的数字冲突，优先采用**日期更新更晚的 dossier**。

当前已建立的增长情报档案：
- [Okara AI CMO](/Users/lynne/gengrowth-wiki/参考资料/产品分析/competitor-dossiers/okara-ai-cmo.md)
- [HireHelena / Helena](/Users/lynne/gengrowth-wiki/参考资料/产品分析/competitor-dossiers/hirehelena.md)
- [Blaze.ai](/Users/lynne/gengrowth-wiki/参考资料/产品分析/competitor-dossiers/blaze-ai.md)
- [BabyLoveGrowth](/Users/lynne/gengrowth-wiki/参考资料/产品分析/competitor-dossiers/babylovegrowth.md)
- [Kana](/Users/lynne/gengrowth-wiki/参考资料/产品分析/competitor-dossiers/kana.md)
- [Dossier 模板](/Users/lynne/gengrowth-wiki/参考资料/产品分析/competitor-dossiers/TEMPLATE-competitor-growth-intelligence.md)

---

## 1. 市场背景: "AI CMO" 品类兴起 (2026)

### 1.1 品类定义

"AI CMO" 指的是通过部署专业 AI Agent 跨增长渠道运作的自主营销代理平台，旨在替代完整营销团队的需求。该品类在 2026 年 3 月随 Okara 的发布而成型。

### 1.2 关键市场信号

| 信号 | 详情 |
|------|------|
| GEO 成为主流 | AI 搜索引擎 (ChatGPT, Perplexity, Claude, Gemini) 现在处理约 40% 的 SaaS 研究查询。品牌需要在 AI 生成的回复中可见，而不仅是 Google SERP。 |
| Agent 架构成为标准 | 多 Agent 编排 (每个渠道/功能一个 Agent) 是所有新入局者的默认架构。 |
| $99/月价格锚点 | Okara、Helena Pro、BabyLoveGrowth 和 RankYak 正共同将 $99/月固化为"轻量 AI 营销执行层"主流价位。 |
| 执行层开始出现，但闭环仍稀缺 | 多数工具仍只提供建议；少数新玩家（如 Helena、BabyLoveGrowth）开始覆盖发布与优化，但归因、实验设计和跨渠道学习仍然薄弱。 |
| 归因被严重低估 | 没有竞品提供 GenGrowth 级别的归因精度 (UTM 指纹、渠道隔离、6 维数据完整性验证)。 |

### 1.3 GEO (生成式引擎优化) -- 新战场

GEO 是针对 AI 搜索引擎可见度的优化 -- 当用户提问时，让 ChatGPT、Perplexity、Gemini、Claude、Google AI Overviews 引用你的内容。

**为什么 GEO 现在很重要**:
- Gartner 估计传统搜索量将下降 25%，AI 助手正在成为默认的信息发现入口
- 由于 AI Overviews 的扩展，零点击率预计在 2026 年底达到 70-80%
- AI 模型通常每个回答只引用 2-7 个域名 (传统 SERP 有 10 个蓝色链接)
- 主题覆盖 > 关键词定位，是 2026 年 GEO 的主流策略

核心指标:

| 指标      | 说明                         |
| ------- | -------------------------- |
| GEO 分数  | 品牌在 AI 平台上可见度的综合评分 (0-100) |
| 引用潜力    | 被 AI 生成的回复引用的可能性           |
| AI 可见度  | 品牌在 AI 回复中被提及的频率           |
| AI 情感倾向 | AI 生成的提及内容的情感 (正面/中性/负面)   |
| 平均位置    | 在 AI 回复中的平均排名位置            |

**关键 GEO 原则**:
- 深度与持续性 > 一次性优化
- LLM 寻找的权威信号、可读性、结构化模式
- 持续深入的内容能建立 AI 模型的信任
- 更广泛的主题覆盖 > 单个关键词定位

**对 GenGrowth 的意义**: GenGrowth 已经将 `geo_visibility` 作为机会评分公式中的一个维度 (M2 权重 0.15)。这是相对于竞品将 GEO 作为独立附加功能的结构性优势。

---

## 2. 直接竞品（核心 + 次级）

### 2.1 GenGrowth 与核心直接竞品定位速览

> 核心直接竞品，指当前最可能与 GenGrowth 进入同一预算池、同一 shortlist 被直接比较的产品。Blaze.ai 更适合归为次级直接竞品；Kana 属于潜在直接竞品。

| 产品                      | 定位（1-2 句话）                                                                        | 与 GenGrowth 的差异化识别                                    |
| ----------------------- | --------------------------------------------------------------------------------- | ----------------------------------------------------- |
| **GenGrowth**           | 一支完整闭环的 AI 营销增长团队，从机会发现、策略判断到执行、归因、自优化都由专业 agent 协同完成。更适合需要可审计增长闭环的 SaaS、内容站和小团队。 | 不是只会发内容或给建议的 AI 营销助手，而是会判断先做什么、做完如何归因、以及下一步如何放大的增长团队。 |
| **Okara AI CMO**        | 一位面向独立开发者的轻量 AI CMO，擅长快速做 SEO/GEO/社区机会扫描，并用极低价格锚点降低试用门槛。更像营销分析师 + 顾问，而不是执行团队。     | 强在 AI CMO 叙事、builder 传播和轻量发现层，弱在执行、归因和跨渠道学习闭环。          |
| **Helena / HireHelena** | 一支跨 SEO、社媒、广告、邮件的 AI 营销执行团队，强调直接干活、跨渠道自动化和低门槛上手。更像多渠道通用营销团队替代。                    | 强在渠道覆盖与执行，弱在机会优先级、实验框架、第一方归因和知识复用。                    |
| **BabyLoveGrowth**      | 一支内容与外链导向的自动营销团队，靠批量产出文章、自动发布和合作站点网络推动增长。更像 SEO 内容工厂 + 外链网络。                      | 强在内容产能和 CMS/外链执行，弱在安全性、归因、策略判断和跨渠道优化。                 |

### 2.2 Okara AI CMO

| 属性       | 详情                                                             |
| -------- | -------------------------------------------------------------- |
| **公司**   | Okara (新加坡)，创始人 Fatima Rizwan                                  |
| **发布时间** | 2026 年 3 月 16 日                                                |
| **定价**   | 当前官网主口径为 Free + $99/月 AI CMO；首页仍展示 `WELCOME` 促销码，旧版分层价格页口径已不再是当前主口径 |
| **目标用户** | 独立开发者、自举型初创、个人创始人                                              |
| **技术**   | 基于 30+ AI 模型 (Llama, Mistral, Qwen, GPT 等) 的 Agent 编排层         |

**产品架构**:
```
用户输入 URL -> 主编排器 -> 专业 Agent
                            |-- SEO Agent (每日审计)
                            |-- GEO Agent (AI 可见度追踪)
                            |-- Reddit Agent (社区监控)
                            |-- HN Agent (Hacker News 监控)
                            |-- AI Writer Agent (内容生成)
                            |-- X Agent (社交发帖) [计划中]
                            |-- YouTube/LinkedIn/Influencer [计划中]
```

**数据源 (推测)**:
- 页面速度 / CWV: Google PageSpeed Insights API (Lighthouse)
- 外链: DataForSEO Backlinks API 或 Moz Link API
- SERP 数据: DataForSEO SERP API 或 Serper.dev
- GEO 评分: 直接调用 ChatGPT/Claude/Perplexity/Gemini API
- 竞品搜索: Web search API (每次分析 20+ 次查询)

**Onboarding 流程**:
1. 用户输入网站 URL
2. 系统爬取所有页面 (headless browser)
3. LLM 生成产品理解摘要
4. 并行执行: SEO 审计 + 竞品搜索
5. 跨 4 个 AI 平台的 GEO 可见度分析
6. 生成可执行建议
7. 开始每日自主运行

**优势**:
- 极快的 onboarding (几分钟)
- 跨 4 个 AI 平台的 GEO 追踪确实有用
- Terminal 风格 UI 与开发者受众契合
- Freemium + 单一 $99 主套餐，入门与升级决策都很轻
- 多模型平台提供内在的成本灵活性

**劣势**:
- **没有执行能力** -- 只提供建议，不发布内容也不建设外链
- **没有归因系统** -- 无法衡量什么有效以及为什么有效
- **没有自优化闭环** -- 没有从结果中学习的机制
- **外链数据质量差** -- 排名靠前的引用域名全部评级为 0
- **SEO 建议过于通用** -- "添加 H1" 和 "实施结构化数据" 是对任何网站的标准建议
- **没有跨渠道反馈** -- SEO 和社媒独立运作
- **SEO 结构仍偏脆弱** -- 最新 Ahrefs 证据显示 organic traffic 高度集中在首页与少数博客页，说明流量盘子还不够分散稳健

**最新增长情报补充（2026-04-23 同步 dossier）**:
- Ahrefs 2026-04-15 导出显示：organic traffic 约 4,036（All locations），organic pages 34
- 首页约占当前 organic traffic 的 77%
- 前 4 个页面贡献约 93.9% organic traffic，除首页外主要来自博客页 `ai-prompts-for-photos`、`best-chatgpt-alternatives`、`are-character-ai-chats-private`
- 按关键词字面判断，含 `okara` 的词约占当前有流量关键词流量的约 60%，说明品牌词已开始承接需求，但非品牌内容护城河仍浅

### 2.3 Helena / HireHelena (Enrich Labs)

| 属性 | 详情 |
|------|------|
| **公司** | Enrich Labs（旧金山湾区）；Helena 是其 AI Digital Marketer specialist |
| **网站** | hirehelena.com（注册/登陆后进入 `agent.enrichlabs.ai/marketing`） |
| **定价** | Starter $39/月 / Pro $99/月 / Pro Plus $199/月 / Enterprise 定制 |
| **目标用户** | 独立品牌、成长中品牌、代理商、多品牌团队 |
| **技术/定位** | 多 specialist AI marketing platform 的执行型数字营销 Agent；通过 email / Slack / dashboard 进行审批与协作 |

**公开能力范围**:
- 接入 Google Analytics、CMS、社媒账号后执行日常营销任务
- 自动生成并发布 SEO 内容到 WordPress / Webflow / Shopify
- 自动生成并排程 Instagram、TikTok、LinkedIn、X、Facebook 等社媒内容
- 自动优化 Google / Meta / TikTok 广告活动
- 自动搭建 Klaviyo / Mailchimp 邮件流程
- 提供每日/每周绩效简报，Pro 套餐含 5 个竞品监控

**优势**:
- **真执行而非只给建议** -- 横跨 SEO、社媒、广告、邮件四类主要增长渠道
- **价格侵略性强** -- $39/月入门，明显低于传统 agentic marketing / agency 替代方案
- 审批机制清晰 -- 用户可 review、edit、reject，再决定是否自动发布
- 集成范围广 -- 明确覆盖 WordPress、Webflow、Shopify、Klaviyo、Mailchimp、Google Analytics、Meta Pixel
- 平台定位直接面向“小团队替代营销团队”的结果叙事，商业信息清晰

**劣势**:
- **更像通用营销执行团队，而不是闭环 AI 增长团队** -- 官网强调产出与自动化，较少展示机会评分、实验编排、策略优先级框架
- **归因深度未公开** -- 未见 GenGrowth 级别的 UTM 指纹、渠道隔离、数据完整性验证能力说明
- **输出配额导向明显** -- 以“每月社媒帖数 / SEO 文章数”为主卖点，容易滑向 commodity content
- **公开定位更偏 DTC / 品牌 / 代理商** -- Shopify、Meta Ads、Klaviyo 权重高，对 SaaS / 内容站的增长方法论未充分显性化
- **跨渠道学习闭环不清晰** -- 有 daily optimization，但未见 Playbook 复用、Social-First 验证或系统性试验框架

**数据说明**: 以上基于 Enrich Labs 官网公开的产品页、FAQ、定价页与 About 页面整理；未公开能力以“未公开”标注。

**对 GenGrowth 的相关性**: 高。Helena 是少数公开主打“跨渠道执行”的 AI 营销产品，说明市场已经开始验证“不是建议，而是直接干活”的需求；但其公开护城河更接近执行广度和低价，而非归因精度和增长实验框架。

### 2.4 BabyLoveGrowth

| 属性 | 详情 |
|------|------|
| **定价** | $99/月 (从 $247 降价); 代理商定制白标定价 |
| **目标用户** | 小企业、个人创业者、内容营销人员 |
| **差异化** | 外链交换网络 (2,500+ 合作站点)、CMS 自动发布 |

**功能**:
- 每月 30 篇 SEO/LLM 优化文章，自动发布
- 通过 2,500+ 合作站点自动获取外链 (声称价值 $800+/月)
- 关键词研究 + SERP 聚类
- AI 可见度追踪 (ChatGPT, Perplexity)
- Reddit AI Agent 社区互动
- CMS 集成: WordPress, Shopify, Webflow, Wix

**优势**:
- **部分执行能力** -- 可以自动将文章发布到用户的 CMS
- 外链交换网络是独特的社区护城河
- 与 Okara 相同价位但执行功能更多

**劣势**:
- 没有归因或测量系统
- 没有策略生成框架 (只是内容生产)
- 外链交换网络存在 SEO 风险 (Google 可能惩罚)
- 没有 GEO 优化
- 没有跨渠道验证 (Social-First 探测)

### 2.5 Blaze.ai (次级直接竞品)

| 属性 | 详情 |
|------|------|
| **公司** | Blaze.ai |
| **定价** | Free / Starter $39/月 / Growth $85/月；另有 Done-for-you 服务 $999/月起 |
| **目标用户** | 小企业、创始人、小型营销团队 |
| **技术/定位** | “AI that does your marketing for you”；围绕内容规划、内容生成、自动发布和广告优化的 AI marketer |

**公开能力范围**:
- 基于品牌素材自动生成品牌识别、内容策略和多周内容规划
- 为 15+ 渠道生成并自动发布内容
- Higher tiers 提供 approvals、audience 定制与团队协作
- 提供 AI Learning Loop，根据历史表现优化后续内容
- 提供 automated ad campaigns；更高层级叠加 done-for-you organic / search / social ads

**优势**:
- **外部定位与 GenGrowth 较接近** -- 都在卖“AI 替你做营销”的结果，而不只是工具
- SMB 叙事成熟，Free + 7 天试用降低试用门槛
- 内容规划、创作、发布和广告优化打包得较完整
- 兼顾 DIY 与 done-for-you 方案，商业化路径清晰

**劣势**:
- **更偏内容与分发自动化，而不是增长判断** -- 强调 autopilot publishing，多于机会优先级与实验逻辑
- **归因与实验框架未公开** -- 有 learning loop，但缺少 GenGrowth 式第一方归因与可审计决策链
- 不以 SEO/GEO 诊断、竞品监控、Social-First 验证为核心卖点
- 更像“AI 内容与分发团队”，未完全覆盖增长闭环

**对 GenGrowth 的相关性**: 中高。Blaze.ai 会进入部分 SMB 对 “AI 营销团队” 的 shortlist，但它的强项主要在内容生产与跨渠道分发，不是完整的增长发现、验证、归因与放大。

### 2.6 Kana (隐身模式 -> $15M 种子轮)

| 属性 | 详情 |
|------|------|
| **公司** | Kana (旧金山)，Mayfield 领投 $15M 种子轮 (2026 年 2 月) |
| **定价** | 尚未公开 |
| **目标用户** | 中型和企业级营销团队 |
| **技术** | AI Agent 用于数据分析、受众定位、活动管理、媒体策划、AI 聊天机器人优化 |

**优势**:
- 大额融资 ($15M 种子轮) 提供充足的产品开发资金
- 比 Okara 更广的范围 -- 覆盖数据分析、受众定位、媒体策划
- 企业级定位

**劣势**:
- 仍处于隐身/早期访问阶段 -- 不公开可用
- 企业级定位意味着与 GenGrowth 的目标受众 (1-50 人团队) 关联度较低
- 没有公开可评估的产品
- 活动/媒体重心 vs GenGrowth 的有机增长重心

**对 GenGrowth 的相关性**: 短期内较低 (不同目标市场)，但标志着 VC 对 "AI CMO" 品类的兴趣。如果 Kana 向下沉市场扩展，它将成为资金充裕的威胁。

### 2.7 直接竞品对比矩阵

| 能力 | GenGrowth | Okara AI CMO | Helena / HireHelena | BabyLoveGrowth | Blaze.ai | Kana |
| --- | --- | --- | --- | --- | --- | --- |
| 最小输入 onboarding (4 项) | 是 | 仅 URL | 网站 + 品牌/渠道信息 | 仅 URL | 网站/品牌素材 + 账号连接 | 未知 |
| 自动机会发现 | 是 (多数据源) | 基础 SEO 审计 | 是 (分析数据 + 竞品监控 + 趋势信号) | 否 | 部分 (基于品牌/内容规划) | 是 (数据分析) |
| 带评分的策略生成 | 是 (6 维度) | 否 (仅建议) | 部分 (未公开评分框架) | 否 | 否/未公开 | 未知 |
| 执行自动化 (SEO) | 是 (队列化、批次化) | 否 | 是 (10/120/360 篇配额) | 是 (30 篇/月) | 部分 (内容与分发导向) | 是 (活动) |
| 执行自动化 (社媒) | 是 (Reddit/X 含探测) | Reddit/HN 监控 | 是 (多平台生成 + 排程) | 仅 Reddit | 是 (15+ 渠道发布) | 未知 |
| 执行自动化 (广告) | 计划中/有限 | 否 | 是 (Google/Meta/TikTok) | 否 | 是 (automated ad campaigns) | 是 (媒体策划/活动) |
| 执行自动化 (邮件) | 计划中 | 否 | 是 (Klaviyo/Mailchimp) | 否 | 部分/未公开 | 未知 |
| 执行自动化 (外链建设) | 是 (MVP-Lite) | 否 | 否/未公开 | 是 (2,500+ 站点网络) | 否 | 否 |
| GEO / AI 可见度 | 是 (集成到评分中) | 是 (独立追踪) | 部分 (内容面向 Google + AI 搜索优化) | 部分 (AI 可见度追踪) | 否/未公开 | 否 |
| 归因 (UTM 指纹) | 是 (渠道隔离) | 否 | 否/未公开 | 否 | 否/未公开 | 未知 |
| 自优化闭环 | 是 (信号驱动) | 否 | 部分 (渠道内日常优化) | 否 | 部分 (AI Learning Loop) | 未知 |
| 人工覆盖与问责 | 是 (追踪记录) | N/A | 是 (approve/edit/reject) | N/A | 是 (approvals) | 未知 |
| Playbook/知识复用 | 是 | 否 | 否/未公开 | 否 | 否/未公开 | 否 |
| 竞品监控 | 是 (每周 diff) | 是 (一次性) | 是 (Pro 含 5 个竞品) | 否 | 否/未公开 | 未知 |
| 数据完整性验证 | 是 (6 维度) | 否 | 否/未公开 | 否 | 否/未公开 | 否 |
| Social-First 验证 | 是 (探测 -> Batch-0) | 否 | 否 | 否 | 否 | 否 |
| 可解释 AI 决策 | 是 (评分分解) | 否 | 部分 (briefings + recommendations) | 否 | 部分/未公开 | 未知 |
| CMS / 渠道自动发布 | 计划中 | 否 | 是 (WordPress/Webflow/Shopify) | 是 (WP/Shopify/Webflow/Wix) | 是 (多渠道自动发布) | 未知 |

---

## 3. 邻近竞品 (品类型)

### 3.1 销售与基础设施替代方案

#### Gumloop

| 属性 | 详情 |
|------|------|
| **定价** | Free + credit-based 付费 tiers（官方 docs 显示免费层与 Starter/Pro 信用额度体系；2026-03 官方 blog 提到 pricing 简化） |
| **定位** | 通用 AI automation framework / agent builder；允许用户拖拽搭建工作流和 agents |
| **优势** | 极强的灵活性；适合技术团队自建营销 agents、竞品监控 agents、内容生产 agents；支持 workflows + agents + integrations 的组合 |
| **劣势** | 本身不提供营销判断、策略框架、现成增长 playbook 或闭环归因；用户需要自己设计、调试、维护整个系统 |
| **与 GenGrowth 的关系** | 不是成品级直接竞品，更像底层基础设施替代方案。它威胁的是“技术团队选择自建”，不是“市场团队直接买一个 AI 营销增长团队”。 |

#### La Growth Machine

| 属性 | 详情 |
|------|------|
| **定价** | Basic €60/identity/月 起；14 天免费试用 |
| **定位** | 多渠道 outbound / prospecting 自动化平台，覆盖 LinkedIn、Email、Calls、X 与 CRM 同步 |
| **优势** | 销售自动化成熟；强调 lead enrichment、identity、CRM sync 和安全的 LinkedIn 自动化；官网称有 25,000+ users |
| **劣势** | 核心是销售获客与 SDR/outbound，不是面向 SEO/GEO/内容/品牌增长的完整营销团队 |
| **与 GenGrowth 的关系** | 邻近竞品。如果 GenGrowth 未来扩展到 outbound lead gen，它会变得更相关；在当前阶段，它更像销售预算池产品而不是营销增长预算池产品。 |

### 3.2 SEO 平台

#### Ahrefs

| 属性 | 详情 |
|------|------|
| **定价** | Starter $29/月, Lite $129/月, Standard $249/月, Advanced $449/月 (+ 额外用户/API/超额费用) |
| **优势** | 最大的外链数据库 (28T 内部 + 35T 外部链接)，优秀的关键词研究、站点审计、排名追踪，新功能 Brand Radar (跨 ChatGPT/Gemini/Perplexity 的 AI 话语权监控) |
| **劣势** | 仅分析 -- 无执行、无归因、无优化闭环；额外用户/API/超额隐性成本 |
| **与 GenGrowth 重叠** | 关键词研究、竞品分析、外链分析 |
| **GenGrowth 优势** | Ahrefs 展示机会；GenGrowth 发现、执行、衡量并优化 |

#### Semrush

| 属性 | 详情 |
|------|------|
| **定价** | Pro $139.95/月, Guru $249.95/月, Business $499.95/月 |
| **优势** | 最全面的 SEO 套件，26B+ 关键词数据库，PPC 数据，社媒工具包 |
| **劣势** | 工具复杂度对小团队来说压倒性的，无自动执行 |
| **与 GenGrowth 重叠** | 关键词研究、站点审计、竞品分析、内容优化 |
| **GenGrowth 优势** | Semrush 需要专业知识才能使用；GenGrowth 将整个工作流自动化 |

#### Surfer SEO

| 属性 | 详情 |
|------|------|
| **定价** | Essential $99/月 ($79 年付), Scale $219/月 ($175 年付), Enterprise 定制; SERP Analyzer $29 附加; AI Tracker 付费附加 |
| **优势** | 行业标准内容优化 (NLP 驱动)，SERP 分析，Content Editor，Topical Map 主题簇规划，Content Audit 快速优化建议 |
| **劣势** | 关键功能需额外付费 (SERP Analyzer, AI Tracker)，仅内容优化 -- 无策略、无执行、无归因 |
| **与 GenGrowth 重叠** | 内容优化评分 |
| **GenGrowth 优势** | Surfer 一次优化一个页面；GenGrowth 编排整个内容管线 |

### 3.3 GEO / AI 可见度追踪

#### Peec AI

| 属性 | 详情 |
|------|------|
| **定价** | EUR 89-499/月; 多平台附加 EUR 80-120/月 (完整覆盖实际 EUR 169-209/月) |
| **专注** | 跨 10+ AI 平台的 GEO 追踪 (ChatGPT, Gemini, Perplexity, Claude, Google AI Overviews, Copilot, DeepSeek, Grok, Llama) |
| **优势** | 最广的 AI 平台覆盖，$21M 融资，每月新增 300 客户，115+ 语言，被 Chanel/ElevenLabs/n8n 使用，无限席位 |
| **劣势** | 仅监控 -- 不创建内容、不优化、不执行；平台附加隐性成本 |
| **GenGrowth 优势** | GenGrowth 将 GEO 集成为完整增长闭环中的评分维度，而非独立监控面板 |

#### Otterly.ai

| 属性               | 详情                                                                                                               |
| ---------------- | ---------------------------------------------------------------------------------------------------------------- |
| **定价**           | Lite $29/月 (15 prompts), Standard $189/月 (100 prompts), Premium $489/月 (400 prompts), Pro $989/月 (1,000 prompts) |
| **专注**           | 跨 ChatGPT、Perplexity、Google AI Overviews、Gemini、Copilot 的 AI 搜索监控；Brand Visibility Index                         |
| **优势**           | 清晰的多工作区适合代理商，Brand Visibility Index 指标，GEO 审计能力                                                                  |
| **劣势**           | 按 prompt 计费昂贵 ($989/月仅 1,000 prompts)，仅监控 -- 无优化或内容创建，AI 平台覆盖少于 Peec                                             |
| **GenGrowth 优势** | 监控 + 策略 + 执行一体化闭环，成本只是其零头                                                                                        |

#### Frase

| 属性 | 详情 |
|------|------|
| **定价** | 起价 $39/月; 所有计划包含全部功能，仅按量 (文章数、审计页数、prompts) 区分 |
| **专注** | Agentic SEO + GEO，80+ AI Agent 技能用于研究、写作、优化 |
| **优势** | 重建平台 (2026 年 2 月)，双重 SEO + GEO 评分，各层级不锁功能，MCP 访问，7 天免费试用 |
| **劣势** | 仅内容聚焦，无社媒执行，无归因，无自优化，无实验管理 |
| **GenGrowth 优势** | 全链路闭环 vs 仅内容 |

### 3.4 AI 内容平台

#### Jasper AI

| 属性 | 详情 |
|------|------|
| **定价** | Creator $39/月, Pro $59/月, Business 定制 |
| **优势** | 50+ 内容模板，品牌语调训练，团队协作，Jasper Studio (无代码 AI 应用构建器) |
| **劣势** | 仅内容生成 -- 无发现、无策略、无执行、无测量 |
| **GenGrowth 优势** | Jasper 生产文字；GenGrowth 生产结果 |

#### Blaze.ai

| 属性 | 详情 |
|------|------|
| **定价** | Free / Starter $39/月 / Growth $85/月；另有 done-for-you 服务 $999/月起 |
| **专注** | AI marketer for content planning, creation, autoposting, and ad optimization |
| **优势** | 15+ 渠道内容发布、Free + 7 天试用、学习环路、外部价值主张清晰 |
| **劣势** | 更偏内容与分发自动化，归因和增长实验框架未公开 |
| **与 GenGrowth 重叠** | 内容策略、内容生成、自动分发、部分广告自动化 |
| **GenGrowth 优势** | Blaze 偏“内容与渠道自动驾驶”；GenGrowth 偏“增长判断 + 执行 + 归因 + 放大” |

#### RankYak

| 属性 | 详情 |
|------|------|
| **定价** | $99/月; 多站点最高 20% 折扣 |
| **专注** | 自动 SEO 内容创建和发布 (每天 1 篇文章) |
| **优势** | 每日内容产出 (30 篇/月)，3 天免费试用，适合代理商的多账户管理，无缝 CMS 发布 |
| **劣势** | 仅 SEO 内容，无社媒、无 GEO、无归因、无优化，AI 文章质量存疑 |
| **GenGrowth 优势** | 多渠道 vs 单渠道 |

#### GrowthBar

| 属性 | 详情 |
|------|------|
| **定价** | Standard $36/月 (25 篇), Pro $74.25/月 (100 篇), Agency $149.25/月 (300 篇) |
| **专注** | SEO 内容生成 + 关键词研究 (7B 关键词数据库) |
| **优势** | 价格极低，生成快速，Chrome 插件适配 WordPress + Google，关键词带收入预估 |
| **劣势** | 正被 SEOptimer 收购/合并 (前途不确定)，深度有限，无 GEO，无增长实验 |
| **GenGrowth 优势** | 完整闭环 AI 营销增长团队 vs 内容生成工具 |

### 3.5 内容策略

#### MarketMuse

| 属性 | 详情 |
|------|------|
| **定价** | Free (10 queries/月), Optimize $99/月, Research $249/月, Strategy $499/月 |
| **优势** | 最深度的内容策略智能；主题权威映射；基于实际域名权威的个性化难度评分；自动站点清查；NLG 内容重构引擎 |
| **劣势** | 高层级定价昂贵 ($499/月获取完整功能)；低层级查询次数有限；学习曲线陡峭；无大规模内容生成；无 GEO；无增长实验 |
| **GenGrowth 优势** | MarketMuse 做规划；GenGrowth 规划 + 执行 + 衡量 + 优化 |

---

## 4. 品类定位图

```
                    执行能力
                    低                             高
                    |                               |
    全链路   ------+-------------------------------+------
                   |  Okara AI CMO                | GenGrowth / Helena
                   |  (仅建议)                     | GenGrowth: 闭环 AI 增长团队
    范围           |                              | Helena: 跨渠道执行团队
                   |                              |
                   |  Peec AI / Otterly           | BabyLoveGrowth / Blaze.ai
                   |  (仅 GEO 追踪)              | BabyLoveGrowth: 内容 + 外链
                   |                              | Blaze.ai: 内容 + 分发 + 广告
    部分    ------+-------------------------------+------
                   |  Ahrefs / Semrush            | RankYak / Frase
                   |  (仅分析)                     | (内容生产)
                   |                              |
                   |  MarketMuse                  | Surfer SEO
                   |  (仅规划)                     | (仅优化)
    单一    ------+-------------------------------+------
    功能           |  Jasper AI                   |
                   |  (仅写作)                     |
                   +-------------------------------+
```

GenGrowth 仍是右上象限中**闭环最完整**的产品。Helena 已经逼近该象限，但更偏“跨渠道营销执行团队”而非“带实验、归因、知识复用的 AI 营销增长团队”。Blaze.ai 位于右侧中上区域，更接近“内容与分发自动化团队”；Gumloop 不在这张成品产品图里，因为它更像底层 agent builder。

---

## 5. 定价格局

| 产品 | 月价 | 获得什么 |
|------|------|---------|
| Otterly.ai (Lite) | $29 | AI 搜索监控 (15 prompts) |
| Ahrefs (Starter) | $29 | 基础 SEO 分析 |
| GrowthBar (Standard) | $36 | AI 博客生成 (25 篇) |
| Frase | $39 | Agentic SEO + GEO (全功能、限量) |
| Jasper AI (Creator) | $39 | AI 内容生成 |
| Blaze.ai (Starter) | $39 | AI marketer for content planning + autoposting |
| Helena (Starter) | $39 | SEO + 社媒 + 基础分析执行层 |
| La Growth Machine (Basic) | EUR 60/identity | 多渠道 outbound prospecting 自动化 |
| Peec AI (Starter) | EUR 89 (~$97) | GEO 追踪 (300+ prompts, 有限平台) |
| Surfer SEO (Essential) | $99 | 内容优化 |
| Okara AI CMO | $99 | Free + $99/mo AI CMO 主套餐；SEO 审计 + GEO 追踪 + Reddit/HN 监控 + AI 写手（无执行） |
| Blaze.ai (Growth) | $85 | 更强的 AI marketer + approvals/learning loop |
| Helena (Pro) | $99 | 跨渠道执行 + 广告自动优化 + 竞品监控 |
| BabyLoveGrowth | $99 | 30 篇自动文章 + 2,500 站点外链网络 + Reddit AI |
| RankYak | $99 | 每天 1 篇文章 + 自动发布 + 外链交换 |
| MarketMuse (Optimize) | $99 | 内容优化 + 规划 |
| Ahrefs (Lite) | $129 | SEO 分析套件 |
| Semrush (Pro) | $139.95 | 完整 SEO + PPC 套件 |
| Otterly.ai (Standard) | $189 | AI 搜索监控 (100 prompts) |
| Helena (Pro Plus) | $199 | 更高配额的跨渠道执行层 |
| Semrush One | $199 | SEO + AI 可见度捆绑 |
| Surfer SEO (Scale AI) | $219 | 内容优化 + AI 生成 |
| Semrush (Guru) | $249.95 | 高级功能 + 历史数据 |
| Ahrefs (Standard) | $249 | 完整功能 |
| MarketMuse (Strategy) | $499 | 完整内容策略 + 规划 |
| Otterly.ai (Pro) | $989 | AI 搜索监控 (1,000 prompts) |
| **GenGrowth (目标)** | **待定** | **全链路增长自动化** |

### GenGrowth 定价建议

1. **$99/月是轻量 AI 营销执行层的主流锚点** -- 由 Okara、Helena Pro、BabyLoveGrowth 和 RankYak 共同设定
2. **$39/月开始出现“可试用的 AI 营销执行层”** -- Helena Starter 和 Blaze Starter 正把 SMB 对自动化营销的心理门槛进一步拉低
3. **$129-$250/月是 "专业 SEO 工具" 区间** -- Ahrefs/Semrush/Surfer 的定价区间
4. **$500-$1,000/月是 "企业级监控"** -- MarketMuse Strategy 和 Otterly Pro 的定价区间
5. **GenGrowth 的价值高于以上两个品类之和** -- 发现 + 策略 + 执行 + 归因 + 优化
6. **建议定价区间**: $149-$299/月，定位在轻量执行层之上、企业 SEO 套件之下，体现“闭环 AI 营销增长团队”的价值
7. **替代方案**: 分层定价，$99/月发现+策略层，$199/月完整执行+优化层
8. **市场趋势**: 61% 的 SaaS 公司现在采用基于用量的定价 (收入增速快 38%)。AI 工具比非 AI 工具溢价 10-25%。可考虑用量元素 (每次执行的 credits、每个策略生成的 credits)。

---

## 6. 竞争 SWOT 分析 (GenGrowth)

### 优势

| 优势 | 为什么重要 |
|------|-----------|
| 完整闭环 (发现 -> 优化) | 唯一覆盖完整增长生命周期的产品 |
| 4 项输入 onboarding | 品类内最低的价值获取门槛 |
| 信号驱动优化 | 系统自动学习，无需人工定期检查 |
| Social-First 验证 | 防止在未经测试的主题上浪费资源 |
| 渠道隔离归因 | 以初创预算获得企业级测量精度 |
| 可解释 AI | 每条建议都展示推理过程和数据来源 |
| GEO 集成到评分中 | 不是附加功能，而是机会评估的核心维度 |
| 带问责的人工覆盖 | 信任而不盲信 |
| Playbook 知识复用 | 跨实验和产品积累的制度记忆 |

### 劣势

| 劣势 | 缓解措施 |
|------|---------|
| 新产品，未经规模验证 | astrologywiki.com 作为首个案例研究 (0 -> 5000 用户) |
| 产品解释复杂 (6 层架构) | 营销聚焦于 "4 项输入，一切自动化" 的简洁信息 |
| 需要 GSC/GA4 连接才能发挥全部能力 | 冷启动模式用 Google Suggest + PageSpeed 作为后备 |
| 没有独立 GEO 面板 (不像 Peec/Otterly) | GEO 嵌入评分中 -- 可后续添加专用视图 |
| 没有 CMS 自动发布 (不像 BabyLoveGrowth) | 执行队列含手动发布步骤；CMS 集成在路线图中 |

### 机会

| 机会 | 行动 |
|------|------|
| "AI CMO" 品类全新 (2026 年 3 月) | 将 GenGrowth 定位为 "严肃的" AI CMO，vs Okara 的 "玩具" |
| GEO 日益关键且工具碎片化 | GenGrowth 的集成 GEO 评分领先市场 |
| 竞品缺乏归因 | 归因是 GenGrowth 最强的护城河 -- 在营销中强调 |
| $99/月竞品开始提供执行，但仍缺少归因与实验层 | "我们不仅做了，还能解释为什么有效、该放大什么、该停止什么" |
| BabyLoveGrowth 的外链交换有 SEO 风险 | 将 GenGrowth 合规的外链建设定位为更安全的替代方案 |
| 没有竞品有跨渠道验证 | Social-First 探测是独特且可防御的 |

### 威胁

| 威胁 | 应对 |
|------|------|
| Ahrefs/Semrush 添加执行功能 | 它们是分析优先的；执行需要不同的架构 |
| Okara 融资并实现执行功能 | GenGrowth 的 6 层架构在结构上更深 |
| Helena/Enrich Labs 以低价将跨渠道执行商品化 | 用归因、Playbook、Social-First 验证建立更高价值锚点，避免卷“内容/帖子配额”，强调 GenGrowth 是更完整的 AI 营销增长团队 |
| 技术团队用 Gumloop 自建营销 agents | 强调开箱即用的增长判断、归因和复盘体系，不与 builder 拼底层灵活性 |
| Kana ($15M 种子轮) 向下沉市场扩展 | 它们的企业焦点和有机增长不同；密切关注 |
| AI 工具商品化内容生成 | GenGrowth 竞争的是完整闭环，而非仅内容 |
| Google 惩罚 AI 生成内容模式 | GenGrowth 的 Social-First 验证确保内容有真实需求 |
| 客户对 "AI CMO" 品类困惑 | 清晰定位: "闭环 AI 营销增长团队，不是营销聊天机器人" |

---

## 7. 竞争话术框架

### 对标 Okara AI CMO

> "Okara 告诉你添加 H1 标签。GenGrowth 发现机会、生成内容策略、执行内容、衡量影响，并自动扩大有效的做法 -- 全程只需 4 项输入。"

**需要强调的差异化要点**:
- 执行，而不仅仅是建议
- 归因和测量
- 自优化闭环
- 跨渠道验证 (Social-First)

### 对标 Ahrefs / Semrush

> "你已经知道该定位哪些关键词。GenGrowth 将这些机会转化为已执行的策略和可衡量的结果 -- 自动完成。"

**需要强调的差异化要点**:
- 它们缺少的执行层
- 它们无法提供的归因
- 替代人工协调的自动化

### 对标 BabyLoveGrowth

> "自动发布内容只是第一步。GenGrowth 先发现正确的主题，通过社媒互动验证它们，跨渠道执行，衡量归因，并基于真实信号优化。"

**需要强调的差异化要点**:
- 发现和策略生成 (不只是内容生产)
- Social-First 验证
- 多渠道归因
- 没有有风险的外链交换网络

### 对标 Helena / HireHelena

> "Helena 像一支能替你发内容、调广告、跑邮件的 AI 营销团队。GenGrowth 更像一支会先做机会判断、再执行、隔离归因、验证信号，并把经验沉淀成 Playbook 的 AI 营销增长团队。"

**需要强调的差异化要点**:
- 闭环 AI 营销增长团队 vs 通用营销执行团队
- 第一方归因与 UTM 指纹，而不是仅有绩效简报
- Social-First 验证与实验排序，而不是直接放大内容产出
- 更适合 SaaS / 内容站 / 需要可审计增长闭环的团队

### 对标 Blaze.ai

> "Blaze.ai 擅长把内容快速规划、生成并分发出去。GenGrowth 更强调在执行前先判断最高杠杆机会，执行后做归因，最后把有效模式持续放大。"

**需要强调的差异化要点**:
- 增长判断与实验排序，而不只是内容与渠道自动驾驶
- 第一方归因与可审计决策链，而不是仅有学习环路
- 更强的 SEO/GEO/竞品监控与 Social-First 验证
- 更适合需要知道“为什么增长”的团队，而不是只想提高内容产能的团队

### 对标 "我们直接招人"

> "一个完整增长团队每年花费 $400,000-$600,000。GenGrowth 以极小的成本提供该团队的执行力，同时 24/7 运转、保留制度记忆和透明归因。"

### 对标 "我们手动做"

> "手动增长运营每周消耗 20+ 小时在系统应该处理的任务上。6 个月后，你的手动流程什么也没学到。GenGrowth 将每个实验的经验复合到下一个。"

---

## 8. 数据源对比

了解竞品使用什么数据源，可以揭示 GenGrowth 在信息层面的优势。

| 数据源 | GenGrowth | Okara | Ahrefs | Semrush |
|--------|-----------|-------|--------|---------|
| Google Search Console (直连) | 是 | 否 | 否 | 否 |
| Google Analytics 4 (直连) | 是 | 否 | 否 | 否 |
| Google Suggest | 是 (冷启动) | 未知 | 否 | 是 |
| PageSpeed Insights API | 是 | 是 | 否 | 否 |
| 自有外链爬虫 | 否 | 否 | 是 (最大) | 是 (第二) |
| 第三方外链 API | 计划中 | DataForSEO/Moz | N/A | N/A |
| AI 平台 API (GEO) | Perplexity (M2) | ChatGPT/Claude/Perplexity/Gemini | 否 | 否 |
| Reddit API | 是 (OAuth) | 是 | 否 | 否 |
| X API | 是 (OAuth) | 计划中 | 否 | 否 |
| UTM 指纹 | 是 (自有) | 否 | 否 | 否 |

**GenGrowth 的数据优势**: 直连 GSC + GA4 提供了没有竞品能获取的第一方数据。这使得归因精度达到第三方数据无法实现的水平。

---

## 9. 战略建议

### 9.1 短期 (0-3 个月)

1. **发布 astrologywiki.com 案例研究** -- 用真实数据证明 0 -> 5000 增长的说法。这是最重要的竞争资产。
2. **添加 GEO 面板视图** -- 将 GEO 评分维度作为可见功能呈现 (目前嵌入在机会评分中)。竞品正在将 GEO 作为独立产品营销。
3. **发布对比页** -- `/compare/gengrowth-vs-okara-ai-cmo`、`/compare/gengrowth-vs-hirehelena`、`/compare/gengrowth-vs-blaze-ai`、`/compare/gengrowth-vs-manual-growth`、`/compare/gengrowth-vs-ahrefs`。这些页面能捕获高意图搜索流量。
4. **强调归因** -- 没有竞品做好这一点。将 "透明、可审计的归因" 作为主要营销信息。

### 9.2 中期 (3-6 个月)

5. **CMS 自动发布集成** -- 补齐与 BabyLoveGrowth 的执行差距。使 GenGrowth 能直接发布到用户的 CMS (WordPress, Webflow, 自定义)。
6. **将 GEO 扩展到 4 个平台** -- 目前仅 Perplexity (M2)。添加 ChatGPT、Claude、Gemini 可见度追踪，匹配 Okara 的覆盖范围。
7. **免费层/工具策略** -- ROI 计算器和 A/B 计算器 (已在 SPEC 中) 作为漏斗顶部工具。以 GenGrowth 品牌作为独立免费工具发布。
8. **建设 Playbook 库** -- 随着更多客户使用 GenGrowth，发布匿名化的成功 Playbook。这创造了竞品无法复制的内容护城河。

### 9.3 长期 (6-12 个月)

9. **跨产品模式匹配** -- GenGrowth 的 Playbook 系统能推荐在相似产品上验证过的策略。随着用户基数增长而复合。
10. **API / 生态系统策略** -- 如果 Ahrefs/Semrush 添加执行功能，GenGrowth 可以集成它们的分析作为数据源，同时维持编排和优化层。
11. **垂直模板** -- 基于积累的 Playbook 数据，为常见产品类型 (内容站、SaaS、marketplace、电商) 预建增长模板。

---

## 10. 核心结论

1. **"AI CMO" 品类处于萌芽期** (2026 年 3 月)。GenGrowth 有窗口期在品类商品化之前定义标准。

2. **竞品仍缺少可验证的完整闭环**。Okara 建议但不执行。BabyLoveGrowth 和 Helena 能执行，但公开能力更接近渠道自动化/营销执行团队，归因和学习闭环仍弱。Blaze.ai 更接近内容与分发自动化团队。Ahrefs 分析但不行动。GenGrowth 仍是少数把发现、策略、执行、衡量与优化统一到同一支 AI 营销增长团队里的产品。

3. **归因是最深的护城河**。没有竞品提供渠道隔离的 UTM 指纹加 6 维数据完整性验证。这应该是首要营销信息。

4. **GEO 集成是结构性优势**。竞品将 GEO 追踪作为独立功能附加，而 GenGrowth 将其嵌入核心机会评分公式。这意味着 GEO 影响每一条策略建议，而不仅仅是一个仪表盘指标。

5. **$99/月已成为轻量 AI 营销执行层的价位**。GenGrowth 应该定价在此之上，以表明它卖的是更完整的 AI 营销增长团队，而不是渠道自动化套餐。

6. **最大的竞争对手仍然是 "手动做"**。营销应该聚焦于手动增长运营的痛苦 (每周 20+ 小时浪费、无学习闭环、无归因)，与对比其他工具同等重要。

---

## 附录 A: Okara AI CMO 数据流 (详细)

基于 astrologywiki.com 分析评估 (2026-03-17):

```
步骤 1: URL 输入
  |
  v
步骤 2: 网页爬虫 (headless browser)
  -> 提取: HTML 结构、meta 标签、内容、链接、图片
  -> 耗时: ~30 秒
  |
  v
步骤 3: 产品理解 (LLM)
  -> 输入: 爬取的内容
  -> 输出: 产品摘要、目标受众、价值主张
  -> 生成: "Product Information" 文档
  |
  +--> 步骤 4a: SEO 审计 (并行)       步骤 4b: 竞品搜索 (并行)
  |    |                                |
  |    +-> PageSpeed Insights API       +-> 通过搜索 API 发起 20+ 次
  |    |   (性能、可访问性、最佳实践、    |   网页搜索查询 (Serper/DataForSEO)
  |    |    SEO 评分)                   |
  |    |                                +-> LLM 综合竞品列表
  |    +-> HTML 分析                    |   (The Pattern, Selfgazer,
  |    |   (meta 标签、H1、移动端、     |    Astro.com, Co-Star 等)
  |    |    HTTPS、robots.txt、sitemap) |
  |    |                                +-> 生成: "Competitor Analysis"
  |    +-> 外链 API                     |   文档 (Max 计划专属)
  |    |   (DA、引用域名、              |
  |    |    链接速度)                    +-> 生成: "Brand Voice Guide"
  |    |                                     (Max 计划专属)
  |    +-> CrUX 数据
  |        (LCP、TBT、CLS、FCP)
  |
  v
步骤 5: GEO 分析
  -> 调用 ChatGPT/Perplexity/Claude/Gemini API
     发送品牌相关查询
  -> 测量: 提及频率、位置、情感倾向
  -> 计算: GEO Score (30/100)、Citation Potential、
     Visibility (42)、Sentiment (0.55)、Avg Position (12.5)
  -> 每个平台的具体建议
  |
  v
步骤 6: 生成建议
  -> LLM 综合所有数据生成可执行任务
  -> 示例: "添加主 H1、扩展内容、引用权威来源"
  -> 示例: "实施结构化数据和作者 E-E-A-T 信号"
  -> SEO 评分: 62/100
  |
  v
步骤 7: 日常运营 (Max 计划)
  -> SEO Agent: 每日重新审计，呈现新建议
  -> Reddit Agent: 监控相关帖子，生成回复
  -> HN Agent: 监控相关帖子
  -> AI Writer: 针对已识别主题生成文章
  -> 所有结果汇入 "AI CMO Feed" 仪表盘
```

## 附录 B: Okara 各付费层级功能解锁表

| 功能 | Free (5 credits) | Pro ($20/月) | Max ($99/月) |
|------|:-:|:-:|:-:|
| 基础 SEO 审计 (页面速度、健康度、CWV) | 是 | 是 | 是 |
| 通过检查项 (10 项) | 是 | 是 | 是 |
| 外链统计 | 是 | 是 | 是 |
| GEO 评分 + 平台状态 | 是 | 是 | 是 |
| AI Chat (30+ 模型) | 受限 | 是 | 是 |
| Product Information 文档 | 是 | 是 | 是 |
| **Competitor Analysis 文档** | 锁定 | 锁定 | **是** |
| **Brand Voice Guide** | 锁定 | 锁定 | **是** |
| **Reddit Opportunities** | 锁定 | 锁定 | **是** |
| **Article Generation** | 锁定 | 锁定 | **是** |
| **Hacker News Posts** | 锁定 | 锁定 | **是** |
| **完整 AI CMO (日常运营)** | 锁定 | 锁定 | **是** |
