'use client';

import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 sm:py-12 border-t border-slate/30">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-4 sm:gap-6 md:flex-row md:justify-between">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-1 sm:gap-2">
            <a href="#" className="font-display text-xl sm:text-2xl font-bold">
              <span className="text-ivory">F</span>
              <span className="text-accent">.</span>
            </a>
            <p className="text-steel text-xs sm:text-sm">
              © {currentYear} Francis Lufwendo
            </p>
          </div>

          {/* Built with */}
          <p className="text-steel text-xs sm:text-sm flex items-center gap-1">
            Built with <Heart className="w-3 h-3 sm:w-4 sm:h-4 text-accent" /> using Next.js & Tailwind
          </p>

          {/* Social links */}
          <div className="flex items-center gap-3 sm:gap-4">
            <a
              href="https://github.com/francium10"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-silver hover:text-accent transition-colors"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/francis-lufwendo-5a47a8225"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-silver hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="mailto:flufwendo@mail.yu.edu"
              className="p-2 text-silver hover:text-accent transition-colors"
              aria-label="Email"
            >
              <Mail size={18} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
