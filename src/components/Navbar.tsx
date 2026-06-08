// ================================
// Navbar 컴포넌트
// - 네비게이션 링크 + 로그인/로그아웃 버튼
// - useApp() → useContext(AppContext) 사용
// ================================

import { Link, useNavigate } from "react-router-dom";
import { useApp } from "../context/AppContext";
import "./Navbar.css";

export default function Navbar() {
  const { isLoggedIn, user, logout } = useApp();
  const navigate = useNavigate();

  const handleLogout = () => {
    logout();
    navigate("/");
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <Link to="/">🎬 CineDiscover</Link>
      </div>
      <ul className="navbar-links">
        <li>
          <Link to="/">홈</Link>
        </li>
        {isLoggedIn && (
          <li>
            <Link to="/favorites">즐겨찾기</Link>
          </li>
        )}
      </ul>
      <div className="navbar-auth">
        {isLoggedIn ? (
          <>
            <span className="navbar-user">👤 {user?.name}</span>
            <button onClick={handleLogout} className="btn btn-outline">
              로그아웃
            </button>
          </>
        ) : (
          <Link to="/login" className="btn btn-primary">
            로그인
          </Link>
        )}
      </div>
    </nav>
  );
}
