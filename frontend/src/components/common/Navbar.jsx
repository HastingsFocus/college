import { NavLink, useLocation } from "react-router-dom";
import {
  FaFacebook,
  FaTwitter,
  FaInstagram,
  FaBars,
  FaTimes,
} from "react-icons/fa";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);

  const location = useLocation(); // 🔥 FIX: REQUIRED

  // =========================
  // DESKTOP NAV LINK STYLE
  // =========================
  const navLinkClass = ({ isActive }) =>
    `relative px-2 py-1 transition duration-300 font-medium whitespace-nowrap
     ${isActive ? "text-primary" : "text-darkText hover:text-primary"}
     after:content-[''] after:absolute after:left-0 after:-bottom-1 
     after:h-[2px] after:w-0 after:bg-accent 
     after:transition-all after:duration-300
     ${isActive ? "after:w-full" : "hover:after:w-full"}`;

  // =========================
  // DESKTOP DROPDOWN
  // =========================
  const Dropdown = ({ title, items }) => {
    // 🔥 FIX: proper parent active logic
    const isParentActive = items.some(
  (item) => location.pathname === item.path
);
    return (
      <div className="relative group">
        {/* PARENT */}
        <span
          className={`relative px-2 py-1 font-medium cursor-pointer transition duration-300
          ${isParentActive ? "text-primary" : "text-darkText hover:text-primary"}
          after:content-[''] after:absolute after:left-0 after:-bottom-1 
          after:h-[2px] after:bg-accent after:transition-all after:duration-300
          ${isParentActive ? "after:w-full" : "after:w-0 group-hover:after:w-full"}
        `}
        >
          {title}
        </span>

        {/* DROPDOWN */}
        <div
          className="
          absolute left-0 mt-3 w-64 bg-white shadow-xl rounded-xl overflow-hidden
          opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0
          transition-all duration-300 z-50
        "
        >
          {items.map((item, index) => (
            <NavLink
              key={index}
              to={item.path}
              end
              className={({ isActive }) =>
                `block px-4 py-3 text-sm transition
                ${
                  isActive
                    ? "text-primary font-semibold bg-gray-100"
                    : "text-darkText hover:text-primary hover:bg-gray-50"
                }`
              }
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
    );
  };

  // =========================
  // MOBILE DROPDOWN
  // =========================
  const MobileDropdown = ({ title, items }) => {
    const isParentActive = items.some(
      (item) =>
        location.pathname === item.path ||
        location.pathname.startsWith(item.path + "/")
    );

    return (
      <div>
        <div
          onClick={() =>
            setMobileDropdown(mobileDropdown === title ? null : title)
          }
          className={`flex justify-between items-center cursor-pointer py-2 font-medium
          ${isParentActive ? "text-primary" : "text-darkText"}`}
        >
          <span>{title}</span>
          <span>{mobileDropdown === title ? "-" : "+"}</span>
        </div>

        <div
          className={`overflow-hidden transition-all duration-300 ${
            mobileDropdown === title ? "max-h-96" : "max-h-0"
          }`}
        >
          <div className="bg-gray-100 rounded-md mt-1">
            {items.map((item, idx) => (
              <NavLink
                key={idx}
                to={item.path}
                end
                className={({ isActive }) =>
                  `block px-4 py-2 text-sm
                  ${
                    isActive
                      ? "text-primary font-semibold"
                      : "text-darkText hover:text-primary"
                  }`
                }
                onClick={() => setIsOpen(false)}
              >
                {item.name}
              </NavLink>
            ))}
          </div>
        </div>
      </div>
    );
  };

  // =========================
  // MENU DATA
  // =========================
  const menus = [
    {
      title: "About Us",
      items: [
        { name: "Background", path: "/about/background" },
        { name: "Mission Vision Core Values", path: "/about/mission" },
        { name: "Accreditation", path: "/about/accreditation" },
        { name: "Staff", path: "/about/staff" },
      ],
    },
    {
      title: "Departments",
      items: [
        { name: "General Nursing Department", path: "/departments/general-nursing" },
        { name: "Pharmacy Department", path: "/departments/pharmacy" },
        { name: "Midwifery Department", path: "/departments/midwifery" },
        { name: "Public Health Department", path: "/departments/public-health" },
        { name: "Basic Studies Department", path: "/departments/basic-studies" },
        { name: "Community Health Department", path: "/departments/community-health" },
      ],
    },
    {
      title: "Students",
      items: [
        { name: "Student Welfare", path: "/students/welfare" },
        { name: "Scholarship", path: "/students/scholarship" },
        { name: "Students Union", path: "/students/union" },
        { name: "Food and Accommodation", path: "/students/accommodation" },
        { name: "Sports and Recreation", path: "/students/sports" },
        { name: "Request Transcript", path: "/students/transcript" },
      ],
    },
    {
      title: "Library & ICT",
      items: [
        { name: "Our Library", path: "/library" },
        { name: "ICT Support", path: "/library/ict-support" },
        { name: "E-Resources", path: "/library/e-resources" },
      ],
    },
  ];

  // =========================
  // RETURN UI
  // =========================
  return (
    <div className="w-full font-sans sticky top-0 z-50">
      {/* TOP BAR */}
      <div className="bg-primary text-white text-sm px-4 md:px-6 py-2 flex justify-between items-center">
        <div className="flex flex-col md:flex-row md:space-x-4 text-xs md:text-sm">
          <span>Email: info@sjchs.mw</span>
          <span>Phone: +265 999 123 456</span>
        </div>
        <div className="flex space-x-3 text-lg">
          <FaFacebook className="cursor-pointer hover:scale-110 hover:text-gray-200 transition" />
          <FaTwitter className="cursor-pointer hover:scale-110 hover:text-gray-200 transition" />
          <FaInstagram className="cursor-pointer hover:scale-110 hover:text-gray-200 transition" />
        </div>
      </div>

      {/* MAIN NAV */}
      <div className="bg-white shadow-md px-4 md:px-6 h-20 flex justify-between items-center">
        {/* LOGO */}
        <div className="flex items-center space-x-3">
          <img src="/logo.jpg" alt="logo" className="w-10 h-10 object-contain" />
          <h1 className="text-sm md:text-base lg:text-xl font-bold text-darkText leading-tight max-w-[200px]">
            St Joseph College of Health Sciences
          </h1>
        </div>

        {/* DESKTOP MENU */}
        <div className="hidden lg:flex items-center space-x-6 h-full">
          <NavLink to="/" className={navLinkClass}>
            Home
          </NavLink>

          {menus.map((menu) => (
            <Dropdown key={menu.title} title={menu.title} items={menu.items} />
          ))}

          <NavLink to="/news" className={navLinkClass}>
            News & Events
          </NavLink>

          <Dropdown
            title="Admissions"
            items={[
              { name: "Programs", path: "/admissions/programs" },
              { name: "Fees Structure", path: "/admissions/fees" },
            ]}
          />

          <NavLink to="/contact" className={navLinkClass}>
            Contact Us
          </NavLink>

          <button
  onClick={() =>
    window.open("https://onlineapplicationsite.netlify.app/", "_blank")
  }
  className="bg-accent text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 hover:bg-primary hover:scale-105 active:scale-95"
>
  Apply
</button>
        </div>

        {/* MOBILE ICON */}
        <div className="lg:hidden">
          {isOpen ? (
            <FaTimes
              className="text-2xl cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          ) : (
            <FaBars
              className="text-2xl cursor-pointer"
              onClick={() => setIsOpen(true)}
            />
          )}
        </div>
      </div>

      {/* MOBILE MENU */}
      <div
        className={`lg:hidden bg-white shadow-md px-6 overflow-hidden transition-all duration-500 ${
          isOpen ? "max-h-[900px] py-4" : "max-h-0"
        }`}
      >
        <div className="flex flex-col space-y-2">
          <NavLink to="/" className={navLinkClass} onClick={() => setIsOpen(false)}>
            Home
          </NavLink>

          {menus.map((menu) => (
            <MobileDropdown
              key={menu.title}
              title={menu.title}
              items={menu.items}
            />
          ))}

          <NavLink to="/news" className={navLinkClass}>
            News & Events
          </NavLink>

          <MobileDropdown
            title="Admissions"
            items={[
              { name: "Programs", path: "/admissions/programs" },
              { name: "Fees Structure", path: "/admissions/fees" },
            ]}
          />

          <NavLink to="/contact" className={navLinkClass}>
            Contact Us
          </NavLink>

          <button
  onClick={() =>
    window.open("https://onlineapplicationsite.netlify.app/", "_blank")
  }
  className="bg-accent text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 hover:bg-primary hover:scale-105 active:scale-95"
>
  Apply
</button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;