import React from "react";
import { Link } from "react-router-dom";

const AdminSidebar = () => {
  return (
    <aside className="w-64 bg-gray-800 text-white h-screen p-5">
      <h2 className="text-xl font-bold mb-4">Admin Panel</h2>
      <ul className="space-y-3">
        <li>
          <Link to="/admin" className="hover:text-yellow-300">Dashboard</Link>
        </li>
        <li>
          <Link to="/admin/posts" className="hover:text-yellow-300">Manage Posts</Link>
        </li>
        <li>
          <Link to="/admin/users" className="hover:text-yellow-300">Manage Users</Link>
        </li>
        <li>
          <Link to="/admin/comments" className="hover:text-yellow-300">Manage Comments</Link>
        </li>
        <li>
          <Link to="/admin/create-post" className="hover:text-yellow-300">Create Post</Link>
        </li>
      </ul>
    </aside>
  );
};

export default AdminSidebar;
