import type { Metadata } from 'next';
import { Cormorant_Garamond, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { MobileActionBar } from '@/components/MobileActionBar';

const cormorant = Cormorant_Garamond({
  variable: '--font-cormorant',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  style: ['normal', 'italic'],
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  variable: '--font-jakarta',
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://unaessence.com.br'),
  title: 'UNA ESSENCE — Spa e Ateliê | "SUA ESSÊNCIA É ÚNICA®"',
  description:
    'Um espaço para desacelerar, cuidar de si e reconectar-se com aquilo que realmente importa. Atendimento acolhedor com a fisioterapeuta Aline Barbosa no Centro de Nova Iguaçu - RJ.',
  keywords: [
    'UNA Essence',
    'UNA Essence Spa',
    'Spa em Nova Iguaçu',
    'Spa Nova Iguaçu',
    'Massagem Nova Iguaçu',
    'Head Spa Nova Iguaçu',
    'Bem-estar Nova Iguaçu',
    'Spa e Ateliê Nova Iguaçu',
    'Aline Barbosa Fisioterapeuta',
    'Autocuidado Baixada Fluminense',
  ],
  authors: [{ name: 'Aline Barbosa — UNA Essence' }],
  creator: 'UNA Essence',
  publisher: 'UNA Essence',
  openGraph: {
    title: 'UNA ESSENCE — Spa e Ateliê | "SUA ESSÊNCIA É ÚNICA®"',
    description:
      'Um espaço para desacelerar, cuidar de si e reconectar-se com aquilo que realmente importa. Centro de Nova Iguaçu - RJ.',
    url: 'https://unaessence.com.br',
    siteName: 'UNA Essence — Spa e Ateliê',
    locale: 'pt_BR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: 'https://unaessence.com.br',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'DaySpa',
    name: 'UNA Essence — Spa e Ateliê',
    alternateName: 'UNA Spa',
    description:
      'Spa boutique e bem-estar através dos toques terapêuticos das massagens, Head Spa e rituais sensoriais no Centro de Nova Iguaçu.',
    url: 'https://unaessence.com.br',
    telephone: '+5521964753383',
    email: 'unaessence.spa@gmail.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Av. Dr. Mario Guimarães, 318, Sala 104',
      addressLocality: 'Nova Iguaçu',
      addressRegion: 'RJ',
      postalCode: '26255-230',
      addressCountry: 'BR',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: -22.7565,
      longitude: -43.4567,
    },
    founder: {
      '@type': 'Person',
      name: 'Aline Barbosa',
      jobTitle: 'Fisioterapeuta e Fundadora da UNA Essence',
    },
    sameAs: ['https://instagram.com/unaessencespa'],
  };

  return (
    <html
      lang="pt-BR"
      className={`${cormorant.variable} ${jakarta.variable} scroll-smooth`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col antialiased bg-una-cream-50 text-una-dark-900 font-sans selection:bg-una-sand-300 selection:text-una-olive-950">
        <Header />
        <div className="flex-1 pb-16 md:pb-0">{children}</div>
        <Footer />
        <MobileActionBar />
      </body>
    </html>
  );
}
