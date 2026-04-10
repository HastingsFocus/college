// src/pages/about/Staff.jsx
import { useEffect, useState } from "react";
import API from "../../services/api";

function Staff() {
  const [staffList, setStaffList] = useState([]);
  const BASE_URL = "http://localhost:5000";

  useEffect(() => {
    const fetchStaff = async () => {
      try {
        const res = await API.get("/staff");
        setStaffList(res.data);
      } catch (err) {
        console.error("Failed to fetch staff:", err);
      }
    };
    fetchStaff();
  }, []);

  return (
    <div>
      <h2 className="text-3xl font-bold mb-6 text-center">Our Staff</h2>
      <p className="text-gray-700 mb-10 text-center max-w-3xl mx-auto">
        Our faculty consists of highly experienced healthcare professionals...
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {staffList.map((staff) => (
          <div
            key={staff._id}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-2xl transition transform hover:-translate-y-2"
          >
            {staff.image && (
              <img
                src={`${BASE_URL}${staff.image}`}
                alt={staff.name}
                className="w-full h-56 object-cover"
              />
            )}
            <div className="p-6">
  <p className="text-lg font-bold mb-1">
    <span className="font-semibold">Name:</span> {staff.name}
  </p>

  <p className="text-gray-700 mb-1">
    <span className="font-semibold">Position:</span> {staff.position}
  </p>

  <p className="text-gray-700 mb-2">
    <span className="font-semibold">Department:</span> {staff.department}
  </p>

  <p className="text-gray-700 mb-2">
    <span className="font-semibold">Education:</span> {staff.educationBackground}
  </p>

  <p className="text-blue-600 font-medium">
    <span className="font-semibold">Email:</span> {staff.email}
  </p>
</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Staff;