'use client';

import { GraduationCap, Code2, Rocket, Award } from 'lucide-react';

const highlights = [
  {
    icon: GraduationCap,
    title: 'MS Biotechnology',
    description: 'Management & Entrepreneurship at Yeshiva University Katz School',
  },
  {
    icon: Code2,
    title: 'Full-Stack Developer',
    description: 'Self-taught MERN stack expertise with 3+ years experience',
  },
  {
    icon: Rocket,
    title: 'Startup Founder',
    description: 'Building RegComplyAI for FDA regulatory compliance',
  },
  {
    icon: Award,
    title: 'Impact Creator',
    description: 'Co-founded Education-24, securing $2M+ in scholarships',
  },
];

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 lg:py-32 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mb-12 sm:mb-16 lg:mb-20">
          <p className="text-accent font-mono text-xs sm:text-sm tracking-wider uppercase mb-3 sm:mb-4">
            About Me
          </p>
          <h2 className="section-heading text-ivory mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl">
            Where Pharma Meets Code
          </h2>
          <p className="text-base sm:text-lg text-silver leading-relaxed">
            I'm a pharmacist turned software developer on a mission to revolutionize 
            how biotech startups navigate FDA regulations. With a Bachelor of Pharmacy 
            from India and currently pursuing my MS in Biotechnology Management, I bring 
            a unique perspective to building tech solutions for the life sciences industry.
          </p>
        </div>

        {/* Highlights grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
          {highlights.map((item, index) => (
            <div
              key={item.title}
              className="glass-card glow-border p-5 sm:p-6 card-lift"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-accent/10 flex items-center justify-center mb-3 sm:mb-4">
                <item.icon className="w-5 h-5 sm:w-6 sm:h-6 text-accent" />
              </div>
              <h3 className="font-display text-base sm:text-lg font-semibold text-ivory mb-2">
                {item.title}
              </h3>
              <p className="text-silver text-sm leading-relaxed">
                {item.description}
              </p>
            </div>
          ))}
        </div>

        {/* Story section */}
        <div className="mt-12 sm:mt-16 lg:mt-20 grid lg:grid-cols-2 gap-8 sm:gap-12 items-center">
          <div className="space-y-4 sm:space-y-6">
            <h3 className="font-display text-xl sm:text-2xl font-bold text-ivory">
              My Journey
            </h3>
            <div className="space-y-3 sm:space-y-4 text-silver leading-relaxed text-sm sm:text-base">
              <p>
                My path started in pharmacy school in India, where I discovered my 
                passion for solving complex problems. While studying drug formulations 
                and pharmacology, I taught myself to code — starting with Python, 
                then moving to JavaScript and the MERN stack.
              </p>
              <p>
                The intersection of these two worlds fascinated me: the pharmaceutical 
                industry desperately needs better tech solutions, and I was uniquely 
                positioned to build them. That realization led me to pursue my MS in 
                Biotechnology Management at Yeshiva University.
              </p>
              <p>
                Today, I'm building <span className="text-accent font-semibold">RegComplyAI</span>, 
                an AI-powered platform that helps biotech startups navigate the complex 
                FDA regulatory landscape. It's the tool I wish existed when I first 
                started learning about drug approvals.
              </p>
            </div>
          </div>

          {/* Stats */}
          <div className="glass-card p-6 sm:p-8">
            <div className="grid grid-cols-2 gap-4 sm:gap-8">
              <div className="text-center">
                <div className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold gradient-text mb-1 sm:mb-2">
                  $2M+
                </div>
                <p className="text-silver text-xs sm:text-sm">Scholarships Secured</p>
              </div>
              <div className="text-center">
                <div className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold gradient-text mb-1 sm:mb-2">
                  3+
                </div>
                <p className="text-silver text-xs sm:text-sm">Years Coding</p>
              </div>
              <div className="text-center">
                <div className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold gradient-text mb-1 sm:mb-2">
                  10+
                </div>
                <p className="text-silver text-xs sm:text-sm">Projects Built</p>
              </div>
              <div className="text-center">
                <div className="font-display text-2xl sm:text-3xl lg:text-4xl font-bold gradient-text mb-1 sm:mb-2">
                  5
                </div>
                <p className="text-silver text-xs sm:text-sm">Languages Spoken</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
