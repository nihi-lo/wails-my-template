import React from "react";

import { type HStackVariantProps as VariantProps, hStackVariants as variants } from "./variants";

interface HStackProps
  extends Omit<React.ComponentPropsWithoutRef<"div" | "main">, "style">,
    VariantProps {
  as?: "div" | "main";
}

const HStack = ({
  align,
  justify,
  wrap,
  gap,
  p,
  px,
  py,
  pt,
  grow,
  children,
  className,
  as: Tag = "div",
  ...props
}: HStackProps): JSX.Element => {
  /* ClassName variants */
  const { base } = variants({ align, justify, wrap, gap, p, px, py, pt, grow });

  return (
    <Tag className={base({ className })} {...props}>
      {children}
    </Tag>
  );
};
HStack.displayName = "HStack";

export { type HStackProps, HStack };
