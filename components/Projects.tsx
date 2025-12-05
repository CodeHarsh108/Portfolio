import React, { useState, useEffect } from 'react';
import { PROJECTS } from '../constants';
import { ArrowUpRight, GitHubIcon, LinkIcon } from './Icons';

interface ProjectsProps {
  onViewAll?: () => void;
}

const Projects: React.FC<ProjectsProps> = ({ onViewAll }) => {
  const [hoveredProject, setHoveredProject] = useState<number | null>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  // Check if mobile device
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    
    checkMobile();
    window.addEventListener('resize', checkMobile);
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!isMobile) {
      setMousePos({ x: e.clientX, y: e.clientY });
    }
  };

  const handleProjectClick = (projectIndex: number) => {
    const project = PROJECTS[projectIndex];
    if (project.link && project.link !== '#') {
      window.open(project.link, '_blank', 'noopener,noreferrer');
    } else if (project.github && project.github !== '#') {
      window.open(project.github, '_blank', 'noopener,noreferrer');
    }
  };

  const getProjectTypeColor = (tags: string[]) => {
    if (tags.some(tag => tag.includes('Next.js') || tag.includes('React') || tag.includes('UI'))) {
      return 'from-blue-500 to-cyan-500';
    }
    if (tags.some(tag => tag.includes('Spring') || tag.includes('Java') || tag.includes('Backend'))) {
      return 'from-green-500 to-emerald-500';
    }
    if (tags.some(tag => tag.includes('Extension') || tag.includes('Tool') || tag.includes('API'))) {
      return 'from-purple-500 to-pink-500';
    }
    return 'from-zinc-500 to-zinc-700';
  };

  // Filter to show only featured projects (first 4)
  const featuredProjects = PROJECTS.slice(0, 4);

  return (
    <>
      {/* Floating preview image - only on desktop */}
      {!isMobile && hoveredProject !== null && PROJECTS[hoveredProject]?.preview && (
        <div 
          className="fixed pointer-events-none z-50 transition-all duration-200"
          style={{ 
            left: `${mousePos.x + 20}px`,
            top: `${mousePos.y + 20}px`,
            transform: 'translateY(-50%)',
          }}
        >
          <div className="w-64 h-48 rounded-xl overflow-hidden shadow-2xl border-2 border-white dark:border-zinc-800 bg-white dark:bg-zinc-900">
            <img 
              src={PROJECTS[hoveredProject].preview} 
              alt={PROJECTS[hoveredProject].title}
              className="w-full h-full object-cover"
              onError={(e) => {
                e.currentTarget.src = `https://picsum.photos/seed/${PROJECTS[hoveredProject].title}/400/300`;
              }}
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
            <div className="absolute bottom-3 left-3 right-3">
              <span className="text-xs font-semibold text-white drop-shadow-lg">
                {PROJECTS[hoveredProject].title}
              </span>
            </div>
          </div>
        </div>
      )}
      
      <section 
        id="projects-section"
        className="animate-fade-in" 
        style={{ animationDelay: '0.4s' }}
      >
        <div className="flex items-baseline justify-between mb-8 border-b pb-3 -mx-6 sm:-mx-8 px-6 sm:px-8 transition-colors duration-300 border-zinc-300 dark:border-zinc-800">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-gradient-to-r from-blue-500 to-cyan-500 rounded-lg">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
              </svg>
            </div>
            <div>
              <h3 className="font-serif text-2xl font-bold transition-colors duration-300 text-zinc-900 dark:text-zinc-100">
                Featured Projects
              </h3>
              <p className="text-sm text-zinc-500 dark:text-zinc-400">
                Showcasing my best work
              </p>
            </div>
          </div>
          
          {onViewAll && (
            <button 
              onClick={onViewAll}
              className="group flex items-center gap-2 px-4 py-2 font-mono text-sm uppercase bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
            >
              View All Projects
              <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </button>
          )}
        </div>
        
        
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {featuredProjects.map((project, index) => {
            const hasDemo = project.link && project.link !== '#';
            const hasSource = project.github && project.github !== '#';
            const gradientColor = getProjectTypeColor(project.tags);
            
            return (
              <article 
                key={index} 
                className="group relative bg-white/80 dark:bg-zinc-800/80 border border-zinc-300 dark:border-zinc-700 rounded-2xl overflow-hidden transition-all duration-300 hover:shadow-2xl hover:scale-[1.02] hover:border-blue-300 dark:hover:border-blue-900"
                onMouseEnter={() => !isMobile && setHoveredProject(index)}
                onMouseLeave={() => !isMobile && setHoveredProject(null)}
                onMouseMove={!isMobile ? handleMouseMove : undefined}
                onClick={() => handleProjectClick(index)}
              >
                {/* Project Header with Gradient */}
                <div className={`h-2 bg-gradient-to-r ${gradientColor}`}></div>
                
                <div className="p-6">
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h4 className="text-xl font-bold mb-2 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors text-zinc-900 dark:text-zinc-100">
                        {project.title}
                      </h4>
                      <div className="flex items-center gap-2 text-sm text-zinc-500 dark:text-zinc-400">
                        <span>Project #{index + 1}</span>
                        <span>•</span>
                        <span>Featured</span>
                      </div>
                    </div>
                    
                    {/* Links */}
                    <div className="flex gap-2">
                      {hasDemo && (
                        <a
                          href={project.link}
                          onClick={(e) => e.stopPropagation()}
                          className="p-2 bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400 rounded-lg hover:bg-blue-200 dark:hover:bg-blue-800 transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Live Demo"
                        >
                          <ExternalLinkIcon className="w-4 h-4" />
                        </a>
                      )}
                      {hasSource && (
                        <a
                          href={project.github}
                          onClick={(e) => e.stopPropagation()}
                          className="p-2 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 rounded-lg hover:bg-zinc-200 dark:hover:bg-zinc-700 transition-colors"
                          target="_blank"
                          rel="noopener noreferrer"
                          title="Source Code"
                        >
                          <GitHubIcon className="w-4 h-4" />
                        </a>
                      )}
                    </div>
                  </div>
                  
                  <p className="text-zinc-600 dark:text-zinc-400 mb-6 line-clamp-3">
                    {project.description}
                  </p>
                  
                  {/* Tags */}
                  <div className="flex flex-wrap gap-2 mb-6">
                    {project.tags.map((tag, tagIndex) => (
                      <span 
                        key={tagIndex}
                        className="px-3 py-1 text-xs font-medium bg-zinc-100 dark:bg-zinc-800 text-zinc-700 dark:text-zinc-300 rounded-full border border-zinc-300 dark:border-zinc-700"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  
                  {/* Footer */}
                  <div className="flex items-center justify-between pt-4 border-t border-zinc-200 dark:border-zinc-700">
                    
                    <button className="flex items-center gap-1 text-sm font-medium text-blue-600 dark:text-blue-400 group-hover:underline">
                      View Details
                      <ArrowUpRight className="w-4 h-4 transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
                    </button>
                  </div>
                </div>
                
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-500/10 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
              </article>
            );
          })}
        </div>
        
        {/* View All Button for Mobile */}
        <div className="mt-12 text-center">
          <button 
            onClick={onViewAll}
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold uppercase tracking-wide text-sm rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
            </svg>
            View All {PROJECTS.length} Projects
          </button>
        </div>
      </section>
    </>
  );
};

// Add missing ExternalLinkIcon if needed
const ExternalLinkIcon = ({ className }: { className?: string }) => (
  <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
  </svg>
);

export default Projects;