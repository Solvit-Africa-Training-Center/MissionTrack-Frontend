import { Route, Routes, useLocation } from "react-router-dom";
import Dashboard from "./Components/Dashboard";
import NavBar from "./Components/NavBar";
import LoginForm from "./pages/LoginFom";

function App() {
  const location = useLocation();

  // Hide navbar on login page
  const hideNavbar = location.pathname === "/login";

  return (
    <div>
      {!hideNavbar && <NavBar />} {/* only show navbar when not on login page */}

      <Routes>
        <Route path="/login" element={<LoginForm />} />
        <Route path="/dashboard" element={<Dashboard />} />
      </Routes>
    </div>
  );
}

export default App;