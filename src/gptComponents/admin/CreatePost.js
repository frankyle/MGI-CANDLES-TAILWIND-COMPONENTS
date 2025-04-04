import React, { useState } from "react";

const CreatePost = () => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [category, setCategory] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newPost = { title, content, category };
    console.log("Post submitted:", newPost);
    // Send data to backend (API call can be added here)
  };

  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Create New Post</h1>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-4">
          <label className="block font-medium">Title</label>
          <input
            type="text"
            className="w-full border p-2"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium">Category</label>
          <input
            type="text"
            className="w-full border p-2"
            value={category}
            onChange={(e) => setCategory(e.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label className="block font-medium">Content</label>
          <textarea
            className="w-full border p-2 h-40"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          ></textarea>
        </div>
        <button type="submit" className="bg-blue-500 text-white px-4 py-2">
          Publish Post
        </button>
      </form>
    </div>
  );
};

export default CreatePost;
