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
  const [gainerSymbol, setGainerSymbol] = useState("");
  const [gainerName, setGainerName] = useState("");
  const [gainerChanges, setGainerChanges] = useState(0);
  const [gainerPercent, setGainerPercent] = useState(0);
  const [gainerPrice, setGainerPrice] = useState(0);

  useEffect(() => {
    fetchMostGainerData();
  }, []);

  const fetchMostGainerData = async () => {
    try {
      const reponse = await axios.get(
        `https://financialmodelingprep.com/api/v3/gainers?apikey=${API_KEY_financial}`
      );

      var gainer_price = [];
      var gainer_name = [];
      var gainer_symbol = [];
      var gainer_changes = [];
      var gainer_percent = [];

      for (var gainer in reponse.data) {
        gainer_price.push(reponse.data[gainer].price);
        gainer_name.push(reponse.data[gainer].companyName);
        gainer_symbol.push(reponse.data[gainer].ticker);
        gainer_changes.push(reponse.data[gainer].changes);
        gainer_percent.push(reponse.data[gainer].changesPercentage);
      }
      setGainerPrice(gainer_price);
      setGainerSymbol(gainer_symbol);
      setGainerName(gainer_name);
      setGainerChanges(gainer_changes);
      setGainerPercent(gainer_percent);
    } catch (error) {
      console.log(error);
    }
  };

  //material ui table
  const columns = [
    { id: "mostGain", label: "Most\u00a0Gain", minWidth: 170 },
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
  function createData(mostGain, name, price, change, percentChange) {
    return { mostGain, name, price, change, percentChange };
  }

  const rows = [
    createData(
      gainerSymbol[0],
      gainerName[0],
      gainerPrice[0],
      gainerChanges[0],
      gainerPercent[0]
    ),
    createData(
      gainerSymbol[1],
      gainerName[1],
      gainerPrice[1],
      gainerChanges[1],
      gainerPercent[1]
    ),
    createData(
      gainerSymbol[2],
      gainerName[2],
      gainerPrice[2],
      gainerChanges[2],
      gainerPercent[2]
    ),
    createData(
      gainerSymbol[3],
      gainerName[3],
      gainerPrice[3],
      gainerChanges[3],
      gainerPercent[3]
    ),
    createData(
      gainerSymbol[4],
      gainerName[4],
      gainerPrice[4],
      gainerChanges[4],
      gainerPercent[4]
    ),
    createData(
      gainerSymbol[5],
      gainerName[5],
      gainerPrice[5],
      gainerChanges[5],
      gainerPercent[5]
    ),
    createData(
      gainerSymbol[6],
      gainerName[6],
      gainerPrice[6],
      gainerChanges[6],
      gainerPercent[6]
    ),
    createData(
      gainerSymbol[7],
      gainerName[7],
      gainerPrice[7],
      gainerChanges[7],
      gainerPercent[7]
    ),
    createData(
      gainerSymbol[8],
      gainerName[8],
      gainerPrice[8],
      gainerChanges[8],
      gainerPercent[8]
    ),
    createData(
      gainerSymbol[9],
      gainerName[9],
      gainerPrice[9],
      gainerChanges[9],
      gainerPercent[9]
    ),
  ];

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
    headers: {
      fontWeight: 500,
      fontSize: 32,
    },
  });
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
