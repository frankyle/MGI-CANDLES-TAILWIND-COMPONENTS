import React, { useState, useEffect } from 'react';
import axiosInstance from '../../auth/axiosInstance';
import { useNavigate, useParams } from 'react-router-dom';

const TradeDetailsView = () => {
  const [trade, setTrade] = useState(null);
  const [modalOpen, setModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTradeDetails = async () => {
      try {
        const response = await axiosInstance.get(`/api/tradedetails/tradedetails/${id}/`);
        if (response.data) {
          setTrade(response.data);
        } else {
          console.error('No trade data found for this ID');
        }
      } catch (error) {
        console.error('Error fetching trade details:', error);
      }
    };

    fetchTradeDetails();
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

  if (!trade) {
    return <div>Loading...</div>;
  }

  const imageFields = {
    idea_candle: 'This candle formed the base of my trade idea. I noticed strong price action and structure here.',
    idea_candle_two: 'A second validation — this confirmed the earlier idea with a continuation pattern.',
    youtube_candle: 'Captured this for educational content — it shows where I explained this setup on YouTube.',
    daily_candle: 'The daily candle showed clear direction; this helped align my trade with the higher timeframe trend.',
    signal_candle: 'This is where the actual trade signal triggered. Entry was prepared shortly after.',
    entry_candle: 'Zoomed in — this candle shows the exact moment I entered the market.',
    line_graph_candle: 'Overlayed this with my strategy lines and indicators for a clearer technical view.',
    hour_candle: 'The 1-hour timeframe added confluence — strong support/resistance aligned here.',
    four_hour_candle: 'On the 4H chart, I noticed a beautiful breakout retest forming.',
    two_hour_candle: 'The 2H candle was the bridge between intraday and swing decision. It confirmed momentum.',
    breakeven_candle: 'This candle marks when I moved my stop loss to breakeven to protect the trade.',
    take_profit_one_candle: 'Price hit the first take profit level. Partials were secured here.',
    take_profit_two_candle: 'Final TP — a strong push in favor, and I exited completely.',
    stoploss_candle: 'If this candle was hit, the trade would have failed. Luckily, it wasn’t triggered.',
  };

  const imageUrls = Object.entries(imageFields)
    .map(([key, description]) => ({
      url: trade[key],
      label: key.replace(/_/g, ' ').replace(/\b\w/g, c => c.toUpperCase()),
      description,
    }))
    .filter(({ url }) => url);

  return (
    <div className="prose lg:prose-xl p-4 max-w-4xl mx-auto">
      <h1 className="text-4xl font-bold mb-2">📈 Weekly Trade Breakdown: {trade.currency_pair}</h1>
      <p className="text-gray-600 italic mb-6">Published on {formatDate(trade.created_at)}</p>

      <p>
        This week, I took a position on <strong>{trade.currency_pair}</strong> based on a well-structured idea that formed
        over the higher timeframes. In this post, I’ll walk you through each step of the trade — from the idea to execution
        — with annotated images of the setup.
      </p>

      <div className="bg-gray-100 p-4 rounded-lg mb-6">
        <p><strong>🧠 Idea Name:</strong> {trade.traders_idea_name}</p>
        <p><strong>📢 Trade Signal:</strong> {trade.trade_signal}</p>
        <p><strong>🔍 Status:</strong>{' '}
          <span className={`px-2 py-1 rounded ${trade.is_active ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
            {trade.is_active ? 'Active' : 'Inactive'}
          </span>
        </p>
      </div>

      <h2 className="text-2xl font-semibold my-6">🕯 Candle-by-Candle Breakdown</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        {imageUrls.map((img, index) => (
          <div key={index} className="bg-white border rounded-lg shadow p-4">
            <img
              src={img.url}
              alt={img.label}
              className="w-full h-64 object-contain cursor-pointer mb-4"
              onClick={() => openModal(index)}
            />
            <h3 className="text-lg font-bold">{img.label}</h3>
            <p>{img.description}</p>
          </div>
        ))}
      </div>

      <div className="mt-12 flex gap-4">
        <button
          onClick={() => navigate('/trade-details')}
          className="px-4 py-2 bg-blue-500 text-white rounded-full hover:bg-blue-600"
        >
          ← Back to All Trades
        </button>

        <button
          onClick={() => navigate(`/trade-details-edit/${id}`)}
          className="px-4 py-2 bg-orange-500 text-white rounded-full hover:bg-orange-600"
        >
          ✏️ Edit This Trade
        </button>
      </div>

      {/* Modal for zoomed image view */}
      {modalOpen && (
        <div
          className="fixed inset-0 bg-black bg-opacity-60 flex justify-center items-center z-50"
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

export default TradeDetailsView;
