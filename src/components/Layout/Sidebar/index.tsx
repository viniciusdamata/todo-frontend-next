import clsx from "clsx";
import React, { PropsWithChildren, useContext, useMemo } from "react";
import { SidebarContext } from "../../../context/sidebar";
import styles from "./sidebar.module.scss";

const Sidebar = ({ children }: PropsWithChildren<{}>) => {
  const { open } = useContext(SidebarContext);

  interface IMenu {
    name: string;
    link: string;
  }

  const menus: IMenu[] = useMemo<IMenu[]>(
    () => [
      {
        link: "/archived",
        name: "Arquivados",
      },
    ],
    []
  );

  return (
    <>
      <aside
        className={clsx(styles["sidebar"], { [styles["sidebar-open"]]: open })}
      >
        <div style={{
            top: 300
        }}>
          {menus.map((menu) => (
            <span>{menu.name}</span>
          ))}
        </div>
      </aside>
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
