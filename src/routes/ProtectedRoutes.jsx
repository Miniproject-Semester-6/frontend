import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

const RedirectTo = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/login");
  }, [navigate]);
};

function ProtectedRoutes() {
  const authToken = localStorage.getItem("token");

  return authToken ? (
    <main>
      <Outlet />
    </main>
  ) : (
    <RedirectTo />
  );
}

export default ProtectedRoutes;
