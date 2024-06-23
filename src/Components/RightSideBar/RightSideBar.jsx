import React from "react";
import Profile from "../../assets/profile.jpg";
import Image from "next/image";
const RightSideBar = () => {
  return (
    <div className="flex p-5 flex-col justify-center items-center font-primary">
      {/* image */}
      <div className="size-[250px] overflow-hidden rounded-full object-cover border-4 border-i-border shadow-lg">
        <Image src={Profile} alt="" />
      </div>
      <h3 className="text-4xl text-primary font-bold mt-4 uppercase">Najim</h3>
      <p className="text-secondary text-lg">Front-end Web Developer</p>
    </div>
  );
};

export default RightSideBar;
