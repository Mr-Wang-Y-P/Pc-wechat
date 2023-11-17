// import React from 'react'
import { Input } from "antd";
import {
  SearchOutlined,
  LeftCircleOutlined,
  RightCircleOutlined,
  EllipsisOutlined,
  SettingOutlined,
} from "@ant-design/icons";
import { useEffect, useRef, useState } from "react";
export default function Message() {
  const searchMessage = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
  };
  const [showLeftIcon, setShowLeftIcon] = useState<boolean>(true);
  const LeftSliderRef = useRef<HTMLDivElement>(null);
  const InputRef = useRef<HTMLInputElement>(null);
  const turnIcon = () => {
    setShowLeftIcon(!showLeftIcon);
    const leftSlider = LeftSliderRef.current;
    if (leftSlider) {
      leftSlider.classList.toggle("LeftSliderCollapsed", showLeftIcon);
      leftSlider.classList.toggle("LeftSliderTurn", !showLeftIcon);
    }
  };

  useEffect(() => {
    const div = InputRef.current;

    const handleInput = () => {
      console.log(div?.textContent); // 输出当前div的内容
    };

    div?.addEventListener("input", handleInput);
    div?.addEventListener("paste", (e) => {
      let file = null;
      const items = e.clipboardData?.items;
      if (items && items.length) {
        for (var i = 0; i < items.length; i++) {
          if (items[i].type.indexOf("image") !== -1) {
            file = items[i].getAsFile();
            break;
          }
        }
      }
      if (file) {
        console.log(file);
        // 此时获取到file文件对象，即可处理上传相关处理
      }
    });

    // 在组件卸载时移除事件监听器
    return () => {
      div?.removeEventListener("input", handleInput);
      div?.removeEventListener("paste", handleInput);
    };
  }, []); // 依赖数组为空，表示这个effect只在组件挂载和卸载时运行
  return (
    <div className="flex">
      <div ref={LeftSliderRef} className="w-[400px]">
        <div className="w-full h-[100vh] border-solid  border-r flex flex-col items-center">
          <div className="w-full mt-2 px-4">
            <Input
              onChange={(e) => searchMessage(e)}
              size="large"
              suffix={<SearchOutlined />}
              placeholder="搜索"
              allowClear
            />
          </div>

          <div className="flex flex-col w-full mt-6">
            <div className="h-[80px] flex items-center px-4 border-b  hover:bg-[#efefef]">
              <img
                className="max-h-[60px]"
                src={"https://randomuser.me/api/portraits/women/72.jpg"}
                alt=""
              />
              <div className="mx-4 max-w-[60%]">
                <div className="font-bold truncate">Win</div>
                <div className="truncate text-[#aeaeae]">
                  今天天气怎么样呢wwwww我顶顶顶伟大的哇？
                </div>
              </div>
              <div className="w-[40px]">
                <div>10:06</div>
                <div className="h-[24px]"></div>
              </div>
            </div>
            <div className="h-[80px] flex items-center px-4 border-b  hover:bg-[#efefef]">
              <img
                className="max-h-[60px]"
                src={"https://randomuser.me/api/portraits/women/2.jpg"}
                alt=""
              />
              <div className="mx-4 max-w-[60%]">
                <div className="font-bold truncate">Win</div>
                <div className="truncate text-[#aeaeae]">
                  今天天气怎么样呢wwwww我顶顶顶伟大的哇？
                </div>
              </div>
              <div className="w-[40px]">
                <div>10:06</div>
                <div className="h-[24px]"></div>
              </div>
            </div>
            <div className="h-[80px] flex items-center px-4 border-b  hover:bg-[#efefef]">
              <img
                className="max-h-[60px]"
                src={"https://randomuser.me/api/portraits/men/72.jpg"}
                alt=""
              />
              <div className="mx-4 max-w-[60%]">
                <div className="font-bold truncate">Win</div>
                <div className="truncate text-[#aeaeae]">
                  今天天气怎么样呢wwwww我顶顶顶伟大的哇？
                </div>
              </div>
              <div className="">
                <div>10:06</div>
                <div className="h-[24px]"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex-1 h-[100vh]  relative">
        {showLeftIcon ? (
          <LeftCircleOutlined
            onClick={turnIcon}
            style={{
              fontSize: "30px",
              position: "absolute",
              left: "-15px",
              top: "50%",
            }}
          />
        ) : (
          <RightCircleOutlined
            onClick={turnIcon}
            style={{
              fontSize: "30px",
              position: "absolute",
              left: "-15px",
              top: "50%",
            }}
          />
        )}
        <div className="h-full flex flex-col">
          <div className="flex justify-between">
            <p className="text-2xl mx-4 mt-4">React18 Hooks 开发小组</p>
            <div className="flex">
              <SettingOutlined
                style={{ fontSize: "24px", marginRight: "16px" }}
              />
              <EllipsisOutlined
                style={{ fontSize: "24px", marginRight: "16px" }}
              />
            </div>
          </div>
          <div className="hide-scrollbar h-[calc(100vh-60px)] overflow-auto flex flex-col">
            <div className="flex-auto min-h-[200px] mb-4">
              <p className="text-center text-[#aeaeae] p-4 ">
                2023年11月17日 早上9:00
              </p>
              <p className="text-center text-[#aeaeae] p-4">
                Win 邀请了Tony进入了群聊
              </p>
            </div>
            <div className="flex justify-center mb-6 relative">
              <div
                className="hide-scrollbar max-h-[600px] overflow-auto inline-block w-[90%] border border-solid rounded-2xl px-4 leading-[60px] text-[20px] shadow-lg shadow-slate-400"
                suppressContentEditableWarning
                contentEditable
                ref={InputRef}
              >
                This text can be edited by the user.
                <div className="absolute bottom-0 right-[6%]">
                  这里是一堆按钮。。。
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
