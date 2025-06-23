import { Variant, Variants } from "motion/react";

export const childVariants = (axis: "x" | 'y', direction: '+' | '-' = '-'): Variants => ({
    hidden: {
      opacity: 0,
      [axis]: direction === '+' ? 10 : -10,
    },
    visible: {
      opacity: 1,
      [axis]: 0,
      transition: {
        type: "spring",
      },
    } as Variant,
  });

export const STAGGER_CHILDREN_TIME = 0.2;
export const DELAY_CHILDREN_TIME = 0.3;