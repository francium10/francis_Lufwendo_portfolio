import type { Metadata } from 'next';
import { Space_Grotesk, DM_Sans, JetBrains_Mono } from 'next/font/google';
import './globals.css';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

const dmSans = DM_Sans({
  subsets: ['latin'],
  variable: '--font-dm-sans',
  display: 'swap',
});

const jetbrainsMono = JetBrains_Mono({
  subsets: ['latin'],
  variable: '--font-jetbrains',
  display: 'swap',
});

export const metadata: Metadata = {
  title: 'Francis Lufwendo | Biotech × Software Developer',
  description: 'Building the future of biotech with code. MS Biotechnology Management student at Yeshiva University, full-stack developer, and founder of RegComplyAI.',
  keywords: ['biotech', 'software developer', 'full-stack', 'regulatory compliance', 'AI', 'machine learning', 'FDA'],
  authors: [{ name: 'Francis Lufwendo' }],
  openGraph: {
    title: 'Francis Lufwendo | Biotech × Software Developer',
    description: 'Building the future of biotech with code.',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${spaceGrotesk.variable} ${dmSans.variable} ${jetbrainsMono.variable}`}>
      <body className="font-body">
        {/* Noise texture overlay */}
        <div className="fixed inset-0 noise pointer-events-none z-50" />
        
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
