/**
 * Single source of truth - all data from Gayatri Kancherla Ramesh's resume.
 */
export const profile = {
  name: "Gayatri Kancherla Ramesh",
  location: "Sacramento, CA",
  email: "krgayatri.30@gmail.com",
  phone: "916-490-0282",
  headline:
    "Full-Stack & Software Engineer | AI + Data Systems | MERN • Spring Boot • Python • SQL • Cloud",
  pitch:
    "I build scalable web applications, data systems, and AI features for enterprise environments—focused on performance, reliability, and clean UX.",
  statusPill: "Building AI + Full Stack",
  links: {
    linkedin: "https://www.linkedin.com/in/gayatrikr/",
    github: "https://github.com/gayatri-kr",
    resume: "/resume.pdf",
  },

  summary:
    "Full-stack and Software Engineer experienced in building scalable web applications and data systems for enterprise environments. Delivered significant improvements in system speed and cost efficiency through successful migration and automation projects, and integrated AI features into real-time workflows. Skilled in Python, SQL, cloud platforms, and modern frontend/backend development. Interested in roles across Full-Stack, Backend, and AI engineering.",

  experience: [
    {
      company: "Trellix (formerly McAfee Enterprise)",
      role: "Associate Software Development Engineer",
      location: "Bengaluru, India",
      dates: "Jan 2022 – Feb 2023",
      bullets: [
        "Migrated historical event storage from Elasticsearch to Snowflake, enabling a scalable cross-product data warehouse.",
        "Optimized high-volume SQL queries, reducing latency by 45% (2.2s → 1.2s) and improving platform performance.",
        "Refactored frontend API integrations and backend data workflows; contributed to 1.5× overall performance and ~35% cost reduction.",
        "Resolved enterprise escalations by reproducing issues in Linux lab environments, analyzing logs, and collaborating via JIRA.",
        "Improved security by identifying and fixing XSS vulnerabilities; supported NX/EX/FX/AX/CM/PX-IA/Helix platforms.",
      ],
      tags: ["Snowflake", "SQL", "APIs", "Linux", "JIRA", "Security"],
    },
    {
      company: "Foremost IT Solutions Pvt Ltd",
      role: "AI Software Engineer Intern",
      location: "Bengaluru, India",
      dates: "Feb 2025 – Oct 2025",
      bullets: [
        "Built AI-powered prototypes using Python and OpenAI APIs to automate text processing and enterprise workflows.",
        "Developed REST APIs and backend services to integrate AI models with web applications for real-time automation.",
        "Improved responsiveness via data preprocessing, prompt optimization, and iterative testing.",
        "Collaborated with developers to design and test AI-enabled features for decision-support use cases.",
      ],
      tags: ["Python", "OpenAI APIs", "REST", "Automation"],
    },
    {
      company: "California State University, ECS Dean's Office",
      role: "ECS IT Consulting Student Assistant",
      location: "Sacramento, CA",
      dates: "Jan 2024 – Dec 2025",
      bullets: [
        "Resolved 100+ weekly cross-platform issues (Windows/Linux/macOS) using ServiceNow, reducing downtime for 1,000+ users.",
        "Deployed and maintained 40+ lab systems using SCCM, improving lab uptime and software reliability.",
        "Improved documentation and workflows to reduce repeated issues and speed up resolution times.",
      ],
      tags: ["ServiceNow", "SCCM", "IT Support"],
    },
    {
      company: "Ramsai Food Products",
      role: "Junior Data Software Engineer",
      location: "Chittoor, India",
      dates: "Jan 2020 – Jan 2022",
      bullets: [
        "Cleaned and organized production, inventory, and export datasets using SQL, Excel, and Power BI for reliable reporting.",
        "Built Power BI dashboards and automated reports to monitor production output, shipment status, and inventory trends.",
        "Analyzed sales and export data with operations/logistics teams to improve demand forecasting and reporting turnaround.",
        "Implemented data validation workflows and reporting pipelines to improve data quality for planning and decision-making.",
      ],
      tags: ["SQL", "Power BI", "Reporting", "ETL"],
    },
  ],

  projects: [
    {
      title: "AI-Powered Personalized Nutrition Planning System",
      slug: "ai-personalized-nutrition-planning",
      dates: "Jan 2025 – Nov 2025",
      summary:
        "Fusion deep learning model (LSTM + Transformer) integrating health metrics, mental well-being scores, genomic SNP sequences, and protein-folding data to predict personalized nutrient requirements.",
      tech: ["Python", "TensorFlow", "LSTM", "Transformers", "Pandas", "NumPy"],
      highlights: [
        "Built a multi-branch fusion model integrating health metrics, mental-wellbeing scores, genomic SNP sequences, and protein-folding data using LSTM + Transformer architectures.",
        "Merged and preprocessed 73,778 dietary records from NHANES and 4,983 genomic profiles from the 1000 Genomes Project, handling missing values, scaling, data alignment, and multi-format feature construction.",
        "Designed an optimized multi-output regression system predicting energy, protein, carbs, sugars, fiber, fat, and cholesterol with strong model convergence, statistical validation, and deployment-ready architecture.",
      ],
      github: "https://github.com/gayatri-kr/AI-Powered-Personalized-Nutrition-Planning",
      demo: "",
    },
    {
      title: "Calculator App with Backend API",
      slug: "calculator-app-backend",
      dates: "Aug 2024 – Dec 2024",
      summary:
        "Android-based calculator with external backend enabling dynamic computations and real-time request-response handling through custom REST APIs.",
      tech: ["Android", "Java/Kotlin", "REST APIs", "DigitalOcean"],
      highlights: [
        "Developed an Android-based calculator with an external backend, enabling dynamic computations and real-time request-response handling through custom REST APIs.",
        "Managed server deployment and scaling on DigitalOcean, ensuring stable connectivity, efficient load handling, and encrypted data exchange.",
        "Leveraged modular API architecture for seamless interaction between mobile client and remote server, ensuring high performance and extensibility.",
      ],
      github: "",
      demo: "",
    },
    {
      title: "Cloud-Based Pizza Ordering Platform",
      slug: "pizza-ordering-platform",
      dates: "Aug 2024 – Dec 2024",
      summary:
        "Interactive pizza ordering system powered by Firebase Firestore and Cloud Storage with SSO and role-based access control.",
      tech: ["Firebase", "Firestore", "Cloud Storage", "Authentication", "SSO"],
      highlights: [
        "Built an interactive pizza ordering system powered by Firebase Firestore and Cloud Storage, enabling swift and reliable access to order information with 99% data accuracy.",
        "Incorporated Google and Facebook login integration through SSO, significantly improving user onboarding efficiency and cutting authentication time by nearly half.",
        "Devised a multi-level access framework distinguishing user roles (Customer and Manager), delivering robust access control and security throughout the app.",
      ],
      github: "",
      demo: "",
    },
    {
      title: "AI Chatbot Scheduler for Virtual Meetings",
      slug: "ai-chatbot-scheduler",
      dates: "Jan 2024 – Apr 2024",
      summary:
        "AI-enhanced chatbot capable of autonomously arranging meetings on Google Meet using OpenAI GPT and Google Calendar API.",
      tech: ["Python", "OpenAI GPT", "Google Calendar API", "Google Meet"],
      highlights: [
        "Created an AI-enhanced chatbot capable of autonomously arranging meetings on Google Meet, using a combination of OpenAI's GPT model and Google Calendar API.",
        "Enabled dynamic handling of scheduling conflicts and added document-sharing capabilities to boost coordination and ease of use.",
        "Delivered a natural language interface that simplifies complex scheduling tasks and enhances productivity.",
      ],
      github: "",
      demo: "",
    },
    {
      title: "Virtual Try-On",
      slug: "virtual-try-on",
      dates: "Jan 2022 – Apr 2022",
      summary:
        "Computer vision virtual fitting tool using OpenCV and HaarCascade to help customers try clothes virtually on a website.",
      tech: ["Python", "OpenCV", "HaarCascade"],
      highlights: [
        "Designed an OpenCV and HaarCascade tool to help customers try clothes virtually on a website.",
        "Worked as a developer in a team of 4 members on the interactive preview pipeline.",
        "Improved shopping experience with engagement +30% and conversion +20%.",
      ],
      github: "",
      demo: "",
    },
    {
      title: "Virtual Canvas (Air Writing Recognition)",
      slug: "virtual-canvas-air-writing",
      dates: "Aug 2021 – Dec 2021",
      summary:
        "OpenCV and MediaPipe tool to write, draw, and erase in the air using hand gestures in real time.",
      tech: ["Python", "OpenCV", "MediaPipe", "NumPy"],
      highlights: [
        "Designed an OpenCV and MediaPipe tool to write, draw, and erase on air using hand gestures in real time.",
        "Worked as a developer in a team of 3 members.",
        "Published research: Air Writing Recognition using MediaPipe and OpenCV at International Conference on Ubiquitous Computing and Intelligent Information Systems (Jul 2022).",
      ],
      github: "",
      demo: "",
    },
    {
      title: "Brain Tumor Detection Using MRI Scan",
      slug: "brain-tumor-detection",
      dates: "Jan 2021 – Apr 2021",
      summary:
        "Brain tumor detection tool using MRI scan data and deep learning concepts in MATLAB Software / Jupyter Notebook.",
      tech: ["Python", "MATLAB", "Jupyter", "Deep Learning", "MRI"],
      highlights: [
        "Developed a brain tumor detection tool using MRI scan data and deep learning concepts in MATLAB Software and Jupyter Notebook.",
        "Worked as a developer for data pre-processing in a team of 4 members.",
        "Implemented image preprocessing and model training pipelines for accurate tumor classification.",
      ],
      github: "",
      demo: "",
    },
    {
      title: "Companion Bot",
      slug: "companion-bot",
      dates: "Jan 2021 – Apr 2021",
      summary:
        "Discord Bot split into 3 modules using Repl.it platform, Python dictionaries, and APIs.",
      tech: ["Python", "Discord API", "Repl.it"],
      highlights: [
        "Developed a Discord Bot split into 3 modules using Repl.it platform, Python dictionaries, and APIs.",
        "Worked as a developer for module-1 and module-2 in a team of 3 members.",
        "Implemented interactive commands and bot functionality for user engagement.",
      ],
      github: "",
      demo: "",
    },
    {
      title: "Train Ticket Application",
      slug: "train-ticket-application",
      dates: "Jan 2021 – Apr 2021",
      summary:
        "Train ticket booking website using HTML, CSS, JavaScript frontend and PHP, XAMPP SERVER, MySQL for backend.",
      tech: ["HTML", "CSS", "JavaScript", "PHP", "XAMPP", "MySQL"],
      highlights: [
        "Designed and developed a train ticket booking website using HTML, CSS, JavaScript frontend and PHP, XAMPP Server, MySQL for backend.",
        "Worked as a developer and manual tester in agile methodology in a team of 5 members.",
        "Implemented user authentication, booking flow, and payment integration.",
      ],
      github: "",
      demo: "",
    },
    {
      title: "DBMS Cargo Service Platform",
      slug: "dbms-cargo-service",
      dates: "Aug 2020 – Dec 2020",
      summary:
        "Cargo service platform website using HTML, CSS, JavaScript for frontend and PHP, XAMPP Server, MySQL for backend.",
      tech: ["HTML", "CSS", "JavaScript", "PHP", "XAMPP", "MySQL"],
      highlights: [
        "Developed a cargo service platform website using HTML, CSS, JavaScript for frontend and PHP, XAMPP Server, MySQL for backend.",
        "Worked as a developer and manual tester in agile methodology in a team of 6 members.",
        "Implemented cargo tracking, inventory management, and reporting features.",
      ],
      github: "",
      demo: "",
    },
  ],

  publications: [
    {
      title: "Air Writing Recognition Using MediaPipe and OpenCV",
      venue:
        "International Conference on Ubiquitous Computing and Intelligent Information Systems (Jul 2022)",
      link: "https://link.springer.com/chapter/10.1007/978-981-19-2541-2_35",
    },
  ],

  skills: {
    "Full Stack": [
      "MERN (MongoDB, Express.js, React, Node.js)",
      "React",
      "Angular",
      "HTML5",
      "CSS3",
      "Bootstrap",
    ],
    "Backend & APIs": ["Node.js", "Express.js", "REST APIs", "Spring Boot"],
    "Cloud & DevOps": ["AWS", "Azure", "OCI", "Docker", "Kubernetes", "CI/CD"],
    "AI / ML": [
      "LLMs",
      "Transformers",
      "LSTM",
      "TensorFlow",
      "NLP",
      "Computer Vision",
      "GenAI",
      "Pandas",
      "NumPy",
    ],
    "Data & Analytics": [
      "SQL",
      "Power BI",
      "ETL",
      "Data Validation",
      "Statistical Analysis",
    ],
    "Tools": ["Git", "ServiceNow", "Microsoft Office"],
  },
} as const;
