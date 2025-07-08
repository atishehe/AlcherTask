import { Routes, Route, Navigate } from "react-router-dom";
import { Home } from "./pages/home";
import  {MovieDetailsCard}  from "./Movies/MovieDetailsCard"; // example

export function AppRoutes() {
  return (
    <Routes>
      <Route path="/home" element={<Home />} />
      <Route path="/movie-details" element={<MovieDetailsCard />} />
      <Route path="/" element={<Navigate to="/home" replace />} />
    </Routes>
  );
}
