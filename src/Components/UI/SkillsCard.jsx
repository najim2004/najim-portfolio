"use client";
import Image from "next/image";

const SkillsCard = ({ skills, title }) => {
  return (
    <div className="min-h-20 rounded-lg border border-box-border duration-300 dark:border-secondary/50 p-2">
      <h3 className="text-xl font-bold text-primary duration-300 dark:text-primary-bg mx-auto text-center">
        {title}
      </h3>
      <hr className="duration-300 dark:border-secondary/50 mt-1" />
      <div className="p-5 flex gap-4 flex-wrap justify-center">
        {skills?.map((skill, idx) => (
          <div key={idx} className="flex n group flex-col items-center">
            <Image
              src={skill?.url}
              alt={skill?.name}
              width={"40"}
              height={"40"}
              className="group-hover:scale-125 duration-700 dark:border dark:border-box-border/20 dark:rounded-full"
            />
            <h3
              className="text-secondary hide show duration-300 dark:text-primary-bg/50"
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
