
import React from 'react';
import { ShieldAlert } from 'lucide-react';

const Header: React.FC = () => {
  return (
    <header className="text-center flex flex-col items-center gap-6">
      {/* Restricted Access Badge */}
      <div className="inline-flex items-center gap-2 px-6 py-2 border border-[#601414] bg-[#1a0808] rounded-full">
        <ShieldAlert size={16} className="text-[#e74c3c]" />
        <span className="text-[#e74c3c] text-xs font-bold tracking-widest uppercase">
          ACESSO RESTRITO - RELATÓRIO DE RISCO
        </span>
      </div>

      <h1 className="font-headline font-black text-3xl md:text-4xl lg:text-5xl leading-[1.1] uppercase tracking-tighter text-white">
        ASSISTA ATÉ O FINAL E DESCUBRA COMO AGIR E O QUE <span className="text-[#e74c3c]">ELE ESTÁ ESCONDENDO</span> DE VOCÊ
      </h1>
    </header>
  );
};

export default Header;
