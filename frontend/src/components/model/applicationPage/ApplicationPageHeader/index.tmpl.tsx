import { Divider } from "@nextui-org/react";

import { ThemeToggle } from "@{{.ProjectName}}/components/model/theme";
import { Container, HStack } from "@{{.ProjectName}}/components/ui/layout";
import { Header, HeaderProps } from "@{{.ProjectName}}/components/ui/surfaces";

type ApplicationPageHeaderProps = HeaderProps;

const ApplicationPageHeader = ({ ...props }: ApplicationPageHeaderProps): JSX.Element => {
  return (
    <Header isSticky isGlass {...props}>
      <Container className="h-14">
        <HStack align="center" className="h-full">
          <HStack align="center" gap="xs">
            <p className="text-large">{{.ProjectName}}</p>
          </HStack>
          <HStack justify="end" grow="1">
            <ThemeToggle />
          </HStack>
        </HStack>
      </Container>
      <Divider />
    </Header>
  );
};
ApplicationPageHeader.displayName = "ApplicationPageHeader";

export { type ApplicationPageHeaderProps, ApplicationPageHeader };
