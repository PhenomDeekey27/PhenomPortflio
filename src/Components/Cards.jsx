import React from "react";

const Cards = ({img,text}) => {
  return (
    <div>
      <div class="max-w-32 max-h-42 rounded-lg shadow border-[#e1b966] border-2 p-4 bg-slate-300 text-black">
        
          <img src={img} alt="img" />
      
        <div class="mt-1">
         
          <p class=" text-center font-bold text-lg  italic">
           {
            text
           }
          </p>
         
        </div>
      </div>
    </div>
  );
};

export default Cards;
