import React from 'react';
import { EDUCATION } from '../constants';
// Remove non-existent icon imports and use existing ones or create fallbacks
// import { GraduationCapIcon, CalendarIcon, MapPinIcon, AwardIcon } from './Icons';

const AcademicRecords: React.FC = () => {
  // Create simple text icons as fallbacks
  const GraduationCapIcon = ({ className }: { className?: string }) => (
    <span className={`font-bold ${className || ''}`}>🎓</span>
  );
  
  const CalendarIcon = ({ className }: { className?: string }) => (
    <span className={`font-bold ${className || ''}`}>📅</span>
  );
  
  const MapPinIcon = ({ className }: { className?: string }) => (
    <span className={`font-bold ${className || ''}`}>📍</span>
  );
  
  const AwardIcon = ({ className }: { className?: string }) => (
    <span className={`font-bold ${className || ''}`}>🏆</span>
  );

  // Calculate graduation progress if applicable
  const calculateProgress = () => {
    const currentEducation = EDUCATION[0]; // Assuming current education is first
    if (!currentEducation.period || !currentEducation.period.includes('Present')) {
      return null;
    }
    
    // Simple progress calculation based on years
    const match = currentEducation.period.match(/(\d{4}).*Present/);
    if (match) {
      const startYear = parseInt(match[1]);
      const currentYear = new Date().getFullYear();
      const currentMonth = new Date().getMonth(); // 0-11
      const totalYears = 4; // Assuming 4-year program
      
      // Calculate months completed (more accurate)
      const monthsCompleted = (currentYear - startYear) * 12 + currentMonth;
      const totalMonths = totalYears * 12;
      return Math.min(100, Math.round((monthsCompleted / totalMonths) * 100));
    }
    return null;
  };

  const progressPercentage = calculateProgress();

  return (
    <section className="animate-fade-in" style={{ animationDelay: '0.5s' }}>
      <div className="flex items-center justify-between mb-6 border-b pb-2 px-6 transition-colors duration-300 border-zinc-300 dark:border-zinc-800">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-blue-100 dark:bg-blue-900/30 rounded-lg">
            <GraduationCapIcon className="w-5 h-5 text-blue-600 dark:text-blue-400" />
          </div>
          <h3 className="font-serif text-xl font-bold transition-colors duration-300 text-zinc-900 dark:text-zinc-100">
            Academic Background
          </h3>
        </div>
       
      </div>
      
      <div className="space-y-8 px-4">
        {EDUCATION.map((edu, idx) => {
          // Safely handle coursework (it might not exist)
          const coursework = edu.coursework || [];
          
          return (
            <div 
              key={idx} 
              className="group relative p-6 rounded-xl border border-zinc-300 dark:border-zinc-800 bg-gradient-to-r from-white to-zinc-50 dark:from-zinc-900/50 dark:to-zinc-950/50 hover:border-blue-300 dark:hover:border-blue-900 transition-all duration-300 hover:shadow-lg"
            >
              {/* Header with Institution and Period */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 mb-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <h4 className="text-lg font-bold transition-colors duration-300 text-zinc-800 dark:text-zinc-200 group-hover:text-blue-600 dark:group-hover:text-blue-400">
                      {edu.institution}
                    </h4>
                    {/* {progressPercentage !== null && idx === 0 && (
                      <span className="text-xs px-2 py-1 bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-300 rounded-full">
                        In Progress
                      </span>
                    )} */}
                  </div>
                  
                  <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400 mb-1">
                    <AwardIcon className="w-4 h-4" />
                    <span className="font-medium">{edu.degree}</span>
                  </div>
                </div>
                
                <div className="flex items-center gap-2 text-sm font-mono px-3 py-1.5 bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 rounded-lg">
                  <CalendarIcon className="w-4 h-4" />
                  <span>{edu.period}</span>
                </div>
              </div>

            

              {/* Location and Grade */}
              <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pt-4 border-t border-zinc-200 dark:border-zinc-800">
                <div className="flex items-center gap-2 text-sm text-zinc-600 dark:text-zinc-400">
                  <MapPinIcon className="w-4 h-4" />
                  <span>{edu.location}</span>
                </div>
                
                {edu.grade && (
                  <div className="flex items-center gap-2 px-4 py-2 bg-gradient-to-r from-blue-100 to-indigo-100 dark:from-blue-900/30 dark:to-indigo-900/30 rounded-lg border border-blue-200 dark:border-blue-800">
                    <span className="font-mono text-sm font-bold text-blue-700 dark:text-blue-300">
                      {edu.grade}
                    </span>
                    <span className="text-xs text-zinc-500 dark:text-zinc-400">
                      {edu.grade.includes('CGPA') || edu.grade.includes('GPA') ? 'Grade' : 'Score'}
                    </span>
                  </div>
                )}
              </div>

              {/* Additional info if available */}
              {edu.additionalInfo && (
                <div className="mt-4 pt-4 border-t border-zinc-200 dark:border-zinc-800">
                  <p className="text-sm text-zinc-600 dark:text-zinc-400">
                    {edu.additionalInfo}
                  </p>
                </div>
              )}

              {/* Relevant Coursework if available */}
              {Array.isArray(coursework) && coursework.length > 0 && (
                <div className="mt-4 pt-4 border-t border-zinc-200 dark:border-zinc-800">
                  <div className="text-xs font-medium text-zinc-500 dark:text-zinc-400 mb-2">
                    Relevant Coursework:
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {coursework.slice(0, 4).map((course, courseIdx) => (
                      <span 
                        key={courseIdx}
                        className="px-2 py-1 text-xs bg-zinc-100 dark:bg-zinc-800 text-zinc-600 dark:text-zinc-400 rounded border border-zinc-300 dark:border-zinc-700"
                      >
                        {course}
                      </span>
                    ))}
                    {Array.isArray(coursework) && coursework.length > 4 && (
                      <span className="px-2 py-1 text-xs text-zinc-400">
                        +{coursework.length - 4} more
                      </span>
                    )}
                  </div>
                </div>
              )}

              {/* Decorative corner elements */}
              <div className="absolute -top-1 -left-1 w-3 h-3 border-t border-l border-blue-300 dark:border-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-tl-lg"></div>
              <div className="absolute -top-1 -right-1 w-3 h-3 border-t border-r border-blue-300 dark:border-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-tr-lg"></div>
              <div className="absolute -bottom-1 -left-1 w-3 h-3 border-b border-l border-blue-300 dark:border-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-bl-lg"></div>
              <div className="absolute -bottom-1 -right-1 w-3 h-3 border-b border-r border-blue-300 dark:border-blue-700 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-br-lg"></div>
            </div>
          );
        })}
      </div>

      

      {/* Footer */}
      <div className="mt-6 pt-4 border-t text-center transition-colors duration-300 border-zinc-300 dark:border-zinc-800">
        <span className="font-mono text-xs uppercase tracking-widest text-zinc-400 dark:text-zinc-600">
          ••• Knowledge is Power •••
        </span>
      </div>
    </section>
  );
};

export default AcademicRecords;