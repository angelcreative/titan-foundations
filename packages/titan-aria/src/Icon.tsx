import type { LucideProps } from 'lucide-react';

export type IconSize = 's' | 'm' | 'l';

const sizeMap: Record<IconSize, { px: number; stroke: number }> = {
  s: { px: 12, stroke: 1.25 },
  m: { px: 16, stroke: 1.5 },
  l: { px: 24, stroke: 2 },
};

const classMap: Record<IconSize, string> = {
  s: 'titan-icon-s',
  m: 'titan-icon-m',
  l: 'titan-icon-l',
};

export interface IconProps extends Omit<LucideProps, 'size'> {
  /** Lucide icon component (e.g. from lucide-react). */
  icon: React.ComponentType<LucideProps>;
  size?: IconSize;
}

export function Icon({ icon: LucideIcon, size = 'm', className = '', ...props }: IconProps) {
  const { px, stroke } = sizeMap[size];
  const sizeClass = classMap[size];
  return (
    <span className={`titan-icon ${sizeClass} ${className}`.trim()} aria-hidden>
      <LucideIcon size={px} strokeWidth={stroke} {...props} />
    </span>
  );
}
