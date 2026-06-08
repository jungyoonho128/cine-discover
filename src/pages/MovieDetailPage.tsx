// ================================
// 영화 상세 페이지
//
// 사용된 Hook:
// 1. useParams (react-router) - URL에서 영화 id 추출
// 2. useEffect - 페이지 타이틀 업데이트
// 3. useApp (useContext) - 즐겨찾기 상태 접근
// ================================

import { useParams, useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { movies } from "../data/movies";
import { useApp } from "../context/AppContext";
import "./MovieDetailPage.css";

export default function MovieDetailPage() {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const { isLoggedIn, isFavorite, addFavorite, removeFavorite } = useApp();

  const movie = movies.find((m) => m.id === Number(id));
  const favorited = movie ? isFavorite(movie.id) : false;

  useEffect(() => {
    if (movie) {
      document.title = `${movie.title} - CineDiscover`;
    } else {
      document.title = "영화를 찾을 수 없습니다 - CineDiscover";
    }
    return () => {
      document.title = "CineDiscover";
    };
  }, [movie]);

  if (!movie) {
    return (
      <main className="detail-page">
        <div className="detail-not-found">
          <h2>😢 영화를 찾을 수 없습니다.</h2>
          <p>요청하신 영화가 존재하지 않습니다.</p>
          <button className="btn btn-primary" onClick={() => navigate("/")}>
            홈으로 돌아가기
          </button>
        </div>
      </main>
    );
  }

  const handleFavoriteToggle = () => {
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
    <main className="detail-page">
      <button className="back-btn" onClick={() => navigate(-1)} aria-label="뒤로 가기">
        ← 뒤로
      </button>

      <div className="detail-container">
        <div className="detail-poster">
          <img src={movie.poster} alt={`${movie.title} 포스터`} />
        </div>
        <div className="detail-info">
          <h1 className="detail-title">{movie.title}</h1>

          <div className="detail-meta">
            <span className="badge badge-rating">⭐ {movie.rating}</span>
            <span className="badge badge-year">{movie.year}</span>
            <span className="badge badge-genre">{movie.genre}</span>
            <span className="badge badge-runtime">🕒 {movie.runtime}분</span>
          </div>

          <section className="detail-section">
            <h3>줄거리</h3>
            <p>{movie.description}</p>
          </section>

          <section className="detail-section">
            <h3>감독</h3>
            <p>{movie.director}</p>
          </section>

          <section className="detail-section">
            <h3>출연진</h3>
            <div className="cast-list">
              {movie.cast.map((actor) => (
                <span key={actor} className="cast-tag">
                  {actor}
                </span>
              ))}
            </div>
          </section>

          <button
            className={`btn favorite-toggle-btn ${favorited ? "btn-favorited" : "btn-primary"}`}
            onClick={handleFavoriteToggle}
          >
            {favorited ? "❤️ 즐겨찾기 해제" : "🤍 즐겨찾기에 추가"}
          </button>

          {!isLoggedIn && (
            <p className="login-hint">
              즐겨찾기 기능을 사용하려면{" "}
              <button className="link-btn" onClick={() => navigate("/login")}>
                로그인
              </button>
              이 필요합니다.
            </p>
          )}
        </div>
      </div>
    </main>
  );
}
