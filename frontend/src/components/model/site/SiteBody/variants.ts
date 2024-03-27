import { tv, type VariantProps } from "tailwind-variants";

const siteBodyVariants = tv({
  slots: {
    base: "z-0 grow",
  },
  variants: {},
});

type SiteBodyVariantProps = VariantProps<typeof siteBodyVariants>;

export { siteBodyVariants, type SiteBodyVariantProps };
