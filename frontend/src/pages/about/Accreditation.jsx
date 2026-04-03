// src/pages/about/Accreditation.jsx
import PageLayout from "../../layouts/MainLayout";

function Accreditation() {
  const sidebarItems = [
    { name: "Background", path: "/about/background" },
    { name: "Mission Vision Core Values", path: "/about/mission" },
    { name: "Staff", path: "/about/staff" },
  ];

  return (
    <PageLayout title="About - Accreditation" sidebarItems={sidebarItems}>
      <h2 className="text-xl font-bold mb-4">Accreditation</h2>
      <p className="text-gray-700 leading-relaxed">
        St Joseph College of Health Sciences is fully accredited by the Malawi Ministry of Health and recognized by international healthcare education bodies. Our programs meet rigorous academic and clinical standards.
      </p>
    </PageLayout>
  );
}

export default Accreditation;