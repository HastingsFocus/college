import { Routes, Route } from "react-router-dom";
import Sidebar from "../../components/admin/Sidebar";

import DashboardHome from "./DashboardHome";
import AddNews from "./AddNews";
import AddStaff from "./AddStaff";
import AddProgram from "./AddProgram";

function AdminDashboard() {
  return (
    <div className="flex">
      {/* Sidebar */}
      <Sidebar />

      {/* Content */}
      <div className="flex-1 p-6 bg-gray-100 min-h-screen">
        <Routes>
          <Route index element={<DashboardHome />} />
          <Route path="add-news" element={<AddNews />} />
          <Route path="add-staff" element={<AddStaff />} />
          <Route path="add-program" element={<AddProgram />} />
        </Routes>
      </div>
    </div>
  );
}

export default AdminDashboard;