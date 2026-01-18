
import React from 'react';
import { ShieldCheck, ShieldClose, LockIcon } from 'lucide-react';

const Footer: React.FC = () => {
  return (
    <footer className="w-full mt-auto py-10 flex flex-col items-center gap-6">
      {/* Security Seals */}
      <div className="flex items-center justify-center gap-6 text-gray-400 font-bold text-xs md:text-sm tracking-wide">
        <div className="flex items-center gap-1.5">
          <LockIcon size={14} /> SSL SECURE
        </div>
        <div className="h-4 w-[1px] bg-white/10"></div>
        <div className="flex items-center gap-1.5">
          <ShieldCheck size={14} /> NORTON
        </div>
        <div className="h-4 w-[1px] bg-white/10"></div>
        <div className="flex items-center gap-1.5">
          <ShieldClose size={14} /> MCAFEE
        </div>
      </div>
      
      <div className="text-center flex flex-col gap-2">
        <p className="text-[10px] text-gray-600 uppercase font-medium tracking-widest leading-loose max-w-xs mx-auto">
          © 2024 SISTEMA DE INVESTIGAÇÃO AVANÇADA - TODOS OS DIREITOS RESERVADOS
        </p>
        <div className="flex justify-center gap-6 text-[10px] text-gray-500 uppercase font-bold tracking-widest">
          <a href="#" className="hover:text-white transition-colors">TERMOS DE USO</a>
          <a href="#" className="hover:text-white transition-colors">PRIVACIDADE</a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
