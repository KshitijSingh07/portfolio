// components/Hero.tsx
'use client';

import Link from 'next/link';
import Description from './Description';
import SkillsSection from './SkillsSection';

export default function Hero() {
  return (
    <div className="min-h-screen bg-background text-foreground px-4 py-12 md:px-12">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
        {/* Left Section - Intro and Links */}
        <div className="text-center md:text-left space-y-6">
          <h1 className="text-4xl md:text-6xl font-bold">
            Hi, I'm <span className="text-blue-500">Kshitij Singh</span>
          </h1>
          <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-xl mx-auto md:mx-0">
            I'm a passionate Software Engineer and Full Stack Developer with expertise in building scalable web applications using Next.js and the MERN stack. I’m proficient in Java, C++, and JavaScript, and well-versed in Data Structures, Algorithms, and Backend Systems.
          </p>

          <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
            <Link
              href="/projects"
              className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition"
            >
              View Projects
            </Link>

            <Link
              href="/skills"
              className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-xl transition"
            >
              Skills
            </Link>
          </div>
        </div>

        {/* Right Section - Description */}
        <Description />
      </div>
        <SkillsSection/>
    </div>
  );
}
