'use client';

import Link from "next/link";
import { ModeToggle } from "./modeToggler";
import { useState } from "react";
import { Menu, X } from "lucide-react"; // for hamburger icon

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="border-b-1 backdrop-blur-md sticky top-0 z-50 bg-background py-4 shadow-md">
      <div className="flex justify-between items-center px-4 mx-auto">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-900 dark:text-white">
          <Link href="/">Kshitij Singh</Link>
        </div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex space-x-6 font-bold text-gray-600 dark:text-white">
          <li className="hover:text-blue-500 transition-colors">
            <Link href="/projects">Projects</Link>
          </li>
          <li className="hover:text-blue-500 transition-colors">
            <Link href="/skills">Skills</Link>
          </li>
          <li className="hover:text-blue-500 transition-colors">
            <Link href="/">Home</Link>
          </li>
          <li className="hover:text-blue-500 transition-colors">
            <Link href="/about">About</Link>
          </li>
          <li className="hover:text-blue-500 transition-colors">
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <ModeToggle />
          </li>
        </ul>

        {/* Hamburger icon for mobile */}
        <div className="md:hidden flex items-center space-x-4">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-gray-700 dark:text-white"
          >
            {menuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <div className="md:hidden mt-2 px-4 space-y-2 text-gray-700 dark:text-white font-semibold">
          <Link href="/projects" className="block hover:text-blue-500" onClick={() => setMenuOpen(false)}>Projects</Link>
          <Link href="/skills" className="block hover:text-blue-500" onClick={() => setMenuOpen(false)}>Skills</Link>
          <Link href="/" className="block hover:text-blue-500" onClick={() => setMenuOpen(false)}>Home</Link>
          <Link href="/about" className="block hover:text-blue-500" onClick={() => setMenuOpen(false)}>About</Link>
          <Link href="/contact" className="block hover:text-blue-500" onClick={() => setMenuOpen(false)}>Contact</Link>
          <ModeToggle />
        </div>
      )}
    </nav>
  );
}
