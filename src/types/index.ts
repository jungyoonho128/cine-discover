// ================================
// 공통 타입 정의
// ================================

export interface Movie {
  id: number;
  title: string;
  genre: string;
  year: number;
  rating: number;
  description: string;
  poster: string;
  director: string;
  cast: string[];
  runtime: number; // 분 단위
}

export interface User {
  id: string;
  name: string;
  email: string;
}

export interface AppContextType {
  user: User | null;
  isLoggedIn: boolean;
  favorites: Movie[];
  login: (email: string, password: string) => boolean;
  logout: () => void;
  addFavorite: (movie: Movie) => void;
  removeFavorite: (movieId: number) => void;
  isFavorite: (movieId: number) => boolean;
}
