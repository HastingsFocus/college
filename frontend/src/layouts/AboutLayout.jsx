import PageLayout from "./PageLayout";

function AboutLayout() {
  const sidebarItems = [
    { name: "Background", path: "/about/background" },
    { name: "Mission Vision Core Values", path: "/about/mission" },
    { name: "Accreditation", path: "/about/accreditation" },
    { name: "Staff", path: "/about/staff" },
  ];

  return (
    <PageLayout
      title="About Us"
      sidebarItems={sidebarItems}
    />
  );
}

export default AboutLayout;