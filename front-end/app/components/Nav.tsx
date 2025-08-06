"use client";
import Link from "next/link";
import { useState } from "react";

export default function Nav() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <div>
      <nav className="bg-[#353683] h-[50px] md:flex md:justify-center relative px-4">
        {/* Hamburger Button */}
        <button
          className="md:hidden text-white absolute top-[20%] right-4 text-2xl"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          {menuOpen ? (
            <span className="text-xl">&times;</span>
          ) : (
            <span className="text-xl">&#9776;</span>
          )}
        </button>

        {/* Menu Items */}
        <ul
          className={`absolute top-[50px] right-0 h-auto w-[50%] bg-[#a44a77] text-white z-40 flex flex-col space-y-4 p-4 transition-all duration-300 ease-in-out
    ${menuOpen ? "block" : "hidden"}
    md:h-auto md:w-auto md:flex md:flex-row md:static md:bg-transparent md:space-y-0 md:space-x-7 md:items-center md:justify-center md:font-light md:text-white`}
        >
          <li className="text-xl font-bold cursor-pointer hover:text-[#008000]">
          <Link  href="/" onClick={() =>setMenuOpen(!menuOpen) }> হোম</Link>
            
          </li>
          <li className="text-xl font-bold cursor-pointer hover:text-[#008000]">
            আমাদের সম্পর্কে
          </li>
          <li className="text-xl font-bold cursor-pointer hover:text-[#008000]">
            <Link href="/student" onClick={() =>setMenuOpen(!menuOpen) }>শিক্ষার্থী</Link>
            
          </li>
          <li className="text-xl font-bold cursor-pointer hover:text-[#008000]">
          <Link href="/teacher" > শিক্ষক</Link>
           
          </li>
          <li className="text-xl font-bold cursor-pointer hover:text-[#008000]">
            কমিটি
          </li>

          {/* Gallery with submenu */}
          <li className="relative text-xl font-bold cursor-pointer hover:text-[#008000] group">
            গ্যালারি
            <ul className="absolute left-0 top-full mt-2 bg-[#a44a77] text-white  shadow-lg opacity-1 group-hover:opacity-100 transition-opacity duration-300 w-40 z-50 flex flex-col space-y-2 p-2">
              <li className="cursor-pointer hover:text-[#008000] px-1 py-1 rounded">
                ছবি
              </li>
              <li className="cursor-pointer hover:text-[#008000] px-1 py-1 rounded">
                ভিডিও
              </li>
            </ul>
          </li>

          <li className="text-xl font-bold cursor-pointer hover:text-[#008000]">
            অর্জন
          </li>
          <li className="text-xl font-bold cursor-pointer hover:text-[#008000]">
            ফলাফল
          </li>
          <li className="text-xl font-bold cursor-pointer hover:text-[#008000]">
            জিজ্ঞাসা ও উত্তর
          </li>
          <li className="text-xl font-bold cursor-pointer hover:text-[#008000]">
            যোগাযোগ
          </li>
        </ul>
      </nav>
    </div>
  );
}
