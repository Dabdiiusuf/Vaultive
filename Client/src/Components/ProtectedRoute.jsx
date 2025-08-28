import { useContext } from "react";
import { Navigate, Outlet } from "react-router-dom";
import { GlobalContext } from "../Providers/GlobalContextontext";

const ProtectedRoute = () => {
  const { authToken } = useContext(GlobalContext);

  return authToken ? <Outlet /> : <Navigate to="/" />;
};

export default ProtectedRoute;
