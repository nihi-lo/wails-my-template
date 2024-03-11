import {
  Dropdown,
  DropdownTrigger,
  Button,
  DropdownMenu,
  DropdownItem,
  Selection,
} from "@nextui-org/react";
import { useTheme } from "next-themes";
import { Key, useEffect, useState } from "react";
import { IoHelpOutline, IoMoonOutline, IoSunnyOutline } from "react-icons/io5";

const ThemeToggle = (): JSX.Element => {
  const { setTheme, theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [selectedKeys, setSelectedKeys] = useState(new Set([theme ?? ""]));

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

  /* Event handlers */
  const handleAction = (key: Key): void => {
    setTheme(key.toString());
  };
  const handleSelectionChange = (keys: Selection): unknown => {
    if (keys !== "all") {
      setSelectedKeys(new Set([keys.values().next().value as string]));
    }
    return;
  };

  useEffect(() => {
    setMounted(true);
  }, [theme]);

  return (
    <Dropdown>
      <DropdownTrigger>
        <Button isIconOnly variant="ghost" isDisabled={!mounted}>
          <ThemeIcon className="size-5" />
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        selectedKeys={selectedKeys}
        onAction={handleAction}
        onSelectionChange={handleSelectionChange}
      >
        <DropdownItem key="light">Light</DropdownItem>
        <DropdownItem key="dark">Dark</DropdownItem>
        <DropdownItem key="system">System</DropdownItem>
      </DropdownMenu>
    </Dropdown>
  );
};
ThemeToggle.displayName = "ThemeToggle";

export { ThemeToggle };
