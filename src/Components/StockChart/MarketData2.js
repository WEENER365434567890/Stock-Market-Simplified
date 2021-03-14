import React, { useEffect, useState } from "react";
import "./MarketData.css";
import MarketWinners from "./MarketWinners";
import MarketLosers from "./MarketLosers";

function MarketData2() {
  return (
    <div className="marketdata">
      <div className="marketdata_data">
        <MarketWinners />
      </div>
      <div className="marketdata_data">
        <MarketLosers />
      </div>
    </div>
  );
}

export default MarketData2;
