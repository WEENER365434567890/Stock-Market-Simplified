import { API_KEY_alpha } from "../../../Data/Keys";
import axios from "axios";

const fetchdata = async () => {
  const response = await axios.get(
    `https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=BA&outputsize=full&apikey=${API_KEY_alpha}`
  );

  console.log(response.data["Time Series (Daily)"]);
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
    open_array.push(
      Number(response.data["Time Series (Daily)"][date]["1. open"])
    );
    high_array.push(
      Number(response.data["Time Series (Daily)"][date]["2. high"])
    );
    low_array.push(
      Number(response.data["Time Series (Daily)"][date]["3. low"])
    );

    close_array.push(
      Number(response.data["Time Series (Daily)"][date]["4. close"])
    );
    volume_array.push(
      Number(response.data["Time Series (Daily)"][date]["6. volume"])
    );
  }
  console.log(open_array);
  console.log(high_array);
  console.log(low_array);
  console.log(volume_array);
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
};

export default fetchdata;
