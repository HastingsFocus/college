// src/pages/departments/Midwifery.jsx

import HODImage from "../../assets/images/lecturer_1.jpeg";

function Midwifery() {
  return (
    <div>

      {/* 🔥 PAGE HEADER */}
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary">
        Midwifery Department
      </h2>

      {/* 📝 INTRO PARAGRAPH */}
      <p className="text-gray-700 leading-relaxed mb-6">
        The Midwifery Department at St. Joseph’s College of Health Sciences is dedicated to preparing skilled, compassionate, and highly competent midwives who are equipped to provide comprehensive care to women and newborns. Our program combines rigorous academic training with hands-on clinical experience, empowering students to become leaders in maternal and child health care. We are committed to promoting safe, respectful, and culturally sensitive care to families during pregnancy, childbirth, and the postpartum period.
      </p>

      {/* 👩‍🏫 HOD SECTION */}
      <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
        <img
          src={HODImage}
          alt="Head of Midwifery Department"
          className="w-48 h-48 object-cover rounded-full shadow-lg border-4 border-accent"
        />
        <div>
          <h3 className="text-xl font-semibold mb-2">Head of Department</h3>
          <p className="text-gray-700 leading-relaxed">
            The Head of the Midwifery Department guides students in achieving excellence in maternal and child healthcare. They ensure that graduates are capable of providing evidence-based, compassionate, and culturally sensitive care to women and newborns in diverse healthcare settings.
          </p>
        </div>
      </div>

      {/* 🎯 MISSION SECTION */}
      <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-accent mb-6">
        <h3 className="text-xl font-semibold mb-3">Mission</h3>
        <p className="text-gray-700 leading-relaxed">
          Our mission is to train and develop midwives who are capable of delivering high-quality, evidence-based care to women throughout their reproductive health journey. Through an integrated approach to education, clinical practice, and research, we aim to nurture professionals who advocate for women’s health, promote maternal and neonatal well-being, and improve birth outcomes in communities.
        </p>
      </div>

    </div>
  );
}

export default Midwifery;