import React, { useState, useEffect } from 'react';
import axiosInstance from '../../auth/axiosInstance';
import { useNavigate, useParams } from 'react-router-dom';

const TradeReasonsView = () => {
  const [trade, setTrade] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTradeDetails = async () => {
      try {
        const response = await axiosInstance.get(`/api/tradereasons/tradereasons/${id}/`);
        setTrade(response.data);
      } catch (error) {
        console.error('Error fetching trade reasons:', error);
      }
    };
    fetchTradeDetails();
  }, [id]);

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-GB', {
      weekday: 'long',
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
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prev) => (prev + 1) % imageUrls.length);
  };

  const handlePrevImage = () => {
    setCurrentImageIndex((prev) => (prev - 1 + imageUrls.length) % imageUrls.length);
  };

  const imageFields = {
    idea_candle: 'Idea Candle',
    idea_candle_two: 'Idea Candle Two',
    youtube_candle: 'YouTube Candle',
    volumetic_rejection_candle: 'Volumetric Rejection Candle',
    fibonnaci_candle: 'Fibonacci Candle',
    ICT_killzone_candle: 'ICT Killzone Candle',
    ichimoku_candle: 'Ichimoku Candle',
    ema_cross_alert_candle: 'EMA Cross Alert Candle',
    ICT_institutional_order_candle: 'ICT Institutional Order Candle',
    daily_high_low_candle: 'Daily High/Low Candle',
    all_indicators_candle: 'All Indicators Candle',
    blog_trade_post_candle: 'Blog Trade Post Candle',
    blog_mt5_post_candle: 'Blog MT5 Post Candle',
    stoploss_candle: 'Stop Loss Candle',
  };

  const imageUrls = Object.entries(imageFields)
    .map(([key, label]) => ({ url: trade?.[key], label }))
    .filter(({ url }) => url);

  if (!trade) {
    return <div className="text-center text-gray-500 mt-16 text-lg">Loading trade details...</div>;
  }

  return (
    <div className="max-w-6xl mx-auto px-4 py-10">
      <h1 className="text-4xl font-bold text-gray-900 mb-2">📈 {trade.currency_pair} - Trade Breakdown</h1>
      <p className="text-lg text-gray-600 mb-8">A deep dive into this trade's logic, setup, and visual confirmation tools.</p>

      <section className="border-t border-gray-200 pt-6 mb-10">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">🧾 Trade Summary</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-gray-700 text-base">
          <p><strong>Pair:</strong> {trade.currency_pair}</p>
          <p><strong>Idea Name:</strong> {trade.traders_idea_name}</p>
          <p><strong>Signal:</strong> {trade.trade_signal}</p>
          <p>
            <strong>Status:</strong>
            <span className={`ml-2 px-3 py-1 rounded-full text-white ${trade.is_active ? 'bg-green-600' : 'bg-red-600'}`}>
              {trade.is_active ? 'Active' : 'Inactive'}
            </span>
          </p>
          <p><strong>Posted On:</strong> {formatDate(trade.created_at)}</p>
        </div>
      </section>

      <section className="border-t border-gray-200 pt-6 mb-12">
        <h2 className="text-2xl font-semibold mb-4 text-gray-800">🖼️ Candle Confirmations</h2>
        <p className="text-gray-600 mb-6 text-sm">
          These candles are used to validate the trading idea with various confirmations across indicators and price structure.
        </p>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-6">
          {Object.entries(imageFields).map(([key, label], index) => (
            <div key={key} className="text-center">
              <p className="text-sm font-medium mb-1 text-gray-700">{label}</p>
              {trade[key] ? (
                <img
                  src={trade[key]}
                  alt={label}
                  onClick={() => openModal(index)}
                  className="w-full h-28 object-cover rounded-lg shadow cursor-pointer hover:scale-105 hover:shadow-lg transition-transform duration-200 ease-in-out"
                />
              ) : (
                <p className="text-gray-400 text-sm italic">No image available</p>
              )}
            </div>
          ))}
        </div>
      </section>

      <div className="flex flex-wrap gap-4">
        <button
          onClick={() => navigate('/trade-reasons')}
          className="px-6 py-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition"
        >
          ← Back to List
        </button>
        <button
          onClick={() => navigate(`/trade-reasons-edit/${id}`)}
          className="px-6 py-2 bg-yellow-500 text-white rounded-full hover:bg-yellow-600 transition"
        >
          ✏️ Edit Trade Entry
        </button>
      </div>

      {modalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50"
          onClick={closeModal}
        >
          <div
            className="bg-white p-6 rounded-xl w-full max-w-3xl max-h-[90vh] overflow-auto relative shadow-lg"
            onClick={(e) => e.stopPropagation()}
          >
            <h3 className="text-xl font-semibold text-center mb-4 text-gray-800">
              {imageUrls[currentImageIndex]?.label}
            </h3>
            <img
              src={imageUrls[currentImageIndex]?.url}
              alt={imageUrls[currentImageIndex]?.label}
              className="max-w-full max-h-[70vh] mx-auto object-contain"
            />
            <button
              className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
              onClick={handlePrevImage}
              disabled={imageUrls.length <= 1}
            >
              &lt;
            </button>
            <button
              className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full"
              onClick={handleNextImage}
              disabled={imageUrls.length <= 1}
            >
              &gt;
            </button>
            <button
              onClick={closeModal}
              className="absolute top-4 right-4 text-gray-600 hover:text-red-600 text-xl font-bold"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default TradeReasonsView;
