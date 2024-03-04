import React, { useEffect } from "react";
import { Outlet, useNavigate } from "react-router-dom";

import { DEMO_AUTHENTICATION } from "constants/constant";

const RedirectTo = () => {
  const navigate = useNavigate();

  useEffect(() => {
    navigate("/login");
  }, [navigate]);
};

function ProtectedRoutes() {
  const authToken = DEMO_AUTHENTICATION;

  return authToken ? <Outlet /> : <RedirectTo />;
}

export default ProtectedRoutes;
