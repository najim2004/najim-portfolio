import Link from "next/link";
import React from "react";

const About = () => {
  return (
    <div className="flex flex-col justify-center items-center h-screen space-y-6">
      <h3 className="text-4xl text-center font-bold font-primary">
        Coming soon......
      </h3>
      <Link
        href={"/"}
        className="bg-red-400/50 text-white p-3 font-primary text-xl font-bold rounded-2xl"
      >
        Back to Home
      </Link>
    </div>
  );
};

export default About;
