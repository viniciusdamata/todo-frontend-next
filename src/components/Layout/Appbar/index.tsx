import React, { useContext } from "react";
import { SidebarContext } from "../../../context/sidebar";
import styles from "./appBar.module.scss";

const Appbar = () => {
  const { toggleSidebar } = useContext(SidebarContext);

  return (
    <>
      <div className={styles["app-bar"]}>
        <h1>TodoApp</h1>
        <button onClick={toggleSidebar}>Toggle sidebar</button>
      </div>
    </>
  );
};
export default Appbar;
