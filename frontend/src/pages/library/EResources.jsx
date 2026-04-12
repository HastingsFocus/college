// src/pages/library/EResources.jsx

import EResourcesImage from "../../assets/images/library.jpeg"; // you can replace this with a specific e-resources image later

function EResources() {
  return (
    <div className="max-w-6xl mx-auto px-4 py-8">

      {/* 🔥 PAGE HEADER */}
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">
        E-Resources at St. Joseph College of Health Sciences
      </h2>

      

      {/* 📝 INTRODUCTION */}
      <p className="text-gray-700 leading-relaxed mb-6">
        Our E-Resources platform provides students, faculty, and staff with access to digital learning materials, research databases, e-books, e-journals, and multimedia resources. It is designed to support academic learning, research, and professional development in health sciences.
      </p>

      {/* 🌟 VISION */}
      <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-accent mb-6">
        <h3 className="text-2xl font-semibold mb-3">Our Vision</h3>
        <p className="text-gray-700 leading-relaxed">
          To provide seamless and reliable access to high-quality digital resources that empower students and faculty to excel in learning, research, and clinical practice.
        </p>
      </div>

      {/* 🎯 MISSION */}
      <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-accent mb-6">
        <h3 className="text-2xl font-semibold mb-3">Our Mission</h3>
        <p className="text-gray-700 leading-relaxed">
          We aim to deliver comprehensive electronic resources and support services that enhance academic performance, foster research excellence, and ensure that our community can access the information they need anytime, anywhere.
        </p>
      </div>

      {/* 📚 E-RESOURCES OFFERED */}
      <div className="mb-6">
        <h3 className="text-2xl font-semibold mb-4">E-Resources Available</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li>E-Books and Digital Textbooks in Health Sciences</li>
          <li>Academic Journals and Peer-Reviewed Articles</li>
          <li>Research Databases such as PubMed, CINAHL, and Cochrane Library</li>
          <li>Multimedia Learning Resources and Tutorials</li>
          <li>Access to Online Reference Materials and Guidelines</li>
        </ul>
      </div>

      {/* 💻 ACCESS INFORMATION */}
      <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-accent mb-6">
        <h3 className="text-2xl font-semibold mb-3">Access & Support</h3>
        <p className="text-gray-700 leading-relaxed mb-3">
          Students and staff can access e-resources using college credentials through our online library portal. Support is available for navigating databases, downloading materials, and using online tools effectively.
        </p>
        <ul className="list-disc list-inside text-gray-700 space-y-1">
          <li><strong>Email Support:</strong> library_support@stjosephscollege.ac.mw</li>
          <li><strong>Phone:</strong> +265 884 123 456 | +265 995 654 321</li>
          <li><strong>Walk-in Assistance:</strong> Library help desk</li>
        </ul>
      </div>

      {/* 👩‍💻 NOTE */}
      <p className="text-gray-700 leading-relaxed">
        We are continuously expanding our e-resources collection to ensure that students and faculty have access to the most relevant and up-to-date information in health sciences. Stay tuned for new additions and updates!
      </p>

    </div>
  );
}

export default EResources;