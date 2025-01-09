import { Route, Routes, useLocation } from "react-router-dom";
import "./App.css";
import AppRoutes from "./routes/AppRoutes";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

function App() {
  const location = useLocation();

  const isLandingPage = location.pathname === "/";

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      {!isLandingPage && <Navbar />}
      <main className="flex-grow">
        <AppRoutes />
      </main>
      {!isLandingPage && <Footer />}
    </div>
  );
}

export default App;
