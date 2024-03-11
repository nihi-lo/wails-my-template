import React from "react";

import { VStackVariantProps as VariantProps, vStackVariants as variants } from "./variants";

interface VStackProps extends Omit<React.ComponentPropsWithoutRef<"div">, "style">, VariantProps {}

const VStack = ({
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
}: VStackProps): JSX.Element => {
  /* ClassName variants */
  const { base } = variants({ align, justify, wrap, gap, p, px, py, pt, grow });

  return (
    <div className={base({ className })} {...props}>
      {children}
    </div>
  );
};
VStack.displayName = "VStack";

export { type VStackProps, VStack };
