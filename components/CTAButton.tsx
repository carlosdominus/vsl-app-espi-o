
import React from 'react';
import { Lock } from 'lucide-react';

const CTAButton: React.FC = () => {
  const handleClick = () => {
    window.open('https://checkout.exemplo.com', '_blank');
  };

  return (
    <div className="w-full px-2">
      <button 
        onClick={handleClick}
        className="w-full py-6 px-4 bg-[#2CA884] hover:bg-[#238a6d] text-white font-headline font-black text-xl md:text-2xl rounded-[20px] shadow-2xl shadow-[#2CA884]/30 animate-pulse-fast transition-all transform flex items-center justify-center gap-4 uppercase tracking-tight"
      >
        <Lock size={24} className="opacity-80" />
        QUERO DESCOBRIR A VERDADE AGORA
      </button>
    </div>
  );
};

export default CTAButton;
