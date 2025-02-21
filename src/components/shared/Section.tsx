import React, { ReactNode } from "react";

type Props = {
  children: ReactNode;
};

const Section = (props: Props) => {
  return (
    <section className="container pt-0 mx-auto lg:px-4 lg:py-4">
      {props.children}
    </section>
  );
};

export default Section;
