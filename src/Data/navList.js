import { FaCommentAlt, FaFire, FaLightbulb, FaUser } from "react-icons/fa";

const navList = [
  {
    name: "About",
    to: "/#about",
    icon: <FaUser />,
  },
  {
    name: "Skills",
    to: "/#skills",
    icon: <FaLightbulb />,
  },
  {
    name: "Projects",
    to: "/#projects",
    icon: <FaFire />,
  },
  {
    name: "Contact",
    to: "/#contact",
    icon: <FaCommentAlt />,
  },
];

export default navList;
