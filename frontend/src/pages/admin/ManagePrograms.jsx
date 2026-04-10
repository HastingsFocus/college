import { useState } from "react";
import API from "../../services/api";

function ManageProgram() {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/programs", { name, description });
      alert("Program added!");
      setName("");
      setDescription("");
    } catch (err) {
      console.error(err);
      alert("Error adding program");
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Add Program</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="w-full p-2 border rounded"
          placeholder="Program Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <textarea
          className="w-full p-2 border rounded"
          placeholder="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />

        <button className="bg-purple-500 text-white px-4 py-2 rounded">
          Manage Program
        </button>
      </form>
    </div>
  );
}

export default ManageProgram;