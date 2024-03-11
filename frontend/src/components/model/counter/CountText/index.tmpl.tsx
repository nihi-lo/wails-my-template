import { useCountStore } from "@{{.ProjectName}}/hooks/useCountStore";

export const CountText = (): JSX.Element => {
  const count = useCountStore((state) => state.count);

  return <div className="w-8 text-center text-xl">{count}</div>;
};
