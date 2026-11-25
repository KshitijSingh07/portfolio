"use client";

import { Printer, Download, ExternalLink } from "lucide-react";

const sections = [
  {
    title: "Summary",
    content: "Final-year Computer Science undergraduate at IIIT Manipur with a foundation in algorithms, programming, data processing and systems. Scored 95% in NPTEL Introduction to Information Retrieval and built a Python text-matching project using TF-IDF and cosine similarity. Hands-on experience with C++, multithreading, socket programming and software development; solved 250+ LeetCode problems.",
  },
];

const projects = [
  {
    title: "Resume Recommendation System – Text Relevance Matching",
    stack: "Python, pdfplumber, TF-IDF, Cosine Similarity",
    description: "Developed a text-matching system that extracts resume content from PDFs and compares it with job descriptions using TF-IDF and cosine similarity. Combined text similarity with skill and experience relevance to produce an explainable matching score.",
    links: [{ label: "GitHub", href: "https://github.com/KshitijSingh07/Resume-Ranker" }],
  },
  {
    title: "Multi-threaded TCP Server – Concurrent Client Handling",
    stack: "C++, TCP Sockets, Thread Pool, Mutex, Condition Variables",
    description: "Implemented a TCP server using a fixed-size worker pool and producer–consumer task queue to handle concurrent clients. Synchronised shared queue operations and used a shared mutex to support concurrent reads and safely serialise store updates. Tested multi-client behaviour and correctness under concurrent access.",
    links: [{ label: "GitHub", href: "https://github.com/KshitijSingh07/multithreaded-tcp-server" }],
  },
  {
    title: "GitProject – GitHub-Inspired Version Control Platform",
    stack: "Node.js, Express.js, MongoDB/Mongoose, React, JWT, AWS S3",
    description: "Built a full-stack version-control platform with a CLI supporting init, add, commit, push, pull and revert, alongside a REST API for users, repositories and issues. Implemented JWT authentication and bcrypt password hashing, stored commit history in AWS S3, and developed a React interface.",
    links: [
      { label: "Backend", href: "https://github.com/KshitijSingh07/Git-backend" },
      { label: "Frontend", href: "https://github.com/KshitijSingh07/Git-frontend" },
    ],
  },
  {
    title: "Wanderlust – Property Listing Platform",
    stack: "Node.js, Express.js, MongoDB/Mongoose, Passport.js, Joi, Cloudinary, EJS",
    description: "Built and deployed a full-stack listing platform with CRUD APIs for listings and reviews, session-based authentication, owner-based authorisation, Joi validation and Cloudinary image uploads.",
    links: [
      { label: "GitHub", href: "https://github.com/KshitijSingh07/Wanderlust" },
      { label: "Live site", href: "https://wanderlust-99v7.onrender.com/listings" },
    ],
  },
];

const skillGroups = [
  ["Programming", "C++, Python, Java, JavaScript"],
  ["Computer Science", "Data Structures and Algorithms, Object-Oriented Programming, DBMS, Operating Systems"],
  ["Information Retrieval & Text Processing", "TF-IDF, Cosine Similarity, PDF Text Extraction"],
  ["Systems", "TCP/IP, Socket Programming, Multithreading, Thread Pool, Mutex, Condition Variables"],
  ["Development", "React.js, Node.js, Express.js, HTML, CSS, REST APIs, JWT, Passport.js, Joi"],
  ["Databases & Tools", "MongoDB, Mongoose, AWS S3, Cloudinary, Docker, Git, GitHub, Postman"],
];

const certifications = [
  "NPTEL – Introduction to Information Retrieval: 95%, Elite-Gold",
  "NPTEL – Business Intelligence & Analytics: 95%, Elite-Gold",
  "NPTEL – Blockchain and Its Applications: 87%, Elite-Silver; Top 1%",
  "NPTEL – Introduction to Internet of Things: 97%, Elite-Gold",
  "Apna College – Alpha (DSA with Java)",
  "Apna College – Delta (Full Stack Web Development)",
];

export default function ResumePage() {
  return (
    <main className="min-h-screen bg-muted/30 px-4 py-12 text-foreground sm:px-6">
      <div className="mx-auto max-w-4xl">
        <div className="mb-7 flex flex-col justify-between gap-4 sm:flex-row sm:items-end" data-print-hide>
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.22em] text-blue-600 dark:text-blue-400">Curriculum vitae</p>
            <h1 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">Kshitij Singh</h1>
            <p className="mt-2 text-sm text-muted-foreground">Computer Science & Engineering · IIIT Manipur · 2023–2027</p>
          </div>
          <div className="flex flex-wrap gap-2">
            <button onClick={() => window.print()} className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-4 py-2.5 text-sm font-semibold text-white transition hover:bg-blue-700">
              <Printer size={16} /> Print / Save as PDF
            </button>
            <a href="https://github.com/KshitijSingh07" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl border border-border bg-background px-4 py-2.5 text-sm font-semibold transition hover:border-blue-500">
              GitHub <ExternalLink size={15} />
            </a>
          </div>
        </div>

        <article id="resume-print-root" className="rounded-2xl border border-border bg-background p-6 shadow-xl sm:p-10">
          <header className="border-b-2 border-foreground/80 pb-5 text-center">
            <h2 className="text-3xl font-bold tracking-tight">Kshitij Singh</h2>
            <p className="mt-1 text-sm text-muted-foreground">+91 70816 00352</p>
            <p className="mt-2 text-sm text-muted-foreground">
              <a href="mailto:kshitijsin07@gmail.com" className="underline underline-offset-2">kshitijsin07@gmail.com</a>
              <span className="px-2">|</span>
              <a href="https://www.linkedin.com/in/kshitij-singh-86b4731b9/" className="underline underline-offset-2">LinkedIn</a>
              <span className="px-2">|</span>
              <a href="https://github.com/KshitijSingh07" className="underline underline-offset-2">GitHub</a>
            </p>
          </header>

          <section className="resume-section">
            <h3>Summary</h3>
            <p>{sections[0].content}</p>
          </section>

          <section className="resume-section">
            <h3>Education</h3>
            <div className="flex flex-col justify-between gap-1 sm:flex-row">
              <strong>Indian Institute of Information Technology, Manipur</strong>
              <span className="text-sm text-muted-foreground">2023–2027</span>
            </div>
            <p>B.Tech, Computer Science and Engineering <span className="font-semibold">| CPI: 8.36/10.0</span></p>
          </section>

          <section className="resume-section">
            <h3>Projects</h3>
            {projects.map((project) => (
              <div key={project.title} className="resume-project">
                <div className="flex flex-col justify-between gap-1 sm:flex-row">
                  <h4>{project.title}</h4>
                  <div className="flex flex-wrap gap-2 text-xs" data-print-hide>
                    {project.links.map((link) => <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="font-semibold text-blue-600 underline underline-offset-2 dark:text-blue-400">{link.label}</a>)}
                  </div>
                </div>
                <p className="resume-stack">{project.stack}</p>
                <p>{project.description}</p>
              </div>
            ))}
          </section>

          <section className="resume-section">
            <h3>Technical Skills</h3>
            <div className="space-y-2">
              {skillGroups.map(([label, content]) => (
                <p key={label}><strong>{label}:</strong> {content}</p>
              ))}
            </div>
          </section>

          <section className="resume-section">
            <h3>Achievements & Certifications</h3>
            <ul className="list-disc space-y-1 pl-5">
              <li>Solved 250+ problems on LeetCode.</li>
              {certifications.map((item) => <li key={item}>{item}</li>)}
            </ul>
          </section>

          <section className="resume-section">
            <h3>Relevant Coursework</h3>
            <p>Data Structures and Algorithms · Information Retrieval · Database Management Systems · Object-Oriented Programming</p>
          </section>
        </article>
        <p className="mt-5 text-center text-xs text-muted-foreground" data-print-hide>
          Use “Print / Save as PDF” and select “Save as PDF” as the destination to export this updated resume.
        </p>
      </div>
    </main>
  );
}
