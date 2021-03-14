import React, { useEffect, useState } from "react";
import "./MainSearch.css";
import NYSEstocks from "../Data/NYSEstocks";
import { useStateValue } from "../Context/StateProvider";
import { Button } from "@material-ui/core";
import Indicator from "./StockChart/Indicator";

function MainSearch() {
  //input hooks

  const [{ symbol, list }, dispatch] = useStateValue();
  const [SYM, setSYM] = useState("BA");
  const [options, setOptions] = useState([]);
  const [display, setDisplay] = useState(false);
  const [filter, setfilter] = useState("BA");
  const [random, setRandom] = useState(0);

  const setInput = (symbol) => {
    setSYM(symbol);
    setDisplay(false);
  };

  const addToList = () => {
    //adds to data layer

    dispatch({
      type: "ADD_TO_LIST",
      item: {
        id: SYM,
      },
    });
  };

  useEffect(() => {
    setOptions(NYSEstocks);
  }, []);

  const symHandler = () => {
    setfilter(SYM);
  };

  const randomHandler = () => {
    setRandom(Math.floor(Math.random() * NYSEstocks.length));
    setSYM(NYSEstocks[random]);
  };

  useEffect(() => {
    dispatch({
      type: "SET_SYMBOL",
      symbol: filter,
    });
  }, [filter]);

  {
    return (
      <div className="mainsearch">
        <Indicator />
        <div className="mainsearch_input">
          <button className="mainsearch_addtoList" onClick={addToList}>
            Add to List
          </button>
          <input
            type="text"
            placeholder="Search Over 3,000+ NYSE Stocks"
            onClick={() => {
              setDisplay(!display);
            }}
            //popus up the suggestions. default is false so its not open, once its click it is true and thus open
            value={SYM}
            onChange={(event) => {
              setSYM(event.target.value);
            }}
          />

          <button className="mainsearch_searchBtn" onClick={symHandler}>
            GO
          </button>
          <button className="mainsearch_randomBtn" onClick={randomHandler}>
            Random
          </button>
          {display && (
            <div className="mainsearch_container">
              {options
                .filter(
                  (option) =>
                    option.toLowerCase().startsWith(SYM.toLowerCase()) !== false
                )
                .slice(0, 5)
                .map((stock, i) => {
                  return (
                    <div
                      className="mainsearch_option"
                      onClick={() => {
                        setInput(stock);
                      }}
                    >
                      {stock}
                    </div>
                  );
                })}
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default MainSearch;
