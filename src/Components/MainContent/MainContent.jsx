import React from "react";
import Navbar from "../Navbar/Navbar";
import About from "../Section/About";
import Project from "../Section/Project";
import Skills from "../Section/Skills";
import Contact from "../Section/Contact";

const MainContent = () => {
  return (
    <div className="relative">
      <div className="sticky top-0 overflow-x-scroll lg:overflow-hidden w-full rounded-t-2xl p-2 shadow-md bg-secondary-bg">
        <Navbar />
      </div>
      <About />
      <hr className="text-primary-bg max-w-full my-10 mx-4" />
      <Skills />
      <hr className="text-primary-bg max-w-full my-10 mx-4" />
      <Project />
      <hr className="text-primary-bg max-w-full my-10 mx-4" />
      <Contact />
    </div>
  );
};

export default MainContent;
