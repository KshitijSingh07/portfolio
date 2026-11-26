const skillGroups = [
  { title: "Languages", items: ["Java", "C++", "JavaScript", "Python"] },
  { title: "Frontend", items: ["React.js", "Next.js", "HTML", "CSS", "Tailwind CSS"] },
  { title: "Backend & APIs", items: ["Node.js", "Express.js", "Django (basic)", "REST APIs"] },
  { title: "Databases", items: ["MongoDB", "MySQL"] },
  { title: "Tools", items: ["Git", "GitHub", "Postman", "Docker", "Vercel", "Render"] },
  { title: "CS Fundamentals", items: ["Data Structures & Algorithms", "OOP", "DBMS", "Computer Networks"] },
];

export default function SkillsSection() {
  return (
    <section className="bg-background px-5 py-20 text-foreground sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">What I work with</p>
          <h2 className="mt-4 text-3xl font-bold tracking-tight sm:text-4xl">Tools for building from idea to deployment.</h2>
          <p className="mt-4 leading-7 text-muted-foreground">A practical toolkit across programming, frontend, backend and core computer science.</p>
        </div>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <div key={group.title} className="rounded-2xl border border-border bg-card p-6 transition hover:border-blue-500/40">
              <h3 className="font-semibold">{group.title}</h3>
              <div className="mt-4 flex flex-wrap gap-2">
                {group.items.map((skill) => (
                  <span key={skill} className="rounded-lg border border-border bg-muted/60 px-3 py-1.5 text-sm text-muted-foreground">{skill}</span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
