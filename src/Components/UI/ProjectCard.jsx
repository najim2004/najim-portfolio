"use client";
import Image from "next/image";
import Link from "next/link";
import { GoInfo } from "react-icons/go";
import { LuExternalLink, LuGithub } from "react-icons/lu";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
const ProjectCard = ({ project }) => {
  return (
    <div className="border-2 border-box-border duration-300 dark:border-secondary/50 min-h-[200px] rounded-2xl font-primary flex flex-col">
      <div className="w-full h-[200px] group overflow-hidden bg-gray-200 rounded-t-2xl">
        <Image
          src={project?.img}
          alt="project Image"
          width={500}
          height={200}
          className="w-full h-[200px] group-hover:scale-110 duration-1000 object-cover object-top"
        />
      </div>
      <div className="px-3 flex flex-col flex-1">
        <div className="flex-grow">
          <h3 className="text-2xl font-medium mt-3 duration-300 dark:text-primary-bg">
            {project?.title}
          </h3>
          <div className="flex gap-2 flex-wrap mt-2">
            {project?.tags?.map((tag, idx) => (
              <span
                className="font-medium text-sm bg-box-border duration-300 dark:bg-box-border/10 text-primary dark:text-gray-400 rounded-lg px-1"
                key={idx}
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="text-secondary leading-5 mt-4 text-sm line-clamp-3 duration-300 dark:text-gray-400">
            {project?.description}
          </p>
        </div>
        <div className="text-2xl flex justify-end my-6 items-center gap-3 lg:pr-2 text-primary duration-300 dark:text-primary-bg">
          <Link
            target="_blank"
            data-tooltip-id="live-site"
            data-tooltip-content="Live Site"
            href={project?.url}
            className="hover:scale-110"
          >
            <LuExternalLink />
          </Link>
          <Link
            target="_blank"
            data-tooltip-id="live-site"
            data-tooltip-content="GitHub repo Link"
            href={project?.githubUrl}
            className="hover:scale-110"
          >
            <LuGithub />
          </Link>
          <Link
            data-tooltip-id="live-site"
            data-tooltip-content="Project Details"
            href={`/projects/${project?.id}`}
            className="hover:scale-110"
          >
            <GoInfo />
          </Link>
        </div>
      </div>
      <Tooltip
        id="live-site"
        className="duration-300 dark:bg-gray-50 dark:text-secondary"
      />
    </div>
  );
};

export default ProjectCard;
