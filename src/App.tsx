import React, { useEffect, useState } from "react";
import "./App.css";
import "./style/App.scss";
import { MovieDetails } from "./components/MovieDetails";
import { fetchMovies, type Movie } from "./components/api";
import { Home } from "./components/Home";

function App() {
  const [selectedMovie, setSelectedMovie] = useState<any[]>([]);
  const [movieList, setMovieList] = useState<Movie[]>([]);

  function setMovie(movie: []) {
    setSelectedMovie(movie);
  }

  const randomBackdrop = () => {
    const backdrops = movieList.map((mov) => mov.backdrop_path);
    const randomNr = Math.floor(Math.random() * backdrops.length);
    return backdrops[randomNr];
  };

  useEffect(() => {
    fetchMovies().then((data) => setMovieList(data));
  }, []);

  return (
    <div
      className="App"
      style={{
        backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)), url(https://image.tmdb.org/t/p/original${randomBackdrop()})`,
      }}
    >
      {Object.keys(selectedMovie).length === 0 ? (
        <Home setMovie={setMovie} movieList={movieList} />
      ) : (
        <MovieDetails selectedMovie={selectedMovie} setMovie={setMovie} />
      )}
    </div>
  );
}

export default App;
