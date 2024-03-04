import { Navigate } from "react-router-dom";

import Login from "pages/auth/login/Login";
import Home from "pages/home/Home";

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
    path: "/home",
    component: <Home />,
    title: "Home",
  },
];
