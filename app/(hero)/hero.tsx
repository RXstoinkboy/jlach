"use client";

import { Button } from "@/components/ui/button";
import { useFocus } from "../(components)/contact-form/focus-context";
import { HeroImage } from "./_components/hero-image";

export const Hero = () => {
  const { focusNameInput } = useFocus();

  return (
    <section className="flex h-dvh w-full justify-center relative">
      <HeroImage className="block md:hidden absolute inset-0 max-md:rounded-none" />
      <div className="flex justify-center absolute md:static items-end md:items-stretch inset-0 max-md:bg-background/20 md:justify-end flex-1 w-full md:flex-row gap-14 md:gap-0 bg-accent/20 md:pt-20">
        <article className="max-md:backdrop-blur-sm max-md:bg-background/50 flex h-fit md:h-full w-full max-w-[30rem] md:max-w-[40rem] flex-col gap-3 md:gap-6 justify-end md:justify-center p-4 md:pt-24 m-2 md:m-0 rounded-lg">
          <h2 className="text-lg md:text-xl font-semibold text-center md:text-left md:text-muted-foreground">
            Twój agent ubezpieczeniowy
          </h2>

          <h1 className="text-6xl sm:text-7xl md:text-8xl font-black text-center md:text-left">
            {process.env.NEXT_PUBLIC_FULL_NAME}
          </h1>

          <h2 className="text-lg md:text-xl font-normal md:text-muted-foreground text-center md:text-left">
            Pomagam wybrać najlepsze ubezpieczenia. <br />
            Bez stresu, bez drobnego druku.
          </h2>
          <Button
            size="lg"
            className="text-lg h-12 md:w-fit mt-4 md:mt-6"
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
