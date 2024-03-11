import React from "react";

import { HStackVariantProps as VariantProps, hStackVariants as variants } from "./variants";

interface HStackProps extends Omit<React.ComponentPropsWithoutRef<"div">, "style">, VariantProps {}

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
  ...props
}: HStackProps): JSX.Element => {
  /* ClassName variants */
  const { base } = variants({ align, justify, wrap, gap, p, px, py, pt, grow });

  return (
    <div className={base({ className })} {...props}>
      {children}
    </div>
  );
};
HStack.displayName = "HStack";

export { type HStackProps, HStack };
