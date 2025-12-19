
import React from 'react';
import { Settings, Menu, PlusCircle } from 'lucide-react';
import { Language, translations } from '../translations';

interface NavbarProps {
  onOpenSettings: () => void;
  onOpenMenu: () => void;
  isLoggedIn: boolean;
  onLogin: () => void;
  currentLang: Language;
  onSetView: (view: string) => void;
}

const Navbar: React.FC<NavbarProps> = ({ onOpenSettings, onOpenMenu, isLoggedIn, onLogin, currentLang, onSetView }) => {
  const t = translations[currentLang];

  return (
    <nav className="sticky top-0 z-50 h-20 bg-[#0d0d0f]/90 backdrop-blur-md border-b border-white/5 flex items-center justify-between px-8">
      <div className="flex items-center gap-10">
        <a href="#/" onClick={() => onSetView('home')} className="flex items-center gap-2 shrink-0 group relative">
          <img src="https://i.ibb.co/d4HMs3Bm/image.png" alt="R2G" className="h-10 w-auto transition-transform group-hover:scale-110" />
          <span className="font-gaming text-2xl font-black tracking-tighter text-white">R2G</span>
        </a>

        <div className="hidden lg:flex items-center gap-8 text-[11px] font-black uppercase tracking-[0.15em] text-zinc-500">
          <button onClick={() => onSetView('free')} className="flex items-center gap-2 hover:text-white transition-colors"><PlusCircle className="w-3.5 h-3.5" /> {t.getFree}</button>
          <button onClick={() => onSetView('giveaways')} className="hover:text-white transition-colors">{t.giveaways}</button>
          <button onClick={() => onSetView('skin-changer')} className="hover:text-white transition-colors">{t.skinChanger}</button>
          <button onClick={() => onSetView('upgrader')} className="hover:text-white transition-colors">{t.upgrader}</button>
          <button onClick={() => onSetView('battles')} className="hover:text-white transition-colors">
            {t.caseBattle} <span className="bg-zinc-800 px-1.5 py-0.5 rounded ml-1 text-[9px] text-zinc-400">31</span>
          </button>
        </div>
      </div>

      <div className="flex items-center gap-4">
        {isLoggedIn ? (
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 bg-zinc-900 rounded-2xl pl-5 pr-1 py-1.5 border border-white/5 shadow-inner">
              <span className="text-sm font-black text-yellow-500">$1,240.50</span>
              <button className="bg-yellow-500 hover:bg-yellow-400 text-black rounded-xl p-2 transition-all shadow-lg shadow-yellow-500/10">
                <PlusCircle className="w-4 h-4" />
              </button>
            </div>
            <div onClick={() => onSetView('account')} className="w-11 h-11 rounded-2xl bg-zinc-800 border border-zinc-700 p-0.5 cursor-pointer hover:border-zinc-500 transition-all">
              <img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Lucky" className="w-full h-full rounded-[14px]" alt="Profile" />
            </div>
          </div>
        ) : (
          <button 
            onClick={onLogin}
            className="flex items-center gap-2 border border-green-500/40 bg-green-500/10 hover:bg-green-500/20 text-green-500 px-6 py-2.5 rounded-2xl text-xs font-black uppercase transition-all tracking-wider shadow-lg shadow-green-500/5"
          >
            <img src="https://www.google.com/favicon.ico" className="w-4 h-4 brightness-150" alt="G" />
            {t.loginGoogle}
          </button>
        )}

        <div className="flex gap-2">
          <button 
            onClick={onOpenSettings}
            className="p-3 bg-zinc-900 rounded-2xl border border-white/5 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all"
          >
            <Settings className="w-5 h-5" />
          </button>
          <button 
            onClick={onOpenMenu}
            className="p-3 bg-zinc-900 rounded-2xl border border-white/5 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all"
          >
            <Menu className="w-5 h-5" />
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
