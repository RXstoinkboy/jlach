import { Button } from "@/components/ui/button";
import Link from "next/link";

export const Navigation = () => {
  return (
    <nav className="flex justify-between items-center p-4">
      <div className="flex flex-1 justify-end items-center gap-4">
        <Link href="/#home">
          <Button variant="link" className="text-accent">
            Start
          </Button>
        </Link>
        <Link href="/#about">
          <Button variant="link" className="text-accent">
            O mnie
          </Button>
        </Link>
        <Link href="/#contact">
          <Button variant="link" className="text-accent">
            Kontakt
          </Button>
        </Link>
      </div>
    </nav>
  );
};
