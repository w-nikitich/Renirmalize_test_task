"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Switch } from "@nextui-org/react";
import { MoonIcon } from "../../../public/images/MoonIcon";
import { SunIcon } from "../../../public/images/SunIcon";

export default function ThemeSwitcher() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return null;
  }

  const handleTheme = () => {
    theme === "light" ? setTheme("dark") : setTheme("light");
  };

  return (
      <Switch
        defaultSelected
        size="lg"
        color="secondary"
        onChange={handleTheme}
        startContent={<MoonIcon />}
        endContent={<SunIcon />}
      ></Switch>
  );
}