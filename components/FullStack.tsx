import React from 'react';
import { FULL_TECH_STACK } from '../constants';
import { ArrowUpRight } from './Icons';

interface FullStackProps {
  onBack: () => void;
}

export const FullStack: React.FC<FullStackProps> = ({ onBack }) => {
  // Group technologies by category
  const categories = FULL_TECH_STACK.reduce((acc, tech) => {
    const category = tech.category || 'Other';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(tech);
    return acc;
  }, {} as Record<string, typeof FULL_TECH_STACK>);

  // Updated category order based on your resume structure
  const categoryOrder = ['Languages', 'Backend', 'Frontend', 'Database', 'Tools', 'Testing'];

  // Safe icon renderer with error handling
  const renderIcon = (tech: typeof FULL_TECH_STACK[0]) => {
    try {
      if (React.isValidElement(tech.icon)) {
        // Check if it already has a className
        const existingClassName = tech.icon.props?.className || '';
        const newClassName = `w-8 h-8 ${existingClassName}`;
        
        return React.cloneElement(tech.icon as React.ReactElement, {
          className: newClassName
        });
      }
      
      // If it's not a React element, return it as-is
      return tech.icon;
    } catch (error) {
      console.error(`Error rendering icon for ${tech.name}:`, error);
      // Fallback to text
      return <span className="text-lg font-bold">{tech.name.charAt(0)}</span>;
    }
  };

  return (
    <div className="min-h-screen py-8 px-4 bg-gradient-to-b from-white to-zinc-50 dark:from-zinc-900 dark:to-zinc-950">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="border-b-2 border-zinc-300 dark:border-zinc-700 pb-6 mb-8">
          <button
            onClick={onBack}
            className="flex items-center gap-2 text-sm font-mono mb-6 hover:underline group px-4 py-2 rounded-lg hover:bg-zinc-100 dark:hover:bg-zinc-800 transition-all"
          >
            <ArrowUpRight className="w-4 h-4 rotate-[225deg] group-hover:-translate-x-1 transition-transform" />
            Back to Home
          </button>
          <div className="px-4">
            <h1 className="font-serif text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
              Full Tech Stack
            </h1>
            <p className="font-sans text-lg mt-3 text-zinc-600 dark:text-zinc-400 max-w-2xl">
              Comprehensive overview of all technologies, frameworks, and tools I work with as a Full Stack Java Developer
            </p>
          </div>
        </div>

        {/* Tech Categories */}
        <div className="space-y-12">
          {categoryOrder.map((category) => (
            categories[category] && (
              <section 
                key={category} 
                className="bg-white/60 dark:bg-zinc-900/60 p-6 rounded-xl border border-zinc-200 dark:border-zinc-800 shadow-sm hover:shadow-lg transition-shadow duration-300"
              >
                <div className="flex items-center justify-between mb-6 pb-3 border-b border-zinc-300 dark:border-zinc-700">
                  <div>
                    <h2 className="font-serif text-2xl font-bold text-zinc-900 dark:text-zinc-100">
                      {category}
                    </h2>
                    <p className="text-sm text-zinc-500 dark:text-zinc-400 mt-1">
                      {categories[category].length} technologies
                    </p>
                  </div>
                  <span className="font-mono text-sm px-3 py-1 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 rounded-full">
                    {categories[category].length}
                  </span>
                </div>
                
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4">
                  {categories[category].map((tech) => (
                    <div
                      key={tech.name}
                      className="flex flex-col items-center justify-center p-4 border border-zinc-300 dark:border-zinc-700 rounded-xl hover:border-blue-500 dark:hover:border-blue-400 hover:shadow-xl transition-all duration-300 group bg-white/90 dark:bg-zinc-800/90 hover:scale-[1.02]"
                    >
                      <div className="mb-3 group-hover:scale-110 transition-transform duration-300 flex items-center justify-center w-12 h-12">
                        {renderIcon(tech)}
                      </div>
                      <span className="font-medium text-sm text-center text-zinc-800 dark:text-zinc-200 group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                        {tech.name}
                      </span>
                    </div>
                  ))}
                </div>
              </section>
            )
          ))}
        </div>

        {/* Stats Section */}
        <div className="mt-12 p-8 bg-gradient-to-r from-blue-50 to-indigo-50 dark:from-zinc-800 dark:to-zinc-900 rounded-xl border border-zinc-300 dark:border-zinc-700 shadow-lg">
          <h3 className="font-serif text-xl font-bold mb-6 text-center text-zinc-900 dark:text-zinc-100">
            Technology Stack Overview
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="p-4 bg-white/50 dark:bg-zinc-800/50 rounded-lg">
              <div className="text-3xl font-bold font-serif text-blue-600 dark:text-blue-400">
                {FULL_TECH_STACK.length}
              </div>
              <div className="text-sm text-zinc-600 dark:text-zinc-400 mt-2">
                Total Technologies
              </div>
            </div>
            <div className="p-4 bg-white/50 dark:bg-zinc-800/50 rounded-lg">
              <div className="text-3xl font-bold font-serif text-blue-600 dark:text-blue-400">
                {Object.keys(categories).length}
              </div>
              <div className="text-sm text-zinc-600 dark:text-zinc-400 mt-2">
                Categories
              </div>
            </div>
            <div className="p-4 bg-white/50 dark:bg-zinc-800/50 rounded-lg">
              <div className="text-3xl font-bold font-serif text-blue-600 dark:text-blue-400">
                {categories['Backend']?.length || 0}
              </div>
              <div className="text-sm text-zinc-600 dark:text-zinc-400 mt-2">
                Backend Tools
              </div>
            </div>
            <div className="p-4 bg-white/50 dark:bg-zinc-800/50 rounded-lg">
              <div className="text-3xl font-bold font-serif text-blue-600 dark:text-blue-400">
                {categories['Frontend']?.length || 0}
              </div>
              <div className="text-sm text-zinc-600 dark:text-zinc-400 mt-2">
                Frontend Tools
              </div>
            </div>
          </div>
          
          {/* Expertise highlight */}
          <div className="mt-8 p-4 bg-blue-100/50 dark:bg-blue-900/20 rounded-lg border border-blue-200 dark:border-blue-800">
            <div className="flex items-center gap-3">
              <div className="w-3 h-3 bg-blue-500 rounded-full animate-pulse"></div>
              <p className="text-sm text-blue-800 dark:text-blue-300">
                <strong>Primary Expertise:</strong> Java, Spring Boot, Spring Framework, Hibernate, REST APIs, PostgreSQL
              </p>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="mt-12 pt-8 border-t border-zinc-300 dark:border-zinc-700">
          <div className="text-center">
            <p className="font-mono text-sm text-zinc-500 dark:text-zinc-500 mb-4">
              "The art of programming is the art of organizing complexity." - Edsger W. Dijkstra
            </p>
            <div className="flex items-center justify-center gap-2 text-xs text-zinc-400">
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
              <span>Continuously expanding skillset</span>
              <span className="w-2 h-2 bg-blue-500 rounded-full"></span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};