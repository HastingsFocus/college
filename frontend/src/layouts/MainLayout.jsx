import { Outlet } from "react-router-dom";

function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">

      {/* 🔝 NAVBAR SECTION */}
      <header>
        {/* 🔹 TOP NAVBAR (if you have one) */}
        <div className="bg-primary text-white text-sm py-2 px-4">
          Welcome to St Joseph College of Health Sciences
        </div>

        {/* 🔹 MAIN NAVBAR */}
        <div className="bg-white shadow-md px-4 md:px-6 py-4 flex justify-between items-center">
          
          {/* Logo */}
          <div className="flex items-center space-x-3">
            <img
              src="/logo.jpg"
              alt="logo"
              className="w-10 h-10 object-contain"
            />
            <h1 className="text-sm md:text-base lg:text-xl font-bold text-darkText">
              St Joseph College
            </h1>
          </div>

          {/* Menu */}
          <nav className="space-x-4 hidden md:flex">
            <a href="/" className="hover:text-accent">Home</a>
            <a href="/about/background" className="hover:text-accent">About</a>
          </nav>

        </div>
      </header>

      {/* 🔥 PAGE CONTENT */}
      <main className="flex-1">
        <Outlet />
      </main>

      {/* 🔻 FOOTER */}
      <footer className="bg-gray-100 text-center py-4 text-sm text-gray-600">
        © 2026 St Joseph College of Health Sciences
      </footer>

    </div>
  );
}

export default MainLayout;