"use client"; // Only if using App Router

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

export default function AdminPage() {
  const [menuOpen, setMenuOpen] = useState(false);
  const pathname = usePathname();

  const navLinks = [
    { name: "Teacher Info", path: "/admin/auth/teacher" },
    { name: "Student", path: "/admin/auth/student" },
    { name: "About", path: "/admin/auth/about" },
  ];

  return (
    <div className="">
      {/* Navbar */}
      <nav className="bg-blue-600 text-white shadow-lg sticky top-0 z-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <div className="text-xl font-bold">Admin Panel</div>

            {/* Desktop Menu */}
            <div className="hidden md:flex space-x-6">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  href={link.path}
                  className={`px-3 py-2 rounded-md font-medium transition ${
                    pathname === link.path
                      ? "bg-blue-800"
                      : "hover:bg-blue-700"
                  }`}
                >
                  {link.name}
                </Link>
              ))}
            </div>

            {/* Mobile Menu Button */}
            <div className="md:hidden">
              <button
                onClick={() => setMenuOpen(!menuOpen)}
                className="focus:outline-none"
              >
                ☰
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-blue-500 px-4 pb-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                href={link.path}
                className={`block px-3 py-2 rounded-md font-medium transition ${
                  pathname === link.path
                    ? "bg-blue-800"
                    : "hover:bg-blue-700"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                {link.name}
              </Link>
            ))}
          </div>
        )}
      </nav>

      {/* Main Content */}

    </div>
  );
}
