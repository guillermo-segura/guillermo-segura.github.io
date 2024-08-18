import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Card } from '@/components/Card';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

// https://mycolor.space/gradient3
// https://favicon.io/favicon-generator/
const animatedBg = [
  'bg-dot',
  'bg-dot-size',
  'animate-bg-dot-animation',
  'bg-dark-500',
  'bg-blend-overlay',
];

const classNames = {
  container: [
    'flex',
    'flex-col',
    'items-center',
    'justify-between',
    'min-h-screen',
    'p-4',
    'xs:py-24',
    'xs:px-6',
    'md:px-12',
    'lg:px-24',
  ],
  animatedBg,
};

export const metadata: Metadata = {
  title: "Welcome!",
  description: "Guillermo's homepage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} ${classNames.animatedBg.join(' ')}`}>
        <main className={classNames.container.join(' ')}>
          <Card>
            {children}
          </Card>
        </main>
      </body>
    </html>
  );
}
