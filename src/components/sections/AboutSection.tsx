import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { useInView } from '../../hooks/useInView';
import { profile } from '../../data/profile';

export function AboutSection() {
  const { t } = useTranslation('about');
  const { ref, inView } = useInView();

  const content = t('content');
  const heading = t('heading');
  const paragraphs = content.split('\n\n');

  return (
    <section id="about" className="py-24 px-6">
      <div ref={ref} className="max-w-3xl mx-auto">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-serif text-3xl sm:text-4xl font-semibold text-navy-900 mb-10"
        >
          {heading}
        </motion.h2>

        {/* Avatar + intro side by side on desktop */}
        <div className="flex flex-col sm:flex-row gap-8 mb-8">
          {profile.avatarUrl && (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5 }}
              className="flex-shrink-0"
            >
              <img
                src={profile.avatarUrl}
                alt={profile.name}
                className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl border-2 border-brass-400/30 shadow-sm object-cover"
              />
            </motion.div>
          )}
          <div>
            {paragraphs.map((paragraph, i) => (
              <motion.p
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: 0.2 + i * 0.15 }}
                className="text-text-secondary leading-relaxed text-base sm:text-lg mb-5 last:mb-0 font-light"
              >
                {paragraph}
              </motion.p>
            ))}
          </div>
        </div>

        {/* Visual accent */}
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: 40 } : { width: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="h-0.5 bg-brass-400/50 mt-12"
        />
      </div>
    </section>
  );
}
