import { BrowserRouter, Link, Switch, Route } from "react-router-dom";

import { Router } from "./router/Router";
import "./styles.css";
import { Home } from "./components/Home";
import { Page1 } from "./components/Page1";
import { Page2 } from "./components/Page2";
import { Page1DetailA } from "./components/Page1DetailA";
import { Page1DetailB } from "./components/Page1DetailB";
import { Page2DetailA } from "./components/Page2DetailA";
import { Page2DetailB } from "./components/Page2DetailA";

export const App = () => {
  return (
    <BrowserRouter>
      <div className="App">
        <Link to="/">Home</Link>
        <br />
        <Link to="/page1">Page1</Link>
        <br />
        <Link to="/page2">Page2</Link>
      </div>
      <Router />
    </BrowserRouter>
  );
};
