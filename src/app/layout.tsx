import { ReactNode } from "react";
import type { Metadata } from "next";
import { Nunito } from "next/font/google";

import { Card, CardFooter } from "@/components/Card";
import { CopyrightBanner } from "@/components/CopyrightBanner/CopyrightBanner";
import { Navbar } from "@/components/Navbar/Navbar";
import { container, animatedBg } from "@/app/classnames";
import { joinStringArrays } from "@/utils";
import "./globals.css";

import { config } from "@fortawesome/fontawesome-svg-core";
import "@fortawesome/fontawesome-svg-core/styles.css";
config.autoAddCss = false;

const nunito = Nunito({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Welcome!",
  description: "Guillermo's homepage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={joinStringArrays([nunito.className], animatedBg)}>
        <main className={joinStringArrays(container)}>
          <Navbar />
          <Card>
            {children}
            <CardFooter />
          </Card>
          <CopyrightBanner />
        </main>
      </body>
    </html>
  );
}
