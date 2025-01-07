import React, { useState } from "react";
import { Menu, X, ChevronDown, User, Bell, Search } from "lucide-react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);

  const menuItems = [
    { title: "Dashboard", path: "/dashboard" },
    { title: "Students", path: "/students" },
    { title: "Teachers", path: "/teachers" },
    { title: "Classes", path: "/classes" },
    { title: "Schedule", path: "/schedule" },
  ];

  return (
    <nav className="bg-blue-600 shadow-lg">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex-shrink-0">
            <Link to="/" className="text-white text-2xl font-bold">
              SchoolMS
            </Link>
          </div>

          {/* Desktop menu */}
          <div className="hidden md:flex space-x-6">
            {menuItems.map((item) => (
              <Link
                key={item.title}
                to={item.path}
                className="text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium transition-colors"
              >
                {item.title}
              </Link>
            ))}
          </div>

          {/* Right icons */}
          <div className="hidden md:flex items-center space-x-4">
            <button className="text-white hover:bg-blue-700 p-2 rounded-full">
              <Search className="h-5 w-5" />
            </button>
            <button className="text-white hover:bg-blue-700 p-2 rounded-full">
              <Bell className="h-5 w-5" />
            </button>
            <div className="relative">
              <button
                onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                className="flex items-center text-white hover:bg-blue-700 px-3 py-2 rounded-md text-sm font-medium"
              >
                <User className="h-5 w-5 mr-2" />
                <span>Profile</span>
                <ChevronDown className="h-4 w-4 ml-1" />
              </button>
              {isDropdownOpen && (
                <div className="absolute right-0 mt-2 w-48 bg-white rounded-md shadow-lg z-10">
                  <Link
                    to="/profile"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    My Profile
                  </Link>
                  <Link
                    to="/logout"
                    className="block px-4 py-2 text-gray-800 hover:bg-gray-100"
                  >
                    Logout
                  </Link>
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu button */}
          <div className="md:hidden">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="text-white hover:bg-blue-700 p-2 rounded-md"
            >
              {isOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>
        </div>

        {/* Mobile menu */}
        {isOpen && (
          <div className="md:hidden space-y-2 mt-4">
            {menuItems.map((item) => (
              <Link
                key={item.title}
                to={item.path}
                className="block text-white hover:bg-blue-700 px-3 py-2 rounded-md text-base font-medium"
              >
                {item.title}
              </Link>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
