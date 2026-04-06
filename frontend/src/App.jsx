// src/App.jsx
import { BrowserRouter, Routes, Route } from "react-router-dom";

// 🔐 Auth & Protection
import PrivateRoute from "./routes/PrivateRoute";

// Layouts
import MainLayout from "./layouts/MainLayout";
import AboutLayout from "./layouts/AboutLayout";
import PageLayout from "./layouts/PageLayout";

// Pages
import Home from "./pages/Home";
import Contact from "./pages/Contact";

// 🔐 Auth Pages
import Login from "./pages/auth/Login";
import Signup from "./pages/auth/Signup";

// 🛠️ Admin
import AdminDashboard from "./pages/admin/AdminDashboard";

// About Pages
import Background from "./pages/about/Background";
import Mission from "./pages/about/Mission";
import Accreditation from "./pages/about/Accreditation";
import Staff from "./pages/about/Staff";

// Department Pages
import GeneralNursing from "./pages/departments/GeneralNursing";
import Pharmacy from "./pages/departments/Pharmacy";
import Midwifery from "./pages/departments/Midwifery";
import PublicHealth from "./pages/departments/PublicHealth";
import BasicStudies from "./pages/departments/BasicStudies";
import CommunityHealth from "./pages/departments/CommunityHealth";

// Student Pages
import StudentWelfare from "./pages/students/StudentWelfare";
import Scholarship from "./pages/students/Scholarship";
import StudentUnion from "./pages/students/StudentUnion";
import Accommodation from "./pages/students/Accommodation";
import Sports from "./pages/students/Sports";
import Transcript from "./pages/students/Transcript";

// Library Pages
import Library from "./pages/library/Library";
import EResources from "./pages/library/EResources";
import ICTSupport from "./pages/library/ICTSupport";

// Admissions Pages
import Programs from "./pages/admissions/Programs";
import Fees from "./pages/admissions/Fees";

function App() {
  return (
    <BrowserRouter>
      <Routes>

        {/* 🔐 AUTH ROUTES (OUTSIDE MAIN LAYOUT) */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* 🔒 ADMIN ROUTE (PROTECTED) */}
        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <AdminDashboard />
            </PrivateRoute>
          }
        />

        {/* 🌍 MAIN WEBSITE */}
        <Route path="/" element={<MainLayout />}>

          {/* 🏠 HOME */}
          <Route index element={<Home />} />

          {/* 📞 CONTACT */}
          <Route path="contact" element={<Contact />} />

          {/* 📘 ABOUT */}
          <Route path="about" element={<AboutLayout />}>
            <Route index element={<Background />} />
            <Route path="background" element={<Background />} />
            <Route path="mission" element={<Mission />} />
            <Route path="accreditation" element={<Accreditation />} />
            <Route path="staff" element={<Staff />} />
          </Route>

          {/* 🏥 DEPARTMENTS */}
          <Route
            path="departments"
            element={
              <PageLayout
                title="Departments"
                sidebarItems={[
                  { name: "General Nursing Department", path: "/departments/general-nursing" },
                  { name: "Pharmacy Department", path: "/departments/pharmacy" },
                  { name: "Midwifery Department", path: "/departments/midwifery" },
                  { name: "Public Health Department", path: "/departments/public-health" },
                  { name: "Basic Studies Department", path: "/departments/basic-studies" },
                  { name: "Community Health Department", path: "/departments/community-health" },
                ]}
              />
            }
          >
            <Route index element={<GeneralNursing />} />
            <Route path="general-nursing" element={<GeneralNursing />} />
            <Route path="pharmacy" element={<Pharmacy />} />
            <Route path="midwifery" element={<Midwifery />} />
            <Route path="public-health" element={<PublicHealth />} />
            <Route path="basic-studies" element={<BasicStudies />} />
            <Route path="community-health" element={<CommunityHealth />} />
          </Route>

          {/* 👩‍🎓 STUDENTS */}
          <Route
            path="students"
            element={
              <PageLayout
                title="Students"
                sidebarItems={[
                  { name: "Student Welfare", path: "/students/welfare" },
                  { name: "Scholarship", path: "/students/scholarship" },
                  { name: "Students Union", path: "/students/union" },
                  { name: "Food & Accommodation", path: "/students/accommodation" },
                  { name: "Sports & Recreation", path: "/students/sports" },
                  { name: "Request Transcript", path: "/students/transcript" },
                ]}
              />
            }
          >
            <Route index element={<StudentWelfare />} />
            <Route path="welfare" element={<StudentWelfare />} />
            <Route path="scholarship" element={<Scholarship />} />
            <Route path="union" element={<StudentUnion />} />
            <Route path="accommodation" element={<Accommodation />} />
            <Route path="sports" element={<Sports />} />
            <Route path="transcript" element={<Transcript />} />
          </Route>

          {/* 👩‍💻 LIBRARY & ICT */}
          <Route
            path="library"
            element={
              <PageLayout
                title="Library & ICT"
                sidebarItems={[
                  { name: "Library Overview", path: "/library" },
                  { name: "E-Resources", path: "/library/e-resources" },
                  { name: "ICT Support", path: "/library/ict-support" },
                ]}
              />
            }
          >
            <Route index element={<Library />} />
            <Route path="e-resources" element={<EResources />} />
            <Route path="ict-support" element={<ICTSupport />} />
          </Route>

          {/* 🎓 ADMISSIONS */}
          <Route path="admissions/programs" element={<Programs />} />
          <Route path="admissions/fees" element={<Fees />} />

        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;