import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";
import TradePerformance from "../components/TradePerformance";
import TradeRecordsClientsTable from "../../MGI/TradeRecordsClientsTable";
import WeelkyReport from "../../MGI/WeeklyReport";

const tradeData = [
  { date: "Mar 1", profit: 50 },
  { date: "Mar 2", profit: -20 },
  { date: "Mar 3", profit: 30 },
  { date: "Mar 4", profit: -10 },
  { date: "Mar 5", profit: 40 },
  { date: "Mar 6", profit: -30 },
  { date: "Mar 7", profit: 60 },
];

const recentTrades = [
  { id: 1, pair: "EUR/USD", result: "Win", profit: "+$50" },
  { id: 2, pair: "GBP/USD", result: "Loss", profit: "-$20" },
  { id: 3, pair: "USD/JPY", result: "Win", profit: "+$30" },
  { id: 4, pair: "AUD/USD", result: "Loss", profit: "-$10" },
];

const TradeTracker = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold text-center mb-6">Trade Performance Tracker</h1>
     
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Overall Performance</h2>
        <TradePerformance wins={10} losses={3} />
      </div>
      
      <div className="bg-white shadow-md rounded-lg p-6 mb-6">
        <h2 className="text-xl font-semibold mb-4">Recent Trades</h2>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="border-b p-2">Currency Pair</th>
              <th className="border-b p-2">Result</th>
              <th className="border-b p-2">Profit/Loss</th>
            </tr>
          </thead>
          <tbody>
            {recentTrades.map((trade) => (
              <tr key={trade.id}>
                <td className="border-b p-2">{trade.pair}</td>
                <td className={`border-b p-2 ${trade.result === "Win" ? "text-green-600" : "text-red-600"}`}>{trade.result}</td>
                <td className={`border-b p-2 ${trade.profit.includes("+") ? "text-green-600" : "text-red-600"}`}>{trade.profit}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      
      <div className="bg-white shadow-md rounded-lg p-6">
        <h2 className="text-xl font-semibold mb-4">Profit/Loss Over Time</h2>
        <ResponsiveContainer width="100%" height={300}>
          <LineChart data={tradeData}>
            <CartesianGrid strokeDasharray="3 3" />
            <XAxis dataKey="date" />
            <YAxis />
            <Tooltip />
            <Line type="monotone" dataKey="profit" stroke="#8884d8" strokeWidth={2} />
          </LineChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};

export default TradeTracker;
