import React, { useState, useEffect, useMemo } from 'react';
import ReactDOM from 'react-dom/client';
import { 
  Settings, Menu, PlusCircle, Gift, Zap, ShieldCheck, ChevronRight, 
  Twitter, Instagram, Youtube, Send, MessageSquare, Monitor, Users, 
  Box, TrendingUp, Swords, Home, RotateCcw, Trophy, X, Check, HelpCircle, 
  ChevronDown, User, Hash, RefreshCw, FileText, BookOpen, CreditCard,
  Lock, Globe, ExternalLink, Mail, Phone, MapPin
} from 'lucide-react';

// --- TYPES ---
enum Rarity {
  COMMON = 'COMMON',
  UNCOMMON = 'UNCOMMON',
  RARE = 'RARE',
  EPIC = 'EPIC',
  LEGENDARY = 'LEGENDARY',
  MYTHIC = 'MYTHIC'
}

interface FortniteItem {
  id: string;
  name: string;
  rarity: Rarity;
  image: string;
  price?: number;
}

interface Case {
  id: string;
  name: string;
  price: number;
  image: string;
  items: FortniteItem[];
  tag?: string;
}

interface Drop {
  id: string;
  user: string;
  item: FortniteItem;
  timestamp: number;
}

// --- CONSTANTS ---
const RARITY_COLORS: Record<string, string> = {
  [Rarity.COMMON]: '#94a3b8',
  [Rarity.UNCOMMON]: '#22c55e',
  [Rarity.RARE]: '#3b82f6',
  [Rarity.EPIC]: '#a855f7',
  [Rarity.LEGENDARY]: '#f97316',
  [Rarity.MYTHIC]: '#eab308'
};

const FORTNITE_ITEMS: FortniteItem[] = [
  { id: 's1', name: 'Renegade Raider', rarity: Rarity.MYTHIC, image: 'https://fortnite-api.com/images/cosmetics/br/cid_028_athena_commando_f_retro/icon.png', price: 1500.00 },
  { id: 's2', name: 'Black Knight', rarity: Rarity.LEGENDARY, image: 'https://fortnite-api.com/images/cosmetics/br/cid_035_athena_commando_m_medieval/icon.png', price: 850.00 },
  { id: 's3', name: 'Crystal', rarity: Rarity.UNCOMMON, image: 'https://fortnite-api.com/images/cosmetics/br/cid_440_athena_commando_f_cyberpunk_c/icon.png', price: 15.00 },
  { id: 's4', name: 'Aura', rarity: Rarity.UNCOMMON, image: 'https://fortnite-api.com/images/cosmetics/br/cid_407_athena_commando_f_treasurehunterfashion/icon.png', price: 12.00 },
  { id: 's5', name: 'Midas', rarity: Rarity.LEGENDARY, image: 'https://fortnite-api.com/images/cosmetics/br/cid_694_athena_commando_m_goldenSkeleton/icon.png', price: 250.00 },
  { id: 's6', name: 'Skull Trooper', rarity: Rarity.EPIC, image: 'https://fortnite-api.com/images/cosmetics/br/cid_030_athena_commando_m_halloween/icon.png', price: 400.00 },
  { id: 's7', name: 'Travis Scott', rarity: Rarity.MYTHIC, image: 'https://fortnite-api.com/images/cosmetics/br/cid_733_athena_commando_m_cyclone/icon.png', price: 1200.00 },
  { id: 's8', name: 'Drift', rarity: Rarity.LEGENDARY, image: 'https://fortnite-api.com/images/cosmetics/br/cid_161_athena_commando_m_drift/icon.png', price: 350.00 },
  { id: 's9', name: 'Wildcat', rarity: Rarity.EPIC, image: 'https://fortnite-api.com/images/cosmetics/br/cid_889_athena_commando_f_skater_c/icon.png', price: 2000.00 },
  { id: 's10', name: 'Galaxy', rarity: Rarity.MYTHIC, image: 'https://fortnite-api.com/images/cosmetics/br/cid_175_athena_commando_m_celestial/icon.png', price: 2500.00 },
  { id: 's11', name: 'Ikonik', rarity: Rarity.EPIC, image: 'https://fortnite-api.com/images/cosmetics/br/cid_371_athena_commando_m_kpop/icon.png', price: 900.00 },
  { id: 's12', name: 'Pink Ghoul', rarity: Rarity.LEGENDARY, image: 'https://fortnite-api.com/images/cosmetics/br/cid_029_athena_commando_f_halloween/icon.png', price: 1800.00 },
  { id: 'p1', name: 'Candy Axe', rarity: Rarity.EPIC, image: 'https://fortnite-api.com/images/cosmetics/br/pickaxe_id_133_holidaycandy/icon.png', price: 150.00 },
  { id: 'p2', name: 'Star Wand', rarity: Rarity.RARE, image: 'https://fortnite-api.com/images/cosmetics/br/pickaxe_id_188_starwand/icon.png', price: 45.00 },
  { id: 'e1', name: 'Scenario', rarity: Rarity.RARE, image: 'https://fortnite-api.com/images/cosmetics/br/eid_kpop/icon.png', price: 45.00 },
];

const generateCases = (prefix: string, title: string, count: number): Case[] => {
  return Array.from({ length: count }).map((_, i) => ({
    id: `${prefix}-${i}`,
    name: `${title} ${i + 1}`,
    price: Math.floor(Math.random() * 200) + 1,
    image: FORTNITE_ITEMS[Math.floor(Math.random() * FORTNITE_ITEMS.length)].image,
    items: [FORTNITE_ITEMS[Math.floor(Math.random() * FORTNITE_ITEMS.length)]],
    tag: i === 0 ? 'HOT' : (i === 1 ? 'NEW' : undefined)
  }));
};

const SECTIONS_DATA = [
  { title: 'OG LEGENDS', cases: generateCases('og', 'VAULT', 8) },
  { title: 'SWEATY SKINS', cases: generateCases('sw', 'SWEAT', 8) },
  { title: 'MYTHIC VAULT', cases: generateCases('mv', 'MYTHIC', 8) },
  { title: 'PICKAXE FRENZY', cases: generateCases('pf', 'AXE', 8) },
  { title: 'EMOTE PACKS', cases: generateCases('ep', 'DANCE', 8) },
  { title: 'GLIDER GALAXY', cases: generateCases('gg', 'GLIDE', 6) },
  { title: 'WRAP COLLECTION', cases: generateCases('wc', 'WRAP', 6) },
  { title: 'STARTER PACKS', cases: generateCases('sp', 'ROOKIE', 6) },
];

// --- TRANSLATIONS ---
type Language = 'en' | 'hi' | 'es' | 'pl' | 'ru';
const translations: Record<Language, Record<string, string>> = {
  en: {
    getFree: "Get Free", giveaways: "Giveaways", skinChanger: "Skin Changer", upgrader: "Upgrader", caseBattle: "Case Battle",
    home: "Home", winterVault: "THE WINTER VAULT IS OPEN", mainCases: "MAIN CASES", dailyRewards: "DAILY REWARDS", verifiedFair: "VERIFIED FAIR",
    instantDelivery: "INSTANT DELIVERY", enterEvent: "ENTER TO THE EVENT", settingsTitle: "Update your settings", settingsSubtitle: "Choose your preferred language and currency.",
    save: "Save", cancel: "Cancel", language: "Language", currency: "Currency", loginGoogle: "Login with Google", eventCases: "EVENT CASES", hide: "HIDE",
    myAccount: "My Account", affiliate: "Affiliate System", useCode: "Use Code", dailyCase: "Daily Case", support: "Support", blog: "Blog", fairPlay: "Provably Fair", contracts: "Contracts"
  },
  hi: {
    getFree: "मुफ्त पाएं", giveaways: "गिवअवे", skinChanger: "स्किन चेंजर", upgrader: "अपग्रेडर", caseBattle: "केस बैटल",
    home: "होम", winterVault: "विंटर वॉल्ट खुला है", mainCases: "मुख्य केस", dailyRewards: "दैनिक पुरस्कार", verifiedFair: "सत्यापित निष्पक्ष",
    instantDelivery: "तुरंत डिलीवरी", enterEvent: "इवेंट में प्रवेश करें", settingsTitle: "अपनी सेटिंग्स अपडेट करें", settingsSubtitle: "अपनी पसंदीदा भाषा और मुद्रा चुनें।",
    save: "सहेजें", cancel: "रद्द करें", language: "भाषा", currency: "मुद्रा", loginGoogle: "गूगल से लॉगिन करें", eventCases: "इवेंट केस", hide: "छिपाएं",
    myAccount: "मेरा खाता", affiliate: "एफिलिएट सिस्टम", useCode: "कोड उपयोग करें", dailyCase: "दैनिक केस", support: "सहायता", blog: "ब्लॉग", fairPlay: "प्रमाणित निष्पक्ष", contracts: "अनुबंध"
  },
  es: { getFree: "Obtener Gratis", giveaways: "Sorteos", skinChanger: "Skin Changer", upgrader: "Upgrader", caseBattle: "Batalla", home: "Inicio", winterVault: "LA BÓVEDA ESTÁ ABIERTA", mainCases: "CASOS PRINCIPALES", dailyRewards: "PREMIOS", verifiedFair: "VERIFICADO", instantDelivery: "ENTREGA", enterEvent: "ENTRAR", settingsTitle: "Ajustes", settingsSubtitle: "Elija idioma y moneda.", save: "Guardar", cancel: "Cancelar", language: "Idioma", currency: "Moneda", loginGoogle: "Iniciar Google", eventCases: "EVENTOS", hide: "OCULTAR", myAccount: "Cuenta", affiliate: "Afiliado", useCode: "Usar Código", dailyCase: "Caja Diaria", support: "Soporte", blog: "Blog", fairPlay: "Justo", contracts: "Contratos" },
  pl: { getFree: "Za darmo", giveaways: "Rozdawajki", skinChanger: "Zmieniacz", upgrader: "Ulepszacz", caseBattle: "Bitwa", home: "Główna", winterVault: "KRYPTA OTWARTA", mainCases: "SKRZYNKI", dailyRewards: "NAGRODY", verifiedFair: "UCZCIWE", instantDelivery: "DOSTAWA", enterEvent: "WEJDŹ", settingsTitle: "Ustawienia", settingsSubtitle: "Wybierz język.", save: "Zapisz", cancel: "Anuluj", language: "Język", currency: "Waluta", loginGoogle: "Zaloguj Google", eventCases: "EVENTY", hide: "UKRYJ", myAccount: "Konto", affiliate: "Afiliacja", useCode: "Użyj Kodu", dailyCase: "Codzienna", support: "Pomoc", blog: "Blog", fairPlay: "Fair Play", contracts: "Kontrakty" },
  ru: { getFree: "Бесплатно", giveaways: "Раздачи", skinChanger: "Чейнджер", upgrader: "Апгрейдер", caseBattle: "Битва", home: "Главная", winterVault: "ХРАНИЛИЩЕ ОТКРЫТО", mainCases: "КЕЙСЫ", dailyRewards: "НАГРАДЫ", verifiedFair: "ЧЕСТНО", instantDelivery: "ДОСТАВКА", enterEvent: "ВОЙТИ", settingsTitle: "Настройки", settingsSubtitle: "Выберите язык.", save: "Сохранить", cancel: "Отмена", language: "Язык", currency: "Валюта", loginGoogle: "Войти Google", eventCases: "СОБЫТИЯ", hide: "СКРЫТЬ", myAccount: "Аккаунт", affiliate: "Рефералы", useCode: "Промокод", dailyCase: "Кейс", support: "Поддержка", blog: "Блог", fairPlay: "Честно", contracts: "Контракты" }
};

// --- COMPONENTS ---

const Snowfall = () => {
  const snowflakes = useMemo(() => Array.from({ length: 50 }).map((_, i) => ({
    id: i, left: `${Math.random() * 100}%`, delay: `${Math.random() * 10}s`, duration: `${Math.random() * 10 + 10}s`, size: `${Math.random() * 10 + 10}px`, opacity: Math.random()
  })), []);
  return <>{snowflakes.map(s => <div key={s.id} className="snowflake" style={{ left: s.left, animationDelay: s.delay, animationDuration: s.duration, fontSize: s.size, opacity: s.opacity }}>❄</div>)}</>;
};

const LiveDrops = () => {
  const [drops, setDrops] = useState<Drop[]>([]);
  useEffect(() => {
    const initial = Array.from({ length: 20 }).map((_, i) => ({
      id: `drop-${i}`, user: `P${Math.floor(Math.random() * 999)}`, item: FORTNITE_ITEMS[Math.floor(Math.random() * FORTNITE_ITEMS.length)], timestamp: Date.now()
    }));
    setDrops(initial);
    const interval = setInterval(() => setDrops(prev => [{ id: `drop-${Date.now()}`, user: `P${Math.floor(Math.random() * 999)}`, item: FORTNITE_ITEMS[Math.floor(Math.random() * FORTNITE_ITEMS.length)], timestamp: Date.now() }, ...prev.slice(0, 19)]), 3000);
    return () => clearInterval(interval);
  }, []);
  return (
    <div className="h-28 bg-[#0a0a0c] border-b border-white/5 flex items-center overflow-hidden relative">
      <div className="flex gap-3 px-6 whitespace-nowrap overflow-x-auto no-scrollbar scroll-smooth">
        {drops.map(d => (
          <div key={d.id} className="w-24 h-24 glass rounded-lg flex flex-col items-center justify-center p-2 group transition-transform hover:scale-110 cursor-pointer" style={{ borderBottom: `2px solid ${RARITY_COLORS[d.item.rarity]}` }}>
            <img src={d.item.image} className="w-12 h-12 object-contain" alt="drop" />
            <span className="text-[10px] text-zinc-600 mt-1 truncate w-full text-center">{d.user}</span>
          </div>
        ))}
      </div>
      <div className="absolute right-0 top-0 bottom-0 w-20 bg-gradient-to-l from-[#0a0a0c] to-transparent pointer-events-none" />
    </div>
  );
};

const Sidebar = ({ currentView, onSetView }: any) => {
  const menuItems = [
    { icon: Home, label: 'home', id: 'home' },
    { icon: Swords, label: 'battles', id: 'battles' },
    { icon: TrendingUp, label: 'upgrader', id: 'upgrader' },
    { icon: RotateCcw, label: 'contracts', id: 'contracts' },
    { icon: Gift, label: 'free', id: 'free' },
    { icon: Trophy, label: 'leaderboard', id: 'leaderboard' },
  ];
  return (
    <aside className="hidden lg:flex flex-col w-[88px] h-[calc(100vh-80px)] bg-[#0d0d0f] border-r border-white/5 sticky top-20 shrink-0 py-8 px-2 items-center">
      <div className="flex flex-col items-center gap-1 mb-6 text-yellow-500">
         <div className="w-1.5 h-1.5 rounded-full bg-yellow-500" />
         <div className="w-1.5 h-6 bg-yellow-500/20 rounded-full" />
      </div>
      {menuItems.map((item) => (
        <button 
          key={item.id}
          onClick={() => onSetView(item.id)}
          className={`w-16 h-16 flex items-center justify-center rounded-[24px] mb-3 transition-all relative ${currentView === item.id ? 'bg-yellow-500/10 border border-yellow-500/40 text-yellow-500 shadow-lg' : 'text-zinc-600 hover:text-white hover:bg-white/5'}`}
        >
          <item.icon size={26} />
          {currentView === item.id && <div className="absolute left-0 w-1 h-6 bg-yellow-500 rounded-r-full" />}
        </button>
      ))}
      <div className="mt-auto flex flex-col items-center gap-4">
        <span className="text-[10px] font-black text-zinc-800 uppercase vertical-text tracking-[0.4em] select-none">ONLINE</span>
        <div className="flex flex-col items-center gap-1">
          <div className="w-12 h-12 rounded-2xl bg-[#141416] border border-white/5 flex items-center justify-center text-[10px] font-black text-white">4,281</div>
          <div className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse shadow-[0_0_10px_rgba(34,197,94,0.6)]" />
        </div>
      </div>
    </aside>
  );
};

const Navbar = ({ isLoggedIn, onLogin, onOpenMenu, onOpenSettings, currentLang, onSetView }: any) => {
  const t = translations[currentLang];
  return (
    <nav className="sticky top-0 z-[100] h-20 bg-[#0d0d0f]/95 backdrop-blur-xl border-b border-white/5 flex items-center justify-between px-8">
      <div className="flex items-center gap-10">
        <button onClick={() => onSetView('home')} className="flex items-center gap-2 group">
          <img src="https://i.ibb.co/d4HMs3Bm/image.png" className="h-10 transition-transform group-hover:scale-110" alt="logo" />
          <span className="font-gaming text-3xl font-black italic text-white uppercase tracking-tighter">R2G</span>
        </button>
        <div className="hidden lg:flex items-center gap-8 text-[11px] font-black uppercase tracking-widest text-zinc-500">
          <button onClick={() => onSetView('free')} className="flex items-center gap-2 hover:text-white transition-colors"><PlusCircle size={14} /> {t.getFree}</button>
          <button onClick={() => onSetView('giveaways')} className="hover:text-white transition-colors">{t.giveaways}</button>
          <button onClick={() => onSetView('skin-changer')} className="hover:text-white transition-colors">{t.skinChanger}</button>
          <button onClick={() => onSetView('upgrader')} className="hover:text-white transition-colors">{t.upgrader}</button>
          <button onClick={() => onSetView('battles')} className="hover:text-white transition-colors">{t.caseBattle}</button>
        </div>
      </div>
      <div className="flex items-center gap-4">
        {isLoggedIn ? (
          <div className="flex items-center gap-3">
            <div className="bg-zinc-900 border border-white/5 rounded-2xl pl-5 pr-1 py-1 flex items-center gap-3 shadow-inner">
              <span className="text-sm font-black text-yellow-500">$1,452.20</span>
              <button className="bg-yellow-500 p-2 rounded-xl text-black hover:bg-yellow-400 transition-colors shadow-lg shadow-yellow-500/20"><PlusCircle size={18}/></button>
            </div>
            <div onClick={() => onSetView('account')} className="w-11 h-11 bg-zinc-800 rounded-2xl border border-white/5 p-0.5 cursor-pointer hover:border-zinc-500"><img src="https://api.dicebear.com/7.x/avataaars/svg?seed=Lucky" className="rounded-[14px]" alt="pfp" /></div>
          </div>
        ) : (
          <button onClick={onLogin} className="flex items-center gap-2 border border-green-500/30 bg-green-500/10 text-green-500 px-6 py-2.5 rounded-2xl text-xs font-black uppercase hover:bg-green-500/20 transition-all shadow-lg shadow-green-500/5">
            <img src="https://www.google.com/favicon.ico" className="w-4 h-4 brightness-150" alt="g" />{t.loginGoogle}
          </button>
        )}
        <button onClick={onOpenSettings} className="p-3 bg-zinc-900 rounded-2xl border border-white/5 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all"><Settings size={20}/></button>
        <button onClick={onOpenMenu} className="p-3 bg-zinc-900 rounded-2xl border border-white/5 text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all"><Menu size={20}/></button>
      </div>
    </nav>
  );
};

const SettingsModal = ({ isOpen, onClose, currentLang, onSetLang }: any) => {
  const t = translations[currentLang];
  if (!isOpen) return null;
  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-[#16161a] w-full max-w-lg rounded-3xl border border-white/10 p-8 shadow-2xl animate-in zoom-in duration-200">
        <div className="flex justify-between items-center mb-6"><h2 className="text-2xl font-gaming font-bold text-white uppercase">{t.settingsTitle}</h2><button onClick={onClose} className="text-zinc-500 hover:text-white"><X size={24}/></button></div>
        <p className="text-zinc-500 text-sm mb-8">{t.settingsSubtitle}</p>
        <div className="space-y-8">
          <div><label className="text-xs font-black text-zinc-500 uppercase tracking-widest mb-4 block">{t.language}</label>
            <div className="grid grid-cols-2 gap-3">
              {Object.keys(translations).map(code => (
                <button key={code} onClick={() => onSetLang(code as Language)} className={`p-4 rounded-xl border flex items-center justify-between ${currentLang === code ? 'border-yellow-500 bg-yellow-500/5' : 'border-white/5 bg-[#0d0d0f] hover:border-white/10'}`}>
                  <span className="text-sm text-white font-bold uppercase">{code}</span>
                  {currentLang === code && <Check size={16} className="text-yellow-500"/>}
                </button>
              ))}
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-4 mt-10">
          <button onClick={onClose} className="py-4 rounded-xl border border-white/5 text-sm font-black text-white hover:bg-white/5 uppercase transition-all">{t.cancel}</button>
          <button onClick={onClose} className="py-4 rounded-xl bg-yellow-500 text-sm font-black text-black hover:brightness-110 uppercase transition-all shadow-lg shadow-yellow-500/10">{t.save}</button>
        </div>
      </div>
    </div>
  );
};

const NavigationMenu = ({ isOpen, onClose, onLogin, isLoggedIn, currentLang, onSetView }: any) => {
  const t = translations[currentLang];
  if (!isOpen) return null;
  const navigate = (v: string) => { onSetView(v); onClose(); };
  return (
    <div className="fixed inset-0 z-[130] bg-[#0d0d0f]/95 backdrop-blur-xl p-12 overflow-y-auto animate-in fade-in duration-300">
      <div className="max-w-4xl mx-auto">
        <div className="flex justify-end mb-12">
          {!isLoggedIn && <button onClick={onLogin} className="mr-6 flex items-center gap-3 border border-green-500/30 bg-green-500/10 text-green-500 px-6 py-2 rounded-xl text-sm font-bold uppercase transition-all shadow-lg shadow-green-500/5"><img src="https://www.google.com/favicon.ico" className="w-4 h-4 brightness-150" alt="G" /> {t.loginGoogle}</button>}
          <button onClick={onClose} className="p-4 bg-zinc-900 rounded-2xl hover:bg-zinc-800 transition-colors"><X size={32}/></button>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
          <section><h3 className="text-zinc-600 font-bold text-xs uppercase tracking-widest mb-8">ACCOUNT & CODES</h3><div className="space-y-4">{['myAccount', 'affiliate', 'useCode'].map(l => <button key={l} onClick={() => navigate(l.toLowerCase())} className="w-full text-left p-5 bg-zinc-900 rounded-2xl hover:bg-zinc-800 font-bold uppercase text-sm border border-white/5 group flex items-center gap-3 transition-all"><div className="w-8 h-8 rounded-lg bg-white/5 flex items-center justify-center"><User size={16} className="text-zinc-500 group-hover:text-white" /></div> {t[l]}</button>)}</div></section>
          <section className="md:col-span-2"><h3 className="text-zinc-600 font-bold text-xs uppercase tracking-widest mb-8">GAMES</h3><div className="grid grid-cols-2 gap-4">{['battles', 'upgrader', 'skinChanger', 'contracts', 'giveaways'].map(g => <button key={g} onClick={() => navigate(g.toLowerCase())} className="p-8 bg-zinc-900 rounded-[32px] hover:bg-zinc-800 font-black text-xl italic uppercase border border-white/5 group flex flex-col items-center gap-4 transition-all shadow-lg"><Swords size={32} className="text-red-500 group-hover:scale-110 transition-transform" /> {t[g]}</button>)}</div></section>
        </div>
      </div>
    </div>
  );
};

const Hero = ({ currentLang }: any) => {
  const t = translations[currentLang];
  return (
    <div className="px-8 pt-8">
      <div className="relative h-[540px] rounded-[52px] overflow-hidden bg-[#141416] border border-white/5 flex items-center shadow-2xl group">
        <img src="https://i.ibb.co/rR9LrXYH/Chat-GPT-Image-Dec-19-2025-07-04-05-PM.png" className="absolute inset-0 w-full h-full object-cover brightness-[0.4] scale-105 group-hover:scale-100 transition-transform duration-[5s]" alt="hero" />
        <div className="relative z-10 px-16 max-w-4xl">
          <div className="bg-red-600 text-white px-5 py-2 rounded-full text-[10px] font-black uppercase tracking-widest mb-6 inline-block animate-pulse shadow-lg shadow-red-500/30">CHRISTMAS SPECIAL</div>
          <h1 className="text-[90px] font-gaming font-black italic text-white leading-[0.85] uppercase tracking-tighter mb-8 drop-shadow-2xl">
            {t.winterVault.split(' ')[0]} <br /><span className="text-red-500 text-glow-red">{t.winterVault.split(' ').slice(1).join(' ')}</span>
          </h1>
          <div className="flex gap-6 items-center">
            <button className="bg-red-600 hover:bg-red-500 text-white px-16 py-6 rounded-[32px] font-black text-sm uppercase transition-all flex items-center gap-3 shadow-2xl shadow-red-500/30 transform hover:-translate-y-1">
              {t.enterEvent} <ChevronRight size={20}/>
            </button>
            <div className="border-l-2 border-white/10 pl-8">
              <span className="text-zinc-500 text-[10px] font-black uppercase tracking-widest mb-1">Ends In</span>
              <span className="text-white font-gaming text-4xl font-bold italic tracking-wider tabular-nums">17D 15:19:42</span>
            </div>
          </div>
        </div>
        <img src="https://fortnite-api.com/images/cosmetics/br/cid_301_athena_commando_m_santa/featured.png" className="absolute right-0 bottom-0 h-[115%] object-contain animate-float pointer-events-none drop-shadow-[0_20px_60px_rgba(239,68,68,0.4)]" alt="santa" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
        {[
          { icon: Gift, title: t.dailyRewards, desc: 'Free cases every day for active players' },
          { icon: ShieldCheck, title: t.verifiedFair, desc: 'Secure blockchain-based algorithms' },
          { icon: Zap, title: t.instantDelivery, desc: 'Items sent to your epic locker instantly' }
        ].map((item, i) => (
          <div key={i} className="bg-[#141416]/40 border border-white/5 p-10 rounded-[48px] flex items-center gap-8 hover:bg-red-500/5 transition-all cursor-pointer group shadow-xl">
            <div className="bg-zinc-800/40 p-6 rounded-[24px] group-hover:scale-110 transition-transform"><item.icon className="w-9 h-9 text-red-500" /></div>
            <div>
              <h3 className="font-gaming font-black text-2xl text-white tracking-wide uppercase italic leading-none mb-2">{item.title}</h3>
              <p className="text-zinc-500 text-base font-medium leading-tight">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const EventBanner = ({ currentLang }: any) => {
  const t = translations[currentLang];
  const events = [
    { name: 'SANTAS BAG', price: 1.0, img: 'https://fortnite-api.com/images/cosmetics/br/cid_301_athena_commando_m_santa/featured.png' },
    { name: 'MISTLETOE', price: 2.50, img: 'https://fortnite-api.com/images/cosmetics/br/cid_639_athena_commando_f_winterholiday/featured.png' },
    { name: 'FROSTBITE', price: 5.0, img: 'https://fortnite-api.com/images/cosmetics/br/cid_285_athena_commando_m_arcticice/featured.png' },
    { name: 'BLIZZARD', price: 20.0, img: 'https://fortnite-api.com/images/cosmetics/br/cid_984_athena_commando_f_snowfall_6f8g2/featured.png' },
    { name: 'NORTH POLE', price: 60.0, img: 'https://fortnite-api.com/images/cosmetics/br/cid_294_athena_commando_f_banditwinter/featured.png' },
    { name: 'LEGACY WINTER', price: 250.0, img: 'https://fortnite-api.com/images/cosmetics/br/cid_010_athena_commando_m_snow_01/featured.png' },
  ];
  return (
    <div className="px-8 mt-16">
      <div className="flex items-center justify-between mb-8">
        <h2 className="text-2xl font-gaming font-black italic uppercase tracking-tight italic flex items-center gap-4">
          {t.eventCases} <span className="text-zinc-600 font-inter font-medium not-italic text-sm">- 17 DAYS 15:19:42</span>
        </h2>
        <button className="flex items-center gap-2 text-zinc-500 hover:text-white transition-colors text-xs font-black uppercase tracking-widest">{t.hide} <ChevronDown className="w-4 h-4" /></button>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-6 gap-6">
        {events.map((e, i) => (
          <div key={i} className="group relative aspect-[4/5] rounded-[32px] overflow-hidden bg-[#141416] border border-white/5 hover:scale-[1.05] transition-all cursor-pointer shadow-lg hover:border-red-500/20">
            <img src={e.img} className="absolute inset-0 w-full h-full object-cover brightness-50 group-hover:brightness-90 transition-all duration-700" alt={e.name} />
            <div className="absolute inset-0 bg-gradient-to-t from-black via-black/20 to-transparent p-6 flex flex-col justify-end">
              <span className="bg-yellow-500 text-black w-fit px-3 py-1 rounded-lg font-black text-[10px] mb-2 shadow-lg">${e.price.toFixed(2)}</span>
              <h4 className="font-gaming font-black text-white italic uppercase group-hover:text-yellow-500 transition-colors">{e.name}</h4>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

const CaseGrid = ({ currentLang }: any) => {
  const t = translations[currentLang];
  return (
    <div className="px-8 pb-32 mt-24 space-y-24">
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <h2 className="text-5xl font-gaming font-black italic uppercase tracking-tighter">{t.mainCases}</h2>
          <div className="h-0.5 w-16 bg-red-600 rounded-full shadow-[0_0_15px_rgba(239,68,68,0.6)]" />
        </div>
        <div className="flex gap-3">
          {['All', 'New', 'Hot', 'Lucky'].map(cat => <button key={cat} className={`px-8 py-2.5 rounded-2xl text-[11px] font-black uppercase transition-all tracking-widest ${cat === 'All' ? 'bg-red-600 text-white shadow-xl shadow-red-500/30' : 'bg-zinc-900 text-zinc-500 hover:text-white border border-white/5'}`}>{cat}</button>)}
        </div>
      </div>
      {SECTIONS_DATA.map((section, idx) => (
        <section key={idx} className="animate-in fade-in duration-1000">
          <div className="flex items-center gap-4 mb-10">
            <h3 className="text-2xl font-gaming font-black italic uppercase text-white tracking-widest">{section.title}</h3>
            <div className="h-px flex-1 bg-gradient-to-r from-white/10 to-transparent" />
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 xl:grid-cols-8 gap-6">
            {section.cases.map(c => (
              <div key={c.id} className="group cursor-pointer bg-[#141416]/40 border border-white/5 rounded-[32px] p-6 flex flex-col items-center hover:bg-[#1a1a1e] transition-all relative shadow-lg case-card-hover">
                {c.tag && <span className="absolute top-5 left-5 bg-yellow-500 text-black text-[9px] font-black px-2 py-0.5 rounded uppercase shadow-lg z-10">{c.tag}</span>}
                <div className="w-full aspect-square mb-6 relative"><div className="absolute inset-0 bg-yellow-500/5 blur-[60px] rounded-full scale-50 group-hover:scale-110 transition-transform duration-700" /><img src={c.image} className="w-full h-full object-contain case-img transition-all duration-700 relative z-10 drop-shadow-2xl" alt={c.name} /></div>
                <h3 className="font-gaming text-lg font-black italic text-white mb-4 text-center uppercase truncate w-full tracking-wide group-hover:text-yellow-500 transition-colors">{c.name}</h3>
                <div className="bg-zinc-900 group-hover:bg-yellow-500 group-hover:text-black px-6 py-2 rounded-2xl transition-all shadow-inner"><span className="text-sm font-black tabular-nums">${c.price.toFixed(2)}</span></div>
              </div>
            ))}
          </div>
        </section>
      ))}
    </div>
  );
};

const App = () => {
  const [view, setView] = useState('home');
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);
  const [lang, setLang] = useState<Language>('en');
  const [stats, setStats] = useState({ online: 6807, users: 13737728, cases: 546998827, upgrades: 166007649, battles: 51335488 });

  useEffect(() => {
    const t = setInterval(() => setStats(p => ({
      online: p.online + (Math.random() > 0.5 ? 1 : -1) * Math.floor(Math.random() * 4),
      users: p.users + (Math.random() > 0.8 ? 1 : 0),
      cases: p.cases + Math.floor(Math.random() * 4),
      upgrades: p.upgrades + Math.floor(Math.random() * 2),
      battles: p.battles + (Math.random() > 0.7 ? 1 : 0)
    })), 3000);
    return () => clearInterval(t);
  }, []);

  const formatNum = (n: number) => n.toLocaleString('en-US').replace(/,/g, ' ');

  return (
    <div className="min-h-screen bg-[#0d0d0f] flex flex-col selection:bg-red-600 selection:text-white">
      <Snowfall />
      <SettingsModal isOpen={isSettingsOpen} onClose={() => setIsSettingsOpen(false)} currentLang={lang} onSetLang={setLang} />
      <NavigationMenu isOpen={isMenuOpen} onClose={() => setIsMenuOpen(false)} isLoggedIn={isLoggedIn} onLogin={() => {setIsLoggedIn(true); setIsMenuOpen(false);}} currentLang={lang} onSetView={setView} />
      <Navbar isLoggedIn={isLoggedIn} onLogin={() => setIsLoggedIn(true)} onOpenMenu={() => setIsMenuOpen(true)} onOpenSettings={() => setIsSettingsOpen(true)} currentLang={lang} onSetView={setView} />
      <LiveDrops />
      <div className="flex flex-1 relative">
        <Sidebar currentView={view} onSetView={setView} />
        <main className="flex-1 overflow-x-hidden">
          {view === 'home' ? (
            <div className="animate-in fade-in duration-700">
              <Hero currentLang={lang} />
              <EventBanner currentLang={lang} />
              <CaseGrid currentLang={lang} />
            </div>
          ) : (
            <div className="h-[70vh] flex flex-col items-center justify-center p-20 animate-in slide-in-from-bottom-10 duration-500">
               <div className="bg-[#141416]/60 backdrop-blur-2xl p-20 rounded-[64px] border border-white/5 text-center shadow-2xl">
                 <h2 className="text-7xl font-gaming font-black italic uppercase text-white mb-6 tracking-tighter">{view.replace('-', ' ')}</h2>
                 <p className="text-zinc-500 text-xl font-medium mb-12 max-w-lg mx-auto leading-relaxed">This module is currently in development for the winter season.</p>
                 <button onClick={() => setView('home')} className="bg-red-600 hover:bg-red-500 text-white px-16 py-6 rounded-3xl font-black uppercase shadow-xl shadow-red-500/30 transition-all hover:-translate-y-1">Back to Home</button>
               </div>
            </div>
          )}

          <div className="w-full border-y border-white/5 py-20 bg-[#0a0a0c]/80 backdrop-blur-sm">
            <div className="max-w-[1400px] mx-auto px-8 grid grid-cols-2 md:grid-cols-5 gap-16 text-center">
              {[
                { l: 'Online Players', v: stats.online, c: 'text-green-500', i: Monitor },
                { l: 'Registered Gamers', v: stats.users, c: 'text-blue-500', i: Users },
                { l: 'Cases Unboxed', v: stats.cases, c: 'text-yellow-500', i: Box },
                { l: 'Successful Upgrades', v: stats.upgrades, c: 'text-purple-500', i: TrendingUp },
                { l: 'Epic Battles', v: stats.battles, c: 'text-red-500', i: Swords },
              ].map((s, idx) => (
                <div key={idx} className="flex flex-col items-center group cursor-default">
                  <div className={`${s.c} mb-6 p-5 bg-white/5 rounded-3xl border border-white/5 group-hover:scale-110 transition-transform duration-500`}><s.i size={32} /></div>
                  <span className="text-[10px] text-zinc-600 font-black uppercase tracking-[0.3em] mb-2">{s.l}</span>
                  <span className="text-4xl font-gaming font-black italic tabular-nums text-white tracking-tight">{formatNum(s.v)}</span>
                </div>
              ))}
            </div>
          </div>

          <footer className="bg-[#070708] border-t border-white/5 pt-32 pb-16">
            <div className="max-w-[1400px] mx-auto px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-24 mb-32">
                <div className="lg:col-span-5">
                  <div className="flex items-center gap-4 mb-10 group cursor-pointer" onClick={() => setView('home')}>
                    <img src="https://i.ibb.co/d4HMs3Bm/image.png" className="h-16 transition-transform group-hover:scale-105" alt="logo" />
                    <span className="font-gaming text-6xl font-black italic uppercase tracking-tighter">R2G</span>
                  </div>
                  <p className="text-zinc-500 text-lg leading-relaxed mb-12 max-w-md font-medium">
                    R2G is the world's leading Fortnite item marketplace. Unbox the rarest legacy skins, trade with the community, and experience guaranteed provably fair gaming since 2018.
                  </p>
                  <div className="bg-[#0d0d0f] border border-white/5 rounded-[40px] p-8 mb-12 shadow-2xl">
                    <h4 className="font-gaming font-black text-xl italic uppercase text-white mb-6">Stay Updated</h4>
                    <div className="flex gap-2">
                      <input type="email" placeholder="Email address" className="flex-1 bg-zinc-900 border border-white/10 rounded-2xl px-6 py-4 outline-none focus:border-red-500 transition-colors text-sm" />
                      <button className="bg-red-600 hover:bg-red-500 text-white px-8 rounded-2xl font-black uppercase text-xs transition-colors shadow-lg shadow-red-500/20">Join</button>
                    </div>
                  </div>
                  <div className="flex gap-4">
                    {[Twitter, Instagram, Youtube, Send, MessageSquare].map((Ic, i) => (
                      <button key={i} className="w-14 h-14 flex items-center justify-center bg-white/5 rounded-2xl text-zinc-400 hover:text-white hover:bg-white/10 transition-all border border-white/5 hover:border-white/20"><Ic size={24} /></button>
                    ))}
                  </div>
                </div>
                <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-12">
                  {[
                    { title: 'Marketplace', links: ['All Cases', 'Event Items', 'Upgrade Skin', 'Case Battles', 'Skin Changer'] },
                    { title: 'Information', links: ['About Us', 'Contact', 'Blog', 'News', 'Leaderboard'] },
                    { title: 'Legal', links: ['Privacy Policy', 'Terms', 'AML Policy', 'Cookies', 'Disclaimer'] },
                    { title: 'Support', links: ['Help Center', 'Partners', 'Affiliate', 'FAQ', 'Provably Fair'] }
                  ].map((col, idx) => (
                    <div key={idx}>
                      <h4 className="text-[11px] font-black text-zinc-600 mb-10 uppercase tracking-[0.4em] border-l-2 border-red-600 pl-4">{col.title}</h4>
                      <ul className="space-y-5">
                        {col.links.map(l => (
                          <li key={l}>
                            <button className="text-zinc-500 hover:text-red-500 text-sm font-bold uppercase transition-all tracking-wide text-left group flex items-center gap-2">
                              <div className="w-0 group-hover:w-3 h-px bg-red-600 transition-all" />
                              {l}
                            </button>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-32">
                {[
                  { icon: ShieldCheck, title: 'Provably Fair', desc: 'Blockchain Verified', color: 'text-green-500' },
                  { icon: Lock, title: 'SSL Secured', desc: 'AES-256 Encryption', color: 'text-blue-500' },
                  { icon: Globe, title: 'Global Delivery', desc: 'Instant Sync', color: 'text-purple-500' }
                ].map((t, i) => (
                  <div key={i} className="flex items-center gap-8 p-10 bg-white/5 rounded-[48px] border border-white/5 hover:bg-white/10 transition-all cursor-default">
                    <t.icon className={`${t.color} w-16 h-16`} />
                    <div>
                      <h4 className="font-gaming font-black text-2xl italic uppercase text-white mb-1 tracking-wide">{t.title}</h4>
                      <p className="text-xs text-zinc-500 uppercase tracking-widest font-bold">{t.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="flex flex-wrap items-center justify-center gap-16 mb-32 opacity-10 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-1000">
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png" className="h-5" alt="visa" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" className="h-10" alt="mc" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b5/PayPal.svg/1200px-PayPal.svg.png" className="h-6" alt="pp" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/46/Bitcoin.svg/1200px-Bitcoin.svg.png" className="h-8" alt="btc" />
                <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/c/cb/Ethereum_logo.svg/1200px-Ethereum_logo.svg.png" className="h-8" alt="eth" />
              </div>
              <div className="flex flex-col lg:flex-row justify-between items-center gap-12 text-center lg:text-left pt-12 border-t border-white/5">
                <div className="max-w-3xl">
                  <p className="text-zinc-600 text-[11px] uppercase font-black tracking-widest mb-6 leading-loose">© 2025 R2G Skins Entertainment Ltd. All Rights Reserved.</p>
                  <p className="text-zinc-800 text-[10px] uppercase font-black leading-relaxed italic">Disclaimer: R2G is not affiliated with, endorsed by, or sponsored by Epic Games, Inc. Users must be 18+ to participate.</p>
                </div>
                <div className="flex gap-10 text-[10px] font-black text-zinc-500 uppercase tracking-widest shrink-0">
                  <button className="hover:text-white transition-colors">Cookie Policy</button>
                  <button className="hover:text-white transition-colors">Privacy Hub</button>
                  <button className="hover:text-white transition-colors flex items-center gap-1">Global Licenses <ExternalLink size={12} /></button>
                </div>
              </div>
            </div>
          </footer>
        </main>
      </div>
    </div>
  );
};

const root = ReactDOM.createRoot(document.getElementById('root')!);
root.render(<App />);