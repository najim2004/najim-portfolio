import skillList from "@/Data/skillLits";
import React from "react";
import SkillsCard from "../UI/SkillsCard";

const Skills = () => {
  return (
    <div className="px-4 font-primary" id="skills">
      <h3 className="title duration-300 dark:text-primary-bg">Skills</h3>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        <SkillsCard
          skills={skillList?.programmingLanguage}
          title={"Programming Language"}
        />
        <SkillsCard skills={skillList?.frontend} title={"Front End"} />
        <SkillsCard skills={skillList?.backend} title={"Back End"} />
        <SkillsCard
          skills={skillList?.authentication}
          title={"Authentication"}
        />
      </div>
    </div>
  );
};

export default Skills;
