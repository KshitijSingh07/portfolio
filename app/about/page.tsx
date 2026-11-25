import Image from "next/image";
import Link from "next/link";
import { ArrowUpRight, Github, Linkedin, Mail, GraduationCap, BriefcaseBusiness } from "lucide-react";

export default function AboutPage() {
  return (
    <main className="min-h-screen bg-background px-5 py-16 text-foreground sm:px-8">
      <div className="mx-auto max-w-6xl">
        <div className="max-w-3xl">
          <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">About me</p>
          <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">A developer who enjoys learning by building.</h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">I&apos;m Kshitij Singh, a Computer Science & Engineering undergraduate at IIIT Senapati, Manipur. I like building useful applications, exploring backend systems and strengthening my understanding of computer science fundamentals.</p>
        </div>

        <div className="mt-12 grid gap-10 lg:grid-cols-[0.7fr_1.3fr]">
          <div className="mx-auto w-full max-w-sm">
            <div className="relative aspect-[4/5] overflow-hidden rounded-3xl border border-border shadow-xl">
              <Image src="/kshitij.jpg" alt="Kshitij Singh" fill className="object-cover" sizes="(max-width: 768px) 90vw, 380px" />
            </div>
            <div className="mt-5 flex items-center justify-center gap-5 text-muted-foreground">
              <a href="https://github.com/KshitijSingh07" target="_blank" rel="noreferrer" aria-label="GitHub" className="hover:text-blue-500"><Github /></a>
              <a href="https://www.linkedin.com/in/kshitij-singh-86b4731b9/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="hover:text-blue-500"><Linkedin /></a>
              <a href="mailto:kshitijsin07@gmail.com" aria-label="Email" className="hover:text-blue-500"><Mail /></a>
            </div>
          </div>

          <div className="space-y-8">
            <section className="rounded-3xl border border-border bg-card p-7">
              <h2 className="text-xl font-semibold">My approach</h2>
              <div className="mt-4 space-y-4 leading-8 text-muted-foreground">
                <p>I enjoy working across the stack—from shaping a clear user experience in React to building backend services, designing APIs and connecting databases. I also like systems-level work that makes me think about concurrency, networking and performance.</p>
                <p>My current toolkit includes Java, C++, JavaScript and Python, along with React, Next.js, Node.js, Express, Django, MongoDB and MySQL. I use Git, GitHub, Postman and Docker in my development workflow.</p>
                <p>I try to keep learning through projects, coursework and consistent practice. I have solved 250+ data-structures and algorithms problems on LeetCode.</p>
              </div>
            </section>

            <section className="rounded-3xl border border-border bg-card p-7">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-blue-500/10 p-3 text-blue-600 dark:text-blue-400"><GraduationCap /></div>
                <div><h2 className="font-semibold">Education</h2><p className="text-sm text-muted-foreground">B.Tech · 2023–2027</p></div>
              </div>
              <p className="mt-4 font-medium">Indian Institute of Information Technology, Senapati, Manipur</p>
              <p className="mt-1 text-sm text-muted-foreground">Computer Science & Engineering</p>
            </section>

            <section className="rounded-3xl border border-border bg-card p-7">
              <div className="flex items-center gap-3">
                <div className="rounded-xl bg-blue-500/10 p-3 text-blue-600 dark:text-blue-400"><BriefcaseBusiness /></div>
                <div><h2 className="font-semibold">Experience</h2><p className="text-sm text-muted-foreground">June – August 2025</p></div>
              </div>
              <p className="mt-4 font-medium">Web Development Intern · Brainwave Matrix Solutions</p>
              <p className="mt-1 text-sm leading-7 text-muted-foreground">Completed an 8-week internship focused on web development and worked on practical website-building tasks.</p>
            </section>

            <div className="flex flex-wrap gap-3">
              <Link href="/projects" className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white hover:bg-blue-700">Explore my work <ArrowUpRight size={16} /></Link>
              <Link href="/contact" className="inline-flex items-center gap-2 rounded-xl border border-border px-5 py-3 font-semibold hover:border-blue-500">Get in touch</Link>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
