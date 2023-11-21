import React, { useEffect, useState } from "react";
import { Input } from "antd";
import { observer } from "mobx-react-lite";
import peopleListStore from "../../store/PeopleListStore";
import { DataType } from "../../interface/peopleProps";
import {
  SearchOutlined,
  RightOutlined,
  UsergroupAddOutlined,
  UserOutlined,
} from "@ant-design/icons";

function ContentLeft() {
  const [data, setData] = useState<DataType[]>([]);
  const [currentData, setCurrentData] = useState<DataType[]>([]);
  useEffect(() => {
    fetchPeopleList();
  }, []);
  const fetchPeopleList = async () => {
    // 创建一个新的 async 函数
    const peopleList = await peopleListStore.setPeopleList(); // 使用 await 来等待异步操作完成
    setData(peopleList);
    setCurrentData(peopleList);
  };
  const searchInfo = (e: React.ChangeEvent<HTMLInputElement>) => {
    const inputValue = e.target.value.toLowerCase().trim();
    if (inputValue === "") {
      setCurrentData(data);
    } else {
      const filteredData = data?.reduce((acc: DataType[], item) => {
        const users = item?.users.filter((user) =>
          user.name.toLowerCase().trim().includes(inputValue)
        );
        if (users.length > 0) {
          acc.push({ ...item, users });
        }
        return acc;
      }, []);
      setCurrentData(filteredData);
    }
  };

  return (
    <div className="w-full h-[100vh] border-solid  border-r flex flex-col items-center">
      <div className="w-full mt-2 px-4">
        <Input
          onChange={(e:React.ChangeEvent<HTMLInputElement>) => searchInfo(e)}
          size="large"
          suffix={<SearchOutlined />}
          placeholder="搜索"
          allowClear
        />
      </div>

      <div
        id="scrollableDiv"
        className="hide-scrollbar overflow-y-auto h-[calc(100vh-55px)] overflow-x-hidden w-full mt-6  border-r border-solid border-[rgba(140, 140, 140, 0.35)]"
      >
        <div className="flex justify-between h-[70px] border-b px-4 hover:bg-[#efefef]">
          <div className="flex items-center">
            <UserOutlined
              style={{
                fontSize: "40px",
                color: "white",
                background: "#ff9339",
                height: "40px",
              }}
            />
            <span className="ml-4 max-h-[40px] text-[20px] overflow-hidden">
              新的朋友
            </span>
          </div>
          <RightOutlined />
        </div>
        <div className="flex justify-between h-[70px] border-b px-4 hover:bg-[#efefef]">
          <div className="flex items-center">
            <UsergroupAddOutlined
              style={{
                fontSize: "40px",
                color: "white",
                background: "#00e07a",
                height: "40px",
              }}
            />
            <span className="ml-4 max-h-[40px] text-[20px] overflow-hidden">
              群聊
            </span>
          </div>
          <RightOutlined />
        </div>
        {currentData.map((item) =>
          item.hasData ? (
            <div key={item.letter}>
              <div className="h-8 text-[#cacaca] flex items-center pl-4  bg-[#f4f6fa]">
                {item.letter}
              </div>
              {item.users.map((info) => (
                <div
                  key={info.avatar}
                  className="h-[70px] border-b px-4 flex items-center hover:bg-[#efefef]"
                >
                  <img className="max-h-[50px]" src={info.avatar} alt="" />
                  <span className="ml-4 text-[20px]">{info.name}</span>
                </div>
              ))}
            </div>
          ) : null
        )}
      </div>
    </div>
  );
}
export default observer(ContentLeft);
