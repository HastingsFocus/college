// src/layouts/AboutLayout.jsx
import PageLayout from "./PageLayout";
import { Outlet } from "react-router-dom";

function AboutLayout() {
  const sidebarItems = [
    { name: "Background", path: "/about/background" },
    { name: "Mission Vision Core Values", path: "/about/mission" },
    { name: "Accreditation", path: "/about/accreditation" },
    { name: "Staff", path: "/about/staff" },
  ];

  return (
    <PageLayout title="About Us" sidebarItems={sidebarItems}>
      <Outlet /> {/* <-- About pages (Staff, Background...) will render here */}
    </PageLayout>
  );
}

export default AboutLayout;