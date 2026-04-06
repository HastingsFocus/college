// src/pages/students/RequestTranscript.jsx
import React from "react";

function RequestTranscript() {
  return (
    <div className="p-6 md:p-10 space-y-8">

      {/* 🔥 PAGE HEADER */}
      <h2 className="text-3xl md:text-4xl font-bold text-primary mb-4">
        Request Transcript
      </h2>

      {/* 📝 INTRO PARAGRAPH */}
      <p className="text-gray-700 leading-relaxed">
        This page provides information on how students can request their academic transcripts. Details about the process, required documents, and fees will be provided here.
      </p>

      {/* STEP-BY-STEP PROCESS */}
      <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-accent">
        <h3 className="text-2xl font-semibold mb-3">How to Request a Transcript</h3>
        <ol className="list-decimal pl-6 text-gray-700 leading-relaxed space-y-2">
          <li>Fill out the transcript request form (online or at the administration office).</li>
          <li>Provide any necessary supporting documents such as ID or proof of enrollment.</li>
          <li>Pay the required transcript processing fee, if applicable.</li>
          <li>Submit your request and note the expected processing time.</li>
          <li>Collect your transcript from the office or receive it via mail/email as instructed.</li>
        </ol>
      </div>

      {/* CONTACT INFO */}
      <div className="bg-gray-50 p-6 rounded-xl border-l-4 border-accent">
        <h3 className="text-2xl font-semibold mb-3">Need Help?</h3>
        <p className="text-gray-700 leading-relaxed">
          For any questions regarding transcript requests, please contact the Student Services or Academic Office. We are here to assist you and ensure your request is processed smoothly.
        </p>
      </div>

    </div>
  );
}

export default RequestTranscript;