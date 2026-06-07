import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { skills, languages } from '../../data/skills';
import { useInView } from '../../hooks/useInView';
import type { SkillCategory } from '../../types/cv';

const categoryLabels: Record<SkillCategory, string> = {
  technical: 'technical',
  'data-tools': 'dataTools',
  professional: 'professional',
  languages: 'languages',
};

// Skill badge color per category
const categoryColors: Record<SkillCategory, string> = {
  technical: 'bg-navy-900 text-white',
  'data-tools': 'bg-navy-800 text-white',
  professional: 'bg-brass-400/10 text-navy-800 border border-brass-400/30',
  languages: 'bg-warm-50 text-text-secondary',
};

export function SkillsSection() {
  const { t } = useTranslation('skills');
  const { ref, inView } = useInView();

  const grouped = skills.reduce(
    (acc, skill) => {
      if (skill.category !== 'languages') {
        (acc[skill.category] ??= []).push(skill);
      }
      return acc;
    },
    {} as Record<string, typeof skills>
  );

  return (
    <section id="skills" className="py-24 px-6">
      <div ref={ref} className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-serif text-3xl sm:text-4xl font-semibold text-navy-900 mb-12"
        >
          {t('heading')}
        </motion.h2>

        {/* Skill categories */}
        {Object.entries(grouped).map(([category, categorySkills], ci) => (
          <div key={category} className="mb-8 last:mb-0">
            <motion.h3
              initial={{ opacity: 0, x: -10 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.4, delay: ci * 0.1 }}
              className="text-xs uppercase tracking-[0.2em] text-text-tertiary mb-3"
            >
              {t(categoryLabels[category as SkillCategory] || category)}
            </motion.h3>
            <div className="flex flex-wrap gap-2">
              {categorySkills.map((skill, si) => (
                <motion.span
                  key={skill.id}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={inView ? { opacity: 1, scale: 1 } : {}}
                  transition={{
                    duration: 0.3,
                    delay: ci * 0.1 + si * 0.04,
                    type: 'spring',
                    stiffness: 300,
                  }}
                  className={`inline-block px-4 py-2 rounded-full text-sm font-medium ${
                    categoryColors[category as SkillCategory] || 'bg-warm-50 text-text-secondary'
                  }`}
                >
                  {skill.name}
                </motion.span>
              ))}
            </div>
          </div>
        ))}

        {/* Languages */}
        <div className="mt-12 pt-10 border-t border-warm-100">
          <motion.h3
            initial={{ opacity: 0, x: -10 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.4, delay: 0.4 }}
            className="text-xs uppercase tracking-[0.2em] text-text-tertiary mb-3"
          >
            {t('languages')}
          </motion.h3>
          <p className="text-sm text-text-tertiary mb-5">{t('languageNote')}</p>
          <div className="space-y-4 max-w-md">
            {languages.map((lang, li) => (
              <motion.div
                key={lang.name}
                initial={{ opacity: 0 }}
                animate={inView ? { opacity: 1 } : {}}
                transition={{ delay: 0.5 + li * 0.1 }}
                className="flex items-center gap-4"
              >
                <span className="text-sm font-medium text-navy-900 w-24">{lang.name}</span>
                <div className="flex-1 h-2 bg-warm-100 rounded-full overflow-hidden">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={inView ? { width: `${lang.proficiency}%` } : {}}
                    transition={{ duration: 1, delay: 0.6 + li * 0.1, ease: [0.22, 1, 0.36, 1] }}
                    className="h-full rounded-full bg-gradient-to-r from-brass-400 to-brass-300"
                  />
                </div>
                <span className="text-xs text-text-tertiary w-16 text-right">{lang.level}</span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
