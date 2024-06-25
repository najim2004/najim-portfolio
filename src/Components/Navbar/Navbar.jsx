"use client";

import navList from "@/Data/navList";
import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [sectionId, setSectionId] = useState("/#about");
  return (
    <div className="lg:w-full w-max z-50 h-14 flex items-center justify-center">
      {navList?.map((item, idx) => (
        <Link
          onClick={() => setSectionId(item.to)}
          href={item.to}
          key={idx}
          className={`text-secondary font-primary font-medium ${
            sectionId == item.to
              ? "text-primary bg-box-border duration-1000"
              : ""
          } h-full flex items-center justify-center rounded-lg px-5 gap-2`}
        >
          {item.icon} {item.name}
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
