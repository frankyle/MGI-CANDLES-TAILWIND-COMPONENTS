import React from "react";

const ManageComments = () => {
  const comments = [
    { id: 1, author: "TraderX", content: "Great insights!", status: "Pending" },
    { id: 2, author: "John", content: "This strategy works!", status: "Approved" },
  ];

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Manage Comments</h1>
      <table className="w-full mt-4 border">
        <thead>
          <tr className="bg-gray-200">
            <th className="p-2">Author</th>
            <th className="p-2">Comment</th>
            <th className="p-2">Status</th>
            <th className="p-2">Actions</th>
          </tr>
        </thead>
        <tbody>
          {comments.map((comment) => (
            <tr key={comment.id} className="border">
              <td className="p-2">{comment.author}</td>
              <td className="p-2">{comment.content}</td>
              <td className="p-2">{comment.status}</td>
              <td className="p-2">
                <button className="bg-green-500 text-white px-2 py-1 mr-2">Approve</button>
                <button className="bg-red-500 text-white px-2 py-1">Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default ManageComments;
