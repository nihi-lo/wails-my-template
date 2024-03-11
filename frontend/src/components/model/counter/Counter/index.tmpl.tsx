import {
  CountDecreaseButton,
  CountIncreaseButton,
  CountText,
} from "@{{.ProjectName}}/components/model/counter";
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
