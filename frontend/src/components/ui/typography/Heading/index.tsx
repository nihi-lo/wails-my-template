import { type HeadingVariantProps as VariantProps, headingVariants as variants } from "./variants";

interface HeadingProps
  extends Omit<React.ComponentPropsWithoutRef<"h1" | "h2" | "h3" | "h4" | "h5" | "h6">, "style">,
    VariantProps {
  as?: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
}

const Heading = ({ as: Tag = "h1", className, ...props }: HeadingProps): JSX.Element => {
  /* ClassName variants */
  const { base } = variants();

  return (
    <Tag className={base({ className })} {...props}>
      {props.children}
    </Tag>
  );
};
Heading.displayName = "Heading";

export { type HeadingProps, Heading };
