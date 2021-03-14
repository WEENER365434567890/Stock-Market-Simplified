import React, { useEffect, useState } from "react";
import axios from "axios";
import "./Competitors.css";
import { useStateValue } from "../../Context/StateProvider";
import { API_KEY_finn, API_KEY_alpha } from "../../Data/Keys";
import { Pie } from "react-chartjs-2";

function Competitors() {
  const [{ symbol }, dispatch] = useStateValue();
  const [data, setData] = useState({});
  var competitorArr_initial = [];
  var competitorArr_final = [];
  var competitor_marketcap = [];
  var competitor_symbol = [];
  var competitor_name = [];
  var competitor_label = [];
  const [load, setLoad] = useState([]);

  useEffect(() => {
    chartIt();
  }, [symbol]);

  const fetchCompanyCompetitor = async () => {
    try {
      const response = await axios.get(
        `https://finnhub.io/api/v1/stock/peers?symbol=${symbol}&token=${API_KEY_finn}`
      );

      competitorArr_initial = response.data;

      setLoad(competitorArr_initial);

      for (var i = 0; i < competitorArr_initial.length; i++) {
        if (competitorArr_initial[i].indexOf(".") === -1) {
          competitorArr_final.push(competitorArr_initial[i]);
        }
      }
      for (var i = 0; i < 4; i++) {
        const response = await axios.get(
          `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${competitorArr_final[i]}&apikey=${API_KEY_alpha}`
        );

        competitor_marketcap.push(response.data.MarketCapitalization);
        competitor_symbol.push(response.data.Symbol);
        competitor_name.push(response.data.Name);
        competitor_label.push(
          competitor_symbol[i] + " : " + competitor_name[i]
        );
      }
    } catch (error) {
      console.log(error);
    }
  };

  const pie_colors = ["#20904f", "#79d9a4", "#fff724", "#ff8689", "#6d0003"];

  const chartIt = async () => {
    await fetchCompanyCompetitor();
    setData({
      labels: competitor_label,
      datasets: [
        {
          data: competitor_marketcap,
          backgroundColor: pie_colors,
          hoverBackgroundColor: pie_colors,
        },
      ],
    });
  };

  const options = {
    cutoutPercentage: 0,
  };

  if (load === undefined || load.length === 0) {
    return <div>Unfortunately, there is no competitor data for {symbol}</div>;
  } else {
    return (
      <div className="competitor">
        <p>Competitors</p>
        <Pie data={data} options={options} redraw />
        <p className="competitor_description">
          If the search stock is not in the pie chart, it is not in the top 5 in
          its' respected industry. Also, if there are undefined values refresh
          the page since API request have been exceeded or try again later.
        </p>
      </div>
    );
  }
}
export default Competitors;
