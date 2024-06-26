"use client";
import DetailsHeader from "@/components/ProjectDetails/DetailsHeader";
import DetailsMain from "@/components/ProjectDetails/DetailsMain";
import projectList from "@/Data/projectList";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";

const Page = () => {
  const [data, setData] = useState({});
  const { id } = useParams();
  useEffect(() => {
    const findProject = projectList?.find((project) => project.id == id);
    setData(findProject);
  }, [id]);
  return (
    <div>
      <div className="max-w-[1000px] mx-auto py-10 font-primary space-y-6 p-3">
        <DetailsHeader
          title={data?.title}
          liveSite={data?.url}
          githubUrl={data?.githubUrl}
          desc={"This page is under construction!"}
        />
        <DetailsMain obj={data} />
      </div>
    </div>
  );
};

export default Page;
