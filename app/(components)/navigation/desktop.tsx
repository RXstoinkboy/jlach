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

export const Desktop = () => {
  return (
    <div className="items-center gap-2 hidden md:flex">
      <ThemeSwitch />
      <NavigationMenu>
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
                <a href={item.href}>{item.label}</a>
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>
    </div>
  );
};
