import React, { useState, useEffect } from 'react';
import axiosInstance from '../../auth/axiosInstance';
import { FaEdit, FaTrashAlt, FaLightbulb, FaSortUp, FaSortDown } from 'react-icons/fa'; // Import icons
import CreateButton from '../../../utils/CreateButton';
import { useNavigate } from 'react-router-dom';
import TradeDetailsModal from '../../../utils/TradeDetailsModal';

const TradeReasonsTable = () => {
  const [tradeReasons, setTradeReasons] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedImage, setSelectedImage] = useState(null);
  const [sortConfig, setSortConfig] = useState({ key: 'currency_pair', direction: 'ascending' });
  const navigate = useNavigate();

  useEffect(() => {
    const fetchTradeReasons = async () => {
      try {
        const response = await axiosInstance.get('/api/tradereasons/tradereasons/');
        if (response.data && Array.isArray(response.data.results)) {
          const sortedTrades = sortData(response.data.results);
          setTradeReasons(sortedTrades);
        } else {
          console.error('Unexpected response format:', response.data);
        }
      } catch (error) {
        console.error('Error fetching trade reasons:', error);
      }
    };

    fetchTradeReasons();
  }, []);

  const sortData = (data) => {
    const sortedData = [...data];
    sortedData.sort((a, b) => {
      if (a[sortConfig.key] < b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? -1 : 1;
      }
      if (a[sortConfig.key] > b[sortConfig.key]) {
        return sortConfig.direction === 'ascending' ? 1 : -1;
      }
      return 0;
    });
    return sortedData;
  };

  const handleSort = (key) => {
    let direction = 'ascending';
    if (sortConfig.key === key && sortConfig.direction === 'ascending') {
      direction = 'descending';
    }
    setSortConfig({ key, direction });
    setTradeReasons((prevTradeReasons) => sortData(prevTradeReasons));
  };

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString('en-GB', {
      weekday: 'short',
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  };

  const openModal = (imageUrl) => {
    setSelectedImage(imageUrl);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedImage(null);
  };

  const handleTradingIdea = (id) => {
    console.log('Navigating to trade reasons with ID:', id);
    navigate(`/trade-reasons/${id}`);
  };

  const handleEdit = (id) => {
    navigate(`/trade-reasons-edit/${id}`);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this trade?')) {
      try {
        await axiosInstance.delete(`/api/tradereasons/tradereasons/${id}/`);
        setTradeReasons((prev) => prev.filter((trade) => trade.id !== id));
        alert('Trade deleted successfully.');
      } catch (error) {
        console.error('Error deleting trade:', error);
        alert('Failed to delete trade.');
      }
    }
  };

  return (
    <div className="overflow-x-auto shadow-md sm:rounded-lg">
      <CreateButton text="Create Trading Reason" redirectTo="/trade-reasons-create" />
      <table className="min-w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3"><strong>S/N</strong></th>
            <th scope="col" className="px-6 py-3 cursor-pointer" onClick={() => handleSort('currency_pair')}>
              Currency Pair {sortConfig.key === 'currency_pair' && (sortConfig.direction === 'ascending' ? <FaSortUp /> : <FaSortDown />)}
            </th>
            <th scope="col" className="px-6 py-3">Traders Idea Name</th>
            <th scope="col" className="px-6 py-3">Trade Signal</th>
            <th scope="col" className="px-6 py-3">Status</th>
            <th scope="col" className="px-6 py-3">Tradeview Idea</th>
            <th scope="col" className="px-6 py-3">Tradeview Idea Two</th>
            <th scope="col" className="px-6 py-3">Youtube Idea</th>
            <th scope="col" className="px-6 py-3">Volumetic Rejection Candle</th>
            <th scope="col" className="px-6 py-3">Fibonnaci Candle</th>
            <th scope="col" className="px-6 py-3">Order block & Breaker</th>
            <th scope="col" className="px-6 py-3">Daily High Low Candle(15min)</th>
            <th scope="col" className="px-6 py-3">ICT Killzone Candle</th>
            <th scope="col" className="px-6 py-3">UT Alert Candle</th>
            <th scope="col" className="px-6 py-3">ICT FVG/Inv FVG(15min/30min)</th>
            <th scope="col" className="px-6 py-3">All Indicators Candle</th>
            <th scope="col" className="px-6 py-3">Blog Trade Post Candle</th>
            <th scope="col" className="px-6 py-3">Blog Mt5 Post Candle</th>
            <th scope="col" className="px-6 py-3">Stop Loss Candle</th>
            <th scope="col" className="px-6 py-3">Created At</th>
          </tr>
        </thead>
        <tbody>
          {tradeReasons.map((trade, index) => (
            <tr key={trade.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
              <td className="px-6 py-4 text-black">{index + 1}</td>
              <td className="px-6 py-4 text-black font-bold">{trade.currency_pair}</td>
              <td className="px-6 py-4 text-black">{trade.traders_idea_name}</td>
              <td className={`px-6 py-4 ${trade.trade_signal === 'BUYS' ? 'text-blue-500' : trade.trade_signal === 'SELLS' ? 'text-red-500' : 'text-black'}`}>
                {trade.trade_signal}
              </td>
              <td className="px-6 py-4">
                <span className={`px-2 py-1 ${trade.is_active ? 'bg-green-500 text-white' : 'bg-red-500 text-white'}`}>
                  {trade.is_active ? 'Active' : 'Inactive'}
                </span>
              </td>
              <td className="px-6 py-4">
                <img
                  src={trade.idea_candle}
                  alt="Tradeview Idea"
                  className="w-24 h-24 object-contain cursor-pointer"
                  onClick={() => openModal(trade.idea_candle)}
                />
              </td>
              <td className="px-6 py-4">
                <img
                  src={trade.idea_candle_two}
                  alt="Tradeview Idea Two"
                  className="w-24 h-24 object-contain cursor-pointer"
                  onClick={() => openModal(trade.idea_candle_two)}
                />
              </td>
              <td className="px-6 py-4">
                <img
                  src={trade.youtube_candle}
                  alt="Youtube Idea"
                  className="w-24 h-24 object-contain cursor-pointer"
                  onClick={() => openModal(trade.youtube_candle)}
                />
              </td>
              <td className="px-6 py-4">
                <img
                  src={trade.volumetic_rejection_candle}
                  alt="Volumetic Rejection Candle"
                  className="w-24 h-24 object-contain cursor-pointer"
                  onClick={() => openModal(trade.volumetic_rejection_candle)}
                />
              </td>
              <td className="px-6 py-4">
                <img
                  src={trade.fibonnaci_candle}
                  alt="Fibonnaci Candle"
                  className="w-24 h-24 object-contain cursor-pointer"
                  onClick={() => openModal(trade.fibonnaci_candle)}
                />
              </td>
              <td className="px-6 py-4">
                <img
                  src={trade.ichimoku_candle}
                  alt="Order block & Breaker"
                  className="w-24 h-24 object-contain cursor-pointer"
                  onClick={() => openModal(trade.ichimoku_candle)}
                />
              </td>
              <td className="px-6 py-4">
                <img
                  src={trade.daily_high_low_candle}
                  alt="Daily High Low Candle"
                  className="w-24 h-24 object-contain cursor-pointer"
                  onClick={() => openModal(trade.daily_high_low_candle)}
                />
              </td>
              <td className="px-6 py-4">
                <img
                  src={trade.ICT_killzone_candle}
                  alt="ICT Killzone Candle"
                  className="w-24 h-24 object-contain cursor-pointer"
                  onClick={() => openModal(trade.ICT_killzone_candle)}
                />
              </td>
              
              <td className="px-6 py-4">
                <img
                  src={trade.ema_cross_alert_candle}
                  alt="UT Alert Candle"
                  className="w-24 h-24 object-contain cursor-pointer"
                  onClick={() => openModal(trade.ema_cross_alert_candle)}
                />
              </td>
              <td className="px-6 py-4">
                <img
                  src={trade.ICT_institutional_order_candle}
                  alt="ICT Institutional Order Candle"
                  className="w-24 h-24 object-contain cursor-pointer"
                  onClick={() => openModal(trade.ICT_institutional_order_candle)}
                />
              </td>
             
              <td className="px-6 py-4">
                <img
                  src={trade.all_indicators_candle}
                  alt="All Indicators Candle"
                  className="w-24 h-24 object-contain cursor-pointer"
                  onClick={() => openModal(trade.all_indicators_candle)}
                />
              </td>
              <td className="px-6 py-4">
                <img
                  src={trade.blog_trade_post_candle}
                  alt="Blog Trade Post Candle"
                  className="w-24 h-24 object-contain cursor-pointer"
                  onClick={() => openModal(trade.blog_trade_post_candle)}
                />
              </td>
              <td className="px-6 py-4">
                <img
                  src={trade.blog_mt5_post_candle}
                  alt="Blog Mt5 Post Candle"
                  className="w-24 h-24 object-contain cursor-pointer"
                  onClick={() => openModal(trade.blog_mt5_post_candle)}
                />
              </td>
              <td className="px-6 py-4">
                <img
                  src={trade.stoploss_candle}
                  alt="Stop Loss Candle"
                  className="w-24 h-24 object-contain cursor-pointer"
                  onClick={() => openModal(trade.stoploss_candle)}
                />
              </td>
              <td className="px-6 py-4">{formatDate(trade.created_at)}</td>
              <td className="px-6 py-4 flex space-x-4">
                <button
                  onClick={() => handleTradingIdea(trade.id)}
                  className="text-yellow-500 hover:text-yellow-700"
                  title="View Trading Idea"
                >
                  <FaLightbulb size={20} />
                </button>
                <button
                  onClick={() => handleEdit(trade.id)}
                  className="text-blue-500 hover:text-blue-700"
                  title="Edit"
                >
                  <FaEdit size={20} />
                </button>
                <button
                  onClick={() => handleDelete(trade.id)}
                  className="text-red-500 hover:text-red-700"
                  title="Delete"
                >
                  <FaTrashAlt size={20} />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Image Modal */}
      <TradeDetailsModal isOpen={modalOpen} imageUrl={selectedImage} onClose={closeModal} />
    </div>
  );
};

export default TradeReasonsTable;