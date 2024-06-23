import RightSideBar from "@/Components/RightSideBar/RightSideBar";
import React from "react";

const page = () => {
  return (
    <div className="grid grid-cols-12 lg:p-10 gap-x-6 container">
      <div className="w-full col-span-3 min-h-[calc(100vh-96px)] lg:max-h-[calc(100vh-96px)] rounded-3xl border-2 border-border-b shadow-md lg:overflow-y-scroll">
        <RightSideBar />
      </div>
      <div className="col-span-9 w-full min-h-[calc(100vh-96px)] border-2 border-border-b shadow-md rounded-3xl"></div>
    </div>
  );
};

export default page;
