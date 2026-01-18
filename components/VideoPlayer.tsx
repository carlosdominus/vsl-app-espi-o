
import React, { useEffect } from 'react';

const VideoPlayer: React.FC = () => {
  useEffect(() => {
    // Dynamically load the Converteai script
    const scriptId = "scr_69609019da723d6f8685b925";
    if (!document.getElementById(scriptId)) {
      const s = document.createElement("script");
      s.src = "https://scripts.converteai.net/853c4f04-8442-44da-b89d-0541d78036bb/players/69609019da723d6f8685b925/player.js";
      s.async = true;
      s.id = scriptId;
      document.head.appendChild(s);
    }
  }, []);

  return (
    <div className="video-container w-full max-w-md mx-auto overflow-hidden rounded-2xl border border-white/5 shadow-2xl">
      <div id="vid_69609019da723d6f8685b925" style={{ position: 'relative', width: '100%', padding: '125% 0 0' }}>
        <img 
          id="thumb_69609019da723d6f8685b925" 
          src="https://images.converteai.net/853c4f04-8442-44da-b89d-0541d78036bb/players/69609019da723d6f8685b925/thumbnail.jpg" 
          style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} 
          alt="thumbnail" 
        />
        <div 
          id="backdrop_69609019da723d6f8685b925" 
          style={{ WebkitBackdropFilter: 'blur(5px)', backdropFilter: 'blur(5px)', position: 'absolute', top: 0, height: '100%', width: '100%' }}
        ></div>
      </div>
    </div>
  );
};

export default VideoPlayer;
