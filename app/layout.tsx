import type { Metadata } from 'next';
import { Inter, PT_Sans } from 'next/font/google';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });
const pt_sans = PT_Sans({
  weight: ['400', '700'],
  subsets: ['latin'],
  variable: '--font-pt-sans',
});

export const metadata: Metadata = {
  title: "Nishant's Folio",
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${pt_sans.className} font-sans`}>
        {children}
      </body>
    </html>
  );
}
