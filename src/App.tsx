import { HashRouter, Routes, Route } from "react-router-dom";
import { AppProvider } from "./context/AppContext";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import HomePage from "./pages/HomePage";
import MovieDetailPage from "./pages/MovieDetailPage";
import LoginPage from "./pages/LoginPage";
import FavoritesPage from "./pages/FavoritesPage";
import NotFoundPage from "./pages/NotFoundPage";
import "./App.css";

export default function App() {
  return (
    <AppProvider>
      <HashRouter>
        <div className="app-layout">
          <Navbar />
          <div className="app-content">
            <Routes>
              <Route path="/" element={<HomePage />} />
              <Route path="/movie/:id" element={<MovieDetailPage />} />
              <Route path="/login" element={<LoginPage />} />
              <Route path="/favorites" element={<FavoritesPage />} />
              <Route path="*" element={<NotFoundPage />} />
            </Routes>
          </div>
          <Footer />
        </div>
      </HashRouter>
    </AppProvider>
  );
}
