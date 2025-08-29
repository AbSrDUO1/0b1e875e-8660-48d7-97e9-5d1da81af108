import type { Metadata } from 'next';
import { Inter_Tight } from 'next/font/google';
import './globals.css';

const interTight = Inter_Tight({
  variable: '--font-inter-tight',
  subsets: ['latin'],
  weight: [400, 500, 600]
});

export const metadata: Metadata = {
  title: 'Aurora Neon Portfolio',
  description: 'Showcasing personal work in a futuristic layout'
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang='en'>
      <body className={`${interTight.variable} antialiased`}>{children}</body>
    </html>
  );
}
