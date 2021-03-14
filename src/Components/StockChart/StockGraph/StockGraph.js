import React, { useState, useEffect } from "react";
import ChartJS from "./Chart";
import fetchdata from "./Utls.js";
import { useStateValue } from "../../../Context/StateProvider";
import "./StockGraph.css";

const StockGraph = () => {
  const [{ symbol }, dispatch] = useStateValue();
  const [chartsToDisplay, setChartsToDisplay] = useState([]);
  const [Data, setData] = useState(null);

  const calling = async () => {
    const response = await fetchdata(symbol);
    setData(response);
  };

  useEffect(() => {
    calling();
  }, [symbol]);

  /*  const getData = async () => {
    const charts = [];
    charts.push(<ChartJS key={1} data={Data} />);
    setChartsToDisplay(charts);
  };

  if (Data) {
    getData();
  } */

  return (
    <div className="stockgraph">
      <button>TESTING </button>
      {/* chartsToDisplay */ Data ? <ChartJS key={1} data={Data} /> : null}
    </div>
  );
};

export default StockGraph;
