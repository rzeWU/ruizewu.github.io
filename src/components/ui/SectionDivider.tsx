import { motion } from 'framer-motion';
import { useInView } from '../../hooks/useInView';

export function SectionDivider() {
  const { ref, inView } = useInView({ threshold: 0.5 });

  return (
    <div ref={ref} className="py-8 flex justify-center">
      <motion.div
        initial={{ width: 0 }}
        animate={inView ? { width: 60 } : { width: 0 }}
        transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
        className="h-px bg-brass-400/40"
      />
    </div>
  );
}
