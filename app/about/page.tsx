"use client";

import Image from "next/image";
import React from "react";

export default function AboutPage() {
    return (
        <div className="min-h-screen px-6 py-10 md:px-20 max-w-5xl mx-auto">
            <h1 className="text-4xl py-10 font-bold text-blue-700 dark:text-blue-400 mb-10">
                About Me
            </h1>

            <div className="flex flex-col md:flex-row items-center md:items-start gap-12">
                {/* Profile Image */}
                <div className="shrink-0 relative w-52 h-52 sm:w-60 sm:h-60 md:w-72 md:h-72 rounded-full overflow-hidden border-4 border-blue-500 shadow-md">
                    <Image
                        src="/kshitij.jpg"
                        alt="Kshitij Singh"
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 240px, (max-width: 1024px) 288px, 288px"
                    />
                </div>

                {/* Info */}
                <div className="text-gray-800 dark:text-gray-200 space-y-5 text-justify">
                    <p>
                        Hi! I&apos;m <strong>Kshitij Singh</strong>, a passionate Full-Stack Developer and Computer Science undergrad at IIIT Senapati, Manipur.
                    </p>

                    <p>
                        I enjoy building full-stack web apps that solve real-world problems. Whether it&apos;s crafting responsive UIs with <strong>React.js</strong> or designing secure backends with <strong>Node.js</strong> and <strong>Express</strong>, I love the challenge of turning ideas into reality.
                    </p>

                    <p>
                        I&apos;m currently exploring advanced concepts in <strong>Next.js</strong>, improving my DSA skills, and building projects that reflect my learning journey.
                    </p>

                    <p>
                        Feel free to check out my projects, connect with me, or reach out for collaboration!
                    </p>

                    <ul className="list-disc list-inside text-sm">
                        <li>Email: <a href="mailto:kshitijsin07@gmail.com" className="text-blue-500 hover:underline">kshitijsin07&#64;gmail.com</a></li>
                        <li>Contact: &#43;91 7081600352</li>
                        <li>LinkedIn: <a href="https://www.linkedin.com/in/kshitij-singh-86b4731b9" className="text-blue-500 hover:underline">linkedin.com/kshitij-singh</a></li>
                    </ul>
                </div>
            </div>
        </div>
    );
}
