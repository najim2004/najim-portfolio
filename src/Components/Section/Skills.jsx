import skillList from "@/Data/skillLits";
import Image from "next/image";
import React from "react";

const Skills = () => {
  return (
    <div className="px-4 font-primary" id="skills">
      <h3 className="title">Skills</h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <div className="min-h-20 rounded-lg border border-box-border p-2">
          <h3 className="text-xl font-bold text-primary mx-auto text-center">
            Programming Language
          </h3>
          <hr />
          <div className="p-5 flex gap-4 flex-wrap justify-center">
            {skillList?.map((skill, idx) => {
              if (skill?.type === "programming-language")
                return (
                  <div key={idx} className="flex n group flex-col items-center">
                    <Image
                      src={skill?.url}
                      alt={skill?.name}
                      width={"30"}
                      height={"30"}
                      className="group-hover:scale-125 duration-700"
                    />
                    <h3
                      className="text-secondary hide show"
                      style={{ visibility: "hidden" }}
                    >
                      {skill?.name}
                    </h3>
                  </div>
                );
            })}
          </div>
        </div>
        <div className="min-h-20 rounded-lg border border-box-border p-2">
          <h3 className="text-xl font-bold text-primary mx-auto text-center">
            Front End
          </h3>
          <hr />
          <div className="p-5 flex gap-4 flex-wrap justify-center">
            {skillList?.map((skill, idx) => {
              if (skill?.type === "frontend")
                return (
                  <div key={idx} className="flex n group flex-col items-center">
                    <Image
                      src={skill?.url}
                      alt={skill?.name}
                      width={"30"}
                      height={"30"}
                      className="group-hover:scale-125 duration-700"
                    />
                    <h3
                      className="text-secondary hide show"
                      style={{ visibility: "hidden" }}
                    >
                      {skill?.name}
                    </h3>
                  </div>
                );
            })}
          </div>
        </div>
        <div className="min-h-20 rounded-lg border border-box-border p-2">
          <h3 className="text-xl font-bold text-primary mx-auto text-center">
            Back End
          </h3>
          <hr />
          <div className="p-5 flex gap-4 flex-wrap justify-center">
            {skillList?.map((skill, idx) => {
              if (skill?.type === "backend")
                return (
                  <div key={idx} className="flex n group flex-col items-center">
                    <Image
                      src={skill?.url}
                      alt={skill?.name}
                      width={"30"}
                      height={"30"}
                      className="group-hover:scale-125 duration-700"
                    />
                    <h3
                      className="text-secondary hide show"
                      style={{ visibility: "hidden" }}
                    >
                      {skill?.name}
                    </h3>
                  </div>
                );
            })}
          </div>
        </div>
        <div className="min-h-20 rounded-lg border border-box-border p-2">
          <h3 className="text-xl font-bold text-primary mx-auto text-center">
            Authentication
          </h3>
          <hr />
          <div className="p-5 flex gap-4 flex-wrap justify-center">
            {skillList?.map((skill, idx) => {
              if (skill?.type === "authentication")
                return (
                  <div key={idx} className="flex group n flex-col items-center">
                    <Image
                      src={skill?.url}
                      alt={skill?.name}
                      width={"30"}
                      height={"30"}
                      className="group-hover:scale-125 duration-700"
                    />
                    <h3
                      className="text-secondary hide show"
                      style={{ visibility: "hidden" }}
                    >
                      {skill?.name}
                    </h3>
                  </div>
                );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
