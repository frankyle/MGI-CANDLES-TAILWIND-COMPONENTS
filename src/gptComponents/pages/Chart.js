import React, { useEffect, useRef } from "react";

function Chart({ symbol }) {
  const chartContainerRef = useRef();

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://s3.tradingview.com/tv.js";
    script.async = true;
    script.onload = () => {
      new window.TradingView.widget({
        width: "100%",
        height: 400,
        symbol: symbol,
        interval: "D",
        timezone: "Etc/UTC",
        theme: "light",
        style: "1",
        locale: "en",
        toolbar_bg: "#f1f3f6",
        enable_publishing: false,
        allow_symbol_change: true,
        container_id: "tradingview_chart",
      });
    };
    chartContainerRef.current.appendChild(script);

    return () => {
      // Cleanup if needed
    };
  }, [symbol]);

  return <div ref={chartContainerRef} id="tradingview_chart"></div>;
}

export default Chart;