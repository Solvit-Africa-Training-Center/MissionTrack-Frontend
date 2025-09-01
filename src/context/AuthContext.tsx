import React, { createContext, useContext, useState, type ReactNode} from "react";
import { useNavigate } from "react-router-dom";

interface AuthContextType {
  user: string | null;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<string | null>(null);
  const navigate = useNavigate();

  const login = async (email: string, password: string) => {
    // Fake auth check for now
    if (email === "test@example.com" && password === "password") {
      setUser(email);
      navigate("/dashboard"); // 🔥 redirect after login
    } else {
      alert("Invalid credentials");
    }
  };

  const logout = () => {
    setUser(null);
    navigate("/login"); // 🔥 redirect after logout
  };

  return (
    <AuthContext.Provider value={{ user, login, logout }}>
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
