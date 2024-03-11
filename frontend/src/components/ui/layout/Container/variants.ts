import { tv, type VariantProps } from "tailwind-variants";

import { layoutVariants } from "../variants";

const containerVariants = tv({
  extend: layoutVariants,
  slots: {
    base: "container mx-auto w-full px-4",
  },
  variants: {},
});

type ContainerVariantProps = VariantProps<typeof containerVariants>;

export { containerVariants, type ContainerVariantProps };
