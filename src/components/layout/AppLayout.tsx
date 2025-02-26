import React, { ReactNode } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Loader from "../shared/Loader";
import ScrollToTop from "../shared/ScrollToTop";

type Props = {
  children: ReactNode;
};

const AppLayout = (props: Props) => {
  return (
    <>
      <Loader />
      <Header />
      {props.children}
      <ScrollToTop />
      <Footer />
    </>
  );
};

export default AppLayout;
