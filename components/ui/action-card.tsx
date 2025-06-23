"use client";

import { HTMLMotionProps, motion } from "motion/react";
import { Card } from "./card";
import { cn } from "@/lib/utils";

const MotionCard = motion(Card);

export function ActionCard({ className, ...props }: HTMLMotionProps<"div">) {
  return (
    <MotionCard
      initial={{
        scale: 1,
        filter: "brightness(1)",
      }}
      whileHover={{
        scale: 1.01,
        filter: "brightness(1.1)",
      }}
      transition={{
        type: "tween",
        duration: 0.2,
      }}
      className={cn(className, "cursor-pointer")}
      {...props}
    />
  );
}
