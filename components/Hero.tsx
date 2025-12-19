
import React from 'react';
import { Gift, Zap, ShieldCheck, ChevronRight } from 'lucide-react';
import { Language, translations } from '../translations';

interface HeroProps {
  currentLang: Language;
}

const Hero: React.FC<HeroProps> = ({ currentLang }) => {
  const t = translations[currentLang];
  return (
    <div className="px-8 pt-8">
      <div className="relative w-full h-[540px] rounded-[52px] overflow-hidden shadow-2xl group border border-white/5 bg-[#141416]">
        {/* Background Decorative Pattern */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
        
        <img 
          src="https://i.ibb.co/rR9LrXYH/Chat-GPT-Image-Dec-19-2025-07-04-05-PM.png" 
          alt="Fortnite Banner" 
          className="absolute inset-0 w-full h-full object-cover group-hover:scale-[1.02] transition-transform duration-[3s] ease-out brightness-[0.5]"
        />
        
        {/* Festive Gradients */}
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80" />
        <div className="absolute inset-0 bg-gradient-to-r from-red-900/40 via-black/30 to-transparent" />

        {/* Santa Fortnite Character */}
        <div className="absolute right-0 bottom-0 h-full w-1/2 flex items-end justify-end pointer-events-none overflow-hidden">
          <img 
            src="https://fortnite-api.com/images/cosmetics/br/cid_301_athena_commando_m_santa/featured.png" 
            alt="Santa Fortnite" 
            className="h-[115%] w-auto object-contain translate-y-16 translate-x-16 brightness-125 drop-shadow-[0_20px_60px_rgba(239,68,68,0.4)] group-hover:translate-y-8 transition-transform duration-[2.5s] ease-out animate-float"
            style={{ animationDuration: '6s' }}
          />
        </div>

        <div className="relative z-10 h-full flex flex-col justify-center px-16 max-w-3xl">
          <div className="inline-flex items-center gap-2 bg-red-600 text-white px-5 py-2 rounded-full text-[11px] font-black tracking-[0.2em] mb-6 shadow-[0_10px_30px_rgba(239,68,68,0.3)] animate-pulse">
             CHRISTMAS SPECIAL
          </div>
          <h1 className="text-[100px] font-gaming font-black text-white mb-6 uppercase leading-[0.8] tracking-tighter italic drop-shadow-2xl">
            {t.winterVault.split(' ')[0]} <br />
            <span className="text-red-500 text-glow-red">{t.winterVault.split(' ').slice(1).join(' ')}</span>
          </h1>
          <p className="text-zinc-300 text-xl font-medium mb-12 max-w-lg leading-relaxed opacity-90 drop-shadow-lg">
            Uncover the rarest legacy skins and mythic weapons. Join over 4 million players in the ultimate Fortnite Christmas case experience.
          </p>
          <div className="flex gap-6 items-center">
            <button className="bg-red-600 hover:bg-red-500 text-white px-16 py-6 rounded-[32px] font-black text-sm uppercase transition-all transform hover:-translate-y-2 shadow-[0_20px_50px_rgba(239,68,68,0.3)] flex items-center gap-3 active:scale-95">
              {t.enterEvent}
              <ChevronRight className="w-5 h-5" />
            </button>
            <div className="flex flex-col justify-center border-l-2 border-white/10 pl-8">
              <span className="text-zinc-500 text-[10px] font-black uppercase tracking-[0.3em] mb-1">Ends In</span>
              <span className="text-white font-gaming text-4xl font-bold italic tracking-wider tabular-nums">17D 15:19:42</span>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {[
          { icon: Gift, title: t.dailyRewards, desc: 'Free cases every day for active players', color: 'red' },
          { icon: ShieldCheck, title: t.verifiedFair, desc: 'Secure blockchain-based drop algorithms', color: 'red' },
          { icon: Zap, title: t.instantDelivery, desc: 'Items sent to your epic locker instantly', color: 'red' }
        ].map((item, i) => (
          <div key={i} className="bg-[#141416]/40 border border-white/5 p-10 rounded-[48px] flex items-center gap-8 hover:bg-red-500/5 transition-all cursor-pointer group hover:-translate-y-2 shadow-xl hover:shadow-2xl">
            <div className="bg-zinc-800/40 p-6 rounded-[24px] group-hover:scale-110 transition-transform shadow-inner border border-white/5">
              <item.icon className={`w-9 h-9 text-red-500`} />
            </div>
            <div>
              <h3 className="font-gaming font-black text-2xl text-white tracking-wide uppercase italic leading-none mb-2 group-hover:text-red-500 transition-colors">{item.title}</h3>
              <p className="text-zinc-500 text-base font-medium leading-tight">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Hero;
