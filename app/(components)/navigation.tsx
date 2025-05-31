import { Button } from "@/components/ui/button";
import Link from "next/link";

export const Navigation = () => {
  return (
    <nav className="flex justify-between items-center p-4">
      <div className="flex flex-1 justify-end items-center gap-4">
        <Button
          asChild
          variant="ghost"
          size="lg"
          className="font-semibold text-lg"
        >
          <Link href="/#home">Start</Link>
        </Button>
        <Button
          asChild
          variant="ghost"
          size="lg"
          className="font-semibold text-lg"
        >
          <Link href="/#about">O mnie</Link>
        </Button>
        <Button
          asChild
          variant="ghost"
          size="lg"
          className="font-semibold text-lg"
        >
          <Link href="/#offer">Oferta</Link>
        </Button>
        <Button
          asChild
          variant="ghost"
          size="lg"
          className="font-semibold text-lg"
        >
          <Link href="/#contact">Kontakt</Link>
        </Button>
      </div>
    </nav>
  );
};
