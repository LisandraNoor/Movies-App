import React, { useState } from "react";
import "./App.css";
import "./style/App.scss";
import { Header } from "./components/Header";
import { MoviesList } from "./components/MoviesList";
import { MovieDetails } from "./components/MovieDetails";

function App() {
  const [search, setSearch] = useState<string>("");
  const [selectedMovie, setSelectedMovie] = useState({});

  function setMovie(movie: []) {
    setSelectedMovie(movie);
  }

  return (
    <div className="App">
      {Object.keys(selectedMovie).length === 0 ? (
        <>
          <Header setSearch={setSearch} />
          <MoviesList search={search} setMovie={setMovie} />
        </>
      ) : (
        <MovieDetails selectedMovie={selectedMovie} setMovie={setMovie} />
      )}
    </div>
  );
}

export default App;
