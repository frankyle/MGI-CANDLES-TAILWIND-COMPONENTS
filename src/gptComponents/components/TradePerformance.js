import React from "react";

const TradePerformance = ({ wins, losses }) => {
  return (
    <div className="bg-gray-100 p-4 rounded shadow-lg">
      <h3 className="text-lg font-bold">Trade Performance</h3>
      <p className="text-green-500">Wins: {wins}</p>
      <p className="text-red-500">Losses: {losses}</p>
    </div>
  );
};

export default TradePerformance;
