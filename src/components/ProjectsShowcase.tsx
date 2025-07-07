import ProjectCard from "./ProjectCard";
import SocialLinks from "./SocialLinks";

const ProjectsShowcase = () => {
  const projects = [
    {
      id: 1,
      title: "AI Image Classifier",
      description:
        "A full-stack web application that classifies images in real-time using Transfer Learning with MobileNetV2",
      techStack: [
        "React",
        "TypeScript",
        "NestJS",
        "Python",
        "FastAPI",
        "TensorFlow",
        "MobileNetV2",
        "Docker",
        "Docker Compose",
      ],
      category: "AI/ML",
      status: "Development" as const,
      featured: false,
      demoUrl: null,
      githubUrl: "https://github.com/gbcbaptista/ai-image-classifier",
      startDate: "June 2025",
      completionDate: "July 2025",
    },
    {
      id: 2,
      title: "Kaggle Competitions Journey",
      description:
        "Implementing machine learning algorithms from scratch through competitive programming challenges",
      techStack: [
        "Python",
        "Pandas",
        "NumPy",
        "Matplotlib",
        "Seaborn",
        "Jupyter Notebooks",
        "Scikit-learn",
        "Custom ML Algorithms",
      ],
      category: "AI/ML",
      status: "Development" as const,
      featured: false,
      demoUrl: null,
      githubUrl: "https://github.com/gbcbaptista/kaggle-competitions",
      startDate: "May 2025",
      completionDate: undefined,
    },
  ];

  return (
    <section className="py-12 lg:py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-primary mb-4">
            Featured Projects
          </h2>
          <p className="text-lg sm:text-xl text-secondary max-w-3xl mx-auto">
            Explore my latest work showcasing expertise in full-stack
            development, AI integration, and modern web technologies.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {projects.map((project) => (
            <ProjectCard key={project.id} {...project} />
          ))}
        </div>

        <div className="text-center mt-12 lg:mt-16">
          <p className="text-secondary mb-6 text-lg">
            Want to see more projects or discuss collaboration? Get In Touch!
          </p>
        </div>
        <div className="w-full flex justify-center mt-4">
          <SocialLinks />
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;
