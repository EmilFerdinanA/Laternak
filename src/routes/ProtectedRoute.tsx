import { validateToken } from "@Service/apiAuth";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import React, { ReactNode, useEffect } from "react";
import { useNavigate } from "react-router-dom";

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const navigate = useNavigate();

  const token = localStorage.getItem("token");

  //   const { isLoading, data } = useQuery({
  //     queryKey: ["user"],
  //     queryFn: async () => {
  //       await axios.get("auth/validate-token", {
  //         headers: {
  //           Authorization: `Bearer ${token}`,
  //         },
  //       });
  //     },
  //   });

  useEffect(() => {
    const validate = async () => {
      const response = await axios.get("auth/validate-token", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });

      console.log(response.status, "ini response");
    };

    validate();
  }, [navigate]);

  return children;
};

export default ProtectedRoute;
