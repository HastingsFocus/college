// src/pages/library/ICTSupport.jsx

import ICTImage from "../../assets/images/c11.jpeg";

function ICTSupport() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-10">

      {/* 🔥 PAGE HEADER */}
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-8 text-center">
        ICT Support at St. Joseph College of Health Sciences
      </h2>

      {/* 🖼 IMAGE + INTRO SECTION */}
      <div className="flex flex-col md:flex-row gap-8 mb-10 items-start">

        {/* LEFT - STAFF CARD */}
        <div className="md:w-1/3 bg-white p-4 rounded-2xl shadow-md text-center">
          <img
            src={ICTImage}
            alt="ICT Officer"
            className="w-full h-56 md:h-64 object-cover rounded-xl mb-4"
          />

          <h4 className="font-semibold text-lg text-gray-800">
            Mr. John Banda
          </h4>
          <p className="text-sm text-gray-600">
            ICT Officer
          </p>
        </div>

        {/* RIGHT - INTRO TEXT */}
        <div className="md:w-2/3">
          <p className="text-gray-700 leading-relaxed text-lg">
            At St. Joseph College of Health Sciences, we understand the vital role that technology plays in enhancing the educational experience and supporting the academic and operational needs of our community.
          </p>

          <p className="text-gray-700 leading-relaxed mt-4">
            Our ICT Support team is dedicated to providing reliable, efficient, and innovative solutions to ensure that all technology-related resources are accessible, secure, and optimized for learning, teaching, and administration.
          </p>
        </div>

      </div>

      {/* 🌟 VISION */}
      <div className="bg-gray-50 p-6 rounded-2xl border-l-4 border-accent mb-6 shadow-sm">
        <h3 className="text-2xl font-semibold mb-3 text-gray-800">
          Our Vision
        </h3>
        <p className="text-gray-700 leading-relaxed">
          To empower the academic and administrative success of our students, faculty, and staff by providing seamless, state-of-the-art technological support and fostering a digital environment conducive to effective learning and research.
        </p>
      </div>

      {/* 🎯 MISSION */}
      <div className="bg-gray-50 p-6 rounded-2xl border-l-4 border-accent mb-6 shadow-sm">
        <h3 className="text-2xl font-semibold mb-3 text-gray-800">
          Our Mission
        </h3>
        <p className="text-gray-700 leading-relaxed">
          We are committed to delivering high-quality, responsive, and professional ICT services that enhance the educational experience at St. Joseph College of Health Sciences. Our mission is to provide the tools, support, and training necessary to help our community leverage technology effectively in their academic and professional pursuits.
        </p>
      </div>

      {/* 🛠 SERVICES */}
      <div className="mb-10">
        <h3 className="text-2xl font-semibold mb-4 text-gray-800">
          ICT Services Offered
        </h3>

        <div className="grid md:grid-cols-2 gap-4 text-gray-700">

          <div className="bg-white p-4 rounded-xl shadow-sm">
            <strong>Technical Support:</strong>
            <p className="text-sm mt-1">
              Assistance with hardware, software, and network issues.
            </p>
          </div>

          <div className="bg-white p-4 rounded-xl shadow-sm">
            <strong>Device Setup:</strong>
            <p className="text-sm mt-1">
              Configuration of laptops, tablets, and campus devices.
            </p>
          </div>

          <div className="bg-white p-4 rounded-xl shadow-sm">
            <strong>Software Support:</strong>
            <p className="text-sm mt-1">
              Installation and troubleshooting of academic applications.
            </p>
          </div>

          <div className="bg-white p-4 rounded-xl shadow-sm">
            <strong>Wi-Fi & Network:</strong>
            <p className="text-sm mt-1">
              Stable and secure campus-wide connectivity.
            </p>
          </div>

          <div className="bg-white p-4 rounded-xl shadow-sm">
            <strong>E-learning Support:</strong>
            <p className="text-sm mt-1">
              Help with LMS, virtual classrooms, and online tools.
            </p>
          </div>

          <div className="bg-white p-4 rounded-xl shadow-sm">
            <strong>Data Security:</strong>
            <p className="text-sm mt-1">
              Protection of systems and user information.
            </p>
          </div>

          <div className="bg-white p-4 rounded-xl shadow-sm md:col-span-2">
            <strong>Training & Workshops:</strong>
            <p className="text-sm mt-1">
              Cybersecurity awareness and software training sessions.
            </p>
          </div>

        </div>
      </div>

      {/* 📞 CONTACT */}
      <div className="bg-gray-50 p-6 rounded-2xl border-l-4 border-accent shadow-sm">
        <h3 className="text-2xl font-semibold mb-3 text-gray-800">
          Getting Help
        </h3>

        <p className="text-gray-700 mb-4">
          If you need technical assistance or have questions about ICT services, our support team is ready to help:
        </p>

        <div className="space-y-2 text-gray-700">
          <p><strong>Email:</strong> ict_support@stjosephscollege.ac.mw</p>
          <p><strong>Phone:</strong> +265 995 671 333 | +265 884 026 644</p>
          <p><strong>Location:</strong> Computer Lab</p>
        </div>

        <p className="text-gray-700 mt-4">
          We are dedicated to providing a seamless and tech-enabled learning experience. Your success is our priority.
        </p>
      </div>

    </div>
  );
}

export default ICTSupport;