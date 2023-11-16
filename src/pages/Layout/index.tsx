// import React from "react";
import SliderLeft from "../SliderLeft";
import { Outlet } from "react-router-dom";
import styles from "./index.module.scss";
export default function Layout() {
  return (
    <div className={styles.layout}>
      <SliderLeft></SliderLeft>
      <div className={styles.right}>
        <Outlet />
      </div>
    </div>
  );
}
