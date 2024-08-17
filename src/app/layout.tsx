import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Card from "@/components/Card/Card";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const gradientBg = 'bg-gradient-to-r from-[#F875A7] via-[#75A7F8] to-[#A7F875] bg-4xl animate-bg-gradient';

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
  ].join(' '),
  body: gradientBg,
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
      <body className={`${inter.className} ${classNames.body}`}>
        <main className={classNames.container}>
          <Card>
            {children}
          </Card>
        </main>
      </body>
    </html>
  );
}
