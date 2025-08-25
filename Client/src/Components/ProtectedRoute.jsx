import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../Providers/AuthContext";

const ProtectedRoute = () => {
  const { authToken } = useContext(AuthContext);

  return authToken ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
