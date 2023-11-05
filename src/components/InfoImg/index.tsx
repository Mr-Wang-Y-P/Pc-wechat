import React from "react";
import styles from "./index.module.scss";
import type { MenuProps } from "antd";
import { Dropdown} from "antd";

const items: MenuProps["items"] = [
  {
    key: "1",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.antgroup.com"
      >
        1st menu item
      </a>
    ),
  },
  {
    key: "2",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.aliyun.com"
      >
        2nd menu item
      </a>
    ),
  },
  {
    key: "3",
    label: (
      <a
        target="_blank"
        rel="noopener noreferrer"
        href="https://www.luohanacademy.com"
      >
        3rd menu item
      </a>
    ),
  },
];
export default function infoImg() {
  return (
    <div className={styles.info}>
      <Dropdown menu={{ items }} arrow>
          <img
            src="https://img.touxiangwu.com/uploads/allimg/231013/1_1013153545N42.jpg"
            alt=""
          />
      </Dropdown>
    </div>
  );
}
