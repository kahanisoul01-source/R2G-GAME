
import React from 'react';
import { Case } from '../types';

interface CaseCardProps {
  caseData: Case;
  onClick: () => void;
}

const CaseCard: React.FC<CaseCardProps> = ({ caseData, onClick }) => {
  return (
    <div 
      onClick={onClick}
      className="group cursor-pointer bg-[#141416]/40 border border-white/5 rounded-[32px] p-8 relative overflow-hidden transition-all duration-500 hover:bg-[#1a1a1e]/80 hover:border-yellow-500/30 hover:shadow-[0_30px_60px_rgba(0,0,0,0.5)] case-card-hover"
    >
      {caseData.tag && (
        <div className="absolute top-6 left-6 z-20">
          <span className="bg-yellow-500 text-black text-[10px] font-black px-3 py-1 rounded-lg uppercase tracking-widest shadow-lg">
            {caseData.tag}
          </span>
        </div>
      )}
      
      <div className="relative z-10 flex flex-col items-center">
        <div className="w-full aspect-square mb-8 relative">
          {/* Enhanced Glow Effect */}
          <div className="absolute inset-0 bg-yellow-500/5 blur-[60px] rounded-full scale-50 group-hover:scale-110 transition-transform duration-700" />
          <img 
            src={caseData.image} 
            alt={caseData.name} 
            className="w-full h-full object-contain case-img transition-transform duration-700 ease-out z-10 relative drop-shadow-[0_10px_30px_rgba(0,0,0,0.5)]" 
          />
        </div>
        
        <h3 className="font-gaming text-2xl font-black text-white mb-3 uppercase tracking-tight italic group-hover:text-yellow-500 transition-colors">
          {caseData.name}
        </h3>
        
        <div className="bg-zinc-900/80 border border-white/10 px-6 py-2.5 rounded-2xl group-hover:bg-yellow-500 group-hover:border-yellow-500 transition-all duration-300 shadow-inner group-hover:shadow-lg">
          <span className="text-base font-black text-zinc-400 group-hover:text-black transition-colors tabular-nums">
            ${caseData.price.toFixed(2)}
          </span>
        </div>
      </div>
      
      {/* Decorative gradient corners */}
      <div className="absolute -bottom-10 -right-10 w-32 h-32 bg-yellow-500/5 rounded-full blur-2xl group-hover:bg-yellow-500/10 transition-colors" />
    </div>
  );
};

export default CaseCard;
