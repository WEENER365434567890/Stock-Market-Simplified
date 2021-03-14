import React, { useEffect, useState } from "react";
import "./StockGraph.css";
import StochasticOscillator from "./StochasticOscillator";
import AreaChart from "./AreaChart";
import HeikinAshi from "./HeikinAshi";
import Kagi from "./Kagi";
import Renko from "./Renko";
import MovingAverage from "./MovingAverage";
import Rsi from "./Rsi";
import ForceIndex from "./ForceIndex";
import ElderRay from "./ElderRay";
import ElderImpulse from "./ElderImpulse";
import SAR from "./SAR";
import VolumebySession from "./VolumebySession";
import { getData } from "./utils";
import { useStateValue } from "../../../Context/StateProvider";
import Radio from "@material-ui/core/Radio";
import RadioGroup from "@material-ui/core/RadioGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import FormControl from "@material-ui/core/FormControl";

function StockGraph() {
  const [{ symbol }, dispatch] = useStateValue();
  const [data, setData] = useState(null);
  //
  const [areaChart, setAreaChart] = useState(true);
  const [heikinashi, setHeikinashi] = useState(false);
  const [kagi, setKagi] = useState(false);
  const [renko, setRenko] = useState(false);
  const [movingAverage, setMovingAverage] = useState(false);
  const [macd, setMacd] = useState(false);
  const [rsiandatr, setRsiandatr] = useState(false);
  const [stochastic, setStochastic] = useState(false);
  const [forceindex, setForceindex] = useState(false);
  const [elderray, setElderray] = useState(false);
  const [elderImpulse, setElderImpulse] = useState(false);
  const [sar, setSar] = useState(false);
  const [volumebySession, setVolumebySession] = useState(false);

  const calling = async () => {
    const response = await getData(symbol);
    setData(response);
  };

  useEffect(() => {
    calling();
  }, [symbol]);

  const handleAreaChartChange = (event) => {
    if (event === undefined) return null;
    if (event.target.checked === true) {
      setAreaChart(true);
      setVolumebySession(false);
      setSar(false);
      setElderray(false);
      setForceindex(false);
      setStochastic(false);
      setRsiandatr(false);
      setElderImpulse(false);
      setMovingAverage(false);
      setRenko(false);
      setKagi(false);
      setHeikinashi(false);
    } else {
      setAreaChart(false);
    }
  };

  const handleHeikinAshi = (event) => {
    if (event === undefined) return null;
    if (event.target.checked === true) {
      setHeikinashi(true);
      setVolumebySession(false);
      setSar(false);
      setElderray(false);
      setForceindex(false);
      setStochastic(false);
      setRsiandatr(false);
      setElderImpulse(false);
      setMovingAverage(false);
      setRenko(false);
      setKagi(false);
      setAreaChart(false);
    } else {
      setHeikinashi(false);
    }
  };
  const handleKagi = (event) => {
    if (event === undefined) return null;
    if (event.target.checked === true) {
      setKagi(true);
      setVolumebySession(false);
      setSar(false);
      setElderray(false);
      setForceindex(false);
      setStochastic(false);
      setRsiandatr(false);
      setElderImpulse(false);
      setMovingAverage(false);
      setRenko(false);
      setHeikinashi(false);
      setAreaChart(false);
    } else {
      setKagi(false);
    }
  };
  const handlerenko = (event) => {
    if (event === undefined) return null;
    if (event.target.checked === true) {
      setRenko(true);
      setVolumebySession(false);
      setSar(false);
      setElderray(false);
      setForceindex(false);
      setStochastic(false);
      setRsiandatr(false);
      setElderImpulse(false);
      setMovingAverage(false);
      setKagi(false);
      setHeikinashi(false);
      setAreaChart(false);
    } else {
      setRenko(false);
    }
  };
  const handlemovingaverage = (event) => {
    if (event === undefined) return null;
    if (event.target.checked === true) {
      setMovingAverage(true);
      setVolumebySession(false);
      setSar(false);
      setElderray(false);
      setForceindex(false);
      setStochastic(false);
      setRsiandatr(false);
      setElderImpulse(false);
      setRenko(false);
      setKagi(false);
      setHeikinashi(false);
      setAreaChart(false);
    } else {
      setMovingAverage(false);
    }
  };

  const handlersi = (event) => {
    if (event === undefined) return null;
    if (event.target.checked === true) {
      setRsiandatr(true);
      setVolumebySession(false);
      setSar(false);
      setElderray(false);
      setForceindex(false);
      setStochastic(false);
      setElderImpulse(false);
      setMovingAverage(false);
      setRenko(false);
      setKagi(false);
      setHeikinashi(false);
      setAreaChart(false);
    } else {
      setRsiandatr(false);
    }
  };
  const handlerstochastic = (event) => {
    if (event === undefined) return null;
    if (event.target.checked === true) {
      setStochastic(true);
      setVolumebySession(false);
      setSar(false);
      setElderray(false);
      setForceindex(false);
      setRsiandatr(false);
      setElderImpulse(false);
      setMovingAverage(false);
      setRenko(false);
      setKagi(false);
      setHeikinashi(false);
      setAreaChart(false);
    } else {
      setStochastic(false);
    }
  };
  const handlerforceindex = (event) => {
    if (event === undefined) return null;
    if (event.target.checked === true) {
      setForceindex(true);
      setVolumebySession(false);
      setSar(false);
      setElderray(false);
      setStochastic(false);
      setRsiandatr(false);
      setElderImpulse(false);
      setMovingAverage(false);
      setRenko(false);
      setKagi(false);
      setHeikinashi(false);
      setAreaChart(false);
    } else {
      setForceindex(false);
    }
  };

  const handlerelderRay = (event) => {
    if (event === undefined) return null;
    if (event.target.checked === true) {
      setElderray(true);
      setVolumebySession(false);
      setSar(false);
      setForceindex(false);
      setStochastic(false);
      setRsiandatr(false);
      setElderImpulse(false);
      setMovingAverage(false);
      setRenko(false);
      setKagi(false);
      setHeikinashi(false);
      setAreaChart(false);
    } else {
      setElderray(false);
    }
  };
  const handlerelderImpulse = (event) => {
    if (event === undefined) return null;
    if (event.target.checked === true) {
      setElderImpulse(true);
      setVolumebySession(false);
      setSar(false);
      setElderray(false);
      setForceindex(false);
      setStochastic(false);
      setRsiandatr(false);
      setMovingAverage(false);
      setRenko(false);
      setKagi(false);
      setHeikinashi(false);
      setAreaChart(false);
    } else {
      setElderImpulse(false);
    }
  };

  const handlersar = (event) => {
    if (event === undefined) return null;
    if (event.target.checked === true) {
      setSar(true);
      setVolumebySession(false);
      setElderray(false);
      setForceindex(false);
      setStochastic(false);
      setRsiandatr(false);
      setElderImpulse(false);
      setMovingAverage(false);
      setRenko(false);
      setKagi(false);
      setHeikinashi(false);
      setAreaChart(false);
    } else {
      setSar(false);
    }
  };
  const handlervolumebySession = (event) => {
    if (event === undefined) return null;
    if (event.target.checked === true) {
      setVolumebySession(true);
      setSar(false);
      setElderray(false);
      setForceindex(false);
      setStochastic(false);
      setRsiandatr(false);
      setElderImpulse(false);
      setMovingAverage(false);
      setRenko(false);
      setKagi(false);
      setHeikinashi(false);
      setAreaChart(false);
    } else {
      setVolumebySession(false);
    }
  };

  const changeScroll = () => {
    let style = document.body.style.overflow;
    document.body.style.overflow = style === "hidden" ? "auto" : "hidden";
  };

  if (data === null) {
    return <div>Loading...</div>;
  }
  return (
    <div className="stockgraph">
      <div className="stockgraph_radio">
        <FormControl component="fieldset" className="stockgraph_radiocontrol">
          <RadioGroup
            row
            aria-label="position"
            name="position"
            defaultValue="top"
          >
            <FormControlLabel
              value="Area Chart"
              control={<Radio color="primary" />}
              label="Area Chart"
              labelPlacement="Area Chart"
              onChange={handleAreaChartChange}
            />
            <FormControlLabel
              value="Heikin Ashi"
              control={<Radio color="primary" />}
              label="Heikin Ashi"
              labelPlacement="Heikin Ashi"
              onChange={handleHeikinAshi}
            />
            <FormControlLabel
              value="Kagi"
              control={<Radio color="primary" />}
              label="Kagi"
              labelPlacement="Kagi"
              onChange={handleKagi}
            />
            <FormControlLabel
              value="Renko"
              control={<Radio color="primary" />}
              label="Renko"
              labelPlacement="Renko"
              onChange={handlerenko}
            />
            <FormControlLabel
              value="Moving Average"
              control={<Radio color="primary" />}
              label="Moving Average"
              labelPlacement="Moving Average"
              onChange={handlemovingaverage}
            />
            {/*        <FormControlLabel
            value="MACD"
            control={<Radio color="primary" />}
            label="MACD"
            labelPlacement="MACD"
            onChange={handlemacd}
          /> */}
            <FormControlLabel
              value="RSI and ATR"
              control={<Radio color="primary" />}
              label="RSI and ATR"
              labelPlacement="RSI and ATR"
              onChange={handlersi}
            />
            <FormControlLabel
              value="Stochastic Oscillator"
              control={<Radio color="primary" />}
              label="Stochastic Oscillator"
              labelPlacement="Stochastic Oscillator"
              onChange={handlerstochastic}
            />
            <FormControlLabel
              value="Force Index"
              control={<Radio color="primary" />}
              label="Force Index"
              labelPlacement="Force Index"
              onChange={handlerforceindex}
            />
            <FormControlLabel
              value="Elder Ray"
              control={<Radio color="primary" />}
              label="Elder Ray"
              labelPlacement="Elder Ray"
              onChange={handlerelderRay}
            />
            <FormControlLabel
              value="Elder Impulse"
              control={<Radio color="primary" />}
              label="Elder Impulse"
              labelPlacement="Elder Impulse"
              onChange={handlerelderImpulse}
            />
            <FormControlLabel
              value="SAR"
              control={<Radio color="primary" />}
              label="SAR"
              labelPlacement="SAR"
              onChange={handlersar}
            />
            <FormControlLabel
              value="Volume by Session"
              control={<Radio color="primary" />}
              label="Volume by Session"
              labelPlacement="Volume by Session"
              onChange={handlervolumebySession}
            />
          </RadioGroup>
        </FormControl>
      </div>

      <div className="stockgraph_text">
        It is recommended to use a mouse instead of a trackpad. If your cursor
        is inside the red outline, your mouse will be locked inside the graph
        for better movement. If you wish to scroll up the page, move your cursor
        outside the border.
      </div>
      <div
        className="stockgraph_graph"
        onMouseEnter={changeScroll}
        onMouseLeave={changeScroll}
      >
        <div className="somethingsomething">
          {areaChart ? <AreaChart data={data} /> : null}
        </div>

        <div className="somethingsomething">
          {heikinashi ? <HeikinAshi data={data} /> : null}
        </div>
        <div className="somethingsomething">
          {kagi ? <Kagi data={data} /> : null}
        </div>
        <div className="somethingsomething">
          {renko ? <Renko data={data} /> : null}
        </div>
        <div className="somethingsomething">
          {movingAverage ? <MovingAverage data={data} /> : null}
        </div>

        <div className="somethingsomething">
          {rsiandatr ? <Rsi data={data} /> : null}
        </div>
        <div className="somethingsomething">
          {stochastic ? <StochasticOscillator data={data} /> : null}
        </div>
        <div className="somethingsomething">
          {forceindex ? <ForceIndex data={data} /> : null}
        </div>
        <div className="somethingsomething">
          {elderray ? <ElderRay data={data} /> : null}
        </div>
        <div className="somethingsomething">
          {elderImpulse ? <ElderImpulse data={data} /> : null}
        </div>
        <div className="somethingsomething">
          {sar ? <SAR data={data} /> : null}
        </div>
        <div className="somethingsomething">
          {volumebySession ? <VolumebySession data={data} /> : null}
        </div>
      </div>
    </div>
  );
}

export default StockGraph;
