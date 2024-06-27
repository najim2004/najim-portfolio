import Link from "next/link";
import React from "react";
import { LuArrowRight } from "react-icons/lu";

const About = () => {
  return (
    <div className="w-full px-4 mt-6 font-primary" id="about">
      <h3 className="title dark:text-primary-bg">About me</h3>
      <p className="text-primary dark:text-primary-bg">
        I am Najim, a passionate front-end web developer with a strong focus on
        creating modern and responsive websites using the latest technologies.
        My expertise lies in React.js, a powerful JavaScript library for
        building user interfaces, combined with Tailwind CSS, a highly
        customizable utility-first CSS framework.
        <br />
        <br />
        With a solid foundation in HTML5, CSS3, and JavaScript, I craft
        pixel-perfect designs and implement seamless user experiences. Beyond
        the front-end realm, I also possess experience with back-end
        technologies such as MongoDB, Node.js, Express.js, Firebase, and JWT for
        building robust and scalable web applications.
        <br />
        <br />
        I am constantly exploring new technologies and staying updated with
        industry trends to enhance my skills and deliver cutting-edge solutions.
        <br />
        <br />
        As a lifelong learner, I am eager to take on challenging projects that
        push my boundaries and allow me to grow both personally and
        professionally. With a keen eye for detail and a passion for creating
        exceptional digital experiences, I am committed to delivering
        high-quality work that exceeds expectations.
      </p>
      <div className="flex group justify-end mt-5 font-medium">
        <Link
          className="flex items-center justify-center gap-1 group-hover:scale-110 duration-1000"
          href={"/about"}
        >
          More Details <LuArrowRight className="text-xl" />
        </Link>
      </div>
    </div>
  );
};

export default About;
