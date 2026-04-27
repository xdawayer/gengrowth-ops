# Ahrefs 最简导出格式说明

> 用途：给增长情报档案提供最少但够用的 SEO / 流量证据  
> 适用范围：竞品增长调研、competitor dossier、Ahrefs 快照补充

---

## 1. 这次已上传的 Okara 报告包含什么

目录：

`参考资料/产品分析/okara.ai/`

当前已有 5 份文件：

1. `okara.ai-perf-subdomains_month6_daily_2026-04-15_16-19-07.csv`
   用途：看 6 个月内 organic pages 和 organic traffic 趋势

2. `okara.ai-top-pages-subdomains-all--compare_2026-04-15_16-19-35.csv`
   用途：看当前带量页面、流量变化、页面级机会

3. `okara.ai-organic-keywords-subdomains-allbyl_2026-04-15_16-21-16.csv`
   用途：看自然关键词、品牌词/非品牌词、意图分布

4. `okara.ai_orgcompetitors_subdomains_us_2026-04-15_16-22-41.csv`
   用途：看自然搜索重叠竞品

5. `okara.ai_orgcompetitors-map_subdomains_us_2026-04-15_16-22-23.csv`
   用途：看竞品关系图的总体量级

结论：

- 这批文件已经足够作为调研起点
- 其中 Ahrefs 负责提供 **SEO / 流量侧证据**
- 其余公开信息，如定位、定价、首页文案、内容分发、社媒痕迹，可由我后续自行补齐

---

## 2. 当前文件格式上要注意的坑

- 有些文件虽然扩展名是 `.csv`，实际是 **UTF-16 + Tab 分隔**
- 不是所有文件都能直接按普通 UTF-8 CSV 读取
- 同一批导出里混用了两种格式，会增加后续清洗成本

后续建议统一成：

- 编码：`UTF-8`
- 分隔符：英文逗号 `,`
- 第一行保留表头
- 文件名保留域名、报告类型、模式、日期时间

---

## 3. 后续最简导出版本

如果目标只是做一份 **增长情报档案**，Ahrefs 最少只需要导出 4 份 CSV。

### 必需 1：性能趋势

建议文件名：

`domain-perf-subdomains_month6_daily.csv`

最少需要字段：

- `Date`
- `Organic pages`
- `Organic traffic`

用途：

- 看流量是否在涨
- 看内容规模是否在涨
- 判断是短期爆发还是持续积累

### 必需 2：Top Pages

建议文件名：

`domain-top-pages-subdomains-compare.csv`

最少需要字段：

- `URL`
- `Current traffic`
- `Traffic change`
- `Current traffic value`
- `Current referring domains`
- `Current # of keywords`
- `Current top keyword`
- `Current top keyword: Country`
- `Current top keyword: Volume`
- `Current top keyword: Position`

用途：

- 找带量页面
- 找增长页和下滑页
- 判断它靠首页、博客还是模板页吃流量

### 必需 3：Organic Keywords

建议文件名：

`domain-organic-keywords-subdomains.csv`

最少需要字段：

- `Keyword`
- `Country`
- `Location`
- `Branded`
- `Informational`
- `Commercial`
- `Transactional`
- `Volume`
- `KD`
- `CPC`
- `Current organic traffic`
- `Current position`
- `Current URL`

用途：

- 判断品牌词和非品牌词占比
- 判断内容更偏教育、转化还是导航
- 看哪些词真的带流量

### 必需 4：Organic Competitors

建议文件名：

`domain-orgcompetitors-subdomains-us.csv`

最少需要字段：

- `Domain`
- `Common keywords`
- `Share`
- `DR`
- `Current traffic`
- `Current traffic value`
- `Current # of pages`

用途：

- 看 SEO 重叠竞品是谁
- 看对手强弱
- 判断自己该和谁放在同一组研究

---

## 4. 可选导出

### 可选 1：Competitor Map

建议文件名：

`domain-orgcompetitors-map-subdomains-us.csv`

最少需要字段：

- `Competitor`
- `Current traffic`
- `Current traffic value`
- `Current # of pages`

用途：

- 适合快速扫盘
- 适合做“谁在这个主题里更大”这种粗判断
- 但不能替代正式的 `Organic Competitors`

### 可选 2：更多国家 / 全球版本

只有在以下情况再导：

- 产品明显不是美国市场为主
- 你要判断区域化增长
- 你已经发现 US 数据失真

否则默认先用 `US` 即可。

---

## 5. 开始调研前，你最少只需要给什么

如果要从 Ahrefs 报告继续做一份完整的增长情报档案，**你最少只需要提供 4 份 Ahrefs CSV**。

### A. 你提供

1. Ahrefs 最简 4 份 CSV

### B. 我自己补

下面这些公开资料默认由我自己查：

1. 官网首页
2. 定价页
3. 产品介绍页 / 功能页
4. Blog / 帮助中心 / 模板页
5. 创始人或品牌社媒主页
6. 产品发布帖
7. 可公开访问的评论、案例、招聘、社区痕迹

### C. 只有这些情况，才可能再向你要补充

1. 注册后 onboarding 截图
2. 产品内关键页面截图
3. 登录后才能看到的功能流
4. 你手头独有的会议纪要、销售情报、内部判断

也就是说：

- **公开网页信息，我自己补**
- **登录后或内部材料，如果需要，再单独向你要**

---

## 6. 最简交付包

以后只要你给我下面这个包，我就可以直接开始做一版调研：

### 必需

- 4 份 Ahrefs CSV

### 可选

- 你最想回答的 3 个问题
- 如果有的话，补 1 句你为什么研究这个竞品

如果连这些说明都没有，也能开做。
我可以先按：

- 文件名里的域名
- Ahrefs 表里的目标站点
- 默认美国市场口径

直接开始。

---

## 7. 一句话标准

**如果目标只是先做出一版可信的增长情报档案，Ahrefs 不需要导很多表；只要趋势、页面、关键词、竞品重叠这 4 类就够了。**
