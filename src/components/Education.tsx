'use client';

import React from 'react';
import { GraduationCap } from 'lucide-react';
import { motion } from 'framer-motion';

const educationData = [
  {
    degree: 'Bachelors in Computer Science',
    institution: 'Institute of Business Administration (IBA), Karachi',
    duration: '2023 – 2027 (Expected)',
    grades: ['CGPA: 3.1 (Current)'],
    achievements: [
      '🏆 2nd position – ITC Game Design Tournament',
      '🏅 Named Best Defender – IBA Sports Fest',
      '⚽ Led CS Football Team to First Ever Olympiad',
    ],
  },
  {
    degree: 'A Levels',
    institution: 'Lyceum School',
    duration: '2021 – 2023',
    grades: ['Math A', 'Physics A', 'Chemistry A'],
    achievements: [
      '⚽ Captain – Football Team',
      '🏛 House Captain – Corinthe',
      '🥇 Sportsman of the Year Award'
    ],
  },
  {
    degree: 'O Levels',
    institution: 'City School',
    duration: '2018 – 2021',
    grades: [
      'Math A*', 'Physics A*', 'Chemistry A*', 'Biology A*',
      'English A*', 'Pak Studies A*', 'Islamiyat A*', 'Urdu A',
    ],
    achievements: [
      '🌟 High Achiever Award',
      '⚽ Captain – Football Team',
      '💛 Yellow House Captain',
      '🏆 Outstanding Player Award',
    ],
  },
];


export default function Education() {
  return (
    <section id="education" className="py-32 bg-gradient-to-b from-accent/5 via-transparent to-accent/10">
      <div className="max-w-6xl mx-auto px-6">
        <motion.h2
          className="text-4xl font-extrabold text-center text-accent drop-shadow-lg mb-20"
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          Education
        </motion.h2>

        <div className="grid md:grid-cols-2 gap-12">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              className="backdrop-blur-lg bg-white/60 border border-white/30 p-6 rounded-3xl shadow-xl hover:shadow-2xl transition-all duration-300"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
            >
              <div className="flex items-center space-x-3 mb-4 text-primary">
                <GraduationCap size={24} />
                <h3 className="text-2xl font-bold">{edu.degree}</h3>
              </div>
              <p className="text-lg font-medium text-gray-800">{edu.institution}</p>
              <p className="text-sm text-gray-500 italic">{edu.duration}</p>

              {/* Grades as pills */}
              {edu.grades && (
                <div className="flex flex-wrap gap-2 mt-4">
                  {edu.grades.map((grade, i) => (
                    <span
                      key={i}
                      className="bg-primary text-white text-xs font-semibold px-3 py-1 rounded-full"
                    >
                      {grade}
                    </span>
                  ))}
                </div>
              )}

              {/* Achievements as icon list */}
              {edu.achievements && (
                <div className="mt-6">
                  <h4 className="text-lg font-semibold text-gray-700 mb-2 underline underline-offset-4 decoration-accent">
                    Highlights
                  </h4>
                  <ul className="space-y-1 text-gray-700 leading-relaxed">
                    {edu.achievements.map((ach, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="text-lg">{ach}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
// This code defines a React component that displays educational background information in a visually appealing way.
// It uses the `motion` component from `framer-motion` for animations and the `GraduationCap` icon from `lucide-react` for visual representation.
// The `educationData` array contains structured information about degrees, institutions, durations, grades, and achievements.
// The component maps over this data to create a grid of cards, each representing an educational entry