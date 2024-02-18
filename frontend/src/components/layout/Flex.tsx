import React from "react";
import { tv, type VariantProps } from "tailwind-variants";

const flex = tv({
  base: "flex",
  variants: {
    direction: {
      row: "flex-row",
      col: "flex-col",
    },
    align: {
      start: "items-start",
      center: "items-center",
      end: "items-end",
      baseline: "items-baseline",
      stretch: "items-stretch",
    },
    justify: {
      start: "justify-start",
      center: "justify-center",
      end: "justify-end",
      between: "justify-between",
    },
    gap: {
      none: "gap-0",
      xs: "gap-1",
      sm: "gap-2",
      md: "gap-4",
      lg: "gap-8",
      xl: "gap-16",
    },
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
    grow: {
      "0": "grow-0",
      "1": "grow",
    },
  },
});
type flexVariants = VariantProps<typeof flex>;

interface FlexProps
  extends Omit<React.ComponentProps<"div">, "className">,
    flexVariants {
  as?: "div" | "header" | "main";
}

const Flex = React.forwardRef<HTMLDivElement, FlexProps>(
  (props, forwardedRef) => {
    const {
      direction,
      align,
      justify,
      gap,
      p,
      px,
      py,
      grow,
      as: Tag = "div",
      ...flexProps
    } = props;
    return (
      <Tag
        {...flexProps}
        ref={forwardedRef}
        className={flex({ direction, align, justify, gap, p, px, py, grow })}
      />
    );
  },
);
Flex.displayName = "Flex";

export { type FlexProps, Flex };
