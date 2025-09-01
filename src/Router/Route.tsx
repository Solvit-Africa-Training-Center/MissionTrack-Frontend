import { Routes, Route, Navigate } from "react-router-dom";
import EmployeeDashboard from "../pages/EmployeeDashboard";
import LoginForm from "../pages/LoginFom";
import { useAuth } from "../context/AuthContext";

const AppRoutes: React.FC = () => {
  const { user } = useAuth();

  return (
    <Routes>
      {/* Default route */}
      <Route
        path="/"
        element={user ? <Navigate to="/dashboard" replace /> : <Navigate to="/login" replace />}
      />

      {/* Login page */}
      <Route
        path="/login"
        element={user ? <Navigate to="/dashboard" replace /> : <LoginForm />}
      />

      {/* Dashboard page (protected) */}
      <Route
        path="/dashboard"
        element={user ? <EmployeeDashboard /> : <Navigate to="/login" replace />}
      />
    </Routes>
  );
};

export default AppRoutes;
