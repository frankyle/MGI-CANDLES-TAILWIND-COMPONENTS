import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

const EditPost = () => {
  const { postId } = useParams();
  const [post, setPost] = useState({
    title: "",
    content: "",
    category: "",
  });

  useEffect(() => {
    // Fetch the post data from backend (Replace with API call)
    setPost({ title: "Sample Title", content: "Sample Content", category: "Forex" });
  }, [postId]);

  const handleChange = (e) => {
    setPost({ ...post, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Updated Post:", post);
    // Send updated data to backend (API call can be added here)
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Edit Post</h1>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-4">
          <label className="block font-medium">Title</label>
          <input
            type="text"
            className="w-full border p-2"
            name="title"
            value={post.title}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium">Category</label>
          <input
            type="text"
            className="w-full border p-2"
            name="category"
            value={post.category}
            onChange={handleChange}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium">Content</label>
          <textarea
            className="w-full border p-2 h-40"
            name="content"
            value={post.content}
            onChange={handleChange}
            required
          ></textarea>
        </div>
        <button type="submit" className="bg-green-500 text-white px-4 py-2">
          Update Post
        </button>
      </form>
    </div>
  );
};

export default EditPost;
