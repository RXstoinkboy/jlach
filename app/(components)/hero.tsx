"use client";

import { Button } from "@/components/ui/button";
import { useFocus } from "./contact-form/focus-context";

export const Hero = () => {
  const { focusNameInput } = useFocus();

  return (
    <section className="flex h-screen sm:h-[80vh] w-full justify-center items-center bg-primary-foreground">
      <article className="flex w-full flex-col gap-4 max-w-6xl justify-start p-4">
        <h1 className="text-7xl font-black text-center sm:text-left">
          {process.env.NEXT_PUBLIC_FULL_NAME}
        </h1>
        <h2 className="text-2xl font-semibold text-center sm:text-left">
          Twój agent ubezpieczeniowy
        </h2>
        <h2 className="text-xl text-neutral-500 text-center sm:text-left">
          Pomagam wybrać najlepsze ubezpieczenia. <br />
          Bez stresu, bez drobnego druku.
        </h2>
        <Button
          size="lg"
          className="text-lg h-12 sm:w-fit"
          onClick={focusNameInput}
        >
          Umów kontakt
        </Button>
      </article>
    </section>
  );
};
