export interface CourseModule {
  title: string;
  duration: string;
  lessons: number;
  topics: string[];
}

export interface CourseFeature {
  emoji: string;
  title: string;
  description: string;
}

export interface CourseTestimonial {
  name: string;
  role: string;
  company: string;
  rating: number;
  text: string;
  image: string; // Initials or image URL
}

export interface CourseFAQ {
  question: string;
  answer: string;
  links?: { text: string; url: string; }[];
}

export interface CourseStats {
  completionRate?: number;
  avgSalaryIncrease?: string;
  careerAdvancement?: string;
  studentSatisfaction?: number;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  duration: string;
  level: 'Beginner' | 'Intermediate' | 'Advanced';
  modules: number;
  price: number;
  instructor: string;
  instructorTitle?: string;
  instructorImage?: string;
  rating: number;
  students: number;
  reviews?: number;
  category: string;
  detailedDescription: string;
  learningOutcomes: string[];
  prerequisites: string[];
  // Extended fields for detail pages
  hasDetailPage?: boolean;
  heroImage?: string;
  badge?: string;
  tagline?: string;
  keyOutcome?: string;
  courseModules?: CourseModule[];
  features?: CourseFeature[];
  testimonials?: CourseTestimonial[];
  faqs?: CourseFAQ[];
  stats?: CourseStats;
  includes?: string[];
  relatedCourseIds?: string[];
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
  faqs?: CourseFAQ[]; // Optional FAQs for certificate programs
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
    instructorTitle: 'AI Research Lead',
    instructorImage: 'SL',
    rating: 4.9,
    students: 3567,
    reviews: 892,
    category: 'Generative AI',
    detailedDescription: 'Comprehensive introduction to generative AI including large language models, diffusion models, and transformer architecture. Learn how GenAI is transforming finance.',
    learningOutcomes: [
      'Understand transformer architecture and attention mechanisms',
      'Work with pre-trained LLMs via APIs',
      'Fine-tune models for financial use cases',
      'Evaluate GenAI model performance'
    ],
    prerequisites: ['Python programming', 'ML basics'],
    hasDetailPage: true,
    heroImage: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&q=80&w=1080',
    badge: 'Popular',
    tagline: 'Master Large Language Models, transformer architecture, and diffusion models to build cutting-edge GenAI applications for finance.',
    keyOutcome: 'By the end of this course, you\'ll understand how generative AI works and be able to build production-ready LLM applications for financial services—from document Q&A systems to fine-tuned sentiment analysis models.',
    courseModules: [
      {
        title: 'Module 1: Introduction to Generative AI',
        duration: '3 days',
        lessons: 5,
        topics: [
          'What is Generative AI and why it matters in finance',
          'Evolution from discriminative to generative models',
          'Key applications: content generation, data augmentation, synthetic data',
          'Generative AI landscape: LLMs, diffusion models, GANs',
          'Hands-on: Your first API call to GPT-4'
        ]
      },
      {
        title: 'Module 2: Transformer Architecture Deep Dive',
        duration: '5 days',
        lessons: 7,
        topics: [
          'Attention mechanisms and self-attention',
          'Multi-head attention explained',
          'Positional encoding and embeddings',
          'Encoder-decoder architecture',
          'BERT vs GPT: bidirectional vs autoregressive models',
          'Lab: Building a mini-transformer from scratch',
          'Understanding tokenization (BPE, WordPiece, SentencePiece)'
        ]
      },
      {
        title: 'Module 3: Large Language Models (LLMs)',
        duration: '5 days',
        lessons: 8,
        topics: [
          'Evolution of LLMs: GPT-3, GPT-4, Claude, LLaMA',
          'Model architectures and scaling laws',
          'Prompt engineering fundamentals',
          'Zero-shot, few-shot, and chain-of-thought prompting',
          'Working with OpenAI, Anthropic, and Azure OpenAI APIs',
          'Context windows and token limits',
          'Lab: Building a financial document Q&A system',
          'Cost optimization for API usage'
        ]
      },
      {
        title: 'Module 4: Fine-Tuning for Financial Use Cases',
        duration: '4 days',
        lessons: 6,
        topics: [
          'When to fine-tune vs prompt engineering',
          'Transfer learning for NLP',
          'Parameter-efficient fine-tuning (LoRA, QLoRA)',
          'Preparing financial datasets for fine-tuning',
          'Project: Fine-tune a model for financial sentiment analysis',
          'Evaluation metrics for fine-tuned models'
        ]
      },
      {
        title: 'Module 5: Diffusion Models and Image Generation',
        duration: '3 days',
        lessons: 5,
        topics: [
          'Introduction to diffusion models (DALL-E, Stable Diffusion, Midjourney)',
          'Forward and reverse diffusion processes',
          'Denoising and sampling techniques',
          'Applications in financial data visualization',
          'Lab: Generate synthetic financial charts and diagrams'
        ]
      },
      {
        title: 'Module 6: Evaluating GenAI Model Performance',
        duration: '4 days',
        lessons: 6,
        topics: [
          'Evaluation challenges for generative models',
          'Perplexity, BLEU, ROUGE scores for text generation',
          'Human evaluation and A/B testing',
          'Hallucination detection and mitigation',
          'Benchmarking LLMs on financial tasks',
          'Case study: Evaluating a trading strategy assistant'
        ]
      },
      {
        title: 'Module 7: Production Deployment and Best Practices',
        duration: '4 days',
        lessons: 6,
        topics: [
          'Deploying GenAI models in production',
          'API rate limiting and caching strategies',
          'Monitoring model performance and drift',
          'Security considerations: prompt injection, data leakage',
          'Cost management for production LLM applications',
          'Final project: Build and deploy a GenAI financial assistant'
        ]
      }
    ],
    features: [
      { emoji: '🎥', title: '40+ Video Lectures', description: 'Comprehensive video content with demos' },
      { emoji: '🧪', title: '10+ Hands-on Labs', description: 'Real-world coding exercises' },
      { emoji: '📊', title: '3 Major Projects', description: 'Portfolio-ready capstone projects' },
      { emoji: '🏆', title: 'Certificate', description: 'Industry-recognized completion certificate' },
      { emoji: '💬', title: 'Live Q&A Sessions', description: 'Weekly office hours with instructor' },
      { emoji: '📥', title: 'Downloadable Resources', description: 'Code templates, notebooks, and slides' }
    ],
    testimonials: [
      {
        name: 'Jessica Martinez',
        role: 'AI Research Scientist',
        company: 'Goldman Sachs',
        rating: 5,
        text: 'Dr. Lee\'s course is the best introduction to GenAI I\'ve found. The focus on financial applications made it immediately applicable to my work. Highly recommended!',
        image: 'JM'
      },
      {
        name: 'David Wong',
        role: 'Product Manager',
        company: 'Morgan Stanley',
        rating: 5,
        text: 'Perfect balance of theory and practice. I went from knowing nothing about transformers to deploying a GenAI assistant for our trading desk in 4 weeks.',
        image: 'DW'
      },
      {
        name: 'Aisha Khan',
        role: 'Data Scientist',
        company: 'BlackRock',
        rating: 5,
        text: 'The hands-on labs were exceptional. Building a financial Q&A system and fine-tuning models for sentiment analysis gave me practical skills I use daily.',
        image: 'AK'
      }
    ],
    faqs: [
      {
        question: 'What is the time commitment required?',
        answer: 'This is a 4-week course designed for busy professionals. Expect to spend 6-8 hours per week including video lectures, hands-on labs, and project work. You have lifetime access to all materials.',
        links: [{ text: 'View full schedule', url: '#' }]
      },
      {
        question: 'Do I need prior GenAI experience?',
        answer: 'No prior GenAI experience required. We start from the fundamentals. However, you should have basic Python programming skills and understand ML basics (what is a neural network, training, etc.).',
        links: [{ text: 'Check prerequisites', url: '#' }]
      },
      {
        question: 'What tools and APIs will I need?',
        answer: 'You\'ll need Python 3.8+ and access to OpenAI API (we provide $50 in credits). We also cover Azure OpenAI and Anthropic APIs. All code templates and Jupyter notebooks are provided.',
        links: [{ text: 'Setup guide', url: '#' }]
      },
      {
        question: 'Can I get a certificate for this course?',
        answer: 'Yes! Upon completion, you receive a QuantUniversity Certificate of Completion. This course is also part of the Responsible GenAI Certificate Program, which includes 5 courses and saves you 20%.',
        links: [{ text: 'View certificate program', url: '#' }]
      },
      {
        question: 'What is your refund policy?',
        answer: 'We offer a 30-day money-back guarantee. If you\'re not satisfied with the course for any reason within the first 30 days, we\'ll provide a full refund, no questions asked.',
        links: [{ text: 'Full refund policy', url: '#' }]
      }
    ],
    stats: {
      completionRate: 92,
      avgSalaryIncrease: '+$18K',
      careerAdvancement: '71%',
      studentSatisfaction: 98
    },
    includes: [
      'Lifetime access to all course materials',
      '40+ HD video lectures',
      '10+ hands-on coding labs',
      '$50 in OpenAI API credits',
      'Downloadable code templates and notebooks',
      'Certificate of completion',
      'Weekly live Q&A with instructor',
      '30-day money-back guarantee'
    ],
    relatedCourseIds: ['genai-bias', 'model-cards', 'ethical-frameworks', 'safety-alignment']
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
    duration: '12 weeks',
    level: 'Advanced',
    modules: 7,
    price: 449,
    instructor: 'Sri Krishnamurthy',
    instructorTitle: 'CFA, CAP, Founder of QuantUniversity',
    instructorImage: 'SK',
    rating: 4.9,
    students: 7320,
    reviews: 1847,
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
      'Familiarity with linear algebra (helpful but not required)',
      'No prior ML experience required - we start from fundamentals'
    ],
    hasDetailPage: true,
    heroImage: 'https://images.unsplash.com/photo-1591453089816-0fbb971b454c?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjBmaW5hbmNlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjIxMTM4NzB8MA&ixlib=rb-4.1.0&q=80&w=1080',
    badge: 'Best Seller',
    tagline: 'Master ML algorithms, deep learning, and reinforcement learning to build production-ready models for financial forecasting, trading, and risk management.',
    keyOutcome: 'By the end of this course, you\'ll be able to build and deploy production-ready ML models for financial forecasting, algorithmic trading, and risk management—with confidence in your ability to handle real-world financial applications.',
    courseModules: [
      {
        title: 'Module 1: Introduction to Machine Learning in Finance',
        duration: '2 weeks',
        lessons: 8,
        topics: [
          'Overview of ML applications in finance',
          'Supervised vs. Unsupervised Learning',
          'Feature engineering for financial data',
          'Model evaluation metrics for finance',
          'Hands-on: Building your first financial ML model'
        ]
      },
      {
        title: 'Module 2: Regression Models for Financial Forecasting',
        duration: '2 weeks',
        lessons: 10,
        topics: [
          'Linear and polynomial regression',
          'Ridge, Lasso, and Elastic Net regularization',
          'Time series regression techniques',
          'Forecasting stock prices and returns',
          'Lab: Implementing regression models in Python'
        ]
      },
      {
        title: 'Module 3: Classification in Trading and Risk',
        duration: '2 weeks',
        lessons: 9,
        topics: [
          'Logistic regression for credit scoring',
          'Decision trees and random forests',
          'Support Vector Machines (SVM)',
          'Gradient Boosting (XGBoost, LightGBM)',
          'Case study: Credit default prediction'
        ]
      },
      {
        title: 'Module 4: Deep Learning for Finance',
        duration: '3 weeks',
        lessons: 12,
        topics: [
          'Neural networks fundamentals',
          'LSTM and RNN for time series',
          'Convolutional Neural Networks for pattern recognition',
          'Attention mechanisms and Transformers',
          'Project: Building a sentiment analysis model for market news'
        ]
      },
      {
        title: 'Module 5: Reinforcement Learning for Algorithmic Trading',
        duration: '2 weeks',
        lessons: 8,
        topics: [
          'Q-Learning and Deep Q-Networks (DQN)',
          'Policy gradient methods',
          'Building trading agents',
          'Backtesting and performance evaluation',
          'Lab: Implementing a reinforcement learning trading bot'
        ]
      },
      {
        title: 'Module 6: Portfolio Optimization with ML',
        duration: '2 weeks',
        lessons: 7,
        topics: [
          'Modern Portfolio Theory revisited',
          'ML-based asset allocation',
          'Risk parity and factor models',
          'Black-Litterman with ML insights',
          'Project: Build an ML-powered portfolio optimizer'
        ]
      },
      {
        title: 'Module 7: Model Risk Management and MLOps',
        duration: '1 week',
        lessons: 6,
        topics: [
          'Model validation and governance',
          'Explainability (SHAP, LIME)',
          'ML pipeline deployment',
          'Monitoring and retraining strategies',
          'Regulatory compliance (SR 11-7)'
        ]
      }
    ],
    features: [
      { emoji: '🎥', title: '60+ Video Lectures', description: 'High-quality recorded sessions with live coding' },
      { emoji: '🧪', title: '15+ Hands-on Labs', description: 'Coding exercises and real-world projects' },
      { emoji: '📊', title: '5 Major Projects', description: 'Portfolio-worthy capstone projects' },
      { emoji: '🏆', title: 'Certificate', description: 'Industry-recognized completion certificate' },
      { emoji: '💬', title: 'Live Q&A Sessions', description: 'Weekly office hours with the instructor' },
      { emoji: '📥', title: 'Downloadable Resources', description: 'Code templates, datasets, and slides' }
    ],
    testimonials: [
      {
        name: 'Michael Chen',
        role: 'Quantitative Analyst',
        company: 'JP Morgan',
        rating: 5,
        text: 'This course transformed how I approach ML in finance. The hands-on labs were particularly valuable - I implemented several models at work within weeks of completing the course.',
        image: 'MC'
      },
      {
        name: 'Sarah Johnson',
        role: 'Risk Manager',
        company: 'Goldman Sachs',
        rating: 5,
        text: 'Sri\'s teaching style is exceptional. He breaks down complex concepts and shows real-world applications. The model risk management module alone was worth the investment.',
        image: 'SJ'
      },
      {
        name: 'Rahul Patel',
        role: 'Data Scientist',
        company: 'Citadel',
        rating: 5,
        text: 'Best ML for finance course I\'ve taken. Covers everything from fundamentals to advanced deep learning, all with financial applications. Highly recommend for anyone serious about quant finance.',
        image: 'RP'
      }
    ],
    faqs: [
      {
        question: 'What is the time commitment required?',
        answer: 'The course is designed for working professionals. Expect to spend 8-12 hours per week including video lectures, hands-on labs, and assignments. The course runs for 12 weeks, but you have lifetime access to all materials.',
        links: [{ text: 'View full schedule', url: '#' }]
      },
      {
        question: 'Do I need prior machine learning experience?',
        answer: 'No prior ML experience is required. We start with fundamentals and build up to advanced techniques. However, you should be comfortable with Python programming and have basic statistics knowledge.',
        links: [{ text: 'Check prerequisites', url: '#' }]
      },
      {
        question: 'What tools and software will I need?',
        answer: 'You\'ll need a computer with Python 3.8+ installed. We use free, open-source libraries including Scikit-learn, TensorFlow, PyTorch, and Pandas. All datasets and code templates are provided.',
        links: [{ text: 'Setup guide', url: '#' }]
      },
      {
        question: 'Is this course suitable for enterprise teams?',
        answer: 'Absolutely! We offer enterprise licenses with team dashboards, progress tracking, and customized training paths. Contact us for volume pricing and dedicated support.',
        links: [
          { text: 'Get enterprise pricing', url: '#' },
          { text: 'View team features', url: '#' }
        ]
      },
      {
        question: 'What kind of certificate will I receive?',
        answer: 'Upon successful completion, you\'ll receive a QuantUniversity Certificate of Completion with verification credentials. The certificate is shareable on LinkedIn and recognized by major financial institutions.',
        links: [{ text: 'View sample certificate', url: '#' }]
      },
      {
        question: 'What is your refund policy?',
        answer: 'We offer a 30-day money-back guarantee. If you\'re not satisfied with the course for any reason within the first 30 days, we\'ll provide a full refund, no questions asked.',
        links: [{ text: 'Full refund policy', url: '#' }]
      }
    ],
    stats: {
      completionRate: 87,
      avgSalaryIncrease: '+$23K',
      careerAdvancement: '64%',
      studentSatisfaction: 96
    },
    includes: [
      'Lifetime access to course materials',
      '15+ hands-on coding projects',
      'Certificate of completion',
      'Weekly live Q&A sessions',
      'Access to private community',
      '30-day money-back guarantee'
    ],
    relatedCourseIds: ['intro-genai', 'risk-modeling', 'algo-trading', 'time-series']
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
