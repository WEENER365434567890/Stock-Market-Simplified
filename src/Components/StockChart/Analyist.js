import Axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useStateValue } from "../../Context/StateProvider";
import { API_KEY_finn } from "../../Data/Keys";
import "./Analyist.css";
import axios from "axios";
import { Bubble, Line, Bar, Scatter } from "react-chartjs-2";

function Analyist() {
  const [{ symbol }, dispatch] = useStateValue();
  const [data, setData] = useState({});
  const month = [];
  const strongSell = [];
  const sell = [];
  const hold = [];
  const buy = [];
  const strongBuy = [];
  const [load, setLoad] = useState([]);

  useEffect(() => {
    chartIt();
  }, [symbol]);

  const fetchAnalyist = async () => {
    try {
      const response = await axios.get(
        `https://finnhub.io/api/v1/stock/recommendation?symbol=${symbol}&token=${API_KEY_finn}`
      );

      for (var date in response.data) {
        month.push(response.data[date].period);
        strongBuy.push(response.data[date].strongBuy);
        buy.push(response.data[date].buy);
        hold.push(response.data[date].hold);
        sell.push(response.data[date].sell);
        strongSell.push(response.data[date].strongSell);
      }
      setLoad(buy);
    } catch (error) {
      console.log(error);
    }
  };

  const chartIt = async () => {
    await fetchAnalyist();
    setData({
      labels: [month[0], month[1], month[2], month[3], month[4], month[5]],
      datasets: [
        {
          label: "Strong Sell",
          data: [
            strongSell[0],
            strongSell[1],
            strongSell[2],
            strongSell[3],
            strongSell[4],
            strongSell[5],
          ],
          backgroundColor: "#813131",
        },
        {
          label: "Sell",
          data: [sell[0], sell[1], sell[2], sell[3], sell[4], sell[5]],
          backgroundColor: "#F45B5B",
        },
        {
          label: "Hold",
          data: [hold[0], hold[1], hold[2], hold[3], hold[4], hold[5]],
          backgroundColor: "#bdbd1f",
        },
        {
          label: "Buy",
          data: [buy[0], buy[1], buy[2], buy[3], buy[4], buy[5]],
          backgroundColor: "#4dce0d",
        },
        {
          label: "Strong Buy",
          data: [
            strongBuy[0],
            strongBuy[1],
            strongBuy[2],
            strongBuy[3],
            strongBuy[4],
            strongBuy[5],
          ],
          backgroundColor: "#205606",
        },
      ],
    });
  };

  const options = {
    scales: {
      yAxes: [
        {
          stacked: true,
          ticks: {
            beginAtZero: true,
          },
        },
      ],
      xAxes: [
        {
          stacked: true,
        },
      ],
    },
  };

  if (load === undefined || load.length === 0) {
    return <div>Unfortunately, there is no analyist data for {symbol}</div>;
  } else {
    return (
      <div className="analysit">
        <p> Analyst Recommendation</p>
        <Bar data={data} options={options} />
      </div>
    );
  }
}

export default Analyist;
