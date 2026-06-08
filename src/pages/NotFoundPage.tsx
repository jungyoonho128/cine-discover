// ================================
// 404 Not Found 페이지
// ================================

import { useNavigate } from "react-router-dom";
import "./NotFoundPage.css";

export default function NotFoundPage() {
  const navigate = useNavigate();

  return (
    <main className="notfound-page">
      <div className="notfound-content">
        <h1 className="notfound-code">404</h1>
        <h2>페이지를 찾을 수 없습니다</h2>
        <p>요청하신 페이지가 존재하지 않거나 이동되었습니다.</p>
        <button className="btn btn-primary" onClick={() => navigate("/")}>
          홈으로 돌아가기
        </button>
      </div>
    </main>
  );
}
