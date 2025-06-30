'use client'
import React from 'react'
import { motion } from 'framer-motion'
import { Calendar } from 'lucide-react';


const experienceList = [
  {
    title: 'Intern, Event Management & Graphic Design – Dawat Pakistan',
    description: "Launched Dawat's very own corporate retreat program.",
    date: 'July 2023 – Aug 2023',
  },
  {
    title: 'Online Tutor – Freelance',
    description:
      'Prepare students for O/A Levels exams for Maths, Physics and Chemistry.',
    date: 'Jan 2024 – Present',
  },
  {
    title: 'Script-Writer – Freelance',
    description:
      'Craft engaging scripts for YouTube videos, focusing on sports content.',
    date: 'June 2025 – Present',
  },
]

export default function Experience() {
  return (
    <section id="experience" className="py-32 bg-gray-100">
      <div className="max-w-3xl mx-auto px-4">
        <motion.h2
          className="text-4xl font-extrabold text-center text-accent drop-shadow-lg mb-10"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Experience
        </motion.h2>
        <ul className="space-y-12">
          {experienceList.map((item, index) => (
            <motion.li
              key={index}
              initial={{ opacity: 0, x: -40 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              viewport={{ once: true }}
              className="bg-white p-6 rounded-xl shadow-md hover:shadow-xl transition-shadow"
            >
              <h3 className="text-xl font-bold text-gray-700">{item.title}</h3>
              <p className="text-gray-700 mb-1">{item.description}</p>
              <div className="flex items-center space-x-2 text-sm text-gray-500">
                <Calendar size={16} />
                <span>{item.date}</span>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </section>
  )
}
