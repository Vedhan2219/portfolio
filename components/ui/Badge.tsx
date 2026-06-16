'use client';

import { cn } from '@/lib/utils';
import { HTMLAttributes } from 'react';

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: 'gold' | 'muted' | 'dark' | 'outline';
}

export function Badge({ className, variant = 'muted', children, ...props }: BadgeProps) {
  const variants = {
    gold: 'bg-[#C9A84C]/10 text-[#C9A84C] border border-[#C9A84C]/20',
    muted: 'bg-[var(--color-border)] text-[var(--color-muted)]',
    dark: 'bg-[var(--color-dark)] text-[var(--color-paper)]',
    outline: 'border border-[var(--color-border)] text-[var(--color-muted)]',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center px-3 py-1 rounded-full text-[11px] font-body font-medium tracking-[0.1em] uppercase',
        variants[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}
