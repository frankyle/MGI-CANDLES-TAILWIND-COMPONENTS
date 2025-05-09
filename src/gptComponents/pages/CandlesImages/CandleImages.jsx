import React, { useState, useEffect } from 'react';
import axiosInstance from '../../../auth/axiosInstance';
import { FaEye } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom'; 

const CandleImages = () => {
  const [candleImages, setCandleImages] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const navigate = useNavigate(); // Initialize navigate for programmatic navigation

  useEffect(() => {
    const fetchCandleImages = async () => {
      try {
        const response = await axiosInstance.get('/api/candleimages/candleimages/');
        console.log('API Response:', response.data);
        // Extract the results array
        setCandleImages(response.data.results);
      } catch (error) {
        console.error('Error fetching candle images:', error);
      }
    };

    fetchCandleImages();
  }, []);

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
  };

  const handleView = (id) => {
    console.log(`Viewing candle image with ID: ${id}`);
    // Navigate to the candle view page using navigate()
    navigate(`/candle-view/${id}`);
  };



  return ( 
    <div className="p-6 bg-gray-50 min-h-screen">
    <div className="overflow-x-auto shadow-md sm:rounded-lg">
      <h1 className="text-4xl font-bold mb-2">📈 Weekly Currency Trades Taken</h1>
      <table className="min-w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">Currency Pair</th>
            <th scope="col" className="px-6 py-3">Monday Candle</th>
            <th scope="col" className="px-6 py-3">Tuesday Candle</th>
            <th scope="col" className="px-6 py-3">Wednesday Candle</th>
            <th scope="col" className="px-6 py-3">Thursday Candle</th>
            <th scope="col" className="px-6 py-3">Friday Candle</th>
            <th scope="col" className="px-6 py-3">Saturday Candle</th>
            <th scope="col" className="px-6 py-3">Sunday Candle</th>
            <th scope="col" className="px-6 py-3">Swing Trade Candle</th>
            <th scope="col" className="px-6 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(candleImages) && candleImages.length > 0 ? (
            candleImages.map((candleImage) => (
              <tr key={candleImage.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                <td className="px-6 py-4 text-black font-bold">{candleImage.currency_pair}</td>
                {['monday_candle', 'tuesday_candle', 'wednesday_candle', 'thursday_candle', 'friday_candle', 'saturday_candle', 'sunday_candle', 'swing_trade_candle'].map((key) => (
                  <td key={key} className="px-6 py-4">
                    <img
                      src={candleImage[key]}
                      alt={`${key.replace('_', ' ')} Candle`}
                      className="w-24 h-24 object-contain cursor-pointer"
                      onClick={() => openModal(candleImage[key])}
                    />
                  </td>
                ))}
                <td className="px-6 py-4 flex space-x-3">
                  {/* View Button */}
                  <button
                    onClick={() => handleView(candleImage.id)}
                    className="text-yellow-500 hover:text-yellow-700"
                    title="View Candle Image"
                  >
                    <FaEye size={20} />
                  </button>

                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="10" className="text-center py-4">No candle images available.</td>
            </tr>
          )}
        </tbody>
      </table>

      {modalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white p-4 rounded-lg max-w-full max-h-full overflow-auto"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={selectedImage}
              alt="Selected"
              className="max-w-full max-h-screen object-contain"
            />
          </div>
        </div>
      )}
    </div>
    </div>
  );
};

export default CandleImages;
