export interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  modules: number;
  price: number;
  instructor: string;
  rating: number;
  students: number;
  category: string;
  detailedDescription: string;
  learningOutcomes: string[];
  prerequisites: string[];
}

export interface Certificate {
  id: string;
  title: string;
  description: string;
  shortDescription: string;
  track: 'AI' | 'Risk' | 'Quant';
  duration: string;
  format: 'Self-Paced' | 'Cohort-Based';
  savings: string;
  color: string;
  price: number;
  courseIds: string[];
  featured: boolean;
  outcomes: string[];
  recognizedBy: string[];
}

export const courses: Record<string, Course> = {
  'intro-ml-finance': {
    id: 'intro-ml-finance',
    title: 'Introduction to Machine Learning in Finance',
    description: 'Master the fundamentals of ML applications in financial markets',
    duration: '4 weeks',
    level: 'Beginner',
    modules: 8,
    price: 499,
    instructor: 'Dr. Sarah Chen',
    rating: 4.8,
    students: 2847,
    category: 'Machine Learning',
    detailedDescription: 'Learn how machine learning is transforming finance, from algorithmic trading to risk management. This comprehensive course covers supervised and unsupervised learning, feature engineering for financial data, and model evaluation specific to finance applications.',
    learningOutcomes: [
      'Understand core ML algorithms and their financial applications',
      'Build and evaluate ML models for financial forecasting',
      'Engineer features from financial time series data',
      'Implement backtesting frameworks for trading models'
    ],
    prerequisites: ['Basic Python programming', 'Statistics fundamentals']
  },
  'model-validation': {
    id: 'model-validation',
    title: 'AI Model Validation & Testing',
    description: 'Rigorous validation frameworks for AI models in financial institutions',
    duration: '3 weeks',
    level: 'Intermediate',
    modules: 6,
    price: 599,
    instructor: 'Prof. Michael Rodriguez',
    rating: 4.9,
    students: 1523,
    category: 'Risk Management',
    detailedDescription: 'Learn industry-standard model validation techniques used by Fortune 500 banks. Covers SR 11-7 compliance, model performance testing, stability analysis, and documentation requirements.',
    learningOutcomes: [
      'Conduct comprehensive model validation per SR 11-7',
      'Design test suites for model stability and robustness',
      'Document validation findings for regulatory compliance',
      'Identify and remediate model weaknesses'
    ],
    prerequisites: ['Understanding of ML algorithms', 'Basic statistics']
  },
  'governance-compliance': {
    id: 'governance-compliance',
    title: 'AI Governance & Regulatory Compliance',
    description: 'Navigate SR 11-7, OCC guidelines, and EU AI Act requirements',
    duration: '3 weeks',
    level: 'Intermediate',
    modules: 5,
    price: 649,
    instructor: 'Jennifer Park, Esq.',
    rating: 4.7,
    students: 1891,
    category: 'Governance',
    detailedDescription: 'Comprehensive coverage of AI governance frameworks and regulatory requirements. Learn how to build compliant AI systems that satisfy regulators in the US and EU.',
    learningOutcomes: [
      'Implement SR 11-7 compliant model governance',
      'Navigate OCC supervisory guidance on model risk',
      'Prepare for EU AI Act compliance requirements',
      'Build effective model risk management frameworks'
    ],
    prerequisites: ['Basic understanding of AI/ML']
  },
  'explainability-interpretability': {
    id: 'explainability-interpretability',
    title: 'Model Explainability & Interpretability',
    description: 'SHAP, LIME, and transparency techniques for black-box models',
    duration: '2 weeks',
    level: 'Advanced',
    modules: 5,
    price: 549,
    instructor: 'Dr. Alex Thompson',
    rating: 4.9,
    students: 2103,
    category: 'Explainability',
    detailedDescription: 'Master cutting-edge explainability techniques for complex ML models. Learn SHAP values, LIME, counterfactual explanations, and how to communicate model decisions to stakeholders and regulators.',
    learningOutcomes: [
      'Implement SHAP and LIME for model explanations',
      'Generate counterfactual explanations for decisions',
      'Build model cards and transparency documentation',
      'Communicate AI decisions to non-technical stakeholders'
    ],
    prerequisites: ['Experience with ML models', 'Python proficiency']
  },
  'bias-detection': {
    id: 'bias-detection',
    title: 'Bias Detection & Fairness in AI',
    description: 'Identify and mitigate algorithmic bias in financial models',
    duration: '3 weeks',
    level: 'Intermediate',
    modules: 6,
    price: 599,
    instructor: 'Dr. Maya Patel',
    rating: 4.8,
    students: 1756,
    category: 'Fairness',
    detailedDescription: 'Learn to detect, measure, and mitigate bias in AI systems. Covers fairness metrics, bias testing frameworks, and remediation strategies for financial applications.',
    learningOutcomes: [
      'Measure bias using industry-standard metrics',
      'Implement bias testing in model pipelines',
      'Apply debiasing techniques to ML models',
      'Document fairness assessments for compliance'
    ],
    prerequisites: ['ML fundamentals', 'Statistics']
  },
  'mlops-production': {
    id: 'mlops-production',
    title: 'MLOps & Production Monitoring',
    description: 'Deploy and monitor AI systems in production environments',
    duration: '4 weeks',
    level: 'Advanced',
    modules: 7,
    price: 699,
    instructor: 'David Chen',
    rating: 4.7,
    students: 1987,
    category: 'MLOps',
    detailedDescription: 'End-to-end MLOps for financial institutions. Learn deployment strategies, monitoring frameworks, model drift detection, and automated retraining pipelines.',
    learningOutcomes: [
      'Deploy ML models to production environments',
      'Monitor model performance and detect drift',
      'Build automated retraining pipelines',
      'Implement A/B testing for model updates'
    ],
    prerequisites: ['ML experience', 'Cloud platforms knowledge']
  },
  'quant-methods': {
    id: 'quant-methods',
    title: 'Quantitative Methods & Statistics',
    description: 'Mathematical foundations for quantitative finance',
    duration: '4 weeks',
    level: 'Beginner',
    modules: 8,
    price: 549,
    instructor: 'Prof. Robert Wilson',
    rating: 4.6,
    students: 3214,
    category: 'Quantitative Finance',
    detailedDescription: 'Build a solid foundation in the statistical and mathematical methods used in quantitative finance. Covers probability theory, statistical inference, and computational techniques.',
    learningOutcomes: [
      'Master probability distributions for finance',
      'Apply statistical inference to market data',
      'Implement Monte Carlo simulations',
      'Use computational methods for optimization'
    ],
    prerequisites: ['Calculus', 'Linear algebra basics']
  },
  'derivatives-pricing': {
    id: 'derivatives-pricing',
    title: 'Derivatives Pricing & Hedging',
    description: 'Options, futures, and exotic derivatives valuation',
    duration: '5 weeks',
    level: 'Advanced',
    modules: 9,
    price: 799,
    instructor: 'Dr. James Liu',
    rating: 4.9,
    students: 2456,
    category: 'Derivatives',
    detailedDescription: 'Comprehensive coverage of derivatives pricing models from Black-Scholes to advanced exotic options. Learn hedging strategies and risk management techniques.',
    learningOutcomes: [
      'Price options using Black-Scholes and binomial models',
      'Value exotic derivatives and structured products',
      'Implement delta, gamma, and vega hedging strategies',
      'Build derivatives pricing libraries in Python'
    ],
    prerequisites: ['Stochastic calculus', 'Programming skills']
  },
  'portfolio-theory': {
    id: 'portfolio-theory',
    title: 'Portfolio Theory & Optimization',
    description: 'Modern Portfolio Theory and efficient portfolio construction',
    duration: '4 weeks',
    level: 'Intermediate',
    modules: 7,
    price: 649,
    instructor: 'Dr. Emily Zhang',
    rating: 4.8,
    students: 2891,
    category: 'Portfolio Management',
    detailedDescription: 'Master Modern Portfolio Theory, mean-variance optimization, and advanced portfolio construction techniques. Learn how to build efficient portfolios that balance risk and return.',
    learningOutcomes: [
      'Apply Modern Portfolio Theory to portfolio construction',
      'Optimize portfolios using mean-variance framework',
      'Implement risk parity and factor-based strategies',
      'Backtest portfolio strategies with real data'
    ],
    prerequisites: ['Statistics', 'Financial markets knowledge']
  },
  'fixed-income': {
    id: 'fixed-income',
    title: 'Fixed Income Analytics',
    description: 'Bond pricing, duration, and interest rate modeling',
    duration: '4 weeks',
    level: 'Intermediate',
    modules: 6,
    price: 599,
    instructor: 'Prof. Thomas Brown',
    rating: 4.7,
    students: 1678,
    category: 'Fixed Income',
    detailedDescription: 'Comprehensive fixed income analytics covering bond pricing, yield curve construction, duration/convexity, and interest rate risk management.',
    learningOutcomes: [
      'Price bonds and calculate yield measures',
      'Construct and analyze yield curves',
      'Measure duration and convexity for risk management',
      'Model interest rate dynamics'
    ],
    prerequisites: ['Bond market basics', 'Calculus']
  },
  'risk-modeling': {
    id: 'risk-modeling',
    title: 'Risk Modeling & Value at Risk',
    description: 'VaR, CVaR, stress testing, and scenario analysis',
    duration: '5 weeks',
    level: 'Advanced',
    modules: 8,
    price: 749,
    instructor: 'Dr. Lisa Anderson',
    rating: 4.9,
    students: 2234,
    category: 'Risk Management',
    detailedDescription: 'Advanced risk modeling techniques including VaR, Expected Shortfall, stress testing, and scenario analysis. Learn industry best practices for risk measurement and management.',
    learningOutcomes: [
      'Calculate VaR using historical, parametric, and Monte Carlo methods',
      'Implement Expected Shortfall (CVaR) models',
      'Design stress testing and scenario analysis frameworks',
      'Backtest risk models for validation'
    ],
    prerequisites: ['Statistics', 'Financial derivatives knowledge']
  },
  'stochastic-calculus': {
    id: 'stochastic-calculus',
    title: 'Stochastic Calculus for Finance',
    description: 'Brownian motion, Ito calculus, and diffusion models',
    duration: '5 weeks',
    level: 'Advanced',
    modules: 9,
    price: 799,
    instructor: 'Prof. Richard Martinez',
    rating: 4.8,
    students: 1567,
    category: 'Mathematical Finance',
    detailedDescription: 'Rigorous treatment of stochastic calculus for finance. Covers Brownian motion, Ito calculus, stochastic differential equations, and applications to derivatives pricing.',
    learningOutcomes: [
      'Master Brownian motion and its properties',
      'Apply Ito lemma to derivatives pricing',
      'Solve stochastic differential equations',
      'Implement numerical methods for SDEs'
    ],
    prerequisites: ['Advanced calculus', 'Probability theory']
  },
  'time-series': {
    id: 'time-series',
    title: 'Time Series Analysis for Finance',
    description: 'ARIMA, GARCH, and econometric forecasting',
    duration: '4 weeks',
    level: 'Intermediate',
    modules: 7,
    price: 599,
    instructor: 'Dr. Kevin Wu',
    rating: 4.7,
    students: 2456,
    category: 'Econometrics',
    detailedDescription: 'Comprehensive time series analysis for financial forecasting. Covers ARIMA models, GARCH volatility modeling, cointegration, and multivariate time series.',
    learningOutcomes: [
      'Build ARIMA models for forecasting',
      'Model volatility using GARCH and extensions',
      'Test for cointegration and build pairs trading strategies',
      'Implement vector autoregression (VAR) models'
    ],
    prerequisites: ['Statistics', 'Econometrics basics']
  },
  'algo-trading': {
    id: 'algo-trading',
    title: 'Algorithmic Trading Foundations',
    description: 'Strategy design, backtesting, and execution',
    duration: '5 weeks',
    level: 'Intermediate',
    modules: 8,
    price: 699,
    instructor: 'Mark Stevens',
    rating: 4.8,
    students: 3102,
    category: 'Trading',
    detailedDescription: 'Learn to design, backtest, and deploy algorithmic trading strategies. Covers momentum, mean-reversion, and statistical arbitrage strategies with real-world implementation.',
    learningOutcomes: [
      'Design systematic trading strategies',
      'Implement robust backtesting frameworks',
      'Optimize strategy parameters',
      'Deploy strategies with proper risk controls'
    ],
    prerequisites: ['Programming', 'Financial markets knowledge']
  },
  'intro-genai': {
    id: 'intro-genai',
    title: 'Introduction to Generative AI',
    description: 'LLMs, diffusion models, and transformer architecture',
    duration: '4 weeks',
    level: 'Beginner',
    modules: 7,
    price: 599,
    instructor: 'Dr. Sophia Lee',
    rating: 4.9,
    students: 3567,
    category: 'Generative AI',
    detailedDescription: 'Comprehensive introduction to generative AI including large language models, diffusion models, and transformer architecture. Learn how GenAI is transforming finance.',
    learningOutcomes: [
      'Understand transformer architecture and attention mechanisms',
      'Work with pre-trained LLMs via APIs',
      'Fine-tune models for financial use cases',
      'Evaluate GenAI model performance'
    ],
    prerequisites: ['Python programming', 'ML basics']
  },
  'genai-bias': {
    id: 'genai-bias',
    title: 'Bias Detection in GenAI Systems',
    description: 'Identifying and mitigating bias in large language models',
    duration: '3 weeks',
    level: 'Intermediate',
    modules: 5,
    price: 549,
    instructor: 'Dr. Maya Patel',
    rating: 4.8,
    students: 1834,
    category: 'Fairness',
    detailedDescription: 'Learn to detect and mitigate bias in generative AI systems. Covers bias measurement, testing frameworks, and remediation strategies specific to LLMs.',
    learningOutcomes: [
      'Measure bias in LLM outputs',
      'Implement bias testing for GenAI systems',
      'Apply debiasing techniques to prompts and fine-tuning',
      'Document bias assessments for compliance'
    ],
    prerequisites: ['GenAI fundamentals', 'ML basics']
  },
  'model-cards': {
    id: 'model-cards',
    title: 'Model Cards & AI Documentation',
    description: 'Transparency frameworks for responsible AI deployment',
    duration: '2 weeks',
    level: 'Beginner',
    modules: 4,
    price: 449,
    instructor: 'Jennifer Park, Esq.',
    rating: 4.7,
    students: 1567,
    category: 'Governance',
    detailedDescription: 'Learn to create comprehensive model cards and documentation for AI systems. Covers transparency requirements, stakeholder communication, and regulatory expectations.',
    learningOutcomes: [
      'Create model cards following industry standards',
      'Document AI system capabilities and limitations',
      'Communicate model risks to stakeholders',
      'Maintain living documentation for AI systems'
    ],
    prerequisites: ['Basic AI/ML understanding']
  },
  'ethical-frameworks': {
    id: 'ethical-frameworks',
    title: 'Ethical Frameworks for AI',
    description: 'Building ethical AI systems with accountability',
    duration: '3 weeks',
    level: 'Intermediate',
    modules: 6,
    price: 599,
    instructor: 'Prof. David Kim',
    rating: 4.8,
    students: 1923,
    category: 'Ethics',
    detailedDescription: 'Comprehensive coverage of ethical frameworks for AI development and deployment. Learn how to build systems that are fair, accountable, and transparent.',
    learningOutcomes: [
      'Apply ethical frameworks to AI development',
      'Design accountability mechanisms for AI systems',
      'Implement human-in-the-loop workflows',
      'Navigate ethical dilemmas in AI deployment'
    ],
    prerequisites: ['AI/ML fundamentals']
  },
  'safety-alignment': {
    id: 'safety-alignment',
    title: 'AI Safety & Alignment',
    description: 'RLHF, red teaming, and adversarial testing',
    duration: '4 weeks',
    level: 'Advanced',
    modules: 7,
    price: 699,
    instructor: 'Dr. Alex Thompson',
    rating: 4.9,
    students: 1456,
    category: 'Safety',
    detailedDescription: 'Advanced techniques for AI safety including reinforcement learning from human feedback (RLHF), red teaming, and adversarial testing. Learn to build safe and aligned AI systems.',
    learningOutcomes: [
      'Implement RLHF for model alignment',
      'Conduct red teaming exercises for AI systems',
      'Design adversarial tests for robustness',
      'Build safety monitoring systems'
    ],
    prerequisites: ['Deep learning', 'NLP experience']
  },
  'ml-trading-finance': {
    id: 'ml-trading-finance',
    title: 'Machine Learning for Trading & Finance',
    description: 'Build production-ready ML models for financial forecasting, trading, and risk assessment',
    duration: '14 weeks',
    level: 'Advanced',
    modules: 7,
    price: 899,
    instructor: 'Sri Krishnamurthy',
    rating: 4.9,
    students: 7320,
    category: 'Machine Learning',
    detailedDescription: 'Master machine learning applications in finance with this comprehensive course. Build production-ready models for trading, forecasting, and risk assessment. Learn supervised and unsupervised learning, deep learning with LSTMs and Transformers, reinforcement learning for algorithmic trading, and MLOps best practices. Includes 60+ video lectures, 15+ hands-on labs, and 5 portfolio-worthy projects.',
    learningOutcomes: [
      'Build production-ready ML models for financial forecasting, trading, and risk assessment',
      'Implement supervised and unsupervised learning algorithms using Python and popular libraries',
      'Apply deep learning techniques including LSTMs, CNNs, and Transformers to financial data',
      'Develop reinforcement learning agents for algorithmic trading strategies',
      'Optimize portfolios using machine learning-enhanced asset allocation techniques',
      'Deploy ML models with proper validation, explainability, and governance frameworks',
      'Understand and apply model risk management principles for regulatory compliance',
      'Work with real financial datasets and industry-standard tools (Python, TensorFlow, PyTorch, Scikit-learn)'
    ],
    prerequisites: [
      'Basic understanding of finance and financial markets',
      'Intermediate Python programming skills',
      'Fundamental knowledge of statistics and probability',
      'Familiarity with linear algebra (helpful but not required)'
    ]
  }
};

export const certificates: Record<string, Certificate> = {
  'ai-risk-management': {
    id: 'ai-risk-management',
    title: 'AI & Risk Management Certificate',
    shortDescription: 'Master AI model validation, governance frameworks, and regulatory compliance',
    description: 'Master AI model validation, governance frameworks, and regulatory compliance. Build production-ready risk management expertise trusted by Fortune 500 banks.',
    track: 'AI',
    duration: '12 weeks',
    format: 'Self-Paced',
    savings: '20%',
    color: 'from-blue-500 to-blue-600',
    price: 2499,
    courseIds: [
      'intro-ml-finance',
      'model-validation',
      'governance-compliance',
      'explainability-interpretability',
      'bias-detection',
      'mlops-production'
    ],
    featured: true,
    outcomes: [
      'Build comprehensive model risk frameworks aligned with SR 11-7',
      'Validate AI models using industry-standard testing protocols',
      'Implement explainability techniques (SHAP, LIME) for regulatory compliance',
      'Detect and mitigate algorithmic bias in financial models',
      'Design governance structures for responsible AI deployment',
      'Monitor AI systems in production with MLOps best practices'
    ],
    recognizedBy: ['JPMorgan', 'Bank of America', 'Goldman Sachs', 'Morgan Stanley']
  },
  'quant-finance-foundations': {
    id: 'quant-finance-foundations',
    title: 'Quantitative Finance Foundations',
    shortDescription: 'Build essential skills in derivatives, portfolio theory, and risk modeling',
    description: 'Build essential skills in derivatives pricing, portfolio theory, and risk modeling. Master the mathematical foundations trusted by quant analysts at top hedge funds.',
    track: 'Quant',
    duration: '16 weeks',
    format: 'Cohort-Based',
    savings: '25%',
    color: 'from-green-500 to-green-600',
    price: 3199,
    courseIds: [
      'quant-methods',
      'derivatives-pricing',
      'portfolio-theory',
      'fixed-income',
      'risk-modeling',
      'stochastic-calculus',
      'time-series',
      'algo-trading'
    ],
    featured: true,
    outcomes: [
      'Price derivatives using Black-Scholes and binomial models',
      'Build and optimize portfolios with Modern Portfolio Theory',
      'Implement Value at Risk (VaR) and Expected Shortfall models',
      'Apply stochastic calculus to financial modeling problems',
      'Design and backtest quantitative trading strategies',
      'Analyze fixed income instruments and interest rate risk',
      'Forecast asset prices with time series models',
      'Deploy production-ready quantitative finance systems'
    ],
    recognizedBy: ['Citadel', 'Two Sigma', 'DE Shaw', 'Jane Street']
  },
  'responsible-genai': {
    id: 'responsible-genai',
    title: 'Responsible Generative AI',
    shortDescription: 'Deploy LLMs safely with bias detection, model cards, and ethical frameworks',
    description: 'Deploy LLMs safely with bias detection, model cards, and ethical frameworks. Build production-ready responsible AI systems trusted by regulators and stakeholders.',
    track: 'AI',
    duration: '10 weeks',
    format: 'Self-Paced',
    savings: '20%',
    color: 'from-purple-500 to-purple-600',
    price: 2099,
    courseIds: [
      'intro-genai',
      'genai-bias',
      'model-cards',
      'ethical-frameworks',
      'safety-alignment'
    ],
    featured: true,
    outcomes: [
      'Deploy LLMs safely with comprehensive bias detection protocols',
      'Create model cards and documentation for transparency',
      'Implement ethical frameworks aligned with EU AI Act requirements',
      'Conduct red teaming and adversarial testing for GenAI systems',
      'Build governance structures for responsible AI deployment',
      'Monitor GenAI systems for drift, hallucinations, and safety issues',
      'Design human-in-the-loop workflows for critical decisions',
      'Communicate AI risks effectively to stakeholders and regulators'
    ],
    recognizedBy: ['Google', 'Microsoft', 'JPMorgan', 'Meta']
  }
};

// Helper function to get courses for a certificate
export function getCoursesForCertificate(certificateId: string): Course[] {
  const certificate = certificates[certificateId];
  if (!certificate) return [];
  return certificate.courseIds.map(id => courses[id]).filter(Boolean);
}

// Helper function to get certificates containing a course
export function getCertificatesForCourse(courseId: string): Certificate[] {
  return Object.values(certificates).filter(cert => 
    cert.courseIds.includes(courseId)
  );
}

// Helper function to get all courses
export function getAllCourses(): Course[] {
  return Object.values(courses);
}

// Helper function to get all certificates
export function getAllCertificates(): Certificate[] {
  return Object.values(certificates);
}
