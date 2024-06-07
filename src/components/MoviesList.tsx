import { useEffect, useState } from "react";
import "../style/movieList.scss";

interface IPROPS {
  search: string;
  setMovie: any;
}

export const MoviesList: React.FC<IPROPS> = ({ search, setMovie }) => {
  const [movieList, setMovieList] = useState<any[]>([]);
  const [currentPage, setCurrentPage] = useState(1);
  const recordsPerPage = 10;
  const lastIndex = currentPage * recordsPerPage;
  const firstIndex = lastIndex - recordsPerPage;

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

  function prePage() {
    if (currentPage !== 1) {
      setCurrentPage(currentPage - 1);
    }
  }

  function nextPage() {
    if (currentPage !== npage) {
      setCurrentPage(currentPage + 1);
    }
  }

  function changePage(id: number) {
    setCurrentPage(id);
  }

  function getYear(y: string) {
    return y.slice(0, 4);
  }

  const searchFilter = () => {
    return movieList.filter((mov) => mov.title.toLowerCase().includes(search));
  };

  const movies = searchFilter().slice(firstIndex, lastIndex);
  const npage = Math.ceil(searchFilter().length / recordsPerPage);
  const numbers = [...Array(npage + 1).keys()].slice(1);

  return (
    <div className="movie-list">
      {searchFilter().length === 0 ? (
        <p className="not-found">Not Found</p>
      ) : (
        <ul className="movies">
          {movies.map((movie) => (
            <li
              className="movie-item"
              key={movie.id}
              onClick={() => setMovie(movie)}
            >
              <img
                alt="poster"
                src={`https://image.tmdb.org/t/p/w500${movie.poster_path}`}
              />
              <div className="text-info">
                <p className="title">{movie.title}</p>
                <p className="date">{getYear(movie.release_date)}</p>
              </div>
            </li>
          ))}
        </ul>
      )}
      <nav>
        <ul className="pagination">
          <li className="page-item">
            <button className="page-link" onClick={prePage}>
              {"<"}
            </button>
          </li>
          {numbers.map((n, i) => (
            <li
              className={`page-item ${currentPage === n ? "active" : ""}`}
              key={i}
            >
              <button className="page-link" onClick={() => changePage(n)}>
                {n}
              </button>
            </li>
          ))}
          <li className="page-item">
            <button className="page-link" onClick={nextPage}>
              {">"}
            </button>
          </li>
        </ul>
      </nav>
    </div>
  );
};
