import React from 'react';
import { EXPERIENCE } from '../constants';

const Experience: React.FC = () => {
  return (
    <section className="animate-fade-in" style={{ animationDelay: '0.2s' }}>
      <h3 className="font-serif text-xl mb-8 border-b pb-[12px] px-6 transition-colors duration-300 text-zinc-900 border-zinc-300 dark:text-zinc-100 dark:border-zinc-800">
        Professional Experience
      </h3>
      <div className="flex flex-col gap-8 px-6">
        {EXPERIENCE.map((job, index) => (
          <div 
            key={index} 
            className="group relative p-4 rounded-lg border border-zinc-200 dark:border-zinc-800 hover:border-blue-300 dark:hover:border-blue-900 transition-all duration-300 hover:shadow-md hover:bg-white/50 dark:hover:bg-zinc-900/50"
          >
            {/* Header with company and period */}
            <div className="flex items-baseline justify-between mb-2 flex-wrap gap-2">
              <div className="flex items-center gap-3">
                {job.current && (
                  <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
                )}
                <h4 className="text-base font-bold transition-colors duration-300 text-zinc-800 dark:text-zinc-200">
                  {job.company}
                </h4>
                {job.current && (
                  <span className="text-xs px-2 py-0.5 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full">
                    Current
                  </span>
                )}
              </div>
              <span className="font-mono text-xs text-zinc-500 dark:text-zinc-400">
                {job.period}
              </span>
            </div>

            {/* Role */}
            <div className="text-sm font-sans font-medium mb-3 transition-colors duration-300 text-zinc-700 dark:text-zinc-300">
              {job.role}
            </div>
            
            {/* Description */}
            <p className="text-sm font-sans leading-relaxed transition-colors mb-4 text-zinc-600 dark:text-zinc-400">
              {job.description}
            </p>

            {/* Tech Stack */}
            {job.tech && job.tech.length > 0 && (
              <div className="flex flex-wrap gap-2 mt-3 pt-3 border-t border-zinc-100 dark:border-zinc-800">
                {job.tech.map((tech, techIndex) => (
                  <span
                    key={techIndex}
                    className="px-2 py-1 text-xs font-mono bg-blue-100/50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded border border-blue-200 dark:border-blue-800"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            )}

            {/* Decorative elements */}
            <div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-zinc-300 dark:border-zinc-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            <div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-zinc-300 dark:border-zinc-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
          </div>
        ))}
      </div>

      

      <div className="mt-6 pt-4 border-t text-center transition-colors duration-300 border-zinc-300 dark:border-zinc-800">
        <span className="font-mono text-xs uppercase tracking-widest text-zinc-400 dark:text-zinc-600">
          Experience Builds Excellence
        </span>
      </div>
    </section>
  );
};

export default Experience;