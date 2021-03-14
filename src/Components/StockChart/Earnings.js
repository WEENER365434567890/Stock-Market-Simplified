import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useStateValue } from "../../Context/StateProvider";
import { API_KEY_alpha } from "../../Data/Keys";
import "./Earnings.css";
import { Bubble, Line, Bar, Scatter } from "react-chartjs-2";

function Earnings() {
  const [{ symbol }, dispatch] = useStateValue();
  const [bardata, setBardata] = useState();
  const [baroptions, setBaroptions] = useState();
  const [load, setLoad] = useState([]);

  useEffect(() => {
    fetchEarnings();
  }, [symbol]);

  const fetchEarnings = async () => {
    try {
      let dates_unformatted = [];
      let dates = [];
      let reported = [];
      let estimated = [];
      let surpised = [];

      const response = await axios.get(
        `https://www.alphavantage.co/query?function=EARNINGS&symbol=${symbol}&apikey=${API_KEY_alpha}`
      );

      for (var earnings in response.data.quarterlyEarnings) {
        dates_unformatted.push(
          response.data.quarterlyEarnings[earnings].fiscalDateEnding
        );
        const date_changer = (change) => {
          let array = change.split("-");
          return array[1] + "/" + array[2] + "/" + array[0];
        };

        for (var i = 0; i < dates_unformatted.length; i++) {
          dates.push(date_changer(dates_unformatted[i]));
        }

        reported.push(response.data.quarterlyEarnings[earnings].reportedEPS);
        estimated.push(response.data.quarterlyEarnings[earnings].estimatedEPS);
        surpised.push(response.data.quarterlyEarnings[earnings].surprise);
      }
      setLoad(dates);

      const data = {
        labels: [
          dates[0],
          dates[1],
          dates[2],
          dates[3],
          dates[4],
          dates[5],
          dates[6],
          dates[7],
        ],
        datasets: [
          {
            label: "Reported",
            data: [
              reported[0],
              reported[1],
              reported[2],
              reported[3],
              reported[4],
              reported[5],
              reported[6],
              reported[7],
            ],
            backgroundColor: "rgb(255, 99, 132)",
          },
          {
            label: "Estimated",
            data: [
              estimated[0],
              estimated[1],
              estimated[2],
              estimated[3],
              estimated[4],
              estimated[5],
              estimated[6],
              estimated[7],
            ],
            backgroundColor: "rgb(54, 162, 235)",
          },
          {
            label: "Difference",
            data: [
              surpised[0],
              surpised[1],
              surpised[2],
              surpised[3],
              surpised[4],
              surpised[5],
              surpised[6],
              surpised[7],
            ],
            backgroundColor: "rgb(75, 192, 192)",
          },
        ],
      };
      setBardata(data);
      setBaroptions(baroptions);
    } catch (error) {
      console.log(error);
    }
  };
  if (load === undefined || load.length === 0) {
    return <div>Unfortunately, there is no Earnings data for {symbol}</div>;
  } else {
    return (
      <div className="earnings">
        <p>Earnings Report</p>
        <Bar data={bardata} options={baroptions} />
      </div>
    );
  }
}

export default Earnings;
