"use client";

import {
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu";
import { NavigationMenu } from "@/components/ui/navigation-menu";
import { Button } from "@/components/ui/button";
import Link, { LinkProps } from "next/link";
import { useState } from "react";
import { Drawer, DrawerTrigger, DrawerContent } from "@/components/ui/drawer";
import React from "react";
import { useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { MenuIcon } from "lucide-react";

const menuItems = [
  { href: "/#home", label: "Start" },
  { href: "/#about", label: "O mnie" },
  { href: "/#offer", label: "Oferta" },
  { href: "/#contact", label: "Kontakt" },
];

function ListItem({
  title,
  children,
  href,
  ...props
}: React.ComponentPropsWithoutRef<"li"> & { href: string }) {
  return (
    <li {...props}>
      <NavigationMenuLink asChild>
        <Link href={href}>
          <div className="text-sm leading-none font-medium">{title}</div>
          <p className="text-muted-foreground line-clamp-2 text-sm leading-snug">
            {children}
          </p>
        </Link>
      </NavigationMenuLink>
    </li>
  );
}

export const Navigation = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
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

      <Drawer open={isOpen} onOpenChange={setIsOpen} direction="top">
        <DrawerTrigger asChild>
          <Button
            variant="ghost"
            className="h-full w-full gap-4 px-0 hover:bg-transparent focus-visible:bg-transparent focus-visible:ring-0 focus-visible:ring-offset-0 md:hidden justify-end"
          >
            <MenuIcon />
            <span className="sr-only">Toggle Menu</span>
            <span className="font-normal">Menu</span>
          </Button>
        </DrawerTrigger>
        <DrawerContent className="max-h-[80svh] p-0">
          <div className="overflow-auto p-6">
            <div className="flex flex-col space-y-3">
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
        </DrawerContent>
      </Drawer>
    </>
  );
};

interface MobileLinkProps extends LinkProps {
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
  const router = useRouter();
  return (
    <Link
      href={href}
      onClick={() => {
        router.push(href.toString());
        onOpenChange?.(false);
      }}
      className={cn("text-[1.15rem]", className)}
      {...props}
    >
      {children}
    </Link>
  );
}
