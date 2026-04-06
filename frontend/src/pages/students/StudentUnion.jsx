// src/pages/students/StudentUnion.jsx
import React from "react";

function StudentUnion() {
  return (
    <div className="p-6 md:p-10 space-y-8">

      {/* 🔥 PAGE HEADER */}
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
        Student Union
      </h2>

      {/* 📝 INTRO PARAGRAPH */}
      <p className="text-gray-700 leading-relaxed">
        The Student Union at St. Joseph’s College of Health Sciences plays a vital role in representing and supporting the student body. The union serves as the voice of students, working to ensure that their needs, concerns, and aspirations are heard and addressed by the college administration.
      </p>

      {/* STUDENT ADVOCACY */}
      <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-accent">
        <h3 className="text-2xl font-semibold mb-3">Student Advocacy</h3>
        <p className="text-gray-700 leading-relaxed">
          The union represents students in discussions with faculty and administration, advocating for academic, social, and welfare issues that impact the student community.
        </p>
      </div>

      {/* CAMPUS EVENTS */}
      <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-accent">
        <h3 className="text-2xl font-semibold mb-3">Campus Events & Activities</h3>
        <p className="text-gray-700 leading-relaxed">
          From cultural festivals and sports events to academic workshops and social gatherings, the Student Union organizes activities that foster a vibrant and engaging campus environment.
        </p>
      </div>

      {/* SUPPORT & RESOURCES */}
      <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-accent">
        <h3 className="text-2xl font-semibold mb-3">Support & Resources</h3>
        <p className="text-gray-700 leading-relaxed">
          The union provides support services to students, including guidance on academic matters, career development, and student welfare.
        </p>
      </div>

      {/* LEADERSHIP OPPORTUNITIES */}
      <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-accent">
        <h3 className="text-2xl font-semibold mb-3">Leadership Opportunities</h3>
        <p className="text-gray-700 leading-relaxed">
          Being a member of the Student Union provides an excellent opportunity for students to take on leadership roles, develop organizational skills, and make a positive impact on the campus community.
        </p>
      </div>

    </div>
  );
}

export default StudentUnion;