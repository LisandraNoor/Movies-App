import React from "react";
import "../style/movieDetails.scss";
import star from "../media/star.png";

interface IPROPS {
  selectedMovie: any;
  setMovie: any;
}

export const MovieDetails: React.FC<IPROPS> = ({ selectedMovie, setMovie }) => {
  function formatDate(date: string) {
    return date.split("-").reverse().join("/");
  }
  return (
    <div
      className="movie"
      style={{
        backgroundImage: `url(
          https://image.tmdb.org/t/p/original${selectedMovie.backdrop_path}
        )`,
      }}
    >
      <button type="button" className="bck-btn" onClick={() => setMovie({})}>
        &larr; Back
      </button>
      <div className="mov-details">
        <h1 className="title">{selectedMovie.title}</h1>
        <div className="mov-info">
          <img
            className="poster"
            alt="poster"
            src={`https://image.tmdb.org/t/p/w500${selectedMovie.poster_path}`}
          />
          <table className="desc1">
            <tbody className="info">
              <tr>
                <td className="sub">Original Title:</td>
                <td className="original-title">
                  {selectedMovie.original_title}
                </td>
              </tr>
              <tr>
                <td className="sub">Release Date:</td>
                <td className="release-date">
                  {formatDate(selectedMovie.release_date)}
                </td>
              </tr>
              <tr>
                <td className="sub">Rating:</td>
                <td className="vote-average">
                  {selectedMovie.vote_average.toFixed(1)}
                  <img className="star" alt="star" src={star} />
                </td>
              </tr>
            </tbody>
          </table>
        </div>
        <div className="desc2">
          <p className="overview-subtitle">Description:</p>
          <p className="overview">{selectedMovie.overview}</p>
        </div>
      </div>
    </div>
  );
};
