import {
  NavigationMenuItem,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { NavigationMenuLink } from "@/components/ui/navigation-menu";

import { NavigationMenuList } from "@/components/ui/navigation-menu";

import { NavigationMenu } from "@/components/ui/navigation-menu";
import { menuItems } from "./options";
import Link from "next/link";

export const Desktop = () => {
  return (
    <NavigationMenu className="hidden md:block">
      <NavigationMenuList>
        {menuItems.map((item) => (
          <NavigationMenuItem key={item.href}>
            <NavigationMenuLink
              asChild
              className={navigationMenuTriggerStyle()}
            >
              <Link href={item.href}>{item.label}</Link>
            </NavigationMenuLink>
          </NavigationMenuItem>
        ))}
      </NavigationMenuList>
    </NavigationMenu>
  );
};
