import React, { useEffect, useState } from "react";
import axios from "axios";
import "./StockGraph.css";
import { Bubble, Line, Bar, Scatter } from "react-chartjs-2";
import * as Zoom from "chartjs-plugin-zoom";
import { useStateValue } from "../../Context/StateProvider";
import { API_KEY_alpha } from "../../Data/Keys";

function StockGraph() {
  const [{ symbol }, dispatch] = useStateValue();

  const [x_values, setX_values] = useState([]);
  const [y_values, setY_values] = useState([]);
  const [barData, setBardata] = useState(null);
  const [size, setSize] = useState("full");

  const [refresh, setRefresh] = useState(false);
  useEffect(() => {
    fetchStockGraph();
    setBardata(null);
  }, [symbol, refresh]);

  const fetchStockGraph = async () => {
    let x_chartvalues = [];
    let x_unformatted = [];
    let y_chartvalues = [];
    try {
      const response = await axios.get(
        `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${symbol}&outputsize=full&apikey=${API_KEY_alpha}`
      );
      console.log(response);
      for (var date in response.data["Time Series (Daily)"]) {
        x_unformatted.push(date);

        y_chartvalues.push(
          Number(response.data["Time Series (Daily)"][date]["1. open"])
        );
      }

      const date_changer = (date) => {
        let array = date.split("-");
        return array[1] + "/" + array[2] + "/" + array[0];
      };
      for (var i = 0; i < x_unformatted.length; i++) {
        x_chartvalues.push(date_changer(x_unformatted[i]));
      }

      setX_values(x_chartvalues.reverse());
      setY_values(y_chartvalues.reverse());

      const data = {
        labels: x_chartvalues,
        datasets: [
          {
            fill: true,
            lineTension: 0.1,
            backgroundColor: "rgba(75,192,192,0.4)",
            borderColor: "rgba(75,192,192,1)",
            borderCapStyle: "butt",
            borderDash: [],
            borderDashOffset: 0.0,
            borderJoinStyle: "miter",
            pointBorderColor: "rgba(75,192,192,1)",
            pointBackgroundColor: "rgba(75,192,192,1)",
            pointBorderWidth: 1,
            pointHoverRadius: 10,
            pointHoverBackgroundColor: "purple",
            pointHoverBorderColor: "rgba(220,220,220,1)",
            pointHoverBorderWidth: 10,
            pointRadius: 1,
            pointHitRadius: 20,
            data: y_chartvalues,
          },
        ],
      };
      setBardata(data);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="stockgraph">
      {barData === null ? null : (
        <Line
          data={barData}
          options={{
            legend: {
              display: true,
            },
            responsive: true,
            title: { text: { symbol }, display: false },
            scales: {
              yAxes: [
                {
                  ticks: {
                    autoSkip: true,
                    maxTicksLimit: 10,
                    beginAtZero: true,
                  },
                  gridLines: {
                    display: false,
                  },
                },
              ],
              xAxes: [
                {
                  gridLines: {
                    display: false,
                  },
                },
              ],
            },

            zoom: {
              enabled: true,

              drag: {
                borderColor: "black",
                borderWidth: 5,
                backgroundColor: "navy",
                animationDuration: 1250,
              },
              mode: "y",

              rangeMin: {
                x: null,
                y: null,
              },
              rangeMax: {
                x: null,
                y: null,
              },
              speed: 0.1,

              threshold: 2,

              sensitivity: 3,
            },
          }}
        />
      )}
      <button
        onClick={() => {
          setRefresh(!refresh);
        }}
      >
        CLICK ME TO RESSET
      </button>
      <h1>Hello</h1>
      <h1>{symbol}</h1>
    </div>
  );
}
export default StockGraph;
