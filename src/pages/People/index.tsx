// import React from "react";
import { useState, useRef } from "react";
import ContentLeft from "../../components/ContentLeft";
import ContentRight from "../../components/ContentRight";
import { LeftCircleOutlined, RightCircleOutlined } from "@ant-design/icons";
export default function People() {
  const [showLeftIcon, setShowLeftIcon] = useState<boolean>(true);
  const LeftSliderRef = useRef<HTMLDivElement>(null);
  const turnIcon = () => {
    setShowLeftIcon(!showLeftIcon);
    const leftSlider = LeftSliderRef.current;
    if (leftSlider) {
      leftSlider.classList.toggle("LeftSliderCollapsed", showLeftIcon);
      leftSlider.classList.toggle("LeftSliderTurn", !showLeftIcon);
    }
  };
  return (
    <div className="flex">
      <div ref={LeftSliderRef} className="w-[400px]">
        <ContentLeft />
      </div>
      <div className="flex-1 relative">
        <ContentRight />
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
      </div>
    </div>
  );
}
