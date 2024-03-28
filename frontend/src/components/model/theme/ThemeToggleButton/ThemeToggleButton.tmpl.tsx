import {
  Dropdown,
  DropdownTrigger,
  Button,
  DropdownMenu,
  DropdownItem,
  type Selection,
} from "@nextui-org/react";
import { useTheme } from "next-themes";
import { type Key, useEffect, useState } from "react";
import { IoHelpOutline, IoMoonOutline, IoSunnyOutline } from "react-icons/io5";

import {
  type ThemeToggleButtonVariantProps as VariantProps,
  themeToggleButtonVariants as variants,
} from "./ThemeToggleButton.variants";

type ThemeToggleButtonProps = VariantProps;

const ThemeToggleButton = ({ ...props }: ThemeToggleButtonProps): JSX.Element => {
  /* React hooks */
  const { setTheme, theme, systemTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const [selectedKeys, setSelectedKeys] = useState(new Set([theme ?? ""]));

  /* ClassName variants */
  const { base } = variants();

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

  useEffect(() => {
    setMounted(true);
  }, [theme]);

  return (
    <Dropdown className={base()} {...props}>
      <DropdownTrigger>
        <Button isIconOnly variant="ghost" isDisabled={!mounted}>
          <ThemeIcon className="size-5" />
        </Button>
      </DropdownTrigger>
      <DropdownMenu
        aria-label="Themes"
        selectedKeys={selectedKeys}
        selectionMode="single"
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
ThemeToggleButton.displayName = "ThemeToggleButton";

export { ThemeToggleButton };
