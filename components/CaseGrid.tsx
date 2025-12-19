
import React from 'react';
import { 
  OG_LEGENDS_CASES, 
  SWEATY_SKINS_CASES, 
  MYTHIC_VAULT_CASES, 
  PICKAXE_FRENZY_CASES, 
  EMOTE_PACK_CASES,
  GLIDER_GALAXY_CASES,
  WRAP_COLLECTION_CASES,
  STARTER_PACK_CASES
} from '../constants';
import CaseCard from './CaseCard';
import { Language, translations } from '../translations';

interface CaseGridProps {
  currentLang: Language;
}

const CaseGrid: React.FC<CaseGridProps> = ({ currentLang }) => {
  const t = translations[currentLang];

  const sections = [
    { title: 'OG LEGENDS', cases: OG_LEGENDS_CASES },
    { title: 'SWEATY SKINS', cases: SWEATY_SKINS_CASES },
    { title: 'MYTHIC VAULT', cases: MYTHIC_VAULT_CASES },
    { title: 'PICKAXE FRENZY', cases: PICKAXE_FRENZY_CASES },
    { title: 'EMOTE PACK', cases: EMOTE_PACK_CASES },
    { title: 'GLIDER GALAXY', cases: GLIDER_GALAXY_CASES },
    { title: 'WRAP COLLECTION', cases: WRAP_COLLECTION_CASES },
    { title: 'STARTER PACKS', cases: STARTER_PACK_CASES },
  ];

  return (
    <div className="px-8 pb-20 mt-12 space-y-24">
      {/* Category Header */}
      <div className="flex items-center justify-between mb-12">
        <div className="flex items-center gap-4">
          <h2 className="text-4xl font-gaming font-black uppercase tracking-tight italic">{t.mainCases}</h2>
          <div className="h-0.5 w-16 bg-red-600 rounded-full shadow-[0_0_15px_rgba(239,68,68,0.6)]" />
        </div>
        <div className="flex gap-3">
          {['All', 'New', 'Hot', 'Lucky'].map((cat) => (
            <button 
              key={cat} 
              className={`px-8 py-2.5 rounded-2xl text-[11px] font-black uppercase transition-all tracking-widest ${cat === 'All' ? 'bg-red-600 text-white shadow-xl shadow-red-500/30' : 'bg-zinc-900 text-zinc-500 hover:text-white border border-white/5'}`}
            >
              {cat}
            </button>
          ))}
        </div>
      </div>

      {sections.map((section, idx) => (
        <section key={idx} className="animate-in fade-in slide-in-from-bottom-4 duration-1000" style={{ animationDelay: `${idx * 100}ms` }}>
          <div className="flex items-center gap-6 mb-10">
            <h3 className="text-2xl font-gaming font-black text-white uppercase tracking-widest italic">{section.title}</h3>
            <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
            <span className="text-zinc-600 font-bold text-xs uppercase tracking-widest">{section.cases.length} ITEMS</span>
          </div>
          
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 2xl:grid-cols-8 gap-6 md:gap-8">
            {section.cases.map((c) => (
              <CaseCard key={c.id} caseData={c} onClick={() => console.log('Open case', c.id)} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

export default CaseGrid;
