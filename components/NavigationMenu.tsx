
import React from 'react';
import { X, User, Users, Hash, Swords, TrendingUp, RefreshCw, FileText, Gift, Box, MessageSquare, BookOpen, ShieldCheck } from 'lucide-react';
import { Language, translations } from '../translations';

interface NavigationMenuProps {
  isOpen: boolean;
  onClose: () => void;
  onLogin: () => void;
  isLoggedIn: boolean;
  currentLang: Language;
  onSetView: (view: string) => void;
}

const NavigationMenu: React.FC<NavigationMenuProps> = ({ isOpen, onClose, onLogin, isLoggedIn, currentLang, onSetView }) => {
  const t = translations[currentLang];

  if (!isOpen) return null;

  const navigate = (view: string) => {
    onSetView(view);
    onClose();
  };

  return (
    <div className="fixed inset-0 z-[130] bg-[#0d0d0f]/95 backdrop-blur-xl overflow-y-auto animate-in fade-in duration-300">
      <div className="max-w-4xl mx-auto px-6 py-12">
        <div className="flex justify-end mb-12">
          {!isLoggedIn && (
            <button 
              onClick={onLogin}
              className="mr-6 flex items-center gap-3 border border-green-500/30 bg-green-500/10 hover:bg-green-500/20 text-green-500 px-6 py-2 rounded-xl text-sm font-bold uppercase transition-all"
            >
              <img src="https://www.google.com/favicon.ico" className="w-4 h-4 brightness-150" alt="G" />
              {t.loginGoogle}
            </button>
          )}
          <button onClick={onClose} className="p-3 bg-zinc-900 rounded-xl hover:bg-zinc-800 transition-colors">
            <X className="w-6 h-6 text-white" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <section>
            <h3 className="text-zinc-600 font-bold text-xs uppercase tracking-[0.2em] mb-8">ACCOUNT & CODES</h3>
            <div className="space-y-4">
              <MenuButton onClick={() => navigate('account')} icon={User} label={t.myAccount} />
              <MenuButton onClick={() => navigate('affiliate')} icon={Users} label={t.affiliate} />
              <MenuButton onClick={() => navigate('use-code')} icon={Hash} label={t.useCode} />
            </div>
          </section>

          <section>
            <h3 className="text-zinc-600 font-bold text-xs uppercase tracking-[0.2em] mb-8">GAMES</h3>
            <div className="grid grid-cols-2 gap-4">
              <GameButton onClick={() => navigate('battles')} icon={Swords} label={t.caseBattle} color="green" />
              <GameButton onClick={() => navigate('upgrader')} icon={RefreshCw} label={t.upgrader} color="blue" />
              <GameButton onClick={() => navigate('skin-changer')} icon={TrendingUp} label={t.skinChanger} color="pink" />
              <GameButton onClick={() => navigate('contracts')} icon={FileText} label={t.contracts} color="purple" />
              <GameButton onClick={() => navigate('giveaways')} icon={Gift} label={t.giveaways} color="orange" />
              <GameButton onClick={() => navigate('daily')} icon={Box} label={t.dailyCase} color="gray" />
            </div>
          </section>

          <section>
            <h3 className="text-zinc-600 font-bold text-xs uppercase tracking-[0.2em] mb-8">OTHER</h3>
            <div className="space-y-4">
              <MenuButton onClick={() => navigate('support')} icon={MessageSquare} label={t.support} />
              <MenuButton onClick={() => navigate('blog')} icon={BookOpen} label={t.blog} />
              <MenuButton onClick={() => navigate('fairplay')} icon={ShieldCheck} label={t.fairPlay} />
            </div>
          </section>
        </div>

        <div className="mt-20">
           <div onClick={() => navigate('event')} className="relative w-full h-40 rounded-3xl overflow-hidden cursor-pointer group">
              <img src="https://i.ibb.co/L7PqS4f/fortnite-event.jpg" alt="Event" className="absolute inset-0 w-full h-full object-cover brightness-75 group-hover:scale-105 transition-transform duration-700" />
              <div className="absolute inset-0 bg-gradient-to-r from-black/80 to-transparent flex flex-col justify-center px-8">
                <h2 className="text-4xl font-gaming font-black text-white italic">SILENT NIGHT</h2>
              </div>
           </div>
           
           {!isLoggedIn && (
             <button 
               onClick={onLogin}
               className="w-full mt-12 flex items-center justify-center gap-4 border border-green-500/40 bg-green-500/10 hover:bg-green-500/20 text-green-500 py-6 rounded-2xl text-lg font-bold uppercase transition-all shadow-xl shadow-green-500/5"
             >
                <img src="https://www.google.com/favicon.ico" className="w-6 h-6 brightness-150" alt="G" />
                {t.loginGoogle}
             </button>
           )}
        </div>
      </div>
    </div>
  );
};

const MenuButton = ({ icon: Icon, label, onClick }: { icon: any, label: string, onClick: () => void }) => (
  <button onClick={onClick} className="w-full bg-zinc-900/50 hover:bg-zinc-800 border border-white/5 flex items-center gap-4 px-6 py-4 rounded-2xl transition-all group">
    <Icon className="w-5 h-5 text-zinc-500 group-hover:text-white transition-colors" />
    <span className="text-sm font-bold text-zinc-300 group-hover:text-white">{label}</span>
  </button>
);

const GameButton = ({ icon: Icon, label, color, onClick }: { icon: any, label: string, color: string, onClick: () => void }) => {
  const colors: Record<string, string> = {
    green: 'text-green-500 bg-green-500/10 border-green-500/20',
    blue: 'text-blue-500 bg-blue-500/10 border-blue-500/20',
    pink: 'text-pink-500 bg-pink-500/10 border-pink-500/20',
    purple: 'text-purple-500 bg-purple-500/10 border-purple-500/20',
    orange: 'text-orange-500 bg-orange-500/10 border-orange-500/20',
    gray: 'text-zinc-500 bg-zinc-500/10 border-zinc-500/20'
  };
  return (
    <button onClick={onClick} className={`flex flex-col items-center justify-center gap-2 p-6 rounded-2xl border transition-all hover:-translate-y-1 bg-zinc-900/50 hover:bg-zinc-800 ${colors[color] || colors.gray}`}>
      <Icon className="w-6 h-6" />
      <span className="text-[10px] font-black uppercase tracking-widest leading-none text-center">{label}</span>
    </button>
  );
};

export default NavigationMenu;
