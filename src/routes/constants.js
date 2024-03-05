import { Navigate } from "react-router-dom";

import Login from "pages/auth/login/Login";
import Home from "pages/home/Home";
import CreateOrganization from "pages/auth/createOrganization/CreateOrganization";

export const authRoutes = [
  {
    path: "/",
    component: <Navigate to="/login" />,
    title: "Redirect",
  },
  {
    path: "/login",
    component: <Login />,
    title: "Login",
  },
];

export const protectedRoutes = [
  {
    path: "/create-organization",
    component: <CreateOrganization />,
    title: "Create Organization",
  },
  {
    path: "/home",
    component: <Home />,
    title: "Home",
  },
];
