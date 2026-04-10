
import { Outlet } from "react-router-dom";
import Sidebar from "../../components/admin/Sidebar";

function AdminDashboard() {
  return (
    <div className="flex font-sans text-darkText">
      {/* Sidebar */}
      <Sidebar />

      {/* Content */}
      <div className="flex-1 p-6 bg-gray-50 min-h-screen">
        <Outlet /> {/* 🔥 THIS FIXES EVERYTHING */}
      </div>
    </div>
  );
}

export default AdminDashboard;
