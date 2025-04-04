import React from "react";

const AdminNavbar = () => {
  return (
    <div className="w-full bg-gray-800 text-white p-4 flex justify-between">
      <h1 className="text-lg font-bold">Admin Dashboard</h1>
      <button className="bg-red-500 px-4 py-2">Logout</button>
    </div>
  );
};

export default AdminNavbar;
