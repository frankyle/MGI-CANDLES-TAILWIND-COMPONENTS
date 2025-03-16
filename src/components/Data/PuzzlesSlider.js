import React, { useRef, useState, useEffect } from 'react';
import axiosInstance from '../../auth/axiosInstance';
import { FaCartPlus, FaStar } from 'react-icons/fa'; // Import FaStar
import ImageModal from './../../utils/ImageModal';

const PuzzleSlider = () => {
  const [puzzles, setPuzzles] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const sliderRef = useRef(null);

  const exchangeRate = 2521.3967;

  useEffect(() => {
    const fetchPuzzles = async () => {
      try {
        const response = await axiosInstance.get('/api/puzzles/puzzles/');
        console.log("Fetched Puzzles:", response.data.results); // Debugging
        setPuzzles(response.data.results);
      } catch (error) {
        console.error('Error fetching puzzles:', error);
      }
    };
    fetchPuzzles();
  }, []);
  

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (sliderRef.current) {
        const maxScrollLeft = sliderRef.current.scrollWidth - sliderRef.current.clientWidth;
        if (sliderRef.current.scrollLeft >= maxScrollLeft) {
          sliderRef.current.scrollLeft = 0; // Reset to the first slide
        } else {
          sliderRef.current.scrollLeft += 300;
        }
      }
    }, 4000);
    
    return () => clearInterval(scrollInterval);
  }, []);
  
  const handleImageClick = (imageSrc) => {
    setSelectedImage(imageSrc);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedImage(null);
  };

  const handleAddToCart = (id) => {
    console.log(`Puzzle with ID: ${id} added to cart`);
  };

  // Updated renderStars function for stars
  const renderStars = (rating) => {
    const validRating = Math.min(rating, 5); // Prevents breaking UI
    const fullStars = Math.floor(validRating);
    const halfStars = validRating % 1 >= 0.5 ? 1 : 0;
    const emptyStars = 5 - fullStars - halfStars;
  
    return (
      <div className="flex">
        {[...Array(fullStars)].map((_, index) => (
          <FaStar key={`full-${index}`} className="text-yellow-500" />
        ))}
        {halfStars === 1 && (
          <FaStar key="half" className="text-yellow-500" style={{ opacity: 0.5 }} />
        )}
        {[...Array(emptyStars)].map((_, index) => (
          <FaStar key={`empty-${index}`} className="text-gray-300" />
        ))}
      </div>
    );
  };
  

  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-extrabold text-gray-800">Best Selling Puzzle Collection</h2>
          <a href="#" className="text-blue-600 hover:underline text-lg">View All →</a>
        </div>
        <div className="bg-gray-200 p-6 rounded-lg">
          <div className="flex overflow-x-auto gap-6 scroll-smooth no-scrollbar" ref={sliderRef}>
            {Array.isArray(puzzles) && puzzles.length > 0 ? (
              puzzles.map((puzzle) => (
                <div key={puzzle.id} className="w-80 shrink-0 bg-white rounded-lg shadow-lg p-5 hover:shadow-xl transition-shadow">
                  {puzzle.image && (
                    <img
                      src={puzzle.image}
                      alt={puzzle.name}
                      className="w-full h-48 object-cover rounded-md mb-4 cursor-pointer"
                      onClick={() => handleImageClick(puzzle.image)}
                    />
                  )}
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{puzzle.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{puzzle.description}</p>
                  <div className="flex justify-between items-center mb-2">
                    <p className="text-sm text-gray-600">Stock: {puzzle.stock}</p>
                    <p className="text-sm text-gray-600">Sold: {puzzle.sold}</p>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <p className="text-xl font-bold text-gray-800">${puzzle.price}</p>
                      <p className="text-sm text-gray-600">
                        ≈ {(puzzle.price * exchangeRate).toLocaleString("en-TZ", { style: "currency", currency: "TZS" })}
                      </p>
                    </div>
                    <div>{puzzle.rating && renderStars(puzzle.rating)}</div>
                  </div>
                  <div className="flex justify-center mt-4">
                    <button
                      onClick={() => handleAddToCart(puzzle.id)}
                      className="bg-green-500 text-white py-2 px-4 rounded-full hover:bg-green-600 transition"
                    >
                      <FaCartPlus className="inline-block mr-2" /> Add to Cart
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-4">No puzzles available.</div>
            )}
          </div>
        </div>
      </div>

      {isModalOpen && (
        <ImageModal
          isOpen={isModalOpen}
          onClose={closeModal}
          imageSrc={selectedImage}
          imageAlt="Puzzle Image"
        />
      )}
    </div>
  );
};

export default PuzzleSlider;