import React, { useEffect, useState } from "react";
import "./StockGraph.css";
import Chart from "./StochasticOscillator";
import { getData } from "./utils";
import { useStateValue } from "../../../Context/StateProvider";

function StockGraph() {
  const [{ symbol }, dispatch] = useStateValue();
  const [data, setData] = useState(null);
  const calling = async () => {
    const response = await getData(symbol);
    setData(response);
  };

  useEffect(() => {
    calling();
  }, [symbol]);

  if (data === null) {
    return <div>Loading...</div>;
  }
  return (
    <div className="stockgraph">
      <button>TESTING</button>
      <Chart data={data} />
    </div>
  );
}

export default StockGraph;
