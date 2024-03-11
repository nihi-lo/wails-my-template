import { CountDecreaseButton } from "@{{.ProjectName}}/components/model/counter/CountDecreaseButton";
import { CountIncreaseButton } from "@{{.ProjectName}}/components/model/counter/CountIncreaseButton";
import { CountText } from "@{{.ProjectName}}/components/model/counter/CountText";
import { HStack } from "@{{.ProjectName}}/components/ui/layout";

export const Counter = (): JSX.Element => {
  return (
    <HStack align="center" gap="sm">
      <CountDecreaseButton />
      <CountText />
      <CountIncreaseButton />
    </HStack>
  );
};
