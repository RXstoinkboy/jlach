import {
  NavigationMenuItem,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { NavigationMenuLink } from "@/components/ui/navigation-menu";

import { NavigationMenuList } from "@/components/ui/navigation-menu";

import { NavigationMenu } from "@/components/ui/navigation-menu";
import { menuItems } from "./options";
import { cn } from "@/lib/utils";
import { ThemeSwitch } from "../theme-switch";
import { motion, Variants } from "motion/react";
import {
  childVariants,
  STAGGER_CHILDREN_TIME,
} from "@/lib/constants/animation";
import Link from "next/link";

const containerVariants: Variants = {
  hidden: {},
  visible: {
    transition: {
      duration: 0,
      staggerChildren: STAGGER_CHILDREN_TIME / 3,
    },
  },
};

const MotionNavItem = motion(NavigationMenuItem);

export const Desktop = () => {
  return (
    <motion.div
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      className="items-center gap-2 hidden md:flex"
    >
      <motion.div variants={childVariants("y", "+")}>
        <ThemeSwitch />
      </motion.div>
      <NavigationMenu>
        <NavigationMenuList>
          {menuItems.map((item) => (
            <MotionNavItem variants={childVariants("y", "+")} key={item.href}>
              <NavigationMenuLink
                asChild
                className={cn(
                  navigationMenuTriggerStyle(),
                  "text-md bg-transparent"
                )}
              >
                <Link href={item.href}>{item.label}</Link>
              </NavigationMenuLink>
            </MotionNavItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </motion.div>
  );
};
