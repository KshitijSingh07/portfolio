// components/Footer.tsx
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

export default function Footer() {
  return (
    <footer className="bg-background text-foreground border-t border-gray-200 dark:border-gray-700">
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        
        {/* Left - Personal Info */}
        <div className="text-center md:text-left">
          <h2 className="text-lg font-semibold">Kshitij Singh</h2>
          <p className="text-sm text-gray-500 dark:text-gray-400">
            Software Engineer | Full Stack Developer | MERN | Next.js | C++ | Java
          </p>
        </div>

        {/* Center - Social Icons */}
        <div className="flex space-x-6">
          <a
            href="https://github.com/KshitijSingh07"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500 transition"
            aria-label="GitHub"
          >
            <FaGithub size={22} />
          </a>
          <a
            href="https://www.linkedin.com/in/kshitij-singh-86b4731b9/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500 transition"
            aria-label="LinkedIn"
          >
            <FaLinkedin size={22} />
          </a>
          <a
            href="mailto:kshitijsin07@gmail.com"
            className="text-gray-600 hover:text-blue-600 dark:text-gray-400 dark:hover:text-blue-500 transition"
            aria-label="Email"
          >
            <FaEnvelope size={22} />
          </a>
        </div>

        {/* Right - Copyright */}
        <div className="text-sm text-gray-500 dark:text-gray-400 text-center md:text-right">
          &copy; {new Date().getFullYear()} Kshitij Singh. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
