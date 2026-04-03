// src/pages/about/Mission.jsx
import PageLayout from "../../layouts/MainLayout";

function Mission() {
  const sidebarItems = [
    { name: "Background", path: "/about/background" },
    { name: "Accreditation", path: "/about/accreditation" },
    { name: "Staff", path: "/about/staff" },
  ];

  return (
    <PageLayout title="About - Mission Vision Core Values" sidebarItems={sidebarItems}>
      <h2 className="text-xl font-bold mb-4">Mission & Vision</h2>
      <p className="text-gray-700 leading-relaxed mb-2">
        <strong>Mission:</strong> To advance health education, research, and practical training, fostering skilled and compassionate healthcare professionals.
      </p>
      <p className="text-gray-700 leading-relaxed">
        <strong>Vision:</strong> To be a leading institution in Malawi for producing innovative healthcare practitioners who impact communities positively.
      </p>
    </PageLayout>
  );
}

export default Mission;