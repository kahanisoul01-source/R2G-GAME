
import React, { useState, useEffect } from 'react';
import { Twitter, Instagram, Youtube, Send, ShieldCheck, CreditCard, ChevronRight, MessageSquare, Monitor, Users, Box, TrendingUp, Swords } from 'lucide-react';
import Navbar from './components/Navbar';
import LiveDrops from './components/LiveDrops';
import Sidebar from './components/Sidebar';
import Hero from './components/Hero';
import CaseGrid from './components/CaseGrid';
import EventBanner from './components/EventBanner';
import SettingsModal from './components/SettingsModal';
import NavigationMenu from './components/NavigationMenu';
import { Language } from './translations';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [language, setLanguage] = useState<Language>('en');
  const [view, setView] = useState('home');

  // Dynamic Statistics State
  const [stats, setStats] = useState({
    online: 6807,
    users: 13737728,
    cases: 546998827,
    upgrades: 166007649,
    battles: 51335488
  });

  useEffect(() => {
    const timer = setInterval(() => {
      setStats(prev => ({
        online: prev.online + (Math.random() > 0.5 ? 1 : -1) * Math.floor(Math.random() * 5),
        users: prev.users + (Math.random() > 0.8 ? 1 : 0),
        cases: prev.cases + Math.floor(Math.random() * 3),
        upgrades: prev.upgrades + (Math.random() > 0.4 ? 1 : 0),
        battles: prev.battles + (Math.random() > 0.7 ? 1 : 0)
      }));
    }, 2000);
    return () => clearInterval(timer);
  }, []);

  const formatNum = (num: number) => new Intl.NumberFormat().format(num);

  const handleLogin = () => {
    setIsLoggedIn(true);
    setIsMenuOpen(false);
  };

  const handleSetView = (newView: string) => {
    setView(newView);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#0d0d0f] flex flex-col overflow-x-hidden font-inter selection:bg-red-600 selection:text-white transition-colors duration-500">
      
      <SettingsModal 
        isOpen={isSettingsOpen} 
        onClose={() => setIsSettingsOpen(false)} 
        currentLang={language}
        onSetLang={setLanguage}
      />
      
      <NavigationMenu 
        isOpen={isMenuOpen} 
        onClose={() => setIsMenuOpen(false)} 
        onLogin={handleLogin}
        isLoggedIn={isLoggedIn}
        currentLang={language}
        onSetView={handleSetView}
      />

      <LiveDrops />
      
      <Navbar 
        onOpenSettings={() => setIsSettingsOpen(true)}
        onOpenMenu={() => setIsMenuOpen(true)}
        isLoggedIn={isLoggedIn}
        onLogin={handleLogin}
        currentLang={language}
        onSetView={handleSetView}
      />

      <div className="flex flex-1 relative">
        <Sidebar currentView={view} onSetView={handleSetView} />

        <main className="flex-1 overflow-y-auto custom-scrollbar relative z-10">
          <div className="max-w-full mx-auto pb-0">
            {view === 'home' || view === 'event' ? (
              <div className="animate-in fade-in duration-700">
                <Hero currentLang={language} />
                <EventBanner currentLang={language} />
                <CaseGrid currentLang={language} />
              </div>
            ) : (
              <div className="p-20 text-center animate-in fade-in slide-in-from-bottom-10 duration-500">
                <div className="inline-block p-12 bg-[#141416]/60 rounded-[56px] border border-white/10 shadow-[0_50px_100px_rgba(0,0,0,0.5)] backdrop-blur-2xl">
                   <h1 className="text-7xl font-gaming font-black uppercase text-white mb-6 italic tracking-tighter">
                    {view.replace('-', ' ')}
                  </h1>
                   <p className="text-zinc-400 text-xl mb-12 font-medium opacity-80 leading-relaxed">This module is currently in development. <br/>Check back soon for the ultimate Fortnite experience.</p>
                  <button 
                    onClick={() => setView('home')}
                    className="bg-red-600 hover:bg-red-500 text-white px-16 py-6 rounded-2xl font-black uppercase transition-all shadow-2xl shadow-red-500/30 active:scale-95 transform hover:-translate-y-1"
                  >
                    Back to Home
                  </button>
                </div>
              </div>
            )}
            
            {/* Dynamic Statistics Section */}
            <div className="w-full bg-[#0d0d0f] border-y border-white/5 py-16 mt-32">
              <div className="max-w-[1920px] mx-auto px-12">
                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-12 text-center">
                  {[
                    { icon: Monitor, label: 'Online', value: stats.online, color: 'text-green-500' },
                    { icon: Users, label: 'Users', value: stats.users, color: 'text-blue-500' },
                    { icon: Box, label: 'Opened Cases', value: stats.cases, color: 'text-yellow-500' },
                    { icon: TrendingUp, label: 'Upgrades', value: stats.upgrades, color: 'text-purple-500' },
                    { icon: Swords, label: 'Case Battles', value: stats.battles, color: 'text-red-500' },
                  ].map((stat, i) => (
                    <div key={i} className="flex flex-col items-center group cursor-default">
                      <div className={`p-4 rounded-[20px] bg-white/5 border border-white/5 mb-4 group-hover:scale-110 transition-transform duration-500 ${stat.color}`}>
                        <stat.icon className="w-6 h-6" />
                      </div>
                      <span className="text-[10px] font-black uppercase tracking-[0.2em] text-zinc-600 mb-1">{stat.label}</span>
                      <span className="text-3xl font-gaming font-black text-white italic tracking-tight tabular-nums animate-in fade-in duration-300">
                        {formatNum(stat.value)}
                      </span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Smaller Compact Footer */}
            <footer className="border-t border-white/5 bg-[#0a0a0c]/90 backdrop-blur-xl w-full">
              <div className="max-w-[1920px] mx-auto px-12 py-16">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
                  
                  {/* Brand Section */}
                  <div className="lg:col-span-4">
                    <div className="flex items-center gap-4 mb-6 group cursor-pointer" onClick={() => handleSetView('home')}>
                      <img src="https://i.ibb.co/d4HMs3Bm/image.png" alt="R2G" className="h-14 w-auto transition-transform group-hover:scale-105 duration-500" />
                      <span className="font-gaming text-5xl font-black text-white italic tracking-tighter group-hover:text-red-500 transition-colors">R2G</span>
                    </div>
                    <p className="text-zinc-500 text-base leading-relaxed max-w-sm font-medium mb-8">
                      The premier destination for the Fortnite community. Secure case openings, rare collectibles, and a transparent gaming environment.
                    </p>
                    
                    <div className="flex gap-4">
                      {[
                        { icon: Twitter, color: 'hover:bg-sky-500/10 hover:text-sky-500' },
                        { icon: Instagram, color: 'hover:bg-pink-500/10 hover:text-pink-500' },
                        { icon: Youtube, color: 'hover:bg-red-500/10 hover:text-red-500' },
                        { icon: MessageSquare, color: 'hover:bg-indigo-500/10 hover:text-indigo-400' }
                      ].map((social, i) => (
                        <button key={i} className={`w-12 h-12 rounded-xl bg-white/5 border border-white/5 flex items-center justify-center text-zinc-400 transition-all transform hover:-translate-y-1 ${social.color}`}>
                          <social.icon className="w-5 h-5" />
                        </button>
                      ))}
                    </div>
                  </div>

                  {/* Links Sections */}
                  <div className="lg:col-span-5 grid grid-cols-2 sm:grid-cols-3 gap-12">
                    {[
                      { title: 'Information', links: ['About Us', 'Contact', 'Blog', 'News'] },
                      { title: 'Legal', links: ['Privacy Policy', 'Terms', 'AML Policy', 'Cookies'] },
                      { title: 'Support', links: ['Help Center', 'Partners', 'Affiliate', 'FAQ'] }
                    ].map((col) => (
                      <div key={col.title}>
                        <h4 className="font-gaming text-[11px] font-black text-zinc-600 mb-6 uppercase tracking-[0.3em]">{col.title}</h4>
                        <ul className="space-y-4">
                          {col.links.map((link) => (
                            <li key={link}>
                              <button onClick={() => handleSetView(link.toLowerCase())} className="text-zinc-500 hover:text-red-500 text-sm font-bold transition-all uppercase tracking-wide flex items-center group">
                                <span className="w-0 group-hover:w-4 overflow-hidden transition-all duration-300 text-red-500">
                                  <ChevronRight className="w-3 h-3" />
                                </span>
                                {link}
                              </button>
                            </li>
                          ))}
                        </ul>
                      </div>
                    ))}
                  </div>

                  {/* Trust Section */}
                  <div className="lg:col-span-3 flex flex-col items-start lg:items-end">
                    <h4 className="font-gaming text-[11px] font-black text-zinc-600 mb-6 uppercase tracking-[0.3em]">Security</h4>
                    <div className="space-y-4 w-full max-w-[280px]">
                      <div className="flex items-center gap-4 bg-white/5 border border-white/5 rounded-2xl p-5 group hover:border-green-500/30 transition-all">
                        <ShieldCheck className="w-8 h-8 text-green-500" />
                        <div>
                          <p className="text-white text-sm font-black uppercase italic leading-none mb-1">Provably Fair</p>
                          <p className="text-zinc-600 text-[10px] font-bold uppercase tracking-widest">Verified</p>
                        </div>
                      </div>
                      <div className="flex items-center gap-4 bg-white/5 border border-white/5 rounded-2xl p-5 group hover:border-red-500/30 transition-all">
                        <CreditCard className="w-8 h-8 text-red-500" />
                        <div>
                          <p className="text-white text-sm font-black uppercase italic leading-none mb-1">Secure Pay</p>
                          <p className="text-zinc-600 text-[10px] font-bold uppercase tracking-widest">SSL Safe</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Bottom Bar */}
                <div className="mt-16 pt-10 border-t border-white/5 flex flex-col xl:flex-row items-center justify-between gap-8">
                  <div className="text-zinc-600 text-[11px] font-bold uppercase tracking-[0.15em] text-center xl:text-left">
                    © 2025 R2G Skins. Not affiliated with Epic Games, Inc.
                  </div>
                  
                  <div className="flex flex-wrap items-center justify-center gap-10 grayscale opacity-20 hover:opacity-100 hover:grayscale-0 transition-all duration-700">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png" className="h-3 w-auto" alt="Visa" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" className="h-5 w-auto" alt="Mastercard" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/1200px-PayPal.svg.png" className="h-3 w-auto" alt="Paypal" />
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png" className="h-4 w-auto" alt="Bitcoin" />
                  </div>
                </div>
              </div>
            </footer>
          </div>
        </main>
      </div>
    </div>
  );
};

export default App;
