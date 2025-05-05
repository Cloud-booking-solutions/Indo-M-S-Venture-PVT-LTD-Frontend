
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useAuth } from "../contexts/AuthContext";

const LoginPage = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  
  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      setError("");
      setLoading(true);
      await login(email, password);
      navigate("/admin");
    } catch (error) {
      setError("Failed to login. Please check your credentials.");
      setLoading(false);
    }
  };
  
  // If already authenticated, redirect to admin page
  if (isAuthenticated) {
    navigate("/admin");
    return null;
  }

  return (
    <div className="min-h-[calc(100vh-300px)] flex items-center justify-center py-12 px-4 bg-spice-50">
      <div className="w-full max-w-md">
        <div className="bg-white rounded-lg shadow-lg p-8">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-spice-900">Admin Login</h1>
            <p className="text-gray-600 mt-2">Sign in to access the admin dashboard</p>
          </div>
          
          {error && (
            <div className="mb-6 p-4 bg-red-100 text-red-700 rounded-md">
              {error}
            </div>
          )}
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <label htmlFor="email" className="text-sm font-medium text-gray-700">
                Email
              </label>
              <Input
                id="email"
                type="email"
                placeholder="indo@gmail.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {/* <p className="text-xs text-gray-500">Demo: admin123@gamil.com</p> */}
            </div>
            
            <div className="space-y-2">
              <label htmlFor="password" className="text-sm font-medium text-gray-700">
                Password
              </label>
              <Input
                id="password"
                type="password"
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                required
              />
              {/* <p className="text-xs text-gray-500">Demo: admin123</p> */}
            </div>
            
            <Button
              type="submit"
              disabled={loading}
              className="w-full bg-spice-600 hover:bg-spice-700"
            >
              {loading ? "Signing in..." : "Sign In"}
            </Button>
          </form>
          
          <div className="mt-8 text-center">
            <p className="text-sm text-gray-600">
              Need help? Contact the system administrator
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
