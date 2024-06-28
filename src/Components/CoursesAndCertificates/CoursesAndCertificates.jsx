import Link from "next/link";
import React from "react";
import { FaDownload } from "react-icons/fa";

const CoursesAndCertificates = () => {
  return (
    <div className="flex-1 font-primary border-box-border dark:border-secondary/50 border-2 shadow-md rounded-3xl w-full min-h-[100px] bg-secondary-bg dark:bg-secondary-dark duration-300">
      <div className="w-full h-16 flex justify-center items-center border-b border-box-border dark:border-secondary/50 bg-secondary/10 dark:bg-secondary/50 rounded-t-3xl">
        <h3 className="text-xl font-medium duration-300 dark:text-primary-bg">
          Courses & Certificates
        </h3>
      </div>
      <div className="p-3">
        <div className="border border-box-border dark:border-secondary/50 p-3 rounded-xl">
          <div className="mb-5">
            <h2 className="text-lg font-semibold text-primary duration-300 dark:text-primary-bg">
              Complete Web development
            </h2>
            <h3 className="font-medium text-primary/90 duration-300 dark:text-primary-bg/90">
              From: <span>Programming hero</span>
            </h3>
            <p className="text-xs text-secondary font-medium">
              01/01/2024 to 23/06/2024
            </p>
          </div>
          <Link
            href={
              "https://drive.google.com/file/d/1ZsSLijUk3pxBfWZLtBDqUsNrNz8nEnn8/view?usp=sharing"
            }
            target="_blank"
          >
            <button className="bg-primary text-primary-bg text-sm hover:bg-primary/60 dar:duration-300 duration-500 dark:bg-primary-bg dark:border-secondary/50 dark:hover:bg-primary-bg/80 dark:text-primary hover:text-white rounded-lg flex gap-2 justify-center items-center w-full h-10 font-medium border border-box-border active:scale-105">
              <FaDownload />
              Certificate
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default CoursesAndCertificates;
