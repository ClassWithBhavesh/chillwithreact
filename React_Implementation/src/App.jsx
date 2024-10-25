import React from "react";
import "./App.css";
// import Navbar from './components/Navbar'
import Header from "./components/Header";
// import Sidebar from "./components/SideSlidingBar";
// import SideSlidingBar from "./components/SideSlidingBar";
// import MovieCard from "./components/MovieCard";
// import { useMovieData } from "./custom_hook/useMovieData";
import { useDispatch, useSelector } from "react-redux";
import { fetchMovie } from "./Store/Slice/movieSlice";

function App() {

  // useEffect(() => {
  //   getMovieData();
  // }, []);

  // const getMovieData = async () => {
  //   const movieData = await useMovieData("https://api.themoviedb.org/3/discover/movie");
  //   console.log(movieData);
  // }
  
  const dispatch = useDispatch();
  const movieData = useSelector((state) => state);
  console.log(movieData);

  

  return (
    <>
      <Header />
      <button onClick={() => dispatch(fetchMovie())} style={{marginLeft: "50%", marginTop: "20%"}}>Fetch Movies</button>
      {/* <div className="ott-sec">
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
      </div> */}

      {/* <Navbar /> */}
    </>
  );
}

export default App;
