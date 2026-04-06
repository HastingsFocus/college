import { FaEye, FaBullseye, FaHandsHelping, FaUserShield, FaBalanceScale, FaHeart } from "react-icons/fa";

function Mission() {
  return (
    <div>

      {/* 🔥 PAGE TITLE */}
      <h2 className="text-2xl md:text-3xl font-bold mb-6 text-primary">
        Mission, Vision & Core Values
      </h2>

      {/* 🧭 GRID */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {/* 👁️ VISION */}
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <div className="flex items-center gap-3 mb-4">
            <FaEye className="text-3xl text-accent" />
            <h3 className="text-xl font-semibold">Vision</h3>
          </div>
          <p className="text-gray-600 leading-relaxed">
            To be a center of excellence in training, research, and consultancy 
            in health and health-related issues.
          </p>
        </div>

        {/* 🎯 MISSION */}
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition">
          <div className="flex items-center gap-3 mb-4">
            <FaBullseye className="text-3xl text-accent" />
            <h3 className="text-xl font-semibold">Mission</h3>
          </div>
          <p className="text-gray-600 leading-relaxed">
            To offer training, research, and consultancy in health and health-related 
            services in responsiveness to the needs of society in order to contribute 
            to quality health-related services following the healing ministry of 
            Jesus Christ.
          </p>
        </div>

        {/* ❤️ CORE VALUES */}
        <div className="bg-white p-6 rounded-2xl shadow hover:shadow-lg transition md:col-span-2 lg:col-span-1">
          <div className="flex items-center gap-3 mb-4">
            <FaHandsHelping className="text-3xl text-accent" />
            <h3 className="text-xl font-semibold">Core Values</h3>
          </div>

          <ul className="space-y-3 text-gray-600">

            <li className="flex items-center gap-2">
              <FaHeart className="text-accent" />
              Respect to Catholic teachings
            </li>

            <li className="flex items-center gap-2">
              <FaUserShield className="text-accent" />
              Professionalism
            </li>

            <li className="flex items-center gap-2">
              <FaBalanceScale className="text-accent" />
              Accountability
            </li>

            <li className="flex items-center gap-2">
              <FaBalanceScale className="text-accent" />
              Transparency
            </li>

            <li className="flex items-center gap-2">
              <FaHandsHelping className="text-accent" />
              Respect for human dignity
            </li>

          </ul>
        </div>

      </div>

    </div>
  );
}

export default Mission;