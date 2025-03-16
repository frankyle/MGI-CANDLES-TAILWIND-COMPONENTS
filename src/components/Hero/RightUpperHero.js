import React from "react";
import { FaArrowRight } from "react-icons/fa";
import img1 from "./../../images/hero/kidabc.jpg";

const RightUpperHero = () => {
  return (
    <div className="relative overflow-hidden rounded-2xl shadow-lg">
      {/* Image */}
      <img src={img1} alt="Hero" className="w-full h-64 object-cover" /> {/* Increased height */}
      {/* Dark overlay */}
      <div className="absolute inset-0 bg-black opacity-30"></div>
      {/* Text on the image */}
      <div className="absolute top-2 left-2 text-white text-3xl px-3 py-1 font-semibold">
        Learning and <br /> Fun Puzzles
      </div>
      {/* Arrow button */}
      <div className="absolute bottom-2 left-2 flex items-center justify-center w-14 h-14 bg-black rounded-full shadow-lg transition-transform transform hover:translate-x-6">
        <FaArrowRight className="text-white text-3xl transition-transform transform hover:translate-x-2" />
      </div>
    </div>
  );
};

export default RightUpperHero;
