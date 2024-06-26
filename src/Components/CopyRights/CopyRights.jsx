import React from "react";

const CopyRights = () => {
  return (
    <div className="font-primary text-primary flex justify-center items-center border-box-border border-2 shadow-md rounded-3xl w-full min-h-[50px] bg-secondary-bg">
      <h3 className="text-secondary">
        &copy; {new Date().getFullYear()} Najim | Portfolio
      </h3>
    </div>
  );
};

export default CopyRights;
