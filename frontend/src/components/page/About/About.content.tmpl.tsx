import { Link } from "@nextui-org/react";

import { VStack } from "@{{.ProjectName}}/components/ui/layout";
import { Heading } from "@{{.ProjectName}}/components/ui/typography";

const AboutContent = (): JSX.Element => {
  return (
    <VStack as="main" align="center" gap="xl">
      <Heading as="h1" className="text-7xl font-extrabold">
        this <span className="text-primary">About</span> Page
      </Heading>
      <Link href="/">Topページへ</Link>
    </VStack>
  );
};
AboutContent.displayName = "AboutContent";

export { AboutContent };
