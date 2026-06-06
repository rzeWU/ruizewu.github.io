import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Logo } from '../ui/Logo';
import { educationList } from '../../data/education';
import { useInView } from '../../hooks/useInView';

export function EducationSection() {
  const { t } = useTranslation();
  const { ref, inView } = useInView();

  return (
    <section id="education" className="py-24 px-6 bg-warm-50">
      <div ref={ref} className="max-w-5xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-serif text-3xl sm:text-4xl font-semibold text-navy-900 mb-12"
        >
          {t('education.heading')}
        </motion.h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {educationList.map((edu, index) => (
            <motion.div
              key={edu.id}
              initial={{ opacity: 0, y: 24 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: index * 0.12 }}
              className="bg-white rounded-2xl border border-warm-100 p-6 hover:shadow-lg transition-shadow"
              style={{ borderTop: `3px solid ${edu.brandColor}` }}
            >
              <div className="flex justify-center mb-4">
                <Logo logo={edu.logo} size="lg" />
              </div>

              <h3 className="font-serif text-lg font-semibold text-navy-900 text-center mb-1">
                {edu.institution}
              </h3>

              <p className="text-sm text-brass-400 text-center mb-3">
                {edu.startYear} – {edu.endYear}
              </p>

              <p className="text-sm font-medium text-text text-center mb-2">
                {edu.degree}
              </p>

              {edu.field && (
                <p className="text-xs text-text-tertiary text-center italic mb-3">
                  {edu.field}
                </p>
              )}

              <p className="text-sm text-text-secondary leading-relaxed text-center">
                {t(edu.descriptionKey as Parameters<typeof t>[0])}
              </p>

              {edu.noteKey && (
                <p className="text-xs text-text-tertiary text-center mt-2 italic">
                  {t(edu.noteKey as Parameters<typeof t>[0])}
                </p>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
