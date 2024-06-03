import React from "react";
import "./App.css";
import { Header } from "./components/Header";
import { MoviesList } from "./components/MoviesList";
import { MovieDetails } from "./components/MovieDetails";

function App() {
  return (
    <div className="App">
      <Header />
      <MoviesList />
      <MovieDetails />
    </div>
  );
}

export default App;
