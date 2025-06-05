import { Navigation } from "../(components)/navigation";
import { ContactForm } from "../(components)/contact-form";
import { ContactBar } from "../(components)/contact";
import { Copyright } from "../(components)/copyright";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <>
      <header className="justify-center flex fixed w-svw top-0 backdrop-blur-sm bg-background/75 border-b-1 border-accent">
        <div className="flex max-w-7xl justify-between items-center px-4 sm:p-4 flex-1">
          <div className="h-14 w-24 bg-primary"></div>
          <Navigation />
        </div>
      </header>
      <main>{children}</main>
      <footer className="w-full max-w-7xl flex flex-col gap-4 items-center py-4">
        <h3 className="text-3xl font-bold">Kontakt</h3>
        <section className="flex justify-center w-full">
          <ContactForm />
          <ContactBar />
        </section>
        <Copyright />
      </footer>
    </>
  );
}
