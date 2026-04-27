---
title: GenGrowth / AstrologyWiki 平台账号注册与养号手册
date: 2026-03-12
updated: 2026-04-08
type: framework
version: v0.1
status: draft
tags:
  - account-access
  - platform-operations
  - registration
  - social-media
  - security
aliases:
  - 账号注册手册
  - platform-account-playbook
  - 平台账号治理手册
---

# GenGrowth / AstrologyWiki 平台账号注册与养号手册

日期：`2026-03-12`  
状态：`参考草案；部分待确认，部分未执行`

关联文档：
1. `docs/03-marketing/02-social-media/social-media-operations.md`
2. `docs/03-marketing/01-strategy/GenGrowth整体营销框架.md`
3. `docs/05-governance/contracts/2026-03-04-client-data-authorization-terms.md`
4. `docs/04-programs/planning/项目规划.md`

## 使用说明（重要）

1. 本文档可作为账号注册、养号、恢复和隔离的参考手册，但**不等于当前实际已执行清单**。
2. 文中标注 `待确认` 的部分，表示仍需结合真实主体资料、当前账号状态、已完成授权和平台最新规则复核后再执行。
3. 文中标注 `未执行` 的部分，表示当前团队尚未按该方案落地，仅保留为备查和后续参考。
4. 如果文中细节与当前实际操作不一致，以**已创建账号、当前授权状态、真实恢复资料和实际执行结果**为准。

## 1. 文档定位与推荐放置位置

推荐放在 `docs/05-governance/account-access/`。

原因：
1. 本文档核心是账号主体、注册物料、恢复方式、授权边界、IP 与设备隔离，不是营销文案或日常内容排期。
2. 文档会涉及邮箱、手机号、地址、恢复邮箱、2FA、计费资料等敏感字段，更适合归入治理模块。
3. `docs/03-marketing/02-social-media/social-media-operations.md` 已经定义了分层和节奏；本文只补“怎么安全注册、怎么养、怎么不踩平台规则”。

## 2. 业务前提与首批资产判断（待确认）

基于现有规划，当前阶段的目标不是“把所有平台全注册一遍”，而是支撑以下三件事：
1. `GenGrowth` 面向美国独立开发者和中国出海开发者，优先建立创始人信任、官方品牌背书和 Waitlist 承接。
2. 公开实验叙事默认由创始人账号承担，`GenGrowth` 官方号负责精选沉淀；不再默认长期维护 `GenGrowth Labs` 公开账号。
3. `AstrologyWiki` 是当前唯一可保留的独立产品样本，但仍应克制扩号，优先保留真正有转化价值的账号。

据此，首批建议是：
1. `L1` 必做：`Google Workspace`、统一账号台账、2FA 与恢复信息清单。
2. `L2` 必做：创始人 `X`、创始人 `LinkedIn`、`GenGrowth` 官方 `X`、`GenGrowth` LinkedIn Page。
3. `L3` 克制做：`AstrologyWiki` 独立 `X` 可以保留；`LinkedIn` 暂不建议；`Product Hunt` 只做产品页，不做所谓“公司账号”。
4. `Product Hunt` 的核心资产不是品牌账号，而是创始人/团队真实个人账号 + 产品页 + Maker 身份。

## 3. 红线与安全边界

本文档只讨论合规、低风险、可持续的注册与运营方案，不提供以下做法：
1. 伪造主体、伪造地址、伪造证件、伪造雇员身份。
2. 使用接码平台、一次性邮箱、租借手机号、买卖账号。
3. 使用代理池、住宅代理、云服务器 IP 或频繁切换国家来规避平台风控。
4. 通过多号互刷、互赞、互转、互评来做虚假互动。
5. 用公司号替代个人号去注册 `Product Hunt`、LinkedIn 个人档案等明确偏个人身份的平台入口。
6. 在账号受限后通过换壳、换号、换 IP 做封禁规避。

原则：
1. 真实性优先于“看起来像海外团队”。
2. 一致性优先于“短期通过率”。
3. 少而稳优先于“平台铺满”。

## 4. 基础注册物料总表（待确认）

以下字段在落地前必须先收齐，但本文档只保留字段模板，不填入真实敏感值。

| 类别      | 待填字段                                      | 用途                                   | 备注                                  |
| ------- | ----------------------------------------- | ------------------------------------ | ----------------------------------- |
| 主体信息    | `<legal_entity_name>`                     | 计费、合同、企业页资料                          | 如果尚无海外主体，不要伪造美国主体                   |
| 主体信息    | `<operating_brand_name>`                  | 品牌展示                                 | 当前为 `GenGrowth`                     |
| 主体信息    | `<product_brand_name>`                    | 产品展示                                 | 当前为 `AstrologyWiki`                 |
| 域名与 DNS | `<primary_domain>`                        | 主域名                                  | 当前建议 `gengrowth.ai`                 |
| 域名与 DNS | `<secondary_domain_1>`                    | 产品域名                                 | 当前为 `astrologywiki.com`             |
| 域名与 DNS | `<dns_registrar_login>`                   | 域名验证、邮箱、站点验证                         | 纳入受控凭据清单                        |
| 创始人实名   | `<founder_real_name_en>`                  | `X / LinkedIn / Product Hunt`        | 建议统一英文名，不改来改去                       |
| 创始人实名   | `<founder_real_name_cn>`                  | 公司、法务、团队内部映射                         | 仅内部记录                               |
| 创始人联系方式 | `<founder_primary_phone>`                 | 个人账号恢复                               | 必须可长期持有并可收国际短信                      |
| 运维联系方式  | `<ops_primary_phone>`                     | 品牌账号恢复                               | 不用接码；尽量与个人号分开                       |
| 恢复邮箱    | `<recovery_email_1>`                      | 账户恢复                                 | 建议不同于登录邮箱                           |
| 计费资料    | `<business_card_name>`                    | Workspace 等订阅                          | 优先公司卡；无则固定责任人卡                      |
| 计费资料    | `<billing_address>`                       | 账单地址                                 | 必须与真实支付主体一致                         |
| 公共资料    | `<company_website>`                       | LinkedIn Page / Product Hunt / X Bio | 当前建议 `https://gengrowth.ai`         |
| 公共资料    | `<product_website>`                       | 产品资料                                 | 当前为 `https://www.astrologywiki.com` |
| 法务资料    | `<privacy_url>` `<terms_url>`             | 提升可信度与审核通过率                          | 对外产品页建议先补齐                          |
| 品牌素材    | `<logo_square>` `<logo_round>` `<banner>` | 社媒头像/封面                              | 首批一次出齐，不用临时图                        |

建议新增一份仅内部可见的敏感字段附表，文件名可为：
`docs/05-governance/account-access/2026-03-12-account-sensitive-fields.md`

该附表只记录：
1. 真实手机号映射。
2. 恢复邮箱映射。
3. 地址与计费主体。
4. 证件与备用恢复方式。

## 5. 首批账号矩阵与命名建议（待确认）

### 5.1 L1 基础设施层

| 平台                 | 资产    | 推荐命名                                                   | 登录邮箱 / 主标识               | 注册物料                       | 备注                               |
| ------------------ | ----- | ------------------------------------------------------ | ------------------------ | -------------------------- | -------------------------------- |
| Google Workspace   | 主组织   | `GenGrowth Workspace`                                  | `gengrowth.ai`           | 主域名、DNS、计费卡、账单地址、2 个管理员手机号 | 用 `gengrowth.ai` 做主域             |
| Google Workspace   | 产品域接入 | `astrologywiki.com` 作为 secondary domain 或 alias domain | `astrologywiki.com`      | 产品域 DNS 验证                 | 低风险方案优先 alias / group，不急着单独开很多用户 |

### 5.2 L2 / L3 / L4 公开账号层

| 层级  | 平台           | 资产                  | 建议账号名 / 页面名     | Handle / URL 优先级                                | 是否现在创建                                                   |     |
| --- | ------------ | ------------------- | --------------- | ----------------------------------------------- | -------------------------------------------------------- | --- |
| L2  | X            | 创始人个人号              | `Lynne Wang     | Building GenGrowth`                             | 保留现有真实个人 handle；如需新号，优先 `@lynnewang` / `@buildwithlynne` | 是   |
| L2  | X            | 官方品牌号               | `GenGrowth`     | `@gengrowth`，备选 `@gengrowthai`                  | 是                                                        |     |
| L3  | X            | 产品号                 | `AstrologyWiki` | `@astrologywiki`，备选 `@astrologywikiapp`         | 是，但排在官方号之后                                               |     |
| L2  | LinkedIn     | 创始人个人档案             | `Lynne Wang`    | 个人 profile，不追求品牌式 handle                        | 是                                                        |     |
| L2  | LinkedIn     | 公司主页                | `GenGrowth`     | `/company/gengrowth`，备选 `/company/gengrowth-ai` | 是                                                        |     |
| L4  | LinkedIn     | AstrologyWiki 公司页   | `AstrologyWiki` | `/company/astrologywiki`                        | 否，当前不建议                                                  |     |
| L2  | Product Hunt | 创始人个人号              | `Lynne Wang`    | 个人 profile                                      | 是                                                        |     |
| L2  | Product Hunt | PM / 技术负责人个人号       | 真实英文名           | 个人 profile                                      | 建议有                                                      |     |
| L2  | Product Hunt | `GenGrowth` 产品页     | `GenGrowth`     | 产品页，不是公司账号                                      | 后创建，临近预热时                                                |     |
| L4  | Product Hunt | `AstrologyWiki` 产品页 | `AstrologyWiki` | 产品页，不是公司账号                                      | 仅在产品具备面向 PH 用户的发布价值时创建                                   |     |

## 6. 推荐公开简介模板

### 6.1 X

| 资产 | 显示名 | Bio 建议 |
|---|---|---|
| 创始人个人号 | `Lynne Wang | Building GenGrowth` | `China-based founder building GenGrowth for indie developers. Sharing growth experiments, attribution, SEO, and hard lessons from going from strategy to shipping.` |
| GenGrowth 官方号 | `GenGrowth` | `AI growth system for indie developers. From social probes to SEO assets, attribution, and weekly decisions. Join the waitlist:` |
| AstrologyWiki | `AstrologyWiki` | `Practical astrology guides for real questions. Compatibility, chart basics, retrograde explainers, and searchable astrology answers.` |

### 6.2 LinkedIn

| 资产 | 公开名称 | 简介建议 |
|---|---|---|
| 创始人个人档案 Headline | `Founder at GenGrowth | Building AI growth systems for indie developers` | 避免写空泛头衔，直接写目标用户与正在做的事 |
| 创始人 About 开头 | `I am a China-based founder building for global indie developers.` | 中国身份不需要隐藏，但表达要专业、英文优先、面向全球市场 |
| GenGrowth LinkedIn Page Tagline | `AI growth execution system for indie developers and small product teams` | 与官网价值主张一致 |

### 6.3 Product Hunt

| 资产 | Profile Headline 建议 | 备注 |
|---|---|---|
| 创始人个人号 | `Founder building GenGrowth for indie developers` | 用真实头像和真实姓名 |
| PM / 技术负责人个人号 | `Builder shipping growth experiments and product systems` | 方便在产品页挂 Maker |

## 7. Google Workspace 执行方案（部分待确认）

### 7.1 推荐架构

建议采用：
1. `gengrowth.ai` 作为 `primary domain`。
2. `astrologywiki.com` 接入同一个 Workspace。
3. 人员账号优先集中在 `gengrowth.ai`。
4. `astrologywiki.com` 的公开邮箱优先用 alias 或 group，例如 `hello@astrologywiki.com`、`support@astrologywiki.com`，不要一开始就开一堆独立 seat。

### 7.2 推荐邮箱规划

| 类型 | 推荐邮箱 | 用途 | 是否公开 |
|---|---|---|---|
| 超级管理员 1 | `gw-admin-01@gengrowth.ai` | Workspace 超级管理员 | 否 |
| 超级管理员 2 | `gw-admin-02@gengrowth.ai` | 备份超级管理员 | 否 |
| 日常运营 | `ops@gengrowth.ai` | 日常对外平台创建与通知 | 否 |
| 安全与恢复 | `security@gengrowth.ai` | 2FA、恢复、风险告警 | 否 |
| 财务 | `billing@gengrowth.ai` | 账单与订阅 | 否 |
| 法务 | `legal@gengrowth.ai` | 法务与合规 | 对外可视情况公开 |
| 品牌联系 | `hello@gengrowth.ai` | 官网公开联系邮箱 | 是 |
| 产品联系 | `hello@astrologywiki.com` | 产品公开联系邮箱 | 是 |
| 产品支持 | `support@astrologywiki.com` | 产品支持与反馈 | 是 |

### 7.3 注册物料

1. `gengrowth.ai` 的域名控制权与 DNS 登录信息。
2. 可长期使用的计费卡。
3. 真实账单地址。
4. 两个不同人的恢复手机号与恢复邮箱。
5. `privacy / terms / contact` 页面链接。

### 7.4 高成功率注册方案

1. 先确认 `gengrowth.ai` 可收发邮件，再开通 Workspace。
2. 用 `gengrowth.ai` 做主域，不要先用临时 Gmail 再大迁移。
3. 注册完成当天即创建第 2 个 super admin。
4. 先把 `gw-admin-01` 和 `gw-admin-02` 配好 2FA、恢复信息、备份码，再开其他邮箱。
5. `astrologywiki.com` 先作为同一 Workspace 的 secondary domain 或 alias 加入，不建议单独再开第二个 Workspace。

### 7.5 注意事项

1. Google 官方支持在一个 Workspace 中接入多个域名，但前提是你必须拥有并验证域名。
2. 至少保留两个超级管理员，且分别由不同人掌握。
3. 超级管理员不要当日常工作邮箱使用。
4. 恢复手机号、恢复邮箱、备份码、DNS 凭据必须进入受控凭据清单，并保留离线副本。

## 8. 凭据与恢复信息管理（暂不指定工具）

当前决定：先不把 `1Password` 作为既定前提工具，但这不影响账号体系落地。  
无论未来使用哪种工具或方式，最低要求必须满足：

1. 所有根账号、恢复信息、账单信息、域名凭据必须有统一的受控记录。
2. 至少有 `2` 位核心成员掌握根账号恢复路径，避免单点失控。
3. 主密码、2FA 秘钥、恢复码不能只放在同一处，必须保留离线副本。
4. 公开运营账号能走 `OAuth` 或平台角色授权时，不共享密码。
5. 敏感字段与恢复资料要和公开文档分开保存；公开文档只保留字段模板，不直接落真实值。

## 9. X 执行方案（参考方案，部分未执行）

### 9.1 平台判断

结合当前营销框架，`X` 是当前对 `GenGrowth` 最重要的获客与 Build in Public 平台，所以必须有：
1. 创始人真实个人号。
2. 官方品牌号。
3. `AstrologyWiki` 产品号可保留，但不急于做成高频矩阵。
4. C 端实验的公开解释默认由创始人账号承担，官方号做精选沉淀，不再默认单设 Labs 公开账号。

### 9.2 注册物料

| 资产 | 登录邮箱 | 恢复邮箱 | 手机号 | 地址 / 账单 |
|---|---|---|---|---|
| 创始人个人号 | 创始人长期个人邮箱 | `<founder_recovery_email>` | `<founder_primary_phone>` | 不涉及公开地址 |
| GenGrowth 官方号 | `ops@gengrowth.ai` | `security@gengrowth.ai` | `<ops_primary_phone>` | 不涉及公开地址 |
| AstrologyWiki | `ops@gengrowth.ai` 或 `hello@astrologywiki.com` | `security@gengrowth.ai` | `<ops_secondary_phone>` | 不涉及公开地址 |

### 9.3 高成功率注册方案

1. 先完善创始人真实个人号，再开官方号。
2. 每次只注册一个新公开账号；不要同一时段连续注册多个 `X` 新号。
3. 新号注册后 30 分钟内完成头像、封面、Bio、链接、地区、邮箱确认和 2FA。
4. 个人号与品牌号不要共用完全同一套头像、Bio 结构与首批内容。
5. 用认证器或安全密钥启用 2FA，优先不用短信作为唯一第二因子。

### 9.4 养号原则

1. 先完善创始人真实个人号，再开官方号；产品号排在官方号之后。
2. 每次只注册一个新的公开账号，不在同一时段连续拉起多个新号。
3. 新号先补齐头像、封面、Bio、链接、地区、邮箱确认和 2FA，再做低频真实互动。
4. 冷启动阶段先以回复、评论、轻内容为主，不急着发链接，不做 DM 轰炸。
5. 创始人号先承担信任输出与实验解释，官方号先承担定位与低频更新，产品号保持低频。

### 9.5 注意事项

1. `X` 允许基于不同用途运营多个账号，但前提是真实、透明、非批量注册、非互刷。
2. 同一手机号最多可关联 `10` 个 `X` 账号，但内部仍建议不要把所有关键号都压在一个号码上。
3. 不要让多个自有账号在冷启动期高密度互赞互转互评。
4. 不要用“看起来像美国人”的假头像、假英文履历或 AI 头像去包装创始人号。

## 10. LinkedIn 执行方案（参考方案，部分未执行）

### 10.1 平台判断

`LinkedIn` 不是主获客战场，但对创始人信任、融资叙事、B2B 合作和品牌合法性很重要，所以应保留：
1. 创始人真实个人档案。
2. `GenGrowth` Company Page。
3. `AstrologyWiki` 暂不建议建 Page，除非后续出现团队招聘、BD、PR 或品牌搜索需求。

### 10.2 注册物料

| 资产 | 登录邮箱 | 需要材料 | 备注 |
|---|---|---|---|
| 创始人个人档案 | 创始人长期个人邮箱 | 真实姓名、真实头像、英文 Headline、官网链接、过往履历 | 必须先把个人 profile 做完整 |
| GenGrowth Company Page | 创始人 LinkedIn 账号发起 | 公司名、网站、行业、公司规模、公司类型、Tagline、Logo | Page 通过个人档案创建 |

### 10.3 高成功率注册方案

1. 先把创始人个人档案补齐，再建 Company Page。
2. 个人档案至少完成：真实姓名、头像、Headline、About、当前职位、官网链接、50+ 相关连接。
3. 建 Page 后当天加第 2 个 super admin。
4. Page 创建后 24 小时内发首条介绍帖，不留空壳页面。

### 10.4 养号原则

1. 先把创始人个人档案补完整，再创建 `GenGrowth` Company Page。
2. 个人档案优先补真实履历、官网链接、头像、Headline 和 About，而不是急着发内容。
3. 冷启动期先做定向连接、评论和少量内容发布，避免 Page 长期空壳或高频硬广。
4. 若创始人档案资料明显不完整，不要急着创建 Company Page。

### 10.5 注意事项

1. LinkedIn Page 必须通过个人账号创建，不存在独立“品牌个人号”替代方案。
2. 最好保留两个 super admin，避免单点失控。
3. 如果创始人档案还是空白、连接太少、资料不完整，不要急着建 Page。
4. 创始人中国身份不需要隐藏，但建议用英文、专业、全球化表述，不要让档案看起来像临时营销号。

## 11. Product Hunt 执行方案（参考方案，部分未执行）

### 11.1 平台判断

`Product Hunt` 的核心不是“开一个公司账号”，而是：
1. 用真实个人账号建立创始人 / Maker 身份。
2. 在合适的时机创建产品页、Draft、Teaser、Launch。
3. 把产品页的 `Maker`、`Hunter`、产品链接、`X` 链接、评论互动准备好。

### 11.2 首批建议

| 资产 | 是否需要 | 推荐方案 |
|---|---|---|
| 创始人个人号 | 必须 | 用真实姓名、真实头像、真实简介创建 |
| PM / 技术负责人个人号 | 建议 | 用于未来挂 Maker 与评论互动 |
| GenGrowth 产品页 | 后续必须 | 产品预热前创建 Draft / Teaser |
| AstrologyWiki 产品页 | 视场景而定 | 如果面向 PH 用户没有明确吸引力，可暂缓 |
| 公司账号 | 不适用 | `Product Hunt` 不建议公司账号去发产品 |

### 11.3 注册物料

1. 创始人真实英文名。
2. 创始人真实头像。
3. 创始人英文 headline 与 bio。
4. 可长期持有的个人登录方式，优先 `Google / LinkedIn / X` 中最稳定的一种。
5. 官网链接、产品链接、品牌 `X` 账号。

### 11.4 高成功率注册方案

1. 先创建创始人真实个人号，不要用品牌名或公司名注册。
2. 完成 onboarding 后，补齐姓名、头像、headline、bio、外部社媒连接。
3. 至少先进行 2-4 周真实浏览、点赞、评论与互动，再做正式发帖或 Launch。
4. `GenGrowth` 的 Launch 由创始人个人号主导；Maker 挂团队真实成员。
5. `AstrologyWiki` 只有在你确定它对 Product Hunt 社区有清晰的“产品故事”时才上。

### 11.5 养号原则

1. 先完成真实个人 profile，再开始准备产品页或 Launch。
2. 先做真实浏览、点赞、评论和互动，不要一注册就急着发产品。
3. `GenGrowth` 的 Launch 由创始人真实个人号主导；Maker 挂真实成员。
4. 若 `AstrologyWiki` 对 Product Hunt 社区没有明确产品故事，可以继续暂缓。

### 11.6 注意事项

1. Product Hunt 明确要求用个人账号参与；公司账号不能用来 post / hunt。
2. 被标记时，优先补齐真实姓名、真实头像、完整 bio 与连接的社媒，而不是另起新号。
3. 不要靠批量小号投票或引导低质量刷票；这会直接伤害 Launch 健康度。

## 12. IP、设备、Cookie 与权限隔离方案（待确认）

### 12.1 账号隔离分区

| 分区 | 账号 | 设备建议 | 浏览器建议 | 网络建议 |
|---|---|---|---|---|
| Admin 区 | Workspace、域名、计费、核心恢复资料 | 仅 1-2 台核心管理设备 | 独立浏览器 Profile | 稳定家庭 / 办公网络；必要时仅用自有固定出口 |
| Founder 区 | 创始人 `X / LinkedIn / Product Hunt` | 创始人个人手机 + 个人电脑 | 独立 Founder Profile | 保持长期一致的登录环境 |
| Brand 区 | `GenGrowth` 官方号、LinkedIn Page | 运营电脑 | 独立 Brand Profile | 与 Founder 区可同网，但不共用 cookie |
| Product 区 | `AstrologyWiki` | 运营电脑 | 独立 Product Profile | 与 Brand 区物理可同机，逻辑必须隔离 |

### 12.2 IP 与网络原则

1. 使用稳定、可长期复用的网络环境。
2. 不使用机场共享节点、代理池、住宅代理、云服务器 IP。
3. 同一个账号在冷启动前 30 天内，尽量保持在少量可信设备和少量可信网络中登录。
4. 如果因跨境网络稳定性需要 VPN，只使用团队自控、固定出口、长期一致的方式，不要频繁切换国家。
5. 不要在公共 Wi-Fi 上登录根账号。

### 12.3 权限隔离原则

1. 根账号与公开运营账号分开。
2. 公开运营账号能 OAuth 就 OAuth，能 Page Admin 就 Page Admin，不共享密码。
3. 创始人个人号与官方号分开控制，避免“一人离线，全盘停摆”。

## 13. 创始人中国身份的处理原则

核心原则不是“隐藏中国身份”，而是“用真实、专业、全球化表达降低平台和用户的不确定感”。

建议：
1. 创始人个人档案使用真实英文名，不用伪造西方身份。
2. 公开简介可以直接写 `China-based founder building for global indie developers`，这比假装美国本土创始人更稳。
3. 如果公司当前没有美国或香港主体，不要在 `LinkedIn Page`、计费地址、法务页中写一个并不存在的海外主体。
4. 如果后续成立新主体，必须同步更新官网页脚、隐私条款、账单地址、LinkedIn Page、Google Workspace billing 信息，不要只改一个地方。
5. 创始人个人号可承担“跨文化解释者”角色，把“中国出海开发者视角 + 全球独立开发者问题”结合起来，这反而是差异化。

## 14. 推荐注册顺序（未执行，仅供参考）

推荐顺序如下：
1. 先完成域名、DNS、`Google Workspace`、恢复信息清单等基础设施。
2. 再整理创始人 `LinkedIn` 个人档案与创始人 `X` 个人号。
3. 然后创建 `GenGrowth` 官方 `X` 与 `GenGrowth` LinkedIn Page。
4. `AstrologyWiki` `X` 视资源情况后置，不作为首批必做事项。
5. `Product Hunt` 优先是真实个人账号，产品页在准备好素材后再创建。

不建议的顺序：
1. 第一天就同时注册 4 个公开社媒号。
2. 先注册 `Product Hunt` 然后长期空号不互动。
3. 先注册 `AstrologyWiki` 全平台账号，再回头补 `GenGrowth` 的 L1/L2 基础设施。

## 15. 目前最优的低风险组合结论（待确认）

如果目标是“全面、体系化、低风险”，当前最优组合不是“所有平台全开”，而是：
1. `Google Workspace` 统一承接 `gengrowth.ai` 与 `astrologywiki.com`。
2. 统一账号台账与恢复信息清单，作为根账号、恢复信息、账单与域名凭据的最小管理中枢。
3. `X` 上只保留 3 个关键资产：创始人、官方、AstrologyWiki（可选）。
4. `LinkedIn` 只保留 2 个关键资产：创始人个人档案、GenGrowth Company Page。
5. `Product Hunt` 只保留真实个人账号与后续产品页，不做“公司账号”。

这套方案兼顾：
1. 与 `项目规划.md 4.5` 的资产分层一致。
2. 与 `GenGrowth` 的美国独立开发者获客目标一致。
3. 与 `AstrologyWiki` 当前作为样本产品的资源现实一致。
4. 与平台当前官方规则的一致性更高。

## 16. 官方参考链接（2026-03-12 核查）

### Google Workspace

1. Multiple domains FAQ: https://support.google.com/a/answer/175747?hl=en
2. Security checklist for small businesses: https://support.google.com/a/answer/9211704?hl=en

### X

1. Authenticity policy: https://help.x.com/en/rules-and-policies/authenticity
2. Two-factor authentication: https://help.x.com/en/managing-your-account/two-factor-authentication
3. Add a phone number: https://help.x.com/en/managing-your-account/how-to-add-a-phone-number-to-your-account

### LinkedIn

1. Create a LinkedIn Page: https://www.linkedin.com/help/linkedin/answer/a543852/create-a-linkedin-page
2. Add admins on your LinkedIn Page: https://www.linkedin.com/help/linkedin/answer/a569144
3. LinkedIn Page admin roles permissions: https://www.linkedin.com/help/linkedin/answer/a550647
4. Create a LinkedIn Page best practices: https://www.linkedin.com/help/linkedin/answer/a553289

### Product Hunt

1. Getting Started: https://help.producthunt.com/en/articles/2305333-getting-started
2. How to post a product: https://help.producthunt.com/en/articles/479557-how-to-post-a-product
3. Hunter vs Makers and how to change them: https://help.producthunt.com/en/articles/10082986-hunter-vs-makers-and-how-to-change-them
4. How to resolve account or content issues on Product Hunt: https://help.producthunt.com/en/articles/11770306-how-to-resolve-account-or-content-issues-on-product-hunt
