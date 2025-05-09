import React, { useState, useEffect } from 'react';
import axiosInstance from '../../../auth/axiosInstance';
import { useNavigate, useParams } from 'react-router-dom';

const CandleImagesView = () => {
  const [candleImage, setCandleImage] = useState(null);
  const { id } = useParams(); // Get the candle image id from the URL
  const navigate = useNavigate();
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const fetchCandleImageDetails = async () => {
      try {
        const response = await axiosInstance.get(`/api/candleimages/candleimages/${id}/`);
        if (response.data) {
          setCandleImage(response.data);
        } else {
          console.error('No candle image data found for this ID');
        }
      } catch (error) {
        console.error('Error fetching candle image details:', error);
      }
    };

    fetchCandleImageDetails();
  }, [id]);

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', {
      weekday: 'short',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setCurrentImageIndex(0);
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imageUrls.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + imageUrls.length) % imageUrls.length);
  };

  if (!candleImage) {
    return <div>Loading...</div>;
  }

  const imageFields = [
    'monday_candle', 'tuesday_candle', 'wednesday_candle', 'thursday_candle',
    'friday_candle', 'saturday_candle', 'sunday_candle', 'swing_trade_candle'
  ];

  const imageUrls = imageFields.map((key) => ({
    url: candleImage[key],
    label: key.replace('_', ' ').replace(/\b\w/g, c => c.toUpperCase()),
  })).filter(({ url }) => url);

  return (
    <div className="prose lg:prose-xl p-4 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-2">📈 Weekly Currency Details</h1>
      <p className="text-gray-600 italic mb-6">Published on {formatDate(candleImage.created_at)}</p>

      <div className="bg-gray-100 p-4 rounded-lg mb-6">
        <p><strong>Currency Pair:</strong> {candleImage.currency_pair}</p>
        <p><strong>Created At:</strong> {formatDate(candleImage.created_at)}</p>
      </div>

      <h2 className="text-2xl font-semibold my-6">🕯 Candle Images</h2>
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
        {imageUrls.map((img, index) => (
          <div key={index} className="bg-white border rounded-lg shadow p-4">
            <img
              src={img.url}
              alt={img.label}
              className="w-full h-64 object-contain cursor-pointer mb-4 rounded-md transition-transform hover:scale-105"
              onClick={() => openModal(index)}
            />
            <h3 className="text-lg font-bold text-center">{img.label}</h3>
          </div>
        ))}
      </div>

      <div className="mt-12 flex gap-4">
        <button
          onClick={() => navigate('/candle-images')} 
          className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600"
        >
          ← Back to Candle Images
        </button>
      </div>

      {/* Modal for zoomed image view */}
      {modalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-70 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white p-4 rounded-lg max-w-4xl max-h-[90vh] overflow-auto relative"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={imageUrls[currentImageIndex]?.url}
              alt="Zoomed"
              className="max-w-full max-h-[80vh] object-contain mx-auto"
            />
            <button
              className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
              onClick={handlePrevImage}
              disabled={imageUrls.length <= 1}
            >
              &lt;
            </button>
            <button
              className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
              onClick={handleNextImage}
              disabled={imageUrls.length <= 1}
            >
              &gt;
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CandleImagesView;
