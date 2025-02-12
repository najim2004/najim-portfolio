"use client";
import React from "react";
import Navbar from "../Navbar/Navbar";
import About from "../Section/About";
import Project from "../Section/Project";
import Skills from "../Section/Skills";
import Contact from "../Section/Contact";

const MainContent = () => {
  return (
    <div className="relative pt-1">
      <div className="sticky z-50 top-0 lg:relative overflow-x-scroll lg:overflow-hidden w-full rounded-t-2xl p-2 shadow-md bg-secondary-bg duration-300 dark:bg-secondary-dark border-b border-box-border dark:border-secondary/50">
        <Navbar />
      </div>
      <div
        id="scrollable"
        className="hide-scrollbar lg:overflow-y-scroll lg:max-h-[calc(100vh-169px)]"
      >
        <div id="about">
          <About />
        </div>
        <hr className="border-box-border duration-300 dark:border-secondary/50 max-w-full my-10 mx-4" />
        <div id="skills">
          <Skills />
        </div>
        <hr className="border-box-border duration-300 dark:border-secondary/50 max-w-full my-10 mx-4" />
        <div id="projects">
          <Project />
        </div>
        <hr className="border-box-border duration-300 dark:border-secondary/50 max-w-full my-10 mx-4" />
        <div id="contact">
          <Contact />
        </div>
      </div>
    </div>
  );
};

export default MainContent;
