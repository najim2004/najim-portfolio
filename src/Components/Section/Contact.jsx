import socialLinks from "@/Data/socialLinks";
import Link from "next/link";
import React from "react";
import SendEmail from "../UI/SendEmail";
import { SiGmail } from "react-icons/si";
import { LuArrowUpRight } from "react-icons/lu";
const Contact = () => {
  return (
    <div className="px-4 font-primary mb-5" id="contact">
      <h3 className="title duration-300 dark:text-primary-bg">Contact</h3>
      <p className="text-primary duration-300 dark:text-primary-bg">
        Connect with me to explore exciting opportunities or discuss
        collaborative ventures. Whether you have a project in mind, want to
        share insights, or just chat about the ever-evolving tech landscape,
        I&#39;m all ears. Drop me a message through the form below or social
        platforms, and let&#39;s turn ideas into reality.
      </p>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 mt-10">
        {socialLinks?.map((socialLink, idx) => (
          <Link
            key={idx}
            href={socialLink?.url}
            target="_blank"
            className="bg-primary/80 duration-300 dark:bg-primary-bg group dark:text-primary dark:hover:bg-primary-bg/80 hover:bg-primary/50 text-white flex gap-2 h-12 items-center justify-center rounded-xl"
          >
            {socialLink?.icon}
            {socialLink?.name}
            <LuArrowUpRight className="hidden lg:flex group-hover:scale-125 mb-3" />
          </Link>
        ))}
        <Link
          href={
            "https://mail.google.com/mail/?view=cm&fs=1&to=najim.developer@gmail.com"
          }
          target="_blank"
          className="bg-primary/80 group hover:bg-primary/50 duration-300 dark:bg-primary-bg dark:text-primary dark:hover:bg-primary-bg/80 text-white flex gap-2 h-12 items-center justify-center rounded-xl"
        >
          <SiGmail />
          Gmail
          <LuArrowUpRight className="hidden lg:flex group-hover:scale-125 mb-3" />
        </Link>
      </div>
      <hr className="border-primary-bg duration-300 dark:border-secondary/50 max-w-full my-10 mx-4" />
      <SendEmail />
    </div>
  );
};

export default Contact;
