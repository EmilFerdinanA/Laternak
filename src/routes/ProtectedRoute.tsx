import { validateToken } from "@Service/apiAuth";
import { useQuery } from "@tanstack/react-query";
import React, { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const navigate = useNavigate();

  const localStorageToken = localStorage.getItem("token");

  const { isLoading, data } = useQuery({
    queryKey: ["user"],
    queryFn: validateToken,
  });

  useEffect(() => {
    if ((data !== 200 && !isLoading) || !localStorageToken) {
      navigate("/login");
    }
  }, [navigate, isLoading, localStorageToken, data]);

  return children;
};

export default ProtectedRoute;
