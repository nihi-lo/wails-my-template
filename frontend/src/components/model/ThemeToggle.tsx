import {
  Dropdown,
  DropdownTrigger,
  Button,
  DropdownMenu,
  DropdownItem,
} from "@nextui-org/react";
import { useTheme } from "next-themes";
import { Key, useEffect, useState } from "react";
import { IoHelpOutline, IoMoonOutline, IoSunnyOutline } from "react-icons/io5";

export const ThemeToggle = (): JSX.Element => {
  const [mounted, setMounted] = useState(false);
  const { setTheme, theme, systemTheme } = useTheme();

  const ThemeIcon =
    theme === "system"
      ? systemTheme === "light"
        ? IoSunnyOutline
        : systemTheme === "dark"
          ? IoMoonOutline
          : IoHelpOutline
      : theme === "light"
        ? IoSunnyOutline
        : theme === "dark"
          ? IoMoonOutline
          : IoHelpOutline;

  const handleAction = (key: Key): void => {
    setTheme(key.toString());
  };

  useEffect(() => {
    setMounted(true);
  }, [theme]);

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button
          isIconOnly
          variant="light"
          aria-label="Theme"
          isDisabled={!mounted}
        >
          <ThemeIcon className="size-6" />
        </Button>
      </DropdownTrigger>
      <DropdownMenu aria-label="Theme Toggle" onAction={handleAction}>
        <DropdownItem key="light">Light</DropdownItem>
        <DropdownItem key="dark">Dark</DropdownItem>
        <DropdownItem key="system">System</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};
