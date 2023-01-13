import React, { FC, Fragment, ReactNode } from "react";
import MainNavigation from "./main-navigation";

const Layout: FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <Fragment>
      <MainNavigation />
      <main>{children}</main>
    </Fragment>
  );
};

export default Layout;
