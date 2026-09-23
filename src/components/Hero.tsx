import { motion, type Variants } from 'framer-motion';
import { Download, Mail, Github, Linkedin, MapPin, Sparkles } from 'lucide-react';
import { cn } from '../lib/utils';
import { useLanguage } from '../context/useLanguage';

export function Hero() {
  const { t } = useLanguage();

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: 'easeOut' } },
  };

  return (
    <section id="home" className="min-h-screen flex items-center pt-24 pb-12 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-500/10 rounded-full blur-[100px] pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />
      
      <motion.div
        className="max-w-6xl mx-auto z-10 w-full"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        <div className="grid grid-cols-2 lg:grid-cols-[1fr_auto] gap-x-4 sm:gap-x-8 lg:gap-x-16 gap-y-6 sm:gap-y-8 items-start">
          {/* Text content */}
          <div className="col-span-2 lg:col-span-1 lg:row-start-1">
            <motion.div variants={itemVariants} className="flex items-center space-x-2.5 mb-6">
              <div className="p-1.5 rounded-lg bg-blue-100 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 text-blue-600 dark:text-blue-400">
                <MapPin className="w-4 h-4" />
              </div>
              <span className="text-blue-700 dark:text-blue-400 font-mono tracking-wider text-sm font-semibold uppercase">
                {t('hero.location')}
              </span>
            </motion.div>

            <motion.h1 variants={itemVariants} className="text-4xl sm:text-5xl md:text-7xl font-bold text-slate-900 dark:text-white mb-4 tracking-tight leading-tight">
              Gadiel M. <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 dark:from-blue-400 to-indigo-600 dark:to-indigo-500 text-glow">Fonseca R.</span>
            </motion.h1>

            <motion.p variants={itemVariants} className="text-xl md:text-2xl text-slate-700 dark:text-slate-300 font-medium mb-4">
              {t('hero.role')}
            </motion.p>

            <motion.p variants={itemVariants} className="text-lg text-slate-600 dark:text-slate-400 mb-6 sm:mb-8 max-w-2xl leading-relaxed">
              {t('hero.bio')}
            </motion.p>
          </div>

          {/* Actions & Contacts */}
          <motion.div
            variants={itemVariants}
            className="col-span-1 lg:col-span-1 lg:row-start-2 flex flex-col justify-between w-full max-w-[208px] sm:w-60 sm:max-w-none aspect-[3/4] sm:aspect-auto sm:h-[320px] lg:aspect-auto lg:h-auto lg:justify-start gap-1.5 sm:gap-2.5 lg:gap-4"
          >
            <a
              href={`${import.meta.env.BASE_URL}gadiel-fonseca-master-resume.pdf`}
              download="gadiel-fonseca-master-resume.pdf"
              className={cn(
                "flex-1 lg:flex-initial w-full lg:w-auto flex items-center justify-center space-x-1.5 sm:space-x-2 px-2.5 sm:px-6 py-2 sm:py-3 rounded-xl bg-blue-600 hover:bg-blue-500 text-white font-medium text-xs sm:text-sm lg:text-base transition-all shadow-md glow-blue hover:glow-blue-strong text-center"
              )}
            >
              <Download className="w-3.5 h-3.5 sm:w-4 sm:h-4 lg:w-5 lg:h-5 flex-shrink-0" />
              <span className="truncate">{t('hero.downloadResume')}</span>
            </a>

            {/* Contact information list */}
            <div className="flex-[3] lg:flex-initial flex flex-col justify-between gap-1.5 sm:gap-2.5 lg:flex-row lg:flex-wrap lg:gap-3 lg:pt-1">
              <a
                href="mailto:gadielfonsecamx@gmail.com"
                className="flex-1 lg:flex-initial flex items-center space-x-1.5 sm:space-x-2 px-2 sm:px-3.5 py-1.5 sm:py-2 rounded-xl glass-card text-xs sm:text-sm text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-300 hover:border-blue-500/50 transition-all group cursor-pointer w-full lg:w-auto overflow-hidden"
              >
                <Mail className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform flex-shrink-0" />
                <span className="font-mono text-[10px] sm:text-xs lg:text-sm text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-300 truncate">
                  gadielfonsecamx@gmail.com
                </span>
              </a>

              <a
                href="https://github.com/gfons99"
                target="_blank"
                rel="noreferrer"
                className="flex-1 lg:flex-initial flex items-center space-x-1.5 sm:space-x-2 px-2 sm:px-3.5 py-1.5 sm:py-2 rounded-xl glass-card text-xs sm:text-sm text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-300 hover:border-blue-500/50 transition-all group cursor-pointer w-full lg:w-auto overflow-hidden"
              >
                <Github className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform flex-shrink-0" />
                <span className="font-mono text-xs sm:text-sm text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-300 truncate">
                  gfons99
                </span>
              </a>

              <a
                href="https://www.linkedin.com/in/gadiel-fonseca/"
                target="_blank"
                rel="noreferrer"
                className="flex-1 lg:flex-initial flex items-center space-x-1.5 sm:space-x-2 px-2 sm:px-3.5 py-1.5 sm:py-2 rounded-xl glass-card text-xs sm:text-sm text-slate-700 dark:text-slate-300 hover:text-blue-600 dark:hover:text-blue-300 hover:border-blue-500/50 transition-all group cursor-pointer w-full lg:w-auto overflow-hidden"
              >
                <Linkedin className="w-3.5 h-3.5 sm:w-4 sm:h-4 text-blue-600 dark:text-blue-400 group-hover:scale-110 transition-transform flex-shrink-0" />
                <span className="font-mono text-[11px] sm:text-xs lg:text-sm text-slate-700 dark:text-slate-300 group-hover:text-blue-600 dark:group-hover:text-blue-300 truncate">
                  gadiel-fonseca
                </span>
              </a>
            </div>
          </motion.div>

          {/* Personal Photo */}
          <motion.div
            variants={itemVariants}
            className="col-span-1 lg:col-span-1 lg:row-start-1 lg:row-span-2 flex-shrink-0 flex flex-col items-center justify-start lg:self-start w-full"
          >
            <div className="w-full max-w-[208px] sm:w-60 sm:max-w-none sm:h-[320px] lg:w-68 lg:h-[363px] aspect-[3/4] sm:aspect-auto rounded-2xl glass-card relative overflow-hidden group shadow-xl border border-blue-500/20 dark:border-blue-500/30 glow-blue transition-all duration-500 hover:shadow-blue-500/30">
              <img
                src={`${import.meta.env.BASE_URL}20260619.png`}
                alt="Gadiel M. Fonseca R."
                className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-105"
                loading="eager"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent opacity-50 pointer-events-none" />
            </div>

            {/* AI Enhancement Note */}
            <div className="mt-2 sm:mt-3 max-w-[270px] w-full flex flex-col items-center text-center">
              <div className="inline-flex items-center gap-1 sm:gap-1.5 px-2 py-0.5 rounded-full bg-blue-500/10 dark:bg-blue-500/15 border border-blue-500/20 text-blue-600 dark:text-blue-400 text-[10px] sm:text-[11px] font-mono mb-1">
                <Sparkles className="w-2.5 h-2.5 sm:w-3 sm:h-3" />
                <span>{t('hero.aiBadge')}</span>
              </div>
              <p className="text-[9.5px] sm:text-[10.5px] text-slate-500 dark:text-slate-400 font-mono leading-tight">
                {t('hero.aiNote')}
              </p>
            </div>
          </motion.div>
        </div>
      </motion.div>
    </section>
  );
}
