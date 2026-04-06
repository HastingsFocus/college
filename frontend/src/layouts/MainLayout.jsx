import { Outlet } from "react-router-dom";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

function MainLayout() {
  return (
    <div className="min-h-screen flex flex-col">

      {/* ✅ NAVBAR */}
      <Navbar />

      {/* 🔥 PAGE CONTENT */}
      <main className="flex-1 pt-5">
        <Outlet />
      </main>

      {/* ✅ FOOTER */}
      <Footer />

    </div>
  );
}

export default MainLayout;