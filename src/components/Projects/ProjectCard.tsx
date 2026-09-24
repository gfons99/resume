import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Code, LayoutTemplate, TerminalSquare, Info, ExternalLink } from 'lucide-react';
import { cn } from '../../lib/utils';
import { useLanguage } from '../../context/useLanguage';

interface ProjectCardProps {
  title: string;
  role: string;
  description: string;
  techTags: string[];
  codeSnippet: string;
  outcome: string;
  liveUrl?: string;
}

export function ProjectCard({
  title,
  role,
  description,
  techTags,
  codeSnippet,
  outcome,
  liveUrl
}: ProjectCardProps) {
  const { t } = useLanguage();
  const [activeTab, setActiveTab] = useState<'overview' | 'code' | 'result'>('overview');

  return (
    <div 
      className="glass-card flex flex-col overflow-hidden border border-slate-300 dark:border-slate-700/60 shadow-lg glow-blue hover:shadow-blue-500/20 transition-all duration-300"
    >
      <div className="p-1 border-b border-slate-300 dark:border-slate-700/60 bg-slate-200/50 dark:bg-slate-900/50 flex items-center justify-between">
        <div className="flex space-x-2 px-3">
          <div className="w-3 h-3 rounded-full bg-red-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
          <div className="w-3 h-3 rounded-full bg-green-500/80"></div>
        </div>
        <div className="text-xs text-slate-500 dark:text-slate-400 font-mono pr-4">{title.toLowerCase().replace(/\s/g, '_')}.exe</div>
      </div>

      <div className="p-6">
        <div className="flex items-start justify-between gap-2 mb-1">
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white">{title}</h3>
          {liveUrl && (
            <a
              href={liveUrl}
              target="_blank"
              rel="noreferrer"
              className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md bg-blue-50 dark:bg-blue-900/30 text-xs text-blue-600 dark:text-blue-400 hover:text-blue-500 border border-blue-200 dark:border-blue-500/30 font-mono transition-colors"
            >
              <span>planetagema.com</span>
              <ExternalLink className="w-3.5 h-3.5" />
            </a>
          )}
        </div>
        <p className="text-blue-600 dark:text-blue-400 text-sm font-medium mb-4">{role}</p>

        <div className="flex flex-wrap gap-2 mb-6">
          {techTags.map((tag) => (
            <span key={tag} className="px-2 py-1 text-xs font-mono bg-blue-100 dark:bg-blue-900/40 text-blue-700 dark:text-blue-300 rounded border border-blue-200 dark:border-blue-500/30">
              {tag}
            </span>
          ))}
        </div>

        <div className="flex space-x-2 border-b border-slate-300 dark:border-slate-700/50 mb-4 pb-2">
          <button
            onClick={() => setActiveTab('overview')}
            className={cn("flex items-center space-x-2 px-3 py-1.5 text-sm font-medium rounded-md transition-colors cursor-pointer", activeTab === 'overview' ? "bg-slate-200 dark:bg-slate-800 text-slate-900 dark:text-white" : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200")}
          >
            <Info className="w-4 h-4" />
            <span>{t('projects.tab.overview')}</span>
          </button>
          <button
            onClick={() => setActiveTab('code')}
            className={cn("flex items-center space-x-2 px-3 py-1.5 text-sm font-medium rounded-md transition-colors cursor-pointer", activeTab === 'code' ? "bg-slate-200 dark:bg-slate-800 text-blue-600 dark:text-blue-400" : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200")}
          >
            <Code className="w-4 h-4" />
            <span>{t('projects.tab.code')}</span>
          </button>
          <button
            onClick={() => setActiveTab('result')}
            className={cn("flex items-center space-x-2 px-3 py-1.5 text-sm font-medium rounded-md transition-colors cursor-pointer", activeTab === 'result' ? "bg-slate-200 dark:bg-slate-800 text-green-600 dark:text-green-400" : "text-slate-500 dark:text-slate-400 hover:text-slate-900 dark:hover:text-slate-200")}
          >
            <LayoutTemplate className="w-4 h-4" />
            <span>{t('projects.tab.result')}</span>
          </button>
        </div>

        <div className="min-h-[200px] relative">
          <AnimatePresence mode="wait">
            {activeTab === 'overview' && (
              <motion.div
                key="overview"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="text-slate-700 dark:text-slate-300 leading-relaxed text-sm sm:text-base"
              >
                {description}
              </motion.div>
            )}

            {activeTab === 'code' && (
              <motion.div
                key="code"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="bg-slate-100 dark:bg-[#0d1117] p-4 rounded-md border border-slate-300 dark:border-slate-800 font-mono text-xs sm:text-sm overflow-x-auto text-slate-800 dark:text-slate-300 whitespace-pre max-h-[300px]"
              >
                {codeSnippet}
              </motion.div>
            )}

            {activeTab === 'result' && (
              <motion.div
                key="result"
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: 10 }}
                className="flex flex-col items-center justify-center p-6 border-2 border-dashed border-slate-300 dark:border-slate-700/50 rounded-lg bg-slate-100 dark:bg-slate-900/30 text-center"
              >
                <TerminalSquare className="w-10 h-10 text-blue-500/50 mb-3" />
                <p className="text-center text-slate-700 dark:text-slate-300 font-medium text-sm sm:text-base mb-4">{outcome}</p>
                {liveUrl ? (
                  <a
                    href={liveUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-blue-600 hover:bg-blue-500 text-white text-xs sm:text-sm font-medium rounded-lg shadow-md glow-blue transition-all"
                  >
                    <span>{t('projects.visitLive')}</span>
                    <ExternalLink className="w-4 h-4" />
                  </a>
                ) : (
                  <div className="px-3 py-1.5 bg-white dark:bg-slate-800 text-slate-500 dark:text-slate-400 text-xs rounded border border-slate-300 dark:border-slate-700">
                    Production / Test Suite Verified
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
