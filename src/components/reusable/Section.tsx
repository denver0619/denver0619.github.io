import type { ReactNode } from "react";

interface SectionProps {
  children?: ReactNode;
  idName: string;
}

const Section = (props: SectionProps) => {
  return <section id={props.idName}>{props.children}</section>;
};

export default Section;
