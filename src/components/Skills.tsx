// src/components/Skills.tsx
'use client';

import React, { useState } from 'react';

// Define skill categories and data
type Skill = {
  name: string;
  level: number; // percentage
  category: 'Languages' | 'Tools' | 'Hard Skills' | 'Soft Skills';
};

const skills: Skill[] = [
  { name: 'C/C++', level: 95, category: 'Languages' },
  { name: 'Python', level: 80, category: 'Languages' },
  { name: 'HTML/CSS', level: 90, category: 'Languages' },
  { name: 'JavaScript', level: 80, category: 'Languages' },
  { name: 'Script-writing', level: 85, category: 'Hard Skills' },
  { name: 'Teaching', level: 95, category: 'Hard Skills' },
  { name: 'VSCode', level: 90, category: 'Tools' },
  { name: 'Jupyter Notebook', level: 90, category: 'Tools' },
  { name: 'Canva', level: 85, category: 'Tools' },
  { name: 'GitHub', level: 90, category: 'Tools' },
  { name: 'EDA Playground', level: 85, category: 'Tools' },
  { name: 'Leadership', level: 95, category: 'Soft Skills' },
  { name: 'Communication', level: 90, category: 'Soft Skills' },
  { name: 'Teamwork', level: 90, category: 'Soft Skills' },
  { name: 'Problem Solving', level: 90, category: 'Soft Skills' },
];

const categories = ['All', 'Languages', 'Tools', 'Hard Skills', 'Soft Skills'] as const;

enum Category {
  All = 'All',
  Language = 'Languages',
  Tool = 'Tools',
  SoftSkill = 'Soft Skills',
  HardSkill = 'Hard Skills',
}

export default function Skills() {
  const [selected, setSelected] = useState<Category>(Category.All);

  const filtered =
    selected === Category.All
      ? skills
      : skills.filter((s) => s.category === selected);

  return (
    <section id="skills" className="py-32 bg-gray-900">
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl font-extrabold text-center drop-shadow-lg mb-10 text-white">
          My <span className="text-4xl font-extrabold text-center text-accent drop-shadow-lg mb-20">Skills</span>
        </h2>

        {/* Category Filters */}
        <div className="flex justify-center space-x-4 mb-12">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelected(cat as Category)}
              className={`px-4 py-2 rounded-full transition \$
                {selected === cat ? 'bg-accent text-white' : 'bg-gray-800 text-gray-300 hover:bg-gray-700'}`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Skills Grid */}
        <div className="grid gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {filtered.map((skill) => (
            <div
              key={skill.name}
              className="bg-gray-800 rounded-lg p-6 shadow-md transform transition-transform duration-400 hover:scale-[1.02] hover:shadow-md
"
            >
              <h3 className="text-xl font-semibold text-white mb-4">
                {skill.name}
              </h3>
              <div className="w-full bg-gray-700 rounded-full h-3 mb-2">
                <div
                  className="bg-accent h-3 rounded-full"
                  style={{ width: `${skill.level}%` }}
                />
              </div>
              <span className="text-gray-300 text-sm">
                {skill.level}%
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
