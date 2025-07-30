"use client";
import { useState } from "react";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <nav className="bg-[#353683] h-[50px] md:flex md:justify-center  relative px-4">
        {/* Hamburger Button */}
        <button
          className="md:hidden text-white absolute top-[20%]  text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          {menuOpen ? (
            <span className="text-xl">&times;</span>
          ) : (
            <span className="text-xl">&#9776;</span>
          )}
        </button>

        {/* Menu Items */}
        <ul
          className={`absolute top-[50px] left-0 h-[100vh] w-[50%] bg-[#a44a77] text-white z-40 flex flex-col space-y-4 p-4 transition-all duration-300 ease-in-out
            ${menuOpen ? "block" : "hidden"}
            md:h-auto md:w-auto md:flex md:flex-row md:static md:bg-transparent md:space-y-0 md:space-x-7 md:items-center md:justify-center md:font-light md:text-white`}
        >
          <li>Home</li>
          <li>About Us</li>
          <li>Students</li>
          <li>Teachers</li>
          <li>Staff</li>
          <li>Committee</li>
          <li>Gallery</li>
          <li>Contact</li>
        </ul>
      </nav>
    </div>
  );
}
