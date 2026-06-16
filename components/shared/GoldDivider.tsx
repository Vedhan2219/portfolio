'use client';

export function GoldDivider() {
  return (
    <div className="flex items-center gap-4 my-8">
      <div className="flex-1 h-px bg-[var(--color-border)]" />
      <svg width="10" height="10" viewBox="0 0 10 10" fill="none" className="text-[#C9A84C]">
        <rect x="5" y="0" width="7" height="7" transform="rotate(45 5 5)" fill="currentColor" />
      </svg>
      <div className="flex-1 h-px bg-[var(--color-border)]" />
    </div>
  );
}
