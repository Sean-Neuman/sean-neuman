import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import React from "react";
import Navbar from "../components/navbar"; 

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Sean Neuman",
  description: "Sean Neuman's personal website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
      <html>
        <head>
          <title>{metadata.title}</title>
          <meta name="description" content={metadata.description} />
          <link rel="icon" href="/favicon.ico" />
        </head>
        <body className={`${geistSans.variable} ${geistMono.variable} antialiased`}>
          <header>
            <Navbar />
          </header>
          <main>
            {children}
          </main>

          <footer>
          <div className="bg-gray-800 text-white p-4 text-center">
            Sean Neuman
          </div>
        </footer>
        </body>

      </html>
  );
}
