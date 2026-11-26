import { ArrowUpRight, Github, Server, GitBranch, Globe2 } from "lucide-react";

const projects = [
  {
    title: "Multi-threaded TCP Server",
    category: "Systems Programming",
    description:
      "A concurrent TCP key-value server in C++17 that handles multiple client connections through a fixed-size worker pool.",
    highlights: [
      "Designed a producer-consumer task queue coordinated with mutexes and condition variables.",
      "Used shared_mutex to allow concurrent reads while serializing updates to shared key-value data.",
      "Implemented TCP socket handling and tested correctness with multiple simultaneous clients.",
    ],
    stack: ["C++17", "TCP Sockets", "Multithreading", "Thread Pool", "Mutex"],
    icon: Server,
    links: [{ label: "Source code", href: "https://github.com/KshitijSingh07/multithreaded-tcp-server", icon: "github" }],
    featured: true,
  },
  {
    title: "GitProject — GitHub-inspired Version Control Platform",
    category: "Full-Stack Engineering",
    description:
      "A version-control platform combining a custom Git-style CLI, a REST API for users, repositories and issues, and a React frontend.",
    highlights: [
      "Built CLI commands for init, add, commit, push, pull and revert.",
      "Developed a Node.js and Express REST API backed by MongoDB and Mongoose.",
      "Integrated JWT authentication, bcrypt password hashing and AWS S3-based commit storage.",
    ],
    stack: ["Node.js", "Express.js", "MongoDB", "React.js", "JWT", "AWS S3"],
    icon: GitBranch,
    links: [
      { label: "Backend", href: "https://github.com/KshitijSingh07/Git-backend", icon: "github" },
      { label: "Frontend", href: "https://github.com/KshitijSingh07/Git-frontend", icon: "github" },
    ],
    featured: true,
  },
  {
    title: "Wanderlust — Property Listing Platform",
    category: "Full-Stack Web Application",
    description:
      "A deployed property-listing application where users can discover stays, create listings and manage reviews through authenticated workflows.",
    highlights: [
      "Built CRUD flows for listings and reviews with owner-based authorization.",
      "Implemented session-based authentication with Passport.js and Joi request validation.",
      "Integrated Cloudinary image uploads and MongoDB/Mongoose data models.",
    ],
    stack: ["Node.js", "Express.js", "MongoDB", "Passport.js", "Joi", "Cloudinary", "EJS"],
    icon: Globe2,
    links: [
      { label: "Source code", href: "https://github.com/KshitijSingh07/Wanderlust", icon: "github" },
      { label: "Live demo", href: "https://wanderlust-99v7.onrender.com/listings", icon: "external" },
    ],
    featured: true,
  },
];

export default function ProjectsPage() {
  return (
    <main className="min-h-screen bg-background px-5 py-16 text-foreground sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">Selected work</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">Projects that turn ideas into working software.</h1>
          <p className="mt-5 text-base leading-8 text-muted-foreground">
            A selection of my work across full-stack development and systems programming. Each project reflects a practical engineering problem I have worked through.
          </p>
        </div>

        <div className="mt-12 grid gap-6 md:grid-cols-2">
          {projects.map((project) => {
            const Icon = project.icon;
            return (
              <article key={project.title} className="group flex h-full flex-col rounded-3xl border border-border bg-card p-6 shadow-sm transition duration-300 hover:-translate-y-1 hover:border-blue-500/50 hover:shadow-xl">
                <div className="mb-6 flex items-start justify-between gap-4">
                  <div className="rounded-2xl border border-blue-500/20 bg-blue-500/10 p-3 text-blue-600 dark:text-blue-400"><Icon size={22} /></div>
                  <span className="rounded-full border border-border px-3 py-1 text-xs text-muted-foreground">{project.category}</span>
                </div>
                <h2 className="text-xl font-semibold tracking-tight">{project.title}</h2>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">{project.description}</p>
                <ul className="mt-5 flex-1 space-y-2 text-sm leading-6 text-muted-foreground">
                  {project.highlights.map((item) => (
                    <li key={item} className="flex gap-2"><span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-blue-500" /><span>{item}</span></li>
                  ))}
                </ul>
                <div className="mt-6 flex flex-wrap gap-2">
                  {project.stack.map((item) => <span key={item} className="rounded-lg bg-muted px-2.5 py-1 text-xs text-muted-foreground">{item}</span>)}
                </div>
                <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3 border-t border-border pt-5 text-sm font-medium">
                  {project.links.map((link) => (
                    <a key={link.label} href={link.href} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 transition hover:text-blue-500">
                      {link.icon === "github" ? <Github size={16} /> : <ArrowUpRight size={16} />}
                      {link.label} <ArrowUpRight size={13} />
                    </a>
                  ))}
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-12 flex flex-col items-start justify-between gap-4 rounded-3xl border border-border bg-muted/40 p-7 sm:flex-row sm:items-center">
          <div>
            <h2 className="text-xl font-semibold">More experiments and code</h2>
            <p className="mt-1 text-sm text-muted-foreground">Explore additional repositories and ongoing work on GitHub.</p>
          </div>
          <a href="https://github.com/KshitijSingh07" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 text-sm font-semibold text-white transition hover:bg-blue-700">
            Visit GitHub <ArrowUpRight size={16} />
          </a>
        </div>
      </div>
    </main>
  );
}
