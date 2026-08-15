export const navItems = [
  { label: "Home", id: "home" },
  { label: "About", id: "about" },
  { label: "Skills", id: "skills" },
  { label: "Projects", id: "projects" },
  { label: "Experience", id: "experience" },
  { label: "Certifications", id: "certifications" },
  { label: "Contact", id: "contact" },
];

export const profile = {
  name: "Mahesh Macchindra Phalke",
  location: "Pune, Maharashtra",
  email: "phalkemm159@gmail.com",
  phone: "9834570499",
  availability: "Willing to relocate anywhere in India",
  languages: ["English", "Hindi", "Marathi", "German"],
  roles: ["Data Analyst", "Data Scientist", "Full Stack Developer"],
  headline: "Data Analytics • Data Science • Full Stack Development",
  summary:
    "B.Tech Computer Engineering graduate with hands-on experience across data analytics, data science, machine learning, AI and full-stack development. I build data-driven solutions, intelligent applications, REST APIs and responsive web products using Python, SQL, React.js, Node.js and modern data/AI tools.",
};

export const roleHighlights = [
  {
    title: "Data Analytics",
    icon: "chart",
    description:
      "Data cleaning, SQL, ETL, data modeling, dashboards, Power BI, Excel and analytical problem solving.",
    skills: ["Python", "SQL", "Power BI", "Excel", "ETL", "Data Modeling"],
  },
  {
    title: "Data Science & AI",
    icon: "brain",
    description:
      "Machine learning, NLP, embeddings, RAG and AI-powered applications built with Python and modern AI workflows.",
    skills: ["Python", "ML", "NLP", "RAG", "Embeddings", "Vector DB"],
  },
  {
    title: "Full Stack Development",
    icon: "code",
    description:
      "Responsive frontend and backend applications with React, JavaScript, Node.js, Express.js, Flask and REST APIs.",
    skills: ["React.js", "JavaScript", "Node.js", "Express.js", "Flask", "REST APIs"],
  },
];

export const skills = [
  { title: "Data Analytics", icon: "chart", items: ["Python", "SQL", "Power BI", "Excel", "Data Analysis", "ETL", "Data Modeling"] },
  { title: "Data Science & AI", icon: "brain", items: ["Machine Learning", "NLP", "RAG", "Embeddings", "Vector Databases", "LLM"] },
  { title: "Programming", icon: "code", items: ["Python", "Java", "JavaScript", "C", "SQL"] },
  { title: "Frontend", icon: "globe", items: ["HTML", "CSS", "React.js", "Tailwind CSS", "Bootstrap", "Next.js"] },
  { title: "Backend & APIs", icon: "server", items: ["Node.js", "Express.js", "Flask", "REST APIs"] },
  { title: "Databases & Tools", icon: "databaseTools", items: ["MySQL", "MongoDB", "Supabase", "SQLite", "Git", "GitHub", "VS Code", "Google Colab"] },
  { title: "Engineering Practices", icon: "tool", items: ["Unit Testing", "Version Control", "Agile Development", "Documentation", "Team Collaboration"] },
];

export const projects = [
  {
    number: "01",
    title: "EduRAG",
    category: "DATA SCIENCE • RAG • AI",
    description: "AI-powered learning assistant using video/audio processing, embeddings, vector search and LLM integration for context-aware semantic retrieval.",
    tags: ["Python", "RAG", "Embeddings", "Vector DB", "LLM"],
    visual: "red",
    symbol: "◉",
    github: "https://github.com/phalkemm159/EduRAG-AI-Powered-Learning-Assistant",
    demo: "#",
  },
  {
    number: "02",
    title: "LegDoc",
    category: "DATA SCIENCE • NLP • ML",
    description: "AI legal document summarizer using NLP, feature extraction, embeddings and model-based summarization to improve document readability and retrieval.",
    tags: ["Python", "NLP", "ML", "Embeddings"],
    visual: "cyan",
    symbol: "▤",
    github: "https://github.com/phalkemm159/LegDoc",
    demo: "#",
  },
  {
    number: "03",
    title: "ALL PDFs AI",
    category: "AI • PDF PROCESSING • PRIVACY",
    description: "Privacy-first PDF platform with browser-based PDF processing and on-device AI for document Q&A, summarization and key information extraction, along with merging, compression, conversion, watermarking and AES-256 password protection.",
    tags: ["Python", "JavaScript", "PDF.js", "pdf-lib", "Transformers.js", "WebAssembly"],
    visual: "gold",
    symbol: "⧉",
    github: "https://github.com/phalkemm159/ALL_PDFS_AI",
    demo: "https://all-pdfs-ai.onrender.com/",
  },
  {
    number: "04",
    title: "GlobalNest",
    category: "FULL STACK • MERN",
    description: "Property rentals and bookings platform with authentication, payments, interactive maps and image hosting, developed with a full-stack MERN architecture.",
    tags: ["MongoDB", "Express", "React", "Node.js"],
    visual: "gold",
    symbol: "⌂",
    github: "https://github.com/phalkemm159/GlobalNest-Fullstack",
    demo: "https://globalnest.onrender.com",
  },
  {
    number: "05",
    title: "Hospital Management System",
    category: "FULL STACK • DATA • AI",
    description: "Hospital management application with role-based dashboards, structured relational data and an AI-powered chatbot, validated through application trial runs.",
    tags: ["Flask", "SQLite", "Tailwind", "AI"],
    visual: "red",
    symbol: "✚",
    github: "https://github.com/phalkemm159/Hospital_Management_System_Project",
    demo: "https://hospital-management-system-w6nv.onrender.com",
  },
];

export const experience = [
  {
    date: "2024 — 2026",
    role: "Secretary",
    company: "Computer Engineering Students Association (CESA), GCOEY, Yavatmal",
    description: "Coordinated with faculty and student committees, planned and executed department-level technical events, led volunteer teams and maintained event documentation.",
  },
];

export const education = [
  { degree: "B.Tech, Computer Engineering", institute: "Government College of Engineering, Yavatmal", score: "7.72 CGPA", years: "2022 — 2026" },
  { degree: "HSC", institute: "Residential Junior College of Science, Shevgaon", score: "76.14%", years: "2021 — 2022" },
  { degree: "SSC", institute: "Shevgaon English Medium School, Shevgaon", score: "85.40%", years: "2019 — 2020" },
];

export const certifications = [
  {
    id: "data-science-ml",
    title: "Data Science and Machine Learning",
    issuer: "CodeWithHarry",
    year: "01/05/2025",
    image: "/certificates/data-science-ml.jpg",
    description: "Data analysis, visualization, predictive modeling and machine learning techniques.",
  },
  {
    id: "full-stack-mern",
    title: "Full Stack Development (MERN)",
    issuer: "Coursera • Meta",
    year: "25/09/2025",
    image: "/certificates/full-stack-mern.jpg",
    description: "MongoDB, Express.js, React.js and Node.js with responsive web application development.",
  },
  {
    id: "soft-skills",
    title: "Soft Skills — Elite Certification, 79%",
    issuer: "NPTEL / IIT Roorkee",
    year: "Jul–Oct 2024",
    image: "/certificates/soft-skills.jpg",
    description: "12-week certification focused on communication, stakeholder coordination and collaboration.",
  },
  {
    id: "german-i",
    title: "German — I",
    issuer: "NPTEL / IIT Madras",
    year: "Jul–Oct 2025",
    image: "/certificates/german-i.jpg",
    description: "12-week foundational German language certification course.",
  },
  {
    id: "career-essentials-generative-ai",
    title: "Career Essentials in Generative AI",
    issuer: "Microsoft and LinkedIn",
    year: "Mar 13, 2024",
    image: "/certificates/career-essentials-generative-ai.jpg",
    description: "Career Essentials learning path covering Computer Ethics, Artificial Intelligence (AI) and Generative AI, completed through LinkedIn Learning.",
  },
  {
    id: "computer-networks-internet-protocol",
    title: "Computer Networks and Internet Protocol",
    issuer: "NPTEL / IIT Kharagpur",
    year: "Jan–Apr 2025",
    image: "/certificates/computer-networks-internet-protocol.jpg",
    description: "12-week NPTEL certification covering Computer Networks and Internet Protocol with a consolidated score of 64%.",
  },
  {
    id: "hp-life-data-science-analytics",
    title: "Data Science & Analytics",
    issuer: "HP LIFE / HP Foundation",
    year: "Mar 10, 2024",
    image: "/certificates/hp-life-data-science-analytics.jpg",
    description: "HP LIFE course covering data science and analytics practices, methodologies and tools, with a focus on data-driven approaches for business.",
  },
];
