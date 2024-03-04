import { Route, Routes } from "react-router-dom";

import ProtectedRoutes from "routes/ProtectedRoutes";
import { authRoutes, protectedRoutes } from "routes/constants";
import NotFound404 from "pages/notFound/NotFound404";

const Router = () => {
  return (
    <Routes>
      {authRoutes.map((route) => (
        <Route
          key={route.title}
          path={route.path}
          element={route.component}
          title={route.title}
        />
      ))}

      <Route element={<ProtectedRoutes />}>
        {protectedRoutes.map((route) => (
          <Route
            key={route.title}
            path={route.path}
            element={route.component}
            title={route.title}
          />
        ))}
      </Route>

      <Route path="*" element={<NotFound404 />} />
    </Routes>
  );
};

export default Router;
