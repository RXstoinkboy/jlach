"use client";

import * as React from "react";
import { Computer, Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { ToggleGroup, ToggleGroupItem } from "@/components/ui/toggle-group";

export function ThemeSwitch() {
  const { setTheme } = useTheme();

  return (
    <ToggleGroup
      variant="outline"
      type="single"
      onValueChange={setTheme}
      defaultValue="system"
    >
      <ToggleGroupItem value="light" aria-label="Toggle light">
        <Sun className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="dark" aria-label="Toggle dark">
        <Moon className="h-4 w-4" />
      </ToggleGroupItem>
      <ToggleGroupItem value="system" aria-label="Toggle system">
        <Computer className="h-4 w-4" />
      </ToggleGroupItem>
    </ToggleGroup>
  );
}
