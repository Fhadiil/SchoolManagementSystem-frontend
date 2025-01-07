import React from "react";
import { Routes, Route } from "react-router-dom";
import LoginPage from "../pages/LoginPage";
import RegisterPage from "../pages/RegisterPage";
import Dashboard from "../pages/Dashboard";
import ClassesPage from "../pages/ClassesPage";
import AttendancePage from "../pages/AttendancePage";
import PrivateRoute from "./PrivateRoute";
import LandingPage from "../components/Landingpage";
import AdmissionForm from "../pages/AdmissionForm";
import AdminDashboard from "../pages/AdminDashboard";
import PrivateAdminRoute from "./PrivateAdminRoute";

const AppRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LandingPage />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/admission" element={<AdmissionForm />} />
      <Route element={<PrivateAdminRoute />}>
        <Route path="/admin-dashboard" element={<AdminDashboard />} />
      </Route>
      <Route element={<PrivateRoute />}>
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/classes" element={<ClassesPage />} />
        <Route path="/attendance" element={<AttendancePage />} />
      </Route>
    </Routes>
  );
};

export default AppRoutes;
