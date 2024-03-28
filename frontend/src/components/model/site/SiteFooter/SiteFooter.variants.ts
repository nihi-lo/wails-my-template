import { tv, type VariantProps } from "tailwind-variants";

const siteFooterVariants = tv({
  slots: {
    base: "bg-content1 py-6 md:px-8 md:py-0",
  },
  variants: {},
});

type SiteFooterVariantProps = VariantProps<typeof siteFooterVariants>;

export { siteFooterVariants, type SiteFooterVariantProps };
