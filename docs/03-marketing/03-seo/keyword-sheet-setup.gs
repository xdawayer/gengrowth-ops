/**
 * GenGrowth 关键词研究主表 · 一键生成脚本 v2.0
 * 配合《关键词研究 SOP（六源挖掘 → 四桶分级）》使用
 *
 * 使用方法：
 * 1. 打开任意 Google Sheet → 扩展程序 → Apps Script
 * 2. 粘贴本文件全部内容，替换默认代码
 * 3. 运行 createGenGrowthKeywordSheet
 * 4. 授权后自动创建新文件，链接打印在日志中
 * ⚠️  运行后请先在 ⚙️配置 表填写 TOPIC_KEYWORDS（A7起）
 *
 * 生成 9 个工作表：
 *   ⚙️配置 / 关键词主表 / 🚀趋势词 / ⚡快速胜利 / 🎯战略词 / 📌长尾词 / 📋分桶规则 / 📊内容追踪 / 📈来源分析
 *
 * 列结构（关键词主表，A–X 共 24 列）：
 *   A  关键词         手动
 *   B  来源           下拉
 *   C  月搜索量       手动（Ahrefs/SEMrush）
 *   D  KD             手动
 *   E  CPC($)         手动（辅助参考，不作分类主条件）
 *   F  Trends比值     手动（近3M均值÷近6M均值，留空=平稳）
 *   G  Top10平均DR    手动（目标词 SERP Top10 平均DR，每词不同，查词时填写）
 *   H  SERP弱度       下拉（✅弱/⚠️中/❌强/未查）查词时同步判断，快速胜利桶必填
 *   I  自有站DR       手动（查词当时你的站DR快照，每词独立记录，不会被覆盖）
 *   J  DR差值         公式（G - I；正值=竞争强于你；负值=你已超越，仍✅通过）
 *   K  G1话题相关     公式（匹配配置!TOPIC_KEYWORDS，趋势词闸门1）
 *   L  G2可承接       下拉（Y/N，站内能承接该话题，趋势词闸门2）
 *   M  意图           公式（Commercial/Transactional/Problem-aware/Informational/待确认）
 *   N  DR过滤         公式（J>30→❌跳过，唯一真正的过滤关卡）
 *   O  分桶_自动      公式（四桶分类逻辑，不含人工干预）
 *   P  手动分桶       下拉（非空时覆盖O，R列显示桶名+"★"）
 *   Q  调整原因       手动（记录人工调整依据，供复盘是否调整规则）
 *   R  分桶           公式（最终结果：P非空→P+"★"，否则=O）★=人工调整
 *   S  AIO预判        公式（搜索量≥500+定义型词→⚠️疑似高风险，供人工抽检参考）
 *   T  AIO风险        下拉（高/低/未查）人工无痕窗口确认后填写
 *   U  排序权重       公式（快速胜利桶内排序：H列SERP弱度+M列意图）
 *   V  内容状态       下拉
 *   W  发布URL        手动
 *   X  备注           手动
 */

function createGenGrowthKeywordSheet() {
  var ss = SpreadsheetApp.create('GenGrowth 关键词研究主表');
  var CFG = "'⚙️配置'"; // 配置表引用（含特殊字符需单引号）

  // ────────────────────────────────────────────
  // SHEET 0: ⚙️配置
  // ────────────────────────────────────────────
  var configSh = ss.getActiveSheet();
  configSh.setName('⚙️配置');

  configSh.getRange('A1:B1')
    .setValues([['配置项', '值']])
    .setBackground('#37474f').setFontColor('#ffffff').setFontWeight('bold');

  configSh.getRange('A2:B3').setValues([
    ['客户产品名', ''],
    ['实验开始日期', '']
  ]);

  configSh.getRange('A5').setValue('TOPIC_KEYWORDS（趋势词G1相关性检测，每行一个话题词）');
  configSh.getRange('A5').setFontWeight('bold').setBackground('#e8f5e9');

  // 默认示例词（初始化后替换为实际产品话题）
  var defaultTopics = ['seo', 'marketing', 'growth', 'content', 'keyword'];
  for (var i = 0; i < defaultTopics.length; i++) {
    configSh.getRange(6 + i, 1).setValue(defaultTopics[i]);
  }
  configSh.getRange('A6:A25').setBackground('#f9fbe7');
  configSh.getRange('A6').setNote(
    '替换为客户产品相关的核心话题词（英文），最多20行（A6:A25）。\n' +
    '例 astrologywiki：astrology, birth chart, horoscope, natal chart, mercury retrograde\n' +
    '命中TOPIC_KEYWORDS → K列G1话题相关=✅相关（趋势词闸门1通过）'
  );

  configSh.setColumnWidth(1, 320);
  configSh.setColumnWidth(2, 180);

  // ────────────────────────────────────────────
  // SHEET 1: 关键词主表
  // ────────────────────────────────────────────
  var master = ss.insertSheet('关键词主表');

  var headers = [
    '关键词',         // A  1
    '来源',           // B  2
    '月搜索量',       // C  3
    'KD',             // D  4
    'CPC($)',         // E  5
    'Trends比值',     // F  6
    'Top10平均DR',    // G  7  ← 查词时手动填
    'SERP弱度',       // H  8  ← 前移，查词同步判断（必填）
    '自有站DR',       // I  9  ← 新增：查词当时站DR快照
    'DR差值',         // J  10 ← 公式 G-I
    'G1话题相关',     // K  11
    'G2可承接',       // L  12
    '意图',           // M  13
    'DR过滤',         // N  14
    '分桶_自动',      // O  15
    '手动分桶',       // P  16
    '调整原因',       // Q  17
    '分桶',           // R  18
    'AIO预判',        // S  19
    'AIO风险',        // T  20
    '排序权重',       // U  21
    '内容状态',       // V  22
    '发布URL',        // W  23
    '备注'            // X  24
  ];

  master.getRange(1, 1, 1, headers.length)
    .setValues([headers])
    .setFontColor('#ffffff').setFontWeight('bold').setFontSize(11);

  // 三色表头：深蓝=公式自动 / 深绿=必填手动 / 深灰=选填手动
  var navyCols  = [10, 11, 13, 14, 15, 18, 19, 21]; // J K M N O R S U
  var greenCols = [1, 2, 3, 4, 7, 8, 9];             // A B C D G H I
  var slateCols = [5, 6, 12, 16, 17, 20, 22, 23, 24]; // E F L P Q T V W X
  navyCols.forEach(function(c)  { master.getRange(1, c).setBackground('#1a237e'); });
  greenCols.forEach(function(c) { master.getRange(1, c).setBackground('#2e7d32'); });
  slateCols.forEach(function(c) { master.getRange(1, c).setBackground('#455a64'); });

  master.setFrozenRows(1);

  // 列头说明（关键易错列）
  var notes = {
    5:  'CPC仅做参考展示，不用于分桶判断。战略词的主条件是意图（K列），不是CPC高低。',
    6:  'Trends比值（手动，趋势词判断用）：近3个月均值 ÷ 近6个月均值。\n>1.2 = 近期搜索量明显上涨（趋势词候选）\n≈1.0 = 稳定平台期\n<0.8 = 衰退词，谨慎进入\n获取：Google Trends 或 Ahrefs "Trend"图表目测估算。留空视为平稳，不影响其他桶的分类，仅趋势词分桶条件使用。',
    7:  'Top10平均DR：在 Ahrefs SERP Overview 查看目标词 Top10 平均DR，手动填写。\n注意：每个词不同，不是竞品DR，是这个词的SERP竞争强度。',
    8:  'DR差值 = Top10平均DR（G）- 你的站DR（⚙️配置B2），自动计算。\n判断：差值>30→❌跳过；差值≤30（含负值）→✅通过\n负值（如-5）= 你的站DR已超越该词SERP均值，反而更应执行，属于正常情况。\n注：G列是首次查询时的快照，执行前如距填写超60天建议重新核查SERP。',
    9:  'G1话题相关：自动检测关键词是否命中⚙️配置!A7:A26的TOPIC_KEYWORDS列表。\n✅相关=话题相关；⚠️待确认=未命中，需人工判断后决定是否填J列=Y。\n初始化后必须先更新配置表话题词，否则默认示例词无意义。',
    10: 'G2可承接（手动）：站内是否有工具/内容/功能能承接该趋势词的用户需求？\n填Y才能进趋势桶；空值视为N。这是纯人工判断项，脚本无法自动识别。',
    11: '意图（自动，模式匹配，约80%准确）：\nCommercial: best/vs/alternative/review/pricing\nTransactional: buy/cost/free trial\nProblem-aware: fix/not working/error\nInformational: what is/how to/guide\n未命中→待确认，批量交Claude/GPT用SOP第四节prompt处理。',
    12: 'DR过滤（公式，唯一真正的过滤关卡）：基于H列DR差值自动判断。\n✅通过：DR差值≤30，可执行\n❌跳过：DR差值>30，当前站DR不足以竞争该词\n待填：G列未填，无法计算\n❌跳过的词仍留在主表，不删除。你的站DR提升后，在⚙️配置更新B2，此列自动重算，跳过词可能变绿转为可执行。',
    13: '分桶_自动：系统按SOP规则计算的分桶结果（公式列，勿直接修改）。\n如需调整，在N列选目标桶，O列说明原因。M列始终保留自动判断结果供复盘参考。',
    14: '手动分桶：非空时覆盖自动分桶（M列），P列显示"桶名★"。\n用途：纠正误分类/强制品牌词进指定桶/试验性调整。\n所有手动调整必须在O列填写原因，复盘时判断是否调整分类规则。',
    15: '调整原因示例：\n"品牌词，强制快速胜利" / "CPC=0且无商业意图，误入战略词" / "试验：观察低KD定义词SERP弱度表现"',
    16: '分桶（最终结果，只读公式列）：★=人工调整（N列非空），无★=自动分桶结果。\n⚠️ 请勿直接修改P列。如需调整：N列选目标桶→O列填原因→P列自动更新显示"桶名★"。\n各桶视图Sheet按此列筛选，是决定一个词"去哪里执行"的最终依据。',
    17: 'SERP弱度（手动，⚡快速胜利桶必填）：无痕窗口搜索目标词，观察Top10页面质量。\n✅弱：Top10中≥3个页面DR低/内容薄弱/用户体验差，可超越\n⚠️中：Top10中有1-2个可超越位置\n❌强：Top10全部为高质量高DR站点\n填写后T列排序权重自动更新，⚡快速胜利视图排序才有实际意义。',
    18: 'AIO预判（自动）：搜索量≥500且含 what is/meaning/definition/how does/explained 时自动标注。\n仅供参考，须在S列用无痕窗口实际确认后填写最终结论。',
    19: 'AIO风险（手动，R列标记⚠️疑似高风险词须优先确认）：无痕窗口搜索目标词，查看是否出现AI Overview框。\n高：搜索结果顶部有AI Overview摘要框（注意：须用无痕窗口，避免个性化影响）\n低：无AI Overview框\n未查：待确认\n高风险内容策略：避免纯定义型结构，改为操作型/对比型/案例型，增加原创视角和用户实际数据。',
    20: '排序权重（自动）：仅用于快速胜利桶视图排序。\nSERP弱度✅弱=3/⚠️中=2/❌强=1，Commercial或Problem-aware意图各+1分。\nQ列（SERP弱度）填完后排序才有实际意义。'
  };
  Object.keys(notes).forEach(function(col) {
    master.getRange(1, parseInt(col)).setNote(notes[col]);
  });

  // ── 下拉菜单 ──
  var dv = SpreadsheetApp.newDataValidation;
  master.getRange('B2:B500').setDataValidation(
    dv().requireValueInList(['竞品映射','内容缺口','种子词拓展','社区挖掘','趋势词','Social信号'], true).build());
  master.getRange('J2:J500').setDataValidation(
    dv().requireValueInList(['Y','N'], true).build());
  master.getRange('N2:N500').setDataValidation(
    dv().requireValueInList(['🚀趋势词','⚡快速胜利','🎯战略词','📌长尾词','❌跳过'], true).build());
  master.getRange('Q2:Q500').setDataValidation(
    dv().requireValueInList(['✅弱','⚠️中','❌强','未查'], true).build());
  master.getRange('S2:S500').setDataValidation(
    dv().requireValueInList(['高','低','未查'], true).build());
  master.getRange('U2:U500').setDataValidation(
    dv().requireValueInList(['未开始','写作中','已发布','暂缓'], true).build());

  // ── 公式 ──

  // H: DR差值
  var fH = '=IF(G2="","",IF(' + CFG + '!$B$2="","配置DR未填",G2-' + CFG + '!$B$2))';

  // I: G1话题相关（检测关键词是否命中TOPIC_KEYWORDS列表中任意词）
  var fI = '=IF(A2="","",IF(SUMPRODUCT(--(ISNUMBER(SEARCH(' +
    'IFERROR(' + CFG + '!$A$7:$A$26,""),A2))))>0,"✅相关","⚠️待确认"))';

  // K: 意图（模式匹配，按Commercial>Transactional>Problem-aware>Informational>待确认优先级）
  var fK =
    '=IF(A2="","",IF(OR(' +
      'ISNUMBER(SEARCH("best ",A2)),ISNUMBER(SEARCH(" vs ",A2)),' +
      'ISNUMBER(SEARCH("alternative",A2)),ISNUMBER(SEARCH("comparison",A2)),' +
      'ISNUMBER(SEARCH("review",A2)),ISNUMBER(SEARCH("pricing",A2)),' +
      'ISNUMBER(SEARCH("top ",A2))),"Commercial",' +
    'IF(OR(' +
      'ISNUMBER(SEARCH("buy ",A2)),ISNUMBER(SEARCH(" cost",A2)),' +
      'ISNUMBER(SEARCH("cheap",A2)),ISNUMBER(SEARCH("discount",A2)),' +
      'ISNUMBER(SEARCH("free trial",A2)),ISNUMBER(SEARCH("sign up",A2))),"Transactional",' +
    'IF(OR(' +
      'ISNUMBER(SEARCH("fix ",A2)),ISNUMBER(SEARCH("not working",A2)),' +
      'ISNUMBER(SEARCH("how to fix",A2)),ISNUMBER(SEARCH("how to solve",A2)),' +
      'ISNUMBER(SEARCH("problem",A2)),ISNUMBER(SEARCH(" error",A2))),"Problem-aware",' +
    'IF(OR(' +
      'ISNUMBER(SEARCH("how to ",A2)),ISNUMBER(SEARCH("what is",A2)),' +
      'ISNUMBER(SEARCH(" guide",A2)),ISNUMBER(SEARCH("tutorial",A2)),' +
      'ISNUMBER(SEARCH("why ",A2)),ISNUMBER(SEARCH("explained",A2))),"Informational",' +
    '"待确认")))))';

  // L: DR过滤（唯一真正的过滤关卡，不通过则跳过）
  var fL = '=IF(H2="","待填",IF(ISNUMBER(H2),IF(H2>30,"❌跳过","✅通过"),"待填"))';

  // M: 分桶_自动（四桶核心逻辑）
  // 优先级：❌跳过 > 🚀趋势词 > ⚡快速胜利 > 🎯战略词 > 📌长尾词
  var fM =
    '=IF(A2="","",' +
    'IF(L2="❌跳过","❌跳过",' +
    // 趋势词：Trends>1.2, KD<35, G1话题相关, G2可承接=Y
    'IF(AND(ISNUMBER(F2),F2>1.2,ISNUMBER(D2),D2<35,I2="✅相关",J2="Y"),"🚀趋势词",' +
    // 快速胜利（主规则）：KD<20, 搜索量≥100
    'IF(AND(ISNUMBER(D2),D2<20,ISNUMBER(C2),C2>=100),"⚡快速胜利",' +
    // 快速胜利（how-to豁免）：Problem-aware或Informational+KD<20+搜索量≥50
    'IF(AND(ISNUMBER(D2),D2<20,OR(K2="Problem-aware",K2="Informational"),ISNUMBER(C2),C2>=50),"⚡快速胜利",' +
    // 战略词：Commercial/Transactional意图, KD 20-50
    'IF(AND(ISNUMBER(D2),D2>=20,D2<=50,OR(K2="Commercial",K2="Transactional")),"🎯战略词",' +
    // 其余：长尾词
    '"📌长尾词"))))))';

  // P: 分桶（最终：N非空→人工调整，加★标识；否则=自动结果）
  var fP = '=IF(A2="","",IF(N2<>"",N2&"★",M2))';

  // R: AIO预判（搜索量≥500且含定义型词→疑似高风险）
  var fR =
    '=IF(A2="","",IF(AND(ISNUMBER(C2),C2>=500,OR(' +
      'ISNUMBER(SEARCH("what is",A2)),ISNUMBER(SEARCH("meaning",A2)),' +
      'ISNUMBER(SEARCH("definition",A2)),ISNUMBER(SEARCH("how does",A2)),' +
      'ISNUMBER(SEARCH("explained",A2)))),"⚠️疑似高风险",""))';

  // T: 排序权重（SERP弱度+意图匹配，供快速胜利桶视图排序）
  var fT =
    '=IF(A2="",0,' +
    'IF(Q2="✅弱",3,IF(Q2="⚠️中",2,1))' +
    '+IF(OR(K2="Commercial",K2="Problem-aware"),1,0))';

  // 应用公式
  master.getRange('H2').setFormula(fH);
  master.getRange('I2').setFormula(fI);
  master.getRange('K2').setFormula(fK);
  master.getRange('L2').setFormula(fL);
  master.getRange('M2').setFormula(fM);
  master.getRange('P2').setFormula(fP);
  master.getRange('R2').setFormula(fR);
  master.getRange('T2').setFormula(fT);

  // 向下复制（仅公式列）
  master.getRange('H2:M2').copyTo(master.getRange('H3:M500'));
  master.getRange('P2').copyTo(master.getRange('P3:P500'));
  master.getRange('R2').copyTo(master.getRange('R3:R500'));
  master.getRange('T2').copyTo(master.getRange('T3:T500'));

  // 列宽（A-W 共 23 列）
  [270,100,90,55,65,90,100,80,100,70,110,70,120,110,200,120,80,110,70,80,90,220,120]
    .forEach(function(w, i) { master.setColumnWidth(i + 1, w); });

  // ── 条件格式 ──
  var rules = [];

  // P列（分桶，最终结果）— 主色彩标识
  var pR = master.getRange('P2:P500');
  [
    { t: '🚀趋势词',    bg: '#c8e6c9' },
    { t: '⚡快速胜利★', bg: '#fff59d' }, // 人工调整版，深黄区分
    { t: '⚡快速胜利',  bg: '#fff9c4' },
    { t: '🎯战略词',    bg: '#bbdefb' },
    { t: '📌长尾词',    bg: '#fce4ec' },
    { t: '❌跳过',      bg: '#eeeeee' }
  ].forEach(function(r) {
    rules.push(SpreadsheetApp.newConditionalFormatRule()
      .whenTextContains(r.t).setBackground(r.bg).setRanges([pR]).build());
  });

  // M列（分桶_自动）— 浅色，与P列区分
  var mR = master.getRange('M2:M500');
  [
    { t: '🚀', bg: '#f1f8e9' }, { t: '⚡', bg: '#fffde7' },
    { t: '🎯', bg: '#e8f4fd' }, { t: '📌', bg: '#fdf2f8' }
  ].forEach(function(r) {
    rules.push(SpreadsheetApp.newConditionalFormatRule()
      .whenTextContains(r.t).setBackground(r.bg).setRanges([mR]).build());
  });

  // N列（手动分桶）— 非空时黄色高亮，提示有人工覆盖
  rules.push(SpreadsheetApp.newConditionalFormatRule()
    .whenCellNotEmpty().setBackground('#fff176').setBold(true)
    .setRanges([master.getRange('N2:N500')]).build());

  // Q列（SERP弱度）
  var qR = master.getRange('Q2:Q500');
  [
    { t: '✅弱', bg: '#c8e6c9' }, { t: '⚠️中', bg: '#fff9c4' }, { t: '❌强', bg: '#ffcdd2' }
  ].forEach(function(r) {
    rules.push(SpreadsheetApp.newConditionalFormatRule()
      .whenTextContains(r.t).setBackground(r.bg).setRanges([qR]).build());
  });

  // R列（AIO预判）— 橙色警示
  rules.push(SpreadsheetApp.newConditionalFormatRule()
    .whenTextContains('疑似高风险').setBackground('#ffe0b2')
    .setRanges([master.getRange('R2:R500')]).build());

  master.setConditionalFormatRules(rules);

  // ────────────────────────────────────────────
  // SHEET 2: 🚀趋势词（按 Trends比值 降序）
  // ────────────────────────────────────────────
  var trendSh = ss.insertSheet('🚀趋势词');
  trendSh.getRange('A1').setFormula(
    "=IF(COUNTIF('关键词主表'!P:P,\"*趋势词*\")>0,{'关键词主表'!A1:W1;SORT(FILTER('关键词主表'!A2:W500,REGEXMATCH('关键词主表'!P2:P500,\"趋势词\")),6,FALSE)},{\"暂无趋势词\"})"
  );
  _styleViewSheet(trendSh, '#e8f5e9',
    '趋势词 — Trends比值降序 | G1✅相关+G2=Y双门槛 | 发现即执行，不等周计划');

  // ────────────────────────────────────────────
  // SHEET 3: ⚡快速胜利（按排序权重T列→月搜索量C列 降序）
  // ────────────────────────────────────────────
  var qwSh = ss.insertSheet('⚡快速胜利');
  qwSh.getRange('A1').setFormula(
    "=IF(COUNTIF('关键词主表'!P:P,\"*快速胜利*\")>0,{'关键词主表'!A1:W1;SORT(FILTER('关键词主表'!A2:W500,REGEXMATCH('关键词主表'!P2:P500,\"快速胜利\")),{20,3},{FALSE,FALSE})},{\"暂无快速胜利词\"})"
  );
  _styleViewSheet(qwSh, '#fff9c4',
    '快速胜利 — 排序权重（SERP弱度+意图）→ 月搜索量 降序 | Q列SERP弱度填完后排序才有意义 | Week1-4主执行');

  // ────────────────────────────────────────────
  // SHEET 4: 🎯战略词（按 CPC 降序，辅助参考）
  // ────────────────────────────────────────────
  var stratSh = ss.insertSheet('🎯战略词');
  stratSh.getRange('A1').setFormula(
    "=IF(COUNTIF('关键词主表'!P:P,\"*战略词*\")>0,{'关键词主表'!A1:W1;SORT(FILTER('关键词主表'!A2:W500,REGEXMATCH('关键词主表'!P2:P500,\"战略词\")),5,FALSE)},{\"暂无战略词\"})"
  );
  _styleViewSheet(stratSh, '#e3f2fd',
    '战略词 — CPC降序（辅助参考，实际优先级以主题集群相关度人工排序为主）| Week3起每周1-2篇');

  // ────────────────────────────────────────────
  // SHEET 5: 📌长尾词
  // ────────────────────────────────────────────
  var ltSh = ss.insertSheet('📌长尾词');
  ltSh.getRange('A1').setFormula(
    "=IF(COUNTIF('关键词主表'!P:P,\"*长尾词*\")>0,{'关键词主表'!A1:W1;FILTER('关键词主表'!A2:W500,REGEXMATCH('关键词主表'!P2:P500,\"长尾词\"))},{\"暂无长尾词\"})"
  );
  _styleViewSheet(ltSh, '#fce4ec',
    '长尾词 — 社区来源词验证搜索量后归入对应桶 | 50-100搜索量+意图明确→Week1并行 | 其余批量执行');

  // ────────────────────────────────────────────
  // SHEET 6: 📋分桶规则
  // ────────────────────────────────────────────
  var ruleSh = ss.insertSheet('📋分桶规则');

  // ── 标题行 ──
  ruleSh.getRange(1, 1, 1, 4).setBackground('#1a237e').setFontColor('#ffffff')
    .setFontWeight('bold').setFontSize(13);
  ruleSh.getRange('A1').setValue('📋 分桶规则 & 操作参考');

  // ── 一、前置关卡 ──
  ruleSh.getRange(3, 1, 1, 4).setBackground('#e8eaf6');
  ruleSh.getRange('A3').setValue('一、前置关卡（顺序操作，共两种性质：过滤 / 标注）').setFontWeight('bold');
  ruleSh.getRange(4, 1, 1, 4).setValues([['关卡', '操作列', '判断条件', '性质说明']])
    .setBackground('#3949ab').setFontColor('#ffffff').setFontWeight('bold');
  ruleSh.getRange(5, 1, 3, 4).setValues([
    ['第一关：DR过滤', 'L列（公式自动）', 'DR差值≤30 → ✅通过；>30 → ❌跳过\n负值 = 你的站DR超越竞争均值，仍为✅通过', '唯一真正的过滤关卡，❌跳过的词不进入分桶，但保留在主表'],
    ['第二关：SERP弱度', 'Q列（手动填写）', '✅弱 / ⚠️中 / ❌强 / 未查', '标注，不过滤；⚡快速胜利桶必填；填写后T列排序权重自动更新'],
    ['第三关：AIO风险', 'S列（手动填写）', '高 / 低 / 未查', '标注，不过滤；搜索量≥500的定义型词优先确认；影响内容结构策略']
  ]).setVerticalAlignment('top').setWrap(true);

  // ── 二、四桶分类规则 ──
  ruleSh.getRange(9, 1, 1, 4).setBackground('#e8f5e9');
  ruleSh.getRange('A9').setValue('二、四桶分类规则（M列公式按以下优先级依次判断，通过DR过滤后才进入分桶）').setFontWeight('bold');
  ruleSh.getRange(10, 1, 1, 4).setValues([['优先级', '桶名', '分类条件', '桶内排序']])
    .setBackground('#2e7d32').setFontColor('#ffffff').setFontWeight('bold');
  ruleSh.getRange(11, 1, 5, 4).setValues([
    ['① 最高', '❌ 跳过', 'DR差值>30（H列超标，L列=❌跳过）', '—'],
    ['②', '🚀 趋势词', 'Trends比值>1.2  且  KD<35  且  G1=✅相关  且  G2=Y', 'Trends比值降序（F列）'],
    ['③', '⚡ 快速胜利', '主规则：KD<20 且 搜索量≥100\n豁免规则：KD<20 且 意图=Problem-aware 或 Informational 且 搜索量≥50', 'SERP弱度权重(T列) → 搜索量 降序'],
    ['④', '🎯 战略词', 'KD 20-50  且  意图=Commercial 或 Transactional', 'CPC降序（辅助参考，实际以主题集群相关度人工排序为主）'],
    ['⑤ 兜底', '📌 长尾词', '其余所有通过DR过滤的词（含意图=待确认、搜索量低于阈值等未命中上述条件的词）', '—']
  ]).setVerticalAlignment('top').setWrap(true);

  // ── 三、意图自动分类规则 ──
  ruleSh.getRange(17, 1, 1, 3).setBackground('#fff3e0');
  ruleSh.getRange('A17').setValue('三、意图自动分类规则（K列公式，模式匹配，准确率约80%；未命中→待确认，需人工批量标注）').setFontWeight('bold');
  ruleSh.getRange(18, 1, 1, 3).setValues([['意图类型', '触发词（含任意一个即判定为该类型）', '典型搜索场景']])
    .setBackground('#e65100').setFontColor('#ffffff').setFontWeight('bold');
  ruleSh.getRange(19, 1, 5, 3).setValues([
    ['Commercial', 'best · vs · alternative · comparison · review · pricing · top', '比较选型，有决策意图但未直接购买'],
    ['Transactional', 'buy · cost · cheap · discount · free trial · sign up', '直接购买或注册意图'],
    ['Problem-aware', 'fix · not working · how to fix · how to solve · problem · error', '遇到问题，寻求解决方案'],
    ['Informational', 'how to · what is · guide · tutorial · why · explained', '学习了解，暂无直接商业意图'],
    ['待确认', '未命中以上任何模式', '批量粘贴到Claude/GPT，用《关键词研究SOP》第四节prompt批量标注意图']
  ]).setVerticalAlignment('top').setWrap(true);

  // ── 四、人工调整说明 ──
  ruleSh.getRange(25, 1, 1, 4).setBackground('#f5f5f5').setFontStyle('italic');
  ruleSh.getRange('A25').setValue(
    '四、人工调整分桶：N列选目标桶 → O列填调整原因 → P列自动更新为"桶名★"\n' +
    'M列（分桶_自动）始终保留原始公式计算结果，供复盘时对比差异，判断是否需要调整分类规则本身。'
  ).setWrap(true);

  // ── 列宽 & 行高 ──
  [120, 120, 370, 230].forEach(function(w, i) { ruleSh.setColumnWidth(i + 1, w); });
  [5, 6, 7, 11, 12, 13, 14, 15, 19, 20, 21, 22, 23].forEach(function(r) {
    ruleSh.setRowHeight(r, 60);
  });
  ruleSh.setFrozenRows(1);

  // ────────────────────────────────────────────
  // SHEET 7: 📊内容追踪
  // ────────────────────────────────────────────
  var trackSh = ss.insertSheet('📊内容追踪');
  var tHeaders = [
    '关键词','分桶','发布日期','内容URL',
    'KD','月搜索量',
    '预期排名(W8)','预期流量(W8)',
    '实际排名(W4)','实际排名(W8)','实际流量(W8)',
    '偏差%','页面类型匹配','备注'
  ];
  trackSh.getRange(1, 1, 1, tHeaders.length)
    .setValues([tHeaders])
    .setBackground('#37474f').setFontColor('#ffffff').setFontWeight('bold');
  trackSh.setFrozenRows(1);
  trackSh.getRange('M1').setNote(
    '发布前填写预计页面格式（如：how-to教程/对比页/工具页）\n' +
    '发布后对比实际Top3格式，判断是否匹配——格式不匹配是排名不达预期的常见原因'
  );

  var fExpRank = '=IF(E2="","",IF(E2<=10,"P3-P10",IF(E2<=20,"P5-P20",IF(E2<=35,"P10-P30",IF(E2<=50,"P20-P50","P50+")))))';
  var fExpTraffic = '=IF(OR(F2="",E2=""),"",IF(E2<=10,ROUND(F2*0.11,0),IF(E2<=20,ROUND(F2*0.04,0),IF(E2<=35,ROUND(F2*0.015,0),IF(E2<=50,ROUND(F2*0.005,0),0)))))';
  var fDev = '=IF(OR(H2="",K2=""),"",IF(H2=0,"N/A",TEXT((K2-H2)/H2,"+0%;-0%;0%")))';

  trackSh.getRange('G2').setFormula(fExpRank);
  trackSh.getRange('H2').setFormula(fExpTraffic);
  trackSh.getRange('L2').setFormula(fDev);
  trackSh.getRange('G2:H2').copyTo(trackSh.getRange('G3:H200'));
  trackSh.getRange('L2').copyTo(trackSh.getRange('L3:L200'));
  trackSh.setColumnWidth(1, 250);
  trackSh.setColumnWidth(4, 220);

  // ────────────────────────────────────────────
  // SHEET 8: 📈来源分析
  // ────────────────────────────────────────────
  var srcSh = ss.insertSheet('📈来源分析');
  srcSh.getRange(1, 1, 1, 6)
    .setValues([['来源','执行词数','已发布','命中(P1-P30)','命中率','下次是否加大投入？']])
    .setBackground('#37474f').setFontColor('#ffffff').setFontWeight('bold');

  ['竞品映射','内容缺口','种子词拓展','社区挖掘','趋势词','Social信号'].forEach(function(src, i) {
    var r = i + 2;
    srcSh.getRange(r, 1).setValue(src);
    srcSh.getRange(r, 5).setFormula('=IF(B'+r+'=0,"",TEXT(D'+r+'/B'+r+',"0.0%"))');
  });
  srcSh.getRange(8, 1, 1, 5).setValues([
    ['合计','=SUM(B2:B7)','=SUM(C2:C7)','=SUM(D2:D7)','=IF(B8=0,"",TEXT(D8/B8,"0.0%"))']
  ]).setFontWeight('bold').setBackground('#eceff1');
  srcSh.setColumnWidth(1, 120);
  srcSh.setColumnWidth(6, 180);
  srcSh.getRange('A1').setNote('命中率最高的来源=GenGrowth产品优先自动化的模块');

  // ────────────────────────────────────────────
  Logger.log('✅ 创建成功：' + ss.getUrl());
  Logger.log('⚠️  请先在 ⚙️配置 表填写：你的站DR（B2）和 TOPIC_KEYWORDS（A7:A26）');
}

// ── 辅助：为桶视图添加说明行 + 表头行 ──
function _styleViewSheet(sheet, color, note) {
  sheet.insertRowBefore(1);
  sheet.getRange('A1').setValue('⬆ 数据从第3行起自动填充 | ' + note);
  sheet.getRange(1, 1, 1, 23)
    .setBackground(color).setFontStyle('italic').setFontColor('#555555');
  // 第2行是公式输出的表头行（来自关键词主表!A1:W1），统一加深色样式
  sheet.getRange(2, 1, 1, 23)
    .setBackground('#37474f').setFontColor('#ffffff').setFontWeight('bold');
  sheet.setFrozenRows(2);
}
