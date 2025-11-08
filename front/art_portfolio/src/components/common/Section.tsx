import React from "react";

interface SectionProps {
  children: React.ReactNode;
  id: string;
}

const Section: React.FC<SectionProps> = ({ children, id }) => {
  return <section id={id} className="p-4 px-16 bg-base-100">
    {children}
  </section>;
};

export default Section;
