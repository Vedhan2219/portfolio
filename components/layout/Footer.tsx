'use client';

import Link from 'next/link';
import { Mail, ArrowUpRight } from 'lucide-react';
import { FaTwitter, FaLinkedinIn, FaGithub, FaInstagram } from 'react-icons/fa';
import { Button } from '@/components/ui/Button';

const navLinks = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/services' },
  { name: 'Projects', href: '/projects' },
  { name: 'Contact', href: '/contact' },
];

export function Footer() {
  return (
    <footer className="bg-[var(--color-dark)] text-[#FAF8F4] border-t border-[#2E2A27]">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-12">
          {/* Brand */}
          <div className="md:col-span-4">
            <Link href="/" className="font-display text-2xl font-[400] text-[#FAF8F4] mb-4 inline-block">
              vubbapally Vedhanta Kumar<span className="text-[#C9A84C]">.</span>
            </Link>
            <p className="font-body text-sm text-[#A89E92] leading-relaxed mb-6 max-w-sm">
              Engineering high-performance digital systems for the next generation of web applications.
            </p>
            <div className="flex gap-3">
              {[
                { icon: FaTwitter, href: '#', label: 'Twitter' },
                { icon: FaLinkedinIn, href: '#', label: 'LinkedIn' },
                { icon: FaGithub, href: '#', label: 'GitHub' },
              ].map(({ icon: Icon, href, label }) => (
                <a
                  key={label}
                  href={href}
                  aria-label={label}
                  className="w-9 h-9 rounded-full border border-[#2E2A27] flex items-center justify-center text-[#A89E92] hover:text-[#C9A84C] hover:border-[#C9A84C] transition-all"
                >
                  <Icon size={14} />
                </a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-2">
            <h4 className="font-body text-[10px] font-bold tracking-[0.2em] uppercase text-[#C9A84C] mb-6">Navigation</h4>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.name}>
                  <Link href={link.href} className="font-body text-sm text-[#A89E92] hover:text-[#C9A84C] transition-colors">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div className="md:col-span-3">
            <h4 className="font-body text-[10px] font-bold tracking-[0.2em] uppercase text-[#C9A84C] mb-6">Inquiries</h4>
            <div className="space-y-4">
              <a href="mailto:vubbapallyvedhan@gmail.com" className="flex items-center gap-2 group">
                <Mail size={16} className="text-[#C9A84C]" />
                <span className="font-body text-sm text-[#A89E92] group-hover:text-[#FAF8F4] transition-colors">vubbapallyvedhan@gmail.com</span>
              </a>
              <p className="font-body text-sm text-[#A89E92]">Available for remote contracts worldwide.</p>
            </div>
          </div>

          {/* Newsletter */}
          <div className="md:col-span-3">
            <h4 className="font-body text-[10px] font-bold tracking-[0.2em] uppercase text-[#C9A84C] mb-6">Tech Newsletter</h4>
            <p className="font-body text-xs text-[#A89E92] mb-4">Quarterly insights on cloud architecture.</p>
            <form onSubmit={(e) => e.preventDefault()} className="flex gap-2">
              <input
                type="email"
                placeholder="Email address"
                className="flex-1 bg-[#252220] border border-[#2E2A27] rounded-[6px] px-3 py-2 text-xs focus:outline-none focus:border-[#C9A84C] transition-colors"
              />
              <button className="p-2 bg-[#C9A84C] text-[#0D0D0D] rounded-[6px] hover:bg-[#E8C97A] transition-colors">
                <ArrowUpRight size={16} />
              </button>
            </form>
          </div>
        </div>

        {/* Bottom */}
        <div className="pt-8 border-t border-[#2E2A27] flex flex-col md:flex-row justify-between gap-4">
          <p className="font-body text-xs text-[#6B6356]">
            © {new Date().getFullYear()} vubbapally Vedhanta Kumar. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="#" className="font-body text-xs text-[#6B6356] hover:text-[#A89E92]">Privacy Policy</Link>
            <Link href="#" className="font-body text-xs text-[#6B6356] hover:text-[#A89E92]">Terms of Service</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
