import React, { useState } from "react";
import { Header } from "./Header";
import { MoviesList } from "./MoviesList";

interface IPROPS {
  setMovie: any;
  movieList: any;
}

export const Home: React.FC<IPROPS> = ({ setMovie, movieList }) => {
  const [search, setSearch] = useState<string>("");

  return (
    <>
      <Header setSearch={setSearch} />
      <MoviesList search={search} setMovie={setMovie} movieList={movieList} />
    </>
  );
};
