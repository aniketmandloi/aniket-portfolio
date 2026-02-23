"use client";

import { useTheme } from "@/context/theme-context";
import React from "react";
import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";

export default function ThemeSwitch() {
  const { theme, toggleTheme } = useTheme();
  const isLight = theme === "light";

  return (
    <button
      className="gm-button fixed bottom-4 right-4 z-[1000] flex h-11 w-11 items-center justify-center bg-[var(--yellow)] text-[var(--ink)]"
      onClick={toggleTheme}
      aria-label={isLight ? "Switch to dark theme" : "Switch to light theme"}
      title={isLight ? "Dark theme" : "Light theme"}
    >
      {isLight ? <BsMoonStarsFill className="text-sm" /> : <BsSunFill className="text-sm" />}
    </button>
  );
}
