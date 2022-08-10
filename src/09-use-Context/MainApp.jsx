import { Navigate, Route, Routes } from "react-router-dom";
import { AboutPage } from "./AboutPage";
import { HomePage } from "./HomePage";
import { LoginPage } from "./LoginPage";
import { NavBar } from "./NavBar";

export const MainApp = () => {
  return (
    <>
      <h1>Main App</h1>
      <NavBar />
      <hr />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="about" element={<AboutPage />} />
        <Route path="login" element={<LoginPage />} />

        {/* en caso de no encontrar la ruta */}
        <Route path="/*" element={<Navigate to="about" />} />
      </Routes>
    </>
  );
};
