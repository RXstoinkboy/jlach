import Image from "next/image";
import Photo from "@/public/hero.jpg";
import { cn } from "@/lib/utils";
import { useEffect, useState } from "react";
import { motion } from "motion/react";

export const HeroImage = ({ className }: { className?: string }) => {
  const [loaded, setLoaded] = useState(false);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    const checkScreenSize = () => {
      setIsDesktop(window.matchMedia("(min-width: 768px)").matches);
    };

    checkScreenSize();
    window.addEventListener("resize", checkScreenSize);

    return () => window.removeEventListener("resize", checkScreenSize);
  }, []);

  return (
    <motion.div
      initial={{
        opacity: 0,
        scale: 1.05,
        y: 20,
        filter: "blur(5px)",
      }}
      animate={{
        opacity: loaded ? 1 : 0,
        scale: 1,
        y: 0,
        filter: "blur(0px)",
      }}
      transition={{
        duration: 0.7,
        ease: "easeInOut",
        delay: isDesktop ? 0.5 : 0,
      }}
      className={cn("h-full relative rounded-2xl overflow-hidden", className)}
    >
      <Image
        priority
        placeholder="blur"
        src={Photo}
        alt="Hero Image"
        onLoadingComplete={() => setLoaded(true)}
        className="w-full h-full object-cover object-top md:object-center"
      />
    </motion.div>
  );
};
