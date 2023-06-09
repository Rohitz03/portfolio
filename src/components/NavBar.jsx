import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";
import {
  AiOutlineHome,
  AiOutlineFundProjectionScreen,
  AiOutlineUser,
  AiOutlineBuild,
  AiOutlineMail,
} from "react-icons/ai";

const NavBar = () => {
  const [nav, setNav] = useState(false);

  const links = [
    {
      id: 1,
      link: "home",
      icon: <AiOutlineHome />,
    },
    {
      id: 2,
      link: "about",
      icon: <AiOutlineUser/>,
    },
    {
      id: 3,
      link: "portfolio",
      icon: <AiOutlineFundProjectionScreen/>,
    },
    {
      id: 4,
      link: "experience",
      icon: <AiOutlineBuild/>,
    },
    {
      id: 5,
      link: "contact",
      icon: <AiOutlineMail/>
    },
  ];

  return (
    <div className="flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed">
      <div className="flex items-center">
        <h1 className="text-5xl font-signature ml-2">Rohit</h1>
      </div>

      <ul className="hidden md:flex ml-auto"> 
        {links.map(({ id, link, icon }) => (
          <li
            key={id}
            className="px-4 cursor-pointer capitalize font-medium text-white hover:scale-110 duration-300 flex items-center"
          >
            {icon}
            <Link to={link} smooth duration={500} className="ml-2">
              {link}
            </Link>
          </li>
        ))}
      </ul>

      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer pr-4 z-10 text-white md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>

      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-black text-white">
          {links.map(({ id, link }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={link}
                smooth
                duration={500}
              >
                {link}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default NavBar;