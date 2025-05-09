import React from "react";
import { LineChart, Line, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer } from "recharts";
import TradePerformance from "../components/TradePerformance";
import TradeRecordsClientsTable from "../../MGI/TradeRecordsClientsTable";
import WeelkyReport from "../../MGI/WeeklyReport";
import CandleImages from "./CandlesImages/CandleImages";

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
      <CandleImages/>
    </div>
  );
};

export default TradeTracker;
