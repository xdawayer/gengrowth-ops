# 🚀 SEO 内容生产流水线 (v0.18 · 工业执行版)

> **设计准则**：动作即登记，零件即资产。拒绝文学创作，只准工业组装。

---

## 📊 选题登记表 (Topic Registry) 表头标准
在执行 SOP 前，请确保你的管理表格具备以下字段：

| 字段名称 | 对应英文 | 填写时机 | 填写内容示例 |
| :--- | :--- | :--- | :--- |
| **目标词** | Keyword | Step 1 | Aries career horoscope |
| **搜索意图** | Intent | Step 1 | Info / Compare / Tutorial / Utility / Experience |
| **内容等级** | Tier | Step 1 | Tier 1 (重装) / Tier 2 (标准) / Tier 3 (极简) |
| **模板模式** | Template | Step 1 | Definition / Comparison / Tutorial / Programmatic |
| **主权实体** | Entity | Step 2 | Midheaven (中天) |
| **痛点证据** | Friction | Step 3 | Reddit 案例：用户排盘时因时区选错导致 2° 误差 |
| **底层逻辑** | Logic | Step 3 | 机制：历法偏移；权衡：追求速度 vs 追求精度 |
| **转化出口** | CTA | Step 5 | `/app/calculator-pro` |
| **执行状态** | Status | 实时更新 | 选题 / 搜证 / 质检 / Published |
| **在线链接** | URL | Step 5 | `https://example.com/blog/aries-career` |

---


### STEP 1：准入预检与规格锁定 (10 分钟)
**目标**：判定词的生死，锁定生产规格。

1.  **搜词预检**：在 Google 无痕模式搜索关键词，观察前 10 名结果。
    *   **快败红线**：若产品首页/注册页 > 6 个 -> **直接放弃**。
2.  **定意图 & 定模板**：
    *   若结果全是“什么是...” -> **Intent: Info** | **Template: Definition**
    *   若结果全是“Best/Review/对比” -> **Intent: Compare** | **Template: Comparison**
    *   若结果全是“How to/步骤” -> **Intent: Tutorial** | **Template: Tutorial**
    *   若结果全是工具/视频/论坛 (杂乱) -> **Intent: Experience/Utility** | **Template: Programmatic**
3.  **定级别 (6:3:1 法则)**：
    *   Reddit/论坛 ≥ 3 个 -> **Tier 1 (必须去 Reddit 搜证)**
    *   商业价值高但竞品平庸 -> **Tier 1**
    *   纯科普/长尾占位 -> **Tier 2 或 Tier 3**
4.  **✍️ 登记动作**：在表中填入 **[Keyword]**, **[Intent]**, **[Tier]**, **[Template]**。并将 **[Status]** 设为 `选题`。

---

### STEP 2：实体主权搜证 (5 分钟)
**目标**：确定本文在站内的“独特性”，防止内容同质化。

1.  **提取术语 (Entities)**：
    *   **文章竞品**：将前三名大纲丢给 AI 提取核心术语。
    *   **视频/论坛竞品**：将视频简介或 Reddit 楼主描述丢给 AI 提取核心术语。
2.  **查重判定**：在登记表中 `Ctrl+F` 搜索 AI 提取出的术语。
    *   **原则**：避开已被其他文章占据的 Entity。
3.  **✍️ 登记动作**：选出一个全站唯一的、最能代表专业性的术语，填入 **[Entity]**。

---

### STEP 3：信息增益搜证 (20 分钟)
**目标**：抓取竞品没有的“真实零件”，拒绝 AI 废话。

1.  **Friction Mining (痛点挖掘)**：
    *   **Tier 1 必做**：搜索 `site:reddit.com "keyword" (sucks|problem|worst)`。
    *   **记录标准**：必须包含具体数字（%, $, hours）或具体报错（403, offset 2°）。
2.  **提炼 Logic**：将痛点发给 AI，要求输出：
    *   **Mechanism (机制)**：导致问题的底层科学/技术逻辑。
    *   **Trade-off (权衡)**：如果要获得 X，通常必须牺牲什么 Y。
3.  **✍️ 登记动作**：将抓到的案例填入 **[Friction]**，将 AI 提炼的逻辑填入 **[Logic]**。并将 **[Status]** 改为 `搜证完成`。

---

### STEP 4：AI 组装生产 (10 分钟)
**目标**：将表中的零件喂给 AI，一键出稿。

1.  **发送法律**：将《System Prompt》全文发送给 AI。
2.  **发送变量包**：根据登记表内容，按以下格式发送：
    ```markdown
    # Execute Assembly v0.18
    - Keyword: {目标词}
    - Intent: {意图}
    - Template: {模板模式}
    - Primary Entity: {主权实体}
    - Friction Case: {痛点证据}
    - Logic: {底层逻辑}
    - Requirements: 开头 120 字加粗直给结论；清理禁词；数字密度 > 3。
    ```
3.  **红线质检**：检查 AI 是否使用了禁词（leverage/unlock/synergy），数字是否真实，开头是否够快。

---

### STEP 5：发布与语义布线 (5 分钟)
**目标**：接入站点结构，完成商业闭环。

1.  **插入内链**：文章前 30% 必须链接至对应的 **Pillar Page**。
2.  **挂载转化**：在描述 **Friction (痛点)** 的位置，紧跟插入 **[CTA]** 链接。
3.  **✍️ 登记动作**：在表中填入正式 **[URL]**，并将 **[Status]** 改为 `Published`。

---

## 📉 执行红线 (Red Lines)
*   **不登记，不准写**：任何一列（尤其是 Friction 和 Logic）为空时，严禁进入出稿环节。
*   **资产同步**：搜到的 Friction 必须同时存入《统一素材库》，方便以后秒调取。
*   **AI 降级**：Tier 3 文章可以跳过 Step 3，直接用 AI 专家模拟法生成。
