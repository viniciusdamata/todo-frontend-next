import clsx from "clsx";
import React, { PropsWithChildren, useContext, useMemo } from "react";
import ArchiveIcon from "@mui/icons-material/Archive";
import Link from "next/link";
import { SidebarContext } from "@/presentation/context/sidebar";
import styles from "./sidebar.module.scss";
import StickyNote2Icon from "@mui/icons-material/StickyNote2";

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
        link: "/",
        name: "Minhas notas",
        Icon: () => <StickyNote2Icon style={{ color: "#fff" }} />,
      },
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
      <nav
        className={clsx(styles["sidebar"], { [styles["sidebar-open"]]: open })}
      >
        <div className={styles["sidebar-content"]}>
          {menus.map(({ name, link, Icon }) => (
            <Link href={link} passHref key={name}>
              <span className={styles["sidebar-content-item"]}>
                <p>{name}</p>
                <Icon />
              </span>
            </Link>
          ))}
        </div>
      </nav>
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
