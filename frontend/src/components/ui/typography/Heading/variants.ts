import { tv, type VariantProps } from "tailwind-variants";

const headingVariants = tv({
  slots: {
    base: "",
  },
  variants: {},
});

type HeadingVariantProps = VariantProps<typeof headingVariants>;

export { headingVariants, type HeadingVariantProps };
