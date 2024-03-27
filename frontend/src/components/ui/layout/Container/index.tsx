import {
  type ContainerVariantProps as VariantProps,
  containerVariants as variants,
} from "./variants";

interface ContainerProps
  extends Omit<React.ComponentPropsWithoutRef<"div" | "main">, "style">,
    VariantProps {
  as?: "div" | "main";
}

const Container = ({
  p,
  px,
  py,
  pt,
  grow,
  as: Tag = "div",
  className,
  ...props
}: ContainerProps): JSX.Element => {
  /* ClassName variants */
  const { base } = variants({ p, px, py, pt, grow });

  return (
    <Tag className={base({ className })} {...props}>
      {props.children}
    </Tag>
  );
};
Container.displayName = "Container";

export { type ContainerProps, Container };
