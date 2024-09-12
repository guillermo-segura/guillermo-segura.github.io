import type { Metadata } from 'next';
import { Inter } from 'next/font/google';

import { container, animatedBg } from '@/app/classnames';
import { CopyrightBanner } from '@/components/CopyrightBanner/CopyrightBanner';
import { Card } from '@/components/Card';
import { joinStringArrays } from '@/utils';
import './globals.css';

const inter = Inter({ subsets: ['latin'] });

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
      <body className={joinStringArrays([inter.className], animatedBg)}>
        <main className={joinStringArrays(container)}>
          <Card>
            {children}
          </Card>
          <CopyrightBanner />
        </main>
      </body>
    </html>
  );
}
