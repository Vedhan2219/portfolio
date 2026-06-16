'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { toast } from 'sonner';
import { motion } from 'framer-motion';
import { Mail, Phone, MapPin } from 'lucide-react';
import { FaTwitter, FaLinkedinIn, FaInstagram, FaGoodreads } from 'react-icons/fa';
import { Button } from '@/components/ui/Button';
import { SectionHeading } from '@/components/shared/SectionHeading';
import { staggerContainer, staggerChild } from '@/lib/animations';

const schema = z.object({
  name: z.string().min(2, 'Name must be at least 2 characters'),
  email: z.string().email('Please enter a valid email address'),
  phone: z.string().optional(),
  subject: z.string().min(1, 'Please select a subject'),
  message: z.string().min(20, 'Message must be at least 20 characters'),
});

type FormData = z.infer<typeof schema>;

const subjects = [
  'Full-Stack Project',
  'Cloud Infrastructure / DevOps',
  'Technical Consulting',
  'Open Source Collaboration',
  'Contract / Freelance',
  'Other',
];

const socialLinks = [
  { icon: FaTwitter, href: '#', label: 'Twitter / X' },
  { icon: FaLinkedinIn, href: '#', label: 'LinkedIn' },
  { icon: FaInstagram, href: '#', label: 'Instagram' },
  { icon: FaGoodreads, href: '#', label: 'Goodreads' },
];

export function ContactSection() {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormData>({ resolver: zodResolver(schema) });

  const onSubmit = async (data: FormData) => {
    await new Promise((resolve) => setTimeout(resolve, 1200));
    toast.success('Message sent! I\'ll be in touch within 48 hours.', {
      description: `Thanks ${data.name}, looking forward to connecting.`,
    });
    reset();
  };

  const inputClass = (hasError?: boolean) =>
    `w-full px-4 py-3 rounded-[6px] border font-body text-sm bg-[var(--color-paper)] text-[var(--color-ink)] placeholder:text-[var(--color-muted)] focus:outline-none focus:ring-2 focus:ring-[#C9A84C]/40 transition-all ${hasError ? 'border-red-400' : 'border-[var(--color-border)] focus:border-[#C9A84C]'
    }`;

  return (
    <section id="contact" className="py-16 bg-[var(--color-paper)]" aria-label="Contact">
      <div className="max-w-7xl mx-auto px-6">
        <div className="mb-16">
          <SectionHeading
            eyebrow="Get In Touch"
            title="Let's Work Together"
            subtitle="Ready to start a project? Send me a message and I'll respond within 48 hours."
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12">
          {/* Form — 3/5 */}
          <motion.div
            className="lg:col-span-3"
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            <form onSubmit={handleSubmit(onSubmit)} noValidate className="space-y-5">
              <motion.div variants={staggerChild} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="contact-name" className="font-body text-sm font-medium text-[var(--color-ink)] block mb-1.5">
                    Name *
                  </label>
                  <input id="contact-name" {...register('name')} placeholder="Your name" className={inputClass(!!errors.name)} />
                  {errors.name && <p className="mt-1 text-xs text-red-500">{errors.name.message}</p>}
                </div>
                <div>
                  <label htmlFor="contact-email" className="font-body text-sm font-medium text-[var(--color-ink)] block mb-1.5">
                    Email *
                  </label>
                  <input id="contact-email" type="email" {...register('email')} placeholder="your@email.com" className={inputClass(!!errors.email)} />
                  {errors.email && <p className="mt-1 text-xs text-red-500">{errors.email.message}</p>}
                </div>
              </motion.div>

              <motion.div variants={staggerChild} className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="contact-phone" className="font-body text-sm font-medium text-[var(--color-ink)] block mb-1.5">
                    Phone <span className="text-[var(--color-muted)]">(optional)</span>
                  </label>
                  <input id="contact-phone" type="tel" {...register('phone')} placeholder="+1 (555) 000-0000" className={inputClass()} />
                </div>
                <div>
                  <label htmlFor="contact-subject" className="font-body text-sm font-medium text-[var(--color-ink)] block mb-1.5">
                    Subject *
                  </label>
                  <select id="contact-subject" {...register('subject')} className={inputClass(!!errors.subject)}>
                    <option value="">Select a service...</option>
                    {subjects.map((s) => <option key={s} value={s}>{s}</option>)}
                  </select>
                  {errors.subject && <p className="mt-1 text-xs text-red-500">{errors.subject.message}</p>}
                </div>
              </motion.div>

              <motion.div variants={staggerChild}>
                <label htmlFor="contact-message" className="font-body text-sm font-medium text-[var(--color-ink)] block mb-1.5">
                  Message *
                </label>
                <textarea
                  id="contact-message"
                  {...register('message')}
                  placeholder="Tell me about your project..."
                  rows={5}
                  className={inputClass(!!errors.message)}
                  style={{ minHeight: '120px', resize: 'vertical' }}
                />
                {errors.message && <p className="mt-1 text-xs text-red-500">{errors.message.message}</p>}
              </motion.div>

              <motion.div variants={staggerChild}>
                <Button type="submit" variant="gold" size="lg" isLoading={isSubmitting} className="w-full sm:w-auto">
                  Send Message
                </Button>
              </motion.div>
            </form>
          </motion.div>

          {/* Info — 2/5 */}
          <motion.div
            className="lg:col-span-2 space-y-8"
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <div>
              <p className="font-body text-[11px] font-medium tracking-[0.15em] uppercase text-[#C9A84C] mb-5">Contact Info</p>
              <div className="space-y-4">
                {[
                  { icon: Phone, text: '+91 79892 06709', href: 'tel:+917989206709' },
                  { icon: Mail, text: 'vubbapallyvedhan@gmail.com', href: 'mailto:vubbapallyvedhan@gmail.com' },
                  { icon: MapPin, text: ' Hyderabad,Telangana,India', href: '#' },
                ].map(({ icon: Icon, text, href }) => (
                  <a
                    key={text}
                    href={href}
                    className="flex items-center gap-3 font-body text-sm text-[var(--color-muted)] hover:text-[#C9A84C] transition-colors group"
                  >
                    <div className="w-9 h-9 rounded-full bg-[#C9A84C]/10 flex items-center justify-center group-hover:bg-[#C9A84C]/20 transition-colors">
                      <Icon size={15} className="text-[#C9A84C]" />
                    </div>
                    {text}
                  </a>
                ))}
              </div>
            </div>

            <div>
              <p className="font-body text-[11px] font-medium tracking-[0.15em] uppercase text-[#C9A84C] mb-5">Find Me On</p>
              <div className="flex gap-3">
                {socialLinks.map(({ icon: Icon, href, label }) => (
                  <a
                    key={label}
                    href={href}
                    aria-label={label}
                    className="w-10 h-10 rounded-full border border-[var(--color-border)] flex items-center justify-center text-[var(--color-muted)] hover:text-[#C9A84C] hover:border-[#C9A84C] hover:rotate-[15deg] transition-all duration-300"
                  >
                    <Icon size={15} />
                  </a>
                ))}
              </div>
            </div>

            {/* Availability badge */}
            <div className="p-6 rounded-[12px] border border-[#C9A84C]/30 bg-[#C9A84C]/5">
              <div className="flex items-center gap-2 mb-2">
                <div className="w-2 h-2 rounded-full bg-[#C9A84C] animate-pulse" />
                <span className="font-body text-xs font-medium text-[#C9A84C] uppercase tracking-wider">Available Now</span>
              </div>
              <p className="font-body text-sm text-[var(--color-muted)]">
                Currently accepting new projects for Q3 2026. Typical response time: 24–48 hours.
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
