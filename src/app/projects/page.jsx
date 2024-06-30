import CopyRights from "@/components/CopyRights/CopyRights";
import ProjectsHeader from "@/components/Projects/ProjectsHeader";
import ProjectMain from "@/components/Projects/ProjectsMain";
import Main from "@/components/Projects/ProjectsMain";
import React from "react";
const Projects = () => {
  return (
    <div className="relative dark:bg-primary-dark">
      <div className="absolute rectangle inset-0 h-screen"></div>
      <div className="max-w-[1000px] mx-auto py-10 font-primary space-y-6 p-3">
        <ProjectsHeader />
        <ProjectMain />
        <CopyRights />
      </div>
    </div>
  );
};

export default Projects;
