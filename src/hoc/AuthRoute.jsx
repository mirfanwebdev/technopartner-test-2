import { Navigate, Outlet } from "react-router-dom";

export default function AuthRoute({ children }) {
  const token = localStorage.getItem("access_token");
  if (token) {
    return <Navigate to="/home" />;
  }
  return <>{children || <Outlet />}</>;
}
