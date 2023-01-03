import { Navigate } from "react-router-dom";
import { useAuth } from "../context/authContext";

function ProtectedRoute({ children }) {
  // obtener usuario actual de useAuth
  const { user, loading } = useAuth();

  if (loading) return <h1>Loading</h1>;

  // si no hay usuario loggeado, redirigir al login
  if (!user) return <Navigate to="/login" />;

  return <>{children}</>;
}

export default ProtectedRoute;
