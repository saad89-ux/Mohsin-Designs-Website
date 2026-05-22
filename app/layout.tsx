import type { Metadata } from 'next';
import { Navbar } from '@/components/navbar';
import { Footer } from '@/components/footer';
import { SmoothScrollProvider } from '@/components/motion/smooth-scroll-provider';
import { CursorGlow } from '@/components/motion/cursor-glow';
import '@/styles/globals.css';

export const metadata: Metadata = {
  title: {
    default: 'Lumina Motion Labs - Digital Growth & Design',
    template: '%s | Lumina Motion Labs',
  },
  description:
    'Award-winning digital agency specializing in web design, branding, and digital marketing. Transform your brand with cutting-edge solutions.',
  keywords: [
    'digital agency',
    'web design',
    'branding',
    'digital marketing',
    'SEO',
    'logo design',
  ],
  authors: [{ name: 'Lumina Motion Labs' }],
  creator: 'Lumina Motion Labs',
  metadataBase: new URL('https://luminamotionlabs.com'),
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://luminamotionlabs.com',
    title: 'Lumina Motion Labs - Digital Growth & Design',
    description:
      'Award-winning digital agency specializing in web design, branding, and digital marketing.',
    siteName: 'Lumina Motion Labs',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Lumina Motion Labs - Digital Growth & Design',
    description:
      'Award-winning digital agency specializing in web design, branding, and digital marketing.',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
      </head>
      <body className="bg-background antialiased">
        <SmoothScrollProvider>
          <CursorGlow />
          <Navbar />
          <main className="relative overflow-x-hidden">
            {children}
          </main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
