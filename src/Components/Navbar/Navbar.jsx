"use client";
import navList from "@/Data/navList";
import { Link } from "react-scroll";
// import { useMediaQuery } from "react-responsive";

const Navbar = () => {
  // const isSmallScreen = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <div className="nav lg:w-full md:w-full !z-50 h-14 flex items-center md:justify-center lg:justify-center">
      {navList?.map((item, idx) => (
        <Link
          to={item.to}
          duration={700}
          spy={true}
          activeClass={"active"}
          offset={-100}
          smooth={true}
          containerId={"scrollable"}
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
