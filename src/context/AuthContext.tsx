import React, { createContext, useContext, useState, type ReactNode } from "react";
import { useNavigate } from "react-router-dom";

interface AuthContextType {
  user: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
  token: string | null;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<string | null>(null);
  const [token, setToken] = useState<string | null>(null);
  const navigate = useNavigate();

  const login = async (email: string, password: string) => {
    try {
      const response = await fetch("https://api.escuelajs.co/api/v1/auth/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ email, password }),
      });

      if (!response.ok) {
        throw new Error("Login failed");
      }

      const data = await response.json();

      // API returns: { access_token: "...", refresh_token: "..." }
      setToken(data.access_token);
      setUser(email);

      // Store token in localStorage (optional, so session persists)
      localStorage.setItem("token", data.access_token);

      navigate("/dashboard");
    } catch (error) {
      console.error("Login error:", error);
      alert("Invalid credentials or server error");
    }
  };

  const logout = () => {
    setUser(null);
    setToken(null);
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <AuthContext.Provider value={{ user, login, logout, token }}>
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
