import clsx from "clsx";
import React, { PropsWithChildren, useContext, useMemo } from "react";
import { SidebarContext } from "../../../context/sidebar";
import styles from "./sidebar.module.scss";
import ArchiveIcon from "@mui/icons-material/Archive";
import Link from "next/link";

const Sidebar = ({ children }: PropsWithChildren<{}>) => {
  const { open } = useContext(SidebarContext);

  interface IMenu {
    name: string;
    link: string;
    Icon: () => JSX.Element;
  }

  const menus: IMenu[] = useMemo<IMenu[]>(
    () => [
      {
        link: "/archived",
        name: "Arquivados",
        Icon: () => <ArchiveIcon style={{ color: "#fff" }} />,
      },
    ],
    []
  );

  return (
    <>
      <aside
        className={clsx(styles["sidebar"], { [styles["sidebar-open"]]: open })}
      >
        <div
          style={{
            marginTop: "6rem",
          }}
        >
          {menus.map(({ name, link, Icon }) => (
            <Link href={link} passHref key={name}>
              <span style={{ display: "flex", fontWeight: 500 }}>
                <p style={{ color: "#fff" }}>{name}</p>
                <Icon />
              </span>
            </Link>
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
