import React, { useEffect, useState } from "react";
import axios from "axios";
import { API_KEY_financial } from "../../Data/Keys";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableHead from "@material-ui/core/TableHead";
import TablePagination from "@material-ui/core/TablePagination";
import TableRow from "@material-ui/core/TableRow";
import { withStyles } from "@material-ui/core/styles";

function MarketWinners() {
  const [loserSymbol, setLoserSymbol] = useState("");
  const [loserName, setLoserName] = useState("");
  const [loserChanges, setLoserChanges] = useState(0);
  const [loserPercent, setLoserPercent] = useState(0);
  const [loserPrice, setLoserPrice] = useState(0);

  useEffect(() => {
    fetchMostLoserData();
  }, []);

  const fetchMostLoserData = async () => {
    try {
      const reponse = await axios.get(
        `https://financialmodelingprep.com/api/v3/losers?apikey=${API_KEY_financial}`
      );

      var loser_price = [];
      var loser_name = [];
      var loser_symbol = [];
      var loser_changes = [];
      var loser_percent = [];

      for (var loser in reponse.data) {
        loser_price.push(reponse.data[loser].price);
        loser_name.push(reponse.data[loser].companyName);
        loser_symbol.push(reponse.data[loser].ticker);
        loser_changes.push(reponse.data[loser].changes);
        loser_percent.push(reponse.data[loser].changesPercentage);
      }
      setLoserPrice(loser_price);
      setLoserSymbol(loser_symbol);
      setLoserName(loser_name);
      setLoserChanges(loser_changes);
      setLoserPercent(loser_percent);
    } catch (error) {
      console.log(error);
    }
  };

  //material ui table
  const columns = [
    { id: "mostLose", label: "Most\u00a0Lose", minWidth: 170 },
    { id: "name", label: "Name", minWidth: 100 },
    {
      id: "price",
      label: "Price",
      minWidth: 170,
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "change",
      label: "Change",
      minWidth: 170,
      align: "right",
      format: (value) => value.toLocaleString("en-US"),
    },
    {
      id: "percentChange",
      label: "Percent\u00a0Change",
      minWidth: 170,
      align: "right",
      format: (value) => value.toFixed(2),
    },
  ];
  function createData(mostLose, name, price, change, percentChange) {
    return { mostLose, name, price, change, percentChange };
  }

  const rows = [
    createData(
      loserSymbol[0],
      loserName[0],
      loserPrice[0],
      loserChanges[0],
      loserPercent[0]
    ),
    createData(
      loserSymbol[1],
      loserName[1],
      loserPrice[1],
      loserChanges[1],
      loserPercent[1]
    ),
    createData(
      loserSymbol[2],
      loserName[2],
      loserPrice[2],
      loserChanges[2],
      loserPercent[2]
    ),
    createData(
      loserSymbol[3],
      loserName[3],
      loserPrice[3],
      loserChanges[3],
      loserPercent[3]
    ),
    createData(
      loserSymbol[4],
      loserName[4],
      loserPrice[4],
      loserChanges[4],
      loserPercent[4]
    ),
    createData(
      loserSymbol[5],
      loserName[5],
      loserPrice[5],
      loserChanges[5],
      loserPercent[5]
    ),
    createData(
      loserSymbol[6],
      loserName[6],
      loserPrice[6],
      loserChanges[6],
      loserPercent[6]
    ),
    createData(
      loserSymbol[7],
      loserName[7],
      loserPrice[7],
      loserChanges[7],
      loserPercent[7]
    ),
    createData(
      loserSymbol[8],
      loserName[8],
      loserPrice[8],
      loserChanges[8],
      loserPercent[8]
    ),
    createData(
      loserSymbol[9],
      loserName[9],
      loserPrice[9],
      loserChanges[9],
      loserPercent[9]
    ),
  ];
  const useStyles = makeStyles({
    root: {
      width: "800px",
      overflow: "visibile",
    },
    container: {
      maxHeight: 300,
      maxWidth: 5000,
    },
    test: {
      outline: "2px solid red",
    },
  });

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
  const classes = useStyles();
  const [page, setPage] = React.useState(0);
  const [rowsPerPage, setRowsPerPage] = React.useState(10);

  return (
    <div>
      <Paper className={classes.container}>
        <TableContainer className={classes.container}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <StyledTableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </StyledTableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row) => {
                  return (
                    <StyledTableRow
                      hover
                      role="checkbox"
                      tabIndex={-1}
                      key={row.code}
                    >
                      {columns.map((column) => {
                        const value = row[column.id];
                        return (
                          <TableCell key={column.id} align={column.align}>
                            {column.format && typeof value === "number"
                              ? column.format(value)
                              : value}
                          </TableCell>
                        );
                      })}
                    </StyledTableRow>
                  );
                })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    </div>
  );
}

export default MarketWinners;
