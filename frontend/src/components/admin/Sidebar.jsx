import { Link, useNavigate } from "react-router-dom";

function Sidebar() {
  const navigate = useNavigate();

  const logout = () => {
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="w-64 h-screen bg-gray-900 text-white p-5">
      <h2 className="text-2xl font-bold mb-8">Admin Panel</h2>

      <ul className="space-y-4">
        <li><Link to="/admin">Dashboard</Link></li>
        <li><Link to="/admin/add-news">Add News</Link></li>
        <li><Link to="/admin/add-staff">Add Staff</Link></li>
        <li><Link to="/admin/add-program">Add Program</Link></li>
      </ul>

      <button
        onClick={logout}
        className="mt-10 bg-red-500 px-4 py-2 rounded"
      >
        Logout
      </button>
    </div>
  );
}

export default Sidebar;