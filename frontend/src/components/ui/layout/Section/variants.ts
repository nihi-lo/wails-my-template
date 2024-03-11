import { tv, type VariantProps } from "tailwind-variants";

import { layoutVariants } from "../variants";

const sectionVariants = tv({
  extend: layoutVariants,
  slots: {
    base: "p-4",
  },
  variants: {},
});

type SectionVariantProps = VariantProps<typeof sectionVariants>;

export { sectionVariants, type SectionVariantProps };
