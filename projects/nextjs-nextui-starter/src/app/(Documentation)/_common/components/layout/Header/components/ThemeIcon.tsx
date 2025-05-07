"use client";

import { Avatar } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useIsSSR } from "react-aria";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const ThemeIcon = () => {
  // HANDLE_TOGGLE_THEME
  const isSSR = useIsSSR();
  const { theme, setTheme } = useTheme();
  const handleToggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <Avatar
      className={`cursor-pointer transition-colors duration-300 ${
        theme === "light" ? "hover:bg-neutral-200" : "hover:bg-neutral-600"
      }`}
      showFallback
      onClick={handleToggleTheme}
      color="default"
      size="md"
      fallback={
        theme === "light" || isSSR ? (
          <MdDarkMode size={25} />
        ) : (
          <MdLightMode size={25} />
        )
      }
    />
  );
};

export default ThemeIcon;
