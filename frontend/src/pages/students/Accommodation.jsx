// src/pages/students/Accomodation.jsx
import React from "react";

function Accomodation() {
  return (
    <div className="p-6 md:p-10 space-y-8">

      {/* 🔥 PAGE HEADER */}
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
        Accommodation & Catering
      </h2>

      {/* 📝 INTRO PARAGRAPH */}
      <p className="text-gray-700 leading-relaxed">
        St. Joseph’s College of Health Sciences provides students with options to ensure a comfortable and conducive living environment while studying. We also guide students on catering options, though on-campus catering services are currently not provided.
      </p>

      {/* CATERING SERVICES */}
      <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-accent">
        <h3 className="text-2xl font-semibold mb-3">Catering Services</h3>
        <p className="text-gray-700 leading-relaxed">
          Currently, the college does not offer on-campus catering services. This decision helps keep tuition fees affordable for all students. We encourage students to explore nearby food vendors and local restaurants to meet their dining needs.
        </p>
      </div>

      {/* ACCOMMODATION */}
      <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-accent">
        <h3 className="text-2xl font-semibold mb-3">Accommodation Options</h3>
        <p className="text-gray-700 leading-relaxed mb-4">
          Student accommodation is not compulsory. Students may choose to stay on-campus (Residential) or off-campus (Non-Residential) depending on their preferences.
        </p>

        <ul className="list-disc pl-6 space-y-2 text-gray-700">
          <li>
            <strong>Residential (On-Campus):</strong> Provides convenient access to campus facilities and promotes closer connections with the college community.
          </li>
          <li>
            <strong>Non-Residential (Off-Campus):</strong> Offers flexibility for independent living, either alone or with roommates, while maintaining proximity to the college.
          </li>
        </ul>
      </div>

    </div>
  );
}

export default Accomodation;