import React from "react";
import { Link } from "react-router-dom";
import { dummyBlogPosts } from "./blogData";

const BlogList = () => {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold mb-4">Latest Blog Posts</h1>
      <div className="space-y-4">
        {dummyBlogPosts.map((post) => (
          <div key={post.slug} className="border p-4 rounded-lg shadow">
            <h2 className="text-xl font-semibold">{post.title}</h2>
            <p className="text-gray-500">{post.date}</p>
            <p className="mt-2">{post.content.substring(0, 100)}...</p>
            <Link to={`/blog/${post.slug}`} className="text-blue-500 mt-2 block">
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogList;
