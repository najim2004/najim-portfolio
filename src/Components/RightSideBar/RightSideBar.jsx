"use client";
import Profile from "../../assets/profile.jpg";
import Image from "next/image";
import { FaDownload, FaEnvelope } from "react-icons/fa";
import profileTags from "@/Data/profileTags";
import Link from "next/link";
import socialLinks from "@/Data/socialLinks";
import { Cursor, useTypewriter } from "react-simple-typewriter";
const RightSideBar = () => {
  const [text] = useTypewriter({
    words: [
      "Front-end Web Developer",
      "React Developer",
      "MERN Stack Developer",
    ],
    loop: true,
    typeSpeed: 70,
    deleteSpeed: 50,
    delaySpeed: 1000,
  });

  return (
    <div className="flex p-5 flex-col justify-center items-center font-primary">
      {/* image */}

      <Image
        width={500}
        height={500}
        className="object-top size-[250px] rounded-full object-cover border-4 border-img-border duration-300 dark:border-box-border shadow-lg"
        src={Profile}
        alt="Najim"
      />

      <h3 className="text-4xl text-primary duration-300 dark:text-primary-bg font-bold mt-4 uppercase">
        Najim
      </h3>
      <p className="text-secondary duration-300 dark:text-gray-400 text-lg text-center">
        {text}
        <Cursor cursorStyle="_" />
      </p>
      <div className="flex flex-wrap justify-center text-2xl gap-x-4 text-primary duration-300 dark:text-primary-bg my-4">
        {socialLinks?.map((socialLink, idx) => (
          <Link
            key={idx}
            href={socialLink?.url}
            target="_blank"
            className="hover:scale-110"
          >
            {socialLink?.icon}
          </Link>
        ))}
      </div>
      <div className="flex flex-wrap gap-2 justify-center">
        {profileTags?.map((tag, idx) => (
          <span
            className="border-[1px] px-[2px] rounded-md border-box-border dark:border-secondary/40 text-primary/80 dark:text-primary-bg duration-300 dark:bg-secondary-dark font-medium text-[12px]"
            key={idx}
          >
            {tag}
          </span>
        ))}
      </div>
      <div className="flex gap-2 justify-center mt-5 flex-wrap">
        <Link href={"mailto:najim.developer@gmail.com"} target="_blank">
          <button className="bg-primary  dark:bg-primary-bg  dark:text-primary dark:hover:bg-primary-bg/80 text-sm hover:bg-primary/70 duration-300 text-white w-[170px] rounded-lg flex gap-2 justify-center items-center h-10 font-medium active:scale-105">
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
          <button className="text-primary bg-white dark:text-primary-bg dark:bg-primary-dark border duration-300 dark:border-secondary/50 dark:hover:text-primary-bg/80 flex-1 rounded-lg flex gap-2 justify-center items-center h-10 font-medium p-2 active:scale-105">
            <FaDownload />
            Resume
          </button>
        </Link>
      </div>
      <hr className="w-full my-5 text-border-b duration-300 dark:border-secondary/50" />
      <div className="w-full">
        <h3 className="text-primary duration-300 dark:text-primary-bg font-medium text-xl text-start">
          Bio
        </h3>
        <p className="text-primary duration-300 dark:text-primary-bg mt-2 leading-7 flex flex-col text-justify">
          I&lsquo;m a tech enthusiast interested in programming, computer
          science, design and many technologies.
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
