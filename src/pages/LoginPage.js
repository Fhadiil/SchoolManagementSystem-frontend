import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import API from "../services/api";

const LoginPage = () => {
  const [formData, setFormData] = useState({ username: "", password: "" });
  const [error, setError] = useState(""); // For displaying error messages
  const navigate = useNavigate();

  // Handle input changes
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  // Handle form submission

  const handleSubmit = (e) => {
    e.preventDefault();
    API.post("/auth/login/", formData)
      .then((response) => {
        console.log("Login successful:", response.data);
        // Store token in localStorage
        localStorage.setItem("token", response.data.token);
        localStorage.setItem("refresh_token", response.data.refresh);
        // navigate("/dashboard");
      })
      .catch((error) => {
        console.error("Login failed:", error);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-blue-500 to-indigo-600">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md transform hover:scale-105 transition-transform duration-300">
        <h1 className="text-3xl font-bold text-center mb-6 text-indigo-600">
          Welcome Back!
        </h1>
        {error && (
          <p className="text-red-500 text-center mb-4 border border-red-500 p-2 rounded-md">
            {error}
          </p>
        )}
        <form onSubmit={handleSubmit}>
          <div className="mb-6">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="username"
            >
              Username or Email
            </label>
            <input
              type="text"
              id="username"
              name="username"
              className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your username or email"
              value={formData.username}
              onChange={handleChange}
              required
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 font-medium mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              name="password"
              className="w-full px-4 py-3 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500"
              placeholder="Enter your password"
              value={formData.password}
              onChange={handleChange}
              required
            />
          </div>
          <button
            type="submit"
            className="w-full bg-indigo-600 text-white py-3 rounded-md shadow-md hover:bg-indigo-700 transition duration-300"
          >
            Login
          </button>
          <div className="text-center mt-4">
            <a href="#" className="text-sm text-gray-500 hover:text-indigo-600">
              Forgot Password?
            </a>
          </div>
          <div className="text-center mt-4">
            <span className="text-sm text-gray-500">
              Don't have an account?{" "}
            </span>
            <a href="/register" className="text-sm text-indigo-600 font-medium">
              Register Now
            </a>
          </div>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
