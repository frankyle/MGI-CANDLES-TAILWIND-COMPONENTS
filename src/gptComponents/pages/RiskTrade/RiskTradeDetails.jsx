import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import axiosInstance from '../../auth/axiosInstance';

const RiskTradeDetails = () => {
  const [riskTrade, setRiskTrade] = useState(null);
  const [loading, setLoading] = useState(true);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [images, setImages] = useState([]);
  const { id } = useParams(); // Assuming the risk trade ID is passed in the URL
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRiskTrade = async () => {
      try {
        const response = await axiosInstance.get(`/api/risktrades/risktrades/${id}/`);
        setRiskTrade(response.data);

        // Prepare images array (you can add more images if needed)
        const imageUrls = [];
        if (response.data.mt5_chart) imageUrls.push(response.data.mt5_chart);
        if (response.data.tradeview_chart) imageUrls.push(response.data.tradeview_chart);
        if (response.data.mt5_positions) imageUrls.push(response.data.mt5_positions);

        setImages(imageUrls);
      } catch (error) {
        console.error('Error fetching risk trade details:', error);
        alert('Failed to fetch risk trade details.');
      } finally {
        setLoading(false);
      }
    };

    fetchRiskTrade();
  }, [id]);

  const openModal = (index) => {
    setCurrentImageIndex(index);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  const nextImage = () => {
    if (currentImageIndex < images.length - 1) {
      setCurrentImageIndex(currentImageIndex + 1);
    }
  };

  const prevImage = () => {
    if (currentImageIndex > 0) {
      setCurrentImageIndex(currentImageIndex - 1);
    }
  };

  const handleModalClick = (e) => {
    // Close modal if clicked outside the modal content (on the overlay)
    if (e.target.classList.contains('modal-overlay')) {
      closeModal();
    }
  };

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!riskTrade) {
    return <div>Risk trade not found</div>;
  }

  return (
    <div className="max-w-3xl mx-auto p-8 bg-white shadow rounded-lg">
      <h1 className="text-4xl font-semibold mb-6 text-center text-blue-600">Risk Trade Blog Post</h1>
      <div className="space-y-6">

        {/* Title Section */}
        <section>
          <h2 className="text-3xl font-bold text-gray-800">Currency Pair: {riskTrade.currency_pair}</h2>
          <p className="text-lg text-gray-600 italic">A comprehensive analysis of the trade risk and reward factors.</p>
        </section>

        {/* Risk and Gain Section */}
        <section className="space-y-4">
          <h3 className="text-2xl font-semibold text-gray-800">Risk and Gain Breakdown</h3>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <p className="font-medium text-gray-700">Risk (Pips): <span className="text-gray-600">{riskTrade.risk_pips}</span></p>
              <p className="font-medium text-gray-700">Risk (USD): <span className="text-gray-600">${riskTrade.risk_dollars}</span></p>
              <p className="font-medium text-gray-700">Risk (TZS): <span className="text-gray-600">{riskTrade.risk_tsh} TZS</span></p>
            </div>
            <div>
              <p className="font-medium text-gray-700">Gain (Pips): <span className="text-gray-600">{riskTrade.gain_pips}</span></p>
              <p className="font-medium text-gray-700">Gain (USD): <span className="text-gray-600">${riskTrade.gain_dollars}</span></p>
              <p className="font-medium text-gray-700">Gain (TZS): <span className="text-gray-600">{riskTrade.gain_tsh} TZS</span></p>
            </div>
          </div>
        </section>

        {/* Chart Section - Arrange images in a top row */}
        <section className="space-y-4">
          <h3 className="text-2xl font-semibold text-gray-800">Visual Analysis</h3>
          <div className="flex justify-between gap-4">
            {riskTrade.mt5_chart && (
              <div className="flex-1">
                <h4 className="font-medium text-gray-700">MT5 Chart</h4>
                <img
                  src={riskTrade.mt5_chart}
                  alt="MT5 Chart"
                  className="w-full h-auto border rounded-md shadow-lg cursor-pointer"
                  onClick={() => openModal(0)}
                />
              </div>
            )}
            {riskTrade.tradeview_chart && (
              <div className="flex-1">
                <h4 className="font-medium text-gray-700">TradeView Chart</h4>
                <img
                  src={riskTrade.tradeview_chart}
                  alt="TradeView Chart"
                  className="w-full h-auto border rounded-md shadow-lg cursor-pointer"
                  onClick={() => openModal(1)}
                />
              </div>
            )}
            {riskTrade.mt5_positions && (
              <div className="flex-1">
                <h4 className="font-medium text-gray-700">MT5 Positions</h4>
                <img
                  src={riskTrade.mt5_positions}
                  alt="MT5 Positions"
                  className="w-full h-auto border rounded-md shadow-lg cursor-pointer"
                  onClick={() => openModal(2)}
                />
              </div>
            )}
          </div>
        </section>

        {/* Conclusion and Back Button */}
        <section className="mt-6 text-center">
          <p className="text-xl text-gray-800">This risk trade is one of many that we analyze for potential market movements and gains. Understanding these trades can significantly improve your strategy.</p>
          <button
            onClick={() => navigate('/risk-trade')} // Go back to the risk trade list
            className="mt-4 px-6 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition duration-200"
          >
            Back to Risk Trades
          </button>
        </section>
      </div>

      {/* Modal for Image Viewing */}
      {modalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50 modal-overlay"
          onClick={handleModalClick} // Close on overlay click
        >
          <div className="relative max-w-3xl w-full bg-white p-8 rounded-lg shadow-lg">
            <button
              className="absolute top-0 right-0 mt-4 mr-4 text-white text-xl"
              onClick={closeModal}
            >
              &times;
            </button>
            <img
              src={images[currentImageIndex]}
              alt="Modal Image"
              className="w-full h-auto border rounded-md shadow-lg"
            />
            <div className="flex justify-between mt-4">
              <button
                onClick={prevImage}
                disabled={currentImageIndex === 0}
                className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 disabled:bg-gray-300"
              >
                Prev
              </button>
              <button
                onClick={nextImage}
                disabled={currentImageIndex === images.length - 1}
                className="px-4 py-2 bg-gray-600 text-white rounded-md hover:bg-gray-700 disabled:bg-gray-300"
              >
                Next
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default RiskTradeDetails;
