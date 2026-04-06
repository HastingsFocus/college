// src/pages/students/StudentWelfare.jsx
import React from "react";

function StudentWelfare() {
  return (
    <div className="p-6 md:p-10 space-y-8">

      {/* 🔥 PAGE HEADER */}
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
        Student Welfare
      </h2>

      {/* 📝 INTRO PARAGRAPH */}
      <p className="text-gray-700 leading-relaxed">
        At St. Joseph College of Health Sciences, we prioritize the well-being, personal growth, and academic success of our students. Our comprehensive approach to student welfare ensures that every individual is supported holistically, addressing their physical, emotional, social, and academic needs throughout their journey with us.
      </p>

      {/* 👀 VISION */}
      <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-accent">
        <h3 className="text-2xl font-semibold mb-3">Our Vision</h3>
        <p className="text-gray-700 leading-relaxed">
          To provide a nurturing and inclusive environment where every student feels valued, supported, and empowered to reach their full potential in both their academic and personal life.
        </p>
      </div>

      {/* 🎯 MISSION */}
      <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-accent">
        <h3 className="text-2xl font-semibold mb-3">Our Mission</h3>
        <p className="text-gray-700 leading-relaxed">
          Our mission is to promote the overall welfare of students by offering a range of services that cater to their health, mental well-being, career development, and social engagement. We aim to create a student-centered community that fosters a sense of belonging, resilience, and success.
        </p>
      </div>

      {/* 🏥 KEY STUDENT WELFARE SERVICES */}
      <div className="space-y-6">
        <h3 className="text-2xl font-semibold mb-3">Key Students’ Welfare Services</h3>

        {/* Health and Counseling */}
        <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-accent">
          <h4 className="text-xl font-semibold mb-2">Health and Counseling Services</h4>
          <p className="text-gray-700 leading-relaxed">
            The college offers confidential counseling and mental health support services to help students navigate academic pressures, personal challenges, and emotional well-being. We also provide basic health services, including first aid, referrals to medical professionals, and health education to ensure students maintain good physical and mental health.
          </p>
        </div>

        {/* Academic Support */}
        <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-accent">
          <h4 className="text-xl font-semibold mb-2">Academic Support and Mentoring</h4>
          <p className="text-gray-700 leading-relaxed">
            To ensure students thrive academically, we offer personalized mentoring and academic counseling. Faculty and staff work closely with students to provide guidance on academic planning, exam preparation, time management, and study strategies. Peer tutoring and supplementary academic resources are also available for students who require additional support.
          </p>
        </div>

        {/* Career Services */}
        <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-accent">
          <h4 className="text-xl font-semibold mb-2">Career Services</h4>
          <p className="text-gray-700 leading-relaxed">
            Our career services department helps students prepare for life after graduation with guidance on career exploration, resume building, job interviews, and professional networking. We provide opportunities for internships, clinical placements, and collaborations with healthcare organizations, equipping students with the skills and experience they need to succeed in the healthcare workforce.
          </p>
        </div>

        {/* Student Engagement */}
        <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-accent">
          <h4 className="text-xl font-semibold mb-2">Student Engagement and Activities</h4>
          <p className="text-gray-700 leading-relaxed">
            A vibrant student life is essential to a fulfilling college experience. We encourage students to get involved in various extracurricular activities, including clubs, sports, cultural events, and community outreach programs. These activities not only enrich personal development but also foster a sense of community and leadership among our students.
          </p>
        </div>

        {/* Financial Aid */}
        <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-accent">
          <h4 className="text-xl font-semibold mb-2">Financial Aid and Scholarships</h4>
          <p className="text-gray-700 leading-relaxed">
            We believe in making education accessible to all. Our financial aid office assists students in identifying scholarship opportunities, grants, and other financial resources. We are committed to supporting students in overcoming financial barriers to achieve their academic goals.
          </p>
        </div>

        {/* Accommodation */}
        <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-accent">
          <h4 className="text-xl font-semibold mb-2">Accommodation Services</h4>
          <p className="text-gray-700 leading-relaxed">
            For students who need housing assistance, we offer guidance on accommodation options both on and off-campus. We strive to ensure that students have a comfortable living environment that supports their academic and personal success.
          </p>
        </div>
      </div>

      {/* 🌟 WELL-BEING */}
      <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-accent">
        <h3 className="text-2xl font-semibold mb-3">Well-Being and Student Success</h3>
        <p className="text-gray-700 leading-relaxed">
          We recognize that the well-being of students is integral to their academic success and personal growth. Our welfare services are designed to offer the support, resources, and guidance that empower students to thrive, both during their studies and in their future careers as healthcare professionals.
        </p>
        <p className="text-gray-700 leading-relaxed mt-2">
          We encourage all students to reach out to our students’ welfare team whenever they need support. We are here to listen, assist, and ensure that every student has the opportunity to succeed in a healthy, supportive, and inclusive environment.
        </p>
      </div>

    </div>
  );
}

export default StudentWelfare;