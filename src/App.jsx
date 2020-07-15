import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";
import Home from "./pages/Home";
import Latest from "./pages/Latest";
import Error from "./pages/404";
import "./App.css";

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/" exact>
          <Home />
        </Route>
        <Route path="/latest" exact>
          <Latest />
        </Route>
        {/* 404 route*/}
        <Route path="/">
          <Error />
        </Route>
      </Switch>
    </Router>
  );
}

export default App;
