# 🚀 SEO 内容生产流水线 (v0.18 · 工业执行全案)

> **核心哲学**：不靠灵感写作，只靠逻辑组装。将 SEO 文章拆解为标准化零件，确保每一篇都具备“信息增益”。

---

## 📊 第一部分：基础设施 - 选题登记表 (Topic Registry)

在开始任何动作前，请确保你的协作表（Notion 或 Google Sheets）已建立以下字段。这些字段是 AI 组装的“燃料”。

| 字段名称 | 核心逻辑 | 填写示例 |
| :--- | :--- | :--- |
| **Keyword** | 目标词 | `Aries career horoscope` |
| **Intent** | 搜索意图 (User Goal) | `Compare` (对比/决策) |
| **Tier** | 投入强度 (T1/T2/T3) | `Tier 1` (重装执行) |
| **Template** | 结构模板 | `Comparison` (对比表模式) |
| **Entity** | 主权术语 (本文领土) | `Midheaven` (中天) |
| **Friction** | 真实证据 (Reddit/论坛) | `用户排盘因时区导致 2° 误差` |
| **Logic** | 底层机制与权衡 | `想要速度就得牺牲精度` |
| **CTA** | 商业出口 | `/app/calculator-pro` |
| **Status** | 实时状态 | `已发布 (Published)` |

---

## 🛠 第二部分：五步标准化生产流程

### STEP 1：准入预检与规格锁定 (决定“做不做”)
> **SEO 价值**：防止在无法排名的词（如纯产品词）上浪费工时，确保每一分投入都有回报。

1.  **SERP 扫描**：在 Google 无痕模式搜索关键词。
    *   **快败红线 (Fail Fast)**：若搜索结果前 10 名中，产品首页或注册页占了 6 个以上，**立即放弃**，将该词移交给“落地页优化组”。
2.  **意图判定 (Search Intent)**：
    *   **标题特征**：包含 "What is" (Info), "Best" (Compare), "How to" (Tutorial)。
    *   **载体判定**：若全是视频 -> 用户想看 Demo；若全是 Reddit -> 用户想听真话。
3.  **定级与选模**：
    *   **Tier 1**：Reddit 讨论多或商业价值高。
    *   **Template**：根据意图选模式（Definition / Comparison / Tutorial / Programmatic）。

**✍️ 登记动作**：在表中填入 `Keyword`, `Intent`, `Tier`, `Template`。
> **💡 避坑指南**：不要凭直觉定意图，必须看 Google 现在排在前面的页面长什么样。

---

### STEP 2：实体主权搜证 (决定“独特性”)
> **SEO 价值**：告诉 Google 你的文章拥有某个专业领域的“解释权”，避免与站内已有内容发生内耗（Cannibalization）。

1.  **竞品术语提取**：
    *   利用 AI 分析前三名竞品（文章、视频简介或论坛摘要）。
    *   提取出 5 个代表该话题专业性的术语（Entities）。
2.  **主权查重**：在登记表中 `Ctrl+F` 搜索这些术语。
    *   **原则**：选出一个**从未被其他文章作为“主词”**的术语。

**✍️ 登记动作**：选定一个核心术语填入 `Entity`。
> **💡 避坑指南**：主权实体越具体越好，不要选“Astrology”这种大词，要选“Midheaven”这种细分词。

---

### STEP 3：信息增益搜证 (注入“灵魂零件”)
> **SEO 价值**：这是对抗 AI 同质化的核心。通过真实世界的案例（Friction）和逻辑（Logic），提升页面的“专家度 (E-E-A-T)”。

1.  **真实痛点挖掘 (Friction Mining)**：
    *   **动作**：搜索 `site:reddit.com "keyword" (sucks|problem|bad)`。
    *   **目标**：找一个带数字或具体报错的“血泪史”。
2.  **逻辑提炼 (Logic)**：
    *   **Mechanism (机制)**：为什么用户会遇到这个坑？（技术/科学解释）。
    *   **Trade-off (权衡)**：如果用户想获得 A，必须牺牲 B（例如：免费版通常牺牲隐私）。

**✍️ 登记动作**：填入 `Friction` 案例和 `Logic` 结论。
> **💡 避坑指南**：严禁在 Friction 栏填形容词（如“很难用”），必须填具体事实（如“API 权限未开导致 403 报错”）。

---

### STEP 4：AI 组装生产 (自动化执行)
> **SEO 价值**：通过结构化的指令包，强制 AI 输出高密度、低废话的内容。

1.  **发送燃料包**：先发送系统提示词，再发送变量包：
    ```markdown
    # Assembly v0.18
    Keyword: {Keyword} | Intent: {Intent} | Template: {Template}
    Primary Entity: {Entity}
    Friction Case: {Friction}
    Logic: {Logic}
    ```
2.  **红线质检**：
    *   开头前 120 字是否**加粗并直接回答**了用户疑问？
    *   全文数字密度（%, $, hours）是否丰富？
    *   是否清理了 AI 禁词（synergy, leverage 等）？

**✍️ 登记动作**：更新 `Status` 为“初稿完成/质检中”。

---

### STEP 5：发布与语义布线 (商业闭环)
> **SEO 价值**：通过内链构建 Topic Cluster，通过 CTA 实现流量转金。

1.  **向上链接**：前 30% 必须包含一个指向 **Pillar Page** 的链接。
2.  **场景化转化**：在 Step 3 提到的痛点下方 20 字内，植入你的 `CTA` 链接。
3.  **全量同步**：将搜到的 Friction 存入《统一素材库》，作为公司资产。

**✍️ 登记动作**：填写正式 `URL`，将 `Status` 改为 `Published`。

---

## 📉 三大执行红线 (Zero Tolerance)

1.  **字段空缺红线**：只要 `Friction` 或 `Logic` 是空的，该任务自动作废，严禁出稿。
2.  **禁词红线**：出现一个 AI 禁词，整段重写。
3.  **资产库优先红线**：如果《统一素材库》里已有同类素材，严禁重新去 Reddit 搜索，直接复用。
