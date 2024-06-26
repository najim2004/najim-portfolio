"use client";

import skillList from "@/Data/skillLits";
import SkillsCard from "../UI/SkillsCard";
import PackagesCard from "../UI/PackagesCard";
import Note from "../UI/Note";

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
    <div className="min-h-[150px] bg-secondary-bg rounded-3xl border-2 border-box-border shadow-md p-10 font-primary">
      <div className="w-[700px] h-[400px] bg-gray-200 mx-auto rounded-md overflow-hidden">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img
          className="max-w-[700px] lg:w-[700px] max-h-[400px]"
          src={obj?.img}
          alt=""
        />
      </div>

      <div className="max-w-[700px] mx-auto">
        <Note details="At any time new features may be added to this project or the project may be updated which may not be mentioned here" />
        {/* description */}
        <div className="">
          <h3 className="h3">Description:</h3>
          <p className="text-secondary">{obj?.description}</p>
        </div>
        {/* Project skills */}
        <div className="">
          <h3 className="h3">Technologies:</h3>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-5">
            <SkillsCard
              skills={programmingLanguageSkills}
              title={"Programming Language"}
            />
            <SkillsCard skills={frontendSkills} title={"Front End"} />
            <SkillsCard skills={backendSkills} title={"Back End"} />
            <SkillsCard
              skills={authenticationSkills}
              title={"Authentication"}
            />
          </div>
        </div>
        {/* Packages */}
        <div className="">
          <div className="">
            <h3 className="h3">Technologies:</h3>
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-5">
              <PackagesCard
                technologies={obj?.packages?.frontend}
                title={"Front End"}
              />
              <PackagesCard
                technologies={obj?.packages?.backend}
                title={"Back End"}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailsMain;
