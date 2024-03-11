import { Button, Input } from "@nextui-org/react";
import { ChangeEvent, useState } from "react";

import {
  ApplicationPageBody,
  ApplicationPageFooter,
  ApplicationPageHeader,
} from "@{{.ProjectName}}/components/model/applicationPage";
import { Counter } from "@{{.ProjectName}}/components/model/counter";
import { HStack, VStack } from "@{{.ProjectName}}/components/ui/layout";

import { Greet } from "@wailsjs/go/main/App";

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
      <ApplicationPageHeader />
      <ApplicationPageBody>
        <main>
          <HStack align="center" justify="center" grow="1" p="lg">
            <VStack align="center" justify="center" gap="xl">
              <h1 className="text-7xl font-extrabold">
                Hello <span className="text-primary">Wails</span> App
              </h1>
              <VStack align="center" justify="center" gap="sm">
                <div>{resultText}</div>
                <VStack align="center" justify="center" gap="sm">
                  <Input label="Name" labelPlacement="outside-left" onChange={handleChangeInput} />
                  <Button color="primary" onClick={handleClickGreet}>
                    Greet
                  </Button>
                </VStack>
              </VStack>
              <Counter />
            </VStack>
          </HStack>
        </main>
      </ApplicationPageBody>
      <ApplicationPageFooter />
    </VStack>
  );
};

export { RootPage };
