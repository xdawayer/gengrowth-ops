/**
 * GenGrowth 关键词研究主表 · 一键生成脚本
 * 配合《关键词研究 SOP（六源挖掘 → 四桶分级）》使用
 *
 * 使用方法：
 * 1. 打开任意 Google Sheet
 * 2. 扩展程序 → Apps Script
 * 3. 粘贴本文件全部内容，替换默认代码
 * 4. 点击运行 → createGenGrowthKeywordSheet
 * 5. 授权后自动创建新文件，链接打印在日志中
 *
 * 生成的 Sheet 包含 7 个工作表：
 *   关键词主表 / 🚀趋势词 / ⚡快速胜利 / 🎯战略词 / 📌长尾词 / 📊内容追踪 / 📈来源分析
 */

function createGenGrowthKeywordSheet() {
  var ss = SpreadsheetApp.create('GenGrowth 关键词研究主表');

  // ────────────────────────────────────────────
  // SHEET 1: 关键词主表
  // ────────────────────────────────────────────
  var master = ss.getActiveSheet();
  master.setName('关键词主表');

  // 表头
  var headers = [
    '关键词',     // A  手动输入
    '来源',       // B  下拉菜单
    '月搜索量',   // C  手动（Ahrefs/SEMrush）
    'KD',         // D  手动（Ahrefs/SEMrush）
    'CPC($)',     // E  手动（0 表示无广告出价）
    'Trends比值', // F  手动（近3月均值÷近6月均值，留空=平稳）
    'DR差距',     // G  手动（top10平均DR - 你的站DR）
    '策略覆盖',   // H  勾选框（强制进快速胜利桶）
    '意图词',     // I  公式自动检测
    'DR过滤',     // J  公式自动
    '分桶',       // K  公式自动 ← 核心输出
    'SERP弱度',   // L  手动（✅弱 / ⚠️中 / ❌强 / 未查）Top10有弱站/论坛帖→✅弱
    'AIO风险',    // M  手动（高 / 低 / 未查）Google出现AI Overview→高
    '内容状态',   // N  下拉菜单
    '发布URL',    // O  手动（发布后填写）
    '备注'        // P  手动
  ];

  master.getRange(1, 1, 1, headers.length)
    .setValues([headers])
    .setBackground('#1a237e')
    .setFontColor('#ffffff')
    .setFontWeight('bold')
    .setFontSize(11);
  master.setFrozenRows(1);

  // 来源下拉
  master.getRange('B2:B500').setDataValidation(
    SpreadsheetApp.newDataValidation()
      .requireValueInList(
        ['竞品映射', '内容缺口', '种子词拓展', '社区挖掘', '趋势词', 'Social信号'],
        true
      ).build()
  );

  // 策略覆盖勾选框
  master.getRange('H2:H500').insertCheckboxes();

  // SERP弱度下拉（L列）
  master.getRange('L2:L500').setDataValidation(
    SpreadsheetApp.newDataValidation()
      .requireValueInList(['✅弱', '⚠️中', '❌强', '未查'], true)
      .build()
  );

  // AIO风险下拉（M列）
  master.getRange('M2:M500').setDataValidation(
    SpreadsheetApp.newDataValidation()
      .requireValueInList(['高', '低', '未查'], true)
      .build()
  );

  // 内容状态下拉（N列）
  master.getRange('N2:N500').setDataValidation(
    SpreadsheetApp.newDataValidation()
      .requireValueInList(['未开始', '写作中', '已发布', '暂缓'], true)
      .build()
  );

  // ── 公式：Col I 意图词检测 ──
  // 检测关键词是否包含商业/问题意图词
  var intentF =
    '=IF(A2=""," ",IF(OR(' +
    'ISNUMBER(SEARCH("how to",A2)),' +
    'ISNUMBER(SEARCH("fix",A2)),' +
    'ISNUMBER(SEARCH("not working",A2)),' +
    'ISNUMBER(SEARCH("best ",A2)),' +
    'ISNUMBER(SEARCH(" vs ",A2)),' +
    'ISNUMBER(SEARCH("alternative",A2)),' +
    'ISNUMBER(SEARCH("pricing",A2)),' +
    'ISNUMBER(SEARCH("review",A2)),' +
    'ISNUMBER(SEARCH("compare",A2))' +
    '),"YES","no"))';
  master.getRange('I2').setFormula(intentF);

  // ── 公式：Col J DR过滤 ──
  var drF = '=IF(G2="","待填",IF(G2>30,"❌跳过","✅通过"))';
  master.getRange('J2').setFormula(drF);

  // ── 公式：Col K 分桶 ── 核心分类逻辑
  // 优先级：跳过 > 策略覆盖 > 趋势词 > 快速胜利 > 战略词 > 长尾词
  var bucketF =
    '=IF(A2="","",' +
    'IF(J2="❌跳过","❌跳过",' +
    'IF(H2=TRUE,"⚡快速胜利★",' +            // 策略覆盖
    'IF(AND(ISNUMBER(F2),F2>1.2,ISNUMBER(D2),D2<35),"🚀趋势词",' +
    'IF(AND(ISNUMBER(D2),D2<20,ISNUMBER(C2),C2>=100),"⚡快速胜利",' +
    'IF(AND(ISNUMBER(D2),D2<20,I2="YES"),"⚡快速胜利",' +    // how-to + 低KD
    'IF(AND(ISNUMBER(D2),D2>=20,D2<=50,' +
    'OR(AND(ISNUMBER(E2),E2>1),I2="YES")),"🎯战略词",' +
    '"📌长尾词")))))))';
  master.getRange('K2').setFormula(bucketF);

  // 公式向下复制到第 500 行
  master.getRange('I2:K2').copyTo(master.getRange('I3:K500'));

  // 列宽调整
  master.setColumnWidth(1, 270);  // 关键词
  master.setColumnWidth(2, 100);  // 来源
  master.setColumnWidth(3, 90);   // 月搜索量
  master.setColumnWidth(4, 55);   // KD
  master.setColumnWidth(5, 65);   // CPC
  master.setColumnWidth(6, 90);   // Trends比值
  master.setColumnWidth(7, 70);   // DR差距
  master.setColumnWidth(8, 75);   // 策略覆盖
  master.setColumnWidth(9, 65);   // 意图词
  master.setColumnWidth(10, 80);  // DR过滤
  master.setColumnWidth(11, 140); // 分桶
  master.setColumnWidth(12, 80);  // SERP弱度
  master.setColumnWidth(13, 70);  // AIO风险
  master.setColumnWidth(14, 90);  // 内容状态
  master.setColumnWidth(15, 220); // 发布URL

  // 条件格式：分桶列着色
  var bucketRange = master.getRange('K2:K500');
  var rules = master.getConditionalFormatRules();

  var ruleColors = [
    { text: '🚀趋势词',     bg: '#c8e6c9' },
    { text: '⚡快速胜利★',  bg: '#fff59d' },
    { text: '⚡快速胜利',   bg: '#fff9c4' },
    { text: '🎯战略词',     bg: '#bbdefb' },
    { text: '📌长尾词',     bg: '#fce4ec' },
    { text: '❌跳过',       bg: '#eeeeee' }
  ];

  ruleColors.forEach(function(r) {
    rules.push(
      SpreadsheetApp.newConditionalFormatRule()
        .whenTextContains(r.text)
        .setBackground(r.bg)
        .setRanges([bucketRange])
        .build()
    );
  });

  // SERP弱度列着色
  var serpRange = master.getRange('L2:L500');
  var serpColors = [
    { text: '✅弱', bg: '#c8e6c9' },  // 绿：机会明确
    { text: '⚠️中', bg: '#fff9c4' },  // 黄：可尝试
    { text: '❌强', bg: '#ffcdd2' }   // 红：暂缓
  ];
  serpColors.forEach(function(r) {
    rules.push(
      SpreadsheetApp.newConditionalFormatRule()
        .whenTextContains(r.text)
        .setBackground(r.bg)
        .setRanges([serpRange])
        .build()
    );
  });

  master.setConditionalFormatRules(rules);

  // ────────────────────────────────────────────
  // SHEET 2: 🚀趋势词（按 Trends比值 降序）
  // ────────────────────────────────────────────
  var trendSh = ss.insertSheet('🚀趋势词');
  trendSh.getRange('A1').setFormula(
    "=IFERROR(SORT(FILTER('关键词主表'!A2:P500,'关键词主表'!K2:K500=\"🚀趋势词\"),6,FALSE),{\"暂无趋势词\"})"
  );
  _styleViewSheet(trendSh, '#e8f5e9', '趋势词 — 按 Trends比值 降序排列，窗口紧迫，发现即执行');

  // ────────────────────────────────────────────
  // SHEET 3: ⚡快速胜利（按月搜索量降序）
  // ────────────────────────────────────────────
  var qwSh = ss.insertSheet('⚡快速胜利');
  qwSh.getRange('A1').setFormula(
    "=IFERROR(SORT(FILTER('关键词主表'!A2:P500,REGEXMATCH('关键词主表'!K2:K500,\"快速胜利\")),3,FALSE),{\"暂无快速胜利词\"})"
  );
  _styleViewSheet(qwSh, '#fff9c4', '快速胜利词 — 按月搜索量降序，Week 1-4 主要执行');

  // ────────────────────────────────────────────
  // SHEET 4: 🎯战略词（按 CPC 降序）
  // ────────────────────────────────────────────
  var stratSh = ss.insertSheet('🎯战略词');
  stratSh.getRange('A1').setFormula(
    "=IFERROR(SORT(FILTER('关键词主表'!A2:P500,'关键词主表'!K2:K500=\"🎯战略词\"),5,FALSE),{\"暂无战略词\"})"
  );
  _styleViewSheet(stratSh, '#e3f2fd', '战略词 — 按 CPC 降序，Week 3 起每周 1-2 篇');

  // ────────────────────────────────────────────
  // SHEET 5: 📌长尾词
  // ────────────────────────────────────────────
  var ltSh = ss.insertSheet('📌长尾词');
  ltSh.getRange('A1').setFormula(
    "=IFERROR(FILTER('关键词主表'!A2:P500,'关键词主表'!K2:K500=\"📌长尾词\"),{\"暂无长尾词\"})"
  );
  _styleViewSheet(ltSh, '#fce4ec', '长尾/社区词 — 有余力时批量执行，注重主题集群');

  // ────────────────────────────────────────────
  // SHEET 6: 📊内容追踪
  // ────────────────────────────────────────────
  var trackSh = ss.insertSheet('📊内容追踪');
  var trackHeaders = [
    '关键词', '分桶', '发布日期', '内容URL',
    'KD', '月搜索量',
    '预期排名(W8)', '预期流量(W8)',
    '实际排名(W4)', '实际排名(W8)', '实际流量(W8)',
    '偏差%', '页面类型匹配', '备注'
    // 页面类型匹配：发布前手动填写，例如"博客列表/how-to教程/比较页"，对齐Top3格式
  ];
  trackSh.getRange(1, 1, 1, trackHeaders.length)
    .setValues([trackHeaders])
    .setBackground('#37474f')
    .setFontColor('#ffffff')
    .setFontWeight('bold');
  trackSh.setFrozenRows(1);

  // 预期排名（基于KD区间）
  var expRankF =
    '=IF(E2="","",IF(E2<=10,"P3-P10",IF(E2<=20,"P5-P20",' +
    'IF(E2<=35,"P10-P30",IF(E2<=50,"P20-P50","P50+")))))';
  // 预期流量（中位CTR：P7≈4%, P13≈1.5%, P25≈0.5%）
  var expTrafficF =
    '=IF(OR(F2="",E2=""),"",IF(E2<=10,ROUND(F2*0.11,0),' +
    'IF(E2<=20,ROUND(F2*0.04,0),' +
    'IF(E2<=35,ROUND(F2*0.015,0),' +
    'IF(E2<=50,ROUND(F2*0.005,0),0)))))';
  // 偏差
  var deviationF =
    '=IF(OR(H2="",K2=""),"",IF(H2=0,"N/A",TEXT((K2-H2)/H2,"+0%;-0%;0%")))';

  trackSh.getRange('G2').setFormula(expRankF);
  trackSh.getRange('H2').setFormula(expTrafficF);
  trackSh.getRange('L2').setFormula(deviationF);
  trackSh.getRange('G2:H2').copyTo(trackSh.getRange('G3:H200'));
  trackSh.getRange('L2').copyTo(trackSh.getRange('L3:L200'));

  trackSh.setColumnWidth(1, 250);
  trackSh.setColumnWidth(4, 220);

  // ────────────────────────────────────────────
  // SHEET 7: 📈来源分析
  // ────────────────────────────────────────────
  var srcSh = ss.insertSheet('📈来源分析');
  srcSh.getRange(1, 1, 1, 6)
    .setValues([['来源', '执行词数', '已发布', '命中(P1-P30)', '命中率', '下次是否加大投入？']])
    .setBackground('#37474f')
    .setFontColor('#ffffff')
    .setFontWeight('bold');

  var sources = ['竞品映射', '内容缺口', '种子词拓展', '社区挖掘', '趋势词', 'Social信号'];
  for (var i = 0; i < sources.length; i++) {
    var row = i + 2;
    srcSh.getRange(row, 1).setValue(sources[i]);
    srcSh.getRange(row, 5).setFormula(
      '=IF(B' + row + '=0,"",TEXT(D' + row + '/B' + row + ',"0.0%"))'
    );
  }
  srcSh.getRange(8, 1, 1, 5).setValues([
    ['合计',
     '=SUM(B2:B7)', '=SUM(C2:C7)', '=SUM(D2:D7)',
     '=IF(B8=0,"",TEXT(D8/B8,"0.0%"))']
  ]).setFontWeight('bold').setBackground('#eceff1');

  srcSh.getRange('A2:A8').setFontWeight('bold');
  srcSh.setColumnWidth(1, 120);
  srcSh.setColumnWidth(6, 180);

  // ────────────────────────────────────────────
  // 完成提示
  // ────────────────────────────────────────────
  Logger.log('✅ 创建成功：' + ss.getUrl());
  // 注：不使用 getUi().alert()，在脚本编辑器中运行时该调用会等待用户点击直至超时
}

// ────────────────────────────────────────────
// 辅助函数：为桶视图添加说明行样式
// ────────────────────────────────────────────
function _styleViewSheet(sheet, color, note) {
  // 在数据上方插入一行说明
  sheet.insertRowBefore(1);
  sheet.getRange('A1').setValue('⬆ 数据从第2行起自动填充 | ' + note);
  sheet.getRange('A1:N1')
    .setBackground(color)
    .setFontStyle('italic')
    .setFontColor('#555555');
  sheet.setFrozenRows(1);
}
