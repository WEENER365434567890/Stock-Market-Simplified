import axios from "axios";
import React from "react";
import { useEffect, useState } from "react";
import { useStateValue } from "../../Context/StateProvider";
import { API_KEY_alpha } from "../../Data/Keys";
import CurrencyFormat from "react-currency-format";

function CompanyOverview() {
  const [{ symbol }, dispatch] = useStateValue();
  const [employees, setEmployees] = useState(0);
  const [marketcap, setMarketcap] = useState(0);
  const [peRatio, setPeRatio] = useState(0);
  const [divYield, setDivYield] = useState(0);
  const [divPerShare, setDivPerShare] = useState(0);
  const [divDate, setDivDate] = useState("");
  const [eps1, setEps1] = useState(0);
  const [beta, setBeta] = useState(0);
  const [yearHigh, setYearHigh] = useState(0);
  const [yearLow, setYearLow] = useState(0);
  const [fiftyAvg, setFiftyAvg] = useState(0);
  const [twohundredAvg, setTwohundredAvg] = useState(0);

  useEffect(() => {
    fetchCompanyOverview();
  }, [symbol]);

  const fetchCompanyOverview = async () => {
    try {
      const response = await axios.get(
        `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${symbol}&apikey=${API_KEY_alpha}`
      );

      setEmployees(response.data.FullTimeEmployees);
      setMarketcap(response.data.MarketCapitalization);
      setPeRatio(response.data.PERatio);
      setDivYield(100 * Number(response.data.DividendYield));
      setDivPerShare(response.data.DividendPerShare);

      setEps1(response.data.EPS);
      setBeta(response.data.Beta);
      setYearLow(response.data["52WeekLow"]);
      setYearHigh(response.data["52WeekHigh"]);
      setFiftyAvg(response.data["50DayMovingAverage"]);
      setTwohundredAvg(response.data["200DayMovingAverage"]);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <table className="table table-hover">
        <thead>
          <th scope="col">Employees</th>
          <th scope="col">Market Capitalization</th>
          <th scope="col">PE Ratio</th>
          <th scope="col">Dividend Yield</th>
          <th scope="col">Dividend per Share</th>
          <th scope="col">EPS</th>
          <th scope="col">Beta</th>
          <th scope="col">52 Week High</th>
          <th scope="col">52 Week Low</th>
          <th scope="col">50 Average</th>
          <th scope="col">200 Average</th>
        </thead>
        <tbody>
          <td>
            <CurrencyFormat
              value={employees}
              displayType={"text"}
              thousandSeparator={true}
            />
          </td>
          <td>
            {" "}
            <CurrencyFormat
              value={marketcap}
              displayType={"text"}
              thousandSeparator={true}
            />
          </td>
          <td>{peRatio}</td>
          <td>
            <CurrencyFormat
              value={divYield}
              decimalScale={2}
              displayType={"text"}
              thousandSeparator={true}
              suffix={"%"}
            />
          </td>{" "}
          <td>
            {" "}
            <CurrencyFormat
              value={divPerShare}
              decimalScale={2}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
            />
          </td>
          <td> {eps1}</td>
          <td> {beta}</td>
          <td>
            <CurrencyFormat
              value={yearHigh}
              decimalScale={2}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
            />
          </td>
          <td>
            <CurrencyFormat
              value={yearLow}
              decimalScale={2}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
            />
          </td>
          <td>
            <CurrencyFormat
              value={fiftyAvg}
              decimalScale={2}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
            />
          </td>
          <td>
            <CurrencyFormat
              value={twohundredAvg}
              decimalScale={2}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
            />
          </td>
        </tbody>
      </table>
    </div>
  );
}

export default CompanyOverview;
