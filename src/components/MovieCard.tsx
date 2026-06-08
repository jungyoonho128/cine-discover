// ================================
// MovieCard 컴포넌트 (TypeScript Props 타입 명시적 적용)
// - Movie 타입을 Props 인터페이스로 받아 타입 안전성 확보
// - useApp() → 즐겨찾기 기능
// - useNavigate() → 상세 페이지 이동
// ================================

import { useNavigate } from "react-router-dom";
import { useApp } from "../context/AppContext";
import type { Movie } from "../types";
import "./MovieCard.css";

// TypeScript: Props 인터페이스 명시적 정의
interface MovieCardProps {
  movie: Movie;
  showFavoriteBtn?: boolean;
}

export default function MovieCard({ movie, showFavoriteBtn = true }: MovieCardProps) {
  const navigate = useNavigate();
  const { isLoggedIn, isFavorite, addFavorite, removeFavorite } = useApp();

  const favorited = isFavorite(movie.id);

  const handleFavoriteClick = (e: React.MouseEvent) => {
    e.stopPropagation(); // 카드 클릭 이벤트 전파 방지
    if (!isLoggedIn) {
      navigate("/login");
      return;
    }
    if (favorited) {
      removeFavorite(movie.id);
    } else {
      addFavorite(movie);
    }
  };

  return (
    <article
      className="movie-card"
      onClick={() => navigate(`/movie/${movie.id}`)}
      role="button"
      tabIndex={0}
      onKeyDown={(e) => e.key === "Enter" && navigate(`/movie/${movie.id}`)}
      aria-label={`${movie.title} 상세보기`}
    >
      <div className="movie-card-poster">
        <img src={movie.poster} alt={`${movie.title} 포스터`} loading="lazy" />
        <div className="movie-card-overlay">
          <span className="movie-rating">⭐ {movie.rating}</span>
          {showFavoriteBtn && (
            <button
              className={`favorite-btn ${favorited ? "favorited" : ""}`}
              onClick={handleFavoriteClick}
              aria-label={favorited ? "즐겨찾기 해제" : "즐겨찾기 추가"}
            >
              {favorited ? "❤️" : "🤍"}
            </button>
          )}
        </div>
      </div>
      <div className="movie-card-info">
        <h3 className="movie-title">{movie.title}</h3>
        <p className="movie-meta">
          <span className="movie-year">{movie.year}</span>
          <span className="movie-genre">{movie.genre}</span>
        </p>
      </div>
    </article>
  );
}
