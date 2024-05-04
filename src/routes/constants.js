import { Navigate } from "react-router-dom";

import Login from "pages/auth/login/Login";
import Home from "pages/home/Home";
import BudgetOverview from "pages/budgetOverview/BudgetOverview";
import SelectOrganization from "pages/auth/selectOrganization/SelectOrganization";
import Insights from "pages/insights/Insights";
import BudgetAnalysis from "pages/budgetAnalysis/BudgetAnalysis";

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
  {
    path: "/budget-overview/:id",
    component: <BudgetOverview />,
    title: "Budget Overview",
  },
  {
    path: "/insights",
    component: <Insights />,
    title: "Insights",
  },
  {
    path: "/budget-analysis/:id",
    component: <BudgetAnalysis />,
    title: "Budget Analysis",
  },
];

export const protectedRoutesWithoutLayout = [
  {
    path: "/select-organization",
    component: <SelectOrganization />,
    title: "Select Organization",
  },
];
