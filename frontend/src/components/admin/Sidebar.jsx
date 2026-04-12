import { NavLink } from "react-router-dom";

function Sidebar() {
  return (
    <div className="w-64 bg-white h-screen p-4 shadow">
      <h2 className="text-xl font-bold mb-6 text-primary">Admin Dashboard</h2>
      <nav className="flex flex-col space-y-2">
       
        <NavLink
          to="/admin/manage-news"
          className={({ isActive }) =>
            `block p-2 rounded ${isActive ? "bg-primary text-white" : "text-darkText"}`
          }
        >
          Manage News
        </NavLink>
        <NavLink
          to="/admin/manage-staff"
          className={({ isActive }) =>
            `block p-2 rounded ${isActive ? "bg-primary text-white" : "text-darkText"}`
          }
        >
          Manage Staff
        </NavLink>
        
      </nav>
    </div>
  );
}

export default Sidebar;