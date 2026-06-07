import type { LogoSpec } from '../../types/cv';
import { cn } from '../../utils/cn';

const BASE = import.meta.env.BASE_URL;

interface LogoProps {
  logo: LogoSpec;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const sizeMap = {
  sm: 'h-10 w-10',
  md: 'h-16 w-16',
  lg: 'h-24 w-24',
};

const imgSizeClass = {
  sm: 'max-h-7 max-w-7',
  md: 'max-h-11 max-w-11',
  lg: 'max-h-18 max-w-18',
};

export function Logo({ logo, size = 'md', className }: LogoProps) {
  // Handle both absolute paths (starting with /) and relative paths
  const src = logo.src.startsWith('/') ? `${BASE}${logo.src.slice(1)}` : logo.src;

  return (
    <div
      className={cn(
        'flex-shrink-0 rounded-xl flex items-center justify-center overflow-hidden',
        logo.backgroundColor ? '' : 'bg-white border border-warm-100',
        sizeMap[size],
        className
      )}
      style={logo.backgroundColor ? { backgroundColor: logo.backgroundColor } : undefined}
    >
      <img
        src={src}
        alt={logo.alt}
        className={cn(
          'object-contain',
          size === 'sm' ? 'p-1.5' : size === 'md' ? 'p-2' : 'p-3',
          imgSizeClass[size]
        )}
        loading="lazy"
      />
    </div>
  );
}
