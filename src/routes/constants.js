import { Navigate } from "react-router-dom";

import Login from "pages/auth/login/Login";
import Home from "pages/home/Home";
import BudgetOverview from "pages/budgetOverview/BudgetOverview";
import SelectOrganization from "pages/auth/selectOrganization/SelectOrganization";

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
    path: "/select-organization",
    component: <SelectOrganization />,
    title: "Select Organization",
  },
  {
    path: "/home",
    component: <Home />,
    title: "Home",
  },

  {
    path: "/budget-overview/:id",
    component: <BudgetOverview />,
    title: "Budget Overview",
  },
];
