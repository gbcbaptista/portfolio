const projectsList = [
  {
    id: 1,
    title: "AI Dog Breed Classifier 🐕",
    description:
      "I developed a full-stack AI image classification application, from concept to cloud deployment. My responsibilities included training a Deep Learning model with TensorFlow/Keras, building a RESTful API with FastAPI, and containerizing services with Docker. I architected and automated the CI/CD pipeline using GitHub Actions, deploying the solution onto a cost-effective AWS Lightsail instance managed with Nginx and Docker Compose.",
    techStack: [
      "Python",
      "TensorFlow",
      "Next.js",
      "Docker",
      "Nginx",
      "AWS Lightsail",
      "AWS ECR",
      "FastAPI",
      "GitHub Actions",
      "Keras",
      "Docker Compose",
      "React",
      "TypeScript",
    ],
    category: "AI/ML & Cloud",
    status: "Development" as const,
    featured: true,
    demoUrl: "https://dog-classifier.gabriel-baptista.dev/",
    githubUrl: "https://github.com/gbcbaptista/ai-image-dogs-classifier",
    startDate: "June 2025",
    completionDate: undefined,
  },
  {
    id: 2,
    title: "Kaggle Competitions Journey",
    description:
      "A deep dive into ML fundamentals where I build, debug, and refine algorithms from scratch. In the Titanic challenge, I implemented Logistic Regression using only NumPy, engineered complex features, and troubleshot numerical stability issues by implementing a feature scaler, ultimately matching Scikit-learn's benchmark performance.",
    techStack: ["Python", "NumPy", "Pandas", "Matplotlib", "Scikit-learn"],
    category: "AI/ML",
    status: "Development" as const,
    featured: false,
    demoUrl: null,
    githubUrl: "https://github.com/gbcbaptista/kaggle-competitions",
    startDate: "May 2025",
    completionDate: undefined,
  },
];

export default projectsList;
