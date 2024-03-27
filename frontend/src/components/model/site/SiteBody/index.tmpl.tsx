import {
  type SiteBodyVariantProps as VariantProps,
  siteBodyVariants as variants,
} from "./variants";

type SiteBodyProps = Omit<React.ComponentPropsWithoutRef<"div"> & VariantProps, "style">;

const SiteBody = ({ children, className, ...props }: SiteBodyProps): JSX.Element => {
  /* ClassName variants */
  const { base } = variants();

  return (
    <div className={base({ className })} {...props}>
      {children}
    </div>
  );
};
SiteBody.displayName = "SiteBody";

export { type SiteBodyProps, SiteBody };
