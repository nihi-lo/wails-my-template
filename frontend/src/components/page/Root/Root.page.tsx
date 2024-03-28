import { RootContent } from "./Root.content";
import { RootLayout } from "./Root.layout";

const RootPage = (): JSX.Element => {
  return <RootLayout content={<RootContent />} />;
};

export { RootPage };
