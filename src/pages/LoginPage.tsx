// ================================
// 로그인 페이지
// ================================

import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useApp } from "../context/AppContext";
import LoginForm from "../components/LoginForm";
import "./LoginPage.css";

export default function LoginPage() {
  const { isLoggedIn } = useApp();
  const navigate = useNavigate();

  // useEffect: 이미 로그인 상태면 홈으로 리디렉션
  useEffect(() => {
    if (isLoggedIn) {
      navigate("/", { replace: true });
    }
    document.title = "로그인 - CineDiscover";
  }, [isLoggedIn, navigate]);

  return (
    <main className="login-page">
      <div className="login-card">
        <div className="login-header">
          <h1>🎬 CineDiscover</h1>
          <p>로그인하여 즐겨찾기를 사용하세요</p>
        </div>
        <LoginForm />
      </div>
    </main>
  );
}
