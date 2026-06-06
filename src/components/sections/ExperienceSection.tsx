import { useState, useCallback } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { ChevronDown } from 'lucide-react';
import { experiences } from '../../data/experiences';
import { skills as allSkills } from '../../data/skills';
import { Logo } from '../ui/Logo';
import { useInView } from '../../hooks/useInView';
import { useReducedMotion } from '../../hooks/useReducedMotion';
import type { Experience } from '../../types/cv';

function formatDate(start: string, end: string | null): string {
  const startDate = new Date(start + '-01');
  const endDate = end ? new Date(end + '-01') : null;
  const fmt = new Intl.DateTimeFormat('en-US', { year: 'numeric', month: 'short' });
  const startStr = fmt.format(startDate);
  if (!endDate) return `${startStr} – Present`;
  return `${startStr} – ${fmt.format(endDate)}`;
}

export function ExperienceSection() {
  const { t } = useTranslation();
  const { ref, inView } = useInView();
  const [expandedId, setExpandedId] = useState<string | null>(null);
  const reducedMotion = useReducedMotion();

  const toggle = useCallback((id: string) => {
    setExpandedId(prev => prev === id ? null : id);
  }, []);

  return (
    <section id="experience" className="py-24 px-6">
      <div ref={ref} className="max-w-4xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-serif text-3xl sm:text-4xl font-semibold text-navy-900 mb-4"
        >
          {t('experience.heading')}
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-text-tertiary text-sm mb-12"
        >
          Click any card to explore the details
        </motion.p>

        {/* Timeline */}
        <div className="relative pl-10 sm:pl-14">
          {/* Vertical line */}
          <div className="absolute left-3 sm:left-4 top-0 bottom-0 w-px bg-brass-400/20" />

          {experiences.map((exp, index) => (
            <ExperienceCardItem
              key={exp.id}
              experience={exp}
              index={index}
              isExpanded={expandedId === exp.id}
              onToggle={() => toggle(exp.id)}
              inView={inView}
              reducedMotion={reducedMotion}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

interface CardProps {
  experience: Experience;
  index: number;
  isExpanded: boolean;
  onToggle: () => void;
  inView: boolean;
  reducedMotion: boolean;
}

function ExperienceCardItem({ experience: exp, index, isExpanded, onToggle, inView, reducedMotion }: CardProps) {
  const { t } = useTranslation();
  const isHKBU = exp.type === 'work';

  const relatedSkills = allSkills.filter((s) => exp.skills.includes(s.id));

  return (
    <motion.div
      initial={reducedMotion ? {} : { opacity: 0, x: -20 }}
      animate={inView ? { opacity: 1, x: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.12 }}
      className="relative mb-6 last:mb-0"
    >
      {/* Timeline dot */}
      <div
        className="absolute left-0 top-7 sm:top-8 w-6 sm:w-8 -translate-x-[calc(100%+1px)] flex justify-center"
        style={{ zIndex: 10 }}
      >
        <div
          className={`w-3 h-3 rounded-full border-2 ${
            isHKBU ? 'border-navy-900 bg-navy-900' : 'border-warm-100 bg-white'
          }`}
        />
      </div>

      {/* Card */}
      <motion.div
        layout={!reducedMotion}
        onClick={onToggle}
        className="relative bg-white rounded-2xl border border-warm-100 cursor-pointer overflow-hidden group transition-shadow hover:shadow-lg"
        style={{ borderLeft: `4px solid ${exp.brandColor}` }}
        role="button"
        tabIndex={0}
        aria-expanded={isExpanded}
        onKeyDown={(e) => {
          if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            onToggle();
          }
        }}
      >
        {/* Collapsed header */}
        <div className="p-5 sm:p-6">
          <div className="flex items-start gap-4">
            <Logo logo={exp.logo} size="md" />

            <div className="flex-1 min-w-0">
              <div className="flex items-start justify-between gap-2">
                <div>
                  <h3 className="font-serif text-lg sm:text-xl font-semibold text-navy-900 leading-snug">
                    {exp.organization}
                  </h3>
                  <p className="text-sm text-text-secondary mt-0.5">{exp.role}</p>
                </div>
                <div className="text-right flex-shrink-0">
                  <span className="text-xs text-text-tertiary">{formatDate(exp.startDate, exp.endDate)}</span>
                  <motion.div
                    animate={{ rotate: isExpanded ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex justify-end mt-1"
                  >
                    <ChevronDown size={16} className="text-text-tertiary" />
                  </motion.div>
                </div>
              </div>

              <p className="text-sm text-text-secondary mt-3 leading-relaxed">
                {t(exp.summaryKey as Parameters<typeof t>[0])}
              </p>
            </div>
          </div>
        </div>

        {/* Expanded content */}
        <AnimatePresence initial={false}>
          {isExpanded && (
            <motion.div
              key="expanded"
              initial={reducedMotion ? { opacity: 1 } : { height: 0, opacity: 0 }}
              animate={{ height: 'auto', opacity: 1 }}
              exit={reducedMotion ? { opacity: 1 } : { height: 0, opacity: 0 }}
              transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
              className="overflow-hidden"
            >
              <div className="px-5 sm:px-6 pb-6 border-t border-warm-100 pt-5">
                {/* Metrics */}
                {exp.metrics.length > 0 && (
                  <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 mb-6">
                    {exp.metrics.map((m) => (
                      <div key={m.label} className="bg-warm-50 rounded-xl p-3 text-center">
                        <div className="font-serif text-xl font-semibold text-navy-900">{m.value}</div>
                        <div className="text-xs text-text-tertiary mt-0.5">{m.label}</div>
                      </div>
                    ))}
                  </div>
                )}

                {/* Descriptions */}
                <ul className="space-y-3">
                  {exp.descriptionKeys.map((key, i) => (
                    <motion.li
                      key={key}
                      initial={reducedMotion ? {} : { opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08 }}
                      className="text-sm text-text-secondary leading-relaxed flex gap-2"
                    >
                      <span className="text-brass-400 mt-0.5 flex-shrink-0">▸</span>
                      <span>{t(key as Parameters<typeof t>[0])}</span>
                    </motion.li>
                  ))}
                </ul>

                {/* Skills */}
                {relatedSkills.length > 0 && (
                  <div className="mt-6">
                    <p className="text-xs text-text-tertiary uppercase tracking-wider mb-2.5">Skills Applied</p>
                    <div className="flex flex-wrap gap-1.5">
                      {relatedSkills.map((skill) => (
                        <span
                          key={skill.id}
                          className="inline-block px-3 py-1 rounded-full text-xs font-medium bg-navy-900/5 text-navy-800"
                        >
                          {skill.name}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.div>
  );
}
