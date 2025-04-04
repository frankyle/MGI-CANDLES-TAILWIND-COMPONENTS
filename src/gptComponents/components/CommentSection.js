import React, { useState } from "react";

const CommentSection = ({ postId }) => {
  const [comments, setComments] = useState([
    { id: 1, text: "Great analysis!", author: "TraderJoe" },
    { id: 2, text: "I also took this trade and made some profit!", author: "FXMaster" },
  ]);
  const [newComment, setNewComment] = useState("");

  const handleCommentSubmit = (e) => {
    e.preventDefault();
    if (newComment.trim() === "") return;

    const newCommentObj = {
      id: comments.length + 1,
      text: newComment,
      author: "Anonymous",
    };

    setComments([...comments, newCommentObj]);
    setNewComment("");
  };

  return (
    <div className="mt-8 border-t pt-4">
      <h3 className="text-xl font-semibold mb-3">Comments</h3>
      <ul className="mb-4">
        {comments.map((comment) => (
          <li key={comment.id} className="border p-3 rounded my-2 bg-gray-100">
            <p className="text-gray-800">{comment.text}</p>
            <p className="text-sm text-gray-500">— {comment.author}</p>
          </li>
        ))}
      </ul>
      <form onSubmit={handleCommentSubmit} className="flex flex-col">
        <textarea
          className="border rounded p-2 mb-2 w-full"
          rows="3"
          placeholder="Add a comment..."
          value={newComment}
          onChange={(e) => setNewComment(e.target.value)}
        />
        <button
          type="submit"
          className="bg-blue-600 text-white py-2 rounded hover:bg-blue-800"
        >
          Submit Comment
        </button>
      </form>
    </div>
  );
};

export default CommentSection;
