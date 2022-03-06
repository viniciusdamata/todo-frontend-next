import React, { PropsWithChildren } from "react";
interface ILayoutProps {}
const Layout = ({ children }: PropsWithChildren<ILayoutProps>) => {
  return <>{children}</>;
};
export default Layout;
