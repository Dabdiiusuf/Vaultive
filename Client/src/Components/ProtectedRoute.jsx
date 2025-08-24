import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { AuthContext } from "../Providers/AuthContext";

const ProtectedRoute = () => {
  const { authToken } = useContext(AuthContext);
  // console.log(authToken);

  return authToken ? <Outlet /> : <Navigate to="/Login" />;
};

export default ProtectedRoute;
