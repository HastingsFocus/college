// src/pages/departments/Pharmacy.jsx

import HODImage from "../../assets/images/lecturer_1.jpeg";

function Pharmacy() {
  return (
    <div>

      {/* 🔥 PAGE HEADER */}
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary">
        Pharmacy Department
      </h2>

      {/* 📝 INTRO PARAGRAPH */}
      <p className="text-gray-700 leading-relaxed mb-6">
        The Pharmacy Department at St. Joseph’s College of Health Sciences is dedicated to preparing the next generation of healthcare professionals through comprehensive education, innovative research, and service to the community. Our department focuses on developing pharmacy personnel who are skilled, compassionate, and committed to improving health outcomes in diverse healthcare settings.
      </p>

      {/* 👩‍🏫 HOD SECTION */}
      <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
        <img
          src={HODImage}
          alt="Head of Pharmacy Department"
          className="w-48 h-48 object-cover rounded-full shadow-lg border-4 border-accent"
        />
        <div>
          <h3 className="text-xl font-semibold mb-2">Head of Department</h3>
          <p className="text-gray-700 leading-relaxed">
            The Head of the Pharmacy Department leads the team in providing high-quality pharmacy education, mentoring students, and ensuring that graduates are equipped with the knowledge, ethical values, and professional skills to thrive in healthcare settings.
          </p>
        </div>
      </div>

      {/* 🎯 MISSION SECTION */}
      <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-accent mb-6">
        <h3 className="text-xl font-semibold mb-3">Mission</h3>
        <p className="text-gray-700 leading-relaxed">
          Our mission is to provide high-quality education and training to students pursuing careers in pharmacy while promoting patient-centered care, advancing pharmaceutical knowledge, and encouraging lifelong learning. We strive to equip our students with the clinical expertise, ethical values, and professional responsibility needed to thrive in the evolving healthcare landscape.
        </p>
      </div>

      {/* 📚 ACADEMIC PROGRAMS */}
      <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-accent">
        <h3 className="text-xl font-semibold mb-3">Academic Programs</h3>
        <ul className="list-disc pl-6 text-gray-700 leading-relaxed space-y-1">
          <li>Diploma in Pharmacy (Upgrading)</li>
          <li>Certificate in Pharmacy</li>
        </ul>
      </div>

    </div>
  );
}

export default Pharmacy;