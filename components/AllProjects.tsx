import React, { useState } from 'react';
import { PROJECTS } from '../constants';
import { ArrowUpRight, GitHubIcon, LinkIcon } from './Icons';

interface AllProjectsProps {
  onBack: () => void;
}

const AllProjects: React.FC<AllProjectsProps> = ({ onBack }) => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);

  // Filter projects to ensure no duplicates and valid data
  const validProjects = PROJECTS.filter(project => 
    project && project.title && project.description
  );

  const handleProjectClick = (link?: string) => {
    if (link && link !== '#') {
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <div className="min-h-screen py-12 px-4 sm:px-6 lg:px-8 bg-gradient-to-b from-white to-zinc-50 dark:from-zinc-900 dark:to-zinc-950">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="mb-12 px-4">
          <button 
            onClick={onBack}
            className="flex items-center gap-2 text-sm font-mono mb-8 group px-4 py-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all duration-300"
          >
            <ArrowUpRight className="w-4 h-4 rotate-[225deg] group-hover:-translate-x-1 transition-transform" />
            Back to Portfolio
          </button>
          
          <div className="space-y-4">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
              Project Portfolio
            </h1>
            <p className="text-lg font-sans text-zinc-600 dark:text-zinc-400 max-w-3xl">
              Showcasing full-stack applications, tools, and experiments built with modern technologies
            </p>
            
            {/* Stats */}
            <div className="flex flex-wrap gap-6 mt-6">
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <span className="text-sm text-zinc-600 dark:text-zinc-400">
                  {validProjects.length} Projects
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-blue-500 rounded-full"></div>
                <span className="text-sm text-zinc-600 dark:text-zinc-400">
                  Full-Stack Focus
                </span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-3 h-3 bg-purple-500 rounded-full"></div>
                <span className="text-sm text-zinc-600 dark:text-zinc-400">
                  Java/Spring Expertise
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 px-4">
          {validProjects.map((project, index) => {
            const hasDemo = project.link && project.link !== '#';
            const hasSource = project.github && project.github !== '#';
            
            return (
              <article 
                key={index}
                onMouseEnter={() => setHoveredProject(index)}
                onMouseLeave={() => setHoveredProject(null)}
                onClick={() => handleProjectClick(hasDemo ? project.link : project.github)}
                className="group relative bg-white/80 dark:bg-zinc-800/80 border border-zinc-300 dark:border-zinc-700 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] hover:border-blue-300 dark:hover:border-blue-900 cursor-pointer"
              >
                {/* Project Preview Image */}
                <div className="relative h-48 overflow-hidden bg-gradient-to-br from-blue-50 to-indigo-50 dark:from-zinc-800 dark:to-zinc-900">
                  {project.preview ? (
                    <img 
                      src={project.preview} 
                      alt={project.title}
                      className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                      onError={(e) => {
                        // Fallback for broken images
                        e.currentTarget.src = `https://picsum.photos/seed/${project.title}/600/400`;
                      }}
                    />
                  ) : (
                    <div className="w-full h-full flex items-center justify-center">
                      <span className="text-4xl opacity-20">{project.title.charAt(0)}</span>
                    </div>
                  )}
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  
                  {/* Hover overlay */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <div className="flex gap-4 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {hasDemo && (
                        <div className="p-3 bg-white/20 backdrop-blur-sm rounded-full">
                          <LinkIcon className="w-5 h-5 text-white" />
                        </div>
                      )}
                      {hasSource && (
                        <div className="p-3 bg-white/20 backdrop-blur-sm rounded-full">
                          <GitHubIcon className="w-5 h-5 text-white" />
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <div className="flex items-start justify-between mb-3">
                    <div>
                      <h2 className="text-xl font-bold text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {project.title}
                      </h2>
                      {project.subtitle && (
                        <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                          {project.subtitle}
                        </p>
                      )}
                    </div>
                    
                    {/* Status indicator */}
                    {hoveredProject === index && (
                      <div className="flex items-center gap-1 text-xs px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full">
                        <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></div>
                        Active
                      </div>
                    )}
                  </div>
                  
                  <p className="text-sm text-zinc-600 dark:text-zinc-400 mb-4 line-clamp-2">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags?.slice(0, 4).map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-2.5 py-1 text-xs font-medium rounded-full bg-blue-100/50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800"
                      >
                        {tag}
                      </span>
                    ))}
                    {project.tags && project.tags.length > 4 && (
                      <span className="px-2.5 py-1 text-xs text-zinc-500">
                        +{project.tags.length - 4}
                      </span>
                    )}
                  </div>
                  
                  {/* Links */}
                  <div className="flex items-center justify-between pt-4 border-t border-zinc-200 dark:border-zinc-700">
                    <div className="flex gap-4">
                      {hasDemo && (
                        <a
                          href={project.link}
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center gap-2 text-sm font-medium text-blue-600 dark:text-blue-400 hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <LinkIcon className="w-4 h-4" />
                          Demo
                        </a>
                      )}
                      {hasSource && (
                        <a
                          href={project.github}
                          onClick={(e) => e.stopPropagation()}
                          className="flex items-center gap-2 text-sm font-medium text-zinc-600 dark:text-zinc-400 hover:underline"
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <GitHubIcon className="w-4 h-4" />
                          Code
                        </a>
                      )}
                    </div>
                    
                    <div className="text-xs text-zinc-400">
                      {index + 1}/{validProjects.length}
                    </div>
                  </div>
                </div>
                
                {/* Corner accent */}
                <div className="absolute top-0 right-0 w-12 h-12 overflow-hidden">
                  <div className="absolute -top-6 -right-6 w-12 h-12 bg-blue-500/10 group-hover:bg-blue-500/20 transition-colors duration-300"></div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Call to Action */}
        <div className="mt-16 px-4">
          <div className="max-w-4xl mx-auto p-8 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-zinc-800 dark:to-zinc-900 rounded-2xl border border-zinc-300 dark:border-zinc-700 text-center">
            <h3 className="text-2xl font-bold font-serif mb-4 text-zinc-900 dark:text-zinc-100">
              Have a project in mind?
            </h3>
            <p className="text-zinc-600 dark:text-zinc-400 mb-6 max-w-2xl mx-auto">
              I'm always open to discussing new opportunities and interesting projects.
              Whether it's a full-stack application, API development, or system architecture,
              let's build something amazing together.
            </p>
            <a
              href="mailto:itsharshhh@gmail.com"
              className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-lg transition-colors duration-300"
            >
              <LinkIcon className="w-4 h-4" />
              Get in Touch
            </a>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-zinc-300 dark:border-zinc-700">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <p className="font-mono text-sm text-zinc-500 dark:text-zinc-500 mb-2">
              "The only way to do great work is to love what you do." - Steve Jobs
            </p>
            <div className="flex items-center justify-center gap-4 text-xs text-zinc-400">
              <span>•</span>
              <span>Continuously building</span>
              <span>•</span>
              <span>Always learning</span>
              <span>•</span>
              <span>Java/Spring Specialist</span>
              <span>•</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AllProjects;