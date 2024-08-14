import React, { useEffect } from 'react'
import ProfilePic from "../assets/profile.jpg"
import Aos from 'aos'
import "aos/dist/aos.css"
import { Element, Link } from 'react-scroll'


const Hero = () => {
    useEffect(()=>{
        Aos.init()
    },[])
  return (
    <Element name='hero'>
    <div className='flex items-center justify-center flex-col mt-12 gap-2'>
        <div className='w-80 h-80 flex items-center justify-center rounded-lg'>
            <img src={ProfilePic} alt="" className='object-cover w-full h-full rounded-lg' />
           
        </div>
        <h1 className='p-2 text-2xl sm:text-4xl font-extrabold'>I'm <span className='text-[#e1b966] animate-spin' data-aos="fade-left">Kasthuri Rangan</span> , I am a  MERN Stack Developer based on India</h1>
        <p className='font-semibold text-base sm:text-lg w-70 text-center'>I am a MERN stack Developer currently working as a Junior Web Developer at GetIntoDare</p>
        <div className='flex items-center justify-between gap-4'>
            <button className='p-2 bg-[#e1b966] text-black font-bold rounded-lg hover:bg-transparent hover:text-white hover:border-2 hover:border-black'>
                
                <Link to='Contact' smooth={true} offset={-100}>
                Connect With Me</Link>
            </button>
            <button className='p-2  text-[#e1b966] border-2 border-white font-bold rounded-lg hover:bg-transparent hover:text-white hover:border-2 hover:border-black'>
              
                <a href="https://drive.google.com/file/d/1AYHtYXOqWMeNGm4BtYpbuaM6k4t_Xqml/view?usp=drive_link">
                My Resume
                </a>
            </button>
        </div>
    </div>
    </Element>
  )
}

export default Hero