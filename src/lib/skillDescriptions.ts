/**
 * Brief descriptions for skills shown when selected.
 * Keys are normalized (lowercase, no punctuation) for matching.
 */
export const skillDescriptions: Record<string, string> = {
  react: "A JavaScript library for building user interfaces with component-based architecture.",
  angular: "Google's framework for building dynamic single-page applications.",
  html5: "The latest HTML standard for structuring and presenting web content.",
  css3: "Stylesheet language for describing the presentation of HTML documents.",
  bootstrap: "Popular CSS framework for responsive, mobile-first web design.",
  "node.js": "JavaScript runtime built on Chrome's V8 engine for server-side development.",
  nodejs: "JavaScript runtime built on Chrome's V8 engine for server-side development.",
  "express.js": "Minimal, flexible Node.js web application framework.",
  expressjs: "Minimal, flexible Node.js web application framework.",
  "spring boot": "Java framework for building production-ready applications quickly.",
  mongodb: "NoSQL document database for flexible, scalable data storage.",
  aws: "Amazon Web Services — cloud computing platform for hosting and scaling applications.",
  azure: "Microsoft's cloud computing platform for building and deploying applications.",
  docker: "Containerization platform for packaging applications with dependencies.",
  kubernetes: "Container orchestration system for automating deployment and scaling.",
  python: "High-level programming language known for readability and versatility.",
  tensorflow: "Open-source machine learning framework for AI and deep learning.",
  pandas: "Python library for data manipulation and analysis.",
  numpy: "Python library for numerical computing and array operations.",
  git: "Distributed version control system for tracking code changes.",
  postgresql: "Powerful open-source relational database.",
  sql: "Structured Query Language for managing data in relational databases.",
  opencv: "Open-source computer vision library for image and video processing.",
  "power bi": "Microsoft's business analytics tool for data visualization.",
  javascript: "Programming language for web browsers and server-side (Node.js).",
  typescript: "Typed superset of JavaScript for large-scale applications.",
  jenkins: "Open-source automation server for CI/CD pipelines.",
  rest: "Architectural style for designing networked APIs.",
  apis: "Application Programming Interfaces for software communication.",
  "ai / ml": "Artificial Intelligence and Machine Learning — building intelligent systems.",
  llms: "Large Language Models — AI models trained on vast text data.",
  transformers: "Deep learning architecture powering models like GPT and BERT.",
  lstm: "Long Short-Term Memory — recurrent neural network for sequence data.",
  nlp: "Natural Language Processing — enabling computers to understand human language.",
  "computer vision": "Field of AI enabling computers to interpret visual data.",
  genai: "Generative AI — models that create new content.",
  etl: "Extract, Transform, Load — process for moving and transforming data.",
  "ci/cd": "Continuous Integration and Deployment — automating build and release.",
  oci: "Oracle Cloud Infrastructure — enterprise cloud platform.",
  servicenow: "Enterprise workflow platform for IT service management.",
  "microsoft office": "Suite of productivity applications (Word, Excel, PowerPoint).",
  "mern (mongodb, express.js, react, node.js)": "Full-stack JavaScript stack: MongoDB, Express, React, Node.js.",
  "rest apis": "RESTful APIs — web services using HTTP methods for data exchange.",
  "statistical analysis": "Using statistics to analyze and interpret data patterns.",
  "data validation": "Ensuring data quality and integrity through validation rules.",
};

export function getSkillDescription(skill: string): string {
  const normalized = skill.toLowerCase().replace(/[^\w\s]/g, "").replace(/\s+/g, " ").trim();
  if (skillDescriptions[normalized]) return skillDescriptions[normalized];

  for (const [key, desc] of Object.entries(skillDescriptions)) {
    if (normalized.includes(key) || key.includes(normalized)) return desc;
  }
  return `${skill} — a technology I use in my projects.`;
}
