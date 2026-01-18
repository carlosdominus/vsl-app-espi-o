
import React from 'react';
import { CheckCircle2 } from 'lucide-react';

const benefits = [
  'Histórico de Mensagens Apagadas',
  'Localização em Tempo Real',
  'Contatos Frequentes Ocultos'
];

const Benefits: React.FC = () => {
  return (
    <div className="flex flex-col gap-3">
      {benefits.map((benefit, index) => (
        <div 
          key={index} 
          className="flex items-center gap-4 p-4 bg-zinc-900/40 border border-white/5 rounded-lg backdrop-blur-sm"
        >
          <div className="flex-shrink-0 text-[#2CA884]">
            <CheckCircle2 size={24} />
          </div>
          <span className="text-gray-200 font-medium md:text-lg">
            {benefit}
          </span>
        </div>
      ))}
    </div>
  );
};

export default Benefits;
