import React, { useState, useEffect } from "react";
import StockGraphData from "./StockGraphData";
import Output from "./StockGraphData";

const StockGraph2 = () => {
  const [chartsToDisplay, setChartsToDisplay] = useState([]);

  const getData = async () => {
    const charts = [];
    charts.push(<StockGraphData key={1} data={Output} />);
    setChartsToDisplay(charts);
  };

  useEffect(() => {
    getData();
  }, []);

  return <div className="App">{chartsToDisplay}</div>;
};

export default StockGraph2;
