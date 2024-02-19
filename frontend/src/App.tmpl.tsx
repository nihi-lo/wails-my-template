import { Button, Input } from "@nextui-org/react";
import { Flex } from "@{{.ProjectName}}/components/layout/Flex";
import { Counter } from "@{{.ProjectName}}/components/model/counter/Counter";
import { ThemeToggle } from "@{{.ProjectName}}/components/model/theme/ThemeToggle";
import { Greet } from "@wailsjs/go/main/App";
import { ChangeEvent, useState } from "react";

export const App = (): JSX.Element => {
  const [resultText, setResultText] = useState(
    "Please enter your name below 👇",
  );
  const [name, setName] = useState("");

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>) => {
    setName(e.target.value);
  };

  const handleClickGreet = () => {
    void Greet(name).then((result: string) => setResultText(result));
  };

  return (
    <div className="relative flex min-h-screen flex-col bg-background">
      <Flex as="header" align="center" justify="end" p="sm">
        <ThemeToggle />
      </Flex>
      <Flex as="main" align="center" justify="center" grow="1" p="lg">
        <Flex direction="col" align="center" justify="center" gap="xl">
          <h1 className="text-7xl font-extrabold">
            Hello <span className="text-primary">Wails</span> App
          </h1>
          <Flex direction="col" align="center" justify="center" gap="sm">
            <div>{resultText}</div>
            <Flex align="center" justify="center" gap="sm">
              <Input
                label="Name"
                labelPlacement="outside-left"
                onChange={handleChangeInput}
              />
              <Button color="primary" onClick={handleClickGreet}>
                Greet
              </Button>
            </Flex>
          </Flex>
          <Counter />
        </Flex>
      </Flex>
    </div>
  );
};
