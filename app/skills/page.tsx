// app/skills/page.tsx
"use client";

import React from "react";

const skills = {
  Languages: ["Java", "C++", "JavaScript", "Python"],
  "Core Concepts": [
    "Data Structures & Algorithms",
    "Object-Oriented Programming",
    "Competitive Programming",
  ],
  "Web Development": ["Next.js", "MERN Stack", "Django"],
  "Front-End": ["React.js", "HTML", "CSS", "Bootstrap", "Tailwind CSS"],
  "Back-End": ["Node.js", "Express.js", "RESTful APIs", "Django"],
  "Database Management": ["MongoDB", "MySQL"],
  "Tools & Platforms": ["Git", "GitHub", "Render", "Postman"],
  "Other Skills": ["Exception Handling", "Debugging", "File Handling"],
};

export default function SkillsPage() {
  return (
    <div className="min-h-screen p-6 md:p-12 max-w-5xl mx-auto">
      <h1 className="text-3xl md:text-4xl font-bold text-center mb-10 text-blue-700 dark:text-blue-400">
        My Skills & Tech Stack
      </h1>

      <div className="space-y-8">
        {Object.entries(skills).map(([category, items]) => (
          <div key={category}>
            <h2 className="text-xl font-semibold mb-2 text-gray-800 dark:text-white">
              {category}
            </h2>
            <div className="flex flex-wrap gap-3">
              {items.map((skill) => (
                <span
                  key={skill}
                  className="px-4 py-1 bg-blue-100 dark:bg-blue-800 text-blue-800 dark:text-white rounded-full text-sm font-medium transition hover:scale-105"
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
