// src/components/Navbar.tsx
import React from "react";

export default function Navbar() {
  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-sm p-4 z-50 overflow-x-auto">
      <ul className="flex justify-center items-center gap-12 list-none m-0 p-0 whitespace-nowrap">
        {['Home', 'About', 'Projects', 'Contact'].map((label) => (
          <li key={label}>
            <a
              href={`#${label.toLowerCase()}`}
              className="px-3 text-gray-800 hover:text-primary transition duration-200"
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
