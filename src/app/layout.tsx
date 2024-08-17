import type { Metadata } from "next";
import { Inter } from "next/font/google";

import { Card } from "@/components/Card";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

// https://mycolor.space/gradient3
// https://www.transparenttextures.com/
const gradientBg = [
  'bg-4xl',
  'bg-gradient-to-r',
  'from-gblue-500',
  'via-[#B582EB]',
  'via-[#F36EBE]',
  'to-[#FF854D]',
  'animate-bg-gradient',
];
const textureBg = [
  'opacity-100',
  "bg-carbon-fibre",
  'fixed',
  'bg-fixed',
  'top-0',
  'left-0',
  'w-full',
  'h-full',
  'pointer-events-none',
  'opacity-80',
  "-z-10"
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
  gradientBg,
  textureBg,
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
      <body className={`${inter.className} ${classNames.gradientBg.join(' ')}`}>
        <div className={classNames.textureBg.join(' ')} />
        <main className={classNames.container.join(' ')}>
          <Card>
            {children}
          </Card>
        </main>
      </body>
    </html>
  );
}
