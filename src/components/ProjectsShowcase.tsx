import projectsList from "@/app/projects";
import ProjectCard from "./ProjectCard";
import SocialLinks from "./SocialLinks";

const ProjectsShowcase = () => {
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
          {projectsList.map((project) => (
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
