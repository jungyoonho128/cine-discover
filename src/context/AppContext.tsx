// ================================
// 전역 상태 관리 Context
//
// [필요성]
// - 로그인 상태(user, isLoggedIn)와 즐겨찾기(favorites) 목록은
//   Navbar, 홈, 상세, 즐겨찾기 등 여러 컴포넌트에서 공유되어야 합니다.
// - props drilling 없이 어떤 컴포넌트에서든 전역 상태에 접근하기 위해
//   Context API를 사용합니다.
// ================================

import { createContext, useContext, useState, useCallback } from "react";
import type { ReactNode } from "react";
import type { AppContextType, Movie, User } from "../types";

// Hook: useCallback 사용 - 함수가 매 렌더링마다 새로 생성되는 것을 방지
// Hook: useState 사용 - 로그인 유저 및 즐겨찾기 상태 관리

const AppContext = createContext<AppContextType | null>(null);

const MOCK_USER: User = {
  id: "1",
  name: "홍길동",
  email: "test@example.com",
};

interface AppProviderProps {
  children: ReactNode;
}

export function AppProvider({ children }: AppProviderProps) {
  const [user, setUser] = useState<User | null>(null);
  const [favorites, setFavorites] = useState<Movie[]>([]);

  const isLoggedIn = user !== null;

  const login = useCallback((email: string, password: string): boolean => {
    // 실제 앱에서는 API 호출, 여기서는 간단한 목 인증
    if (email === "test@example.com" && password === "1234") {
      setUser(MOCK_USER);
      return true;
    }
    return false;
  }, []);

  const logout = useCallback(() => {
    setUser(null);
    setFavorites([]);
  }, []);

  const addFavorite = useCallback((movie: Movie) => {
    setFavorites((prev) => {
      if (prev.some((m) => m.id === movie.id)) return prev;
      return [...prev, movie];
    });
  }, []);

  const removeFavorite = useCallback((movieId: number) => {
    setFavorites((prev) => prev.filter((m) => m.id !== movieId));
  }, []);

  const isFavorite = useCallback(
    (movieId: number): boolean => {
      return favorites.some((m) => m.id === movieId);
    },
    [favorites],
  );

  return (
    <AppContext.Provider
      value={{ user, isLoggedIn, favorites, login, logout, addFavorite, removeFavorite, isFavorite }}
    >
      {children}
    </AppContext.Provider>
  );
}

// useContext Hook - Context 소비를 위한 커스텀 훅
export function useApp(): AppContextType {
  const ctx = useContext(AppContext);
  if (!ctx) throw new Error("useApp must be used within AppProvider");
  return ctx;
}
