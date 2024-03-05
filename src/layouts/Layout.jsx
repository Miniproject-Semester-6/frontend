import { Outlet } from "react-router-dom";

import Navigation from "layouts/navigation/Navigation";

function Layout() {
  return (
    <div className="layout">
      <Navigation />
      <Outlet />
    </div>
  );
}

export default Layout;
