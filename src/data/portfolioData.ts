export interface Project {
  id: string;
  title: string;
  tagline: string;
  category: 'agentic' | 'vision' | 'fullstack' | 'ml';
  categoryLabel: string;
  highlightMetric: string;
  description: string;
  tags: string[];
  githubUrl: string;
  liveUrl?: string;
  architecture: {
    overview: string;
    keyInnovations: string[];
    technicalStack: string[];
    benchmarkOrImpact: string;
    flow: string[];
  };
}

export interface ExperienceItem {
  role: string;
  organization: string;
  location: string;
  period: string;
  badge?: string;
  type: 'experience' | 'education' | 'leadership';
  points: string[];
  skills: string[];
}

export interface CertificationItem {
  title: string;
  issuer: string;
  score: string;
  focus: string;
  badgeColor: string;
}

export const PERSONAL_INFO = {
  name: "Parth Prashant Amburle",
  shortName: "Parth Amburle",
  role: "AI/ML Engineer & Systems Builder",
  location: "Bangalore & Mumbai, India",
  email: "parthamburle123@gmail.com",
  phone: "+91-9930310987",
  github: "https://github.com/parthamburle12345",
  linkedin: "https://www.linkedin.com/in/parth-amburle-44295331b",
  resumeUrl: "/Parth_Amburle_Resume.pdf",
  photoUrl: "/parth-photo.jpg",
  status: "Available for AI / Founding Engineer Roles",
  tagline: "Bridging the frontier of Agentic AI, Few-Shot Vision-Language Models, and Scalable Full-Stack Engineering.",
  bio: "AI/ML Engineer currently pursuing PG-DAI at C-DAC Bangalore (AIR 1365) and B.E. in Artificial Intelligence & Machine Learning from SIES GST. Research-driven builder who engineered SigLIP-LPFormer to beat the SOTA MambaHSI benchmark in hyperspectral remote sensing with only 30 training samples. Grounded in peak operational discipline from the National Cadet Corps (NCC).",
  metrics: [
    { label: "SOTA Benchmark Beat", value: "95.8%+", desc: "SigLIP-LPFormer vs MambaHSI on Pavia HSI" },
    { label: "Few-Shot Scarcity", value: "30-Shot", desc: "Extreme data scarcity deep learning pipeline" },
    { label: "Autonomous Pipeline", value: "< 3 Min", desc: "Brand brief to ad audio via CrewAI agents" },
    { label: "All-India CCAT Rank", value: "AIR 1365", desc: "C-DAC PG-DAI Bangalore Selection" },
  ],
};

export const PROJECTS: Project[] = [
  {
    id: "siglip-lpformer",
    title: "SigLIP-LPFormer: Hyperspectral SOTA Classifier",
    tagline: "Few-shot hyperspectral land-cover segmentation beating state-of-the-art MambaHSI",
    category: "vision",
    categoryLabel: "Vision & Remote Sensing",
    highlightMetric: "Beats SOTA (95.80% OA) with only 30 samples/class",
    description: "Novel Vision-Language deep learning pipeline for high-resolution semantic segmentation on hyperspectral images (HSI). Adapted SigLIP & ViT to geospatial domains under extreme data scarcity.",
    tags: ["PyTorch", "SigLIP", "Vision Transformers", "Few-Shot Learning", "Google Colab", "Geospatial AI"],
    githubUrl: "https://github.com/parthamburle12345",
    architecture: {
      overview: "Standard RGB imagery captures 3 bands; hyperspectral sensors record 100-300 continuous bands creating unique 'spectral fingerprints'. When restricted to only 30 labeled pixels per class (extreme scarcity), conventional deep models overfit severely. SigLIP-LPFormer adapts OpenAI CLIP and Google SigLIP vision-language representations to spectral domain physics.",
      keyInnovations: [
        "Feature Expansion: Engineered 311 spectral channels from 103 raw bands using spectral derivatives, L2-normalization, and vegetation indices (NDVI, SAVI, Iron Oxide).",
        "Spectral Derivative Gradient: 102 gradient bands capture chemical rate-of-change across adjacent wavelengths.",
        "Learnable Prompt Adapter: Seamlessly projects high-dimensional spectral tokens into the pretrained SigLIP embedding manifold.",
        "Outperformed MambaHSI benchmark (95.80% Overall Accuracy) on Pavia University and Houston datasets."
      ],
      technicalStack: ["PyTorch", "HuggingFace Transformers", "SigLIP / ViT-L/14", "NumPy / SciPy", "Google Colab Pro", "Scikit-Learn"],
      benchmarkOrImpact: "Achieved superior overall accuracy against SOTA MambaHSI on Pavia University with 30-shot sample constraint.",
      flow: [
        "Hyperspectral Raw Cube (610x340 x 103 bands)",
        "Spectral Feature Engineering (311 bands: NDVI, SAVI, 102 Derivatives)",
        "Patch Extraction & Tokenization",
        "SigLIP Vision-Language Backbone + Learnable Prompts",
        "Dense Semantic Land-Cover Classification Output"
      ]
    }
  },
  {
    id: "ai-creative-director",
    title: "AI Creative Director: Autonomous Ad Agency",
    tagline: "Multi-agent autonomous studio producing broadcast-ready audio commercials in under 3 minutes",
    category: "agentic",
    categoryLabel: "Agentic AI & LLMs",
    highlightMetric: "< 3 Min from Brand Brief to Finished Broadcast Audio",
    description: "An autonomous agentic production pipeline using CrewAI, ElevenLabs neural voices, and structured LLM orchestrations. Automates copy generation, emotional tone steering, and sound design.",
    tags: ["CrewAI", "ElevenLabs API", "Multi-Agent Systems", "Prompt Engineering", "Python OOP", "Audio Mixing"],
    githubUrl: "https://github.com/parthamburle12345",
    architecture: {
      overview: "Commercial ad creation typically requires a copywriter, creative director, voice artist, and audio engineer taking multiple days. AI Creative Director simulates this workflow using a synchronized multi-agent hierarchy communicating through structured JSON schemas.",
      keyInnovations: [
        "Agent 1 (Script Writer): Crafts high-conversion copy tailored for regional languages (Hindi, Marathi, Indian English, Global English).",
        "Agent 2 (Style Director): Performs sentiment & brand acoustic analysis to generate structured voice profiles and pacing parameters.",
        "Agent 3 (Voice Producer): Interfaces with ElevenLabs neural API to render hyper-realistic voice performances.",
        "Agent 4 (Audio Mixer): Programmatically stitches background music, Foley FX, and ducking curves into a finished master MP3."
      ],
      technicalStack: ["CrewAI", "Python 3.11", "ElevenLabs API", "OpenAI / Claude LLMs", "Pydub / FFmpeg", "Tkinter / REST API"],
      benchmarkOrImpact: "Reduced commercial audio ad turnaround from 4 days of agency work to < 180 seconds with zero human intervention.",
      flow: [
        "Client Brand Brief Input (e.g., OnePlus, Energetic, Hindi)",
        "Agent 1: Copywriting & Cultural Localization",
        "Agent 2: Style & Voice Persona Selection (JSON Schema)",
        "Agent 3: Neural Voice Synthesis via ElevenLabs",
        "Agent 4: Dynamic Audio Mastering & SFX Layering",
        "Broadcast-Ready MP3 Deliverable"
      ]
    }
  },
  {
    id: "green-atlas-dss",
    title: "Green Atlas: AI WebGIS Decision Support System",
    tagline: "AI-powered spatial atlas and decision support system for India's Forest Rights Act (FRA)",
    category: "fullstack",
    categoryLabel: "WebGIS & Full-Stack AI",
    highlightMetric: "End-to-End OCR Digitization + Spatial WebGIS Engine",
    description: "Full-stack WebGIS monitoring platform combining Leaflet mapping, document OCR digitization, hierarchical RBAC administration, and AI-powered government welfare recommendation engines.",
    tags: ["React 19", "Vite", "Leaflet WebGIS", "Node.js Express", "MongoDB", "OCR Pipeline", "Docker"],
    githubUrl: "https://github.com/parthamburle12345",
    architecture: {
      overview: "Millions of tribal forest dwellers in India hold physical land titles under the Forest Rights Act that are difficult to track or verify. Green Atlas digitizes paper land titles via OCR, plots geo-spatial polygons onto an interactive WebGIS map, and runs AI recommendation models to match landholders with government welfare schemes.",
      keyInnovations: [
        "Interactive WebGIS: Real-time spatial tile rendering and polygon demarcations using Leaflet and GeoJSON.",
        "Document OCR Engine: Converts scanned land certificates and physical survey forms into structured JSON documents.",
        "Hierarchical RBAC: Multi-tier admin roles (SuperAdmin -> StateAdmin -> DistrictAdmin) with granular claim audit trails.",
        "Decision Support System (DSS): Machine learning recommendation engine linking landholder profile metrics to eligible state subsidies."
      ],
      technicalStack: ["React 19", "Leaflet", "Vite", "Express.js", "MongoDB / Mongoose", "Tesseract OCR / PDF-Parse", "Docker Compose"],
      benchmarkOrImpact: "Empowers district administrations to track thousands of claims visually and instantly discover eligible welfare programs for beneficiaries.",
      flow: [
        "Physical Land Claim Document Scan",
        "OCR Extraction & Entity Verification",
        "GeoJSON Coordinate Tagging on Leaflet Map",
        "AI DSS Scheme Matcher",
        "Hierarchical District Review & Approval Portal"
      ]
    }
  },
  {
    id: "pharmascheduler",
    title: "PharmaScheduler: Intelligent Batch Production Scheduler",
    tagline: "Algorithmic resource optimization system for pharmaceutical manufacturing bottlenecks",
    category: "ml",
    categoryLabel: "Algorithms & Systems",
    highlightMetric: "Automates multi-constraint medicine batch scheduling",
    description: "An algorithmic production management engine built in Django that optimizes complex pharmaceutical recipe compositions, machinery schedules, ingredient inventories, and delivery deadlines.",
    tags: ["Python", "Django", "Resource Optimization", "CSV Pipelines", "PostgreSQL/SQLite", "Scheduling Algorithms"],
    githubUrl: "https://github.com/parthamburle12345",
    architecture: {
      overview: "Pharmaceutical manufacturing facilities face severe scheduling bottlenecks due to shared reactors, cleaning changeover times, and perishable active pharmaceutical ingredients (APIs). PharmaScheduler uses constraint satisfaction algorithms to compute conflict-free production schedules.",
      keyInnovations: [
        "Constraint-Based Scheduler: Resolves machine availability, recipe steps, and batch deadlines.",
        "Automated BOM Calculation: Dynamically calculates raw material shortages and procurement windows.",
        "Robust CSV Engine: Efficient data ingest pipelines handling multi-facility product batches.",
        "Executive Dashboard: Interactive visual Gantt timeline of scheduled production slots."
      ],
      technicalStack: ["Python", "Django", "NumPy / Pandas", "Bootstrap", "CSV Stream Processors"],
      benchmarkOrImpact: "Eliminates idle machine downtime and prevents scheduling conflicts across simultaneous medicine formulations.",
      flow: [
        "Order Queue & Medicine Recipe Ingestion",
        "Constraint Evaluation (Machinery, Time, Ingredients)",
        "Optimization Heuristic Allocation",
        "Material Shortage Alert Dispatch",
        "Finalized Conflict-Free Manufacturing Schedule"
      ]
    }
  },
  {
    id: "student-performance-ml",
    title: "Predictive Analytics & Student Performance ML Engine",
    tagline: "Multivariable EDA and regression modeling on demographic and socioeconomic learning drivers",
    category: "ml",
    categoryLabel: "Data Science & ML",
    highlightMetric: "Rigorous statistical inference & feature importance extraction",
    description: "End-to-end data science study analyzing how parental education, lunch subsidies, and test prep influence academic score distributions, backed by predictive regression pipelines.",
    tags: ["Scikit-Learn", "Python", "EDA", "Pandas", "Matplotlib", "Seaborn", "Statistical Inference"],
    githubUrl: "https://github.com/parthamburle12345",
    architecture: {
      overview: "Explores multi-dimensional student performance metrics to uncover causal links between socioeconomic background and standardized test scores, training predictive regression pipelines with feature importance ranking.",
      keyInnovations: [
        "Deep Exploratory Data Analysis: Hypothesis testing, outlier isolation, and covariance inspection.",
        "Model Benchmark: Evaluated Linear Regression, Ridge, Random Forest, and Gradient Boosting regressors.",
        "Actionable Feature Attribution: Identified test preparation completion and parental education as highest-leverage predictors."
      ],
      technicalStack: ["Python", "Scikit-Learn", "Pandas", "NumPy", "Seaborn", "Matplotlib"],
      benchmarkOrImpact: "Delivered highly interpretable statistical insights with optimal R-squared regression scores.",
      flow: [
        "Data Ingestion & Cleaning",
        "Bivariate & Multivariate EDA",
        "Feature Encoding & Scaling",
        "Model Training & Hyperparameter Tuning",
        "Score Prediction & Insight Generation"
      ]
    }
  },
  {
    id: "systems-2048-id-gen",
    title: "2048 Desktop Engine & Campus Event Management Portal",
    tagline: "Object-oriented desktop applications engineered in Python Tkinter and Java Swing",
    category: "fullstack",
    categoryLabel: "Systems & GUI Architecture",
    highlightMetric: "Clean OOP State Machines & Event Dispatchers",
    description: "Two foundational engineering builds: an OOP-driven 2048 tile engine with custom matrix sliding mechanics, and a multi-portal Java Swing participant ID management system for university cultural fests.",
    tags: ["Python", "Tkinter", "Java", "Java Swing", "OOP Design", "Event-Driven Programming"],
    githubUrl: "https://github.com/parthamburle12345",
    architecture: {
      overview: "Demonstrates core object-oriented principles, state machine design, and event-driven architectures across both Python and Java ecosystems.",
      keyInnovations: [
        "2048 Tile Matrix: Custom slide and merge algorithms handling edge collision detection and live score caching.",
        "Java Swing Portals: Dual-role architecture separating Admin registration and student credential lookup.",
        "Robust State Persistence: Data serialization and reliable state recovery across program lifecycles."
      ],
      technicalStack: ["Python", "Tkinter Canvas", "Java 17", "Java Swing", "OOP Patterns"],
      benchmarkOrImpact: "Deployed live at college festivals to register hundreds of attendees without downtime.",
      flow: [
        "Event Dispatcher (Key / Mouse Triggers)",
        "Internal Board / Registry State Update",
        "Canvas / Component Re-render",
        "State Validation & Persistence"
      ]
    }
  }
];

export const EXPERIENCES: ExperienceItem[] = [
  {
    role: "Post Graduate Diploma in Artificial Intelligence (PG-DAI)",
    organization: "C-DAC Bangalore (Centre for Development of Advanced Computing)",
    location: "Bangalore, India",
    period: "August 2024 – Present",
    badge: "CCAT AIR: 1365",
    type: "education",
    points: [
      "Secured prestigious admission into C-DAC Bangalore with an All India Rank (AIR) of 1365 in CCAT.",
      "Undergoing rigorous post-graduate training in Advanced Deep Learning, NLP, Generative AI, MLOps, and High-Performance AI Systems.",
      "Collaborating on cutting-edge institutional projects including the FRA Green Atlas WebGIS Decision Support System.",
      "Conducting extensive research into transformer fine-tuning, model quantization, and distributed AI inference."
    ],
    skills: ["Deep Learning", "Generative AI", "NLP", "PyTorch", "WebGIS", "Mathematical Statistics", "Distributed AI"]
  },
  {
    role: "Machine Learning & Data Science Intern",
    organization: "DARPin Dynamics",
    location: "Remote / India",
    period: "Aug 2024 – Sep 2024",
    badge: "Industry Internship",
    type: "experience",
    points: [
      "Conducted extensive technical research and algorithmic data extraction to scrape, mine, and clean domain-specific corpora.",
      "Executed end-to-end data engineering workflows including anomaly detection, normalization, and automated preprocessing for ML model readiness.",
      "Collaborated with senior engineers on benchmarking data ingestion throughput and exploratory modeling."
    ],
    skills: ["Python", "Data Mining", "Data Preprocessing", "Feature Engineering", "Scikit-Learn", "Pandas"]
  },
  {
    role: "B.E. in Artificial Intelligence & Machine Learning",
    organization: "SIES Graduate School of Technology",
    location: "Navi Mumbai, India",
    period: "2022 – 2026",
    badge: "CGPA: 7.40 / 10",
    type: "education",
    points: [
      "Specialized in Artificial Intelligence, Deep Learning, Vision Transformers, and Multi-Agent Systems.",
      "Mentored by Dr. Arundhati Das on novel Hyperspectral Image Classification research using SigLIP-LPFormer.",
      "Engineered multiple production-grade systems including AI Creative Director, PharmaScheduler, and interactive software tools."
    ],
    skills: ["AI/ML Core", "PyTorch", "Computer Vision", "Algorithms & Data Structures", "Software Engineering", "Mathematics"]
  },
  {
    role: "Former Cadet — National Cadet Corps (NCC)",
    organization: "National Cadet Corps (NCC)",
    location: "Maharashtra, India",
    period: "Disciplined Leadership Training",
    badge: "Discipline & Command",
    type: "leadership",
    points: [
      "Instilled rigorous discipline, high-stakes crisis response, operational precision, and team command under physical and mental pressure.",
      "Carried forward standard operating procedures (SOP), systematic execution, and resilient problem-solving into software engineering and AI research."
    ],
    skills: ["Operational Discipline", "Team Command", "Crisis Management", "Resilience", "Strategic Planning"]
  }
];

export const CERTIFICATIONS: CertificationItem[] = [
  {
    title: "Machine Learning Masterclass",
    issuer: "Udemy",
    score: "Score: 100 / 100",
    focus: "Supervised & Unsupervised Learning, Optimization, Loss Formulations, Data Pipelines",
    badgeColor: "border-emerald-500/30 text-emerald-400 bg-emerald-500/10"
  },
  {
    title: "Artificial Intelligence in Industrial & Management Engineering",
    issuer: "NPTEL — IIT Kanpur",
    score: "Score: 69 / 100 (Elite)",
    focus: "Operations Management, Decision Support Systems, Heuristic Search & Industrial Optimization",
    badgeColor: "border-orange-500/30 text-orange-400 bg-orange-500/10"
  },
  {
    title: "Data Analytics with Python",
    issuer: "NPTEL — IIT Roorkee",
    score: "Score: 51 / 100",
    focus: "Statistical Inference, Probability Distributions, Data Visualization, NumPy & Pandas",
    badgeColor: "border-cyan-500/30 text-cyan-400 bg-cyan-500/10"
  }
];

export const SKILL_CATEGORIES = [
  {
    category: "Agentic AI & LLMs",
    skills: [
      { name: "CrewAI", level: "Advanced" },
      { name: "Multi-Agent Systems", level: "Advanced" },
      { name: "Prompt Engineering", level: "Expert" },
      { name: "ElevenLabs API", level: "Advanced" },
      { name: "LangChain", level: "Proficient" },
      { name: "Context Management", level: "Advanced" },
    ]
  },
  {
    category: "Deep Learning & Vision",
    skills: [
      { name: "PyTorch", level: "Advanced" },
      { name: "SigLIP / CLIP", level: "Advanced" },
      { name: "Vision Transformers (ViT)", level: "Advanced" },
      { name: "Hyperspectral (HSI)", level: "Research Grade" },
      { name: "Semantic Segmentation", level: "Advanced" },
      { name: "Few-Shot Learning", level: "Advanced" },
    ]
  },
  {
    category: "Full-Stack & WebGIS",
    skills: [
      { name: "React 19 / Vite", level: "Advanced" },
      { name: "Leaflet / WebGIS", level: "Advanced" },
      { name: "Node.js & Express", level: "Proficient" },
      { name: "Django / FastAPI", level: "Proficient" },
      { name: "MongoDB & SQL", level: "Proficient" },
      { name: "Tailwind CSS", level: "Advanced" },
    ]
  },
  {
    category: "Languages & Tools",
    skills: [
      { name: "Python", level: "Expert" },
      { name: "Java", level: "Proficient" },
      { name: "C / C++", level: "Proficient" },
      { name: "SQL", level: "Proficient" },
      { name: "Git & GitHub", level: "Advanced" },
      { name: "Docker", level: "Proficient" },
    ]
  }
];

export const TERMINAL_COMMANDS: Record<string, string> = {
  help: `Available commands:
  - whoami       : Brief overview of Parth Amburle
  - skills       : Core technical capabilities and stack
  - projects     : Key engineering and research projects
  - research     : SigLIP-LPFormer HSI breakthrough details
  - agentic      : AI Creative Director multi-agent architecture
  - experience   : Professional history, C-DAC, and education
  - contact      : Email, LinkedIn, GitHub connection links
  - ncc          : National Cadet Corps background
  - clear        : Clear the terminal console`,

  whoami: `PARTH PRASHANT AMBURLE
--------------------------------------------------
Role       : AI/ML Engineer & Systems Builder
Current    : C-DAC Bangalore PG-DAI (AIR: 1365) & SIES GST AIML
Focus      : Agentic AI Systems, Vision-Language Remote Sensing, Full-Stack AI
Location   : Bangalore / Mumbai, India
Philosophy : Military-grade discipline (NCC) coupled with relentless AI research.`,

  skills: `CORE TECH STACK:
- AI & LLMs   : CrewAI, Multi-Agent Orchestration, Prompt Engineering, ElevenLabs
- Vision & DL : PyTorch, SigLIP, Vision Transformers, CLIP, Few-Shot HSI
- Full-Stack  : React 19, Leaflet WebGIS, Node.js, Express, Django, FastAPI, MongoDB
- Languages   : Python, Java, C, C++, SQL, JavaScript`,

  projects: `FEATURED BUILDS:
1. SigLIP-LPFormer     -> SOTA Hyperspectral Classifier (beat MambaHSI with 30-shot)
2. AI Creative Director -> Autonomous 4-Agent Commercial Audio Studio (<3 min)
3. Green Atlas (FRA)    -> AI WebGIS Decision Support System & OCR Pipeline
4. PharmaScheduler      -> Industrial Medicine Batch Production Optimizer
5. Student ML Engine    -> Multivariable EDA & Regression Prediction
6. 2048 & Fest ID GUI   -> OOP Python Canvas & Java Swing Events`,

  research: `SIGLIP-LPFORMER RESEARCH HIGHLIGHTS:
- Problem: Hyperspectral land-cover classification with extreme data scarcity (30 samples/class).
- Solution: Engineered 311 spectral channels (102 gradient derivatives, NDVI, SAVI) into SigLIP vision-language embeddings.
- Result: Surpassed SOTA MambaHSI benchmark (95.80% OA) on Pavia University dataset.`,

  agentic: `AI CREATIVE DIRECTOR PIPELINE:
- 4-Agent Synchronized Crew (CrewAI):
  1. Script Writer (Cultural & linguistic copywriting)
  2. Style Director (Acoustic & tone steering via JSON schema)
  3. Voice Producer (ElevenLabs neural voice rendering)
  4. Audio Mixer (Cinematic SFX, background ducking, master MP3)
- Turnaround: < 3 minutes vs 4 agency business days.`,

  experience: `JOURNEY & MILESTONES:
- C-DAC Bangalore: PG-DAI August Batch (CCAT AIR: 1365)
- DARPin Dynamics: ML & Data Science Intern (Aug-Sep 2024)
- SIES GST: B.E. in AIML (2022-2026, CGPA: 7.40)
- National Cadet Corps (NCC): Discipline, leadership & high-stakes execution.`,

  contact: `DIRECT CONTACT:
- Email    : parthamburle123@gmail.com
- Phone    : +91-9930310987
- LinkedIn : https://www.linkedin.com/in/parth-amburle-44295331b
- GitHub   : https://github.com/parthamburle12345
- Location : Bangalore / Panvel, Maharashtra`,

  ncc: `NATIONAL CADET CORPS (NCC):
Former Cadet. Developed rigorous personal discipline, adherence to standard operating procedures, team command, and psychological stamina under demanding circumstances. This operational mindset directly informs high-reliability software engineering.`
};
