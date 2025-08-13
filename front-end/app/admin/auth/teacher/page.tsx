"use client";
import { useState } from "react";

export default function TeachersPage() {
  const [teachers, setTeachers] = useState([]);
  const [form, setForm] = useState({
    email: "",
    phone: "",
    designation: "",
    avatar: null, // store as file or preview URL
  });

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      setForm({ ...form, avatar: URL.createObjectURL(file) });
    }
  };

  const addTeacher = () => {
    if (!form.email || !form.phone || !form.designation) return;
    setTeachers([...teachers, { ...form, id: Date.now() }]);
    setForm({
      email: "",
      phone: "",
      designation: "",
      avatar: null,
    });
  };

  const deleteTeacher = (id) => {
    setTeachers(teachers.filter((t) => t.id !== id));
  };

  return (
    <div className="flex flex-col items-center justify-center">
      <h1 className="text-2xl font-bold mb-4">Add Teacher</h1>
      <div className="grid gap-3 mb-6 max-w-md">
        <input
          name="email"
          value={form.email}
          onChange={handleChange}
          placeholder="Email"
          className="border p-2"
        />
        <input
          name="phone"
          value={form.phone}
          onChange={handleChange}
          placeholder="Phone"
          className="border p-2"
        />
        <input
          name="designation"
          value={form.designation}
          onChange={handleChange}
          placeholder="Designation"
          className="border p-2"
        />
        <input
          type="file"
          accept="image/*"
          onChange={handleAvatarChange}
          className="border p-2"
        />
        <button
          onClick={addTeacher}
          className="bg-green-500 text-white py-2 rounded"
        >
          Save
        </button>
      </div>

      <h2 className="text-xl font-bold mb-2">Teacher List</h2>
      <div className="grid gap-4">
        {teachers.map((t) => (
          <div
            key={t.id}
            className="border p-4 flex items-center gap-4 justify-between"
          >
            <div className="flex items-center gap-4">
              {t.avatar ? (
                <img
                  src={t.avatar}
                  alt="avatar"
                  className="w-12 h-12 rounded-full object-cover"
                />
              ) : (
                <div className="w-12 h-12 rounded-full bg-gray-300"></div>
              )}
              <div>
                <p>Email: {t.email}</p>
                <p>Phone: {t.phone}</p>
                <p>Designation: {t.designation}</p>
              </div>
            </div>
            <button
              onClick={() => deleteTeacher(t.id)}
              className="bg-red-500 text-white px-3 py-1 rounded"
            >
              Delete
            </button>
          </div>
        ))}
      </div>
    </div>
  );
}
