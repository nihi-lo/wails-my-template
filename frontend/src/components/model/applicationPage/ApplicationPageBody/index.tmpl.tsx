import {
  ApplicationPageBodyVariantProps as VariantProps,
  applicationPageBodyVariants as variants,
} from "./variants";

type ApplicationPageBodyProps = Omit<React.ComponentPropsWithoutRef<"div"> & VariantProps, "style">;

const ApplicationPageBody = ({
  children,
  className,
  ...props
}: ApplicationPageBodyProps): JSX.Element => {
  /* ClassName variants */
  const { base } = variants();

  return (
    <div className={base({ className })} {...props}>
      {children}
    </div>
  );
};
ApplicationPageBody.displayName = "ApplicationPageBody";

export { type ApplicationPageBodyProps, ApplicationPageBody };
