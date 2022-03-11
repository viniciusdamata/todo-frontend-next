import React, { useContext } from "react";
import MenuIcon from "@mui/icons-material/Menu";
import { IconButton } from "@mui/material";
import { SidebarContext } from "@/presentation/context/sidebar";
import styles from "./appBar.module.scss";

const Appbar = () => {
  const { toggleSidebar } = useContext(SidebarContext);

  return (
    <>
      <div className={styles["app-bar"]}>
        <IconButton onClick={toggleSidebar}>
          <MenuIcon />
        </IconButton>
        <h1>TodoApp</h1>
      </div>
    </>
  );
};
export default Appbar;
