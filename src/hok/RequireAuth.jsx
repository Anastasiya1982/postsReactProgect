import { useLocation, Navigate } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const RequireAuth = ({ children }) => {
  const location = useLocation();

  const {isAuth, setIsAuth} =useContext(AuthContext);


  if (!isAuth) {
    return <Navigate to="/login" state={{ from: location }} />;
  }
  return children;
};
export default RequireAuth;
