import { Divider } from "@nextui-org/react";

import { ThemeToggleButton } from "@{{.ProjectName}}/components/model/theme/ThemeToggleButton";
import { Container, HStack } from "@{{.ProjectName}}/components/ui/layout";

import {
  type SiteHeaderVariantProps as VariantProps,
  siteHeaderVariants as variants,
} from "./SiteHeader.variants";

type SiteHeaderProps = VariantProps & {
  className?: string | undefined;
};

const SiteHeader = ({ isSticky, isGlass, className, ...props }: SiteHeaderProps): JSX.Element => {
  /* ClassName variants */
  const { base } = variants();

  return (
    <header className={base({ isSticky, isGlass, className })} {...props}>
      <Container className="h-14">
        <HStack align="center" className="h-full">
          <HStack align="center" gap="xs">
            <p className="text-large">bar</p>
          </HStack>
          <HStack justify="end" grow="1">
            <ThemeToggleButton />
          </HStack>
        </HStack>
      </Container>
      <Divider />
    </header>
  );
};
SiteHeader.displayName = "SiteHeader";

export { type SiteHeaderProps, SiteHeader };
