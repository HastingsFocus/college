import { NavLink, Outlet } from "react-router-dom";

function PageLayout({ title, sidebarItems }) {
  return (
    <div className="bg-gray-100 min-h-screen">

      {/* 🔥 PAGE HEADER */}
      <div className="bg-primary text-white py-6 px-6 shadow-md">
        <h1 className="text-2xl md:text-3xl font-bold">{title}</h1>
        <p className="text-sm mt-1 opacity-80">Home / {title}</p>
      </div>

      <div className="flex flex-col md:flex-row">

        {/* 🧭 SIDEBAR */}
        <div className="md:w-1/4 bg-white shadow-md p-4">
          <h2 className="font-semibold mb-4">{title}</h2>

          <ul className="space-y-2">
            {sidebarItems.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `block px-4 py-2 rounded ${
                      isActive
                        ? "bg-accent text-white"
                        : "hover:bg-gray-200"
                    }`
                  }
                >
                  {item.name}
                </NavLink>
              </li>
            ))}
          </ul>
        </div>

        {/* 📄 CONTENT */}
        <div className="md:w-3/4 p-6">
          <div className="bg-white p-6 rounded-xl shadow">
            <Outlet />
          </div>
        </div>

      </div>
    </div>
  );
}

export default PageLayout;