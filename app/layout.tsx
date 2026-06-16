import type { Metadata } from 'next';
import { Cormorant_Garamond, DM_Sans, Dancing_Script } from 'next/font/google';
import './globals.css';
import { ThemeProvider } from 'next-themes';
import { Toaster } from 'sonner';
import { Navbar } from '@/components/layout/Navbar';
import { Footer } from '@/components/layout/Footer';
import { CustomCursor } from '@/components/layout/CustomCursor';
import { ScrollProgress } from '@/components/shared/ScrollProgress';

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-cormorant',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-dm-sans',
});

const dancingScript = Dancing_Script({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-dancing-script',
});

export const metadata: Metadata = {
  title: {
    default: 'Vubbapally Vedhanta Kumar — Senior Software Engineer & Cloud Architect',
    template: '%s | Vubbapally Vedhanta Kumar',
  },
  description:
    'software engineer specialized in building scalable cloud-native applications. Expert in React, Go, and Kubernetes.',
  keywords: ['Vubbapally Vedhanta Kumar', 'software engineer', 'cloud architect', 'full-stack developer', 'react expert', 'kubernetes'],
  authors: [{ name: 'Vubbapally Vedhanta Kumar' }],
  creator: 'Vubbapally Vedhanta Kumar',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://vedhan.dev',
    title: 'vubbapally Vedhanta Kumar — Senior Software Engineer & Cloud Architect',
    description: 'Portfolio of a senior software engineer specializing in scalable cloud architecture and high-performance applications.',
    siteName: 'vubbapally Vedhanta Kumar',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'vubbapally Vedhanta Kumar — Senior Software Engineer & Cloud Architect',
    description: 'Senior software engineer specialized in building scalable cloud-native applications.',
    creator: '@vedhan',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning className={`${cormorant.variable} ${dmSans.variable} ${dancingScript.variable}`}>
      <body>
        <ThemeProvider attribute="class" defaultTheme="light" enableSystem={false}>
          <CustomCursor />
          <ScrollProgress />
          <Navbar />
          <main id="main-content" role="main">
            {children}
          </main>
          <Footer />
          <Toaster
            position="bottom-right"
            toastOptions={{
              style: {
                background: '#252220',
                border: '1px solid #C9A84C',
                color: '#FAF8F4',
              },
            }}
          />
        </ThemeProvider>
      </body>
    </html>
  );
}
