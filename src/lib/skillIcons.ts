/**
 * Skill icon mapping with fuzzy matching and fallback.
 * Devicon CDN: https://cdn.jsdelivr.net/gh/devicons/devicon/icons/{name}/{name}-original.svg
 */
const CDN = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons";

/** Canonical skill key -> devicon path (icon-name/original.svg) */
export const skillIconMap: Record<string, string> = {
  react: `${CDN}/react/react-original.svg`,
  angular: `${CDN}/angularjs/angularjs-original.svg`,
  html5: `${CDN}/html5/html5-original.svg`,
  css3: `${CDN}/css3/css3-original.svg`,
  bootstrap: `${CDN}/bootstrap/bootstrap-original.svg`,
  nodejs: `${CDN}/nodejs/nodejs-original.svg`,
  express: `${CDN}/express/express-original.svg`,
  spring: `${CDN}/spring/spring-original.svg`,
  mongodb: `${CDN}/mongodb/mongodb-original.svg`,
  aws: `${CDN}/amazonwebservices/amazonwebservices-original-wordmark.svg`,
  azure: `${CDN}/azure/azure-original.svg`,
  docker: `${CDN}/docker/docker-original.svg`,
  kubernetes: `${CDN}/kubernetes/kubernetes-plain.svg`,
  python: `${CDN}/python/python-original.svg`,
  tensorflow: `${CDN}/tensorflow/tensorflow-original.svg`,
  pandas: `${CDN}/pandas/pandas-original.svg`,
  numpy: `${CDN}/numpy/numpy-original.svg`,
  git: `${CDN}/git/git-original.svg`,
  postgresql: `${CDN}/postgresql/postgresql-original.svg`,
  opencv: `${CDN}/opencv/opencv-original.svg`,
  powerbi: `${CDN}/powerbi/powerbi-original.svg`,
  microsoft: `${CDN}/microsoft/microsoft-original.svg`,
  servicenow: "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%2382B5A1'%3E%3Cpath d='M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z'/%3E%3C/svg%3E",
  "microsoft office": "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%23D83B01'%3E%3Cpath d='M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.18l6.9 3.45L12 11.09 5.1 7.63 12 4.18zM4 8.82l7 3.5v7.36l-7-3.5V8.82zm9 10.86v-7.36l7-3.5v7.36l-7 3.5z'/%3E%3C/svg%3E",
  javascript: `${CDN}/javascript/javascript-original.svg`,
  typescript: `${CDN}/typescript/typescript-original.svg`,
  jenkins: `${CDN}/jenkins/jenkins-original.svg`,
  oracle: `${CDN}/oracle/oracle-original.svg`,
  sql: `${CDN}/postgresql/postgresql-original.svg`,
  android: `${CDN}/android/android-original.svg`,
  firebase: `${CDN}/firebase/firebase-plain.svg`,
  php: `${CDN}/php/php-original.svg`,
  mysql: `${CDN}/mysql/mysql-original.svg`,
  java: `${CDN}/java/java-original.svg`,
  kotlin: `${CDN}/kotlin/kotlin-original.svg`,
  jupyter: `${CDN}/jupyter/jupyter-original.svg`,
  matlab: `${CDN}/matlab/matlab-original.svg`,
  mediapipe: `${CDN}/opencv/opencv-original.svg`,
  digitalocean: `${CDN}/digitalocean/digitalocean-original.svg`,
  authentication: `${CDN}/firebase/firebase-plain.svg`,
  sso: `${CDN}/firebase/firebase-plain.svg`,
  fastapi: `${CDN}/fastapi/fastapi-original.svg`,
  pyspark: `${CDN}/apachespark/apachespark-original.svg`,
  neo4j: `${CDN}/neo4j/neo4j-original.svg`,
  ajax: `${CDN}/javascript/javascript-original.svg`,
};

/** Synonyms: input token -> canonical key */
const synonyms: Record<string, string> = {
  node: "nodejs",
  js: "javascript",
  ts: "typescript",
  "express.js": "express",
  expressjs: "express",
  "node.js": "nodejs",
  mongo: "mongodb",
  postgres: "postgresql",
  "power bi": "powerbi",
  cicd: "jenkins",
  "ci/cd": "jenkins",
  oci: "oracle",
  rest: "express",
  apis: "express",
  "apache spark": "pyspark",
  spark: "pyspark",
  "xmlhttprequest": "ajax",
  lstm: "tensorflow",
  transformers: "tensorflow",
  nlp: "tensorflow",
  genai: "tensorflow",
  llms: "tensorflow",
  "computer vision": "opencv",
  opencv: "opencv",
  haarcascade: "opencv",
  "google calendar": "javascript",
  "google meet": "javascript",
  xampp: "php",
  repl: "python",
};

/** Fallback icon (sparkle/code) when no match */
export const FALLBACK_ICON =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='%238b5cf6'%3E%3Cpath d='M12 2l1.5 4.5L18 8l-4.5 1.5L12 14l-1.5-4.5L6 8l4.5-1.5L12 2z'/%3E%3C/svg%3E";

function normalize(str: string): string {
  return str
    .toLowerCase()
    .replace(/[^\w\s]/g, "")
    .replace(/\s+/g, " ")
    .trim();
}

/**
 * Get icon URL for a skill. Uses fuzzy matching with synonyms.
 * Returns fallback icon if no match.
 */
export function getSkillIcon(skill: string): string {
  const normalized = normalize(skill);
  if (skillIconMap[normalized]) return skillIconMap[normalized];

  const words = normalized.split(/\s+/);
  for (const word of words) {
    const syn = synonyms[word] ?? word;
    if (skillIconMap[syn]) return skillIconMap[syn];
  }

  for (const [key, url] of Object.entries(skillIconMap)) {
    if (normalized.includes(key) || key.includes(normalized)) return url;
  }

  return FALLBACK_ICON;
}

/** Check if we have a real icon (not fallback) */
export function hasRealIcon(skill: string): boolean {
  return getSkillIcon(skill) !== FALLBACK_ICON;
}
