import { Button } from "@nextui-org/react";
import { IoAddOutline } from "react-icons/io5";

import { useCountStore } from "@{{.ProjectName}}/hooks/useCountStore";

export const CountIncreaseButton = (): JSX.Element => {
  const increase = useCountStore((state) => state.increase);

  const handleClick = (): void => {
    increase(1);
  };

  return (
    <Button size="sm" radius="full" color="primary" isIconOnly onClick={handleClick}>
      <IoAddOutline className="size-4" />
    </Button>
  );
};
