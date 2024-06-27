"use client";

import CopyRights from "@/Components/CopyRights/CopyRights";
import CoursesAndCertificates from "@/Components/CoursesAndCertificates/CoursesAndCertificates";
import GithubStatus from "@/Components/GithubStatus/GithubStatus";
import MainContent from "@/Components/MainContent/MainContent";
import RightSideBar from "@/Components/RightSideBar/RightSideBar";

const Home = () => {
  return (
    <div className="relative dark:bg-primary-dark">
      <div className="absolute rectangle inset-0 h-screen"></div>
      <div className="grid p-3 grid-cols-1 lg:grid-cols-12 lg:p-10 gap-6 container mx-auto">
        <div className="w-full lg:col-span-3 min-h-[calc(100vh-96px)] lg:max-h-[calc(100vh-96px)] rounded-3xl border-2 border-box-border dark:border-secondary/50 shadow-md lg:overflow-y-scroll">
          <RightSideBar />
        </div>
        <div
          id="scrollable"
          className="lg:col-span-6 w-full min-h-[calc(100vh-96px)] lg:max-h-[calc(100vh-96px)] lg:overflow-y-scroll border-2 border-box-border dark:border-secondary/50 shadow-md rounded-3xl bg-secondary-bg dark:bg-secondary-dark"
        >
          <MainContent />
        </div>
        <div className="lg:col-span-3 w-full lg:max-h-[calc(100vh-96px)] flex flex-col gap-6">
          <CoursesAndCertificates />
          <GithubStatus />
          <CopyRights />
        </div>
      </div>
    </div>
  );
};

export default Home;
