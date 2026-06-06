import type { LogoSpec } from '../../types/cv';
import { cn } from '../../utils/cn';

interface LogoProps {
  logo: LogoSpec;
  size?: 'sm' | 'md' | 'lg';
  className?: string;
}

const sizeMap = {
  sm: 'h-8 w-8',
  md: 'h-14 w-14',
  lg: 'h-20 w-20',
};

export function Logo({ logo, size = 'md', className }: LogoProps) {
  return (
    <div
      className={cn(
        'flex-shrink-0 rounded-xl overflow-hidden flex items-center justify-center bg-white',
        sizeMap[size],
        className
      )}
      style={logo.backgroundColor ? { backgroundColor: logo.backgroundColor } : undefined}
    >
      <img
        src={logo.src}
        alt={logo.alt}
        className={cn(
          'object-contain',
          size === 'sm' ? 'p-1' : size === 'md' ? 'p-2' : 'p-3',
          size === 'sm' ? 'max-h-6 max-w-6' : size === 'md' ? 'max-h-10 max-w-10' : 'max-h-16 max-w-16'
        )}
        onError={(e) => {
          // Fallback: show initials if logo fails to load
          const target = e.currentTarget;
          const parent = target.parentElement;
          if (parent) {
            target.style.display = 'none';
            const span = document.createElement('span');
            span.className = 'text-white font-serif font-bold ' + (size === 'sm' ? 'text-xs' : size === 'md' ? 'text-sm' : 'text-lg');
            span.textContent = logo.alt.split(' ').map(w => w[0]).join('').slice(0, 3);
            parent.appendChild(span);
          }
        }}
      />
    </div>
  );
}
