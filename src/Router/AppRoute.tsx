import type React from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import NavBar from "../Components/NavBar";
import LoginForm from "../pages/LoginFom";
import Dashboard from "../Components/Dashboard";

const AppRoute:React.FC=()=>{
      const location = useLocation();

  // Hide navbar on login page
  const hideNavbar = location.pathname === "/login";
    return(
<div>
      {!hideNavbar && <NavBar />} {/* only show navbar when not on login page */}

      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
    );

} 
export default AppRoute;