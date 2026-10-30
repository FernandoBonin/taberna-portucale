import type { Metadata, Viewport } from 'next';
import { Playfair_Display, Plus_Jakarta_Sans } from 'next/font/google';
import './globals.css';

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  weight: ['400', '600', '700', '800'],
  display: 'swap',
});

const jakarta = Plus_Jakarta_Sans({
  subsets: ['latin'],
  variable: '--font-jakarta',
  weight: ['400', '500', '600', '700', '800'],
  display: 'swap',
});

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
  viewportFit: 'cover',
  themeColor: '#183f32',
};

export const metadata: Metadata = {
  title: 'Taberna Portucale - Um pedacinho de Portugal no Tatuapé',
  description:
    'Receitas tradicionais de família, bacalhau nobre da Noruega, vinhos e doces conventuais na Rua Cantagalo, 856 - Tatuapé, São Paulo.',
  openGraph: {
    title: 'Taberna Portucale - Tradição Lusitana no Tatuapé',
    description: 'Bacalhau à Lagareiro, vinhos portugueses e culinária afetiva no Tatuapé.',
    type: 'website',
    locale: 'pt_BR',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Taberna Portucale - Tradição Lusitana no Tatuapé',
    description: 'Receitas tradicionais portuguesas e empório lusitano no Tatuapé.',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR" className={`${playfair.variable} ${jakarta.variable}`}>
      <body className="min-h-screen bg-surface text-on-surface antialiased flex flex-col selection:bg-tertiary-fixed selection:text-on-tertiary-fixed">
        <div className="w-full flex-1 flex flex-col">
          {children}
        </div>
      </body>
    </html>
  );
}
