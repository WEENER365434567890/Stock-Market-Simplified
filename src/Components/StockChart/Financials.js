import Axios from "axios";
import { useEffect, useState } from "react";
import { useStateValue } from "../../Context/StateProvider";
import { API_KEY_alpha } from "../../Data/Keys";
import PropTypes from "prop-types";
import React from "react";
import SwipeableViews from "react-swipeable-views";
import { makeStyles, useTheme } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Tabs from "@material-ui/core/Tabs";
import Tab from "@material-ui/core/Tab";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import CurrencyFormat from "react-currency-format";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`full-width-tabpanel-${index}`}
      aria-labelledby={`full-width-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.any.isRequired,
  value: PropTypes.any.isRequired,
};

function a11yProps(index) {
  return {
    id: `full-width-tab-${index}`,
    "aria-controls": `full-width-tabpanel-${index}`,
  };
}

const useStyles = makeStyles((theme) => ({
  root: {
    backgroundColor: theme.palette.background.paper,
    width: 500,
    marginTop: 60,
  },
}));

function Financials() {
  const [{ symbol }, dispatch] = useStateValue();
  const classes = useStyles();
  const theme = useTheme();
  const [value, setValue] = React.useState(0);
  //income balance sheet
  const [year, setYear] = useState("");
  const [currency, setCurrency] = useState("");
  const [revenue, setRevenue] = useState(0);
  const [costs, setCosts] = useState(0);
  const [profit, setProfit] = useState(0);
  const [ebit, setEbit] = useState(0);
  const [research, setResearch] = useState(0);
  const [tax, setTax] = useState(0);
  const [netIncome, setNetIncome] = useState(0);
  //balance sheet
  const [assets, setAssets] = useState(0);
  const [liabilities, setLiabilities] = useState(0);
  const [commonStock, setCommonStock] = useState(0);
  const [retainedEarnings, setRetainedEarnings] = useState(0);
  const [cash, setCash] = useState(0);
  const [debt, setDebt] = useState(0);
  const [invetory, setInvetory] = useState(0);
  const [shareholderequity, setShareholderequity] = useState(0);
  //overview
  const [sharesOutstanding, setSharesOutstanding] = useState(0);
  const [sharesFloat, setSharesFloat] = useState(0);
  const [shareShort, setShareShort] = useState(0);
  const [shortRatio, setShortRatio] = useState(0);
  const [percentInsiders, setPercentInsiders] = useState(0);
  const [percentInstitutaionl, setPercentInstitutaionl] = useState(0);

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
    fetchIncomeStatement();
    fetchBalanceSheet();
    fetchOverview();
    fetchCompanyOverview2();
  }, [symbol]);

  const fetchIncomeStatement = async () => {
    try {
      const response = await Axios.get(
        `https://www.alphavantage.co/query?function=INCOME_STATEMENT&symbol=${symbol}&apikey=${API_KEY_alpha}`
      );
      /*    console.log(response.data.annualReports[0].fiscalDateEnding); */

      setYear(response.data.annualReports[0].fiscalDateEnding);
      setCurrency(response.data.annualReports[0].reportedCurrency);
      setRevenue(response.data.annualReports[0].totalRevenue);
      setCosts(response.data.annualReports[0].costOfRevenue);
      setProfit(response.data.annualReports[0].grossProfit);
      setEbit(response.data.annualReports[0].ebit);
      setResearch(response.data.annualReports[0].researchAndDevelopment);
      setTax(response.data.annualReports[0].taxProvision);
      setNetIncome(response.data.annualReports[0].netIncome);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchBalanceSheet = async () => {
    try {
      const response = await Axios.get(
        `https://www.alphavantage.co/query?function=BALANCE_SHEET&symbol=${symbol}&apikey=${API_KEY_alpha}`
      );

      setAssets(response.data.annualReports[0].totalAssets);
      setLiabilities(response.data.annualReports[0].totalLiabilities);
      setCommonStock(
        response.data.annualReports[0].commonStockSharesOutstanding
      );
      setRetainedEarnings(response.data.annualReports[0].retainedEarnings);
      setCash(response.data.annualReports[0].cash);
      setDebt(response.data.annualReports[0].totalLongTermDebt);
      setInvetory(response.data.annualReports[0].inventory);
      setShareholderequity(
        response.data.annualReports[0].totalShareholderEquity
      );
    } catch (error) {
      console.log(error);
    }
  };

  const fetchOverview = async () => {
    try {
      const response = await Axios.get(
        `https://www.alphavantage.co/query?function=OVERVIEW&symbol=${symbol}&apikey=${API_KEY_alpha}`
      );
      setSharesOutstanding(response.data.SharesOutstanding);
      setSharesFloat(response.data.SharesFloat);
      setShareShort(response.data.SharesShort);
      setShortRatio(response.data.ShortRatio);
      setPercentInsiders(response.data.PercentInsiders);
      setPercentInstitutaionl(response.data.PercentInstitutions);
    } catch (error) {
      console.log(error);
    }
  };

  const fetchCompanyOverview2 = async () => {
    try {
      const response = await Axios.get(
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
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const handleChangeIndex = (index) => {
    setValue(index);
  };
  if (year === 0) {
    return <div> there is no finiancial date right now</div>;
  }
  return (
    <div className={classes.root}>
      <AppBar position="static" color="default">
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="primary"
          textColor="primary"
          variant="fullWidth"
          aria-label="full width tabs example"
        >
          <Tab label="Overview" {...a11yProps(0)} />
          <Tab label="Balance Sheet" {...a11yProps(1)} />
          <Tab label="Income Statement" {...a11yProps(2)} />
        </Tabs>
      </AppBar>
      <SwipeableViews
        axis={theme.direction === "rtl" ? "x-reverse" : "x"}
        index={value}
        onChangeIndex={handleChangeIndex}
      >
        <TabPanel
          style={{ background: "#DEDEDE" }}
          value={value}
          index={0}
          dir={theme.direction}
        >
          <div>
            Employees:{" "}
            <CurrencyFormat
              value={employees}
              displayType={"text"}
              thousandSeparator={true}
            />
          </div>
          <div>
            Market Capitalization:{" "}
            <CurrencyFormat
              value={marketcap}
              displayType={"text"}
              thousandSeparator={true}
            />
          </div>
          <div>PE Ratio: {peRatio}</div>
          <div>
            Dividend Yield:{" "}
            <CurrencyFormat
              value={divYield}
              decimalScale={2}
              displayType={"text"}
              thousandSeparator={true}
              suffix={"%"}
            />
          </div>
          <div>
            Dividend Per Share:{" "}
            <CurrencyFormat
              value={divPerShare}
              decimalScale={2}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
            />
          </div>
          <div>EPS: {eps1}</div>
          <div>Beta: {beta}</div>
          <div>
            52 Week High:{" "}
            <CurrencyFormat
              value={yearHigh}
              decimalScale={2}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
            />
          </div>
          <div>
            52 Week Low:{" "}
            <CurrencyFormat
              value={yearLow}
              decimalScale={2}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
            />
          </div>
          <div>
            50 Day Average:{" "}
            <CurrencyFormat
              value={fiftyAvg}
              decimalScale={2}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
            />{" "}
          </div>
          <div>
            200 Day Average:{" "}
            <CurrencyFormat
              value={twohundredAvg}
              decimalScale={2}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
            />{" "}
          </div>
          <div> Financial year: {year}</div>
          <div>
            Shares Outstanding:{" "}
            <CurrencyFormat
              value={sharesOutstanding}
              decimalScale={2}
              displayType={"text"}
              thousandSeparator={true}
            />
          </div>
          <div>
            Shares Float:{" "}
            <CurrencyFormat
              value={sharesFloat}
              decimalScale={2}
              displayType={"text"}
              thousandSeparator={true}
            />
          </div>
          <div>
            Shares Short:{" "}
            <CurrencyFormat
              value={shareShort}
              decimalScale={2}
              displayType={"text"}
              thousandSeparator={true}
            />
          </div>
          <div>
            Short Ratio:{" "}
            <CurrencyFormat
              value={shortRatio}
              decimalScale={2}
              displayType={"text"}
              thousandSeparator={true}
            />
          </div>
          <div>
            Percent Insiders :{" "}
            <CurrencyFormat
              value={percentInsiders}
              decimalScale={2}
              displayType={"text"}
              thousandSeparator={true}
              suffix="%"
            />
          </div>
          <div>
            Percent Institutaionl{" "}
            <CurrencyFormat
              value={percentInstitutaionl}
              decimalScale={2}
              displayType={"text"}
              thousandSeparator={true}
              suffix="%"
            />
          </div>
        </TabPanel>
        <TabPanel
          value={value}
          index={1}
          style={{ background: "#DEDEDE" }}
          dir={theme.direction}
        >
          <div> Financial year: {year}</div>
          <div>
            Assest:{" "}
            <CurrencyFormat
              value={assets}
              decimalScale={2}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
            />
          </div>
          <div>
            Liabilities:{" "}
            <CurrencyFormat
              value={liabilities}
              decimalScale={2}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
            />
          </div>
          <div>
            Common Stock:{" "}
            <CurrencyFormat
              value={commonStock}
              decimalScale={2}
              displayType={"text"}
              thousandSeparator={true}
            />
          </div>
          <div>
            Retained Earnings:{" "}
            <CurrencyFormat
              value={retainedEarnings}
              decimalScale={2}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
            />
          </div>
          <div>
            Cash:{" "}
            <CurrencyFormat
              value={cash}
              decimalScale={2}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
            />
          </div>
          <div>
            Debt:{" "}
            <CurrencyFormat
              value={debt}
              decimalScale={2}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
            />
          </div>
          <div>
            Inventory:{" "}
            <CurrencyFormat
              value={invetory}
              decimalScale={2}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
            />
          </div>
          <div>
            Shareholder Equity{" "}
            <CurrencyFormat
              value={shareholderequity}
              decimalScale={2}
              displayType={"text"}
              thousandSeparator={true}
            />
          </div>
        </TabPanel>
        <TabPanel
          style={{ background: "#DEDEDE" }}
          value={value}
          index={2}
          dir={theme.direction}
        >
          <div> Financial year: {year}</div>
          <div> Currency reported: {currency}</div>
          <div>
            Revenue:
            <CurrencyFormat
              value={revenue}
              decimalScale={2}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
            />
          </div>
          <div>
            Costs:{" "}
            <CurrencyFormat
              value={costs}
              decimalScale={2}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
            />
          </div>
          <div>
            Profit:{" "}
            <CurrencyFormat
              value={profit}
              decimalScale={2}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
            />
          </div>
          <div>
            Ebit:{" "}
            <CurrencyFormat
              value={ebit}
              decimalScale={2}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
            />
          </div>
          <div>
            Research:{" "}
            <CurrencyFormat
              value={research}
              decimalScale={2}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
            />
          </div>
          <div>
            Tax:{" "}
            <CurrencyFormat
              value={tax}
              decimalScale={2}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
            />{" "}
          </div>
          <div>
            Net income:{" "}
            <CurrencyFormat
              value={netIncome}
              decimalScale={2}
              displayType={"text"}
              thousandSeparator={true}
              prefix={"$"}
            />
          </div>
        </TabPanel>
      </SwipeableViews>
    </div>
  );
}

export default Financials;
