"use client";

import { useState } from "react";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="bg-white text-black p-4 shadow-md fixed w-full top-0 z-50">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo / Title */}
        <h1 className="text-lg font-bold">Class of 2023 Civil Engineering Memorial</h1>
        
        {/* Mobile Menu Button */}
        <button className="md:hidden" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>

        {/* Navigation Links */}
        <nav className={`md:flex absolute md:static bg-white w-full md:w-auto transition-all duration-300 ease-in-out ${isOpen ? "top-16 left-0 p-4 shadow-lg block" : "hidden md:block"}`}>
          <ul className="flex flex-col md:flex-row md:space-x-6 space-y-4 md:space-y-0 items-center">
            <li><Link href="/" className="hover:underline" onClick={() => setIsOpen(false)}>Home</Link></li>
            <li><Link href="/memories" className="hover:underline" onClick={() => setIsOpen(false)}>Memories</Link></li>
            <li><Link href="/classmates" className="hover:underline" onClick={() => setIsOpen(false)}>Classmates</Link></li>
            <li><Link href="/contact" className="hover:underline" onClick={() => setIsOpen(false)}>Contact</Link></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
