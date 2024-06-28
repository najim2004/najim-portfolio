import React from "react";
import Navbar from "../Navbar/Navbar";
import About from "../Section/About";
import Project from "../Section/Project";
import Skills from "../Section/Skills";
import Contact from "../Section/Contact";

const MainContent = () => {
  return (
    <div className="relative">
      <div className="sticky -top-[2px] overflow-x-scroll lg:overflow-hidden w-full rounded-t-2xl p-2 shadow-md bg-secondary-bg duration-300 dark:bg-secondary-dark border-b border-box-border dark:border-secondary/50">
        <Navbar />
      </div>
      <About />
      <hr className="border-box-border duration-300 dark:border-secondary/50 max-w-full my-10 mx-4" />
      <Skills />
      <hr className="border-box-border duration-300 dark:border-secondary/50 max-w-full my-10 mx-4" />
      <Project />
      <hr className="border-box-border duration-300 dark:border-secondary/50 max-w-full my-10 mx-4" />
      <Contact />
    </div>
  );
};

export default MainContent;
