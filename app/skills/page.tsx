const skills = [
  { category: "Programming Languages", items: ["C++", "Python", "Java", "JavaScript"] },
  { category: "Computer Science", items: ["Data Structures & Algorithms", "Object-Oriented Programming", "DBMS"] },
  { category: "Information Retrieval & Text Processing", items: ["TF-IDF", "Cosine Similarity", "PDF Text Extraction"] },
  { category: "Systems & Networking", items: ["TCP/IP", "Socket Programming", "Multithreading", "Thread Pool", "Mutex", "Condition Variables"] },
  { category: "Development", items: ["React.js", "Node.js", "Express.js", "HTML", "CSS", "REST APIs", "JWT", "Passport.js", "Joi"] },
  { category: "Databases, Cloud & Tools", items: ["MongoDB", "Mongoose", "AWS S3", "Cloudinary", "Docker", "Git", "GitHub", "Postman"] },
];

export default function SkillsPage() {
  return (
    <main className="min-h-screen bg-background px-5 py-16 text-foreground sm:px-8">
      <div className="mx-auto max-w-5xl">
        <p className="text-center text-sm font-semibold uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">My toolkit</p>
        <h1 className="mt-4 text-center text-4xl font-bold tracking-tight sm:text-5xl">Skills & Technologies</h1>
        <p className="mx-auto mt-5 max-w-2xl text-center leading-8 text-muted-foreground">Programming, systems, web development and information-retrieval skills reflected in my current resume and projects.</p>
        <div className="mt-12 grid gap-5 md:grid-cols-2">
          {skills.map(({ category, items }) => (
            <section key={category} className="rounded-3xl border border-border bg-card p-7 shadow-sm">
              <h2 className="text-lg font-semibold">{category}</h2>
              <div className="mt-5 flex flex-wrap gap-2.5">
                {items.map((skill) => (
                  <span key={skill} className="rounded-xl border border-border bg-muted/60 px-3.5 py-2 text-sm text-muted-foreground transition hover:border-blue-500/50 hover:text-foreground">{skill}</span>
                ))}
              </div>
            </section>
          ))}
        </div>
      </div>
    </main>
  );
}
