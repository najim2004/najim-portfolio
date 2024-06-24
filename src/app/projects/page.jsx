import Link from "next/link";
import React from "react";
import { FaChevronLeft } from "react-icons/fa";

const page = () => {
  return (
    <div>
      <div className="max-w-[1000px] mx-auto py-10 font-primary">
        <div className="min-h-[150px] bg-secondary-bg rounded-3xl border-2 border-box-border shadow-md lg:p-10 flex flex-col justify-center items-start">
          <Link
            href={"/"}
            className="flex items-center justify-center gap-2 text-xl font-medium text-secondary"
          >
            <FaChevronLeft className="text-2xl" /> Home
          </Link>
          <h3 className="text-5xl text-primary font-bold mt-8">My Projects</h3>
          <p className="text-primary mt-3">
            Here some static, Dynamic and full stack projects
          </p>
        </div>
      </div>
    </div>
  );
};

export default page;
