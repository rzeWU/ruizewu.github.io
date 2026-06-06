import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';

export function ScrollIndicator() {
  const { t } = useTranslation();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 1.5, duration: 0.6 }}
      className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
    >
      <span className="text-white/50 text-xs tracking-widest uppercase">
        {t('hero.scrollDown')}
      </span>
      <motion.div
        animate={{ y: [0, 8, 0] }}
        transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
      >
        <svg width="16" height="20" viewBox="0 0 16 20" fill="none">
          <rect x="1" y="1" width="14" height="18" rx="7" stroke="currentColor" strokeOpacity="0.5" strokeWidth="1.5" />
          <motion.rect
            x="6"
            y="4"
            width="4"
            height="6"
            rx="2"
            fill="currentColor"
            fillOpacity="0.6"
            animate={{ y: [0, 6, 0] }}
            transition={{ repeat: Infinity, duration: 1.8, ease: 'easeInOut' }}
          />
        </svg>
      </motion.div>
    </motion.div>
  );
}
