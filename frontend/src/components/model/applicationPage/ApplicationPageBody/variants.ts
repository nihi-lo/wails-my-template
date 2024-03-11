import { tv, type VariantProps } from "tailwind-variants";

const applicationPageBodyVariants = tv({
  slots: {
    base: "z-0 grow",
  },
  variants: {},
});

type ApplicationPageBodyVariantProps = VariantProps<typeof applicationPageBodyVariants>;

export { applicationPageBodyVariants, type ApplicationPageBodyVariantProps };
