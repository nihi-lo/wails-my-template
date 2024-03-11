import { tv, type VariantProps } from "tailwind-variants";

import { layoutVariants } from "../variants";

const vStackVariants = tv({
  extend: layoutVariants,
  slots: {
    base: "flex flex-col",
  },
  variants: {
    align: {
      start: "items-start",
      end: "items-end",
      center: "items-center",
      baseline: "items-baseline",
      stretch: "items-stretch",
    },
    justify: {
      start: "justify-start",
      end: "justify-end",
      center: "justify-center",
      between: "justify-between",
    },
    wrap: {
      nowrap: "flex-nowrap",
      wrap: "flex-wrap",
    },
    gap: {
      none: "gap-0",
      xs: "gap-1",
      sm: "gap-2",
      md: "gap-4",
      lg: "gap-8",
      xl: "gap-16",
    },
  },
});

type VStackVariantProps = VariantProps<typeof vStackVariants>;

export { vStackVariants, type VStackVariantProps };
