import { childVariants } from "@/app/_constants/animation";
import { motion } from "motion/react";

export const Logo = () => {
  return (
    <motion.div
      style={{ fontFamily: "var(--font-caveat)" }}
      className="flex items-center h-full w-24 text-4xl md:text-5xl whitespace-nowrap"
      initial="hidden"
      animate="visible"
      variants={childVariants("x")}
    >
      <a href="#">Jerzy Łach</a>
    </motion.div>
  );
};
