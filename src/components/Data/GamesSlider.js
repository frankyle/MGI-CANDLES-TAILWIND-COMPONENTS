import React, { useRef, useState, useEffect } from "react";
import axiosInstance from "../../auth/axiosInstance";
import { FaStar } from "react-icons/fa";
import img1 from "../../images/products/TrainWooden.jpg";
import ImageModal from "./../../utils/ImageModal"; // Import the ImageModal component

import "./ProductSlider.css";

const GamesSlider = () => {
  const [games, setGames] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const sliderRef = useRef(null);

  const exchangeRate = 2521.3967;

  useEffect(() => {
    const fetchGames = async () => {
      try {
        const response = await axiosInstance.get("/api/games/games/");
        console.log("API Response:", response.data);
        setGames(response.data.results); // Adjust if API response structure is different
      } catch (error) {
        console.error("Error fetching games:", error);
      }
    };

    fetchGames();
  }, []);

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (sliderRef.current) {
        const maxScrollLeft =
          sliderRef.current.scrollWidth - sliderRef.current.clientWidth;

        // Check if we are at the end of the scroll
        if (sliderRef.current.scrollLeft >= maxScrollLeft) {
          // If at the end, scroll back to the start
          sliderRef.current.scrollLeft = 0;
        } else {
          // Otherwise, scroll to the right
          sliderRef.current.scrollLeft += 300;
        }
      }
    }, 4000);

    return () => clearInterval(scrollInterval);
  }, []);

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const emptyStars = 5 - fullStars;
    return (
      <div className="flex">
        {[...Array(fullStars)].map((_, index) => (
          <FaStar key={index} className="text-yellow-500" />
        ))}
        {[...Array(emptyStars)].map((_, index) => (
          <FaStar key={index + fullStars} className="text-gray-300" />
        ))}
      </div>
    );
  };

  // Open the modal with the clicked image
  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
    setIsModalOpen(true);
  };

  // Close the modal
  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-extrabold text-gray-800">Games for All Ages</h2>
          <a href="#" className="text-blue-600 hover:underline text-lg">
            View All →
          </a>
        </div>
        <div className="bg-gray-200 p-6 rounded-lg">
          <div
            className="flex overflow-x-auto gap-6 scroll-smooth no-scrollbar"
            ref={sliderRef}
          >
            {Array.isArray(games) && games.length > 0 ? (
              games.map((game, index) => (
                <div
                  key={index}
                  className="w-80 shrink-0 bg-white rounded-lg shadow-lg p-5 hover:shadow-xl transition-shadow"
                >
                  <img
                    src={game.image || img1}
                    alt={game.name}
                    className="w-full h-48 object-cover rounded-md mb-4 cursor-pointer"
                    onClick={() => handleImageClick(game.image || img1)}
                  />
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">
                    {game.name}
                  </h3>
                  <p className="text-gray-600 text-sm mb-4">{game.description}</p>
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <p className="text-xl font-bold text-gray-800">
                        ${game.price || "0.00"}
                      </p>
                      <p className="text-sm text-gray-600">
                        ≈{" "}
                        {game.price
                          ? (game.price * exchangeRate).toLocaleString("en-TZ", {
                              style: "currency",
                              currency: "TZS",
                            })
                          : "TZS 0.00"}
                      </p>
                    </div>
                    <div>{game.rating && renderStars(game.rating)}</div>
                  </div>
                  <button className="w-full bg-blue-600 text-white py-2 rounded-full font-medium hover:bg-blue-700 transition">
                    Add to Cart
                  </button>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-4">No games available.</div>
            )}
          </div>
        </div>
      </div>

      {/* Modal for displaying the image */}
      <ImageModal
        isOpen={isModalOpen}
        onClose={closeModal}
        imageSrc={selectedImage}
        imageAlt="Game Image"
      />
    </div>
  );
};

export default GamesSlider;