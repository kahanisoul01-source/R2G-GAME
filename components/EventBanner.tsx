
import React from 'react';
import { ChevronDown } from 'lucide-react';
import { Language, translations } from '../translations';

interface EventBannerProps {
  currentLang: Language;
}

const EventBanner: React.FC<EventBannerProps> = ({ currentLang }) => {
  const t = translations[currentLang];
  
  const eventCases = [
    { name: 'SANTAS BAG', price: 1.00, img: 'https://fortnite-api.com/images/cosmetics/br/cid_301_athena_commando_m_santa/featured.png', color: 'bg-red-500/20' },
    { name: 'MISTLETOE', price: 2.50, img: 'https://fortnite-api.com/images/cosmetics/br/cid_639_athena_commando_f_winterholiday/featured.png', color: 'bg-green-500/20' },
    { name: 'FROSTBITE', price: 5.00, img: 'https://fortnite-api.com/images/cosmetics/br/cid_285_athena_commando_m_arcticice/featured.png', color: 'bg-blue-500/20' },
    { name: 'BLIZZARD', price: 20.00, img: 'https://fortnite-api.com/images/cosmetics/br/cid_984_athena_commando_f_snowfall_6f8g2/featured.png', color: 'bg-cyan-500/20' },
    { name: 'NORTH POLE', price: 60.00, img: 'https://fortnite-api.com/images/cosmetics/br/cid_294_athena_commando_f_banditwinter/featured.png', color: 'bg-yellow-500/20' },
    { name: 'LEGACY WINTER', price: 250.00, img: 'https://fortnite-api.com/images/cosmetics/br/cid_010_athena_commando_m_snow_01/featured.png', color: 'bg-purple-500/20' },
  ];

  return (
    <div className="px-8 mt-16">
      <div className="flex items-center justify-between mb-8">
        <div className="flex items-center gap-6">
          <h2 className="text-2xl font-gaming font-black uppercase tracking-tight italic">
            {t.eventCases} <span className="text-zinc-600 ml-4 font-inter font-medium not-italic">- 17 DAYS 15:19:42</span>
          </h2>
        </div>
        <button className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors text-xs font-black uppercase tracking-widest">
          {t.hide} <ChevronDown className="w-4 h-4" />
        </button>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-6">
        {eventCases.map((c, i) => (
          <div key={i} className="group cursor-pointer relative rounded-[32px] overflow-hidden aspect-[4/5] bg-zinc-900 border border-white/5 transition-all duration-500 hover:scale-[1.05] hover:border-white/20 hover:shadow-[0_20px_40px_rgba(0,0,0,0.4)]">
             {/* Rarity Background Glow */}
             <div className={`absolute inset-0 opacity-40 group-hover:opacity-60 transition-opacity ${c.color}`} />
             
             <img 
               src={c.img} 
               alt={c.name}
               className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 brightness-75 group-hover:brightness-90" 
             />
             
             <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent p-6 flex flex-col justify-end">
                <div className="bg-yellow-500 text-black self-end px-3 py-1 rounded-lg font-black text-[10px] mb-2 shadow-lg">
                  ${c.price.toFixed(2)}
                </div>
                <h4 className="font-gaming font-black text-white text-lg italic tracking-wide group-hover:text-yellow-500 transition-colors uppercase leading-tight">
                  {c.name}
                </h4>
             </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EventBanner;
