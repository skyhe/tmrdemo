import type { DeliveryContent, OracleQuestion, Supplier } from './types';

export const suppliers: Supplier[] = [
  {
    id: 'sup-fin-aurora',
    name: 'Aurora Capital Insights',
    category: 'finance',
    tags: ['macro', 'fixed-income', 'risk-control'],
    summary: '聚焦宏观与固收策略的金融供应商，擅长风险预警。',
    supportedIntents: ['risk_review', 'asset_allocation', 'market_watch'],
  },
  {
    id: 'sup-fin-harbor',
    name: 'Harbor Quant Lab',
    category: 'finance',
    tags: ['quant', 'factor', 'hedging'],
    summary: '提供量化因子监测与对冲建议的金融技术团队。',
    supportedIntents: ['hedge_design', 'strategy_backtest', 'market_watch'],
  },
  {
    id: 'sup-tech-nebula',
    name: 'Nebula DataWorks',
    category: 'technology',
    tags: ['data-platform', 'streaming', 'etl'],
    summary: '提供实时数据管道与多源 ETL 的技术供应商。',
    supportedIntents: ['data_integration', 'pipeline_monitoring', 'oracle_support'],
  },
  {
    id: 'sup-tech-vertex',
    name: 'Vertex AI Forge',
    category: 'technology',
    tags: ['llm', 'agent', 'evaluation'],
    summary: '专注 AI Agent 构建与模型评估的平台供应商。',
    supportedIntents: ['agent_design', 'model_eval', 'oracle_support'],
  },
  {
    id: 'sup-gen-lighthouse',
    name: 'Lighthouse Advisory',
    category: 'general',
    tags: ['consulting', 'operations', 'change-management'],
    summary: '提供跨行业运营优化与组织变更辅导。',
    supportedIntents: ['ops_improvement', 'delivery_governance', 'vendor_review'],
  },
  {
    id: 'sup-gen-maple',
    name: 'Maple Service Hub',
    category: 'general',
    tags: ['customer-success', 'playbook', 'enablement'],
    summary: '擅长客户成功体系搭建与标准化交付流程。',
    supportedIntents: ['service_blueprint', 'delivery_governance', 'market_launch'],
  },
  {
    id: 'sup-tech-orbit',
    name: 'Orbit Secure Compute',
    category: 'technology',
    tags: ['security', 'compliance', 'infra'],
    summary: '面向高合规场景的云原生与安全基建供应商。',
    supportedIntents: ['security_audit', 'infra_upgrade', 'risk_review'],
  },
  {
    id: 'sup-gen-summit',
    name: 'Summit Growth Studio',
    category: 'general',
    tags: ['go-to-market', 'brand', 'content'],
    summary: '提供增长策略、品牌叙事与市场内容生产。',
    supportedIntents: ['market_launch', 'campaign_design', 'market_watch'],
  },
];

export const oracleQuestions: OracleQuestion[] = [
  {
    id: 'oracle-20260214-01',
    title: '今日：美元利率波动是否会压缩成长股估值？',
    description: '结合最新 CPI 与联储讲话，评估成长赛道估值压力。',
    createdAt: '2026-02-14T08:10:00+08:00',
    isToday: true,
    status: 'open',
    supplierId: 'sup-fin-aurora',
  },
  {
    id: 'oracle-20260214-02',
    title: '今日：Agent 质检指标应优先看准确率还是恢复率？',
    description: '在客服自动化场景，比较不同指标对业务损失的影响。',
    createdAt: '2026-02-14T09:25:00+08:00',
    isToday: true,
    status: 'open',
    supplierId: 'sup-tech-vertex',
  },
  {
    id: 'oracle-20260214-03',
    title: '今日：供应链中断预警应该提前多少天触发？',
    description: '根据历史履约数据拟合预警提前期与误报率平衡点。',
    createdAt: '2026-02-14T11:40:00+08:00',
    isToday: true,
    status: 'open',
    supplierId: 'sup-gen-lighthouse',
  },
  {
    id: 'oracle-20260210-01',
    title: '往期：新能源板块是否进入库存去化尾声？',
    description: '基于上游原材料与渠道库存周度变化进行判断。',
    createdAt: '2026-02-10T17:05:00+08:00',
    isToday: false,
    status: 'resolved',
    supplierId: 'sup-fin-harbor',
  },
  {
    id: 'oracle-20260208-01',
    title: '往期：多区域部署下数据同步延迟是否可控？',
    description: '评估双活架构下峰值时段复制延迟与一致性策略。',
    createdAt: '2026-02-08T15:00:00+08:00',
    isToday: false,
    status: 'resolved',
    supplierId: 'sup-tech-nebula',
  },
  {
    id: 'oracle-20260205-01',
    title: '往期：中型客户首年续约率为何低于预期？',
    description: '排查 onboarding 阶段与成功里程碑设计是否失衡。',
    createdAt: '2026-02-05T10:30:00+08:00',
    isToday: false,
    status: 'resolved',
    supplierId: 'sup-gen-maple',
  },
  {
    id: 'oracle-20260130-01',
    title: '往期：合规审计频次提升是否影响交付效率？',
    description: '比较审计前后交付周期与漏洞发现率变化。',
    createdAt: '2026-01-30T18:20:00+08:00',
    isToday: false,
    status: 'resolved',
    supplierId: 'sup-tech-orbit',
  },
  {
    id: 'oracle-20260125-01',
    title: '往期：新品首月投放应聚焦品牌还是转化？',
    description: '回看三轮 campaign 数据，校准品牌与效果预算。',
    createdAt: '2026-01-25T14:10:00+08:00',
    isToday: false,
    status: 'resolved',
    supplierId: 'sup-gen-summit',
  },
];

export const deliveries: DeliveryContent[] = [
  {
    scenario: 'market_launch',
    qa: {
      question: '首发市场应优先选择一线城市还是行业垂直场景？',
      answer: '建议先攻行业垂直场景，以更高转化验证价值主张，再逐步扩展城市层级。',
    },
    marketCopy: {
      headline: '从高意向行业切入，让首发即形成可复制增长曲线',
      body: '通过“垂直场景 + 可量化 ROI”组合，首月即可沉淀可复用获客模型，并降低泛人群试错成本。',
      cta: '下载首发增长执行清单',
    },
    references: [
      {
        type: 'internal',
        title: 'Q1 首发行业转化周报',
        link: 'internal://reports/q1-launch-conversion',
        publishedAt: '2026-02-12',
      },
      {
        type: 'external',
        title: 'B2B SaaS Vertical GTM Benchmark 2025',
        link: 'https://example.com/vertical-gtm-2025',
        publishedAt: '2025-11-21',
      },
    ],
    methodology: {
      framework: 'AARRR + ICP 分层',
      sampling: '近 3 个月 16 个 campaign 的分层抽样',
      qualityControl: '异常周数据剔除 + 双人复核结论',
    },
  },
  {
    scenario: 'risk_review',
    qa: {
      question: '如何在不显著降收益的前提下降低回撤风险？',
      answer: '通过提高防御资产配比并引入动态对冲阈值，可在多数波动窗口降低回撤。',
    },
    marketCopy: {
      headline: '收益与风控不必二选一：建立动态防线应对波动',
      body: '使用“风险预算 + 对冲阈值”双机制，在市场剧烈波动时优先守住净值曲线。',
      cta: '查看风控参数模板',
    },
    references: [
      {
        type: 'internal',
        title: '多策略组合回撤复盘（2025Q4）',
        link: 'internal://risk/drawdown-review-2025q4',
        publishedAt: '2026-01-06',
      },
      {
        type: 'external',
        title: 'Global Multi-Asset Volatility Report',
        link: 'https://example.com/global-volatility-report',
        publishedAt: '2026-01-20',
      },
    ],
    methodology: {
      framework: '风险平价 + 压力测试',
      sampling: '42 组历史波动区间回放',
      qualityControl: '参数敏感性检验 + 蒙特卡洛校验',
    },
  },
  {
    scenario: 'oracle_support',
    qa: {
      question: 'Oracle 问题处理应如何保证速度与可信度？',
      answer: '建议采用“机器初筛 + 人工复核 + 来源留痕”的三段式流程。',
    },
    marketCopy: {
      headline: '把高频问题处理成可追溯、可复用的决策资产',
      body: '通过统一问题模板、结构化来源和标准化方法论，让每次回答都能沉淀为组织知识。',
      cta: '领取 Oracle 响应 SOP',
    },
    references: [
      {
        type: 'internal',
        title: 'Oracle 响应时效看板（近30天）',
        link: 'internal://oracle/response-dashboard-30d',
        publishedAt: '2026-02-13',
      },
      {
        type: 'external',
        title: 'Decision Intelligence Operating Model',
        link: 'https://example.com/decision-intelligence-ops',
        publishedAt: '2025-10-09',
      },
    ],
    methodology: {
      framework: 'OODA + 证据分级',
      sampling: '过去 120 条问答工单抽样',
      qualityControl: '来源有效性检查 + 交叉验证',
    },
  },
];
