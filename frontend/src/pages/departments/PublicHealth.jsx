// src/pages/departments/PublicHealth.jsx

import HODImage from "../../assets/images/lecturer_1.jpeg";

function PublicHealth() {
  return (
    <div>
      {/* 🔥 PAGE HEADER */}
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary">
        Public Health Department
      </h2>

      {/* 📝 INTRO PARAGRAPH */}
      <p className="text-gray-700 leading-relaxed mb-6">
        Our department is dedicated to educating future leaders in public health who are passionate about improving the health and well-being of populations. Through innovative academic programs, community-based projects, and cutting-edge research, we prepare students to address the most pressing health challenges of today and tomorrow. Our department is focused on empowering students with the knowledge and skills needed to make a positive impact on public health at local, national, and global levels.
      </p>

      {/* 👩‍🏫 HOD SECTION */}
      <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
        <img
          src={HODImage}
          alt="Head of Public Health Department"
          className="w-48 h-48 object-cover rounded-full shadow-lg border-4 border-accent"
        />
        <div>
          <h3 className="text-xl font-semibold mb-2">Head of Department</h3>
          <p className="text-gray-700 leading-relaxed">
            The Head of the Public Health Department leads the team in providing high-quality education, mentoring students, and ensuring that graduates are equipped to implement effective public health programs and interventions in communities.
          </p>
        </div>
      </div>

      {/* 🎯 MISSION SECTION */}
      <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-accent mb-6">
        <h3 className="text-xl font-semibold mb-3">Mission</h3>
        <p className="text-gray-700 leading-relaxed">
          Our mission is to advance the field of public health through education, research, and community engagement. We aim to develop professionals who are equipped to assess, design, and implement public health interventions that prevent disease, promote health equity, and protect vulnerable populations. Our approach is grounded in a commitment to social justice, interdisciplinary collaboration, and evidence-based practice.
        </p>
      </div>
    </div>
  );
}

export default PublicHealth;