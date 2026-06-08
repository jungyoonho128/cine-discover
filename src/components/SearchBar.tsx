// ================================
// SearchBar 컴포넌트
// - 검색어 입력 및 장르 필터
// ================================

import "./SearchBar.css";

interface SearchBarProps {
  query: string;
  onQueryChange: (value: string) => void;
  selectedGenre: string;
  onGenreChange: (genre: string) => void;
  genres: string[];
}

export default function SearchBar({ query, onQueryChange, selectedGenre, onGenreChange, genres }: SearchBarProps) {
  return (
    <div className="search-bar">
      <div className="search-input-wrapper">
        <span className="search-icon">🔍</span>
        <input
          type="text"
          className="search-input"
          placeholder="영화 제목을 검색하세요..."
          value={query}
          onChange={(e) => onQueryChange(e.target.value)}
          aria-label="영화 검색"
        />
        {query && (
          <button className="search-clear" onClick={() => onQueryChange("")} aria-label="검색어 지우기">
            ✕
          </button>
        )}
      </div>
      <div className="genre-filters">
        {genres.map((genre) => (
          <button
            key={genre}
            className={`genre-btn ${selectedGenre === genre ? "active" : ""}`}
            onClick={() => onGenreChange(genre)}
          >
            {genre}
          </button>
        ))}
      </div>
    </div>
  );
}
