import React from "react";
import Profile from "../../assets/profile.jpg";
import Image from "next/image";
import {
  FaDownload,
  FaEnvelope,
  FaEnvelopeOpenText,
  FaFacebook,
  FaGithub,
  FaLinkedin,
  FaTelegram,
  FaTwitter,
} from "react-icons/fa";
import profileTags from "@/Data/profileTags";
import Link from "next/link";
const RightSideBar = () => {
  return (
    <div className="flex p-5 flex-col justify-center items-center font-primary">
      {/* image */}

      <Image
        className="object-top size-[250px] rounded-full object-cover border-4 border-img-border shadow-lg"
        src={Profile}
        alt="Najim"
      />

      <h3 className="text-4xl text-primary font-bold mt-4 uppercase">Najim</h3>
      <p className="text-secondary text-lg text-center">
        Front-end Web Developer
      </p>
      <div className="flex flex-wrap justify-center text-2xl gap-x-4 text-primary my-2 *:rounded-full">
        <FaGithub />
        <FaLinkedin />
        <FaTelegram />
        <FaFacebook />
        <FaEnvelopeOpenText />
      </div>
      <div className="flex flex-wrap gap-2 justify-center">
        {profileTags?.map((tag, idx) => (
          <span
            className="border-[1px] px-[2px] rounded-md border-border-b text-primary/80 font-medium text-sm"
            key={idx}
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex gap-2 justify-center mt-5 flex-wrap">
        <Link href={"mailto:najim.developer@gmail.com"}>
          <button className="bg-primary text-sm hover:bg-primary/70 duration-500 text-white w-[170px] rounded-lg flex gap-2 justify-center items-center h-10 font-medium">
            <FaEnvelope />
            Contact
          </button>
        </Link>
        <Link
          href={
            "https://drive.google.com/file/d/1WcKP13btUY4Qwy3GsHZjLZxnJ4lKAd1h/view"
          }
          target="_blank"
        >
          <button className="text-primary bg-white border flex-1 rounded-lg flex gap-2 justify-center items-center h-10 font-medium p-2">
            <FaDownload />
            Resume
          </button>
        </Link>
      </div>
      <hr className="w-full my-5 text-border-b" />
      <div className="w-full">
        <h3 className="text-primary font-medium text-xl text-start">Bio</h3>
        <p className="text-primary mt-2 leading-7 flex flex-col text-justify">
          I'm a tech enthusiast interested in programming, computer science,
          design and many technologies.
          <br />
          <span className="mt-3">
            Studying at Dhaka Polytechnic Institute in Dhaka, Bangladesh.
          </span>
        </p>
      </div>
    </div>
  );
};

export default RightSideBar;
