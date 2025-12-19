
import React, { useState } from 'react';
import { X, HelpCircle, Check } from 'lucide-react';
import { Language, translations } from '../translations';

interface SettingsModalProps {
  isOpen: boolean;
  onClose: () => void;
  currentLang: Language;
  onSetLang: (lang: Language) => void;
}

const SettingsModal: React.FC<SettingsModalProps> = ({ isOpen, onClose, currentLang, onSetLang }) => {
  const [tempLang, setTempLang] = useState<Language>(currentLang);
  const t = translations[currentLang];

  if (!isOpen) return null;

  const handleSave = () => {
    onSetLang(tempLang);
    onClose();
  };

  const languages = [
    { code: 'en', name: 'English', flag: 'https://flagcdn.com/w40/gb.png' },
    { code: 'hi', name: 'हिन्दी (Hindi)', flag: 'https://flagcdn.com/w40/in.png' },
    { code: 'es', name: 'Español', flag: 'https://flagcdn.com/w40/es.png' },
    { code: 'pl', name: 'Polski', flag: 'https://flagcdn.com/w40/pl.png' },
    { code: 'ru', name: 'Русский', flag: 'https://flagcdn.com/w40/ru.png' },
  ];

  return (
    <div className="fixed inset-0 z-[120] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm">
      <div className="bg-[#16161a] w-full max-w-lg rounded-3xl border border-white/10 shadow-2xl overflow-hidden animate-in zoom-in duration-200">
        <div className="p-8 flex flex-col">
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-gaming font-bold text-white uppercase tracking-wide">{t.settingsTitle}</h2>
            <button onClick={onClose} className="text-zinc-500 hover:text-white transition-colors">
              <X className="w-6 h-6" />
            </button>
          </div>
          
          <p className="text-zinc-500 text-sm mb-8">{t.settingsSubtitle}</p>
          
          <div className="w-full space-y-8 text-left">
            <div>
              <label className="text-xs font-black text-zinc-500 uppercase tracking-widest mb-4 block">{t.language}</label>
              <div className="grid grid-cols-2 gap-3">
                {languages.map((lang) => (
                  <button 
                    key={lang.code}
                    onClick={() => setTempLang(lang.code as Language)}
                    className={`flex items-center justify-between p-4 rounded-xl border transition-all ${tempLang === lang.code ? 'border-yellow-500 bg-yellow-500/5' : 'border-white/5 bg-[#0d0d0f] hover:border-white/10'}`}
                  >
                    <div className="flex items-center gap-3">
                      <img src={lang.flag} className="w-6 h-4 object-cover rounded shadow-sm" alt={lang.name} />
                      <span className="text-sm text-white font-bold">{lang.name}</span>
                    </div>
                    {tempLang === lang.code && <Check className="w-4 h-4 text-yellow-500" />}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <label className="text-xs font-black text-zinc-500 uppercase tracking-widest block">{t.currency}</label>
                <HelpCircle className="w-4 h-4 text-zinc-600 cursor-pointer" />
              </div>
              <div className="grid grid-cols-3 gap-3">
                {['USD', 'EUR', 'GBP'].map((curr) => (
                  <div key={curr} className="w-full bg-[#0d0d0f] border border-white/5 rounded-xl px-4 py-4 flex items-center justify-center cursor-pointer hover:border-white/20 transition-all">
                    <span className="text-sm text-white font-black">{curr}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4 w-full mt-10">
            <button 
              onClick={onClose}
              className="py-4 rounded-xl border border-white/5 text-sm font-black text-white hover:bg-white/5 uppercase transition-all"
            >
              {t.cancel}
            </button>
            <button 
              onClick={handleSave}
              className="py-4 rounded-xl bg-gradient-to-r from-yellow-600 to-yellow-500 text-sm font-black text-black hover:brightness-110 uppercase transition-all shadow-lg shadow-yellow-500/10"
            >
              {t.save}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SettingsModal;
