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
      <a href="#" className="button">
        Learn More
      </a>
    </div>
  </div>
);

export default MovieCard;
