import { AboutContent } from "./About.content";
import { AboutLayout } from "./About.layout";

const AboutPage = (): JSX.Element => {
  return <AboutLayout content={<AboutContent />} />;
};

export { AboutPage };
