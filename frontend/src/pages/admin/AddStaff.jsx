import { useState } from "react";
import API from "../../services/api";

function AddStaff() {
  const [name, setName] = useState("");
  const [position, setPosition] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await API.post("/staff", { name, position });
      alert("Staff added!");
      setName("");
      setPosition("");
    } catch (err) {
      console.error(err);
      alert("Error adding staff");
    }
  };

  return (
    <div>
      <h2 className="text-2xl font-bold mb-4">Add Staff</h2>

      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          className="w-full p-2 border rounded"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />

        <input
          className="w-full p-2 border rounded"
          placeholder="Position"
          value={position}
          onChange={(e) => setPosition(e.target.value)}
        />

        <button className="bg-green-500 text-white px-4 py-2 rounded">
          Add Staff
        </button>
      </form>
    </div>
  );
}

export default AddStaff;