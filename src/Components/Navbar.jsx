import React from "react";
import { useState } from "react";
import { Link } from "react-scroll";


const Navbar = () => {
  const [Menu, setMenu] = useState("home")

  function toogleNav(){
    const blockNav=document.getElementById("navbar-default");
  
    blockNav.classList.toggle("hidden")
  }
  return (
    <div>
      <nav class="bg-[#34353A] fixed w-full z-10 top-0 p-4">
        <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-2">
          <span class="self-center sm:text-3xl font-bold whitespace-nowrap dark:text-white">
            Kasthuri Rangan
          </span>

          <button
            data-collapse-toggle="navbar-default"
            type="button"
            class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
            onClick={()=>toogleNav()}
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
              
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>
          <div class="hidden w-full md:block md:w-auto " id="navbar-default">
            <ul class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg  md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 ">
              <li className={`${Menu=="home" ? "text-red-600" : "text-white"}`}>
             
                  <Link
                  to="hero"
                  class="block py-2 px-3   hover:text-yellow-300 rounded md:bg-transparent md:p-0  cursor-pointer"
                  aria-current="page"
                  offset={-50}
                  smooth={true}
                  onClick={()=>setMenu("home")}
                   
                  >
                  Home
                </Link>
              
             
              </li>
              <li className={`${Menu=="about" ? "text-red-600" : "text-white"}`}>
                <Link
                  to="About"
                  class="block py-2 px-3  hover:text-yellow-300  rounded  md:hover:bg-transparent md:border-0  md:p-0 cursor-pointer"
                  offset={-90} onClick={()=>setMenu("about")}
                  smooth={true}
                >
                  About
                </Link>
           
               
              </li>
              <li className={`${Menu=="contact" ? "text-red-600" : "text-white"}`}>
                <Link
                  to="Contact"
                  smooth={true}
                  class="block py-2 px-3   hover:text-yellow-300 rounded  md:hover:bg-transparent md:border-0  md:p-0 cursor-pointer"
                  offset={-100} onClick={()=>setMenu("contact")}
                >
                  Contact
                </Link>
              </li>
              <li className={`${Menu=="portfolio" ? "text-red-600" : "text-white"}`}>
                <Link
                  to="Portfolio"
                  class="block py-2 px-3 hover:text-yellow-300   rounded  md:hover:bg-transparent md:border-0  md:p-0 cursor-pointer"
                  offset={-75}
                  onClick={()=>setMenu("portfolio")}
                  smooth={true}
                  
                >
                  Portfolio
                </Link>
              </li>
            </ul>
          </div>
          <div
            className="hidden md:block cursor-pointer rounded-lg p-2 font-semibold hover:scale-105 transition-all"
            id="connect"
          >
            <Link to="Contact" smooth={true} offset={-100}>
            Connect With Me
            </Link>
           
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
