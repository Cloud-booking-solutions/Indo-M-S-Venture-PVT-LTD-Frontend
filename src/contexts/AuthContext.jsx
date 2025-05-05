import { createContext, useState, useContext, useEffect } from "react";
import { useToast } from "@/components/ui/use-toast";

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const { toast } = useToast();

  useEffect(() => {
    // Check if user is already logged in
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      try {
        setUser(JSON.parse(storedUser));
      } catch (error) {
        console.error("Failed to parse stored user", error);
        localStorage.removeItem("user");
      }
    }
    setLoading(false);
  }, []);

  const login = (email, password) => {
    // Mock authentication - in a real app, you'd call an API
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        // Updated admin credentials
        if (email === "indo@gmail.com" && password === "indo123") {
          const userData = {
            id: "1",
            name: "Admin User",
            email: email,
            role: "admin",
          };
          setUser(userData);
          localStorage.setItem("user", JSON.stringify(userData));
          toast({
            title: "Login successful",
            description: "Welcome back, Admin!",
          });
          resolve(userData);
        } else {
          toast({
            title: "Login failed",
            description: "Invalid email or password",
            variant: "destructive",
          });
          reject(new Error("Invalid email or password"));
        }
      }, 1000);
    });
  };

  const logout = () => {
    setUser(null);
    localStorage.removeItem("user");
    toast({
      title: "Logged out",
      description: "You have been logged out successfully",
    });
  };

  const value = {
    user,
    loading,
    login,
    logout,
    isAuthenticated: !!user,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === null) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
