import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="border-t border-border bg-background text-foreground">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-5 px-5 py-9 sm:px-8 md:flex-row">
        <div className="text-center md:text-left">
          <h2 className="font-semibold">Kshitij Singh</h2>
          <p className="mt-1 text-sm text-muted-foreground">Computer Science & Engineering · IIIT Senapati, Manipur</p>
        </div>
        <div className="flex items-center gap-5">
          <a href="https://github.com/KshitijSingh07" target="_blank" rel="noreferrer" aria-label="GitHub" className="text-muted-foreground transition hover:text-blue-500"><FaGithub size={21} /></a>
          <a href="https://www.linkedin.com/in/kshitij-singh-86b4731b9/" target="_blank" rel="noreferrer" aria-label="LinkedIn" className="text-muted-foreground transition hover:text-blue-500"><FaLinkedin size={21} /></a>
          <a href="mailto:kshitijsin07@gmail.com" aria-label="Email" className="text-muted-foreground transition hover:text-blue-500"><FaEnvelope size={21} /></a>
        </div>
        <p className="text-center text-xs text-muted-foreground">© {new Date().getFullYear()} Kshitij Singh. All rights reserved.</p>
      </div>
    </footer>
  );
}
