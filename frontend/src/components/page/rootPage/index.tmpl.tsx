import { Button, Input } from "@nextui-org/react";
import { type ChangeEvent, useState } from "react";

import { Greet } from "@wailsjs/go/main/App";

import { SiteBody } from "@{{.ProjectName}}/components/model/site/SiteBody";
import { SiteFooter } from "@{{.ProjectName}}/components/model/site/SiteFooter";
import { SiteHeader } from "@{{.ProjectName}}/components/model/site/SiteHeader";
import { HStack, VStack } from "@{{.ProjectName}}/components/ui/layout";
import { Heading } from "@{{.ProjectName}}/components/ui/typography";

const RootPage = (): JSX.Element => {
  const [resultText, setResultText] = useState("Please enter your name below 👇");
  const [name, setName] = useState("");

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleClickGreet = () => {
    void Greet(name).then((result: string) => setResultText(result));
  };

  return (
    <VStack className="relative min-h-screen bg-background">
      <SiteHeader />
      <SiteBody className="flex items-center justify-center">
        <VStack as="main" align="center" justify="center" gap="xl">
          <Heading as="h1" className="text-7xl font-extrabold">
            Hello <span className="text-primary">Wails</span> App
          </Heading>
          <VStack align="center" justify="center" gap="sm">
            <div>{resultText}</div>
            <HStack align="center" justify="center" gap="sm">
              <Input label="Name" labelPlacement="outside-left" onChange={handleChangeInput} />
              <Button color="primary" onClick={handleClickGreet}>
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

export { RootPage };
