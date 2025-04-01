import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import ReactImg from "../assets/React_logo.png";

import CssImg from "../assets/CSS3_logo.webp";
import JsImg from "../assets/js.webp";
import ReduxImg from "../assets/redux.webp";
import ExpressSvg from "../assets/ExpressSvg.svg"

import AboutBg from "../assets/Black&White.png"
import HtmlSvg from "../assets/Html.svg"
import MongoSvg from "../assets/MongoSvg.svg"
import NodeSvg from "../assets/NodeSvg.svg"


import Cards from "./Cards";
import { Element } from "react-scroll";


const About = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <Element name="About"
   style={{
          backgroundImage: `url(${AboutBg})`,
          backgroundPosition:"center"
        
        
        }}

        className="bg-fixed"
  >
      <div className="p-4" data-aos="fade-up" id="About">
        <div className="text-overlay">
        <h1 className="text-2xl mt-4 sm:text-5xl font-extrabold font-mont text-[#e1b966]">About Me</h1>
        </div>
        
        <p className="font-semibold mt-4 text-center font-mont  text-black text-base sm:text-lg text-overlay">
        I thrive on creating seamless user experiences and solving complex problems with clean, efficient code.
        </p>
        <p className="font-semibold font-mont  text-black text-overlay text-center text-base sm:text-lg">
        My expertise lies in creating fast responsive websites , building RESTful APIs, developing responsive front-end interfaces, 
        and functional Backend code.
         I'm constantly learning and eager to contribute to innovative projects.
        </p>
        <div className="mt-4">
          <h1 className="sm:text-3xl text-xl font-bold font-mont text-[#e1b966] text-center mt-2">
            SKILLS
          </h1>
          <div className="mx-auto sm:p-4 flex items-center gap-4 justify-center sm:justify-between flex-wrap sm:gap-6">
          
            <Cards text={"Html"} img={HtmlSvg}></Cards>
            <Cards img={CssImg} text={"Css"}></Cards>
            <Cards img={JsImg} text={"JavaScript"}></Cards>
            <Cards img={ReactImg} text={"React"}></Cards>
            <Cards img={ReduxImg} text={"Redux"}></Cards>
            <Cards img={MongoSvg} text={"MongoDb"}></Cards>
            <Cards img={NodeSvg} text={"NodeJs"}></Cards>
            <Cards img={ExpressSvg} text={"Express"}></Cards>
          </div>
        </div>
       
      </div>
    </Element>
  );
};

export default About;
