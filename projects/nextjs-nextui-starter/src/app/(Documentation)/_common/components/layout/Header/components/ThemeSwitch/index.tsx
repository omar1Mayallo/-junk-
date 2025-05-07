"use client";

import { Button } from "@nextui-org/react";
import { useTheme } from "next-themes";
import { useIsSSR } from "react-aria";
import { MdDarkMode, MdLightMode } from "react-icons/md";

const ThemeSwitch = () => {
  // HANDLE_TOGGLE_THEME
  const isSSR = useIsSSR();
  const { theme, setTheme } = useTheme();
  const handleToggleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
    <Button
      onClick={handleToggleTheme}
      variant="faded"
      className="rounded-full"
      size="lg"
      isIconOnly
    >
      {theme === "light" || isSSR ? (
        <MdDarkMode size={21} />
      ) : (
        <MdLightMode size={21} />
      )}
    </Button>
  );
};

export default ThemeSwitch;
