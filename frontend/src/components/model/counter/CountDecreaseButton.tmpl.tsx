import { Button } from "@nextui-org/react";
import { IoRemoveOutline } from "react-icons/io5";

import { useCountStore } from "@{{.ProjectName}}/hooks/useCountStore";

export const CountDecreaseButton = (): JSX.Element => {
  const decrease = useCountStore((state) => state.decrease);

  const handleClick = (): void => {
    decrease(1);
  };

  return (
    <Button size="sm" radius="full" color="primary" isIconOnly onClick={handleClick}>
      <IoRemoveOutline className="size-4" />
    </Button>
  );
};
