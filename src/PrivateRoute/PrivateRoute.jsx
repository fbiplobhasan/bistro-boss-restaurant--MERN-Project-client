import { useContext, useState } from "react";
import { Navigate, useLocation, useNavigate } from "react-router-dom";
import { AuthContext } from "../providers/AuthProvider/AuthProvider";
import Loading from "../Pages/Shared/Loading/Loading";

const PrivateRoute = ({ children }) => {
  const { user, loading } = useContext(AuthContext);
  const location = useLocation();

  if (loading) {
    return <Loading></Loading>;
  }

  if (user) {
    return children;
  }

  return <Navigate to="/login" state={{from:location}} replace></Navigate>;
};

export default PrivateRoute;
