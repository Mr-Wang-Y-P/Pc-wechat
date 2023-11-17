// import React from "react";
import { SearchOutlined } from "@ant-design/icons";
import { Input } from "antd";
export default function ContentRight() {
  return (
    <div>
      <p className="text-2xl mx-4 mt-4">通讯录</p>
      <div className="contentInput flex flex-col justify-center items-center h-[calc(100vh-48px)]">
        <span className="text-5xl">搜索一下</span>
        <Input
          className="w-[60%] mt-6 h-16"
          size="large"
          placeholder="搜索"
          suffix={<SearchOutlined style={{ fontSize: "28px" }} />}
        />
      </div>
    </div>
  );
}
