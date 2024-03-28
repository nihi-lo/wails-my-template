import {
  type SiteBodyVariantProps as VariantProps,
  siteBodyVariants as variants,
} from "./SiteBody.variants";

type SiteBodyProps = VariantProps & {
  children: React.ReactNode;
  className?: string | undefined;
};

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
