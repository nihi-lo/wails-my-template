import { Button, Input, Link } from "@nextui-org/react";
import { type ChangeEvent, useState } from "react";

import { Greet } from "@wailsjs/go/main/App";

import { useUserStore } from "@{{.ProjectName}}/hooks/useUserStore";

import { HStack, VStack } from "@{{.ProjectName}}/components/ui/layout";
import { Heading } from "@{{.ProjectName}}/components/ui/typography";

const RootContent = (): JSX.Element => {
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
    <VStack as="main" align="center" gap="xl">
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
      <Link href="/about">Aboutページへ</Link>
    </VStack>
  );
};
RootContent.displayName = "RootContent";

export { RootContent };
