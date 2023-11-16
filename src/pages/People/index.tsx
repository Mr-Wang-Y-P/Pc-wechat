import React from "react";
import ContentLeft from "../../components/ContentLeft";
import ContentRight from "../../components/ContentRight";
export default function People() {
  return (
    <div className="flex">
      <div className="w-[400px]">
        <ContentLeft />
      </div>
      <div className="flex-1">
        <ContentRight />
      </div>
    </div>
  );
}
