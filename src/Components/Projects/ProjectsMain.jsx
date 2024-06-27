import projectList from "@/Data/projectList";
import React from "react";
import ProjectCard from "../UI/ProjectCard";

const ProjectMain = () => {
  return (
    <div className="min-h-[150px] bg-secondary-bg dark:bg-secondary-dark rounded-3xl border-2 border-box-border shadow-md">
      <div className="lg:py-10 lg:px-16 grid grid-cols-1 lg:grid-cols-2 gap-6 p-3">
        {projectList?.map((project) => (
          <ProjectCard key={project?.id} project={project} />
        ))}
      </div>
      <h2 className="font-primary text-primary text-center mb-4 text-xl mx-auto">
        More project coming soon...
      </h2>
    </div>
  );
};

export default ProjectMain;
