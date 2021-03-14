import React, { useState, useEffect } from "react";
import "./Body.css";
import { useStateValue } from "../../Context/StateProvider";
import { API_KEY_alpha } from "../../Data/Keys";
import axios from "axios";
import CurrencyFormat from "react-currency-format";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { withStyles } from "@material-ui/core/styles";
import { makeStyles } from "@material-ui/core/styles";

function Body() {
  const [{ symbol, list }, dispatch] = useStateValue();
  const userList = [];
  let uniqueList = [];
  const [listData, setListData] = useState([]);
  const nameList = [];
  const [displayNames, setDisplayNames] = useState([]);
  const industryList = [];
  const [displayIndustry, setDisplayIndustry] = useState([]);
  const peratioList = [];
  const [displayPeratio, setDisplayPeratio] = useState([]);
  const marketcapList = [];
  const [displaymarketcap, setDisplaymarketcap] = useState([]);
  const country = [];
  const [displayCountry, setDisplayCountry] = useState([]);
  const profit = [];
  const [displayProfit, setDisplayProfit] = useState([]);
  const eps = [];
  const [displayEps, setDisplayEps] = useState([]);
  const [data, setData] = useState([]);
  const [loaddata, setLoaddata] = useState([]);

  for (var i = 0; i < list.length; i++) {
    userList.push(list[i].id);
  }

  useEffect(() => {
    laoding();
  }, []);

  const removeFromBasket = () => {
    dispatch({
      type: "REMOVE_FROM_LIST",
      list: listData,
    });
  };

  const fetchdata = async () => {
    try {
      uniqueList = [...new Set(userList)];
      for (var i = 0; i < uniqueList.length; i++) {
        const response = await axios.get(
          `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${uniqueList[i]}&apikey=${API_KEY_alpha}`
        );
        nameList.push(response.data.Name);
        industryList.push(response.data.Industry);
        peratioList.push(response.data.PERatio);
        marketcapList.push(response.data.MarketCapitalization);
        country.push(response.data.Country);
        profit.push(response.data.ProfitMargin);
        eps.push(response.data.EPS);
      }
      setDisplayNames(nameList);
      setDisplayIndustry(industryList);
      setDisplayPeratio(peratioList);
      setDisplaymarketcap(marketcapList);
      setDisplayCountry(country);
      setDisplayProfit(profit);
      setDisplayEps(eps);

      for (var i = 0; i < uniqueList.length; i++) {
        let obj = {
          symbol: uniqueList[i],
          name: nameList[i],
          industry: industryList[i],
          peRatio: peratioList[i],
          marketcap: marketcapList[i],
          country: country[i],
          eps: eps[i],
          profit: profit[i],
        };
        listData.push(obj);
        setData(listData);

        console.log(listData);
      }
      console.log(listData);
    } catch (error) {
      console.log(error);
    }
  };
  console.log(listData);

  const deleteHandler = (i) => {
    setLoaddata(loaddata.filter((object, j) => j !== i));
  };

  const laoding = async () => {
    await fetchdata();
    setLoaddata(listData);
  };

  const StyledTableCell = withStyles((theme) => ({
    head: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
    },
    body: {
      fontSize: 14,
    },
  }))(TableCell);

  const StyledTableRow = withStyles((theme) => ({
    root: {
      "&:nth-of-type(odd)": {
        backgroundColor: theme.palette.divider,
      },
    },
  }))(TableRow);

  const useStyles = makeStyles({
    root: {
      width: "100%",
      height: "100%",
      overflow: "visibile",
    },
    container: {
      width: "100%",
      height: "100%",
    },
    headers: {
      fontWeight: 500,
      fontSize: 32,
    },
  });
  const classes = useStyles();

  return (
    <div className="body">
      <Paper className={classes.container}>
        <Table className={classes.container}>
          <TableHead>
            <TableRow>
              <StyledTableCell>Remove?</StyledTableCell>
              <StyledTableCell>Symbol</StyledTableCell>
              <StyledTableCell>Name</StyledTableCell>
              <StyledTableCell>Country</StyledTableCell>
              <StyledTableCell>Industry</StyledTableCell>
              <StyledTableCell> Market Capitalization</StyledTableCell>
              <StyledTableCell>Pe Ratio</StyledTableCell>
              <StyledTableCell>EPS</StyledTableCell>
              <StyledTableCell>Profit Margin</StyledTableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {loaddata.map((item, i) => {
              return (
                <StyledTableRow key={i}>
                  <TableCell key={i}>
                    <button
                      onClick={() => {
                        deleteHandler(i);
                        removeFromBasket();
                      }}
                    >
                      Remove
                    </button>
                  </TableCell>
                  <TableCell>{item.symbol}</TableCell>
                  <TableCell>{item.name}</TableCell>

                  <TableCell>{item.country}</TableCell>
                  <TableCell>{item.industry}</TableCell>
                  <TableCell>
                    {" "}
                    <CurrencyFormat
                      value={item.marketcap}
                      decimalScale={2}
                      displayType={"text"}
                      thousandSeparator={true}
                    />
                  </TableCell>
                  <TableCell>
                    {" "}
                    <CurrencyFormat
                      value={item.peRatio}
                      decimalScale={2}
                      displayType={"text"}
                      thousandSeparator={true}
                    />
                  </TableCell>
                  <TableCell>
                    <CurrencyFormat
                      value={item.eps}
                      decimalScale={4}
                      displayType={"text"}
                      thousandSeparator={true}
                    />
                  </TableCell>
                  <TableCell>
                    <CurrencyFormat
                      value={item.profit}
                      decimalScale={4}
                      displayType={"text"}
                      thousandSeparator={true}
                    />
                  </TableCell>
                </StyledTableRow>
              );
            })}
          </TableBody>
        </Table>
      </Paper>
    </div>
  );
}

export default Body;
