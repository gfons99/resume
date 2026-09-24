import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon } from 'lucide-react';
import { useTheme } from '../hooks/useTheme';
import { useLanguage } from '../context/useLanguage';
import { LanguageDropdown } from './LanguageDropdown';

export function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const { t } = useLanguage();

  const navLinks = [
    { href: '#home', label: t('nav.home') },
    { href: '#education', label: t('nav.education') },
    { href: '#skills', label: t('nav.skills') },
    { href: '#projects', label: t('nav.projects') },
    { href: '#experience', label: t('nav.experience') },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 glass">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <a href="#home" className="flex-shrink-0 flex items-center space-x-2.5 group btn-glow-yellow px-2 py-1 rounded-xl">
            <img
              src={`${import.meta.env.BASE_URL}ai-sparkles-icon.svg`}
              alt="Favicon"
              className="w-7 h-7 sm:w-8 sm:h-8 transition-transform duration-200 group-hover:scale-110"
            />
            <span className="text-slate-900 dark:text-white font-bold text-xl tracking-wider whitespace-nowrap">
              Gadiel M.
            </span>
          </a>

          {/* Desktop nav */}
          <div className="hidden md:flex items-center space-x-6">
            <div className="flex items-baseline space-x-6">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  className="hover:text-blue-500 dark:hover:text-blue-400 text-slate-600 dark:text-gray-300 px-3 py-1.5 rounded-lg text-sm font-medium transition-colors btn-glow-yellow"
                >
                  {link.label}
                </a>
              ))}
            </div>
            <div className="flex items-center space-x-2 border-l border-slate-300 dark:border-slate-800 pl-4">
              <LanguageDropdown />
              <button
                onClick={toggleTheme}
                className="w-9 h-9 p-0 rounded-xl glass-card text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500/50 transition-all cursor-pointer shadow-xs flex items-center justify-center btn-glow-yellow"
                aria-label="Toggle theme"
              >
                {theme === 'dark' ? <Sun className="w-5 h-5 text-amber-500 dark:text-amber-400" /> : <Moon className="w-5 h-5 text-slate-700 dark:text-blue-400" />}
              </button>
            </div>
          </div>

          {/* Mobile right section */}
          <div className="flex items-center md:hidden space-x-2">
            <LanguageDropdown />
            <button
              onClick={toggleTheme}
              className="w-9 h-9 p-0 rounded-xl glass-card text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500/50 transition-all cursor-pointer shadow-xs flex items-center justify-center btn-glow-yellow"
              aria-label="Toggle theme"
            >
              {theme === 'dark' ? <Sun className="w-5 h-5 text-amber-500 dark:text-amber-400" /> : <Moon className="w-5 h-5 text-slate-700 dark:text-blue-400" />}
            </button>
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="w-9 h-9 p-0 rounded-xl glass-card text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500/50 transition-all cursor-pointer shadow-xs flex items-center justify-center btn-glow-yellow"
              aria-label="Toggle menu"
            >
              {isMobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <AnimatePresence>
        {isMobileOpen && (
          <motion.div
            key="mobile-nav-drawer"
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.15, ease: 'easeOut' }}
            className="md:hidden border-t border-slate-200/80 dark:border-slate-800/80 shadow-xl overflow-hidden"
          >
            <div className="px-4 py-3 space-y-1 bg-white/95 dark:bg-slate-900/95 backdrop-blur-md">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileOpen(false)}
                  className="block px-3 py-2 rounded-lg text-base font-medium text-slate-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-slate-100/80 dark:hover:bg-slate-800/80 transition-colors btn-glow-yellow"
                >
                  {link.label}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
