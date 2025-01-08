import type { Metadata } from "next";
import { Roboto } from "next/font/google";

import "./globals.css";

import Footer from "@/components/footer";
import Header from "@/components/header";

import { App } from "./app";

const roboto = Roboto({
  subsets: ["vietnamese"],
  weight: ["100", "300", "400", "500", "700", "900"],
  style: ["italic", "normal"],
  variable: "--font-roboto",
});

export const metadata: Metadata = {
  title: "IT CLUB WEBSITE",
  description: "ItClub",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${roboto.variable} ${roboto.className} flex flex-col bg-background text-[1.6rem] transition-all duration-300 ease-in-out`}
      >
        <App>
          <Header />
          <div className="group mt-[var(--affix-header)] flex flex-1 flex-col">
            {children}
          </div>
          <Footer />
        </App>
      </body>
    </html>
  );
}
