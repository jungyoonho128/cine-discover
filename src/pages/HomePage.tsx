// ================================
// 홈 페이지
//
// 사용된 Hook:
// 1. useState - 검색어, 선택 장르 상태 관리
// 2. useMemo - 필터링된 영화 목록 메모이제이션 (불필요한 재계산 방지)
// 3. useEffect - 페이지 타이틀 업데이트
// ================================

import { useState, useMemo, useEffect } from "react";
import SearchBar from "../components/SearchBar";
import MovieList from "../components/MovieList";
import { movies, genres } from "../data/movies";
import "./HomePage.css";

export default function HomePage() {
  const [query, setQuery] = useState("");
  const [selectedGenre, setSelectedGenre] = useState("전체");

  // useEffect: 페이지 접근 시 document title 변경
  useEffect(() => {
    document.title = "CineDiscover - 영화 탐색";
  }, []);

  // useMemo: query 또는 selectedGenre가 바뀔 때만 필터링 재실행 (성능 최적화)
  const filteredMovies = useMemo(() => {
    return movies.filter((movie) => {
      const matchesQuery = movie.title.toLowerCase().includes(query.toLowerCase());
      const matchesGenre = selectedGenre === "전체" || movie.genre.includes(selectedGenre);
      return matchesQuery && matchesGenre;
    });
  }, [query, selectedGenre]);

  return (
    <main className="home-page">
      <section className="hero">
        <h1>🎬 당신의 다음 영화를 찾아보세요</h1>
        <p>인기 영화를 탐색하고 즐겨찾기에 저장하세요.</p>
      </section>

      <section className="home-content">
        <SearchBar
          query={query}
          onQueryChange={setQuery}
          selectedGenre={selectedGenre}
          onGenreChange={setSelectedGenre}
          genres={genres}
        />

        <div className="results-header">
          <h2>
            {selectedGenre === "전체" ? "전체 영화" : selectedGenre}
            <span className="results-count"> ({filteredMovies.length}편)</span>
          </h2>
        </div>

        <MovieList movies={filteredMovies} emptyMessage="검색 결과가 없습니다. 다른 검색어를 입력해 보세요." />
      </section>
    </main>
  );
}
