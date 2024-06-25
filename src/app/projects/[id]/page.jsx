import DetailsHeader from "@/Components/ProjectDetails/DetailsHeader";
import DetailsMain from "@/Components/ProjectDetails/DetailsMain";
import React from "react";

const page = () => {
  return (
    <div>
      <div className="max-w-[1000px] mx-auto py-10 font-primary space-y-6 p-3">
        <DetailsHeader />
        <DetailsMain />
      </div>
    </div>
  );
};

export default page;
