import type {Metadata} from 'next';
import { Raleway, Open_Sans } from 'next/font/google';
import './globals.css';

const raleway = Raleway({
  subsets: ['latin'],
  variable: '--font-raleway',
});

const openSans = Open_Sans({
  subsets: ['latin'],
  variable: '--font-sans',
});

export const metadata: Metadata = {
  title: 'Portfolio | Pedro Neto',
  description: 'Desenvolvedor Full Stack & Designer',
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="pt-BR" className={`${raleway.variable} ${openSans.variable} scroll-smooth`}>
      <body className="font-sans antialiased bg-white text-[#272829]" suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
