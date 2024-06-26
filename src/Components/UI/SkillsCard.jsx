"use client";
import Image from "next/image";

const SkillsCard = ({ skills, title }) => {
  return (
    <div className="min-h-20 rounded-lg border border-box-border p-2">
      <h3 className="text-xl font-bold text-primary mx-auto text-center">
        {title}
      </h3>
      <hr />
      <div className="p-5 flex gap-4 flex-wrap justify-center">
        {skills?.map((skill, idx) => (
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
        ))}
      </div>
    </div>
  );
};

export default SkillsCard;
