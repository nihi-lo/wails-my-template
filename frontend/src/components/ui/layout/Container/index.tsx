import { ContainerVariantProps as VariantProps, containerVariants as variants } from "./variants";

interface ContainerProps
  extends Omit<React.ComponentPropsWithoutRef<"div">, "style">,
    VariantProps {}

const Container = ({ p, px, py, pt, grow, className, ...props }: ContainerProps): JSX.Element => {
  /* ClassName variants */
  const { base } = variants({ p, px, py, pt, grow });

  return (
    <div className={base({ className })} {...props}>
      {props.children}
    </div>
  );
};
Container.displayName = "Container";

export { type ContainerProps, Container };
