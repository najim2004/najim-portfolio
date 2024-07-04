"use client";

import projectList from "@/Data/projectList";
import Link from "next/link";
import React from "react";
import { LuArrowRight, LuExternalLink, LuGithub } from "react-icons/lu";
import { GoInfo } from "react-icons/go";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
import Image from "next/image";
const Project = () => {
  return (
    <div className="px-4 font-primary">
      <h3 className="title duration-300 dark:text-primary-bg">Project</h3>
      <div className="w-full flex flex-col gap-4">
        {projectList?.slice(0, 3)?.map((project) => (
          <div
            key={project?.id}
            className="min-h-[150px] lg:max-h-[200px] border border-box-border duration-300 dark:border-secondary/50 rounded-2xl overflow-hidden flex flex-col lg:flex-row gap-4"
          >
            <div className="w-full object-cover object-top lg:w-[280px] lg:h-full max-h-[200px] bg-gray-200 group overflow-hidden">
              <Image
                width={500}
                height={500}
                className="h-full w-full object-cover object-top lg:w-[280px] duration-[3s] transform  group-hover:-translate-y-[calc(100%-200px)]"
                src={project?.img}
                alt={project?.title || ""}
              />
            </div>
            <div className="flex flex-1 flex-col justify-center px-3 lg:py-5">
              <h3 className="text-lg font-medium text-primary duration-300 dark:text-primary-bg">
                {project?.title}
              </h3>
              <p className="text-secondary leading-5 my-2 text-sm line-clamp-3 duration-300 dark:text-gray-400">
                {project?.description}
              </p>
              <div className="flex gap-2 flex-wrap">
                {project?.tags?.map((tag, idx) => (
                  <span
                    className="font-medium text-sm bg-box-border duration-300 dark:bg-box-border/10 text-primary dark:text-gray-400 rounded-lg px-1"
                    key={idx}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="text-2xl flex lg:flex-col justify-end lg:justify-center items-center gap-3 m-4 lg:pr-2 lg:m-0 text-primary duration-300 dark:text-primary-bg">
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
            <Tooltip id="live-site" />
          </div>
        ))}
      </div>
      <div className="flex group justify-end mt-5 font-medium text-primary duration-300 dark:text-primary-bg">
        <Link
          className="flex items-center justify-center gap-1 group-hover:scale-110 duration-1000"
          href={"/projects"}
        >
          See more <LuArrowRight className="text-xl" />
        </Link>
      </div>
    </div>
  );
};

export default Project;
