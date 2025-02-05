"use client";
import CopyRights from "@/Components/CopyRights/CopyRights";
import CoursesAndCertificates from "@/Components/CoursesAndCertificates/CoursesAndCertificates";
import GithubStatus from "@/Components/GithubStatus/GithubStatus";
import MainContent from "@/Components/MainContent/MainContent";
import RightSideBar from "@/Components/RightSideBar/RightSideBar";

export const metadata = {
  title: "Najim | Portfolio",
  description:
    "Welcome to my portfolio website. I am a full stack web developer specializing in modern web technologies.",
  keywords: [
    "portfolio",
    "web developer",
    "full stack",
    "software engineer",
    "react",
    "next.js",
  ],
};
const Home = () => {
  return (
    <div
      id="home"
      className="relative duration-300 dark:bg-primary-dark lg:h-screen flex items-center justify-center"
    >
      <div className="rectangle"></div>
      <div className="grid p-3 grid-cols-1 lg:grid-cols-12 lg:px-10 gap-6 container mx-auto">
        <div className="w-full lg:col-span-3 lg:min-h-[calc(100vh-90px)] lg:max-h-[calc(100vh-96px)] rounded-3xl border-2 border-box-border duration-300 dark:border-secondary/50 shadow-md lg:overflow-y-scroll hide-scrollbar">
          <RightSideBar />
        </div>
        <div className="lg:col-span-6 w-full min-h-[calc(100vh-90px)] lg:max-h-[calc(100vh-96px)] border-2 border-box-border duration-300 dark:border-secondary/50 shadow-md rounded-3xl bg-secondary-bg dark:bg-secondary-dark">
          <MainContent />
        </div>
        <div className="lg:col-span-3 w-full lg:max-h-[calc(100vh-90px)] flex flex-col gap-6">
          <CoursesAndCertificates />
          <GithubStatus />
          <CopyRights />
        </div>
      </div>
    </div>
  );
};

export default Home;
