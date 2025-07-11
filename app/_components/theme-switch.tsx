"use client";

import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";

export function ThemeSwitch() {
  const { setTheme, resolvedTheme } = useTheme();

  return (
    <Button
      variant="ghost"
      size="sm"
      onClick={() => setTheme(resolvedTheme === "light" ? "dark" : "light")}
      defaultValue="system"
      aria-label={resolvedTheme === "light" ? "Toggle light" : "Toggle dark"}
    >
      {resolvedTheme === "light" ? (
        <Sun className="h-4 w-4" />
      ) : (
        <Moon className="h-4 w-4" />
      )}
    </Button>
  );
}
