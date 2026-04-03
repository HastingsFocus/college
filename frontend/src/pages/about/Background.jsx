// src/pages/about/Background.jsx
import PageLayout from "../../layouts/MainLayout";

function Background() {
  const sidebarItems = [
    { name: "Mission Vision Core Values", path: "/about/mission" },
    { name: "Accreditation", path: "/about/accreditation" },
    { name: "Staff", path: "/about/staff" },
  ];

  return (
    <PageLayout title="About - Background" sidebarItems={sidebarItems}>
      <h2 className="text-xl font-bold mb-4">Background</h2>
      <p className="text-gray-700 leading-relaxed">
        St Joseph College of Health Sciences was established to address the growing demand for skilled healthcare professionals in Malawi. It focuses on healthcare education, practical training, and community impact.
      </p>
    </PageLayout>
  );
}

export default Background;