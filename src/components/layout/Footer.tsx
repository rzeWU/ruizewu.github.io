import { useTranslation } from 'react-i18next';

export function Footer() {
  const { t } = useTranslation();

  return (
    <footer className="bg-navy-900 text-white/60 py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4 text-sm">
        <p>© {new Date().getFullYear()} {t('footer.copyright')}</p>
        <p>{t('footer.builtWith')}</p>
      </div>
    </footer>
  );
}
