"use client";

import navList from "@/Data/navList";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const Navbar = () => {
  const [sectionId, setSectionId] = useState("/#about");

  return (
    <div className="w-full sticky top-0 h-14 shadow-md flex items-center justify-center p-1 backdrop-blur-[8px] bg-secondary-bg/80">
      {navList?.map((item, idx) => (
        <Link
          onClick={() => setSectionId(item.to)}
          href={item.to}
          key={idx}
          className={`text-secondary font-primary font-medium ${
            sectionId == item.to
              ? "text-primary bg-box-border duration-1000"
              : ""
          } h-full flex items-center justify-center rounded-lg px-5  gap-2`}
        >
          {item.icon} {item.name}
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
