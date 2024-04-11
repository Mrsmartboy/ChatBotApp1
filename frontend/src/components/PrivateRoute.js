import React from "react";
import { Navigate } from "react-router-dom";
import Cookies from 'js-cookie'; // Import Cookies library

const PrivateRoute = ({ children }) => {
  const isAuthenticated = !!Cookies.get('token'); // Check if token cookie exists
  
  if (!isAuthenticated) {
    return <Navigate to='/login' />;
  }
  
  return children;
}

export default PrivateRoute;
