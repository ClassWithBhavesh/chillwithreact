import React, { useEffect } from "react";
import "./App.css";
// import Navbar from './components/Navbar'
import Header from "./components/Header";
import Sidebar from "./components/SideSlidingBar";
import SideSlidingBar from "./components/SideSlidingBar";
import MovieCard from "./components/MovieCard";
import { useMovieData } from "./custom_hook/useMovieData";

function App() {

  useEffect(() => {
    getMovieData();
  }, []);

  const getMovieData = async () => {
    const movieData = await useMovieData("https://api.themoviedb.org/3/discover/movie");
    console.log(movieData);
  }
  
  
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
