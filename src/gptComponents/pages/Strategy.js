import React from "react";
import strategyImg from "./../../images/EURUSD_SELLS_30min.jpg"; // Example image path

function Strategy() {
  return (
    <section className="bg-gray-50 py-16 px-6">
      <div className="max-w-5xl mx-auto bg-white shadow-2xl rounded-lg overflow-hidden">
        <img src={strategyImg} alt="Trading Strategy" className="w-full h-80 object-cover" />
        <div className="p-8">
          <h2 className="text-4xl font-extrabold text-gray-900 text-center mb-6">My Trading Strategy</h2>
          <p className="text-lg text-gray-700 leading-relaxed mb-6">
            My trading strategy follows a structured, data-driven approach, identifying high-probability setups
            with precise technical analysis. By incorporating multiple indicators, I focus on strategic trade 
            execution while maintaining strict risk management. My approach is designed to capitalize on market trends
            while avoiding impulsive trading decisions.
          </p>
          
          <div className="grid md:grid-cols-2 gap-6">
            <div className="bg-blue-100 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-blue-900 mb-4">Key Components</h3>
              <ul className="list-disc list-inside text-lg text-gray-700 space-y-3">
                <li><strong>Exponential Moving Averages (EMA) Crossover:</strong> Identifies momentum shifts and trend reversals.</li>
                <li><strong>Fibonacci Retracement:</strong> Helps locate strong reversal zones and optimal entry points.</li>
                <li><strong>Weekly High and Low:</strong> Assists in tracking market structure and breakout levels.</li>
              </ul>
            </div>
            <div className="bg-green-100 p-6 rounded-lg shadow-md">
              <h3 className="text-2xl font-semibold text-green-900 mb-4">Risk & Execution</h3>
              <ul className="list-disc list-inside text-lg text-gray-700 space-y-3">
                <li><strong>Risk Management:</strong> Employing strict stop-loss strategies to protect capital.</li>
                <li><strong>Entry & Exit Strategies:</strong> Well-defined rules for entering and exiting trades.</li>
                <li><strong>Psychological Discipline:</strong> Eliminating emotional trading through a structured plan.</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Strategy;