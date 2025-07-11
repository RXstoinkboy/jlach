"use client";

import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerTrigger,
  DrawerContent,
  DrawerTitle,
} from "@/components/ui/drawer";
import { cn } from "@/lib/utils";
import { MenuIcon } from "lucide-react";
import { useState } from "react";
import { menuItems } from "./options";
import { ThemeSwitch } from "../theme-switch";

export const Mobile = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <Drawer
      open={isOpen}
      onOpenChange={setIsOpen}
      direction="right"
      disablePreventScroll
      noBodyStyles
    >
      <DrawerTrigger asChild>
        <Button
          variant="ghost"
          className="h-full gap-2 px-0 hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden justify-end"
        >
          <MenuIcon className="size-7" />
          <span className="sr-only">Toggle Menu</span>
        </Button>
      </DrawerTrigger>
      <DrawerContent className="bg-transparent border-none">
        <div className="flex flex-col overflow-auto m-2 p-6 rounded-md bg-card h-full shadow-md justify-between">
          <div>
            <DrawerTitle className="pl-4 text-muted-foreground">
              Menu
            </DrawerTitle>
            <div className="flex flex-col space-y-1">
              {menuItems.map(
                (item) =>
                  item.href && (
                    <MobileLink
                      key={item.href}
                      href={item.href}
                      onOpenChange={setIsOpen}
                    >
                      {item.label}
                    </MobileLink>
                  )
              )}
            </div>
          </div>
          <ThemeSwitch />
        </div>
      </DrawerContent>
    </Drawer>
  );
};

interface MobileLinkProps {
  href: string;
  onOpenChange?: (open: boolean) => void;
  children: React.ReactNode;
  className?: string;
}

function MobileLink({
  href,
  onOpenChange,
  className,
  children,
  ...props
}: MobileLinkProps) {
  return (
    <Button variant="ghost" asChild className="w-full justify-start">
      <a
        // href={href}
        onClick={(e) => {
          e.preventDefault();
          onOpenChange?.(false);
          // Navigate after drawer closes
          setTimeout(() => {
            window.location.href = href;
          }, 300);
        }}
        className={cn("text-xl py-6", className)}
        {...props}
      >
        {children}
      </a>
    </Button>
  );
}
