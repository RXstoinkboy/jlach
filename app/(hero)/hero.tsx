"use client";

import { Button } from "@/components/ui/button";
import { useFocus } from "../(components)/contact-form/focus-context";
import { HeroImage } from "./_components/hero-image";

export const Hero = () => {
  const { focusNameInput } = useFocus();

  return (
    <section className="flex min-h-screen w-full justify-center items-center bg-accent pt-20">
      <div className="flex flex-1 w-full max-w-7xl items-center flex-col md:flex-row gap-14 sm:gap-0">
        <article className="flex flex-1 flex-col gap-6 max-w-6xl justify-start p-4 pt-24 sm:pt-4">
          <h2 className="text-xl font-semibold text-center sm:text-left text-muted-foreground">
            Twój agent ubezpieczeniowy
          </h2>

          <h1 className="text-8xl font-black text-center sm:text-left">
            {process.env.NEXT_PUBLIC_FULL_NAME}
          </h1>

          <h2 className="text-xl font-normal text-muted-foreground text-center sm:text-left">
            Pomagam wybrać najlepsze ubezpieczenia. <br />
            Bez stresu, bez drobnego druku.
          </h2>
          <Button
            size="lg"
            className="text-lg h-12 sm:w-fit mt-6"
            onClick={focusNameInput}
          >
            Umów kontakt
          </Button>
        </article>
        <aside className="flex-1 p-5 w-10/12 md:w-full">
          <HeroImage />
        </aside>
      </div>
    </section>
  );
};
