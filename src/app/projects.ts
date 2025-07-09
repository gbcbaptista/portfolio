const projectsList = [
  {
    id: 1,
    title: "AI Dog Breed Classifier",
    description:
      "I developed a full-stack AI image classification application, from concept to cloud deployment. My responsibilities included training the Deep Learning model with TensorFlow/Keras, building a RESTful API with FastAPI, containerizing the services with Docker, and deploying the solution on a scalable AWS infrastructure (ECS, ECR, ALB).",
    techStack: [
      "Python",
      "TensorFlow",
      "Keras",
      "FastAPI",
      "Next.js",
      "Docker",
      "AWS ECS",
      "AWS ECR",
      "AWS ALB",
    ],
    category: "AI/ML & Cloud",
    status: "Development" as const,
    featured: true,
    demoUrl: null,
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
