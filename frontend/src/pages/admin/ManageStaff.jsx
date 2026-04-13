// src/pages/admin/ManageStaff.jsx
import { useEffect, useState } from "react";
import API from "../../services/api";
import { toast } from "react-hot-toast";

function ManageStaff() {
  const [staffList, setStaffList] = useState([]);
  const [form, setForm] = useState({
    name: "",
    department: "",
    position: "",
    email: "",
    educationBackground: "",
  });
  const [file, setFile] = useState(null); // for image upload
  const [editingId, setEditingId] = useState(null); // track editing staff

  const BASE_URL = "https://college-glmq.onrender.com";

  // 🔥 FETCH STAFF
  const fetchStaff = async () => {
    try {
      const res = await API.get("/staff");
      setStaffList(res.data);
    } catch (err) {
      console.error("Failed to fetch staff:", err);
    }
  };

  useEffect(() => {
    fetchStaff();
  }, []);

  // 🔥 HANDLE INPUT CHANGE
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // 🔥 HANDLE FILE CHANGE
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  // 🔥 ADD OR UPDATE STAFF
  const handleSubmit = async (e) => {
    e.preventDefault();

    const formData = new FormData();
    Object.keys(form).forEach((key) => formData.append(key, form[key]));
    if (file) formData.append("image", file);

    try {
      if (editingId) {
        await API.put(`/staff/${editingId}`, formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        toast.success("Staff updated successfully!");
      } else {
        await API.post("/staff", formData, {
          headers: { "Content-Type": "multipart/form-data" },
        });
        toast.success("Staff added successfully!");
      }
      setForm({
        name: "",
        department: "",
        position: "",
        email: "",
        educationBackground: "",
      });
      setFile(null);
      setEditingId(null);
      fetchStaff();
    } catch (err) {
      console.error(err);
      toast.error("Failed to save staff.");
    }
  };

  // 🔥 EDIT STAFF
  const handleEdit = (staff) => {
    setEditingId(staff._id);
    setForm({
      name: staff.name,
      department: staff.department,
      position: staff.position,
      email: staff.email,
      educationBackground: staff.educationBackground,
    });
  };

  // 🔥 DELETE STAFF
  const handleDelete = async (id) => {
    if (!window.confirm("Are you sure you want to delete this staff?")) return;

    try {
      await API.delete(`/staff/${id}`);
      toast.success("Staff deleted!");
      fetchStaff();
    } catch (err) {
      console.error(err);
      toast.error("Failed to delete staff.");
    }
  };

  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Manage Staff</h1>

      {/* 🔥 ADD / EDIT FORM */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded-xl shadow-md mb-10"
      >
        <h2 className="text-xl font-bold mb-4">
          {editingId ? "Edit Staff" : "Add New Staff"}
        </h2>

        <div className="grid md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
            className="border p-2 rounded"
            required
          />
          <input
            type="text"
            name="department"
            placeholder="Department"
            value={form.department}
            onChange={handleChange}
            className="border p-2 rounded"
            required
          />
          <input
            type="text"
            name="position"
            placeholder="Position"
            value={form.position}
            onChange={handleChange}
            className="border p-2 rounded"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            className="border p-2 rounded"
            required
          />
          <input
            type="text"
            name="educationBackground"
            placeholder="Education Background"
            value={form.educationBackground}
            onChange={handleChange}
            className="border p-2 rounded col-span-2"
            required
          />
          <input
            type="file"
            onChange={handleFileChange}
            className="col-span-2"
            accept="image/*"
          />
        </div>

        <button
          type="submit"
          className="mt-4 bg-primary text-white px-6 py-2 rounded hover:bg-blue-600 transition"
        >
          {editingId ? "Update Staff" : "Add Staff"}
        </button>
      </form>

      {/* 🔥 STAFF TABLE */}
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white rounded-xl shadow-md">
          <thead>
            <tr className="bg-gray-200 text-left">
              <th className="py-2 px-4">Name</th>
              <th className="py-2 px-4">Department</th>
              <th className="py-2 px-4">Position</th>
              <th className="py-2 px-4">Email</th>
              <th className="py-2 px-4">Education</th>
              <th className="py-2 px-4">Image</th>
              <th className="py-2 px-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {staffList.map((staff) => (
              <tr key={staff._id} className="border-b hover:bg-gray-50">
                <td className="py-2 px-4">{staff.name}</td>
                <td className="py-2 px-4">{staff.department}</td>
                <td className="py-2 px-4">{staff.position}</td>
                <td className="py-2 px-4">{staff.email}</td>
                <td className="py-2 px-4">{staff.educationBackground}</td>
                <td className="py-2 px-4">
                  {staff.image && (
                    <img
                      src={`${BASE_URL}${staff.image}`}
                      alt={staff.name}
                      className="w-16 h-16 object-cover rounded"
                    />
                  )}
                </td>
                <td className="py-2 px-4 space-x-2">
                  <button
                    onClick={() => handleEdit(staff)}
                    className="bg-yellow-400 text-white px-3 py-1 rounded hover:bg-yellow-500 transition"
                  >
                    Edit
                  </button>
                  <button
                    onClick={() => handleDelete(staff._id)}
                    className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 transition"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default ManageStaff;