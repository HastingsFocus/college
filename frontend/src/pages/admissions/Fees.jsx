// src/pages/admissions/Fees.jsx
import React from "react";

const feesData = [
  {
    program: "Diploma in Public Health",
    tuition: "MK550,000.00",
    certificate: "MK52,500.00",
    union: "MK6,500.00",
    idCard: "MK8,500.00",
    indexing: "MK10,000.00",
  },
  {
    program: "Diploma in Pharmacy (Upgrading)",
    tuition: "MK550,000.00",
    certificate: "MK52,500.00",
    union: "MK6,500.00",
    idCard: "MK8,500.00",
    indexing: "-",
  },
  {
    program: "Diploma in Nursing & Midwifery Techncian (NMT)",
    tuition: "MK550,000.00",
    certificate: "MK52,500.00",
    union: "MK6,500.00",
    idCard: "MK8,500.00",
    indexing: "MK69,000.00",
  },
  {
    program: "Certificate in Pharmacy",
    tuition: "MK550,000.00",
    certificate: "MK52,500.00",
    union: "MK6,500.00",
    idCard: "MK8,500.00",
    indexing: "-",
  },
];

export default function Fees() {
  return (
    <div className="min-h-screen bg-gray-50 py-10 px-4 md:px-10 lg:px-20">
      <h1 className="text-3xl md:text-4xl font-bold text-darkText mb-6 text-center">
        Tuition & Fees
      </h1>

      <div className="overflow-x-auto shadow-lg rounded-lg">
        <table className="min-w-full text-left table-auto border-collapse">
          <thead className="bg-primary text-white">
            <tr>
              <th className="px-4 py-3">Program</th>
              <th className="px-4 py-3">Tuition Fee / Semester</th>
              <th className="px-4 py-3">Certificate Verification (Once Off)</th>
              <th className="px-4 py-3">Student Union Fee (Annually)</th>
              <th className="px-4 py-3">Student ID Card (Once Off)</th>
              <th className="px-4 py-3">Indexing (Once Off)</th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {feesData.map((item, index) => (
              <tr key={index} className="hover:bg-gray-100 transition-colors">
                <td className="px-4 py-3 font-medium">{item.program}</td>
                <td className="px-4 py-3">{item.tuition}</td>
                <td className="px-4 py-3">{item.certificate}</td>
                <td className="px-4 py-3">{item.union}</td>
                <td className="px-4 py-3">{item.idCard}</td>
                <td className="px-4 py-3">{item.indexing}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="mt-8 bg-blue-50 border-l-4 border-primary p-4 rounded-lg">
        <p className="mb-2">
          <strong>Payment Instructions:</strong> Students are required to pay 50% of the tuition fees before or on the date of registration. The remaining balance can be paid in two installments.
        </p>
        <p>
          <strong>Accommodation:</strong> Student accommodation is optional. Students may choose between on-campus (Residential) or off-campus (Non-residential) housing according to their preference. Limited on-campus accommodation is available at <strong>MK30,000.00 per month</strong>, and booking in advance is required.
        </p>
      </div>
    </div>
  );
}