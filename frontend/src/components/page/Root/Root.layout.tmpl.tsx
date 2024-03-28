import { SiteBody } from "@{{.ProjectName}}/components/model/site/SiteBody";
import { SiteHeader } from "@{{.ProjectName}}/components/model/site/SiteHeader";
import { VStack } from "@{{.ProjectName}}/components/ui/layout";

interface RootLayoutProps {
  content: React.ReactNode;
}

const RootLayout = ({ content }: RootLayoutProps): JSX.Element => {
  return (
    <VStack className="relative min-h-screen bg-background">
      <SiteHeader isSticky isGlass />
      <SiteBody className="flex items-center justify-center">{content}</SiteBody>
    </VStack>
  );
};
RootLayout.displayName = "RootLayout";

export { RootLayout };
