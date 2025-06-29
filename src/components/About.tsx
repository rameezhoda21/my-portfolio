// src/components/About.tsx
import React from "react";

export default function About() {
  return (
    <section id="about" className="py-32 bg-white">
      <div className="max-w-2xl mx-auto px-4 text-center">
        <h2 className="text-4xl font-extrabold text-center text-accent drop-shadow-lg mb-10">About Me</h2>
        <p className="text-lg text-gray-700 mb-6">
          An IBA student currently pursuing a Bachelor's degree in Computer Science. I have a passion for data analytics and web development. My journey in tech has been driven by a desire to create impactful solutions that enhance user experiences and streamline processes. I&apos;m also a football enthusiast, which fuels my competitive spirit and teamwork skills.
        </p>
        {/* ← New button row ↓ */}
        <div className="flex justify-center space-x-4">
          <a
            href="#contact"
            className="
    inline-block px-6 py-3 
    bg-primary text-white rounded 
    shadow-md transform transition 
    hover:scale-105 hover:shadow-xl
  "
          >
            Get in Touch
          </a>

        </div>
      </div>
    </section>
  );
}
