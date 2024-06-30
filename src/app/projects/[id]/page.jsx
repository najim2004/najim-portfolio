"use client";

import projectList from "@/Data/projectList";
import CopyRights from "@/components/CopyRights/CopyRights";
import DetailsHeader from "@/components/ProjectDetails/DetailsHeader";
import DetailsMain from "@/components/ProjectDetails/DetailsMain";

import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const ProjectDetails = () => {
  const [data, setData] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const findProject = projectList?.find((project) => project.id == id);
    setData(findProject);
  }, [id]);
  return (
    <div className="relative duration-300 dark:bg-primary-dark">
      <div className="rectangle"></div>
      <div className="max-w-[1000px] mx-auto py-10 font-primary space-y-6 p-3">
        <DetailsHeader
          title={data?.title}
          liveSite={data?.url}
          githubUrl={data?.githubUrl}
          desc={"This page is under construction!"}
        />
        <DetailsMain obj={data} />
        <CopyRights />
      </div>
    </div>
  );
};

export default ProjectDetails;
