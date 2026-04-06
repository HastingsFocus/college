import { FaCertificate, FaUserNurse, FaGlobeAfrica, FaPills } from "react-icons/fa";

function Accreditation() {
  return (
    <div>

      {/* 🔥 TITLE */}
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
        Accreditation
      </h2>

      {/* 📄 INTRO TEXT */}
      <p className="text-gray-700 leading-relaxed mb-8">
        St. Joseph College of Health Sciences is a distinguished institution 
        committed to providing high-quality education in the health sciences field. 
        Our accredited programs ensure that students receive training that meets 
        national standards and prepares them to serve effectively in the healthcare sector.
      </p>

      {/* 🧾 ACCREDITATION CARDS */}
      <div className="grid md:grid-cols-2 gap-6">

        {/* 🏥 NMCM */}
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <div className="flex items-center gap-3 mb-4">
            <FaUserNurse className="text-3xl text-accent" />
            <h3 className="text-xl font-semibold">
              Nursing & Midwifery (NMCM)
            </h3>
          </div>

          <p className="text-gray-600 leading-relaxed">
            Our Nursing and Midwifery program is accredited by the Nurses and 
            Midwives Council of Malawi (NMCM), ensuring the highest standards 
            of training in nursing care and midwifery practices. This reflects 
            our commitment to producing skilled and competent healthcare professionals.
          </p>
        </div>

        {/* 🌍 MCM */}
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <div className="flex items-center gap-3 mb-4">
            <FaGlobeAfrica className="text-3xl text-accent" />
            <h3 className="text-xl font-semibold">
              Public Health (MCM)
            </h3>
          </div>

          <p className="text-gray-600 leading-relaxed">
            Our Public Health program is accredited by the Medical Council of Malawi (MCM), 
            validating the excellence of our curriculum. We prepare future public health 
            leaders to address health challenges and promote well-being at all levels.
          </p>
        </div>

        {/* 💊 PMRA */}
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition md:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <FaPills className="text-3xl text-accent" />
            <h3 className="text-xl font-semibold">
              Pharmacy & Medicines Regulatory Authority (PMRA)
            </h3>
          </div>

          <p className="text-gray-600 leading-relaxed">
            The College is also registered by the Pharmacy and Medicines Regulatory 
            Authority (PMRA). To date, the institution has trained over 150 licensed 
            Pharmacy Assistants who are currently serving in Government and CHAM 
            health facilities across Malawi.
          </p>
        </div>

      </div>

      {/* 🎯 FOOTER NOTE */}
      <div className="mt-8 bg-gray-50 p-6 rounded-xl border-l-4 border-accent">
        <div className="flex items-start gap-3">
          <FaCertificate className="text-2xl text-accent mt-1" />
          <p className="text-gray-700 leading-relaxed">
            At St. Joseph College of Health Sciences, we take pride in offering 
            programs aligned with national healthcare standards, ensuring that 
            our graduates are highly regarded and ready to make a positive impact 
            in the healthcare sector.
          </p>
        </div>
      </div>

    </div>
  );
}

export default Accreditation;