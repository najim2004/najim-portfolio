import GithubStatus from "@/Components/GithubStatus/GithubStatus";
import MainContent from "@/Components/MainContent/MainContent";
import RightSideBar from "@/Components/RightSideBar/RightSideBar";
import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="grid p-3 grid-cols-1 lg:grid-cols-12 lg:p-10 gap-6 container">
      <div className="w-full lg:col-span-3 min-h-[calc(100vh-96px)] lg:max-h-[calc(100vh-96px)] rounded-3xl border-2 border-box-border shadow-md lg:overflow-y-scroll">
        <RightSideBar />
      </div>
      <div className="lg:col-span-6 w-full min-h-[calc(100vh-96px)] lg:max-h-[calc(100vh-96px)] lg:overflow-y-scroll border-2 border-box-border shadow-md rounded-3xl bg-secondary-bg">
        <MainContent />
      </div>
      <div className="lg:col-span-3 w-full lg:min-h-[calc(100vh-96px)]">
        <GithubStatus />
      </div>
    </div>
  );
};

export default page;
