import "./App.css";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import StockCharts from "./Components/StockChart/StockCharts";
import "./Components/MainSearch";
import "bootstrap/dist/css/bootstrap.min.css";

import Home from "./Components/Home/Home";
import About from "./Components/Home/About";
import Register from "./Components/Home/Register";
import Version from "./Components/Home/Version";
import Developer from "./Components/Home/Developer";
import Dashboard from "./Components/Home/Dashboard";

function App() {
  return (
    <div className="app">
      <Router>
        <Switch>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
          <Route path="/developer">
            <Developer />
          </Route>

          <Route path="/versions">
            <Version />
          </Route>
          <Route path="/register">
            <Register />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/app">
            <StockCharts />
          </Route>
          <Route path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
