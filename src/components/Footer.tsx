// ================================
// Footer 컴포넌트
// ================================

import "./Footer.css";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-inner">
        <p>🎬 CineDiscover &copy; {currentYear}</p>
        <p className="footer-sub">영화 데이터는 학습 목적의 목 데이터입니다.</p>
      </div>
    </footer>
  );
}
