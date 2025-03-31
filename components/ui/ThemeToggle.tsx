"use client";

import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Moon, Sun } from "lucide-react";
import { useState } from "react";

export function ThemeToggle() {
  const [mode, setMode] = useState<"light" | "dark">("light");

  return (
    <div className="relative flex rounded-lg bg-zinc-900 p-1 gap-4 overflow-hidden">
      {/* Animated background slider */}
      <div
        className={cn(
          "absolute inset-y-1 w-[48%] rounded-md bg-zinc-800 transition-transform duration-200 ease-in-out",
          mode === "dark" ? "translate-x-full" : "translate-x-0"
        )}
      />

      {/* Buttons */}
      <Button
        variant="ghost"
        className={cn(
          "relative z-10 flex-1 px-4 transition-colors hover:bg-transparent hover:text-white",
          mode === "light" && "text-white"
        )}
        onClick={() => setMode("light")}
      >
        <Sun className="w-4 h-4 mr-1" />
        Light
      </Button>
      <Button
        variant="ghost"
        className={cn(
          "relative z-10 flex-1 px-4 transition-colors hover:bg-transparent hover:text-white",
          mode === "dark" && "text-white"
        )}
        onClick={() => setMode("dark")}
      >
        <Moon className="w-4 h-4 mr-1" />
        Dark
      </Button>
    </div>
  );
}
