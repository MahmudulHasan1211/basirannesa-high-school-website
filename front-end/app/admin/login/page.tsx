"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import axios from "axios";

export default function TeacherLogin() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

   const router = useRouter();

  useEffect(()=>{
    const cheackLogin= async ()=>{
     
      try {
        const response= await axios.get(`http://localhost:5000/login/me`,{
          withCredentials: true,
        })
        if(response.status==200)
        {
          router.push('/admin/auth/home');
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

  // Correct event type for form submission
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Teacher Email:", email);
    console.log("Password:", password);
    try {
      const response= await axios.post(`http://localhost:5000/login`, {email,password}, {
        withCredentials: true,
      })
      console.log(response);
      router.push('/admin/auth/home');
    } catch (error) {
      console.log(error)
    }
    // TODO: Send data to your API route in /api/teacher/login
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="w-full max-w-md bg-white rounded-lg shadow-lg p-6">
        <h2 className="text-2xl font-bold text-center mb-6">Admin Login</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Email */}
          <div>
            <label className="block text-sm font-medium mb-1">Email</label>
            <input
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Password */}
          <div>
            <label className="block text-sm font-medium mb-1">Password</label>
            <input
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="w-full border border-gray-300 rounded-lg p-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
              required
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="w-full bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}
