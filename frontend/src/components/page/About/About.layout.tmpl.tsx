import { SiteBody } from "@{{.ProjectName}}/components/model/site/SiteBody";
import { SiteFooter } from "@{{.ProjectName}}/components/model/site/SiteFooter";
import { SiteHeader } from "@{{.ProjectName}}/components/model/site/SiteHeader";
import { VStack } from "@{{.ProjectName}}/components/ui/layout";

interface RootLayoutProps {
  content: React.ReactNode;
}

const AboutLayout = ({ content }: RootLayoutProps): JSX.Element => {
  return (
    <VStack className="relative min-h-screen bg-background">
      <SiteHeader isSticky isGlass />
      <SiteBody className="flex items-center justify-center">{content}</SiteBody>
      <SiteFooter />
    </VStack>
  );
};
AboutLayout.displayName = "AboutLayout";

export { AboutLayout };
