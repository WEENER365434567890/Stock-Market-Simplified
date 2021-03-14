import React, { useEffect, useState } from "react";
import axios from "axios";
import "./MarketData.css";
import { API_KEY_12data } from "../../Data/Keys";
import { useStateValue } from "../../Context/StateProvider";
import CurrencyFormat from "react-currency-format";

function MarketData() {
  const [{ symbol }, dispatch] = useStateValue();

  //symbols
  const dowjonesSYM = "DJI";
  const sp500SYM = "SPX";
  const nasdaqSYM = "IXIC";
  const dowjonestechSYM = "DJUSTC";
  const dowjonesbanksSYM = "DJUSBK";
  const dowjonesdefenseSYM = "DJUSDN";
  const dowjonespharmaSYM = "DJUSPR";
  const btcSYM = "BTC/USD";
  const ethSYM = "ETH/USD";
  const ltcSYM = "LTC/USD";

  //current price
  const [dowjones, setDowjones] = useState("");
  const [sp500, setSp500] = useState(0);
  const [nasdaq, setNasdaq] = useState(0);
  const [dowjonestech, setDowjonestech] = useState(0);
  const [dowjonesbanks, setDowjonesbanks] = useState(0);
  const [dowjonesdefense, setDowjonesdefense] = useState(0);
  const [dowjonespharma, setDowjonespharma] = useState(0);
  const [btc, setBtc] = useState(0);
  const [eth, setEth] = useState(0);
  const [ltc, setLtc] = useState(0);

  //daily change
  const [dowjonesdailyChange, setDowjonesdailyChange] = useState("");
  const [sp500dailyChange, setSp500dailyChange] = useState(0);
  const [nasdaqdailyChange, setNasdaqdailyChange] = useState(0);
  const [dowjonestechdailyChange, setDowjonestechdailyChange] = useState(0);
  const [dowjonesbanksdailyChange, setDowjonesbanksdailyChange] = useState(0);
  const [dowjonesdefensedailyChange, setDowjonesdefensedailyChange] = useState(
    0
  );
  const [dowjonespharmadailyChange, setDowjonespharmadailyChange] = useState(0);
  const [btcdailyChange, setBtcdailyChange] = useState(0);
  const [ethdailyChange, setEthdailyChange] = useState(0);
  const [ltcdailyChange, setLtcdailyChange] = useState(0);

  //weekly change
  const [dowjonesweeklyChange, setDowjonesweeklyChange] = useState("");
  const [sp500weeklyChange, setSp500weeklyChange] = useState(0);
  const [nasdaqweeklyChange, setNasdaqweeklyChange] = useState(0);
  const [dowjonestechweeklyChange, setDowjonestechweeklyChange] = useState(0);
  const [dowjonesbanksweeklyChange, setDowjonesbanksweeklyChange] = useState(0);
  const [
    dowjonesdefenseweeklyChange,
    setDowjonesdefenseweeklyChange,
  ] = useState(0);
  const [dowjonespharmaweeklyChange, setDowjonespharmaweeklyChange] = useState(
    0
  );
  const [btcweeklyChange, setBtcweeklyChange] = useState(0);
  const [ethweeklyChange, setEthweeklyChange] = useState(0);
  const [ltcweeklyChange, setLtcweeklyChange] = useState(0);

  useEffect(() => {
    fetchMarketData();
  }, []);

  const fetchMarketData = async () => {
    try {
      const dowjonesResponse = await axios.get(
        `https://api.twelvedata.com/time_series?symbol=${dowjonesSYM}&interval=1day&apikey=${API_KEY_12data}`
      );

      setDowjones(dowjonesResponse.data.values[0].close);
      setDowjonesdailyChange(
        (100 *
          (Number(dowjonesResponse.data.values[0].close) -
            Number(dowjonesResponse.data.values[1].close))) /
          Number(dowjonesResponse.data.values[0].close)
      );
      setDowjonesweeklyChange(
        (100 *
          (Number(dowjonesResponse.data.values[0].close) -
            Number(dowjonesResponse.data.values[7].close))) /
          Number(dowjonesResponse.data.values[0].close)
      );
      const sp500Response = await axios.get(
        `https://api.twelvedata.com/time_series?symbol=${sp500SYM}&interval=1day&apikey=${API_KEY_12data}`
      );
      setSp500(sp500Response.data.values[0].close);
      setSp500dailyChange(
        (100 *
          (Number(sp500Response.data.values[0].close) -
            Number(sp500Response.data.values[1].close))) /
          Number(sp500Response.data.values[0].close)
      );
      setSp500weeklyChange(
        (100 *
          (Number(sp500Response.data.values[0].close) -
            Number(sp500Response.data.values[7].close))) /
          Number(sp500Response.data.values[0].close)
      );
      const nasdaqResponse = await axios.get(
        `https://api.twelvedata.com/time_series?symbol=${nasdaqSYM}&interval=1day&apikey=${API_KEY_12data}`
      );
      setNasdaq(nasdaqResponse.data.values[0].close);
      setNasdaqdailyChange(
        (100 *
          (Number(nasdaqResponse.data.values[0].close) -
            Number(nasdaqResponse.data.values[1].close))) /
          Number(nasdaqResponse.data.values[0].close)
      );
      setNasdaqweeklyChange(
        (100 *
          (Number(nasdaqResponse.data.values[0].close) -
            Number(nasdaqResponse.data.values[7].close))) /
          Number(nasdaqResponse.data.values[0].close)
      );
      const dowjonestechResponse = await axios.get(
        `https://api.twelvedata.com/time_series?symbol=${dowjonestechSYM}&interval=1day&apikey=${API_KEY_12data}`
      );
      setDowjonestech(dowjonestechResponse.data.values[0].close);
      setDowjonestechdailyChange(
        (100 *
          (Number(dowjonestechResponse.data.values[0].close) -
            Number(dowjonestechResponse.data.values[1].close))) /
          Number(dowjonestechResponse.data.values[0].close)
      );
      setDowjonestechweeklyChange(
        (100 *
          (Number(dowjonestechResponse.data.values[0].close) -
            Number(dowjonestechResponse.data.values[7].close))) /
          Number(dowjonestechResponse.data.values[0].close)
      );

      const dowjonesbanksResponse = await axios.get(
        `https://api.twelvedata.com/time_series?symbol=${dowjonesbanksSYM}&interval=1day&apikey=${API_KEY_12data}`
      );
      setDowjonesbanks(dowjonesbanksResponse.data.values[0].close);
      setDowjonesbanksdailyChange(
        (100 *
          (Number(dowjonesbanksResponse.data.values[0].close) -
            Number(dowjonesbanksResponse.data.values[1].close))) /
          Number(dowjonesbanksResponse.data.values[0].close)
      );
      setDowjonesbanksweeklyChange(
        (100 *
          (Number(dowjonesbanksResponse.data.values[0].close) -
            Number(dowjonesbanksResponse.data.values[7].close))) /
          Number(dowjonesbanksResponse.data.values[0].close)
      );
      const dowjonesdefenseResponse = await axios.get(
        `https://api.twelvedata.com/time_series?symbol=${dowjonesdefenseSYM}&interval=1day&apikey=${API_KEY_12data}`
      );
      setDowjonesdefense(dowjonesdefenseResponse.data.values[0].close);
      setDowjonesdefensedailyChange(
        (100 *
          (Number(dowjonesdefenseResponse.data.values[0].close) -
            Number(dowjonesdefenseResponse.data.values[1].close))) /
          Number(dowjonesdefenseResponse.data.values[0].close)
      );
      setDowjonesdefenseweeklyChange(
        (100 *
          (Number(dowjonesdefenseResponse.data.values[0].close) -
            Number(dowjonesdefenseResponse.data.values[7].close))) /
          Number(dowjonesdefenseResponse.data.values[0].close)
      );
      const dowjonesphramaResponse = await axios.get(
        `https://api.twelvedata.com/time_series?symbol=${dowjonespharmaSYM}&interval=1day&apikey=${API_KEY_12data}`
      );
      setDowjonespharma(dowjonesphramaResponse.data.values[0].close);
      setDowjonespharmadailyChange(
        (100 *
          (Number(dowjonesphramaResponse.data.values[0].close) -
            Number(dowjonesphramaResponse.data.values[1].close))) /
          Number(dowjonesphramaResponse.data.values[0].close)
      );
      setDowjonespharmaweeklyChange(
        (100 *
          (Number(dowjonesphramaResponse.data.values[0].close) -
            Number(dowjonesphramaResponse.data.values[7].close))) /
          Number(dowjonesphramaResponse.data.values[0].close)
      );
      const btcResponse = await axios.get(
        `https://api.twelvedata.com/time_series?symbol=${btcSYM}&interval=1day&apikey=${API_KEY_12data}`
      );
      setBtc(btcResponse.data.values[0].close);
      setBtcdailyChange(
        (100 *
          (Number(btcResponse.data.values[0].close) -
            Number(btcResponse.data.values[1].close))) /
          Number(btcResponse.data.values[0].close)
      );
      setBtcweeklyChange(
        (100 *
          (Number(btcResponse.data.values[0].close) -
            Number(btcResponse.data.values[7].close))) /
          Number(btcResponse.data.values[0].close)
      );
      const ethResponse = await axios.get(
        `https://api.twelvedata.com/time_series?symbol=ETH/USD&interval=1day&apikey=${API_KEY_12data}`
      );
      setEth(ethResponse.data.values[0].close);
      setEthdailyChange(
        (100 *
          (Number(ethResponse.data.values[0].close) -
            Number(ethResponse.data.values[1].close))) /
          Number(ethResponse.data.values[0].close)
      );
      setEthweeklyChange(
        (100 *
          (Number(ethResponse.data.values[0].close) -
            Number(ethResponse.data.values[7].close))) /
          Number(ethResponse.data.values[0].close)
      );
      const ltcResponse = await axios.get(
        `https://api.twelvedata.com/time_series?symbol=LTC/USD&interval=1day&apikey=${API_KEY_12data}`
      );

      setLtc(ltcResponse.data.values[0].close);
      setLtcdailyChange(
        (100 *
          (Number(ltcResponse.data.values[0].close) -
            Number(ltcResponse.data.values[1].close))) /
          Number(ltcResponse.data.values[0].close)
      );
      setLtcweeklyChange(
        (100 *
          (Number(ltcResponse.data.values[0].close) -
            Number(ltcResponse.data.values[7].close))) /
          Number(ltcResponse.data.values[0].close)
      );
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <CurrencyFormat
        value={dowjones}
        decimalScale={2}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <br />
      <CurrencyFormat
        value={dowjonesdailyChange}
        decimalScale={2}
        displayType={"text"}
        thousandSeparator={true}
        suffix={"%"}
      />
      <br />
      <CurrencyFormat
        value={dowjonesweeklyChange}
        decimalScale={2}
        displayType={"text"}
        thousandSeparator={true}
        suffix={"%"}
      />
      <br />
      <br />
      <CurrencyFormat
        value={sp500}
        decimalScale={2}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <br />
      <CurrencyFormat
        value={sp500dailyChange}
        decimalScale={2}
        displayType={"text"}
        thousandSeparator={true}
        suffix={"%"}
      />
      <br />
      <CurrencyFormat
        value={sp500weeklyChange}
        decimalScale={2}
        displayType={"text"}
        thousandSeparator={true}
        suffix={"%"}
      />
      <br />
      <br />
      <CurrencyFormat
        value={nasdaq}
        decimalScale={2}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <br />
      <CurrencyFormat
        value={nasdaqdailyChange}
        decimalScale={2}
        displayType={"text"}
        thousandSeparator={true}
        suffix={"%"}
      />
      <br />
      <CurrencyFormat
        value={nasdaqweeklyChange}
        decimalScale={2}
        displayType={"text"}
        thousandSeparator={true}
        suffix={"%"}
      />
      <br />
      <br />
      <CurrencyFormat
        value={dowjonestech}
        decimalScale={2}
        displayType={"text"}
        thousandSeparator={true}
        suffix={"%"}
      />
      <br />
      <CurrencyFormat
        value={dowjonestechdailyChange}
        decimalScale={2}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <br />
      <CurrencyFormat
        value={dowjonestechweeklyChange}
        decimalScale={2}
        displayType={"text"}
        thousandSeparator={true}
        suffix={"%"}
      />
      <br />
      <br />
      <CurrencyFormat
        value={dowjonesbanks}
        decimalScale={2}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <br />
      <CurrencyFormat
        value={dowjonesbanksdailyChange}
        decimalScale={2}
        displayType={"text"}
        thousandSeparator={true}
        suffix={"%"}
      />
      <br />
      <CurrencyFormat
        value={dowjonesbanksweeklyChange}
        decimalScale={2}
        displayType={"text"}
        thousandSeparator={true}
        suffix={"%"}
      />
      <br />
      <br />
      <CurrencyFormat
        value={dowjonesdefense}
        decimalScale={2}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <br />
      <CurrencyFormat
        value={dowjonesdefensedailyChange}
        decimalScale={2}
        displayType={"text"}
        thousandSeparator={true}
        suffix={"%"}
      />
      <br />
      <CurrencyFormat
        value={dowjonesdefenseweeklyChange}
        decimalScale={2}
        displayType={"text"}
        thousandSeparator={true}
        suffix={"%"}
      />
      <br />
      <br />
      <CurrencyFormat
        value={dowjonespharma}
        decimalScale={2}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <br />
      <CurrencyFormat
        value={dowjonespharmadailyChange}
        decimalScale={2}
        displayType={"text"}
        thousandSeparator={true}
        suffix={"%"}
      />
      <br />
      <CurrencyFormat
        value={dowjonespharmaweeklyChange}
        decimalScale={2}
        displayType={"text"}
        thousandSeparator={true}
        suffix={"%"}
      />
      <br />
      <br />
      <CurrencyFormat
        value={btc}
        decimalScale={2}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <br />
      <CurrencyFormat
        value={btcdailyChange}
        decimalScale={2}
        displayType={"text"}
        thousandSeparator={true}
        suffix={"%"}
      />
      <br />
      <CurrencyFormat
        value={btcweeklyChange}
        decimalScale={2}
        displayType={"text"}
        thousandSeparator={true}
        suffix={"%"}
      />
      <br />
      <br />
      <CurrencyFormat
        value={eth}
        decimalScale={2}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <br />
      <CurrencyFormat
        value={ethdailyChange}
        decimalScale={2}
        displayType={"text"}
        thousandSeparator={true}
        suffix={"%"}
      />
      <br />
      <CurrencyFormat
        value={ethweeklyChange}
        decimalScale={2}
        displayType={"text"}
        thousandSeparator={true}
        suffix={"%"}
      />
      <br />
      <br />
      <CurrencyFormat
        value={ltc}
        decimalScale={2}
        displayType={"text"}
        thousandSeparator={true}
        prefix={"$"}
      />
      <br />
      <CurrencyFormat
        value={ltcdailyChange}
        decimalScale={2}
        displayType={"text"}
        thousandSeparator={true}
        suffix={"%"}
      />
      <br />
      <CurrencyFormat
        value={ltcweeklyChange}
        decimalScale={2}
        displayType={"text"}
        thousandSeparator={true}
        suffix={"%"}
      />
      <br />
    </div>
  );
}
export default MarketData;
