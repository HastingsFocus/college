import { NavLink, Outlet } from "react-router-dom";

function PageLayout({ title, sidebarItems }) {
  return (
    <div className="bg-gray-100 min-h-screen">

      {/* 🔥 HEADER */}
      <div className="bg-primary text-white py-6 px-6 shadow-md">
        <h1 className="text-2xl md:text-3xl font-bold">{title}</h1>
      </div>

      <div className="flex flex-col md:flex-row">

        {/* 🧭 SIDEBAR */}
        <div className="md:w-1/4 bg-white shadow-md p-4">
          <ul className="space-y-2">
            {sidebarItems.map((item, index) => (
              <li key={index}>
                <NavLink
                  to={item.path}
                  className={({ isActive }) =>
                    `block px-4 py-2 rounded transition ${
                      isActive
                        ? "bg-accent text-white font-semibold"
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
          <div className="bg-white p-6 rounded-xl shadow min-h-[300px]">
            {/* 🔥 THIS IS WHERE YOUR PAGES LOAD */}
            <Outlet />
          </div>
        </div>

      </div>
    </div>
  );
}

export default PageLayout;