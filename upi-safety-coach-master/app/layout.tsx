import type { Metadata, Viewport } from 'next';
import { Inter, Manrope } from 'next/font/google';
import './globals.css';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { LanguageProvider } from '@/lib/language-context';

const inter = Inter({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
});

const manrope = Manrope({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-manrope',
  weight: ['500', '600', '700', '800'],
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  themeColor: '#F8F7F3',
};

export const metadata: Metadata = {
  title: 'Red Dragon AI — UPI Safety Coach',
  description: 'Red Dragon AI-powered UPI fraud awareness, scam pattern recognition, and official cybercrime reporting guidance for Indian digital payment users.',
  keywords: [
    'UPI fraud safety',
    'UPI scam checker',
    '1930 cybercrime helpline',
    'QR code scam',
    'Digital arrest fraud',
    'Cyber crime reporting India',
    'Think before you pay'
  ],
  authors: [{ name: 'UPI Safety Coach Team' }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${manrope.variable}`}>
      <body className="min-h-screen flex flex-col bg-[#F8F7F3] text-[#142B3B] antialiased selection:bg-[#E85D4A]/20 selection:text-[#142B3B]">
        <LanguageProvider>
          <Header />
          <main className="flex-1">
            {children}
          </main>
          <Footer />
        </LanguageProvider>
      </body>
    </html>
  );
}
