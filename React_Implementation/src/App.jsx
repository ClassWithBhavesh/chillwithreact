import React from "react";
import "./App.css";
// import Navbar from './components/Navbar'
import Header from "./components/Header";
import Sidebar from "./components/SideSlidingBar";
import SideSlidingBar from "./components/SideSlidingBar";
import MovieCard from "./components/MovieCard";

function App() {
  return (
    <>
      <Header />
      <div className="ott-sec">
        <SideSlidingBar />
        <div className="movie-sec">
          <ul>
            <li>
              <div className="movie-list">
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
              </div>
            </li>
            <li>
              <div className="movie-list">
                <MovieCard />
                <MovieCard />
                <MovieCard />
                <MovieCard />
              </div>
            </li>
          </ul>
        </div>
      </div>

      {/* <Navbar /> */}
    </>
  );
}

export default App;
