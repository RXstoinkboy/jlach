import Image from "next/image";
import Photo from "@/public/hero.jpg";
import { cn } from "@/lib/utils";

export const HeroImage = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn("h-full relative rounded-2xl overflow-hidden", className)}
    >
      <Image
        src={Photo}
        alt="Hero Image"
        className="w-full h-full object-cover object-top md:object-center"
      />
    </div>
  );
};
