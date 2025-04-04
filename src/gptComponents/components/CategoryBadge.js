import React from "react";

const CategoryBadge = ({ category }) => {
  return (
    <span className="bg-blue-500 text-white px-2 py-1 rounded text-sm">
      {category}
    </span>
  );
};

export default CategoryBadge;
