import React from "react";
import { IoMdMail } from "react-icons/io";
import { FaPhoneVolume } from "react-icons/fa6";
import { FaLocationDot } from "react-icons/fa6";
import { FaSquareInstagram } from "react-icons/fa6";
import { RiWhatsappFill } from "react-icons/ri";
import { MdEmail } from "react-icons/md";
import { FaGithub } from "react-icons/fa";
import { Element } from "react-scroll";
import Aos from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { useState } from "react";
import toast, { Toaster } from 'react-hot-toast';


const Contact = () => {

  const [Result, setResult] = useState("Loading")
  useEffect(() => {
    Aos.init();
  }, []);

  const onSubmit = async (event) => {
    event.preventDefault();
    setResult("Sending....");
    const formData = new FormData(event.target);

    formData.append("access_key", "4e584e00-195d-4116-be4a-ad900e9508f9");

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: formData
    });

    const data = await response.json();

    if (data.success) {
      setResult("Form Submitted Successfully");
      toast.success("Form Submitted Successfully")
      event.target.reset();
    } else {
      console.log("Error", data);
      setResult(data.message);
      toast.error(data.message)
    }
  };


  return (
    <Element name="Contact">
      <Toaster></Toaster>
    <div className="mx-auto p-2" id="Contact" data-aos="fade-up">
      <h1 className="text-center sm:text-start font-extrabold text-[#e1b966] text-2xl sm:text-4xl">Get In Touch</h1>
      <div className="mt-2 text-center">
        <h1 className="sm:text-4xl text-2xl text-[#e1b966] font-bold border-b-4 border-black w-full mb-2 ">
          Let's Talk
        </h1>
        <p className="font-semibold text-xl">
          I'm available to take on new projects, so feel free to ask about
          anything you want me to work on . You can contact me anytime{" "}
        </p>
      </div>
      <div className="flex items-center md:justify-around mt-12 flex-wrap gap-4">
        <div className="flex flex-col gap-4">
          <div className="flex gap-2 items-center bg-black p-2 rounded-lg">
            <span className="text-xl text-[#e1b966]">
              <IoMdMail />
            </span>
            <p className="text-xl font-bold text-[#e1b966]">
              Krangan415@gmail.com
            </p>
          </div>
          <div className="flex gap-2 items-center bg-black p-2 rounded-lg">
            <span className="text-xl text-[#e1b966]">
              <FaPhoneVolume />
            </span>
            <p className="text-xl font-bold text-[#e1b966]">+916385685891</p>
          </div>
          <div className="flex gap-2 items-center bg-black p-2 rounded-lg">
            <span className="text-xl text-[#e1b966]">
              <FaLocationDot />
            </span>
            <p className="text-xl font-bold text-[#e1b966]">
              Villupuram , Tamil Nadu , India
            </p>
          </div>
        </div>

        <div className="p-4 w-full sm:w-[50%]">
          <form class="max-w-md mx-auto flex flex-col" onSubmit={onSubmit}>
         
            <div class="relative z-0 w-full mb-5 group">
              <input
                type="email"
                name="Email"
                id="floating_email"
                class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none dark:text-white dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                placeholder=" "
                required
              />
              <label
                for="floating_email"
                class="peer-focus:font-medium absolute text-sm text-[#e1b966] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 rtl:peer-focus:left-auto peer-focus:text-[#e1b966] peer-focus:dark:text-blue-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
              >
                Email address
              </label>
            </div>

            <div class="grid md:grid-cols-2 md:gap-6">
              <div class="relative z-0 w-full mb-5 group">
                <input
                  type="text"
                  name="name"
                  id="floating_first_name"
                  class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  for="floating_first_name"
                  class="peer-focus:font-medium absolute text-sm text-[#e1b966] duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#e1b966] peer-focus:dark:text-[#e1b966] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Your name
                </label>
              </div>
            </div>
            <div class="grid ">
              <div class="relative z-0 w-full mb-5 group">
                <input
                  type="tel"
                
                  name="contact"
                  id="floating_phone"
                  class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  for="floating_phone"
                  class="peer-focus:font-medium absolute text-sm text-[#e1b966]  duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#e1b966] peer-focus:dark:text-[#e1b966] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Contact(+91)
                </label>
              </div>
              <div class="relative z-0 w-full">
                <textarea
                  type="textarea"
                  name="message"
                  id="large-input"
                  class="block py-2.5 px-0 w-full text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none  dark:border-gray-600 dark:focus:border-blue-500 focus:outline-none focus:ring-0 focus:border-blue-600 peer"
                  placeholder=" "
                  required
                />
                <label
                  for="floating_company"
                  class="peer-focus:font-medium absolute text-sm text-[#e1b966] dark:text-gray-400 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:start-0 rtl:peer-focus:translate-x-1/4 peer-focus:text-[#e1b966] peer-focus:dark:text-[#e1b966] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6"
                >
                  Your Message
                </label>
              </div>
            </div>
            <button
              type="submit"
              class="text-black mt-4 bg-[#e1b966] hover:bg-blue-800 hover:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm w-full sm:w-auto px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
      <div className="flex items-center justify-around gap-12 bg-black p-2 rounded-lg">
        <div>
          <span className="text-[#e1b966] text-3xl font-bold">
            Kasthuri Rangan
          </span>
        </div>
        <div className="flex gap-6 flex-wrap">
          <span className="text-3xl  text-[#e1b966] hover:scale-110">
            <a href="https://www.instagram.com/phenom_freelancer/">
              <FaSquareInstagram />
            </a>{" "}
          </span>
          <span className="text-3xl text-[#e1b966] hover:scale-110">
            <a href="https://wa.me/+916385685891">
              <RiWhatsappFill />
            </a>{" "}
          </span>
          
          <span className="text-3xl text-[#e1b966] hover:scale-110">
            <a href="https://github.com/PhenomDeekey27">
              <FaGithub  />
            </a>{" "}
          </span>
        </div>
      </div>
    </div>
    </Element>
  );
};

export default Contact;
