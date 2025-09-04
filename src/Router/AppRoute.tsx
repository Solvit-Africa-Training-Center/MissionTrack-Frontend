import { Route, Routes, useLocation } from "react-router-dom";
import NavBar from "../Components/NavBar";
import LoginForm from "../pages/LoginForm"; // ✅ corrected import
import Dashboard from "../Components/Dashboard";
import LandingPage from "../pages/LandingPage";

const AppRoute = () => {
  const location = useLocation();

  // Define routes where NavBar should not appear
  const hideNavbarRoutes = ["/login"];
  const hideNavbar = hideNavbarRoutes.includes(location.pathname);

  return (
    <>
      {!hideNavbar && <NavBar />}

      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<LoginForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
     
      </Routes>
    </>
  );
};

export default AppRoute;
