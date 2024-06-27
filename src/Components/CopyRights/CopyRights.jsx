"use client";
import ThemeToggle from "../UI/ThemeToggle";

const CopyRights = () => {
  return (
    <div className="font-primary text-primary flex justify-center items-center border-box-border border-2 shadow-md rounded-3xl w-full bg-secondary-bg dark:bg-secondary-dark h-16">
      <h3 className="text-secondary flex-1 text-center">
        &copy; {new Date().getFullYear()} Najim | Portfolio
      </h3>
      <ThemeToggle />
    </div>
  );
};

export default CopyRights;
