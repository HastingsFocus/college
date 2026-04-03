// src/pages/about/Staff.jsx
import PageLayout from "../../layouts/MainLayout";

function Staff() {
  const sidebarItems = [
    { name: "Background", path: "/about/background" },
    { name: "Mission Vision Core Values", path: "/about/mission" },
    { name: "Accreditation", path: "/about/accreditation" },
  ];

  return (
    <PageLayout title="About - Staff" sidebarItems={sidebarItems}>
      <h2 className="text-xl font-bold mb-4">Our Staff</h2>
      <p className="text-gray-700 leading-relaxed">
        Our faculty consists of highly experienced healthcare professionals and educators who are passionate about teaching, research, and mentoring the next generation of healthcare practitioners.
      </p>
    </PageLayout>
  );
}

export default Staff;