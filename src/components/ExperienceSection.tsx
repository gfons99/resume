import { Briefcase, Calendar, MapPin } from 'lucide-react';
import { useLanguage } from '../context/useLanguage';

interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  location: string;
  bullets: string[];
  isCurrent?: boolean;
}

export function ExperienceSection() {
  const { t } = useLanguage();

  const experiences: ExperienceItem[] = [
    {
      company: t('exp.zifo.company'),
      role: t('exp.zifo.role'),
      period: t('exp.zifo.period'),
      location: t('exp.zifo.location'),
      bullets: [
        t('exp.zifo.b1'),
        t('exp.zifo.b2'),
        t('exp.zifo.b3'),
        t('exp.zifo.b4'),
        t('exp.zifo.b5'),
        t('exp.zifo.b6'),
        t('exp.zifo.b7'),
      ],
    },
    {
      company: t('exp.siemens.company'),
      role: t('exp.siemens.role'),
      period: t('exp.siemens.period'),
      location: t('exp.siemens.location'),
      bullets: [
        t('exp.siemens.b1'),
        t('exp.siemens.b2'),
        t('exp.siemens.b3'),
        t('exp.siemens.b4'),
      ],
    },
    {
      company: t('exp.qualfon.company'),
      role: t('exp.qualfon.role'),
      period: t('exp.qualfon.period'),
      location: t('exp.qualfon.location'),
      bullets: [
        t('exp.qualfon.b1'),
        t('exp.qualfon.b2'),
      ],
    },
  ];

  return (
    <section id="experience" className="py-20 px-4 sm:px-6 lg:px-8 relative">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            {t('exp.title')}
          </h2>
          <div className="w-20 h-1 bg-blue-500 rounded glow-blue" />
        </div>

        <div className="relative">
          {/* Timeline line */}
          <div className="absolute left-[19px] top-2 bottom-2 w-[2px] bg-gradient-to-b from-blue-500 via-blue-500/40 to-transparent hidden md:block" />

          <div className="space-y-10">
            {experiences.map((exp, index) => (
              <div
                key={index}
                className="relative md:pl-14"
              >
                {/* Timeline dot */}
                <div className="absolute left-[11px] top-1.5 hidden md:flex">
                  <div className={`w-[18px] h-[18px] rounded-full border-2 ${
                    exp.isCurrent || index === 0
                      ? 'border-blue-500 dark:border-blue-400 bg-blue-500 glow-blue' 
                      : 'border-slate-300 dark:border-slate-600 bg-white dark:bg-slate-800'
                  }`} />
                </div>

                <div className="glass-card p-6 group hover:border-blue-500/50 transition-all duration-300">
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-3">
                    <div>
                      <h3 className="text-xl font-bold text-slate-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-300 transition-colors">
                        {exp.company}
                      </h3>
                      <p className="text-blue-600 dark:text-blue-400 font-medium text-sm">{exp.role}</p>
                    </div>
                    <div className="flex flex-col sm:items-end mt-2 sm:mt-0 text-sm text-slate-500 dark:text-slate-400">
                      <span className="flex items-center gap-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        {exp.period}
                      </span>
                      <span className="flex items-center gap-1.5 mt-0.5">
                        <MapPin className="w-3.5 h-3.5" />
                        {exp.location}
                      </span>
                    </div>
                  </div>

                  {exp.isCurrent && (
                    <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-medium bg-blue-100 dark:bg-blue-500/20 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-500/30 mb-3">
                      <Briefcase className="w-3 h-3" />
                      {t('exp.current')}
                    </span>
                  )}

                  <ul className="space-y-2 mt-2">
                    {exp.bullets.map((bullet, bi) => (
                      <li key={bi} className="flex items-start gap-2 text-slate-700 dark:text-slate-300 text-sm leading-relaxed">
                        <span className="text-blue-500 mt-1.5 flex-shrink-0">▸</span>
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
