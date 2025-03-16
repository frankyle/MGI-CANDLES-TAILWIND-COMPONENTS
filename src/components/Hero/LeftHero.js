import React from "react";

const LeftHero = () => {
  return (
    <div className="p-8 max-w-lg mx-auto text-center">
      <h2 className="text-5xl font-bold mb-6">Fun & Educational Tools for Kids</h2>
      <p className="text-lg mb-10">
        Discover a wide range of educational and fun tools designed to enhance
        children's learning experience. From interactive books to engaging 
        puzzles, we have everything your child needs to learn and play.
      </p>

      <div className="flex gap-6 justify-center">
        <div className="w-1/2 p-6 text-center bg-white shadow-lg rounded-lg">
          <h3 className="text-xl font-bold">65% of Kids Learn Better with Visual Aids</h3>
          <a href="#" className="mt-4 text-blue-600 font-semibold inline-block">Learn More →</a>
        </div>

        <div className="w-1/2 p-6 text-center bg-white shadow-lg rounded-lg">
          <h3 className="text-xl font-bold">80% of Brain Development Happens by Age 5</h3>
          <a href="#" className="mt-4 text-purple-600 font-semibold inline-block">Read More →</a>
        </div>
      </div>
    </div>
  );
};

export default LeftHero;
