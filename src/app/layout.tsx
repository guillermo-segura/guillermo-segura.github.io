import type { Metadata } from "next";
import { Inter } from "next/font/google";

import Card from "@/components/Card/Card";
import { gradientBg } from "@/utils/classnames";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const classNames = {
  container: 'flex min-h-screen flex-col items-center justify-between p-24',
  body: gradientBg,
};

export const metadata: Metadata = {
  title: "My name is Guillermo!",
  description: "Guillermo's page",
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
