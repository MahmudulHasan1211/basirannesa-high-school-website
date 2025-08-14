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
  avatar: string | null;
}

interface Teacher extends TeacherForm {
  id: number;
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
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleAvatarChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      setForm({ ...form, avatar: URL.createObjectURL(file) });
    }
  };

  const addTeacher = () => {
    if (!form.name || !form.email || !form.phone || !form.designation) return;
    setTeachers([...teachers, { ...form, id: Date.now() }]); 
    setForm({
      name: "",
      email: "",
      phone: "",
      designation: "",
      avatar: null,
    });
  };

  const deleteTeacher = (id: number) => {
    setTeachers(teachers.filter((t) => t.id !== id));
  };
  const router = useRouter();
   useEffect(()=>{
      const cheackLogin= async ()=>{
       
        try {
          const response= await axios.get(`http://localhost:5000/login/me`,{
            withCredentials: true,
          })
          if(response.status==200)
          {
            // router.push('/admin/auth/teacher');
            console.log("auto login")
          }
          else{
            router.push('/admin/login');
          }
        } catch (error) {
          router.push('/admin/login');
        }
      };
      cheackLogin();
    },[]);

  return (
    <div className="flex flex-col items-center justify-center">
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
                  src={t.avatar}
                  alt="avatar"
                  width={48}
                  height={48}
                  className="rounded-full object-cover"
                />
              ) : (
                <div className="w-12 h-12 rounded-full bg-gray-300"></div>
              )}
              <div>
                <p><strong>Name:</strong> {t.name}</p>
                <p><strong>Email:</strong> {t.email}</p>
                <p><strong>Phone:</strong> {t.phone}</p>
                <p><strong>Designation:</strong> {t.designation}</p>
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
