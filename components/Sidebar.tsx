
import React from 'react';
import { Home, Swords, TrendingUp, RotateCcw, Gift, Trophy } from 'lucide-react';

interface SidebarProps {
  currentView: string;
  onSetView: (view: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ currentView, onSetView }) => {
  const menuItems = [
    { icon: Home, label: 'home', id: 'home' },
    { icon: Swords, label: 'battles', id: 'battles' },
    { icon: TrendingUp, label: 'upgrader', id: 'upgrader' },
    { icon: RotateCcw, label: 'contracts', id: 'contracts' },
    { icon: Gift, label: 'free', id: 'free' },
    { icon: Trophy, label: 'leaderboard', id: 'leaderboard' },
  ];

  return (
    <aside className="hidden lg:flex flex-col w-[88px] h-[calc(100vh-80px)] bg-[#0d0d0f] border-r border-white/5 sticky top-20 shrink-0 py-8 px-2 overflow-y-auto no-scrollbar items-center">
      <div className="flex flex-col gap-3 w-full items-center">
        {/* Info Indicator */}
        <div className="flex flex-col items-center gap-1 mb-6 text-yellow-500 cursor-pointer hover:opacity-80 transition-opacity">
           <div className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
           <div className="w-1.5 h-6 bg-yellow-500/20 rounded-full" />
        </div>
        
        {menuItems.map((item) => {
          const isActive = currentView === item.id;
          return (
            <button 
              key={item.id}
              onClick={() => onSetView(item.id)}
              title={item.label}
              className={`w-16 h-16 flex items-center justify-center rounded-[24px] transition-all duration-300 relative group ${
                isActive 
                  ? 'bg-yellow-500/10 border border-yellow-500/40 text-yellow-500 shadow-[0_0_20px_rgba(234,179,8,0.1)]' 
                  : 'text-zinc-600 hover:text-zinc-300 hover:bg-white/5'
              }`}
            >
              <item.icon className={`w-7 h-7 transition-all ${isActive ? 'scale-110 drop-shadow-[0_0_5px_rgba(234,179,8,0.5)]' : ''}`} />
              {isActive && (
                <div className="absolute left-0 w-1 h-6 bg-yellow-500 rounded-r-full" />
              )}
            </button>
          );
        })}
      </div>

      <div className="mt-auto pt-8 flex flex-col items-center gap-6">
        <div className="text-[10px] font-black text-zinc-800 uppercase vertical-text tracking-[0.4em] cursor-default select-none">
           ONLINE
        </div>
        <div className="flex flex-col items-center gap-1">
          <div className="w-12 h-12 rounded-2xl bg-[#141416] border border-white/5 flex items-center justify-center text-[10px] font-black text-white shadow-inner">
            4,281
          </div>
          <div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.6)] animate-pulse" />
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
