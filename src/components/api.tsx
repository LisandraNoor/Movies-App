export interface Movie {
  id: number;
  title: string;
  original_title: string;
  release_date: string;
  poster_path: string;
  backdrop_path: string;
  vote_average: number;
  overview: string;
}

export async function fetchMovies(): Promise<Movie[]> {
  const response = await fetch(
    "https://api.themoviedb.org/3/discover/movie?api_key=cd8593c0b4f7ff5a636a9ba503c6b5fc"
  )
    .then((res) => res.json())
    .then((json) => json.results);
  return response;
}
