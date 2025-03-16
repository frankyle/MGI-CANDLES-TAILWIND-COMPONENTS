import React, { useRef, useState, useEffect } from 'react';
import axiosInstance from '../../auth/axiosInstance';
import { FaCartPlus, FaStar } from 'react-icons/fa';
import ImageModal from './../../utils/ImageModal';

const ToysSlider = () => {
  const [toys, setToys] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const sliderRef = useRef(null);

  const exchangeRate = 2521.3967; // Example exchange rate from USD to TZS

  // Fetch toys data
  useEffect(() => {
    const fetchToys = async () => {
      try {
        const response = await axiosInstance.get('/api/toys/toys/');
        setToys(response.data.results);
      } catch (error) {
        console.error('Error fetching toys:', error);
      }
    };
    fetchToys();
  }, []);

  useEffect(() => {
    const scrollInterval = setInterval(() => {
      if (sliderRef.current) {
        const maxScrollLeft = sliderRef.current.scrollWidth - sliderRef.current.clientWidth;

        if (sliderRef.current.scrollLeft >= maxScrollLeft) {
          // **Reset back to the start smoothly**
          sliderRef.current.scrollTo({
            righ: 0,
            behavior: "smooth",
          });
        } else {
          // **Scroll forward**
          sliderRef.current.scrollBy({ left: 300, behavior: "smooth" });
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
    console.log(`Toy with ID: ${id} added to cart`);
  };

  const renderStars = (rating) => {
    const fullStars = Math.floor(rating);
    const halfStars = rating % 1 >= 0.5 ? 1 : 0;
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
    <div className="bg-gray-200 py-10">
      <div className="container mx-auto px-6">
        <div className="flex justify-between items-center mb-6">
          <h2 className="text-3xl font-extrabold text-gray-800">Toys for Fun and Educational</h2>
          <a href="#" className="text-blue-600 hover:underline text-lg">View All →</a>
        </div>
        <div className="bg-gray-200 p-6 rounded-lg">
          <div className="flex overflow-x-auto gap-6 scroll-smooth no-scrollbar" ref={sliderRef}>
            {Array.isArray(toys) && toys.length > 0 ? (
              toys.map((toy) => (
                <div key={toy.id} className="w-80 shrink-0 bg-white rounded-lg shadow-lg p-5 hover:shadow-xl transition-shadow">
                  {toy.image && (
                    <img
                      src={toy.image}
                      alt={toy.name}
                      className="w-full h-48 object-cover rounded-md mb-4 cursor-pointer"
                      onClick={() => handleImageClick(toy.image)}
                    />
                  )}
                  <h3 className="text-lg font-semibold text-gray-800 mb-2">{toy.name}</h3>
                  <p className="text-gray-600 text-sm mb-4">{toy.description}</p>
                  <div className="flex justify-between items-center mb-4">
                    <div>
                      <p className="text-xl font-bold text-gray-800">${toy.price}</p>
                      <p className="text-sm text-gray-600">
                        ≈{" "}
                        {toy.price
                          ? (toy.price * exchangeRate).toLocaleString("en-TZ", {
                              style: "currency",
                              currency: "TZS",
                            })
                          : "TZS 0.00"}
                      </p>
                    </div>
                    <div>{toy.rating && renderStars(toy.rating)}</div>
                  </div>
                  <div className="flex justify-between items-center mb-4">
                    <div className="text-sm text-gray-600">
                      <p>Stock: {toy.stock}</p>
                      <p>Sold: {toy.sold}</p>
                    </div>
                    <div>
                      <button
                        onClick={() => handleAddToCart(toy.id)}
                        className="bg-green-500 text-white py-2 px-4 rounded-full hover:bg-green-600 transition"
                      >
                        <FaCartPlus className="inline-block mr-2" /> Add to Cart
                      </button>
                    </div>
                  </div>
                </div>
              ))
            ) : (
              <div className="col-span-full text-center py-4">No toys available.</div>
            )}
          </div>
        </div>
      </div>

      {/* Modal for displaying the image */}
      {isModalOpen && (
        <ImageModal
          isOpen={isModalOpen}
          onClose={closeModal}
          imageSrc={selectedImage}
          imageAlt="Toy Image"
        />
      )}
    </div>
  );
};

export default ToysSlider;
