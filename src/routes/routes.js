import { Route, Routes } from "react-router-dom";

import ProtectedRoutes from "routes/ProtectedRoutes";
import {
  authRoutes,
  protectedRoutes,
  protectedRoutesWithoutLayout,
} from "routes/constants";
import NotFound404 from "pages/notFound/NotFound404";
import Layout from "layouts/Layout";
import AuthLayout from "layouts/AuthLayout";

const Router = () => {
  return (
    <Routes>
      <Route element=<AuthLayout />>
        {authRoutes.map((route) => (
          <Route
            key={route.title}
            path={route.path}
            element={route.component}
            title={route.title}
          />
        ))}
        <Route element={<ProtectedRoutes />}>
          {protectedRoutesWithoutLayout.map((route) => (
            <Route
              key={route.title}
              path={route.path}
              element={route.component}
              title={route.title}
            />
          ))}
        </Route>
      </Route>
      <Route element={<Layout />}>
        <Route element={<ProtectedRoutes />}>
          {protectedRoutes.map((route) => (
            <Route
              key={route.title}
              path={route.path}
              element={<main>{route.component}</main>}
              title={route.title}
            />
          ))}
          {protectedRoutesWithoutLayout.map((route) => (
            <Route
              key={route.title}
              path={route.path}
              element={route.component}
              title={route.title}
            />
          ))}
        </Route>
        <Route path="*" element={<NotFound404 />} />
      </Route>
    </Routes>
  );
};

export default Router;
