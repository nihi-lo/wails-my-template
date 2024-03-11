import { HeaderVariantProps as VariantProps, headerVariants as variants } from "./variants";

interface HeaderProps
  extends Omit<React.ComponentPropsWithoutRef<"header">, "style">,
    VariantProps {}

const Header = ({ isSticky, isGlass, className, ...props }: HeaderProps): JSX.Element => {
  /* ClassName variants */
  const { base } = variants({ isSticky, isGlass });

  return (
    <header className={base({ className })} {...props}>
      {props.children}
    </header>
  );
};
Header.displayName = "Header";

export { type HeaderProps, Header };
