import React, { useState } from 'react';
import { NOW_BUILDING } from '../constants';
import { ArrowUpRight } from './Icons';

const NowBuilding: React.FC = () => {
  const [progress, setProgress] = useState(65); // Starting progress
  const [isExpanded, setIsExpanded] = useState(false);

  // Create missing icon components
  const HammerIcon = ({ className }: { className?: string }) => (
    <span className={`font-bold ${className || ''}`}>🔨</span>
  );

  const CodeIcon = ({ className }: { className?: string }) => (
    <span className={`font-bold ${className || ''}`}>💻</span>
  );

  // Check if link exists and is valid
  const link = (NOW_BUILDING as { link?: string }).link;
  const hasValidLink = !!link && link !== '#';

  // Toggle expanded view
  const toggleExpanded = () => {
    setIsExpanded(!isExpanded);
  };

  // Handle link click
  const handleLinkClick = (e: React.MouseEvent) => {
    if (hasValidLink && link) {
      e.stopPropagation();
      window.open(link, '_blank', 'noopener,noreferrer');
    }
  };

  // Mock project details
  const projectDetails = {
    techStack: ['SpringBoot', 'WebSockets', 'React'],
    features: [
      'Real-time Chat Application',
    ]
  };

  return (
    <div 
      onClick={toggleExpanded}
      className="relative border rounded-xl p-6 animate-fade-in flex flex-col gap-4 transition-all duration-300 border-zinc-300 bg-gradient-to-br from-white to-zinc-50 dark:from-zinc-900/50 dark:to-zinc-950/50 group hover:border-blue-300 dark:hover:border-blue-900 hover:shadow-xl hover:scale-[1.02] cursor-pointer"
    >
      {/* Header */}
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="relative">
            <div className="absolute -inset-1 bg-orange-500/20 rounded-full blur-sm"></div>
            <div className="relative p-2 bg-gradient-to-r from-orange-500 to-amber-500 rounded-lg">
              <HammerIcon className="w-4 h-4 text-white" />
            </div>
          </div>
          <div className="flex flex-col">
            <div className="flex items-center gap-2">
              <span className="relative flex h-2 w-2">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
              </span>
              <span className="font-mono text-xs uppercase tracking-widest text-green-600 dark:text-green-400">
                Building Now
              </span>
            </div>
          </div>
        </div>
        
        <div className="flex items-center gap-2">
          
          {hasValidLink && (
            <button
              onClick={handleLinkClick}
              className="p-2 hover:bg-zinc-100 dark:hover:bg-zinc-800 rounded-lg transition-colors"
              title="View project details"
            >
              <ArrowUpRight className="w-4 h-4 text-zinc-600 dark:text-zinc-400 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
            </button>
          )}
        </div>
      </div>
      
      {/* Project Title & Description */}
      <div>
        <h4 className="text-lg font-bold mb-2 transition-colors duration-300 text-zinc-900 dark:text-zinc-200 group-hover:text-blue-600 dark:group-hover:text-blue-400">
          {NOW_BUILDING.title}
        </h4>
        <p className="text-sm font-sans leading-relaxed transition-colors duration-300 text-zinc-600 dark:text-zinc-400">
          {NOW_BUILDING.description}
        </p>
      </div>
      
      {/* Progress Bar */}
      <div className="space-y-2">
        <div className="flex justify-between items-center">
          <span className="font-mono text-xs text-zinc-600 dark:text-zinc-400">Development Progress</span>
          <span className="font-mono text-sm font-bold text-blue-600 dark:text-blue-400">{progress}%</span>
        </div>
        <div className="h-2 w-full bg-zinc-200 dark:bg-zinc-800 rounded-full overflow-hidden">
          <div 
            className="h-full bg-gradient-to-r from-blue-500 to-cyan-500 rounded-full relative overflow-hidden transition-all duration-1000 ease-out"
            style={{ width: `${progress}%` }}
          >
            <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/30 to-transparent animate-[shimmer_2s_infinite]"></div>
          </div>
        </div>
        <div className="flex justify-between text-[10px] text-zinc-500">
          <span>Planning</span>
          <span>Development</span>
          <span>Testing</span>
          <span>Launch</span>
        </div>
      </div>

      {/* Expanded Details */}
      

      {/* Footer */}
      

      {/* Decorative Corner */}
      <div className="absolute -top-1 -right-1 w-8 h-8 border-t border-r border-orange-500/30 rounded-tr-lg"></div>
      <div className="absolute -bottom-1 -left-1 w-8 h-8 border-b border-l border-orange-500/30 rounded-bl-lg"></div>
    </div>
  );
};

export default NowBuilding;