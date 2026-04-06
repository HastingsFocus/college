// src/pages/departments/CommunityHealth.jsx

import HODImage from "../../assets/images/lecturer_1.jpeg";

function CommunityHealth() {
  return (
    <div>

      {/* 🔥 PAGE HEADER */}
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary">
        Community Health Department
      </h2>

      {/* 📝 INTRO PARAGRAPH */}
      <p className="text-gray-700 leading-relaxed mb-6">
        The Community Health Department is committed to improving the health and well-being of populations through education, research, and community-based initiatives. Our department prepares students to become skilled public health professionals dedicated to promoting health equity, preventing disease, and enhancing the quality of life in communities.
      </p>

      {/* 👩‍🏫 HOD SECTION */}
      <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
        <img
          src={HODImage}
          alt="Head of Community Health Department"
          className="w-48 h-48 object-cover rounded-full shadow-lg border-4 border-accent"
        />
        <div>
          <h3 className="text-xl font-semibold mb-2">Head of Department</h3>
          <p className="text-gray-700 leading-relaxed">
            The Head of the Community Health Department ensures that students gain practical and theoretical knowledge to address health disparities, promote health literacy, and implement sustainable health interventions. They guide students in understanding community health dynamics through fieldwork, research, and innovative programs.
          </p>
        </div>
      </div>

      {/* 🎯 MISSION SECTION */}
      <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-accent mb-6">
        <h3 className="text-xl font-semibold mb-3">Mission</h3>
        <p className="text-gray-700 leading-relaxed">
          Our mission is to train and equip future public health leaders who will contribute to the development of healthier communities. We focus on providing students with the knowledge and skills needed to address health disparities, promote health literacy, and implement sustainable health interventions. Our department fosters a comprehensive understanding of community health dynamics through theoretical education, practical field experience, and research.
        </p>
      </div>

    </div>
  );
}

export default CommunityHealth;