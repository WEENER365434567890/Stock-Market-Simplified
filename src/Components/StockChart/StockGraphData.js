import React, { useEffect, useState } from "react";
import axios from "axios";
import { useStateValue } from "../../Context/StateProvider";
import { API_KEY_alpha } from "../../Data/Keys";

function StockGraphData() {
  const [{ symbol }, dispatch] = useStateValue();
  const [output, setOutput] = useState([]);

  useEffect(() => {
    fetchdata();
  }, [symbol]);

  const fetchdata = async () => {
    try {
      const response = await axios.get(
        `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${symbol}&outputsize=full&apikey=${API_KEY_alpha}`
      );

      console.log(response.data["Time Series (Daily)"]);
      let date_array = [];
      for (var date in response.data["Time Series (Daily)"]) {
        date_array.push(date);
      }
      let open_array = [];
      let high_array = [];
      let low_array = [];
      let volume_array = [];
      for (var date in response.data["Time Series (Daily)"]) {
        open_array.push(
          Number(response.data["Time Series (Daily)"][date]["1. open"])
        );
        high_array.push(
          Number(response.data["Time Series (Daily)"][date]["2. high"])
        );
        low_array.push(
          Number(response.data["Time Series (Daily)"][date]["3. low"])
        );
        volume_array.push(
          Number(response.data["Time Series (Daily)"][date]["6. volume"])
        );
      }
      console.log(open_array);
      console.log(high_array);
      console.log(low_array);
      console.log(volume_array);

      for (var i = 0; i < open_array.length; i++) {
        let c = {
          open: open_array[i],
          high: high_array[i],
          low: low_array[i],
          date: new Date(date_array[i]),
          volume: volume_array[i],
        };
        Output.push(c);
      }
      console.log(Output);
    } catch (error) {
      console.log(error);
    }
  };
}

export default Output;
