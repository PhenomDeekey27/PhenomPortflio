import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";
import ReactImg from "../assets/React_logo.png";
import HtmlImg from "../assets/html.png";
import CssImg from "../assets/CSS3_logo.webp";
import JsImg from "../assets/js.webp";
import ReduxImg from "../assets/redux.webp";
import MongoImg from "../assets/mongodb.webp";
import NodejsImg from "../assets/Node.js.webp";
import ExpressJs from "../assets/Expressjs.webp";

import Cards from "./Cards";
import { Element } from "react-scroll";


const About = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <Element name="About">
      <div className="mx-auto p-4" data-aos="fade-up" id="About">
        <h1 className="text-2xl sm:text-5xl font-extrabold text-[#e1b966]">About Me</h1>
        <p className="font-semibold text-center text-base sm:text-lg">
          I am a experienced Frontend Developer and I have also made a handful
          of Websites over these Years
        </p>
        <p className="font-semibold text-center text-base sm:text-lg">
          My passion for frontend Development is not only reflected in my
          experience but also in the enthusiasm that I bring on each project
        </p>
        <div>
          <h1 className="sm:text-3xl text-xl font-bold text-[#e1b966] text-center mt-2">
            SKILLS
          </h1>
          <div className="mx-auto sm:p-4 flex items-center gap-4 justify-center sm:justify-between flex-wrap sm:gap-6">
            <Cards text={"Html"} img={HtmlImg}></Cards>
            <Cards img={CssImg} text={"Css"}></Cards>
            <Cards img={JsImg} text={"JavaScript"}></Cards>
            <Cards img={ReactImg} text={"React"}></Cards>
            <Cards img={ReduxImg} text={"Redux"}></Cards>
            <Cards img={MongoImg} text={"MongoDb"}></Cards>
            <Cards img={NodejsImg} text={"NodeJs"}></Cards>
            <Cards img={ExpressJs} text={"Express"}></Cards>
          </div>
        </div>
       
      </div>
    </Element>
  );
};

export default About;
