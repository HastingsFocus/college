import { Navigate } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const token = localStorage.getItem("token");
  const user = JSON.parse(localStorage.getItem("user"));

  // ❌ No token OR not admin
  if (!token || user?.role !== "admin") {
    return <Navigate to="/admin/login" replace />;
  }

  // ✅ Allow access
  return children;
};

export default PrivateRoute;