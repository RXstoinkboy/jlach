"use client";

import { Button } from "@/components/ui/button";
import { useFocus } from "../(components)/contact-form/focus-context";
import { HeroImage } from "./_components/hero-image";

export const Hero = () => {
  const { focusNameInput } = useFocus();

  return (
    <section className="flex flex-col md:flex-row h-screen w-full justify-center">
      <HeroImage className="block md:hidden absolute inset-0 max-md:rounded-none" />
      <div className="absolute inset-0 md:static flex justify-center md:justify-end flex-1 w-full md:flex-row gap-14 md:gap-0 bg-accent/20 md:pt-20">
        <article className="flex h-full w-full max-w-[30rem] md:max-w-[40rem] flex-col gap-6 max-md:pb-20 justify-end md:justify-center p-4 pt-24 md:pt-4">
          <div className="flex flex-col gap-6 backdrop-blur-sm bg-accent/10 p-2 py-6 rounded-xl">
            <h2 className="text-xl font-semibold text-center md:text-left md:text-muted-foreground">
              Twój agent ubezpieczeniowy
            </h2>

            <h1 className="text-7xl md:text-8xl font-black text-center md:text-left">
              {process.env.NEXT_PUBLIC_FULL_NAME}
            </h1>

            <h2 className="text-xl font-normal md:text-muted-foreground text-center md:text-left">
              Pomagam wybrać najlepsze ubezpieczenia. <br />
              Bez stresu, bez drobnego druku.
            </h2>
          </div>
          <Button
            size="lg"
            className="text-lg h-12 md:w-fit mt-6"
            onClick={focusNameInput}
          >
            Umów kontakt
          </Button>
        </article>
      </div>
      <div className="hidden md:block max-h-max flex-1 items-center bg-accent/50 md:pt-20">
        <aside className="flex-1 p-5 h-full max-w-[40rem]">
          <HeroImage />
        </aside>
      </div>
    </section>
  );
};
