import React from "react";


const Project = ({ img, text, lang, redirect }) => 
    {
 

  return (
    <div className="cursor-pointer hover:scale-105">
      <div class="max-w-[30rem]  rounded-lg shadow border-[#e1b966] border-2 p-4 text-slate-300 text-center ">
        <a href={redirect}>
        <div>
          <p class="font-bold text-lg  italic">{text}</p>
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
