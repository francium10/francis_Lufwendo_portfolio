'use client';

import { Github, Linkedin, Mail, Heart } from 'lucide-react';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-12 border-t border-slate/30">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo & Copyright */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <a href="#" className="font-display text-2xl font-bold">
              <span className="text-ivory">F</span>
              <span className="text-accent">.</span>
            </a>
            <p className="text-steel text-sm">
              © {currentYear} Francis Lufwendo. All rights reserved.
            </p>
          </div>

          {/* Built with */}
          <p className="text-steel text-sm flex items-center gap-1">
            Built with <Heart className="w-4 h-4 text-accent" /> using Next.js & Tailwind
          </p>

          {/* Social links */}
          <div className="flex items-center gap-4">
            <a
              href="https://github.com/francium10"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-silver hover:text-accent transition-colors"
              aria-label="GitHub"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/francis-lufwendo"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-silver hover:text-accent transition-colors"
              aria-label="LinkedIn"
            >
              <Linkedin size={20} />
            </a>
            <a
              href="mailto:flufwendo@mail.yu.edu"
              className="p-2 text-silver hover:text-accent transition-colors"
              aria-label="Email"
            >
              <Mail size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
