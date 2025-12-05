import React from 'react';
import { BIO, SOCIAL_LINKS } from '../constants';

const Hero: React.FC = () => {
  // Handle resume download
  const handleResumeClick = () => {
    // Method 1: Direct link to PDF (Make sure resume.pdf exists in public folder)
    window.open('/resume.pdf', '_blank', 'noopener,noreferrer');
    
    // Method 2: Alternative - download file
    // const link = document.createElement('a');
    // link.href = '/resume.pdf';
    // link.download = 'Harsh_Patil_Resume.pdf';
    // document.body.appendChild(link);
    // link.click();
    // document.body.removeChild(link);
  };

  // Handle contact click
  const handleContactClick = () => {
    const email = 'itsharshhh@gmail.com';
    window.location.href = `mailto:${email}?subject=Portfolio%20Inquiry&body=Hello%20Harsh,%0A%0AI%20saw%20your%20portfolio%20and%20would%20like%20to%20connect...`;
  };

  // Handle view projects (scroll to projects section)
  const handleViewProjects = () => {
    const projectsSection = document.getElementById('projects-section');
    if (projectsSection) {
      projectsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="flex flex-col gap-6 animate-fade-in">
      <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
        {/* Left Content */}
        <div className="flex-1">
          <div className="mb-6">
            <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-serif font-bold leading-[1.1] mb-2 uppercase tracking-tight transition-colors duration-300 text-zinc-900 dark:text-zinc-100">
              {BIO.name}
            </h1>
            <p className="text-lg sm:text-xl text-blue-600 dark:text-blue-400 font-medium mb-4">
              {BIO.title}
            </p>
          </div>
          
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-serif font-bold leading-[1.1] mb-6 tracking-tight transition-colors duration-300 text-zinc-900 dark:text-zinc-100 whitespace-pre-line bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400 bg-clip-text text-transparent">
            {BIO.headline}
          </h2>
          
          <p className="text-base sm:text-lg leading-relaxed font-sans text-justify transition-colors duration-300 text-zinc-700 dark:text-zinc-400 mb-8 max-w-3xl">
            {BIO.description}
          </p>
          
          {/* CTA Buttons */}
          <div className="flex flex-wrap gap-4 mt-8">
            <button
              onClick={handleResumeClick}
              className="group relative px-6 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-bold uppercase tracking-wide text-sm rounded-lg hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 overflow-hidden flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
              </svg>
              <span className="relative z-10">View Resume</span>
              <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
            </button>
            
            <button
              onClick={handleContactClick}
              className="group relative px-6 py-3 border-2 border-blue-600 dark:border-blue-400 text-blue-600 dark:text-blue-400 font-bold uppercase tracking-wide text-sm rounded-lg hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-all duration-300 flex items-center gap-2"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="relative z-10">Contact Me</span>
            </button>
            
           
          </div>



        </div>
        
        {/* Right Sidebar - Profile & Social */}
        <div className="w-full lg:w-64 xl:w-72 shrink-0">
          <div className="sticky top-6 flex flex-col gap-6">
            {/* Profile Image */}
            <div className="relative group">
              <div className="relative border-4 border-white dark:border-zinc-900 rounded-2xl overflow-hidden shadow-xl rotate-1 group-hover:rotate-0 transition-all duration-500">
                <img 
                  src={BIO.avatar} 
                  alt={`${BIO.name} - ${BIO.title}`}
                  className="w-full h-auto aspect-square object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
                  onError={(e) => {
                    // Fallback if image doesn't load
                    e.currentTarget.src = 'https://api.dicebear.com/7.x/avataaars/svg?seed=' + BIO.name;
                  }}
                />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -top-3 -right-3 w-6 h-6 bg-blue-500 rounded-full animate-pulse"></div>
              <div className="absolute -bottom-3 -left-3 w-6 h-6 bg-green-500 rounded-full"></div>
              
              <p className="font-mono text-xs text-center mt-4 uppercase tracking-wider transition-colors duration-300 text-zinc-500 dark:text-zinc-600">
                Full Stack Developer
              </p>
            </div>

            {/* Social Links */}
            <div className="bg-white/80 dark:bg-zinc-900/80 backdrop-blur-sm rounded-2xl border border-zinc-300 dark:border-zinc-800 p-6 shadow-lg">
              <h3 className="font-serif text-lg font-bold mb-4 text-zinc-900 dark:text-zinc-100">
                Connect With Me
              </h3>
              
              <div className="space-y-4">
                {SOCIAL_LINKS.map((link) => (
                  <a 
                    key={link.name} 
                    href={link.url} 
                    target="_blank" 
                    rel="noopener noreferrer"
                    className="flex items-center gap-4 p-3 rounded-xl border border-transparent hover:border-blue-300 dark:hover:border-blue-900 hover:bg-blue-50/50 dark:hover:bg-blue-900/20 transition-all duration-300 group"
                  >
                    <div className="">
                      <link.icon className="w-5 h-5 text-zinc-700 dark:text-zinc-300 group-hover:text-blue-600 dark:group-hover:text-blue-400" />
                    </div>
                    <div className="flex-1">
                      <span className="font-medium text-zinc-900 dark:text-zinc-100 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                        {link.name}
                      </span>
                      <p className="text-xs text-zinc-500 truncate">
                        {link.url.replace('mailto:', '').replace('https://', '').replace('www.', '')}
                      </p>
                    </div>
                    <span className="text-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300">↗</span>
                  </a>
                ))}
              </div>
              
              <div className="mt-6 pt-4 border-t border-zinc-200 dark:border-zinc-800">
                <p className="text-xs text-center text-zinc-500 dark:text-zinc-400">
                  Always open to interesting conversations
                </p>
              </div>
            </div>

            {/* Availability */}
            <div className="p-4 bg-gradient-to-r from-green-50 to-emerald-50 dark:from-green-900/20 dark:to-emerald-900/20 rounded-xl border border-green-200 dark:border-green-800">
              <div className="flex items-center gap-3">
                <div className="w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
                <div>
                  <p className="text-sm font-medium text-green-800 dark:text-green-300">
                    Available for opportunities
                  </p>
                  <p className="text-xs text-green-600 dark:text-green-400">
                    Open to full-time & freelance
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;