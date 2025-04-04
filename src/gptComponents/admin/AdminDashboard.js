import React from "react";
import AdminSidebar from "./AdminSidebar";

const AdminDashboard = () => {
  return (
    <div className="flex">
      <AdminSidebar />
      <div className="flex-grow p-5">
        <h1 className="text-3xl font-bold">Welcome to the Admin Dashboard</h1>
        <p className="mt-2">Manage your posts, users, and comments from here.</p>
      </div>
    </div>
  );
};

export default AdminDashboard;
