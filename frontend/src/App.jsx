import { BrowserRouter, Routes, Route } from "react-router-dom";

// Layouts
import MainLayout from "./layouts/MainLayout";
import AboutLayout from "./layouts/AboutLayout";

// Pages
import Home from "./pages/Home";

// About Pages
import Background from "./pages/about/Background";
import Mission from "./pages/about/Mission";
import Accreditation from "./pages/about/Accreditation";
import Staff from "./pages/about/Staff";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* 🔥 MAIN LAYOUT (NAVBAR ONLY) */}
        <Route path="/" element={<MainLayout />}>

          {/* 🏠 HOME (NO SIDEBAR) */}
          <Route index element={<Home />} />

          {/* 📘 ABOUT (HAS SIDEBAR + HEADER) */}
          <Route path="about" element={<AboutLayout />}>
            <Route path="background" element={<Background />} />
            <Route path="mission" element={<Mission />} />
            <Route path="accreditation" element={<Accreditation />} />
            <Route path="staff" element={<Staff />} />
          </Route>

        </Route>

      </Routes>
    </BrowserRouter>
  );
}

export default App;