import React, { useState } from "react";

const ManagePosts = () => {
  const [posts, setPosts] = useState([
    { id: 1, title: "Forex Market Trends", status: "Published" },
    { id: 2, title: "Trading Psychology", status: "Draft" },
  ]);

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Manage Posts</h1>
      <button className="bg-blue-500 text-white px-4 py-2 mt-4">+ Add New Post</button>

      <table className="w-full mt-4 border">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">Title</th>
            <th className="p-2">Status</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {posts.map((post) => (
            <tr key={post.id} className="border">
              <td className="p-2">{post.title}</td>
              <td className="p-2">{post.status}</td>
              <td className="p-2">
                <button className="bg-yellow-500 text-white px-2 py-1 mr-2">Edit</button>
                <button className="bg-red-500 text-white px-2 py-1">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManagePosts;
