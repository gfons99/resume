import { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { EducationSection } from './components/EducationSection';
import { SkillsSection } from './components/Skills/SkillsSection';
import { ProjectGallery } from './components/Projects/ProjectGallery';
import { ExperienceSection } from './components/ExperienceSection';
import { StarryBackground } from './components/StarryBackground';
import { LanguageProvider } from './context/LanguageContext';
import { useLanguage } from './context/useLanguage';

function MainLayout() {
  const { t } = useLanguage();
  const [showScrollTop, setShowScrollTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen relative z-0">
      <StarryBackground />
      <Navbar />
      <main>
        <Hero />
        <EducationSection />
        <SkillsSection />
        <ProjectGallery />
        <ExperienceSection />
      </main>

      {/* Floating Back to Top button */}
      {showScrollTop && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-6 left-6 z-40 p-3 rounded-full glass-card bg-white/80 dark:bg-slate-900/80 text-blue-600 dark:text-blue-400 border border-blue-500/30 shadow-lg glow-blue hover:glow-blue-strong hover:scale-110 transition-all cursor-pointer"
          aria-label={t('footer.backToTop')}
          title={t('footer.backToTop')}
        >
          <ArrowUp className="w-5 h-5" />
        </button>
      )}

      {/* Footer with Back to Top */}
      <footer className="py-12 text-center border-t border-slate-200 dark:border-slate-900 mt-20 transition-colors">
        <div className="max-w-7xl mx-auto px-4 flex flex-col items-center gap-4">
          <button
            onClick={scrollToTop}
            className="inline-flex items-center space-x-2 px-4 py-2 rounded-xl glass-card text-sm font-medium text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-500/40 transition-all shadow-md group cursor-pointer"
          >
            <ArrowUp className="w-4 h-4 text-blue-600 dark:text-blue-400 group-hover:-translate-y-1 transition-transform duration-200" />
            <span>{t('footer.backToTop')}</span>
          </button>
          <p className="text-slate-500 font-mono text-xs sm:text-sm">
            &copy; {new Date().getFullYear()} Gadiel M. Fonseca R. {t('footer.builtWith')}
          </p>
        </div>
      </footer>
    </div>
  );
}

function App() {
  return (
    <LanguageProvider>
      <MainLayout />
    </LanguageProvider>
  );
}

export default App;
