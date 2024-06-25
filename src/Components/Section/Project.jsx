"use client";

import projectList from "@/Data/projectList";
import Link from "next/link";
import React from "react";
import { LuArrowRight, LuExternalLink, LuGithub } from "react-icons/lu";
import { GoInfo } from "react-icons/go";
import { Tooltip } from "react-tooltip";
import "react-tooltip/dist/react-tooltip.css";
const Project = () => {
  return (
    <div id="projects" className="px-4 font-primary">
      <h3 className="title">Project</h3>
      <div className="w-full flex flex-col gap-4">
        {projectList?.map((project) => (
          <div
            key={project?.id}
            className="min-h-[150px] max-h-[200px] border border-box-border rounded-2xl overflow-hidden flex gap-4"
          >
            <div className="w-[250px] bg-gray-200">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="h-full w-[250px]"
                src={project.img}
                alt={project.title}
              />
            </div>
            <div className="flex flex-1 flex-col justify-center py-5">
              <h3 className="text-lg font-medium text-primary">
                {project?.title}
              </h3>
              <p className="text-secondary leading-5 my-2 text-sm line-clamp-3">
                {project?.description}
              </p>
              <div className="flex gap-2 flex-wrap">
                {project?.tags?.map((tag, idx) => (
                  <span
                    className="border border-box-border font-medium text-sm bg-box-border rounded-lg px-1"
                    key={idx}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
            <div className="text-2xl flex lg:flex-col justify-center items-center gap-3 lg:pr-2">
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
      <div className="flex group justify-end mt-5 font-medium">
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
