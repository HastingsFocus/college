// src/pages/library/Library.jsx
import LibraryImage from "../../assets/images/library.jpeg";

function Library() {
  return (
    <div>
      {/* 🔥 PAGE HEADER */}
      <h2 className="text-2xl md:text-3xl font-bold mb-4 text-primary">
        St. Joseph College of Health Sciences Library
      </h2>

      {/* 🖼 LIBRARY IMAGE */}
      <img
        src={LibraryImage}
        alt="Library"
        className="w-full h-72 md:h-96 object-cover rounded-xl shadow-lg mb-6"
      />

      {/* 📝 INTRO PARAGRAPH */}
      <p className="text-gray-700 leading-relaxed mb-6">
        The St. Joseph College of Health Sciences Library is a dedicated resource hub designed to support the academic, clinical, and research needs of our students, faculty, and staff. As a cornerstone of learning and academic excellence, our library offers a dynamic environment where the pursuit of knowledge is nurtured, and the advancement of healthcare education is prioritized.
      </p>

      {/* 👩‍🏫 LIBRARY STAFF / HOD SECTION */}
      <div className="flex flex-col md:flex-row items-center gap-6 mb-8">
        <img
          src={LibraryImage} // you can replace this with a photo of the Librarian/HOD
          alt="Library Head"
          className="w-48 h-48 object-cover rounded-full shadow-lg border-4 border-accent"
        />
        <div>
          <h3 className="text-xl font-semibold mb-2">Head Librarian</h3>
          <p className="text-gray-700 leading-relaxed">
            The Head Librarian leads the library team in providing high-quality services, ensuring that all students and staff have access to the best resources, and supporting academic excellence across the college.
          </p>
        </div>
      </div>

      {/* 🎯 MISSION SECTION */}
      <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-accent mb-6">
        <h3 className="text-xl font-semibold mb-3">Mission</h3>
        <p className="text-gray-700 leading-relaxed">
          Our mission is to provide accessible, comprehensive, and up-to-date resources to support learning, research, and professional growth. We aim to cultivate a culture of knowledge, critical thinking, and evidence-based practice among students and faculty.
        </p>
      </div>

      {/* 🌟 VISION SECTION */}
      <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-accent mb-6">
        <h3 className="text-xl font-semibold mb-3">Vision</h3>
        <p className="text-gray-700 leading-relaxed">
          To be a premier academic library that empowers students and faculty with knowledge, tools, and resources to excel in health sciences and advance healthcare education.
        </p>
      </div>

      {/* 🛠 SERVICES OFFERED */}
      <div className="mb-6">
        <h3 className="text-xl font-semibold mb-4">Services Offered</h3>
        <ul className="list-disc list-inside text-gray-700 space-y-2">
          <li><strong>Research & Study Resources:</strong> Textbooks, journals, and research articles in physical and digital formats.</li>
          <li><strong>Online Databases:</strong> Access PubMed, Cochrane Library, CINAHL, and other healthcare databases.</li>
          <li><strong>Study Areas:</strong> Quiet zones and collaborative spaces for group work.</li>
          <li><strong>E-Resources:</strong> 24/7 access to e-books, e-journals, and other digital learning materials.</li>
        </ul>
      </div>

      {/* ⏰ OPENING HOURS */}
      <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-accent mb-6">
        <h3 className="text-xl font-semibold mb-3">Opening Hours</h3>
        <ul className="text-gray-700 leading-relaxed space-y-1">
          <li>Monday – Friday: 08:00 AM – 9:00 PM</li>
          <li>Saturday: 09:00 AM – 12:00 PM</li>
          <li>Sunday & Public Holidays: Closed</li>
        </ul>
      </div>
    </div>
  );
}

export default Library;