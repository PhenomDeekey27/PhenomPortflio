import React from "react";

const Cards = ({ img, text }) => {
  return (
    <div>
      <div class="max-w-34 max-h-42 rounded-lg shadow-lg shadow-orange-300  p-4  text-black">
      <div>
      <img src={img} alt="img" />

      </div>
       

        <div class="mt-1">
          <p class=" uppercase text-center text-overlay font-bold font-mont text-lg  italic">
            {text}
          </p>
        </div>
      </div>
    </div>
  );
};

export default Cards;
