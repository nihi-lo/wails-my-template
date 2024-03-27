import { Container, HStack } from "@{{.ProjectName}}/components/ui/layout";

const SiteFooter = (): JSX.Element => {
  return (
    <footer className="bg-content1 py-6 md:px-8 md:py-0">
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
