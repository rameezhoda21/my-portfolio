// src/components/Projects.tsx
'use client';

import React from 'react';
import { ExternalLink } from 'lucide-react';

// Project type
interface Project {
  title: string;
  description: string;
  url: string;
}

// Your project data
const projects: Project[] = [
  {
    title: 'Kalman Filter',
    description:
      'Kalman Filter implemented using RISC-V vector ISA (RV32I). Simulated on VEER.',
    url: 'https://github.com/RamisKamlani/Group-CAALMAN-FILTER',
  },
  {
    title: 'Fake News Detector',
    description:
      'A terminal-based tool that classifies news headlines or articles as REAL or FAKE using TF-IDF and a tuned Naive Bayes model.',
    url: 'https://github.com/rameezhoda21/Fake-News-Detector',
  },
  {
    title: 'TicTacToe',
    description:
      'A simple TicTacToe game implemented using HTML, CSS, and JavaScript. Play against your friend.',
    url: 'https://github.com/rameezhoda21/tictactoe'
  }
];

export default function Projects() {
  return (
    <section id="projects" className="py-32 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        {/* Section Heading */}
        <h2 className="text-4xl font-extrabold text-center drop-shadow-lg mb-5 text-white">
          Featured <span className="text-4xl font-extrabold text-center text-accent drop-shadow-lg mb-20">Projects</span>
        </h2>
        <p className="text-center text-gray-300 mb-12">
          Here are some of my recent projects.
        </p>

        {/* Project Grid */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {projects.map((proj) => (
            <div
              key={proj.title}
              className="bg-gray-800 text-white rounded-lg overflow-hidden shadow-lg transform hover:-translate-y-2 hover:shadow-2xl transition"
            >
              <div className="p-6">
                <h3 className="text-2xl font-semibold mb-2">{proj.title}</h3>
                <p className="text-gray-400 mb-4">{proj.description}</p>
                <a
                  href={proj.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gray-300 hover:text-white"
                >
                  <ExternalLink size={20} />
                </a>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
