import React from "react";
import Financely from "../assets/Financely.png";
import Mern from "../assets/PhenomCommerce.png"
import Podcast from "../assets/Podcast.png"
import Project from "./Project";
import Cara from "../assets/Cara.png"
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Element } from "react-scroll";
import HeroImg from "../assets/Hero.png";
import EInvite from "../assets/E-Invite.png"

const Mywork = () => {
    useEffect(() => {
        Aos.init();
      }, []);
  return (
    <Element name="Portfolio"
    style={{
      backgroundImage:`url(${HeroImg})`,
      backgroundPosition:"center"
      
    }}
    className="bg-fixed p-4"
    >
    <div className="" data-aos="fade-up" id="Portfolio">
      <div className="text-overlay">
      <h2 className="sm:text-5xl text-center md:text-left text-2xl font-extrabold text-[#e1b966] uppercase font-mont p-4">Projects</h2>
      </div>
     
      <div className="mt-4 flex items-center justify-center md:justify-between gap-2 md:gap-20 flex-wrap">
        <Project img={Financely} text={"Financely"} lang={["Html","Css","Javascript","React","ReduxToolkit","FireBase"]} redirect={"https://financely-teal.vercel.app/"}></Project>
        <Project img={Mern} text={"PhenomCommerce"} lang={["Html","Css","Javascript","React","ReduxToolkit","MongoDb","Express","NodeJs"]} redirect={"https://phenom-commerce.onrender.com"}></Project>
        <Project img={Podcast} text={"Podcast Platform"} lang={["Html","Css","Javascript","React","ReduxToolkit","FireBase"]} redirect={"https://podcast-platform-ten.vercel.app/"}></Project>
        <Project img={Cara} text={"Cara-Clothing Website"} lang={["Html","Css","Javascript"]} redirect={"https://ecommerce-website-five-sable.vercel.app/"}></Project>
        <Project img={EInvite} text={"E-Invite Editor"} lang={["Fabric-Js" , "ReactJS", "TailwindCss" , "JavaScript"]} redirect={"https://weddingcardeditor-alpha.vercel.app/"}></Project>
      </div>
    </div>
    </Element>
  );
};

export default Mywork;
