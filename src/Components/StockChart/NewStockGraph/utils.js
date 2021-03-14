import { API_KEY_alpha } from "../../../Data/Keys";
import axios from "axios";

export const getData = async (symbol) => {
  try {
    const response = await axios.get(
      `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${symbol}&outputsize=full&apikey=${API_KEY_alpha}`
    );

    let date_array = [];

    for (var date in response.data["Time Series (Daily)"]) {
      date_array.unshift(date);
    }
    let open_array = [];
    let high_array = [];
    let low_array = [];
    let close_array = [];
    let volume_array = [];
    for (var date in response.data["Time Series (Daily)"]) {
      open_array.unshift(
        Number(response.data["Time Series (Daily)"][date]["1. open"])
      );
      high_array.unshift(
        Number(response.data["Time Series (Daily)"][date]["2. high"])
      );
      low_array.unshift(
        Number(response.data["Time Series (Daily)"][date]["3. low"])
      );

      close_array.unshift(
        Number(response.data["Time Series (Daily)"][date]["4. close"])
      );
      volume_array.unshift(
        Number(response.data["Time Series (Daily)"][date]["6. volume"])
      );
    }

    let Output = [];
    for (var i = 0; i < open_array.length; i++) {
      let c = {
        date: new Date(date_array[i]),
        open: open_array[i],
        high: high_array[i],
        low: low_array[i],
        close: close_array[i],
        volume: volume_array[i],
      };
      Output.push(c);
    }

    return Output;
  } catch (error) {
    console.log(error);
  }
};
