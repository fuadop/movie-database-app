import React from "react";
import { Link } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

export default () => {
  return (
    <div className="jumbotron-fluid bg-light p-5   text-center">
      <h2>OOPS!!</h2>
      <h4>Page not Found</h4>
      <Link to="/">
        <p className="text-muted">Go to our homepage</p>
      </Link>
    </div>
  );
};
