import { Button, Input } from "@nextui-org/react";
import { type ChangeEvent, useState } from "react";

import { Greet } from "@wailsjs/go/main/App";

import { useUserStore } from "@foo/hooks/useUserStore";

import { SiteBody } from "@foo/components/model/site/SiteBody";
import { SiteFooter } from "@foo/components/model/site/SiteFooter";
import { SiteHeader } from "@foo/components/model/site/SiteHeader";
import { HStack, VStack } from "@foo/components/ui/layout";
import { Heading } from "@foo/components/ui/typography";

const RootPage = (): JSX.Element => {
  /* React hooks */
  const { name, updateName } = useUserStore(); // Global state
  const [resultText, setResultText] = useState("Please enter your name below 👇"); // Local state

  /* Event handlers */
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    updateName(e.target.value);
  };
  const handleGreetClick = () => {
    void Greet(name).then((result: string) => setResultText(result));
  };

  return (
    <VStack className="relative min-h-screen bg-background">
      <SiteHeader isSticky isGlass />
      <SiteBody className="flex items-center justify-center">
        <VStack as="main" align="center" justify="center" gap="xl">
          <Heading as="h1" className="text-7xl font-extrabold">
            Hello <span className="text-primary">Wails</span> App
          </Heading>
          <VStack align="center" justify="center" gap="sm">
            <div>{resultText}</div>
            <HStack align="center" justify="center" gap="sm">
              <Input label="Name" defaultValue={name} onChange={handleInputChange} />
              <Button color="primary" onClick={handleGreetClick}>
                Greet
              </Button>
            </HStack>
          </VStack>
        </VStack>
      </SiteBody>
      <SiteFooter />
    </VStack>
  );
};
RootPage.displayName = "RootPage";

export { RootPage };
