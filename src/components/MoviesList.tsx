import { useEffect, useState } from "react";

interface IPROPS {
  search: string;
  setMovie: any;
}

export const MoviesList: React.FC<IPROPS> = ({ search, setMovie }) => {
  const [movieList, setMovieList] = useState<any[]>([]);
  const getMovie = () => {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=cd8593c0b4f7ff5a636a9ba503c6b5fc"
    )
      .then((res) => res.json())
      .then((json) => setMovieList(json.results));
  };

  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      <h3>Movie list</h3>
      {movieList
        .filter((mov) => mov.original_title.toLowerCase().includes(search))
        .map((movie, index) => (
          <ul>
            <li key={index} onClick={() => setMovie(movie)}>
              {movie.original_title}
            </li>
          </ul>
        ))}
    </div>
  );
};

/*
  <img src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`} />
  <img src={`https://image.tmdb.org/t/p/w500${movie.backdrop_path}`} />
*/
