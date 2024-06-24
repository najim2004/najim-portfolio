const {
  FaGithub,
  FaLinkedinIn,
  FaTelegram,
  FaFacebook,
  FaEnvelopeOpenText,
} = require("react-icons/fa");

const socialLinks = [
  {
    name: "Github",
    url: "https://github.com/najim2004",
    icon: <FaGithub />,
  },
  {
    name: "Linkedin",
    url: "www.linkedin.com/in/najim-developer",
    icon: <FaLinkedinIn />,
  },
  {
    name: "Telegram",
    url: "https://telegram.me/najim2004",
    icon: <FaTelegram />,
  },
  {
    name: "Facebook",
    url: "https://facebook.com/najim2004",
    icon: <FaFacebook />,
  },
  {
    name: "Email",
    url: "mailto:najim.developer@gmail.com",
    icon: <FaEnvelopeOpenText />,
  },
];

export default socialLinks;
