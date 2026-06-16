'use client';

export function NewsletterForm() {
  return (
    <form onSubmit={(e) => e.preventDefault()} className="space-y-4">
      <input
        type="email"
        placeholder="Email address"
        className="w-full bg-[#252220] border border-[#2E2A27] rounded-[6px] px-4 py-2.5 text-xs focus:outline-none focus:border-[#C9A84C] transition-colors"
      />
      <button className="w-full py-2.5 bg-[#C9A84C] text-[#0D0D0D] font-body text-xs font-bold rounded-[6px] hover:bg-[#E8C97A] transition-colors">
        Join the List
      </button>
    </form>
  );
}
