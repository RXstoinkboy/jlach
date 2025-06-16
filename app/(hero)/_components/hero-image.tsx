import Image from "next/image";
import Photo from "@/public/hero.jpg";

export const HeroImage = () => {
  return (
    <div className="h-full relative rounded-2xl overflow-hidden">
      <Image
        src={Photo}
        alt="Hero Image"
        className="w-full h-full object-cover object-top md:object-center"
      />
    </div>
  );
};
