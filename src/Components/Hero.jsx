import React, { useEffect } from "react";

import Aos from "aos";
import "aos/dist/aos.css";
import { Element, Link } from "react-scroll";

import HeroImg from "../assets/Hero.png";
import UpdatedProfile from "../assets/portfolioProfile.png";

const Hero = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <Element
      name="hero"
      style={{
        backgroundImage: `url(${HeroImg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
     
    >
      <div
        className="flex items-center justify-around flex-col-reverse md:flex-row h-full"
        id="hero"
      >
        {/* Left Text Section */}
        <div className="text-overlay md:w-1/2 flex flex-col justify-center p-2 h-full ">
          <h1 className="font-raleway text-center md:text-start text-4xl md:text-5xl lg:text-6xl font-extrabold p-2">
            Hi, I'm
          </h1>
          <h1
            className="font-raleway text-3xl  md:text-4xl text-center md:text-left p-4  font-bold italic"
            data-aos="fade-left"
          >
            Kasthuri Rangan
          </h1>
          <h1 className="text-[#e1b966]  text-center md:text-start text-3xl md:text-5xl lg:text-7xl font-raleway p-6 font-bold">
            FULL STACK DEVELOPER
          </h1>
          <div className="self-center md:self-start md:p-4">
            <button className="p-2 text-overlay bg-orange-400 hover:bg-slate-300 cursor-pointer   rounded-md font-semibold ">
              <a
                href="https://drive.google.com/file/d/1S7cEdfVtkcsWkv1D23dKQj2CqifvBCBM/view?usp=sharing"
                className="text-black font-raleway"
              >
                My Resume
              </a>
            </button>
          </div>
        </div>

        {/* Right Image Section with Reduced Size */}
        <div className="w-full md:w-1/2 mt-6 md:mt-0 h-[80vh] md:h-screen flex items-center justify-center">
         
            <img
              src={UpdatedProfile}
              alt="ProfileImg"
              className="max-h-full max-w-full object-contain"
            />
          
        </div>
      </div>
    </Element>
  );
};

export default Hero;
