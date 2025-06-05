import {
  NavigationMenuItem,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";

import { NavigationMenuLink } from "@/components/ui/navigation-menu";

import { NavigationMenuList } from "@/components/ui/navigation-menu";

import { NavigationMenu } from "@/components/ui/navigation-menu";
import { menuItems } from "./options";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { ThemeSwitch } from "../theme-switch";

export const Desktop = () => {
  return (
    <div className="flex items-center gap-2">
      <ThemeSwitch />
      <NavigationMenu className="hidden md:block">
        <NavigationMenuList>
          {menuItems.map((item) => (
            <NavigationMenuItem key={item.href}>
              <NavigationMenuLink
                asChild
                className={cn(
                  navigationMenuTriggerStyle(),
                  "text-md bg-transparent"
                )}
              >
                <Link href={item.href}>{item.label}</Link>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};
