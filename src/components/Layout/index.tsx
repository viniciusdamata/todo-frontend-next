import React, { PropsWithChildren } from "react";
import { SidebarContextProvider } from "../../context/sidebar";
import Appbar from "./Appbar";
import Sidebar from "./Sidebar";
import { IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";

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
