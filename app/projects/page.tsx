import Link from "next/link";
import { ArrowUpRight, Github, ExternalLink, Server, Scale, Cloud, Code2 } from "lucide-react";

const projects = [
  {
    title: "Multi-threaded TCP Key-Value Server",
    category: "Systems Programming",
    description:
      "A concurrent TCP key-value server in C++17 built around a fixed-size worker pool and a thread-safe in-memory store.",
    highlights: [
      "Implemented a producer-consumer task queue using mutexes and condition variables.",
      "Used shared_mutex to support concurrent reads and synchronized writes.",
      "Validated SET, GET and DEL operations with concurrent clients; Dockerized the server.",
    ],
    stack: ["C++17", "POSIX Sockets", "Threads", "Docker", "CMake / Make"],
    github: "https://github.com/KshitijSingh07/multithreaded-tcp-server",
    icon: Server,
    featured: true,
  },
  {
    title: "Wanderlust",
    category: "Full-Stack Web Application",
    description:
      "A travel and accommodation listing platform where users can discover stays and manage their own property listings.",
    highlights: [
      "Built listing CRUD flows with authentication and authorization.",
      "Integrated image uploads, reviews, ratings and secure session handling.",
      "Designed responsive listing and detail pages backed by MongoDB.",
    ],
    stack: ["Node.js", "Express.js", "MongoDB", "Mongoose", "EJS", "Passport.js"],
    github: "https://github.com/KshitijSingh07/Wanderlust",
    live: "https://wanderlust-99v7.onrender.com/listings",
    icon: ExternalLink,
    featured: true,
  },
  {
    title: "KanoonTalks",
    category: "Community & Publishing Platform",
    description:
      "A legal-content platform concept for publishing and discovering articles, research, papers and case-law resources.",
    highlights: [
      "Created a web experience focused on legal knowledge discovery and publishing.",
      "Used a modern Next.js interface with database-backed application architecture.",
      "Structured the platform around students, researchers and legal professionals.",
    ],
    stack: ["Next.js", "React", "MongoDB", "Tailwind CSS"],
    github: "https://github.com/KshitijSingh07/KanoonTalks",
    live: "https://kanoon-talks.vercel.app/",
    icon: Scale,
    featured: true,
  },
  {
    title: "Cloud Command Parser",
    category: "Cloud Computing · Academic Project",
    description:
      "An experimental command-to-JSON pipeline exploring knowledge distillation and deployment on a local Kubernetes environment.",
    highlights: [
      "Designed a FastAPI inference service with a containerized deployment workflow.",
      "Explored Kubernetes manifests, local k3d clusters and SeaweedFS object storage.",
      "Project documentation distinguishes executed work from pending experiments.",
    ],
    stack: ["Python", "FastAPI", "Docker", "Kubernetes", "PyTorch", "Ollama"],
    github: "https://github.com/KshitijSingh07/CS3081-Cloud-Computing-Mini-Project",
    icon: Cloud,
    featured: false,
  },
  {
    title: "Resume Ranker",
    category: "Python · Information Retrieval",
    description:
      "An ATS-style resume matching prototype that scores candidate profiles against job descriptions and role-specific skills.",
    highlights: [
      "Implemented TF-IDF and cosine-similarity based matching.",
      "Designed explainable scoring across skills, experience, education and projects.",
      "Organized role-specific evaluation for multiple technical domains.",
    ],
    stack: ["Python", "TF-IDF", "Cosine Similarity", "NLP"],
    github: "https://github.com/KshitijSingh07/Resume-Ranker",
    icon: Code2,
    featured: false,
  },
];

function ProjectCard({ project }: { project: (typeof projects)[number] }) {
  const Icon = project.icon;
  return (
    <article className="group flex h-full flex-col rounded-3xl border border-border bg-card p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-xl">
      <div className="mb-6 flex items-start justify-between gap-4">
        <div className="rounded-2xl border border-blue-500/20 bg-blue-500/10 p-3 text-blue-600 dark:text-blue-400">
          <Icon size={22} />
        </div>
        <span className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">
          {project.category}
        </span>
      </div>
      <h2 className="text-xl font-semibold tracking-tight">{project.title}</h2>
      <p className="mt-3 text-sm leading-7 text-muted-foreground">{project.description}</p>
      <ul className="mt-5 flex-1 space-y-2 text-sm leading-6 text-muted-foreground">
        {project.highlights.map((item) => (
          <li key={item} className="flex gap-2">
            <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" />
            <span>{item}</span>
          </li>
        ))}
      </ul>
      <div className="mt-6 flex flex-wrap gap-2">
        {project.stack.map((item) => (
          <span key={item} className="rounded-lg bg-muted px-2.5 py-1 text-xs text-muted-foreground">
            {item}
          </span>
        ))}
      </div>
      <div className="mt-7 flex items-center gap-4 border-t border-border pt-5 text-sm font-medium">
        <a href={project.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition hover:text-blue-500">
          <Github size={16} /> Source code <ArrowUpRight size={14} />
        </a>
        {project.live && (
          <a href={project.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 text-blue-600 transition hover:text-blue-500 dark:text-blue-400">
            Live demo <ArrowUpRight size={14} />
          </a>
        )}
      </div>
    </article>
  );
}

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background px-5 py-16 text-foreground sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">Selected work</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">Projects that turn ideas into working software.</h1>
          <p className="mt-5 text-base leading-8 text-muted-foreground">
            A collection of web applications, systems programming and engineering experiments. Each project reflects a different part of how I learn, build and solve problems.
          </p>
        </div>
        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project) => <ProjectCard key={project.title} project={project} />)}
        </div>
        <div className="mt-12 flex flex-col items-start justify-between gap-4 rounded-3xl border border-border bg-muted/40 p-7 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-xl font-semibold">Want to explore more?</h2>
            <p className="mt-1 text-sm text-muted-foreground">Find more experiments and repositories on GitHub.</p>
          </div>
          <a href="https://github.com/KshitijSingh07" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">
            Visit GitHub <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </main>
  );
}
