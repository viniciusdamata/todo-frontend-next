import clsx from "clsx";
import React, {
  PropsWithChildren,
  useCallback,
  useContext,
  useMemo,
} from "react";
import ArchiveIcon from "@mui/icons-material/Archive";
import Link from "next/link";
import { SidebarContext } from "@/presentation/context/sidebar";
import styles from "./sidebar.module.scss";
import StickyNote2Icon from "@mui/icons-material/StickyNote2";
import { signOut, useSession } from "next-auth/react";
import LogoutIcon from "@mui/icons-material/Logout";
import { Button } from "react-bootstrap";

const Sidebar = ({ children }: PropsWithChildren<{}>) => {
  const { open } = useContext(SidebarContext);

  const { data } = useSession();

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

  const handleSignOut = useCallback(async () => {
    await signOut({
      redirect: true,
      callbackUrl: "http://localhost:3000/login",
    });
  }, []);

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
        <div className={styles["sidebar-user"]}>
          <p className={styles["sidebar-user-username"]}>
            Logado como {data?.user?.email}
          </p>
          <Button
            onClick={handleSignOut}
            className={styles["sidebar-user-logout-button"]}
            variant="link"
          >
            <p>Sair</p>
            <LogoutIcon style={{ color: "#fff" }} />
          </Button>
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
