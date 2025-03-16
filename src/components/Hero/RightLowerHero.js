import React from "react";
import { FaShoppingCart } from "react-icons/fa";
import img1 from "./../../images/hero/HomeAccents.jpg";
import img2 from "./../../images/hero/carvihecle.jpg";

export const RightLowerHero = () => {
  return (
    <div className="grid grid-cols-2 gap-4">
      {/* Card 1 - Custom Toys */}
      <div className="relative overflow-hidden rounded-2xl shadow-lg">
        <div className="relative">
          <img src={img2} alt="Custom Toys" className="w-full h-48 object-cover" />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black opacity-50"></div>
        </div>
        {/* Text on the image */}
        <div className="absolute top-2 left-2 text-white text-2xl px-3 py-1 font-semibold">
          Custom Wooden <br /> Toys
        </div>
        {/* Cart icon */}
        <div className="absolute bottom-2 left-2 flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg transition-transform transform hover:scale-110 hover:translate-x-1">
          <FaShoppingCart className="text-black text-2xl transition-transform transform hover:scale-125" />
        </div>
      </div>

      {/* Card 2 - Fun Games */}
      <div className="relative overflow-hidden rounded-2xl shadow-lg">
        <div className="relative">
          <img src={img1} alt="Fun Games" className="w-full h-48 object-cover" />
          {/* Dark overlay */}
          <div className="absolute inset-0 bg-black opacity-40"></div>
        </div>
        {/* Text on the image */}
        <div className="absolute top-2 left-2 text-white text-2xl px-3 py-1 font-semibold">
          Exciting Wooden <br /> Games
        </div>
        {/* Cart icon */}
        <div className="absolute bottom-2 left-2 flex items-center justify-center w-12 h-12 bg-white rounded-full shadow-lg transition-transform transform hover:scale-110 hover:translate-x-1">
          <FaShoppingCart className="text-black text-2xl transition-transform transform hover:scale-125" />
        </div>
      </div>
    </div>
  );
};
