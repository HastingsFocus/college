import { useState } from "react";
import API from "../../services/api";

function AddNews() {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/news", { title, content });
      alert("News posted!");
      setTitle("");
      setContent("");
    } catch (err) {
      console.error(err);
      alert("Error posting news");
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Add News</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="w-full p-2 border rounded"
          placeholder="Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />

        <textarea
          className="w-full p-2 border rounded"
          placeholder="Content"
          value={content}
          onChange={(e) => setContent(e.target.value)}
        />

        <button className="bg-blue-500 text-white px-4 py-2 rounded">
          Post News
        </button>
      </form>
    </div>
  );
}

export default AddNews;