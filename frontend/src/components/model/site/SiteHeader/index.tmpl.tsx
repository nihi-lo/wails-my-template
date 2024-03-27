import { Divider } from "@nextui-org/react";

import { ThemeToggleButton } from "@{{.ProjectName}}/components/model/theme/ThemeToggleButton";
import { Container, HStack } from "@{{.ProjectName}}/components/ui/layout";
import { Header, type HeaderProps } from "@{{.ProjectName}}/components/ui/surfaces";

type SiteHeaderProps = HeaderProps;

const SiteHeader = ({ ...props }: SiteHeaderProps): JSX.Element => {
  return (
    <Header isSticky isGlass {...props}>
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
    </Header>
  );
};
SiteHeader.displayName = "SiteHeader";

export { type SiteHeaderProps, SiteHeader };
