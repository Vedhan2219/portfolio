'use client';

import { cn } from '@/lib/utils';
import { ButtonHTMLAttributes, forwardRef } from 'react';
import { Slot } from '@radix-ui/react-slot';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'gold' | 'ghost' | 'outline' | 'dark';
  size?: 'sm' | 'md' | 'lg';
  isLoading?: boolean;
  asChild?: boolean;
}

const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'gold', size = 'md', isLoading, children, disabled, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : 'button';
    
    const base =
      'inline-flex items-center justify-center font-body font-medium transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none select-none';

    const variants = {
      gold: 'bg-[#C9A84C] text-[#0D0D0D] hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] hover:bg-[#E8C97A] focus-visible:ring-[#C9A84C]',
      ghost: 'border border-[#C9A84C] text-[#C9A84C] hover:bg-[#C9A84C] hover:text-[#0D0D0D] hover:-translate-y-0.5 focus-visible:ring-[#C9A84C]',
      outline: 'border border-[var(--color-border)] text-[var(--color-ink)] hover:border-[#C9A84C] hover:text-[#C9A84C] focus-visible:ring-[#C9A84C]',
      dark: 'bg-[var(--color-dark)] text-[var(--color-paper)] hover:-translate-y-0.5 hover:shadow-[0_12px_40px_rgba(0,0,0,0.12)] focus-visible:ring-[var(--color-dark)]',
    };

    const sizes = {
      sm: 'px-4 py-2 text-sm rounded-[6px]',
      md: 'px-6 py-3 text-sm rounded-[6px]',
      lg: 'px-8 py-4 text-base rounded-[6px]',
    };

    return (
      <Comp
        ref={ref}
        className={cn(base, variants[variant], sizes[size], className)}
        disabled={disabled || isLoading}
        {...props}
      >
        {isLoading ? (
          <span className="flex items-center gap-2">
            <svg className="animate-spin h-4 w-4" viewBox="0 0 24 24" fill="none">
              <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
              <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z" />
            </svg>
            Sending...
          </span>
        ) : (
          children
        )}
      </Comp>
    );
  }
);
Button.displayName = 'Button';
export { Button };
