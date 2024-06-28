"use client";
import { useRouter } from "next/navigation";
import { FaChevronLeft } from "react-icons/fa";

const ProjectsHeader = () => {
  const router = useRouter();
  return (
    <div className="min-h-[150px] bg-secondary-bg dark:bg-secondary-dark dark:border-secondary/50 rounded-3xl border-2 border-box-border shadow-md py-6 px-2 lg:p-10 flex flex-col justify-center items-start">
      <button
        onClick={() => router.back()}
        className="flex items-center justify-center gap-2 text-xl font-medium text-secondary duration-300 dark:text-primary-bg"
      >
        <FaChevronLeft className="text-2xl duration-300 dark:text-primary-bg" />{" "}
        Home
      </button>
      <h3 className="text-3xl lg:text-5xl text-primary font-bold mt-8 duration-300 dark:text-primary-bg">
        My Projects
      </h3>
      <p className="text-primary mt-3 duration-300 dark:text-primary-bg/70">
        Here some static, Dynamic and full stack projects
      </p>
    </div>
  );
};

export default ProjectsHeader;
