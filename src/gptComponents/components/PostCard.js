import React from "react";
import { Link } from "react-router-dom";

const PostCard = ({ post }) => {
  return (
    <div className="bg-white p-4 shadow-lg rounded-lg">
      <h3 className="text-xl font-bold mb-2">{post.title}</h3>
      <p className="text-gray-600">{post.excerpt}</p>
      <Link to={`/blog/${post.id}`} className="text-blue-500 hover:underline mt-2 block">
        Read More
      </Link>
    </div>
  );
};

export default PostCard;
