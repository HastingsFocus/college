// src/pages/students/Sports.jsx
import React from "react";

function Sports() {
  return (
    <div className="p-6 md:p-10 space-y-8">

      {/* 🔥 PAGE HEADER */}
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
        Sports & Recreation
      </h2>

      {/* 📝 INTRO PARAGRAPH */}
      <p className="text-gray-700 leading-relaxed">
        At St. Joseph’s College of Health Sciences, we believe that physical well-being and recreation are essential components of a balanced student life. While our primary focus is on academic excellence, we encourage students to engage in sports and recreational activities that promote a healthy lifestyle, teamwork, and personal growth.
      </p>

      {/* SPORTS FACILITIES */}
      <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-accent">
        <h3 className="text-2xl font-semibold mb-3">Sports Facilities</h3>
        <p className="text-gray-700 leading-relaxed mb-2">
          Our campus provides a variety of sports facilities supporting indoor and outdoor games, fitness programs, and organized team sports. Students can also enjoy individual workouts to maintain physical fitness and well-being.
        </p>
      </div>

      {/* RECREATIONAL ACTIVITIES */}
      <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-accent">
        <h3 className="text-2xl font-semibold mb-3">Recreational Activities</h3>
        <p className="text-gray-700 leading-relaxed">
          We offer a range of recreational programs and events that allow students to relax, build friendships, and explore new hobbies. These activities create an inclusive and dynamic environment where students can stay active, engaged, and healthy throughout their academic journey.
        </p>
      </div>

    </div>
  );
}

export default Sports;