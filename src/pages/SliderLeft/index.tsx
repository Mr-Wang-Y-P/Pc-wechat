import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  DesktopOutlined,
  PieChartOutlined,
  MessageOutlined,
  SettingOutlined,
  UsergroupAddOutlined,
  HeartOutlined,
  PoundCircleOutlined,
} from "@ant-design/icons";
import type { MenuProps } from "antd";
import { Menu } from "antd";
import styles from "./index.module.scss";
import InfoImg from "../../components/InfoImg";
type MenuItem = Required<MenuProps>["items"][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon?: React.ReactNode,
  children?: MenuItem[],
  type?: "group"
): MenuItem {
  return {
    key,
    icon,
    children,
    label,
    type,
  } as MenuItem;
}

interface MenuInfo {
  item: any;
  key: string;
  keyPath: any;
  domEvent: any;
}
const items: MenuItem[] = [
  getItem("", "me", <InfoImg />),
  getItem("消息", "message", <MessageOutlined />),
  getItem("好友", "people", <UsergroupAddOutlined />),
  getItem("收藏", "collect", <HeartOutlined />),
  getItem("朋友圈", "action", <PieChartOutlined />),
  getItem("通知", "introduction", <PoundCircleOutlined />),
  getItem("主题", "theme", <DesktopOutlined />),
  getItem("设置", "setting", <SettingOutlined />),
];

const SliderLeft: React.FC = () => {
  const navigate = useNavigate();

  function jumpPage(info: MenuInfo): void {
    console.log(info);
    if(info.key === 'message' || info.key === 'collect' || info.key === 'action' || info.key === 'people'){
            navigate(info.key);
    }

  }

  return (
    <div className={styles.sliderLeft}>
      <Menu
        className={styles.menu}
        defaultSelectedKeys={["message"]}
        onClick={jumpPage}
        mode="inline"
        theme="dark"
        inlineCollapsed={true}
        items={items}
      />
    </div>
  );
};

export default SliderLeft;
