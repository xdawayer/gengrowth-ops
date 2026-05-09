**🚀 SEO 内容生产流水线 (v0.18)**


  ---

  

  **STEP 1 — 选题登记与定级 (10 分钟)**

  

  **目标**：确认“值得写”且“不撞车”，并决定投入强度。

  

  **1.1 选择目标词**

  从关键词库[（GenGrowth 关键词研究主表）](https://docs.google.com/spreadsheets/d/1dejqDpYRZwxI-LgmtkgiobbwMyBcdt2vCFQWjlqDlZ4/edit?usp=sharing)中选出一个今天要做的目标词。

  

  **1.2 防撞检查**

  打开 [《选题登记表》](https://docs.google.com/spreadsheets/d/1HF7FXBMtl4LEySxaDPljRmlKstAKyaDDivLzLubVoSo/edit?usp=sharing)，使用 Ctrl + F 搜索该词及其近义词。

   - **命中**：说明意图已被覆盖。**立即换词**。

   - **未命中**：继续下一步。

  

  **1.3 SERP 定级 (6:3:1 法则)**

  在 Google 无痕模式搜索关键词，观察前 10 名结果类型：

   - **Tier 1 (重装执行)**：满足“Reddit/论坛 ≥ 3个”或“商业价值极高”。

   - **Tier 2 (标准执行)**：满足“教程/博客 ≥ 6个”且 SERP 稳定。

   - **Tier 3 (极简执行)**：搜索结果混乱或极冷门长尾词。

   - **快败规则**：若“产品首页/注册页 > 6个”，**直接放弃**，不写 Blog。

  

  **1.4 登记任务**

  在登记表中录入：目标词、Search Intent、Tier、以及本篇要占据主权的 Primary Entity。

  

  ---

  

  **STEP 2 — 信息增益取证 (20 分钟)**

  

  **目标**：抓取竞品没有的“真实零件”，拒绝废话。

  

  **2.1 抓取真实痛点 (Friction)**

  Google 搜索：site:reddit.com "关键词" problems 或 site:reddit.com "关键词" sucks。

   - **记录要求**：不准记形容词。必须记录具体步骤出错、具体参数报错、或具体浪费的时间数字。

   - **示例**：用户开启 API 时因权限未打开导致 403 报错，需额外排查 2 小时。

  

  **2.2 提炼机制与代价 (AI 辅助)**

  把痛点发给 AI，提问：

   1. 导致这个问题的底层机制（Mechanism）是什么？会产生什么实际后果（Consequence）？

   2. 如果用户想获得 X，通常需要牺牲什么 Y (Trade-off)？

  

  **2.3 资产同步 (关键动作)**

  将上述搜到的 **Pain Point、Mechanism、Trade-off** 随手复制进《统一素材库》。以后同类词直接调用，不再搜 Reddit。

  

  ---

  

  **STEP 3 — AI 组装生产 (10 分钟)**

  

  **目标**：将零件交给 AI 进行结构化输出。

  

  **3.1 发送法律 (System Prompt)**

  将《Advanced SEO Content System Prompt》-inbox/提示词.md全文发送给 AI。

  

  **3.2 发送燃料 (Variable Input)**

  按以下格式填充并发送：

  

   1 Variable Input:

   2 - Keyword: [目标词]

   3 - Associated Keywords: [AI 生成的 3 个近义词]

   4 - Primary Entity: [主权术语]

   5 - Friction Case: [Step 2 的痛点描述]

   6 - Mechanism: [AI 解释的底层逻辑]

   7 - Trade-off: [如果要 X，就必须牺牲 Y]

   8 - Monetization_URL: [该产品的注册/购买链接]

  

  ---

  

  **STEP 4 — 红线质检 (5 分钟)**

  

  **目标**：不读全文，只看硬指标。不合格直接打回。

  

  **4.1 查定义 (Answer Lock)**

  开头前 120 字是否**加粗并直接回答**了关键词疑问？（30 秒内必须让用户获得结论）。

  

  **4.2 查数字 (Evidence Density)**

  全文搜索 %、$、hours、degree。

   - **红线**：若全文无具体数字，判定为“AI 废话”，打回要求具象化。

  

  **4.3 查禁词 (No AI Fluff)**

  Ctrl + F 搜索：synergy, leverage, unlock, game-changing。

   - **红线**：存在 1 个即要求整段重写。

  

  **4.4 查决策 (Actionable)**

  文章末尾是否有对比表或明确的推荐结论？（用户读完必须知道下一步怎么选）。

  

  ---

  

  **STEP 5 — 发布与布线 (5 分钟)**

  

  **目标**：接入站点结构，完成商业闭环。

  

  **5.1 插入内链**

  在前 3 段自然插入一个链接，指向所属类别的 **Pillar Page**。

  

  **5.2 挂载转化 (CTA)**

  在提到 STEP 2 痛点（Friction）的位置，紧跟着插入注册链接或工具入口。

  

  **5.3 状态闭环**

  录入网站，在《选题登记表》标记为 **Published**，粘贴在线 URL。
