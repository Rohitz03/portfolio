import React from "react";
import HeroImage from "../../assets/heroImage.png";
import Type from "./Type";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import { Link } from "react-scroll";

const Home = () => {
  return (
    <div name="home" className="h-screen w-full bg-black">
      <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
        <div className="flex flex-col justify-center h-full">
          <h3 className="text-3xl font-semibold text-gray-100">Hi There!</h3><br/>
          <h2 className="text-white text-4xl sm:text-6xl font-bold">
            I'm{" "}
            <span className="text-transparent bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text">
              Rohit {" "}
            </span>
            <span className="text-transparent bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text">
              Padmakar {" "}
            </span>
            <span className="text-transparent bg-gradient-to-r from-purple-300 to-pink-300 bg-clip-text">
              Biradar
            </span>
          </h2>
          <br />
          <Type />
          <br /><br />
          <div>
            <Link
              to="portfolio"
              smooth
              duration={500}
              className="group text-black font-semibold w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-purple-200 to-pink-200 cursor-pointer"
            >
              Portfolio
              <span className="group-hover:rotate-90 duration-300">
                <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
              </span>
            </Link>
          </div>
        </div>

        <div>
          <img
            src={HeroImage}
            alt="my profile"
            className="rounded-2xl mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
