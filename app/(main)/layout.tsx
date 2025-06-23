"use client";

import { Navigation } from "../_components/navigation";
import { ContactForm } from "../_components/contact-form/contact-form";
import { ContactBar } from "../_components/contact";
import { Copyright } from "../_components/copyright";
import { Logo } from "../_components/logo";
import { useEffect, useRef, useState } from "react";
import { FocusContext } from "../_components/contact-form/focus-context";
import { cn } from "@/lib/utils";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const nameInputRef = useRef<HTMLInputElement>(null);

  const focusNameInput = () => {
    nameInputRef.current?.focus();
  };

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(() => {
        if (window.scrollY > 20) {
          window.removeEventListener("scroll", handleScroll);
          return true;
        }
        return false;
      });
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <FocusContext.Provider value={{ focusNameInput }}>
      <header
        className={cn(
          "justify-center flex fixed w-svw top-0 z-10 transition-all border-b-1 border-transparent",
          isScrolled && "backdrop-blur-sm bg-background/50 border-border"
        )}
      >
        <div className="flex justify-between items-center px-4 sm:p-4 flex-1 h-20 max-w-7xl">
          <Logo />
          <Navigation />
        </div>
      </header>
      <main className="w-full flex flex-col justify-center">{children}</main>
      <footer
        className="w-full max-w-7xl flex flex-col gap-4 items-center py-4"
        id="contact"
      >
        <h3 className="text-3xl font-bold">Kontakt</h3>
        <section className="flex flex-col sm:flex-row justify-center w-full gap-6 p-4">
          <ContactForm nameInputRef={nameInputRef} />
          <ContactBar />
        </section>
        <Copyright />
      </footer>
    </FocusContext.Provider>
  );
}
