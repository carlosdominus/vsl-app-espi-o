
import React from 'react';
import Header from './components/Header';
import VideoPlayer from './components/VideoPlayer';
import TechBackground from './components/TechBackground';

const App: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col items-center justify-start overflow-x-hidden bg-black selection:bg-[#e74c3c]/30">
      <TechBackground />
      
      <main className="relative z-10 w-full max-w-[500px] px-4 py-8 flex flex-col gap-6 md:gap-8">
        <Header />
        <VideoPlayer />
      </main>
    </div>
  );
};

export default App;
