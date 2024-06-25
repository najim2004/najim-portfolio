import projectList from "@/Data/projectList";
import React from "react";
import ProjectCard from "../UI/ProjectCard";

const Main = () => {
  return (
    <div className="min-h-[150px] bg-secondary-bg rounded-3xl border-2 border-box-border shadow-md lg:p-12 grid grid-cols-1 lg:grid-cols-2 gap-8 p-3">
      {projectList?.map((project) => (
        <ProjectCard key={project?.id} project={project} />
      ))}
      <h2 className="font-primary text-primary text-center mb-4 text-xl">
        More project coming soon...
      </h2>
    </div>
  );
};

export default Main;
