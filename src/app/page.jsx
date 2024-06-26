"use client";

import GithubStatus from "@/components/GithubStatus/GithubStatus";
import MainContent from "@/components/MainContent/MainContent";
import RightSideBar from "@/components/RightSideBar/RightSideBar";

const page = () => {
  return (
    <div className="grid p-3 grid-cols-1 lg:grid-cols-12 lg:p-10 gap-6 container mx-auto">
      <div className="w-full lg:col-span-3 min-h-[calc(100vh-96px)] lg:max-h-[calc(100vh-96px)] rounded-3xl border-2 border-box-border shadow-md lg:overflow-y-scroll">
        <RightSideBar />
      </div>
      <div className="lg:col-span-6 w-full min-h-[calc(100vh-96px)] lg:max-h-[calc(100vh-96px)] lg:overflow-y-scroll border-2 border-box-border shadow-md rounded-3xl bg-secondary-bg">
        <MainContent />
      </div>
      <div className="lg:col-span-3 w-full lg:min-h-[calc(100vh-96px)]">
        <GithubStatus />
        <h3 className="mt-5 text-center text-red-500 text-2xl font-primary">
          This site is under construction! So some features may not be working
          properly!
        </h3>
      </div>
    </div>
  );
};

export default page;
