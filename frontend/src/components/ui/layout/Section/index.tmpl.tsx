import { Divider } from "@nextui-org/react";

import { HStack } from "@{{.ProjectName}}/components/ui/layout";
import { Heading } from "@{{.ProjectName}}/components/ui/typography";

import { SectionVariantProps as VariantProps, sectionVariants as variants } from "./variants";

interface SectionProps
  extends Omit<React.ComponentPropsWithoutRef<"section">, "className" | "style">,
    VariantProps {
  headingAs: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  title?: string;
}

const Section = ({
  headingAs,
  title,
  p,
  px,
  py,
  pt,
  grow,
  ...props
}: SectionProps): JSX.Element => {
  /* ClassName variants */
  const { base } = variants({ p, px, py, pt, grow });

  return (
    <section className={base()} {...props}>
      {title && (
        <>
          <Heading as={headingAs} className="text-xl font-semibold">
            <HStack align="center" gap="sm">
              {headingAs === "h2" && <div className="h-4 w-0.5 bg-primary" />}
              {title}
            </HStack>
          </Heading>
          <Divider className="my-2" />
        </>
      )}
      {props.children}
    </section>
  );
};
Section.displayName = "Section";

export { type SectionProps, Section };
