'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X, Github, Linkedin } from 'lucide-react';

const navLinks = [
  { href: '#about', label: 'About' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#skills', label: 'Skills' },
  { href: '#books', label: 'Books' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#contact', label: 'Contact' },
];
export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-500 ${
        scrolled 
          ? 'bg-midnight/80 backdrop-blur-xl border-b border-slate/30' 
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          {/* Logo */}
          <Link 
            href="/" 
            className="font-display text-xl sm:text-2xl font-bold tracking-tight group"
          >
            <span className="text-ivory group-hover:text-accent transition-colors duration-300">
              F
            </span>
            <span className="text-accent">.</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-6 lg:gap-8">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-silver hover:text-ivory font-medium link-hover transition-colors duration-300 text-sm lg:text-base"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Social Links & Resume */}
          <div className="hidden md:flex items-center gap-3 lg:gap-4">
            <a
              href="https://github.com/francium10"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-silver hover:text-accent transition-colors duration-300"
              aria-label="GitHub"
            >
              <Github size={18} />
            </a>
            <a
              href="https://www.linkedin.com/in/francis-lufwendo-5a47a8225"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-silver hover:text-accent transition-colors duration-300"
              aria-label="LinkedIn"
            >
              <Linkedin size={18} />
            </a>
            <a
              href="/resume.pdf"
              className="btn-primary text-sm"
            >
              <span>Resume</span>
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-silver hover:text-ivory transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div
        className={`md:hidden fixed inset-0 top-16 bg-midnight/98 backdrop-blur-xl transition-all duration-300 ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
      >
        <div className="px-4 py-6 space-y-4 h-full overflow-y-auto">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="block text-lg text-silver hover:text-ivory font-medium transition-colors py-2"
            >
              {link.label}
            </a>
          ))}
          <div className="flex items-center gap-4 pt-4 border-t border-slate/30">
            <a
              href="https://github.com/francium10"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-silver hover:text-accent transition-colors"
            >
              <Github size={20} />
            </a>
            <a
              href="https://www.linkedin.com/in/francis-lufwendo-5a47a8225"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2 text-silver hover:text-accent transition-colors"
            >
              <Linkedin size={20} />
            </a>
            <a href="/resume.pdf" className="btn-primary ml-auto">
              <span>Resume</span>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
}
