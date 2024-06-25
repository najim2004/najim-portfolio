"use client";
import Link from "next/link";
import { GoInfo } from "react-icons/go";
import { LuExternalLink, LuGithub } from "react-icons/lu";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
const ProjectCard = ({ project }) => {
  return (
    <div className="border border-box-border min-h-[200px] rounded-2xl font-primary flex flex-col">
      <div className="w-full h-[200px] group overflow-hidden bg-gray-200 rounded-t-2xl">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          src={project?.img}
          alt=""
          className="w-full h-[200px] group-hover:scale-110 duration-1000"
        />
      </div>
      <div className="px-3 flex flex-col flex-1">
        <div className="flex-grow">
          <h3 className="text-2xl font-medium mt-3">{project?.title}</h3>
          <div className="flex gap-2 flex-wrap mt-2">
            {project?.tags?.map((tag, idx) => (
              <span
                className="border border-box-border font-medium text-sm bg-box-border rounded-lg px-1"
                key={idx}
              >
                {tag}
              </span>
            ))}
          </div>

          <p className="text-secondary leading-5 mt-4 text-sm">
            {project?.description}
          </p>
        </div>
        <div className="text-2xl flex justify-end my-6 items-center gap-3 lg:pr-2">
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
      <Tooltip id="live-site" />
    </div>
  );
};

export default ProjectCard;
