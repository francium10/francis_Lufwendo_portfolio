'use client';

import { useEffect, useState } from 'react';
import { ArrowDown, Sparkles } from 'lucide-react';

export default function Hero() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-4">
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        {/* Gradient orbs - smaller on mobile */}
        <div className="absolute top-1/4 -left-10 md:-left-20 w-48 md:w-96 h-48 md:h-96 bg-accent/20 rounded-full blur-3xl animate-float" />
        <div className="absolute bottom-1/4 -right-10 md:-right-20 w-40 md:w-80 h-40 md:h-80 bg-warm/15 rounded-full blur-3xl animate-float animation-delay-400" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] md:w-[600px] h-[300px] md:h-[600px] bg-accent/5 rounded-full blur-3xl" />
        
        {/* Grid pattern */}
        <div 
          className="absolute inset-0 opacity-[0.02]"
          style={{
            backgroundImage: `linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px),
                              linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)`,
            backgroundSize: '50px 50px'
          }}
        />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        {/* Status badge */}
        <div 
          className={`inline-flex items-center gap-2 px-3 sm:px-4 py-2 rounded-full bg-slate/50 border border-slate/50 mb-6 sm:mb-8 transition-all duration-700 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
          </span>
          <span className="text-silver text-xs sm:text-sm font-medium">Open to Summer 2026 Internships</span>
        </div>

        {/* Main heading */}
        <h1 
          className={`font-display text-4xl sm:text-5xl md:text-6xl lg:text-8xl font-bold tracking-tight leading-[1.1] mb-4 sm:mb-6 transition-all duration-700 delay-100 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <span className="text-ivory">Hi, I'm </span>
          <span className="gradient-text">Francis</span>
        </h1>

        {/* Subtitle */}
        <p 
          className={`font-display text-lg sm:text-xl md:text-2xl lg:text-3xl text-silver mb-3 sm:mb-4 transition-all duration-700 delay-200 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <span className="text-accent">Biotech</span>
          <span className="mx-2 sm:mx-3 text-steel">×</span>
          <span className="text-warm">Software Developer</span>
        </p>

        {/* Description */}
        <p 
          className={`max-w-2xl mx-auto text-base sm:text-lg text-silver/80 mb-8 sm:mb-12 px-2 transition-all duration-700 delay-300 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          MS Biotechnology student at Yeshiva University. Building AI-powered solutions 
          for regulatory compliance. Bridging the gap between life sciences and technology.
        </p>

        {/* CTA Buttons */}
        <div 
          className={`flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 transition-all duration-700 delay-400 ${
            mounted ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'
          }`}
        >
          <a href="#projects" className="btn-primary w-full sm:w-auto justify-center">
            <Sparkles size={18} />
            <span>View My Work</span>
          </a>
          <a href="#contact" className="btn-secondary w-full sm:w-auto justify-center">
            Let's Connect
          </a>
        </div>

        {/* Scroll indicator */}
        <a 
          href="#about" 
          className={`absolute bottom-6 sm:bottom-12 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-silver/50 hover:text-accent transition-all duration-500 ${
            mounted ? 'opacity-100' : 'opacity-0'
          }`}
        >
          <span className="text-xs font-mono uppercase tracking-widest hidden sm:block">Scroll</span>
          <ArrowDown size={20} className="animate-bounce" />
        </a>
      </div>

      {/* Decorative elements */}
      <div className="absolute bottom-0 left-0 right-0 h-20 sm:h-32 bg-gradient-to-t from-midnight to-transparent" />
    </section>
  );
}
