import { tv, type VariantProps } from "tailwind-variants";

const layoutVariants = tv({
  variants: {
    p: {
      none: "p-0",
      xs: "p-1",
      sm: "p-2",
      md: "p-4",
      lg: "p-8",
      xl: "p-16",
    },
    px: {
      none: "px-0",
      xs: "px-1",
      sm: "px-2",
      md: "px-4",
      lg: "px-8",
      xl: "px-16",
    },
    py: {
      none: "py-0",
      xs: "py-1",
      sm: "py-2",
      md: "py-4",
      lg: "py-8",
      xl: "py-16",
    },
    pt: {
      none: "pt-0",
      xs: "pt-1",
      sm: "pt-2",
      md: "pt-4",
      lg: "pt-8",
      xl: "pt-16",
    },
    grow: {
      "0": "grow-0",
      "1": "grow",
    },
  },
});

type LayoutVariantProps = VariantProps<typeof layoutVariants>;

export { layoutVariants, type LayoutVariantProps };
