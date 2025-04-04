import React from "react";
import { useParams } from "react-router-dom";
import { dummyBlogPosts } from "./blogData";

const BlogPost = () => {
  const { slug } = useParams();
  const post = dummyBlogPosts.find((p) => p.slug === slug);

  if (!post) {
    return <h1>Post not found!</h1>;
  }

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold">{post.title}</h1>
      <p className="text-gray-500">{post.date}</p>
      <div className="mt-4" dangerouslySetInnerHTML={{ __html: post.content }} />
    </div>
  );
};

export default BlogPost;
