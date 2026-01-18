
import React from 'react';

const TechBackground: React.FC = () => {
  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <div className="absolute inset-0 bg-black"></div>
      <div className="absolute inset-0 tech-grid opacity-20"></div>
      <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black"></div>
      
      {/* Dynamic light pulse (simulating a scanning line) */}
      <div className="absolute top-0 left-0 w-full h-1 bg-[#e74c3c]/10 blur-sm animate-[scan_8s_ease-in-out_infinite]"></div>
      
      <style>{`
        @keyframes scan {
          0% { top: -10%; }
          100% { top: 110%; }
        }
      `}</style>
    </div>
  );
};

export default TechBackground;
