import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-blue-600 text-white p-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-2xl font-bold">Forex Blog</Link>
        <div className="space-x-4">
          <Link to="/blog" className="hover:underline">Blog</Link>
          <Link to="/strategy" className="hover:underline">Strategy</Link>
          <Link to="/trade-tracker" className="hover:underline">Trade Tracker</Link>
          <Link to="/gallery" className="hover:underline">Gallery</Link>
          <Link to="/about" className="hover:underline">About</Link>
          <Link to="/contact" className="hover:underline">Contact</Link>
          <Link to="/admin" className="bg-red-500 px-4 py-2 rounded hover:bg-red-700">
            Admin Dashboard
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
