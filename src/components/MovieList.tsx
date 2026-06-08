// ================================
// MovieList 컴포넌트
// - 영화 카드 그리드 렌더링
// ================================

import type { Movie } from "../types";
import MovieCard from "./MovieCard";
import "./MovieList.css";

interface MovieListProps {
  movies: Movie[];
  emptyMessage?: string;
}

export default function MovieList({ movies, emptyMessage = "영화가 없습니다." }: MovieListProps) {
  if (movies.length === 0) {
    return (
      <div className="movie-list-empty">
        <p>🎞️ {emptyMessage}</p>
      </div>
    );
  }

  return (
    <div className="movie-grid">
      {movies.map((movie) => (
        <MovieCard key={movie.id} movie={movie} />
      ))}
    </div>
  );
}
