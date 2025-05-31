import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navigation } from "./(components)/navigation";
import { ContactForm } from "./(components)/contact-form";
import { ContactBar } from "./(components)/contact";
import { Copyright } from "./(components)/copyright";
import { Separator } from "@radix-ui/react-separator";

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
        <header className="flex justify-center w-full fixed top-0 backdrop-blur-sm bg-white/75 border-b-1 border-accent">
          <div className="flex w-full max-w-7xl justify-between items-center p-4">
            <div className="h-14 w-24 bg-primary"></div>
            <Navigation />
          </div>
        </header>
        {children}
        <footer className="w-full max-w-7xl">
          <ContactBar />
          <ContactForm />
          <Copyright />
        </footer>
      </body>
    </html>
  );
}
