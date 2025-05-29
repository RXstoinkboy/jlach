import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "./(components)/navigation";
import { ContactForm } from "./(components)/contact-form";
import { ContactBar } from "./(components)/contact";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Jerzy Lach",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        id="home"
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col items-center`}
      >
        <header className="flex justify-between items-center p-4 w-full max-w-7xl fixed top-0">
          <div className="h-14 w-14 bg-accent"></div>
          <Navigation />
        </header>
        {children}
        <footer className="w-full max-w-7xl">
          <ContactBar />
          <ContactForm />
        </footer>
      </body>
    </html>
  );
}
