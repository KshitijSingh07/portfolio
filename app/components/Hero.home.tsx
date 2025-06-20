"use client";

import React from "react";

// The original code used 'next/link' which is specific to Next.js.
// For a self-contained React component in this environment, we replace 'Link' with a standard '<a>' tag.
// The styling from the 'Link' component's className will be applied to the '<a>' tag.

// Importing Description and SkillsSection as local components.
// For self-contained code, we will define these components directly within this file,
// or inline their JSX if they are simple enough and not intended for re-use outside this context.

// Inlining the Description component's logic as provided in the 'description-component' immersive artifact.
function Description() {
    return (
        // Replicating Card component structure and styling from the original Description component
        <div className="shadow-xl border border-gray-200 dark:border-gray-700 rounded-2xl">
            {/* Replicating CardContent component structure and styling */}
            <div className="p-6 space-y-6">
                <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                    I&apos;m <strong>Kshitij Singh</strong>, a passionate <strong>Software Engineer and Full Stack Developer</strong> dedicated to building dynamic and efficient web applications. With a strong academic foundation in Computer Science &amp; Engineering from the Indian Institute of Information Technology (IIIT), Senapati, Manipur, I achieved a CGPA of 8.23 and consistently excelled in core subjects like C/C++ Programming.
                </p>

                <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                    My technical toolkit spans across modern technologies. I&apos;m proficient in Java, C++, JavaScript, and Python. I specialize in web development using Next.js and the MERN Stack (MongoDB, Express.js, React.js, Node.js), along with Django. For UI/UX, I use React.js, HTML, CSS, Bootstrap, and Tailwind CSS. I also build powerful RESTful APIs and manage databases like MongoDB and MySQL.
                </p>

                <p className="text-base md:text-lg text-gray-600 dark:text-gray-400 leading-relaxed">
                    My strengths lie in Data Structures &amp; Algorithms, Object-Oriented Programming, and Competitive Programming. I&apos;m certified in DSA with Java. I&apos;m also comfortable using Git, GitHub, Render, and Postman &mdash; tools that support efficient development and deployment.
                </p>
            </div>
        </div>
    );
}

// Creating a placeholder SkillsSection component since its definition was not provided.
// In a real application, this would contain the actual skills content.
function SkillsSection() {
    return (
        <div className="mt-12 text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-bold text-blue-700 dark:text-blue-400 mb-6">
                My Skills
            </h2>
            <div className="flex flex-wrap justify-center md:justify-start gap-4">
                <span className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-full">React.js</span>
                <span className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-full">Node.js</span>
                <span className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-full">Express.js</span>
                <span className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-full">MongoDB</span>
                <span className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-full">Next.js</span>
                <span className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-full">Java</span>
                <span className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-full">C++</span>
                <span className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-full">JavaScript</span>
                <span className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-full">Tailwind CSS</span>
                <span className="bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-200 px-4 py-2 rounded-full">Git/GitHub</span>
            </div>
        </div>
    );
}


export default function Hero() {
    return (
        <div className="min-h-screen bg-background text-foreground px-4 py-12 md:px-12">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                {/* Left Section - Intro and Links */}
                <div className="text-center md:text-left space-y-6">
                    <h1 className="text-4xl md:text-6xl font-bold">
                        Hi, I&apos;m <span className="text-blue-500">Kshitij Singh</span>
                    </h1>
                    <p className="text-lg md:text-xl text-gray-500 dark:text-gray-400 max-w-xl mx-auto md:mx-0">
                        I&apos;m a passionate Software Engineer and Full Stack Developer with expertise in building scalable web applications using Next.js and the MERN stack. I&apos;m proficient in Java, C++, and JavaScript, and well-versed in Data Structures, Algorithms, and Backend Systems.
                    </p>

                    <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-4">
                        <a
                            href="/projects" // Replaced Link with <a>
                            className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-xl transition"
                        >
                            View Projects
                        </a>

                        <a
                            href="/skills" // Replaced Link with <a>
                            className="border border-blue-600 text-blue-600 hover:bg-blue-600 hover:text-white px-6 py-3 rounded-xl transition"
                        >
                            Skills
                        </a>
                    </div>
                </div>

                {/* Right Section - Description */}
                {/* Render the Description component directly */}
                <Description />
            </div>
            {/* Render the SkillsSection component */}
            <SkillsSection />
        </div>
    );
}
