"use client";
import { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import { useRouter } from "next/navigation";

interface TeacherForm {
  name: string;
  email: string;
  phone: string;
  designation: string;
  avatar: File | null;
}

interface Teacher {
  id: string; // mapped from backend _id
  name: string;
  email: string;
  phone: string;
  designation: string;
  avatar?: string; // URL from backend
  localAvatar?: string; // temporary preview for uploaded file
}

export default function TeachersPage() {
  const [teachers, setTeachers] = useState<Teacher[]>([]);
  const [form, setForm] = useState<TeacherForm>({
    name: "",
    email: "",
    phone: "",
    designation: "",
    avatar: null,
  });

  const router = useRouter();

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0] || null;
    setForm({ ...form, avatar: file });
  };

  const addTeacher = async () => {
    if (!form.name || !form.email || !form.phone || !form.designation) return;

    try {
      const formData = new FormData();
      formData.append("name", form.name);
      formData.append("email", form.email);
      formData.append("phone", form.phone);
      formData.append("designation", form.designation);
      if (form.avatar) formData.append("avatar", form.avatar);

      const response = await axios.post(
        "http://localhost:5000/newteacher",
        formData,
        {
          withCredentials: true,
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      // add new teacher to state
      setTeachers((prev) => [
        ...prev,
        {
          id: response.data._id,
          name: response.data.name,
          email: response.data.email,
          phone: response.data.phone,
          designation: response.data.designation,
          avatar: response.data.avatar,
        },
      ]);

      setForm({
        name: "",
        email: "",
        phone: "",
        designation: "",
        avatar: null,
      });
    } catch (error) {
      console.error("Error adding teacher:", error);
    }
  };

  useEffect(() => {
    const checkLogin = async () => {
      try {
        const response = await axios.get("http://localhost:5000/login/me", {
          withCredentials: true,
        });
        if (response.status !== 200) router.push("/admin/login");
      } catch {
        router.push("/admin/login");
      }
    };

    const fetchTeachers = async () => {
      try {
        const response = await axios.get("http://localhost:5000/newteacher", {
          withCredentials: true,
        });
        // map _id to id
        const teachersData = response.data.map((t: { _id: string; name: string; email: string; phone: string; designation: string; avatar?: string }) => ({
          id: t._id,
          name: t.name,
          email: t.email,
          phone: t.phone,
          designation: t.designation,
          avatar: t.avatar,
        }));
        setTeachers(teachersData);
      } catch (error) {
        console.error(error);
      }
    };

    checkLogin();
    fetchTeachers();
  }, [router]);

  async function handleDelete(id: string) {
    console.log(id)
    try {
      await axios.delete(`http://localhost:5000/newteacher/${id}`, {
        withCredentials: true,
      });
      // Remove from frontend state after successful deletion
      // setTeachers((prev) => prev.filter((t) => t.id !== id));
    } catch (error) {
      console.error("Error deleting teacher:", error);
    }
  }

  return (
    <div className="flex flex-col items-center justify-center p-4">
      <h1 className="text-2xl font-bold mb-4">Add Teacher</h1>
      <div className="grid gap-3 mb-6 max-w-md w-full">
        <input
          name="name"
          value={form.name}
          onChange={handleChange}
          placeholder="Name"
          className="border p-2"
        />
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
      <div className="grid gap-4 w-full max-w-lg">
        {teachers.map((t) => (
          <div
            key={t.id}
            className="border p-4 flex items-center gap-4 justify-between"
          >
            <div className="flex items-center gap-4">
              {t.avatar ? (
                <Image
                  src={t.avatar} // backend URL
                  alt="avatar"
                  width={48}
                  height={48}
                  className="rounded-full object-cover"
                />
              ) : (
                <div className="w-12 h-12 rounded-full bg-gray-300"></div>
              )}
              <div>
                <p>
                  <strong>Name:</strong> {t.name}
                </p>
                <p>
                  <strong>Email:</strong> {t.email}
                </p>
                <p>
                  <strong>Phone:</strong> {t.phone}
                </p>
                <p>
                  <strong>Designation:</strong> {t.designation}
                </p>
              </div>
            </div>
            <button
              onClick={() =>{
                setTeachers((prev) => prev.filter((x) => x.id !== t.id));
                handleDelete(t.id);
              }
              }
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
