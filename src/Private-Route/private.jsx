import React, { useContext, useEffect } from "react";
import { context } from "../context/context";
import { useNavigate } from "react-router-dom";

export const ProtectedRoute = ({ children }) => {
  const { isAuthen, isLoading } = useContext(context);
  const navigate = useNavigate();

  useEffect(() => {
    if (!isLoading && !isAuthen) {
      navigate("/login");
    }
  }, [isLoading, isAuthen, navigate]);

  if (isLoading) {
    return <div>Loading...</div>; 
  }

  return isAuthen ? children : null;
};
