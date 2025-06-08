"use client";

import { Navigation } from "../(components)/navigation";
import { ContactForm } from "../(components)/contact-form/contact-form";
import { ContactBar } from "../(components)/contact";
import { Copyright } from "../(components)/copyright";
import { Logo } from "../(components)/logo";
import { useRef } from "react";
import { FocusContext } from "../(components)/contact-form/focus-context";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const nameInputRef = useRef<HTMLInputElement>(null);

  const focusNameInput = () => {
    nameInputRef.current?.focus();
  };

  return (
    <FocusContext.Provider value={{ focusNameInput }}>
      <header className="justify-center flex fixed w-svw top-0 backdrop-blur-sm bg-background/75 border-b-1 border-accent">
        <div className="flex max-w-7xl justify-between items-center px-4 sm:p-4 flex-1">
          <Logo />
          <Navigation />
        </div>
      </header>
      <main>{children}</main>
      <footer className="w-full max-w-7xl flex flex-col gap-4 items-center py-4">
        <h3 className="text-3xl font-bold">Kontakt</h3>
        <section className="p-2 flex flex-col sm:flex-row justify-center w-full gap-8">
          <ContactForm nameInputRef={nameInputRef} />
          <ContactBar />
        </section>
        <Copyright />
      </footer>
    </FocusContext.Provider>
  );
}
