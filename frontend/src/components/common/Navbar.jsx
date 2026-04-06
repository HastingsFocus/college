import { NavLink } from "react-router-dom";
import { FaFacebook, FaTwitter, FaInstagram, FaBars, FaTimes } from "react-icons/fa";
import { useState } from "react";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [mobileDropdown, setMobileDropdown] = useState(null);

  const navLinkClass = ({ isActive }) =>
    `relative px-2 py-1 transition duration-300 font-medium whitespace-nowrap
     ${isActive ? "text-primary" : "text-darkText hover:text-primary"}
     after:content-[''] after:absolute after:left-0 after:-bottom-1 
     after:h-[2px] after:w-0 after:bg-accent 
     after:transition-all after:duration-300
     ${isActive ? "after:w-full" : "hover:after:w-full"}`;

  const Dropdown = ({ title, items }) => (
    <div className="relative group">
      
      <span className={navLinkClass({ isActive: false })}>
        {title}
      </span>

      <div className="
        absolute left-0 mt-3 w-64 bg-blue-200 shadow-lg rounded-lg overflow-hidden
        opacity-0 scale-y-0 group-hover:opacity-100 group-hover:scale-y-100
        transform origin-top transition-all duration-300
      ">
        {items.map((item, index) => (
          <NavLink
            key={index}
            to={item.path || "#"}
            className="block px-4 py-3 text-darkText hover:text-primary hover:underline"
          >
            {item.name}
          </NavLink>
        ))}
      </div>
    </div>
  );

  const MobileDropdown = ({ title, items }) => (
    <div>
      <div
        onClick={() => setMobileDropdown(mobileDropdown === title ? null : title)}
        className="flex justify-between items-center cursor-pointer py-2 font-medium text-darkText"
      >
        <span>{title}</span>
        <span className="text-sm">{mobileDropdown === title ? "-" : "+"}</span>
      </div>

      <div className={`overflow-hidden transition-all duration-300 ${mobileDropdown === title ? "max-h-96" : "max-h-0"}`}>
        <div className="bg-blue-200 rounded-md mt-1">
          {items.map((item, idx) => (
            <NavLink
              key={idx}
              to={item.path || "#"}
              className="block px-4 py-2 text-sm text-darkText hover:text-primary hover:underline"
              onClick={() => setIsOpen(false)}
            >
              {item.name}
            </NavLink>
          ))}
        </div>
      </div>
    </div>
  );

  const menus = [
    { title: "About Us", items: [
      { name: "Background", path: "/about/background" },
      { name: "Mission Vision Core Values", path: "/about/mission" },
      { name: "Accreditation", path: "/about/accreditation" },
      { name: "Staff", path: "/about/staff" },
    ]},
    { 
      title: "Departments", 
      items: [
        { name: "General Nursing Department", path: "/departments/general-nursing" },
        { name: "Pharmacy Department", path: "/departments/pharmacy" },
        { name: "Midwifery Department", path: "/departments/midwifery" },
        { name: "Public Health Department", path: "/departments/public-health" },
        { name: "Basic Studies Department", path: "/departments/basic-studies" },
        { name: "Community Health Department", path: "/departments/community-health" },
      ]
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
      ]
    },
    { 
      title: "Library & ICT", 
      items: [
        { name: "Our Library", path: "/library" },
        { name: "ICT Support", path: "/library/ict-support" },
        { name: "E-Resources", path: "/library/e-resources" },
      ]
    }
  ];

  return (
    <div className="w-full font-sans sticky top-0 z-50">

      {/* 🔵 TOP BAR */}
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

      {/* ⚪ MAIN NAVBAR */}
      <div className="bg-white shadow-md px-4 md:px-6 h-20 flex justify-between items-center">

        {/* Logo */}
        <div className="flex items-center space-x-3">
          <img src="/logo.jpg" alt="logo" className="w-10 h-10 object-contain" />
          <h1 className="text-sm md:text-base lg:text-xl font-bold text-darkText leading-tight max-w-[200px]">
            St Joseph College of Health Sciences
          </h1>
        </div>

        {/* 🔥 DESKTOP MENU */}
        <div className="hidden lg:flex items-center space-x-6 h-full">
          <NavLink to="/" className={navLinkClass}>Home</NavLink>

          {menus.map(menu => (
            <Dropdown key={menu.title} title={menu.title} items={menu.items} />
          ))}

          <NavLink to="/news" className={navLinkClass}>News & Events</NavLink>

          {/* 🔥 NEW ADMISSIONS DROPDOWN */}
          <Dropdown 
            title="Admissions"
            items={[
              { name: "Programs", path: "/admissions/programs" },
              { name: "Fees Structure", path: "/admissions/fees" },
            ]}
          />

          <NavLink to="/contact" className={navLinkClass}>Contact Us</NavLink>

          <button className="bg-accent text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 hover:bg-primary hover:scale-105 active:scale-95">
            Apply
          </button>
        </div>

        {/* 🍔 MOBILE BUTTON */}
        <div className="lg:hidden">
          {isOpen ? (
            <FaTimes className="text-2xl cursor-pointer" onClick={() => setIsOpen(false)} />
          ) : (
            <FaBars className="text-2xl cursor-pointer" onClick={() => setIsOpen(true)} />
          )}
        </div>
      </div>

      {/* 📱 MOBILE MENU */}
      <div className={`lg:hidden bg-white shadow-md px-6 overflow-hidden transition-all duration-500 ${isOpen ? "max-h-[900px] py-4" : "max-h-0"}`}>
        <div className="flex flex-col space-y-2">
          <NavLink to="/" className={navLinkClass} onClick={() => setIsOpen(false)}>Home</NavLink>

          {menus.map(menu => (
            <MobileDropdown key={menu.title} title={menu.title} items={menu.items} />
          ))}

          <NavLink to="/news" className={navLinkClass}>News & Events</NavLink>

          {/* 🔥 MOBILE ADMISSIONS */}
          <MobileDropdown 
            title="Admissions"
            items={[
              { name: "Programs", path: "/admissions/programs" },
              { name: "Fees Structure", path: "/admissions/fees" },
            ]}
          />

          <NavLink to="/contact" className={navLinkClass}>Contact Us</NavLink>

          <button className="w-full mt-3 bg-accent text-white px-4 py-2 rounded-lg font-semibold transition-all duration-300 hover:bg-primary">
            Apply
          </button>
        </div>
      </div>
    </div>
  );
}

export default Navbar;