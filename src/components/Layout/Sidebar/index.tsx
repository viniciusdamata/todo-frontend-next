import clsx from "clsx";
import React, { PropsWithChildren, useContext } from "react";
import { SidebarContext } from "../../../context/sidebar";
import styles from "./sidebar.module.scss";

const Sidebar = ({ children }: PropsWithChildren<{}>) => {
  const { open } = useContext(SidebarContext);

  console.log("Sidebar->open", open);

  return (
    <>
      <aside
        className={clsx(styles["sidebar"], { [styles["sidebar-open"]]: open })}
      ></aside>
      <main
        className={clsx(styles["main-content"], {
          [styles["main-content-sidebar-open"]]: open,
        })}
      >
        {children}
      </main>
    </>
  );
};
export default Sidebar;
