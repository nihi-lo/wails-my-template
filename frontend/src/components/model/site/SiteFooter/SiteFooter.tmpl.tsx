import { Container, HStack } from "@{{.ProjectName}}/components/ui/layout";

import {
  type SiteFooterVariantProps as VariantProps,
  siteFooterVariants as variants,
} from "./SiteFooter.variants";

type SiteFooterProps = VariantProps & {
  className?: string | undefined;
};

const SiteFooter = ({ className, ...props }: SiteFooterProps): JSX.Element => {
  /* ClassName variants */
  const { base } = variants();

  return (
    <footer className={base({ className })} {...props}>
      <Container className="h-24">
        <HStack align="center" className="h-full">
          <p className="text-xs">Footer</p>
        </HStack>
      </Container>
    </footer>
  );
};
SiteFooter.displayName = "SiteFooter";

export { SiteFooter };
