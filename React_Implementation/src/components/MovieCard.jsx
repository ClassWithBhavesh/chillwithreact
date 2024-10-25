import React from "react";
import ReactDOM from "react-dom";
import "../styles/style.css";

const MovieCard = () => (
  <div className="card">
    <div className="card-content">
      <h2 className="card-title">Something Awesome</h2>
      <p className="card-body">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Optio, culpa.
      </p>
      <div className="btn_box">
        <a href="#" className="button">
          Learn More
        </a>
        <a href="#" className="button watchlist_btn">
          +
        </a>
      </div>
    </div>
  </div>
);

export default MovieCard;
