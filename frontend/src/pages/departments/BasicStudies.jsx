// src/pages/departments/BasicStudies.jsx

import HODImage from "../../assets/images/lecturer_1.jpeg";

function BasicStudies() {
  return (
    <div>

      {/* 🔥 PAGE HEADER */}
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary">
        Basic Studies Department
      </h2>

      {/* 📝 INTRO PARAGRAPH */}
      <p className="text-gray-700 leading-relaxed mb-6">
        The Department plays a pivotal role in shaping well-rounded healthcare professionals by providing foundational knowledge in the core sciences that underpin clinical practice. Our department offers a comprehensive education in subjects such as anatomy, physiology, biochemistry, microbiology, pharmacology, and pathology. These disciplines form the bedrock of all healthcare education, helping students understand the intricate mechanisms of the human body and the nature of health and disease.
      </p>

      {/* 👩‍🏫 HOD SECTION */}
      <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
        <img
          src={HODImage}
          alt="Head of Basic Studies Department"
          className="w-48 h-48 object-cover rounded-full shadow-lg border-4 border-accent"
        />
        <div>
          <h3 className="text-xl font-semibold mb-2">Head of Department</h3>
          <p className="text-gray-700 leading-relaxed">
            The Head of the Basic Studies Department ensures that students build a strong foundation in the core sciences essential for all healthcare professions. They guide students to understand biological, chemical, and physiological principles critical for advanced studies and clinical practice.
          </p>
        </div>
      </div>

      {/* 🎯 MISSION SECTION */}
      <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-accent mb-6">
        <h3 className="text-xl font-semibold mb-3">Mission</h3>
        <p className="text-gray-700 leading-relaxed">
          Our mission is to provide students with a strong foundation in the basic sciences to prepare them for advanced studies and clinical practice in health sciences. We strive to foster a deep understanding of the biological, chemical, and physiological principles that influence human health, while encouraging critical thinking, scientific inquiry, and a passion for lifelong learning.
        </p>
      </div>

    </div>
  );
}

export default BasicStudies;