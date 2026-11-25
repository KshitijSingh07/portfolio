"use client";

import Image from "next/image";
import Link from "next/link";
import { ArrowDown, ArrowRight, ArrowUpRight, Github, Linkedin, Mail, FileText, Code2, GraduationCap } from "lucide-react";
import SkillsSection from "./SkillsSection";

export default function Hero() {
  return (
    <div className="bg-background text-foreground">
      <section className="relative isolate overflow-hidden px-5 pb-20 pt-16 sm:px-8 sm:pt-24">
        <div className="pointer-events-none absolute -right-32 -top-32 -z-10 h-96 w-96 rounded-full bg-blue-500/10 blur-3xl" />
        <div className="pointer-events-none absolute -bottom-36 -left-24 -z-10 h-96 w-96 rounded-full bg-indigo-500/10 blur-3xl" />
        <div className="mx-auto grid max-w-6xl items-center gap-14 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-blue-500/20 bg-blue-500/5 px-4 py-2 text-sm text-blue-700 dark:text-blue-300">
              <span className="h-2 w-2 rounded-full bg-emerald-500" />
              Computer Science & Engineering · IIIT Manipur
            </div>
            <p className="text-sm font-semibold uppercase tracking-[0.28em] text-muted-foreground">Hello, I&apos;m</p>
            <h1 className="mt-3 text-5xl font-bold tracking-tight sm:text-6xl lg:text-7xl">
              Kshitij <span className="text-blue-600 dark:text-blue-400">Singh.</span>
            </h1>
            <h2 className="mt-5 max-w-2xl text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              I build thoughtful web applications and dependable software.
            </h2>
            <p className="mt-6 max-w-2xl text-base leading-8 text-muted-foreground sm:text-lg">
              I&apos;m a CSE undergraduate interested in full-stack development and systems programming. I enjoy turning ideas into useful products, building APIs and working close to the fundamentals that make software reliable.
            </p>
            <div className="mt-9 flex flex-wrap gap-3">
              <Link href="/projects" className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white shadow-lg shadow-blue-600/20 transition hover:-translate-y-0.5 hover:bg-blue-700">
                Explore projects <ArrowRight size={17} />
              </Link>
              <Link href="/resume" className="inline-flex items-center gap-2 rounded-xl border border-border px-5 py-3 font-semibold transition hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400">
                <FileText size={17} /> Resume
              </Link>
            </div>
            <div className="mt-8 flex items-center gap-5 text-muted-foreground">
              <a href="https://github.com/KshitijSingh07" target="_blank" rel="noreferrer" aria-label="GitHub" className="transition hover:text-blue-500"><Github size={21} /></a>
              <a href="https://www.linkedin.com/in/kshitij-singh-86b4731b9/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="transition hover:text-blue-500"><Linkedin size={21} /></a>
              <a href="mailto:kshitijsin07@gmail.com" aria-label="Email" className="transition hover:text-blue-500"><Mail size={21} /></a>
              <span className="h-5 w-px bg-border" />
              <span className="text-sm">Open to software engineering opportunities</span>
            </div>
          </div>

          <div className="mx-auto w-full max-w-sm">
            <div className="relative rounded-[2rem] border border-border bg-card p-3 shadow-2xl shadow-blue-950/10">
              <div className="absolute -right-5 -top-5 rounded-2xl border border-border bg-background px-4 py-3 shadow-lg">
                <div className="flex items-center gap-2 text-sm font-semibold"><Code2 size={16} className="text-blue-500" /> Build · Learn · Improve</div>
              </div>
              <div className="relative aspect-[4/5] overflow-hidden rounded-[1.5rem] bg-muted">
                <Image src="/kshitij.jpg" alt="Kshitij Singh" fill priority className="object-cover" sizes="(max-width: 768px) 80vw, 360px" />
              </div>
              <div className="flex items-center justify-between gap-4 px-3 py-4">
                <div>
                  <p className="font-semibold">Kshitij Singh</p>
                  <p className="mt-1 text-sm text-muted-foreground">B.Tech CSE · 2023–2027</p>
                </div>
                <div className="rounded-xl bg-blue-500/10 p-3 text-blue-600 dark:text-blue-400"><GraduationCap size={22} /></div>
              </div>
            </div>
            <div className="mt-5 grid grid-cols-2 gap-3">
              <div className="rounded-2xl border border-border bg-card p-4">
                <p className="text-2xl font-bold">250+</p>
                <p className="mt-1 text-xs text-muted-foreground">DSA problems practiced</p>
              </div>
              <div className="rounded-2xl border border-border bg-card p-4">
                <p className="text-2xl font-bold">Full-stack</p>
                <p className="mt-1 text-xs text-muted-foreground">Web development focus</p>
              </div>
            </div>
          </div>
        </div>
        <div className="mx-auto mt-16 flex max-w-6xl items-center gap-3 text-xs uppercase tracking-[0.2em] text-muted-foreground">
          <ArrowDown size={15} /> Scroll to explore
          <span className="h-px flex-1 bg-border" />
        </div>
      </section>

      <section className="border-y border-border bg-muted/30 px-5 py-16 sm:px-8">
        <div className="mx-auto grid max-w-6xl gap-10 md:grid-cols-[0.8fr_1.2fr]">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.25em] text-blue-600 dark:text-blue-400">A little about me</p>
            <h2 className="mt-4 text-3xl font-bold tracking-tight">Curious by nature. Practical by design.</h2>
          </div>
          <div className="space-y-4 text-base leading-8 text-muted-foreground">
            <p>I&apos;m pursuing a B.Tech in Computer Science & Engineering at the Indian Institute of Information Technology, Senapati, Manipur. My interests span application development, backend engineering, databases and concurrent systems.</p>
            <p>During my Web Development Internship at Brainwave Matrix Solutions, I worked on practical web-development tasks. Outside coursework, I build projects that help me understand systems beyond the surface level—from full-stack platforms to a concurrent TCP server in C++.</p>
            <Link href="/about" className="inline-flex items-center gap-2 font-semibold text-blue-600 transition hover:gap-3 dark:text-blue-400">More about me <ArrowUpRight size={16} /></Link>
          </div>
        </div>
      </section>
      <SkillsSection />
      <section className="px-5 pb-20 pt-8 sm:px-8">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-6 rounded-3xl border border-blue-500/20 bg-blue-500/5 p-8 sm:flex-row sm:items-center sm:p-10">
          <div>
            <p className="text-sm font-semibold uppercase tracking-[0.2em] text-blue-600 dark:text-blue-400">Have a project in mind?</p>
            <h2 className="mt-3 text-2xl font-bold">Let&apos;s build something useful.</h2>
            <p className="mt-2 text-sm text-muted-foreground">I&apos;m happy to connect about internships, entry-level roles and collaborations.</p>
          </div>
          <Link href="/contact" className="inline-flex items-center gap-2 rounded-xl bg-blue-600 px-5 py-3 font-semibold text-white transition hover:bg-blue-700">Get in touch <ArrowRight size={17} /></Link>
        </div>
      </section>
    </div>
  );
}
