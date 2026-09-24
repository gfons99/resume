import { GraduationCap, BookOpen, Award, MapPin } from 'lucide-react';
import { useLanguage } from '../context/useLanguage';

export function EducationSection() {
  const { t } = useLanguage();

  const certifications = [
    t('edu.certs.c1'),
    t('edu.certs.c2'),
    t('edu.certs.c3'),
    t('edu.certs.c4'),
    t('edu.certs.c5'),
  ];

  const coursework = [
    t('edu.coursework.c1'),
    t('edu.coursework.c2'),
    t('edu.coursework.c3'),
    t('edu.coursework.c4'),
    t('edu.coursework.c5'),
    t('edu.coursework.c6'),
    t('edu.coursework.c7'),
    t('edu.coursework.c8'),
  ];

  return (
    <section id="education" className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-100/50 dark:bg-slate-900/20 relative transition-colors duration-700">
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-500/20 to-transparent" />

      <div className="max-w-5xl mx-auto">
        <div className="mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
            {t('edu.title')}
          </h2>
          <div className="w-20 h-1 bg-blue-500 rounded glow-blue" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Degree */}
          <div className="glass-card p-6 lg:col-span-2">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-blue-100 dark:bg-blue-500/10 border border-blue-200 dark:border-blue-500/20 flex-shrink-0">
                <GraduationCap className="w-8 h-8 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-slate-900 dark:text-white">
                  {t('edu.unam.school')}
                </h3>
                <p className="text-blue-600 dark:text-blue-400 font-medium mt-1">
                  {t('edu.unam.degree')}
                </p>
                <p className="text-slate-500 dark:text-slate-400 text-sm mt-1 flex items-center gap-1.5">
                  <MapPin className="w-3.5 h-3.5" />
                  {t('edu.unam.location')}
                </p>
              </div>
            </div>
          </div>

          {/* Relevant Coursework */}
          <div className="glass-card p-6">
            <div className="flex items-center gap-2 mb-4">
              <BookOpen className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                {t('edu.coursework.title')}
              </h3>
            </div>
            <div className="flex flex-wrap gap-2">
              {coursework.map((course, index) => (
                <span
                  key={index}
                  className="px-3 py-1.5 text-sm bg-slate-100 dark:bg-slate-800/80 text-slate-700 dark:text-slate-300 border border-slate-200 dark:border-slate-700 rounded-md"
                >
                  {course}
                </span>
              ))}
            </div>
          </div>

          {/* Certifications */}
          <div className="glass-card p-6">
            <div className="flex items-center gap-2 mb-4">
              <Award className="w-5 h-5 text-blue-600 dark:text-blue-400" />
              <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                {t('edu.certs.title')}
              </h3>
            </div>
            <ul className="space-y-2">
              {certifications.map((cert, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-slate-700 dark:text-slate-300">
                  <span className="text-blue-500 mt-0.5 flex-shrink-0">▸</span>
                  {cert}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
