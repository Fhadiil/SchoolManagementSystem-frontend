import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateAdminRoute = () => {
  const user = JSON.parse(localStorage.getItem("user")); // Replace with actual role-checking logic
  return user && user.isAdmin ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateAdminRoute;
