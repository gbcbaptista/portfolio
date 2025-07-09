"use client";
import { useState } from "react";

interface ProjectCardProps {
  id: number;
  title: string;
  description: string;
  techStack: string[];
  image?: string;
  demoUrl?: string | null;
  githubUrl?: string;
  status: "Live" | "Development" | "Planning" | "Completed";
  featured?: boolean;
  category?: string;
  startDate?: string;
  completionDate?: string;
}

const ProjectCard = ({
  title,
  description,
  techStack,
  image,
  demoUrl,
  githubUrl,
  status,
  featured = false,
  category,
  startDate,
  completionDate,
}: ProjectCardProps) => {
  const [imageError, setImageError] = useState(false);
  const techStackLimit = 7;

  const getStatusColor = (status: string) => {
    switch (status) {
      case "Live":
        return "bg-green-500 text-white";
      case "Development":
        return "bg-blue-500 text-white";
      case "Planning":
        return "bg-yellow-500 text-gray-900";
      case "Completed":
        return "bg-purple-500 text-white";
      default:
        return "bg-gray-500 text-white";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "Live":
        return "🚀";
      case "Development":
        return "🔧";
      case "Planning":
        return "📋";
      case "Completed":
        return "✅";
      default:
        return "📦";
    }
  };

  return (
    <div
      className={`bg-card rounded-2xl border border-gray-700 overflow-hidden 
      hover:border-accent transition-all duration-300 hover:shadow-xl 
      hover:shadow-accent/10 group relative
      ${featured ? "ring-2 ring-accent ring-opacity-50" : ""}
    `}
    >
      {featured && (
        <div className="absolute top-4 left-4 z-10">
          <span className="bg-accent text-white px-3 py-1 text-xs font-bold rounded-full">
            ⭐ FEATURED
          </span>
        </div>
      )}

      <div className="relative overflow-hidden">
        {image && !imageError ? (
          <img
            src={image}
            alt={title}
            className="w-full h-48 sm:h-52 lg:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="w-full h-48 sm:h-52 lg:h-48 bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
            <div className="text-center">
              <div className="text-6xl mb-2 opacity-40">
                {category === "AI/ML"
                  ? "🤖"
                  : category === "Web"
                  ? "🌐"
                  : category === "Mobile"
                  ? "📱"
                  : category === "Data"
                  ? "📊"
                  : "🚀"}
              </div>
              <p className="text-secondary text-sm font-medium">
                {category || "Project"}
              </p>
            </div>
          </div>
        )}

        <div className="absolute inset-0 bg-black bg-opacity-0 group-hover:bg-opacity-20 transition-all duration-300 flex items-center justify-center opacity-0 group-hover:opacity-100">
          <div className="text-center">
            <p className="text-white text-sm font-medium mb-2">View Project</p>
            <div className="flex gap-2 justify-center">
              {demoUrl && (
                <span className="bg-accent text-white px-3 py-1 rounded-full text-xs">
                  Demo
                </span>
              )}
              {githubUrl && (
                <span className="bg-gray-800 text-white px-3 py-1 rounded-full text-xs">
                  Code
                </span>
              )}
            </div>
          </div>
        </div>

        <div className="absolute top-4 right-4">
          <span
            className={`px-3 py-1 text-xs font-semibold rounded-full flex items-center gap-1 ${getStatusColor(
              status
            )}`}
          >
            <span>{getStatusIcon(status)}</span>
            {status}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="mb-4">
          <div className="flex items-start justify-between mb-2">
            <h3 className="h-16 text-xl lg:text-2xl font-bold text-primary group-hover:text-accent transition-colors line-clamp-2">
              {title}
            </h3>
            {category && (
              <span className="bg-bg text-secondary px-2 py-1 text-xs rounded-md ml-2 flex-shrink-0">
                {category}
              </span>
            )}
          </div>

          <p className="text-secondary text-sm lg:text-base leading-relaxed h-60">
            {description}
          </p>
        </div>

        {(startDate || completionDate) && (
          <div className="mb-4 text-xs text-secondary">
            {startDate && <span>Started: {startDate}</span>}
            {startDate && completionDate && <span className="mx-2">•</span>}
            {completionDate && featured && (
              <span>Completed: {completionDate}</span>
            )}
            {completionDate && !featured && (
              <span>Planned Completion: {completionDate}</span>
            )}
          </div>
        )}

        <div className="mb-6">
          <h4 className="text-sm font-semibold text-secondary mb-2 uppercase tracking-wide">
            Tech Stack
          </h4>
          <div className="flex flex-wrap gap-2">
            {techStack.slice(0, techStackLimit).map((tech, index) => (
              <span
                key={index}
                className="px-2 py-1 bg-bg text-accent text-xs font-medium rounded-md border border-accent/30 hover:bg-accent/10 transition-colors"
              >
                {tech}
              </span>
            ))}
            {techStack.length > techStackLimit && (
              <span className="px-2 py-1 bg-bg text-secondary text-xs font-medium rounded-md border border-gray-600">
                +{techStack.length - techStackLimit} more
              </span>
            )}
          </div>
        </div>

        <div className="flex gap-3">
          {demoUrl ? (
            <a
              href={demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-accent text-white py-2 px-4 rounded-lg font-medium text-center hover:bg-accent/90 transition-colors text-sm lg:text-base flex items-center justify-center gap-2"
            >
              <span>Live Demo</span>
              <span>🚀</span>
            </a>
          ) : (
            <div className="flex-1 bg-gray-600 text-gray-400 py-2 px-4 rounded-lg font-medium text-center text-sm lg:text-base cursor-not-allowed">
              Demo Soon
            </div>
          )}

          {githubUrl ? (
            <a
              href={githubUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-transparent border border-accent text-accent py-2 px-4 rounded-lg font-medium text-center hover:bg-bg hover:scale-105 transition-all text-sm lg:text-base flex items-center justify-center gap-2"
            >
              GitHub 📂
            </a>
          ) : (
            <div className="flex-1 bg-transparent border border-gray-600 text-gray-400 py-2 px-4 rounded-lg font-medium text-center text-sm lg:text-base cursor-not-allowed">
              Private
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
