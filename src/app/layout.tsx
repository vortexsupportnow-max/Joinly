import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Joinly — Where Talent Meets Opportunity',
  description:
    'Joinly è la piattaforma all-in-one per freelance e creativi: mostra il tuo portfolio, espandi il tuo network e collabora su progetti reali.',
  keywords: [
    'freelance',
    'portfolio',
    'networking',
    'community',
    'creativi',
    'collaborazione',
    'startup',
  ],
  openGraph: {
    title: 'Joinly — Where Talent Meets Opportunity',
    description:
      'Portfolio. Network. Community. Tutto in un posto.',
    type: 'website',
    locale: 'it_IT',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="it">
      <body>{children}</body>
    </html>
  );
}
