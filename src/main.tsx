
import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import { AuthProvider } from "./context/AuthContext";  // ⬅️ import AuthProvider
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    {/* Wrap the whole app with context */}
    <AuthProvider>
      <App />
    </AuthProvider>
  </React.StrictMode>
);
