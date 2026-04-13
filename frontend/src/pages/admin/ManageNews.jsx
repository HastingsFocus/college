import { useEffect, useState } from "react";
import API from "../../services/api";
import { toast } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function ManageNews() {
  const navigate = useNavigate();
  const [news, setNews] = useState([]);
  const [form, setForm] = useState({ title: "", content: "" });
  const [file, setFile] = useState(null);
  const [editingId, setEditingId] = useState(null);

  // Fetch news
  const fetchNews = async () => {
    try {
      const res = await API.get("/news");
      setNews(res.data);
    } catch (err) {
      console.error(err);
      toast.error("Failed to fetch news");
    }
  };

  useEffect(() => {
    fetchNews();
  }, []);

  // Input change
  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  // File change
  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  // Submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!form.title || !form.content) {
      toast.error("Title and Content are required!");
      return;
    }

    const formData = new FormData();
    formData.append("title", form.title);
    formData.append("content", form.content);
    if (file) formData.append("image", file);

    try {
      if (editingId) {
        await API.put(`/news/${editingId}`, formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        toast.success("News updated successfully");
      } else {
        await API.post("/news", formData, {
          headers: {
            "Content-Type": "multipart/form-data",
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        });
        toast.success("News added successfully");
      }

      setForm({ title: "", content: "" });
      setFile(null);
      setEditingId(null);
      fetchNews();
    } catch (err) {
      console.error(err);
      toast.error("Failed to save news");
    }
  };

  // Edit
  const handleEdit = (item) => {
    setForm({ title: item.title, content: item.content });
    setFile(null);
    setEditingId(item._id);
  };

  // Delete
  const handleDelete = async (id) => {
    if (!window.confirm("Delete this news?")) return;

    try {
      await API.delete(`/news/${id}`, {
        headers: {
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      });

      toast.success("Deleted successfully");
      fetchNews();
    } catch (err) {
      console.error("DELETE ERROR:", err.response?.data || err.message);
      toast.error("Failed to delete");
    }
  };

  return (
    <div className="p-6">
      {/* HEADER */}
      <h1 className="text-2xl font-bold text-primary mb-4">
        {editingId ? "Edit News" : "Add News"}
      </h1>

      {/* FORM */}
      <form
        onSubmit={handleSubmit}
        className="bg-white p-6 rounded shadow mb-8 space-y-4"
      >
        <input
          name="title"
          value={form.title}
          onChange={handleChange}
          placeholder="Title"
          className="w-full border p-2 rounded"
        />

        <textarea
          name="content"
          value={form.content}
          onChange={handleChange}
          placeholder="Content"
          className="w-full border p-2 rounded h-24"
        />

        <input
          type="file"
          onChange={handleFileChange}
          className="w-full border p-2 rounded"
        />

        <button
          type="submit"
          className="bg-primary text-white px-4 py-2 rounded hover:bg-blue-600 transition"
        >
          {editingId ? "Update News" : "Add News"}
        </button>
      </form>

      {/* NEWS LIST */}
      <h2 className="text-xl font-bold mb-4">All News</h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
        {news.map((item) => (
          <div
            key={item._id}
            className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition"
          >
            {/* IMAGE (CLOUDINARY FIX 🔥) */}
            {item.image && (
              <img
                src={item.image}   // ✅ DIRECT CLOUDINARY URL
                alt={item.title}
                className="w-full h-48 object-cover"
              />
            )}

            {/* CONTENT */}
            <div className="p-4">
              <h3 className="font-bold text-lg text-darkText">
                {item.title}
              </h3>

              <p className="text-gray-500 text-sm mt-1">
                {new Date(item.createdAt).toLocaleDateString()}
              </p>

              <p className="text-gray-600 mt-2 line-clamp-3">
                {item.content}
              </p>

              {/* BUTTONS */}
              <div className="flex justify-between mt-4">
                <button
                  className="bg-primary text-white px-3 py-1 rounded hover:bg-blue-600"
                  onClick={() => navigate(`/admin/news/${item._id}`)}
                >
                  See Details
                </button>

                <button
                  onClick={() => handleDelete(item._id)}
                  className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600"
                >
                  Delete
                </button>
              </div>

              {/* EDIT */}
              <button
                onClick={() => handleEdit(item)}
                className="mt-2 text-sm text-orange-500 hover:underline"
              >
                Edit
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default ManageNews;