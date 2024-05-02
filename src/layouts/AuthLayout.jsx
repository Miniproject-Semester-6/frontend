import { Outlet } from "react-router-dom";

function AuthLayout() {
  return (
    <div className="auth_cont">
      <Outlet />
    </div>
  );
}

export default AuthLayout;
