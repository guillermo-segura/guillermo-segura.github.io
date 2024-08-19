import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { Card } from '@/components/Card';
import { Text } from '@/components/Text/Text';
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
    'min-h-screen',
    'p-4',
    'space-y-6',
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
          <Text variant="copyright" color="white" textAlign="center">
            © {new Date().getFullYear()} Guillermo Segura. All rights reserved.
          </Text>
        </main>
      </body>
    </html>
  );
}
