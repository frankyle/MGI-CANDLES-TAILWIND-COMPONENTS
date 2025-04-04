import React from "react";

const Gallery = () => {
  const categories = [
    {
      title: "Swing Trades",
      description: "Trades held for several days or weeks based on market structure.",
      images: [
        "https://via.placeholder.com/200",
        "https://via.placeholder.com/200",
        "https://via.placeholder.com/200",
      ],
    },
    {
      title: "Entered Trades",
      description: "Trades that are currently active and monitored.",
      images: [
        "https://via.placeholder.com/200",
        "https://via.placeholder.com/200",
        "https://via.placeholder.com/200",
      ],
    },
    {
      title: "Loss Trades",
      description: "Trades that hit stop-loss, analyzed for learning and improvement.",
      images: [
        "https://via.placeholder.com/200",
        "https://via.placeholder.com/200",
        "https://via.placeholder.com/200",
      ],
    },
    {
      title: "Winning Trades",
      description: "Successful trades that reached their profit target.",
      images: [
        "https://via.placeholder.com/200",
        "https://via.placeholder.com/200",
        "https://via.placeholder.com/200",
      ],
    },
  ];

  return (
    <div className="bg-gray-100 min-h-screen p-8">
      <h1 className="text-4xl font-bold text-center mb-8">Trading Gallery</h1>
      
      <div className="max-w-6xl mx-auto space-y-12">
        {categories.map((category, index) => (
          <div key={index} className="bg-white shadow-lg rounded-lg p-6">
            <h2 className="text-2xl font-semibold text-gray-800">{category.title}</h2>
            <p className="text-gray-600 mb-4">{category.description}</p>
            <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
              {category.images.map((img, imgIndex) => (
                <img
                  key={imgIndex}
                  src={img}
                  alt={category.title}
                  className="w-full h-40 object-cover rounded-lg shadow-md"
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Gallery;
