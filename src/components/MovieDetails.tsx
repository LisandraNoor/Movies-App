import React from "react";

interface IPROPS {
  selectedMovie: any;
  setMovie: any;
}

export const MovieDetails: React.FC<IPROPS> = ({ selectedMovie, setMovie }) => {
  return (
    <div>
      <h3>Movie details</h3>
      {selectedMovie.original_title}
      <button onClick={() => setMovie({})}>Back</button>
    </div>
  );
};
