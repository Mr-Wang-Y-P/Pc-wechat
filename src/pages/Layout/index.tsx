// import React from "react";
import SliderLeft from "../SliderLeft";
import { Outlet } from "react-router-dom";
import styles from "./index.module.scss";
import { useEffect, useState } from "react";

export default function Layout() {
  const [isDarkMode, setIsDarkMode] = useState<boolean>(false);

  useEffect(() => {
    const styleId = "dynamic-style";
    let styleElement = document.getElementById(styleId);

    if (isDarkMode) {
      if (!styleElement) {
        styleElement = document.createElement("style");
        styleElement.id = styleId;
        document.head.appendChild(styleElement);
      }

      styleElement.innerHTML = `
        /* 样式文件的内容 */
        body {
          background: black;
          color: white;
       }
        .actionHeader {
          background: black !important;
        }
        .userMessage {
          color: black;
        }
        .buttons {
          background: black;
        }
      `;
    } else {
      if (styleElement) {
        document.head.removeChild(styleElement);
      }
    }
  }, [isDarkMode]);

  const handleToggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
  };
  return (
    <div className={styles.layout}>
      <SliderLeft onToggleDarkMode={handleToggleDarkMode}></SliderLeft>
      <div className={styles.right}>
        <Outlet />
      </div>
    </div>
  );
}
