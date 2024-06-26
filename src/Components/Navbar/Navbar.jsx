"use client";
import navList from "@/Data/navList";
import { useMediaQuery } from "react-responsive";
import { Link } from "react-scroll";

const Navbar = () => {
  const isSmallScreen = useMediaQuery({ query: "(max-width: 768px)" });

  return (
    <div className="nav lg:w-full w-max !z-50 h-14 flex items-center justify-center">
      {navList?.map((item, idx) => (
        <Link
          activeClass="active"
          to={item.to}
          spy={true}
          smooth={true}
          offset={-100}
          duration={500}
          containerId={!isSmallScreen ? "scrollable" : false}
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
