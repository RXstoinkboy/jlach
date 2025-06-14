"use client";

import { Button } from "@/components/ui/button";
import { useFocus } from "../(components)/contact-form/focus-context";
import { HeroImage } from "./_components/hero-image";

export const Hero = () => {
  const { focusNameInput } = useFocus();

  return (
    <section className="flex h-screen w-full justify-center items-center bg-accent pt-20">
      <div className="flex flex-1 sm:h-[80vh] w-full max-w-7xl items-center">
        <article className="flex flex-1 flex-col gap-2 max-w-6xl justify-start p-4">
          <h2 className="text-2xl font-semibold text-center sm:text-left">
            Twój agent ubezpieczeniowy
          </h2>
          <h1 className="text-7xl font-black text-center sm:text-left">
            {process.env.NEXT_PUBLIC_FULL_NAME}
          </h1>

          <h2 className="text-xl font-normal text-neutral-500 text-center sm:text-left">
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
        <aside className="flex-1 p-5">
          <HeroImage />
        </aside>
      </div>
    </section>
  );
};
