import Header from "@/components/Projects/Header";
import Main from "@/components/Projects/Main";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="max-w-[1000px] mx-auto py-10 font-primary space-y-6 p-3">
        <Header />
        <Main />
      </div>
    </div>
  );
};

export default page;
