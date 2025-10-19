import { Navigation } from "./components/Navigation";
import { Footer } from "./components/Footer";
import { Navigate, Route, Routes, useLocation } from "react-router";
import { AppRoutes } from "./constants/Routes";
import { Routes as RoutesConts } from "./constants/Routes";
import { useEffect } from "react";

function App() {
  const location = useLocation();

  useEffect(() => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }, [location.pathname]);

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-950 via-black to-gray-950">
      <Navigation />
      <main>
        <Routes>
          {AppRoutes.map((route) => (
            <Route key={route.path} element={route.page} path={route.path} />
          ))}
          <Route
            path="*"
            element={<Navigate to={RoutesConts.HOME} replace />}
          />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
