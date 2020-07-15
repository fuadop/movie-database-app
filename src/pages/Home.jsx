import React, { useState, useEffect } from "react";
import { get } from "axios";
import NavBar from "../components/NavBar";
import "bootstrap/dist/css/bootstrap.css";

export default () => {
  const [loading, setLoading] = useState(false);
  let [index, setIndex] = useState(1);
  const [results, setResults] = useState([]);
  const [error, setError] = useState("No results Available, adjust query.");
  const [query, setQuery] = useState("");
  const [pageList, setPageList] = useState(1);

  useEffect(() => {
    const getMovies = async () => {
      try {
        setLoading(true);
        const res = await get(
          `http://www.omdbapi.com/?apiKey=5ff1b91b&s=${query}&page=${index}`
        );
        setResults(res.data.Search);
        setPageList(Math.floor(Number(res.data.totalResults) / 10));
        setLoading(false);
      } catch (err) {
        setError(error);
      }
    };
    getMovies();
  }, [query, index, error]);

  return (
    <div className="container-fluid">
      <NavBar path={"/"} />
      <div className="container">
        <input
          type="text"
          className="form-control mt-3 position-sticky search-input "
          placeholder="Search for a movie .."
          value={query}
          onChange={(e) => {
            setIndex(1);
            setQuery(e.target.value);
          }}
        />

        {loading === true && (
          <div className="container text-center">
            <div className="loadingio-spinner-dual-ring-krxggmmhbt">
              <div className="ldio-bc2ujne9b5r">
                <div></div>
                <div>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        )}

        {loading === false && results !== undefined && (
          <div className="container text-center">
            <button
              className="btn btn-success m-3"
              onClick={() => {
                if (index >= pageList) {
                  setIndex(1);
                } else if (index <= 1) {
                  setIndex(1);
                } else {
                  setIndex(--index);
                }
              }}
            >
              <i className="fa fa-chevron-left"></i>
            </button>
            <button
              className="btn btn-success m-3"
              onClick={() => {
                if (index >= pageList) {
                  setIndex(1);
                } else {
                  setIndex(++index);
                }
              }}
            >
              <i className="fa fa-chevron-right"></i>
            </button>
          </div>
        )}
        {results === undefined && (
          <div
            className="container text-center mt-5"
            style={{ color: "white" }}
          >
            <h3>{error}</h3>
          </div>
        )}
        <div className="results-grid pt-3">
          {typeof results !== String &&
            results !== undefined &&
            results.map((result, index) => {
              return (
                <div className="card " key={index}>
                  <img
                    src={result.Poster}
                    alt="poster"
                    className="card-img-top img-fluid"
                  />
                  <div className="card-block">
                    <h5 className=" card-title text-center my-auto py-3">
                      {result.Title}
                    </h5>
                    <p className="card-text text-center text-muted mb-3">
                      {result.Type}
                      <br />
                      {result.Year}
                    </p>
                  </div>
                </div>
              );
            })}
        </div>
      </div>
    </div>
  );
};
