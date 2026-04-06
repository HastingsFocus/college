// src/pages/departments/GeneralNursing.jsx

import HODImage from "../../assets/images/lecturer_1.jpeg";

function GeneralNursing() {
  return (
    <div>

      {/* 🔥 PAGE HEADER */}
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary">
        General Nursing Department
      </h2>

      {/* 📝 INTRO PARAGRAPH */}
      <p className="text-gray-700 leading-relaxed mb-6">
        The General Nursing Department at St. Joseph’s College of Health Sciences is committed to developing compassionate, skilled, and knowledgeable nurses who will provide exceptional care in diverse healthcare settings. Our department offers world-class nursing education, training, and clinical experience to empower students to become leaders in the nursing profession and advocates for patient-centered care.
      </p>

      {/* 👩‍🏫 HOD SECTION */}
      <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
        <img
          src={HODImage}
          alt="Head of General Nursing Department"
          className="w-48 h-48 object-cover rounded-full shadow-lg border-4 border-accent"
        />
        <div>
          <h3 className="text-xl font-semibold mb-2">Head of Department</h3>
          <p className="text-gray-700 leading-relaxed">
            The Head of the General Nursing Department leads the team in providing high-quality nursing education, fostering a culture of care, empathy, and professionalism, and ensuring students are equipped with the skills and knowledge to excel in healthcare.
          </p>
        </div>
      </div>

      {/* 🎯 MISSION SECTION */}
      <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-accent">
        <h3 className="text-xl font-semibold mb-3">Mission</h3>
        <p className="text-gray-700 leading-relaxed">
          Our mission is to provide a holistic, patient-centered nursing education that promotes health, well-being, and quality of life. We strive to produce nurses who are equipped with the clinical expertise, critical thinking skills, and ethical values necessary to meet the challenges of modern healthcare. Through rigorous academic training, clinical exposure, and community service, we aim to cultivate a culture of care, empathy, and professionalism in every student.
        </p>
      </div>

    </div>
  );
}

export default GeneralNursing;