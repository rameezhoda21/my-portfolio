'use client';

import React, { useState } from 'react';
import { Mail, Phone, Linkedin } from 'lucide-react';
import { motion } from 'framer-motion';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', message: '' });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    window.location.href = `mailto:youremail@example.com?subject=Portfolio%20Inquiry&body=${encodeURIComponent(
      `Name: ${form.name}\nEmail: ${form.email}\n\n${form.message}`
    )}`;
  };

  return (
    <section id="contact" className="py-32 bg-black relative overflow-hidden text-white">
      <div className="max-w-5xl mx-auto px-4">
        <motion.h2
          className="text-4xl md:text-5xl font-bold text-center mb-6 text-white"
          initial={{ opacity: 0, y: -30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Contact Me
        </motion.h2>
        <p className="text-center text-gray-400 mb-16 text-lg">
          Let&apos;s connect — I&apos;m always open to new opportunities, ideas, or collaborations.
        </p>

        <div className="backdrop-blur-lg bg-white/5 border border-white/10 rounded-2xl p-8 shadow-xl md:flex md:space-x-10">
          {/* Contact Info */}
          <motion.div
            className="md:w-1/2 space-y-6"
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="text-2xl font-semibold mb-4 text-accent">Let's Talk</h3>
            <div className="flex items-center space-x-4 text-gray-300">
              <Phone size={20} className="text-accent" />
              <span>+92 3182293386</span>
            </div>
            <div className="flex items-center space-x-4 text-gray-300">
              <Mail size={20} className="text-accent" />
              <span>rameezhoda21@gmail.com</span>
            </div>
            <div className="flex items-center space-x-4 text-gray-300">
              <Linkedin size={20} className="text-accent" />
              <a
                href="https://linkedin.com/in/syed-rameez-ul-hoda-9a4794276"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white transition"
              >
                LinkedIn Profile
              </a>
            </div>
          </motion.div>

          {/* Form */}
          <motion.form
            onSubmit={handleSubmit}
            className="md:w-1/2 space-y-4 mt-10 md:mt-0"
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
          >
            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full bg-transparent border border-gray-700 text-white placeholder-gray-500 px-4 py-3 rounded-md focus:outline-none focus:border-accent transition-all duration-300"
            />
            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full bg-transparent border border-gray-700 text-white placeholder-gray-500 px-4 py-3 rounded-md focus:outline-none focus:border-accent transition-all duration-300"
            />
            <textarea
              name="message"
              rows={5}
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
              className="w-full bg-transparent border border-gray-700 text-white placeholder-gray-500 px-4 py-3 rounded-md focus:outline-none focus:border-accent transition-all duration-300"
            />
            <button
              type="submit"
              className="w-full bg-accent hover:bg-accent/80 text-black font-semibold px-4 py-3 rounded-md transition duration-300 shadow-lg"
            >
              Send Message
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
}
