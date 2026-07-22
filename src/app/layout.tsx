import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';
import type React from 'react';
import '@/app/globals.css';
import { LayoutShell } from '@/components/layout-shell';
import { jsonLdScript, organizationJsonLd, SITE_NAME, SITE_URL, websiteJsonLd } from '@/lib/seo';

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SITE_NAME,
    template: `%s | ${SITE_NAME}`,
  },
  description:
    'One command. Any stack. Choose a template, add addons, and ship production-ready V web servers, CLIs, and libraries.',
  keywords: [
    'v templates',
    'vlang starter',
    'create vlang app',
    'v web server',
    'v cli template',
    'vpm',
    'v extensions',
  ],
  authors: [{ name: `${SITE_NAME} Team`, url: SITE_URL }],
  creator: SITE_NAME,
  publisher: SITE_NAME,
  openGraph: {
    title: SITE_NAME,
    description: 'One command. Any stack. Compose templates and addons into production-ready V apps.',
    url: SITE_URL,
    siteName: SITE_NAME,
    images: [
      {
        url: '/og-default.png', // raster fallback
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} – Templates & Extensions`,
      },
      {
        url: '/og-default.svg', // some platforms now support SVG (fallback above covers others)
        width: 1200,
        height: 630,
        alt: `${SITE_NAME} – Templates & Extensions`,
        type: 'image/svg+xml',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: SITE_NAME,
    description: 'Discover V templates and extensions to accelerate your development workflow.',
    images: ['/og-default.png', '/og-default.svg'],
    creator: '@',
  },
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  category: 'technology',
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/favicon.ico' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
    ],
    apple: [{ url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }],
  },
  manifest: '/site.webmanifest',
};
const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-sans' });
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-display',
  weight: ['400', '500', '600', '700'],
});

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.variable} ${spaceGrotesk.variable} font-sans`}>
        <script
          type="application/ld+json"
          // biome-ignore lint/security/noDangerouslySetInnerHtml: contenido controlado
          dangerouslySetInnerHTML={{
            __html: jsonLdScript({
              '@context': 'https://schema.org',
              '@graph': [organizationJsonLd(), websiteJsonLd()],
            }),
          }}
        />
        <LayoutShell>{children}</LayoutShell>
      </body>
    </html>
  );
}
