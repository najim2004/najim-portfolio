"use client";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaChevronLeft } from "react-icons/fa";
import { GoInfo } from "react-icons/go";
import { LuExternalLink, LuGithub } from "react-icons/lu";
import { Tooltip } from "react-tooltip";

const DetailsHeader = ({ title, desc, githubUrl, liveSite }) => {
  const router = useRouter();
  return (
    <div className="z-50 min-h-[150px] bg-secondary-bg dark:bg-secondary-dark rounded-3xl border-2 border-box-border dark:border-secondary/50 shadow-md py-6 px-2 lg:p-10 flex flex-col justify-center items-start">
      <div className=" flex justify-between w-full">
        <button
          onClick={() => router.back()}
          className="flex items-center justify-center gap-2 text-xl font-medium text-secondary duration-300 dark:text-primary-bg"
        >
          <FaChevronLeft className="text-2xl duration-300 dark:text-primary-bg" />{" "}
          Back
        </button>
        <div className="text-2xl text-primary duration-300 dark:text-primary-bg flex justify-end items-center gap-3">
          <Link
            href={liveSite || "#"}
            target="_blank"
            data-tooltip-id="live-site"
            data-tooltip-content="Live Site"
            className="hover:scale-110 lg:text-4xl"
          >
            <LuExternalLink />
          </Link>
          <Link
            href={githubUrl || "#"}
            target="_blank"
            data-tooltip-id="live-site"
            data-tooltip-content="GitHub repo Link"
            className="hover:scale-110 lg:text-4xl"
          >
            <LuGithub />
          </Link>
        </div>
      </div>
      <h3 className="text-3xl lg:text-5xl text-primary duration-300 dark:text-primary-bg font-bold mt-5">
        {title}
      </h3>
      <p className="text- primary mt-3 text-red-500">{desc}</p>
      <Tooltip
        id="live-site"
        className="duration-300 dark:bg-gray-50 dark:text-secondary"
      />
    </div>
  );
};

export default DetailsHeader;
