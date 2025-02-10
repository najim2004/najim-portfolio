"use client";

import skillList from "@/Data/skillLits";
import SkillsCard from "../UI/SkillsCard";
import PackagesCard from "../UI/PackagesCard";
import Note from "../UI/Note";
import Image from "next/image";

const DetailsMain = ({ obj }) => {
  const frontendSkills = skillList?.frontend?.filter((skill) =>
    obj?.skills?.frontend?.includes(skill?.name)
  );
  const backendSkills = skillList?.backend?.filter((skill) =>
    obj?.skills?.backend?.includes(skill?.name)
  );
  const programmingLanguageSkills = skillList?.programmingLanguage?.filter(
    (skill) => obj?.skills?.programmingLanguage?.includes(skill?.name)
  );
  const authenticationSkills = skillList?.authentication?.filter((skill) =>
    obj?.skills?.authentication?.includes(skill?.name)
  );
  return (
    <div className="min-h-[150px] bg-secondary-bg dark:bg-secondary-dark rounded-3xl border-2 border-box-border duration-300 dark:border-secondary/50 shadow-md p-10 font-primary">
      <div className="max-w-[700px] object-cover object-top max-h-[300px] lg:max-h-[400px] bg-gray-200 mx-auto rounded-md overflow-hidden group">
        <Image
          width={500}
          height={500}
          className="min-w-full lg:w-[700px] h-full object-cover object-top duration-[8s] transform group-hover:-translate-y-[calc(100%-300px)] lg:group-hover:-translate-y-[calc(100%-400px)]"
          src={obj?.img}
          alt={obj?.title || ""}
        />
      </div>

      <div className="max-w-[700px] mx-auto">
        <Note details="At any time new features may be added to this project or the project may be updated which may not be mentioned here" />
        {/* description */}
        <div className="">
          <h3 className="h3">Description:</h3>
          <p className="text-secondary duration-300 dark:text-primary-bg/80">
            {obj?.description}
          </p>
        </div>
        <div className="">
          <h3 className="h3">Features:</h3>
          <ul className="list-disc list-inside text-secondary dark:text-primary-bg/80">
            {obj?.features?.map((feature, index) => (
              <li key={index}>{feature}</li>
            ))}
          </ul>
        </div>
        {/* Project skills */}
        <div className="">
          <h3 className="h3">Technologies:</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-5">
            {programmingLanguageSkills.length > 0 && (
              <SkillsCard
                skills={programmingLanguageSkills}
                title={"Programming Language"}
              />
            )}
            {frontendSkills.length > 0 && (
              <SkillsCard skills={frontendSkills} title={"Front End"} />
            )}
            {backendSkills.length > 0 && (
              <SkillsCard skills={backendSkills} title={"Back End"} />
            )}
            {authenticationSkills.length > 0 && (
              <SkillsCard
                skills={authenticationSkills}
                title={"Authentication"}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsMain;
