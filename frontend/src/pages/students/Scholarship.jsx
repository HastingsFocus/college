// src/pages/students/Scholarships.jsx
import React from "react";

function Scholarships() {
  return (
    <div className="p-6 md:p-10 space-y-8">

      {/* 🔥 PAGE HEADER */}
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
        Scholarships & Financial Assistance
      </h2>

      {/* 📝 INTRO PARAGRAPH */}
      <p className="text-gray-700 leading-relaxed">
        At St. Joseph’s College of Health Sciences, we currently do not offer institutional scholarships to students. However, from time to time, generous donors may provide financial support to help sponsor students in need. These sponsorships are typically offered on a case-by-case basis and are intended to assist students who demonstrate financial need.
      </p>

      {/* EXTERNAL OPPORTUNITIES */}
      <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-accent">
        <h3 className="text-2xl font-semibold mb-3">External Scholarship Opportunities</h3>
        <p className="text-gray-700 leading-relaxed">
          We encourage students to explore external scholarship opportunities from other organizations, as well as funding options from government programs and private foundations. Staying proactive in researching these options can help secure financial support for tuition, living expenses, and other educational needs.
        </p>
      </div>

      {/* DONOR-SUPPORTED SPONSORSHIPS */}
      <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-accent">
        <h3 className="text-2xl font-semibold mb-3">Donor-Sponsored Assistance</h3>
        <p className="text-gray-700 leading-relaxed">
          For any updates on donor-sponsored scholarships or financial assistance, students are advised to stay informed through official college communications. These opportunities are generally offered on a case-by-case basis and aim to support students with demonstrated financial need.
        </p>
      </div>

      {/* NOTE */}
      <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-accent">
        <p className="text-gray-700 leading-relaxed">
          We are committed to assisting students in overcoming financial barriers whenever possible and encourage all students to reach out to the college administration for guidance and support regarding financial assistance opportunities.
        </p>
      </div>

    </div>
  );
}

export default Scholarships;