import React, { ReactNode } from "react";
import Header from "./Header";

type Props = {
  children: ReactNode;
};

const AppLayout = (props: Props) => {
  return (
    <>
      <Header />
      {props.children}
    </>
  );
};

export default AppLayout;
