export const NAV_LINKS = [
  { label: 'Home', href: '#home' },
  { label: 'About', href: '#about' },
  { label: 'Skills', href: '#skills' },
  { label: 'Experience', href: '#experience' },
  { label: 'Projects', href: '#projects' },
  { label: 'Achievements', href: '#achievements' },
]

export const EXPERIENCES = [
  {
    date: 'Aug 2026 - Present',
    company: 'LLC AI Top Trends',
    type: 'AI Developer Intern',
    title: 'AI Developer Intern',
    bullets: [
      'Engineered an automated multi-platform social media ingestion pipeline (Playwright, curl_cffi, SQLite) intercepting raw GraphQL/XHR streams across X, Instagram, Threads, and TikTok with anti-bot evasion and session persistence.',
      'Built an end-to-end multimodal NLP pipeline for 11-class emotion extraction, sentiment analysis, and viral velocity scoring, processing multi-source engagement data to identify high-performing content patterns.',
      'Developed an automated Generative AI media creation workflow integrating LiteLLM batch prompt orchestration with ComfyUI to generate high-resolution image assets and AnimateDiff video outputs.',
    ],
  },
  {
    date: 'Feb 2026 - Jun 2026',
    company: 'PT Warna Warni Media',
    type: 'AI Engineer Intern',
    title: 'AI Engineer Intern',
    bullets: [
      'Developed a multimodal AI-powered interview system integrating voice interaction, automated candidate assessment, and LLM-based evaluation.',
      'Engineered LLM-powered automation pipelines using RAG and prompt optimization for contextual content generation and internal AI workflows.',
      'Built AI-based fraud detection and overtime analysis systems with automated pipelines, enabling real-time anomaly flagging.',
    ],
  },
  {
    date: 'Sep 2024 - Nov 2025',
    company: 'State University of Surabaya',
    type: 'Teaching Assistant',
    title: 'Teaching Assistant - Programming & Algorithms',
    bullets: [
      'Assisted lecturers in delivering programming materials to undergraduate students.',
      'Guided students in C++, Python, and data structure fundamentals such as arrays, linked lists, and sorting/searching algorithms.',
    ],
  },
  {
    date: 'Jul 2025 - Dec 2025',
    company: 'SEAL - Social Economy Accelerator Lab',
    type: 'Data Scientist Intern',
    title: 'Data Scientist Intern',
    bullets: [
      'Built automated ETL pipelines using Apache Airflow to consolidate multi-source institutional datasets for analytical workflows.',
      'Developed time-series forecasting models (ARIMA/LSTM) for economic indicator analysis supporting internal policy research.',
    ],
  },
  {
    date: 'Sep 2023 - Present',
    company: 'Self-Employed',
    type: 'Freelance',
    title: 'Freelance AI Engineer / Data Scientist',
    bullets: [
      'Built automated social media crawling pipelines (Python, Selenium, BeautifulSoup) handling 10,000+ records per run.',
      'Developed LLM-powered chatbot systems with multi-turn conversation, context management, and RAG-based knowledge retrieval.',
      'Integrated solutions via API endpoints supporting automated query handling, lead qualification, and FAQ automation.',
    ],
  },
]

export const SKILLS = [
  {
    title: 'AI / ML',
    color: 'bg-sky-50 border-sky-100',
    iconBg: 'bg-sky-100 text-sky-700',
    tags: ['TensorFlow', 'PyTorch', 'Scikit-Learn', 'HuggingFace', 'YOLO', 'OpenCV'],
  },
  {
    title: 'LLM & NLP',
    color: 'bg-violet-50 border-violet-100',
    iconBg: 'bg-violet-100 text-violet-700',
    tags: ['LangChain', 'LangGraph', 'RAG', 'Prompt Engineering', 'Vector DB', 'OpenAI API'],
  },
  {
    title: 'Languages',
    color: 'bg-amber-50 border-amber-100',
    iconBg: 'bg-amber-100 text-amber-700',
    tags: ['Python', 'TypeScript', 'SQL', 'R', 'C++', 'PHP'],
  },
  {
    title: 'Web & API',
    color: 'bg-emerald-50 border-emerald-100',
    iconBg: 'bg-emerald-100 text-emerald-700',
    tags: ['FastAPI', 'Flask', 'Django', 'Next.js', 'Tailwind CSS', 'Prisma'],
  },
  {
    title: 'Data Engineering',
    color: 'bg-rose-50 border-rose-100',
    iconBg: 'bg-rose-100 text-rose-700',
    tags: ['Apache Airflow', 'Apache Spark', 'RabbitMQ', 'PostgreSQL', 'MySQL', 'Supabase'],
  },
  {
    title: 'DevOps & BI',
    color: 'bg-slate-50 border-slate-100',
    iconBg: 'bg-slate-100 text-slate-700',
    tags: ['Docker', 'AWS', 'Git', 'Tableau', 'Power BI', 'Looker Studio'],
  },
]

export const RECENT_CERTIFICATIONS = [
  {
    title: 'AWS Cloud Computing',
    issuer: 'AWS / Cloud Computing',
    year: '2025',
    href: 'https://drive.google.com/file/d/11QdJUtQ7IjHBrlPB6P-P5aAyRFPosw_E/view?usp=sharing',
  },
  {
    title: 'Basic Artificial Intelligence',
    issuer: 'Dicoding',
    year: '2024',
    href: 'https://drive.google.com/file/d/1ZiWvd8I6StsPCnaQUo3RbUAQxngt6_B9/view?usp=sharing',
  },
  {
    title: 'Data Analytics',
    issuer: 'Luar Sekolah',
    year: '2025',
    href: 'https://drive.google.com/file/d/1lENRQKn4QDYGkJHmoQ3TIj-U_3Y1mO_9/view?usp=sharing',
  },
]

export const PROJECTS = [
  {
    num: '01',
    category: 'Code Generation',
    title: 'Vibe - AI Code Generation Platform',
    desc: 'Transforms natural language prompts into production-ready web applications with real-time preview. LLM-driven workflows with iterative refinement loops.',
    metric: 'Live on Vercel',
    stack: ['Next.js', 'OpenAI API', 'TypeScript', 'LLM'],
    github: 'https://github.com/techfusionid/vibecoding_app',
    live: 'https://vibecoding-app-sigma.vercel.app/',
  },
  {
    num: '02',
    category: 'Social Analytics',
    title: 'EchoLens AI - Social Analytics',
    desc: 'Real-time sentiment monitoring, topic clustering, and public opinion tracking. Automated NLP pipelines processing large-scale unstructured social media data.',
    metric: 'Real-time NLP',
    stack: ['Python', 'HuggingFace', 'Next.js', 'NLP'],
    github: 'https://github.com/faizgeorgie9/EchoLens',
    live: null,
  },
  {
    num: '03',
    category: 'Education AI',
    title: 'IRIS - Adaptive Learning Platform',
    desc: 'AI-powered platform generating personalized SNBT tryout questions based on user performance and competency levels using NLP and prompt-driven workflows.',
    metric: 'Production Platform',
    stack: ['LLM', 'NLP', 'FastAPI', 'Prompt Engineering'],
    github: null,
    live: 'https://www.instagram.com/iriseducation.id',
  },
  {
    num: '04',
    category: 'Computer Vision',
    title: 'Driver Drowsiness Detection',
    desc: 'Real-time multiclass classification (alert/moderate/drowsy) using eye-blink temporal features and facial landmark detection with a fully automated CV pipeline.',
    metric: '91% Accuracy',
    stack: ['OpenCV', 'dlib', 'Python', 'Computer Vision'],
    github: 'https://github.com/faizgeorgie9/drowy',
    live: null,
  },
  {
    num: '05',
    category: 'NLP Research',
    title: 'Fraud Modus Detection via IndoBERT NER',
    desc: 'Fine-tuned IndoBERT NER on data crawled from X, Reddit, and Quora to extract fraud entities. End-to-end automated pipeline processing 20,000+ posts.',
    metric: '96% NER Accuracy',
    stack: ['IndoBERT', 'HuggingFace', 'PyTorch', 'Selenium'],
    github: null,
    live: 'https://drive.google.com/file/d/1hzoKeIuztENh1aNGOdlE4yYwFD7crzBD/view',
  },
  {
    num: '06',
    category: 'NLP Research',
    title: 'Public Sentiment Classification',
    desc: 'End-to-end sentiment classification pipeline crawling Indonesian-language tweets. Evaluated multiple ML/DL classifiers for socio-political topic analysis.',
    metric: '>80% Accuracy',
    stack: ['Python', 'NLP', 'Scikit-Learn', 'Selenium'],
    github: null,
    live: 'https://drive.google.com/file/d/1_NuARkwa8PJpcmOwml4BnnnE2m1V-P1s/view',
  },
]

export const ACHIEVEMENTS = [
  {
    rank: '1st Place',
    title: 'Data Mining Competition',
    org: 'Dept. of Data Science, UNESA',
    year: '2025',
    color: 'border-amber-200 bg-amber-50',
    href: '#',
  },
  {
    rank: 'Silver Medal',
    title: 'PKM Scientific Article Competition',
    org: 'Universitas Negeri Gorontalo',
    year: '2025',
    color: 'border-slate-200 bg-slate-50',
    href: 'https://drive.google.com/file/d/1q_As34gEBG_4DMcbYhxbxrtkS9O06rG5/view?usp=sharing',
  },
  {
    rank: 'Top 5',
    title: 'Data Analysis Competition',
    org: 'Informatics Festival, Universitas Padjadjaran',
    year: '2024',
    color: 'border-sky-200 bg-sky-50',
    href: 'https://drive.google.com/file/d/18S2Dez-NmWidN_JglpgyCTUJDEa76wFu/view?usp=sharing',
  },
  {
    rank: 'Top 5',
    title: 'Data Science Competition',
    org: 'Sebelas Maret Statistics Data Science, UNS',
    year: '2025',
    color: 'border-sky-200 bg-sky-50',
    href: 'https://drive.google.com/file/d/1KUs7v-5oZvAyJZoX0enG0Y5E9DEv2jOJ/view?usp=sharing',
  },
  {
    rank: 'Runner-Up',
    title: 'National Business Plan Competition',
    org: 'BISANTREN',
    year: '2025',
    color: 'border-violet-200 bg-violet-50',
    href: 'https://drive.google.com/file/d/1RYhNCQDDtz2SFPqrGa3oAb4y_J0K2Jdc/view?usp=sharing',
  },
  {
    rank: 'Awardee',
    title: 'Student Entrepreneurial Program (PMW)',
    org: 'UNESA',
    year: '2025',
    color: 'border-emerald-200 bg-emerald-50',
    href: 'https://drive.google.com/file/d/1l8zvao8OxtzJd2oTBIzytEg7NS_vVC8b/view?usp=drive_link',
  },
]
