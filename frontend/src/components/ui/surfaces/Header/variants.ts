import { tv, type VariantProps } from "tailwind-variants";

const headerVariants = tv({
  slots: {
    base: "bg-background",
  },
  variants: {
    isSticky: {
      true: "sticky top-0 z-50 shadow-md",
    },
    isGlass: {
      true: "bg-opacity-75 backdrop-blur",
    },
  },
});

type HeaderVariantProps = VariantProps<typeof headerVariants>;

export { headerVariants, type HeaderVariantProps };
