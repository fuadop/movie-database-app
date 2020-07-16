import React from "react";
import "bootstrap/dist/css/bootstrap.css";

export default (props) => {
  const path = props.path;
  let homeClass;
  let latestClass;

  // condition for active path
  if (path === "/") {
    homeClass = "nav-item active";
    latestClass = "nav-item";
  } else {
    latestClass = "nav-item active";
    homeClass = "nav-item";
  }
  return (
    <nav className=" navbar navbar-expand-lg navbar-dark bg-inverse  ">
      <a href="/" className="navbar-brand ">
        Movie DataBase
      </a>
      <div className=" navbar-collapse">
        <ul className="navbar-nav">
          <li className={homeClass}>
            <a href="/" className="nav-link">
              Search
            </a>
          </li>
          <li className={latestClass}>
            <a href="/latest" className="nav-link">
              Latest
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
};
