export interface Project {
  id: string;
  title: string;
  shortDesc: string;
  fullDesc: string;
  tech: string[];
  features: string[];
  category: 'nlp' | 'ml' | 'llm' | 'cv';
  gradient: string;
  icon: string;
  images: string[];
}

export const projects: Project[] = [
  {
    id: 'rag-chatbot',
    title: 'Context-Aware RAG Chatbot',
    shortDesc: 'RAG system with conversational memory and document retrieval',
    fullDesc: 'Built a sophisticated Retrieval-Augmented Generation system powered by LangChain and FAISS for semantic document search. The chatbot features conversational memory for maintaining context across multi-turn dialogues, uses Qwen2.5 via Ollama for local LLM processing, and provides both Streamlit web interface and CLI options. Documents are loaded from a docs/ folder and transformed into vector embeddings for efficient retrieval.',
    tech: ['LangChain', 'FAISS', 'Qwen2.5', 'Ollama', 'Streamlit', 'Python'],
    features: [
      'Document retrieval with FAISS vector search',
      'Conversational memory for context retention',
      'Local LLM integration via Ollama',
      'Streamlit web interface + CLI version',
      'Custom document processing pipeline'
    ],
    category: 'llm',
    gradient: 'from-plasma via-volt to-neural',
    icon: 'brain',
    images: [
      'projects/chatbot/chatbot-1.png',
      'projects/chatbot/chatbot-2.png',
      'projects/chatbot/chatbot-code-1.png',
      'projects/chatbot/chatbot-code-2.png'
    ]
  },
  {
    id: 'bert-classifier',
    title: 'BERT News Classifier',
    shortDesc: 'Fine-tuned BERT for multi-class news categorization',
    fullDesc: 'Developed a state-of-the-art text classification system using fine-tuned BERT transformer on the AG News dataset with 120,000 training samples and 7,600 test samples. The model accurately categorizes news articles into 4 categories: World, Sports, Business, and Sci/Tech. Demonstrates transfer learning, leveraging pre-trained BERT weights with custom classification head, and CUDA GPU optimization for efficient training.',
    tech: ['BERT', 'HuggingFace Transformers', 'PyTorch', 'CUDA', 'Python'],
    features: [
      'Transfer learning with pre-trained BERT',
      'Multi-class classification (4 categories)',
      'GPU-accelerated training with CUDA',
      'AG News dataset (120k+ samples)',
      'High accuracy text classification'
    ],
    category: 'nlp',
    gradient: 'from-synapse via-neural to-quantum',
    icon: 'newspaper',
    images: [
      'projects/bert/bert-1.png',
      'projects/bert/bert-code.png',
      'projects/bert/bert-training-1.png',
      'projects/bert/bert-training-2.png'
    ]
  },
  {
    id: 'housing-prediction',
    title: 'Multimodal Housing Predictor',
    shortDesc: 'Fusion of image and tabular data for price prediction',
    fullDesc: 'Created an innovative multimodal machine learning system that combines visual features from property images with structured tabular data for accurate house price prediction. Uses ResNet CNN architecture for extracting visual features from 1000+ synthetic house images, coupled with a tabular feature network. Custom fusion layers merge both modalities for final predictions, evaluated using MAE and MSE metrics with comprehensive visualization.',
    tech: ['PyTorch', 'ResNet', 'Pandas', 'Matplotlib', 'Python'],
    features: [
      'CNN feature extraction with ResNet',
      'Tabular feature network for structured data',
      'Multimodal fusion architecture',
      '1000+ synthetic house images dataset',
      'MAE/MSE evaluation with visualizations'
    ],
    category: 'ml',
    gradient: 'from-apex via-ember to-volt',
    icon: 'home',
    images: [
      'projects/house-price/house-result.png',
      'projects/house-price/house-graph.png',
      'projects/house-price/house-code-1.png',
      'projects/house-price/house-code-2.png'
    ]
  },
  {
    id: 'churn-prediction',
    title: 'Customer Churn Predictor',
    shortDesc: 'ML model identifying at-risk telecom customers',
    fullDesc: 'Built a robust customer churn prediction system using Logistic Regression on the Telco Customer Churn dataset. Features comprehensive data preprocessing including missing value imputation, feature engineering, and encoding strategies. Developed complete scikit-learn pipeline for reproducible predictions. Model evaluated using Accuracy, Precision, Recall, F1-Score, and ROC-AUC metrics to provide business-actionable insights for customer retention.',
    tech: ['scikit-learn', 'Pandas', 'NumPy', 'Logistic Regression', 'Python'],
    features: [
      'Telco Customer Churn dataset analysis',
      'Comprehensive data preprocessing pipeline',
      'Feature engineering and encoding',
      'Multiple evaluation metrics (ROC-AUC, F1)',
      'Business-actionable customer insights'
    ],
    category: 'ml',
    gradient: 'from-volt via-plasma to-flux',
    icon: 'users',
    images: [
      'projects/churn/churn-output.png',
      'projects/churn/churn-code-1.png',
      'projects/churn/churn-code-2.png',
      'projects/churn/churn-code-3.png'
    ]
  },
  {
    id: 'ticket-tagging',
    title: 'Automated Ticket Tagger',
    shortDesc: 'LLM-powered support ticket categorization system',
    fullDesc: 'Developed an automated ticket tagging system leveraging Llama 2 7B via Ollama for natural language understanding and zero-shot classification. Features configurable tag taxonomy for flexible categorization requirements and optimized prompt engineering templates for accurate tag assignment. Supports batch processing for high-volume ticket handling with local LLM integration ensuring data privacy and no external API dependencies.',
    tech: ['Llama 2 7B', 'Ollama', 'Python', 'Prompt Engineering'],
    features: [
      'Zero-shot classification capability',
      'Configurable tag taxonomy system',
      'Optimized prompt engineering templates',
      'Local LLM via Ollama (privacy-focused)',
      'Batch processing support'
    ],
    category: 'llm',
    gradient: 'from-neural via-quantum to-flux',
    icon: 'tag',
    images: [
      'projects/ticket/ticket-code-1.png',
      'projects/ticket/ticket-code-2.png',
      'projects/ticket/ticket-code-3.png',
      'projects/ticket/ticket-code-4.png'
    ]
  }
];

export const skills = {
  'AI & ML': ['PyTorch', 'scikit-learn', 'CNNs', 'Regression', 'Feature Engineering'],
  'NLP': ['BERT', 'HuggingFace', 'Transformers', 'Text Classification', 'Tokenization'],
  'LLMs & RAG': ['LangChain', 'FAISS', 'ChromaDB', 'Ollama', 'Llama 2', 'Qwen2.5'],
  'Computer Vision': ['OpenCV', 'ResNet', 'Image Processing', 'CNNs'],
  'Web & APIs': ['Streamlit', 'Flask', 'FastAPI', 'REST APIs'],
  'Data': ['Pandas', 'NumPy', 'Visualization', 'Matplotlib'],
  'Tools': ['Git', 'GitHub', 'Linux', 'Prompt Engineering', 'WordPress']
};

export const experience = [
  {
    title: 'Educator',
    period: '2021 - 2024',
    description: 'Teaching experience across multiple educational institutions including Behira, Aspire, Imaan, and Imman schools.',
    type: 'teaching'
  },
  {
    title: 'WordPress Expert',
    period: 'Ongoing',
    description: 'Expert-level proficiency in WordPress development, customization, and optimization.',
    type: 'web'
  },
  {
    title: 'Digital Marketing',
    period: 'Ongoing',
    description: 'Experience in Instagram and Facebook advertising campaigns and SEO optimization.',
    type: 'marketing'
  }
];
