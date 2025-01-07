import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false); // For mobile menu toggle
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("access_token");
    localStorage.removeItem("refresh_token");
    navigate("/login");
  };

  return (
    <nav className="bg-gradient-to-r from-blue-500 to-indigo-600 text-white shadow-lg sticky top-0 z-30">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo Section */}
        <Link
          to="/"
          className="text-2xl font-bold tracking-wide hover:text-indigo-200 transition duration-300"
        >
          <span className="bg-white text-blue-500 px-2 py-1 rounded-md">
            EduPro
          </span>
        </Link>

        {/* Mobile Menu Button */}
        <button
          className="lg:hidden text-white focus:outline-none"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-8 h-8"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            strokeWidth="2"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4 6h16M4 12h16M4 18h16"
            />
          </svg>
        </button>

        {/* Links Section */}
        <ul
          className={`lg:flex space-x-8 text-sm font-medium ${
            menuOpen ? "block" : "hidden"
          } lg:block`}
        >
          <li>
            <Link
              to="/dashboard"
              className="hover:text-indigo-300 transition duration-300"
            >
              Dashboard
            </Link>
          </li>
          <li>
            <Link
              to="/attendance"
              className="hover:text-indigo-300 transition duration-300"
            >
              Attendance
            </Link>
          </li>
          <li>
            <Link
              to="/classes"
              className="hover:text-indigo-300 transition duration-300"
            >
              Classes
            </Link>
          </li>
          <li>
            <Link
              to="/profile"
              className="hover:text-indigo-300 transition duration-300"
            >
              Profile
            </Link>
          </li>
        </ul>

        {/* Profile/Logout Section */}
        <div className="flex items-center space-x-4 relative">
          <button
            onClick={() => setDropdownOpen(!dropdownOpen)}
            className="bg-blue-700 hover:bg-blue-800 text-sm font-semibold py-2 px-4 rounded-full focus:outline-none"
          >
            Account
          </button>

          {/* Dropdown Menu */}
          {dropdownOpen && (
            <div className="absolute right-0 mt-2 w-48 bg-white text-gray-700 rounded-md shadow-lg z-10 transition-all ease-in-out duration-300">
              <ul>
                <li>
                  <Link
                    to="/profile"
                    className="block px-4 py-2 hover:bg-gray-200 transition"
                  >
                    My Profile
                  </Link>
                </li>
                <li>
                  <Link
                    to="/settings"
                    className="block px-4 py-2 hover:bg-gray-200 transition"
                  >
                    Settings
                  </Link>
                </li>
                <li>
                  <button
                    onClick={handleLogout}
                    className="block w-full text-left px-4 py-2 hover:bg-gray-200 transition"
                  >
                    Logout
                  </button>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
