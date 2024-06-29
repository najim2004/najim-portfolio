"use client";
import navList from "@/Data/navList";
import Link from "next/link";
import { useMediaQuery } from "react-responsive";
// import { scroller } from "react-scroll";

const Navbar = () => {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <div className="nav lg:w-full md:w-full !z-50 h-14 flex items-center md:justify-center lg:justify-center">
      {navList?.map((item, idx) => (
        <Link
          // onClick={() => {
          //   scroller.scrollTo(item.to, {
          //     duration: 700,
          //     spy: true,
          //     activeClass: "active",
          //     offset: !isSmallScreen ? -20 : -100,
          //     smooth: true,
          //     containerId: !isSmallScreen ? "scrollable" : false,
          //   });
          // }}
          href={`#${item.to}`}
          key={idx}
          className={`text-secondary font-primary font-medium h-full flex items-center justify-center rounded-lg px-5 gap-2 cursor-pointer`}
        >
          {item.icon} {item.name}
        </Link>
      ))}
    </div>
  );
};

export default Navbar;
