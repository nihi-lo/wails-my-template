import { tv, type VariantProps } from "tailwind-variants";

const themeToggleButtonVariants = tv({
  slots: {
    base: "",
  },
  variants: {},
});

type ThemeToggleButtonVariantProps = VariantProps<typeof themeToggleButtonVariants>;

export { themeToggleButtonVariants, type ThemeToggleButtonVariantProps };
