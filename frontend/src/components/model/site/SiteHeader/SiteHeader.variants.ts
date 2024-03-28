import { tv, type VariantProps } from "tailwind-variants";

const siteHeaderVariants = tv({
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

type SiteHeaderVariantProps = VariantProps<typeof siteHeaderVariants>;

export { siteHeaderVariants, type SiteHeaderVariantProps };
