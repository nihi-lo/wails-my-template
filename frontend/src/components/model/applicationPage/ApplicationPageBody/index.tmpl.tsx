import {
  ApplicationPageBodyVariantProps as VariantProps,
  applicationPageBodyVariants as variants,
} from "./variants";

type ApplicationPageBodyProps = Omit<
  React.ComponentPropsWithoutRef<"div"> & VariantProps,
  "className" | "style"
>;

const ApplicationPageBody = ({ children, ...props }: ApplicationPageBodyProps): JSX.Element => {
  /* ClassName variants */
  const { base } = variants();

  return (
    <div className={base()} {...props}>
      {children}
    </div>
  );
};
ApplicationPageBody.displayName = "ApplicationPageBody";

export { type ApplicationPageBodyProps, ApplicationPageBody };
