import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/Navbar";

function App() {
  const location = useLocation();

  const isLandingPage = location.pathname === "/";

  return (
    <div className="min-h-screen bg-gray-100">
      {!isLandingPage && <Navbar />}

      <AppRoutes />
    </div>
  );
}

export default App;
