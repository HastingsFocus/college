// src/pages/admissions/Programs.jsx
import React from "react";

const programs = [
  {
    name: "Diploma in Nursing and Midwifery Technician",
    duration: "3 Years",
    requirements: `The course is open to both male and female applicants with a minimum age of 16 and a maximum age of 40. Applicants must have a Malawi School Certificate of Education (MSCE) or its equivalent with four credit passes which should include English, Biology, and Physical Science (or Chemistry or Physics) plus any other science subject (Mathematics or Agriculture or Home Economics or Geography).`,
    accreditation: "NMCM",
  },
  {
    name: "Diploma in Public Health",
    duration: "3 Years",
    requirements: `Malawi School Certificate of Education (MSCE) with four (4) Credits, including English and any two science subjects. The program is open to male and female applicants with a minimum age of 18 and a maximum age of 45.`,
    accreditation: "MCM",
  },
  {
    name: "Diploma in Pharmacy (Upgrading)",
    duration: "2 Years",
    requirements: `Applicants must be not less than 20 years of age. Certificate in Pharmacy and registered with Pharmacy and Medicines Regulatory Authority (PMRA). Work experience of not less than two years. MSCE or its equivalent with four credits which include: English, Biology, Physical Science or Chemistry and any science subjects e.g. Physics, Mathematics, Geography, Agriculture and Home Economics.`,
    accreditation: "PMRA",
  },
  {
    name: "Certificate in Pharmacy",
    duration: "2 Years",
    requirements: `Applicants must be between 16 and 45 years of age. MSCE with three credits which include: Chemistry, Physical Science and any two science subjects e.g. Biology, Physics, Mathematics, Geography, Agriculture, Home Economics.`,
    accreditation: "PMRA",
  },
];

export default function Programs() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 md:px-10 lg:px-20">
      <h1 className="text-3xl md:text-4xl font-bold text-darkText mb-8 text-center">
        Our Programs
      </h1>

      <p className="text-gray-700 text-center max-w-3xl mx-auto mb-12">
        St. Joseph College of Health Sciences is dedicated to providing world-class education and training in a variety of health science disciplines. Our programs are designed to equip students with the knowledge, skills, and clinical experience needed to excel in the healthcare sector. With accreditation from leading health bodies in Malawi, we offer programs that not only meet the highest academic standards but also focus on the practical, hands-on experience necessary for a successful healthcare career.
      </p>

      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {programs.map((program, index) => (
          <div
            key={index}
            className="bg-white rounded-xl shadow-lg p-6 hover:shadow-2xl transition-shadow duration-300"
          >
            <h2 className="text-xl font-semibold text-primary mb-3">{program.name}</h2>
            <p className="text-gray-600 mb-2">
              <span className="font-semibold">Duration:</span> {program.duration}
            </p>
            <p className="text-gray-600 mb-2">
              <span className="font-semibold">Entry Requirements:</span> {program.requirements}
            </p>
            <p className="text-gray-600">
              <span className="font-semibold">Accreditation:</span> {program.accreditation}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}