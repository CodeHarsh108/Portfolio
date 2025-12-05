import React, { useState, useEffect } from 'react';

interface GithubActivityProps {
  username?: string; // Optional: for future GitHub API integration
  showTitle?: boolean;
  showLegend?: boolean;
  contributionCount?: number; // Mock contribution count
}

const GithubActivity: React.FC<GithubActivityProps> = ({ 
  username = "CodeHarsh108",
  showTitle = true,
  showLegend = true,
  contributionCount = 987 // You can adjust this number
}) => {
  const [mounted, setMounted] = useState(false);
  const weeks = 52;
  const days = 7;
  
  // More realistic contribution pattern that mimics actual GitHub activity
  const getContributionLevel = (weekIndex: number, dayIndex: number) => {
    // Base pattern: more activity on weekdays, less on weekends
    const isWeekend = dayIndex === 0 || dayIndex === 6; // Sunday or Saturday
    
    // Generate a pseudo-random but consistent pattern
    const seed = weekIndex * 7 + dayIndex;
    const random = Math.sin(seed * 0.3) * Math.cos(seed * 0.7);
    
    // Create activity clusters (like actual coding sprints)
    const clusterMultiplier = Math.max(0, Math.sin(weekIndex * 0.4) * 0.5 + 0.5);
    
    // Adjust based on weekend vs weekday
    const baseLevel = isWeekend ? random * 0.4 : random * 0.8;
    
    // Combine factors and normalize to 0-4
    const value = Math.max(0, Math.min(1, baseLevel * clusterMultiplier));
    
    // Map to contribution levels (0-4)
    if (value > 0.8) return 4;      // High activity
    if (value > 0.6) return 3;      // Medium-high
    if (value > 0.3) return 2;      // Medium
    if (value > 0.1) return 1;      // Low
    return 0;                        // No activity
  };

  const getCellColor = (level: number) => {
    // Green spectrum matching GitHub's contribution colors
    switch (level) {
      case 4: return 'bg-green-600 dark:bg-green-500';
      case 3: return 'bg-green-500 dark:bg-green-600';
      case 2: return 'bg-green-400 dark:bg-green-700';
      case 1: return 'bg-green-300 dark:bg-green-800';
      default: return 'bg-zinc-100 dark:bg-zinc-900/80';
    }
  };

  const getActivityDescription = (level: number) => {
    switch (level) {
      case 4: return '10+ contributions';
      case 3: return '7-9 contributions';
      case 2: return '4-6 contributions';
      case 1: return '1-3 contributions';
      default: return 'No contributions';
    }
  };

  // Calculate some stats for realism
  const calculateStats = () => {
    let totalContributions = 0;
    let activeDays = 0;
    let maxStreak = 0;
    let currentStreak = 0;
    
    for (let w = 0; w < weeks; w++) {
      for (let d = 0; d < days; d++) {
        const level = getContributionLevel(w, d);
        if (level > 0) {
          totalContributions += level * 2; // Rough estimate
          activeDays++;
          currentStreak++;
          maxStreak = Math.max(maxStreak, currentStreak);
        } else {
          currentStreak = 0;
        }
      }
    }
    
    return { totalContributions, activeDays, maxStreak };
  };

  const stats = calculateStats();

  // For hydration
  useEffect(() => {
    setMounted(true);
  }, []);

  // Month labels for the timeline
  const monthLabels = ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

  return (
    <section className="mb-16">
      {showTitle && (
        <div className="flex items-center justify-between mb-6 border-b pb-2 -mx-6 sm:-mx-8 px-6 sm:px-8 transition-colors duration-300 border-zinc-300 dark:border-zinc-800">
          <div className="flex items-center gap-3">
            <h3 className="text-xl font-bold transition-colors duration-300 text-zinc-900 dark:text-zinc-100">
              GitHub Activity
            </h3>
            <span className="text-xs px-2 py-1 bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full">
              @{username}
            </span>
          </div>
          <span className="text-sm text-zinc-500">
            {contributionCount.toLocaleString()} contributions
          </span>
        </div>
      )}
      
      <div className="w-full overflow-hidden p-6 rounded-xl border transition-colors duration-300 border-zinc-300 bg-white/40 dark:border-zinc-800 dark:bg-zinc-900/20">
        {/* Month labels */}
        <div className="flex mb-2 ml-8 sm:ml-12 text-xs text-zinc-500">
          {monthLabels.map((month, idx) => (
            <div 
              key={month} 
              className="w-[8.33%] text-center"
              style={{ marginLeft: idx === 0 ? '0' : '0' }}
            >
              {month}
            </div>
          ))}
        </div>
        
        {/* Contribution grid */}
        <div className="flex gap-1.5 justify-between">
          {Array.from({ length: weeks }).map((_, weekIndex) => (
            <div key={weekIndex} className="flex flex-col gap-1.5">
              {Array.from({ length: days }).map((_, dayIndex) => {
                const level = getContributionLevel(weekIndex, dayIndex);
                const description = getActivityDescription(level);
                
                return (
                  <div 
                    key={`${weekIndex}-${dayIndex}`}
                    className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-[2px] transition-all duration-200 hover:scale-125 hover:ring-2 hover:ring-zinc-400 dark:hover:ring-white/20 ${getCellColor(level)} ${mounted ? 'opacity-100' : 'opacity-0'}`}
                    title={`${description} on day ${dayIndex + 1} of week ${weekIndex + 1}`}
                    style={{
                      transitionDelay: `${(weekIndex * 7 + dayIndex) * 2}ms`,
                    }}
                  ></div>
                );
              })}
            </div>
          ))}
        </div>
        
        {/* Day labels */}
        <div className="flex items-center gap-2 mt-2 ml-8 sm:ml-12 text-xs text-zinc-500">
          <span className="w-8">Mon</span>
          <span className="w-8">Wed</span>
          <span className="w-8">Fri</span>
        </div>

        {/* Stats summary */}
        <div className="grid grid-cols-3 gap-4 mt-6 pt-4 border-t border-zinc-200 dark:border-zinc-800">
          <div className="text-center">
            <div className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
              {stats.totalContributions}
            </div>
            <div className="text-xs text-zinc-500">Total Contributions</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
              {stats.activeDays}
            </div>
            <div className="text-xs text-zinc-500">Active Days</div>
          </div>
          <div className="text-center">
            <div className="text-2xl font-bold text-zinc-900 dark:text-zinc-100">
              {stats.maxStreak}
            </div>
            <div className="text-xs text-zinc-500">Longest Streak</div>
          </div>
        </div>

        {/* Legend */}
        {showLegend && (
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mt-6 pt-4 border-t border-zinc-200 dark:border-zinc-800">
            <div className="text-sm text-zinc-600 dark:text-zinc-400">
              Color intensity indicates contribution frequency
            </div>
            <div className="flex items-center justify-end gap-2 text-xs text-zinc-500">
              <span>Less</span>
              <div className="flex gap-1">
                <div className="w-3 h-3 rounded-[2px] bg-zinc-100 dark:bg-zinc-900/80"></div>
                <div className="w-3 h-3 rounded-[2px] bg-green-300 dark:bg-green-800"></div>
                <div className="w-3 h-3 rounded-[2px] bg-green-400 dark:bg-green-700"></div>
                <div className="w-3 h-3 rounded-[2px] bg-green-600 dark:bg-green-500"></div>
              </div>
              <span>More</span>
            </div>
          </div>
        )}
      </div>
      
      
    </section>
  );
};

export default GithubActivity;