import Image from "next/image";
import Photo from "@/public/hero.jpg";
import { AspectRatio } from "@/components/ui/aspect-ratio";

export const HeroImage = () => {
  return (
    <div className="relative">
      <AspectRatio
        ratio={1}
        className="rounded-l-full rounded-br-full overflow-hidden"
      >
        <Image
          src={Photo}
          alt="Hero Image"
          className="w-full h-full object-cover "
        />
      </AspectRatio>
      <div className="flex flex-col absolute top-4 left-4 w-1/3 h-1/6">
        {Array.from({ length: 2 }).map((_, index) => (
          <div className="flex flex-1 justify-between" key={index + 1}>
            {Array.from({ length: 4 }).map((_, i) => (
              <div
                key={index + 1 + i}
                className={`h-2.5 w-2.5 bg-primary/20 rounded-full`}
              />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};
