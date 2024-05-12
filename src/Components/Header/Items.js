import {
    faHome,
    faUsers,
    faUser,
    faImages,
    faArrowRightToBracket,
    faLocationDot
  } from "@fortawesome/free-solid-svg-icons";
  const navItems = [
    {
      name: "Home",
      icon: faHome,
      id:"home"
    },
    {
      name: "About Us",
      icon: faUsers,
      id:"about-us"
    },
    {
      name: "Services",
      icon: faImages,
      id:"services"
    },
    {
      name: "Destinations",
      icon: faLocationDot,
      id:"destinations"
    },
    {
      name: "Login",
      icon: faArrowRightToBracket,
      id:"/login"
    },
    {
      name: "Register",
      icon: faUser,
      id:"/register",
      class:"bg-purple-900 text-white rounded-full"
    },
  ];

  export default navItems;
  