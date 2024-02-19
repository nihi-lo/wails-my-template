import { Flex } from "@{{.ProjectName}}/components/layout/Flex";
import { CountDecreaseButton } from "@{{.ProjectName}}/components/model/counter/CountDecreaseButton";
import { CountIncreaseButton } from "@{{.ProjectName}}/components/model/counter/CountIncreaseButton";
import { CountText } from "@{{.ProjectName}}/components/model/counter/CountText";

export const Counter = (): JSX.Element => {
  return (
    <Flex align="center" gap="sm">
      <CountDecreaseButton />
      <CountText />
      <CountIncreaseButton />
    </Flex>
  );
};
