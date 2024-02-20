/* eslint-disable react/prop-types */
import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../useAuth/useAuth";

const PrivateRoute = ({ children }) => {
  const { loading, user } = useAuth();
  const location = useLocation();
  if (loading) {
    return <p>loading...</p>;
  } else if (user?.uid) {
    return children;
  } else {
    return (
      <Navigate to="/user/login" state={{ form: location }} replace></Navigate>
    );
  }
};

export default PrivateRoute;
