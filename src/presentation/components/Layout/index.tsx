import React, { PropsWithChildren } from "react";
import { SidebarContextProvider } from "@/presentation/context/sidebar";
import Appbar from "./Appbar";
import Sidebar from "./Sidebar";

export const Layout = ({ children }: PropsWithChildren<{}>) => {
  return (
    <>
      <SidebarContextProvider>
        <>
          <Appbar />
          <Sidebar>{children}</Sidebar>
        </>
      </SidebarContextProvider>
    </>
  );
};
