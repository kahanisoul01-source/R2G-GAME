
import React, { useEffect, useState } from 'react';
import { Drop, Rarity } from '../types';
import { FORTNITE_ITEMS, RARITY_COLORS } from '../constants';

const LiveDrops: React.FC = () => {
  const [drops, setDrops] = useState<Drop[]>([]);

  useEffect(() => {
    // Initial random drops
    const initialDrops = Array.from({ length: 20 }).map((_, i) => ({
      id: `drop-${i}`,
      user: `Player${Math.floor(Math.random() * 999)}`,
      item: FORTNITE_ITEMS[Math.floor(Math.random() * FORTNITE_ITEMS.length)],
      timestamp: Date.now()
    }));
    setDrops(initialDrops);

    // Simulate real-time drops
    const interval = setInterval(() => {
      setDrops(prev => {
        const newDrop = {
          id: `drop-${Date.now()}`,
          user: `Player${Math.floor(Math.random() * 999)}`,
          item: FORTNITE_ITEMS[Math.floor(Math.random() * FORTNITE_ITEMS.length)],
          timestamp: Date.now()
        };
        return [newDrop, ...prev.slice(0, 19)];
      });
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="h-28 bg-[#0a0a0c] border-b border-white/5 overflow-hidden relative flex items-center">
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#0a0a0c] to-transparent z-10" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#0a0a0c] to-transparent z-10" />
      
      <div className="flex items-center gap-3 px-6 whitespace-nowrap overflow-x-auto no-scrollbar">
        {drops.map((drop) => (
          <div 
            key={drop.id} 
            className="flex-shrink-0 w-24 h-24 glass rounded-lg flex flex-col items-center justify-center p-2 group cursor-pointer transition-transform hover:scale-105 relative overflow-hidden"
            style={{ borderBottom: `2px solid ${RARITY_COLORS[drop.item.rarity]}` }}
          >
            <div 
              className="absolute inset-0 opacity-10 group-hover:opacity-20 transition-opacity"
              style={{ backgroundColor: RARITY_COLORS[drop.item.rarity] }}
            />
            <img src={drop.item.image} alt={drop.item.name} className="w-12 h-12 object-contain relative z-10" />
            <span className="text-[10px] text-zinc-500 mt-1 truncate w-full text-center relative z-10">{drop.user}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default LiveDrops;
