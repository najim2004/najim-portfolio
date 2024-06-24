import socialLinks from "@/Data/socialLinks";
import Link from "next/link";
import React from "react";
import SendEmail from "../UI/SendEmail";
import { SiGmail } from "react-icons/si";
const Contact = () => {
  return (
    <div className="px-4 font-primary" id="contact">
      <h3 className="title">Contact</h3>
      <p className="text-primary">
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
            className="bg-primary/80 hover:bg-primary/50 text-white flex gap-2 h-12 items-center justify-center rounded-xl"
          >
            {socialLink?.icon}
            {socialLink?.name}
          </Link>
        ))}
        <Link
          href={
            "https://mail.google.com/mail/?view=cm&fs=1&to=najim.developer@gmail.com"
          }
          target="_blank"
          className="bg-primary/80 hover:bg-primary/50 text-white flex gap-2 h-12 items-center justify-center rounded-xl"
        >
          <SiGmail />
          Gmail
        </Link>
      </div>
      <hr className="text-primary-bg max-w-full my-10 mx-4" />
      <SendEmail />
    </div>
  );
};

export default Contact;
