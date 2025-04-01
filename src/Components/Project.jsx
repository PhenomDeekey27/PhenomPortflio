import React from "react";


const Project = ({ img, text, lang, redirect }) => 
    {
 

  return (
    <div className="cursor-pointer transition-transform duration-300 ease-out hover:scale-105 rounded-md bg-[#2C2C2C]" >
      <div class="max-w-[20rem] mb-2 rounded-lg shadow-sm p-6  text-center ">
        <a href={redirect} className="hover:text-black">
        <div>
          <p class="font-bold text-lg font-mont text-white italic">{text}</p>
        </div>
        <img src={img} alt="img" className="mt-2" />
        <div className="flex gap-2 text-center justify-center font-semibold mt-2 text-[#e1b966] flex-wrap">
            {
                lang.map((item)=>{
                    return(<p className="bg-black p-2 rounded-lg">{item}</p>)
                })
            }
           

        </div>
        </a>
      </div>
    </div>
  );
};

export default Project;
