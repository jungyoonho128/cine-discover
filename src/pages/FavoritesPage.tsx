// ================================
// 즐겨찾기 페이지
// ================================

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useApp } from "../context/AppContext";
import MovieList from "../components/MovieList";
import "./FavoritesPage.css";

export default function FavoritesPage() {
  const { isLoggedIn, favorites, user } = useApp();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = "즐겨찾기 - CineDiscover";
    if (!isLoggedIn) {
      navigate("/login", { replace: true });
    }
  }, [isLoggedIn, navigate]);

  if (!isLoggedIn) return null;

  return (
    <main className="favorites-page">
      <div className="favorites-header">
        <h1>❤️ {user?.name}님의 즐겨찾기</h1>
        <p>
          {favorites.length > 0
            ? `총 ${favorites.length}편의 영화를 저장했습니다.`
            : "아직 즐겨찾기한 영화가 없습니다."}
        </p>
      </div>

      <MovieList
        movies={favorites}
        emptyMessage="즐겨찾기한 영화가 없습니다. 홈에서 마음에 드는 영화를 추가해 보세요!"
      />

      {favorites.length === 0 && (
        <div className="empty-action">
          <button className="btn btn-primary" onClick={() => navigate("/")}>
            영화 탐색하러 가기
          </button>
        </div>
      )}
    </main>
  );
}
