import { motion } from 'framer-motion';
import { useTranslation } from 'react-i18next';
import { Mail, Phone, FileDown, ExternalLink } from 'lucide-react';
import { profile } from '../../data/profile';
import { useInView } from '../../hooks/useInView';

export function ContactSection() {
  const { t } = useTranslation();
  const { ref, inView } = useInView();

  const contactLinks = [
    {
      icon: Mail,
      label: profile.email,
      href: `mailto:${profile.email}`,
      ariaLabel: t('actions.sendEmail'),
    },
    {
      icon: Phone,
      label: profile.phone,
      href: `tel:${profile.phone}`,
      ariaLabel: t('actions.callPhone'),
    },
    {
      icon: ExternalLink,
      label: 'LinkedIn',
      href: profile.linkedin,
      ariaLabel: t('actions.viewLinkedIn'),
      external: true,
    },
    {
      icon: ExternalLink,
      label: 'GitHub',
      href: profile.github,
      ariaLabel: t('actions.viewGitHub'),
      external: true,
    },
    {
      icon: FileDown,
      label: t('nav.downloadCV'),
      href: '/resume-en.pdf',
      ariaLabel: t('nav.downloadCV'),
      download: true,
    },
  ];

  return (
    <section id="contact" className="py-24 px-6 bg-navy-900">
      <div ref={ref} className="max-w-2xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="font-serif text-3xl sm:text-4xl font-semibold text-white mb-4"
        >
          Let's Connect
        </motion.h2>
        <motion.p
          initial={{ opacity: 0, y: 10 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.1 }}
          className="text-white/60 mb-12"
        >
          I'm open to opportunities in finance operations, university administration, and client-facing financial roles.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.2 }}
          className="grid grid-cols-1 sm:grid-cols-2 gap-4"
        >
          {contactLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              target={link.external ? '_blank' : undefined}
              rel={link.external ? 'noopener noreferrer' : undefined}
              download={link.download ? true : undefined}
              aria-label={link.ariaLabel}
              className="flex items-center gap-3 px-5 py-4 rounded-xl bg-white/5 border border-white/10 text-white/70 hover:text-white hover:bg-white/10 hover:border-white/20 transition-all"
            >
              <link.icon size={18} />
              <span className="text-sm">{link.label}</span>
            </a>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
