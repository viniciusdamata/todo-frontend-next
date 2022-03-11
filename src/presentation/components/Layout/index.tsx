import React, { PropsWithChildren } from "react";
import { SidebarContextProvider } from "@/presentation/context/sidebar";
import Appbar from "./Appbar";
import Sidebar from "./Sidebar";

interface ILayoutProps {}
const Layout = ({ children }: PropsWithChildren<ILayoutProps>) => {
  return (
    <>
      <SidebarContextProvider>
        <Appbar />
        <Sidebar>{children}</Sidebar>
      </SidebarContextProvider>
    </>
  );
};
export default Layout;
