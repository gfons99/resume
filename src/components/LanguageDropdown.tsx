import { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown, Check } from 'lucide-react';
import { useLanguage } from '../context/useLanguage';
import { type Language } from '../i18n/translations';

const languages: { code: Language; name: string; flagSrc: string }[] = [
  {
    code: 'en',
    name: 'English',
    flagSrc: `${import.meta.env.BASE_URL}united-states-flag-icon.svg`,
  },
  {
    code: 'es',
    name: 'Español',
    flagSrc: `${import.meta.env.BASE_URL}mexico-flag-icon.svg`,
  },
];

export function LanguageDropdown() {
  const { language, setLanguage } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const currentLang = languages.find((l) => l.code === language) || languages[0];

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen((prev) => !prev)}
        className="h-9 flex items-center space-x-2 px-3 rounded-xl glass-card text-xs sm:text-sm text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500/50 transition-all cursor-pointer shadow-xs focus:outline-none"
        aria-label="Select language"
        aria-expanded={isOpen}
      >
        <img
          src={currentLang.flagSrc}
          alt={`${currentLang.name} flag`}
          className="w-5 h-3.5 object-cover rounded-xs border border-black/10 dark:border-white/10 flex-shrink-0"
        />
        <span className="hidden sm:inline-block text-xs font-semibold tracking-wide">
          {currentLang.name}
        </span>
        <span className="sm:hidden text-xs font-bold uppercase tracking-wider">
          {currentLang.code}
        </span>
        <ChevronDown
          className={`w-3.5 h-3.5 text-slate-500 dark:text-slate-400 transition-transform duration-150 ${
            isOpen ? 'rotate-180' : ''
          }`}
        />
      </button>

      <AnimatePresence>
        {isOpen && (
          <motion.div
            key="language-dropdown-menu"
            initial={{ opacity: 0, y: 4 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            transition={{ duration: 0.1, ease: 'easeOut' }}
            className="absolute right-0 mt-2 w-36 py-1.5 rounded-xl bg-white/95 dark:bg-slate-900/95 shadow-xl border border-slate-200 dark:border-slate-800 z-50 overflow-hidden backdrop-blur-md"
          >
            {languages.map((lang) => {
              const isSelected = lang.code === language;
              return (
                <button
                  key={lang.code}
                  onClick={() => {
                    setLanguage(lang.code);
                    setIsOpen(false);
                  }}
                  className={`w-full flex items-center justify-between px-3 py-2 text-xs sm:text-sm font-medium transition-colors cursor-pointer ${
                    isSelected
                      ? 'text-blue-600 dark:text-blue-400 bg-blue-50/80 dark:bg-blue-950/40'
                      : 'text-slate-700 dark:text-slate-200 hover:bg-slate-100 dark:hover:bg-slate-800/80'
                  }`}
                >
                  <div className="flex items-center space-x-2">
                    <img
                      src={lang.flagSrc}
                      alt={`${lang.name} flag`}
                      className="w-5 h-3.5 object-cover rounded-xs border border-black/10 dark:border-white/10 flex-shrink-0"
                    />
                    <span>{lang.name}</span>
                  </div>
                  {isSelected && <Check className="w-3.5 h-3.5 text-blue-600 dark:text-blue-400" />}
                </button>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}
