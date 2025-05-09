import React, { useState, useEffect } from 'react';
import axiosInstance from '../../../../Material-Tailwind-Dashboard/src/pages/auth/axiosInstance';
import { FaEye } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const TradeRecordsClientsTable = () => {
  const [riskTrades, setRiskTrades] = useState([]);
  const [modalOpen, setModalOpen] = useState(false);
  const [selectedTrade, setSelectedTrade] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRiskTrades = async () => {
      try {
        const response = await axiosInstance.get('/api/risktrades/risktrades/');
        console.log('API Response:', response.data);
        setRiskTrades(response.data.results);
      } catch (error) {
        console.error('Error fetching risk trades:', error);
      }
    };

    fetchRiskTrades();
  }, []);

  const openModal = (trade) => {
    setSelectedTrade(trade);
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
    setSelectedTrade(null);
  };

  const handleView = (id) => {
    navigate(`/risk-trade-view/${id}`);
  };

  return (
    <div className="overflow-x-auto shadow-md sm:rounded-lg">
      <h2 className="text-lg font-semibold text-gray-800 mb-2">Latest Trade Records</h2>
      <p className="text-sm text-gray-600 mb-4">
        Here you can find the latest trades we have made, including details on currency pairs, risk, and gains. 
        Click on the images to view charts, and use the eye icon to explore more trade details.
      </p>
      <table className="min-w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th className="px-6 py-3">Date</th>
            <th className="px-6 py-3">Week Day</th>
            <th className="px-6 py-3">Currency Pair</th>
            <th className="px-6 py-3">Risk (Pips)</th>
            <th className="px-6 py-3">Gain (Pips)</th>
            <th className="px-6 py-3">MT5 Chart</th>
            <th className="px-6 py-3">TradeView Chart</th>
            <th className="px-6 py-3">MT5 Positions</th>
            <th className="px-6 py-3">Actions</th>
          </tr>
        </thead>
        <tbody>
          {Array.isArray(riskTrades) && riskTrades.length > 0 ? (
            riskTrades.map((trade) => (
              <tr key={trade.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">

                <td className="px-6 py-4 text-black">{trade.date}</td>
                <td className="px-6 py-4 text-black">{trade.day_name}</td>
                <td className="px-6 py-4 text-black">{trade.currency_pair}</td>
                <td className="px-6 py-4 text-black">{trade.risk_pips}</td>
                <td className="px-6 py-4 text-black">{trade.gain_pips}</td>
                <td className="px-6 py-4 text-black">
                  {trade.mt5_chart && (
                    <img
                      src={trade.mt5_chart}
                      alt="MT5 Chart"
                      className="w-24 h-24 object-contain cursor-pointer"
                      onClick={() => openModal(trade)}
                    />
                  )}
                </td>
                <td className="px-6 py-4">
                  {trade.tradeview_chart && (
                    <img
                      src={trade.tradeview_chart}
                      alt="TradeView Chart"
                      className="w-24 h-24 object-contain cursor-pointer"
                      onClick={() => openModal(trade)}
                    />
                  )}
                </td>
                <td className="px-6 py-4">
                  {trade.mt5_positions && (
                    <img
                      src={trade.mt5_positions}
                      alt="MT5 Positions"
                      className="w-24 h-24 object-contain cursor-pointer"
                      onClick={() => openModal(trade)}
                    />
                  )}
                </td>
                <td className="px-6 py-4">
                  <button onClick={() => handleView(trade.id)} className="text-yellow-500 hover:text-yellow-700" title="View Risk Trade">
                    <FaEye size={20} />
                  </button>
                </td>
              </tr>
            ))
          ) : (
            <tr>
              <td colSpan="10" className="text-center py-4">No trade records available.</td>
            </tr>
          )}
        </tbody>
      </table>

      {modalOpen && selectedTrade && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-50" onClick={closeModal}>
          <div className="bg-white p-4 rounded-lg max-w-full max-h-full overflow-auto" onClick={(e) => e.stopPropagation()}>
            <img src={selectedTrade.mt5_chart} alt="MT5 Chart" className="max-w-full max-h-screen object-contain" />
            {selectedTrade.tradeview_chart && (
              <img src={selectedTrade.tradeview_chart} alt="TradeView Chart" className="max-w-full max-h-screen object-contain mt-4" />
            )}
            {selectedTrade.mt5_positions && (
              <img src={selectedTrade.mt5_positions} alt="MT5 Positions" className="max-w-full max-h-screen object-contain mt-4" />
            )}
            <div className="mt-4">
              <h2 className="text-xl font-semibold">{selectedTrade.currency_pair}</h2>
              <p><strong>Risk:</strong> {selectedTrade.risk_pips} pips</p>
              <p><strong>Gain:</strong> {selectedTrade.gain_pips} pips</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default TradeRecordsClientsTable;
