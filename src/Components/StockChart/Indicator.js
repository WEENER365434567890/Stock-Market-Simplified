import React, { useState, useEffect } from "react";
import "./Indicator.css";
import { API_KEY_alpha } from "../../Data/Keys";
import { useStateValue } from "../../Context/StateProvider";
import axios from "axios";
import CurrencyFormat from "react-currency-format";

function Indicator() {
  const [{ symbol }, dispatch] = useStateValue();
  const [price, setPrice] = useState([]);

  useEffect(() => {
    fetchdata();
  }, [symbol]);

  const fetchdata = async () => {
    const response = await axios.get(
      `https://www.alphavantage.co/query?function=TIME_SERIES_INTRADAY&symbol=${symbol}&interval=5min&apikey=${API_KEY_alpha}`
    );

    for (var date in response.data["Time Series (5min)"]) {
      setPrice(response.data["Time Series (5min)"][date]["1. open"]);
    }
  };

  return (
    <div className="indicator">
      <span className="indicator_symbol">{symbol}</span>
      <span className="indicator_price"> {"$" + price}</span>
    </div>
  );
}

export default Indicator;
