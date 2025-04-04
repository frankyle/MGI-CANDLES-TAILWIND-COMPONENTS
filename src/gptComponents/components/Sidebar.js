import React from "react";
import { Link } from "react-router-dom";

const Sidebar = () => {
  return (
    <aside className="bg-gray-200 p-4 w-64">
      <h2 className="text-lg font-bold mb-4">Categories</h2>
      <ul className="space-y-2">
        <li><Link to="/blog" className="hover:text-blue-500">All Posts</Link></li>
        <li><Link to="/strategy" className="hover:text-blue-500">MGI Strategy</Link></li>
        <li><Link to="/trade-tracker" className="hover:text-blue-500">Trade Performance</Link></li>
        <li><Link to="/gallery" className="hover:text-blue-500">Trading Gallery</Link></li>
      </ul>
    </aside>
  );
};

export default Sidebar;
