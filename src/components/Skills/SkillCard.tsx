import { motion } from 'framer-motion';

interface SkillCardProps {
  title: string;
  skills: string[];
  delay: number;
}

export function SkillCard({ title, skills, delay }: SkillCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ duration: 0.6, delay, ease: 'easeOut' }}
      whileHover={{ scale: 1.02 }}
      className="glass-card p-6 flex flex-col h-full relative overflow-hidden group"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/5 rounded-full blur-[50px] group-hover:bg-blue-500/10 transition-colors duration-500" />
      <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-4 z-10">{title}</h3>
      <div className="flex flex-wrap gap-2 z-10">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="px-3 py-1 text-sm font-medium bg-slate-100 dark:bg-slate-800/80 text-blue-600 dark:text-blue-300 border border-slate-200 dark:border-slate-700 rounded-md transition-colors"
          >
            {skill}
          </span>
        ))}
      </div>
    </motion.div>
  );
}
