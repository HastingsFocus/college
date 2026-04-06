// src/pages/library/ICTSupport.jsx

import ICTImage from "../../assets/images/c11.jpeg";

function ICTSupport() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">

      {/* 🔥 PAGE HEADER */}
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
        ICT Support at St. Joseph College of Health Sciences
      </h2>

      {/* 🖼 ICT HERO IMAGE */}
      <div className="mb-8">
        <img
          src={ICTImage}
          alt="ICT Support"
          className="w-full h-72 md:h-96 object-cover rounded-xl shadow-lg"
        />
      </div>

      {/* 📝 INTRODUCTION */}
      <p className="text-gray-700 leading-relaxed mb-6">
        At St. Joseph College of Health Sciences, we understand the vital role that technology plays in enhancing the educational experience and supporting the academic and operational needs of our community. Our ICT Support team is dedicated to providing reliable, efficient, and innovative solutions to ensure that all technology-related resources are accessible, secure, and optimized for learning, teaching, and administration.
      </p>

      {/* 🌟 VISION */}
      <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-accent mb-6">
        <h3 className="text-2xl font-semibold mb-3">Our Vision</h3>
        <p className="text-gray-700 leading-relaxed">
          To empower the academic and administrative success of our students, faculty, and staff by providing seamless, state-of-the-art technological support and fostering a digital environment conducive to effective learning and research.
        </p>
      </div>

      {/* 🎯 MISSION */}
      <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-accent mb-6">
        <h3 className="text-2xl font-semibold mb-3">Our Mission</h3>
        <p className="text-gray-700 leading-relaxed">
          We are committed to delivering high-quality, responsive, and professional ICT services that enhance the educational experience at St. Joseph College of Health Sciences. Our mission is to provide the tools, support, and training necessary to help our community leverage technology effectively in their academic and professional pursuits.
        </p>
      </div>

      {/* 🛠 ICT SERVICES OFFERED */}
      <div className="mb-6">
        <h3 className="text-2xl font-semibold mb-4">ICT Services Offered</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>
            <strong>Technical Support and Troubleshooting:</strong> Assistance with hardware/software issues, network connectivity, and device setup via email, phone, and in-person.
          </li>
          <li>
            <strong>Device Setup and Maintenance:</strong> Configure laptops, tablets, and college equipment to work seamlessly with campus systems and networks.
          </li>
          <li>
            <strong>Software and Application Support:</strong> Installation, updates, and troubleshooting for academic and productivity software used in research, writing, data analysis, and healthcare simulation.
          </li>
          <li>
            <strong>Wi-Fi and Network Support:</strong> Reliable campus-wide Wi-Fi access and support for internal networks, maintaining stability and security.
          </li>
          <li>
            <strong>E-learning Platforms and LMS Support:</strong> Integration and troubleshooting for online courses, virtual classrooms, and other educational technologies.
          </li>
          <li>
            <strong>Data Security and Privacy:</strong> Ensuring digital resources are secure and compliant with data protection standards.
          </li>
          <li>
            <strong>Training and Workshops:</strong> ICT workshops on software applications, cybersecurity best practices, and effective use of technology for research and academics.
          </li>
        </ul>
      </div>

      {/* 📞 GETTING HELP */}
      <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-accent mb-6">
        <h3 className="text-2xl font-semibold mb-3">Getting Help</h3>
        <p className="text-gray-700 leading-relaxed mb-3">
          If you need technical assistance or have questions about ICT services, our support team is ready to help:
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li><strong>Email Support:</strong> ict_support@stjosephscollege.ac.mw</li>
          <li><strong>Phone Support:</strong> +265 995 671 333 | +265 884 026 644</li>
          <li><strong>Walk-in Support:</strong> Visit our offices at the Computer Lab</li>
        </ul>
        <p className="text-gray-700 leading-relaxed mt-3">
          We are dedicated to providing a seamless and tech-enabled learning experience. Your success is our priority, and our ICT support is here to help you navigate the ever-evolving digital landscape.
        </p>
      </div>

    </div>
  );
}

export default ICTSupport;