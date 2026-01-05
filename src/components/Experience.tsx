'use client';

import { Building2, GraduationCap, Award } from 'lucide-react';

const experiences = [
  {
    type: 'education',
    title: 'MS Biotechnology Management & Entrepreneurship',
    organization: 'Yeshiva University - Katz School',
    location: 'New York, NY',
    period: 'Aug 2025 - May 2027 (Expected)',
    description: 'GPA: 4.0. Focusing on venture creation, regulatory affairs, bioinformatics, and CRISPR technology. Building RegComplyAI as part of coursework.',
    highlights: [
      'Venture Creation Project: RegComplyAI',
      'Coursework: Regulatory Affairs, Bioinformatics, CRISPR',
      'STEM Fellows Scholarship Recipient 2025',
    ],
  },
  {
    type: 'work',
    title: 'Founder & Lead Developer',
    organization: 'RegComplyAI',
    location: 'New York, NY',
    period: 'Aug 2025 - Present',
    description: 'Architecting production-level full-stack application to automate FDA regulatory compliance workflows for biotech startups.',
    highlights: [
      'Built RAG pipeline parsing 500+ FDA documents',
      'Reduced compliance research time by 60%',
      'MERN stack with Python NLP integration',
    ],
  },
  {
    type: 'work',
    title: 'Co-Founder & Software Developer',
    organization: 'Education-24',
    location: 'Lusaka, Zambia',
    period: 'Sep 2021 - Present',
    description: 'Co-founded nonprofit providing free college access support to high-achieving, low-income students across Southern Africa.',
    highlights: [
      'Secured $2M+ in scholarships for students',
      'Built full-stack platform for student outreach',
      'Established US university partnerships',
    ],
  },
  {
    type: 'education',
    title: 'Bachelor of Pharmacy',
    organization: 'Marwadi University',
    location: 'Gujarat, India',
    period: 'Graduated May 2024',
    description: 'GPA: 3.87. Comprehensive pharmaceutical education. Published research on AI/ML applications in drug discovery in Modern Approaches in Drug Discovery.',
    highlights: [
      'Publication: AI and ML in Drug Discovery',
      'Government of India Scholarship 2021',
      'Pharmacology & Regulatory Sciences',
    ],
  },
];

const achievements = [
  {
    title: 'STEM Fellows Scholarship',
    description: 'Yeshiva University 2025',
    icon: Award,
  },
  {
    title: 'Published Researcher',
    description: 'AI/ML in Drug Discovery',
    icon: GraduationCap,
  },
  {
    title: 'Harvard Biotech Club',
    description: 'Active participant in webinars',
    icon: Building2,
  },
];

export default function Experience() {
  return (
    <section id="experience" className="py-16 sm:py-24 lg:py-32 relative">
      <div className="absolute top-0 right-0 w-48 sm:w-96 h-48 sm:h-96 bg-warm/5 rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mb-10 sm:mb-16">
          <p className="text-accent font-mono text-xs sm:text-sm tracking-wider uppercase mb-3 sm:mb-4">
            Background
          </p>
          <h2 className="section-heading text-ivory mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl">
            Experience & Education
          </h2>
          <p className="text-base sm:text-lg text-silver">
            My journey from pharmaceutical sciences to software development, 
            with stops along the way that shaped my unique perspective.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8 sm:gap-12">
          {/* Timeline */}
          <div className="lg:col-span-2">
            <div className="relative">
              {/* Timeline line */}
              <div className="absolute left-4 sm:left-8 top-0 bottom-0 w-px bg-gradient-to-b from-accent via-slate to-transparent" />

              <div className="space-y-8 sm:space-y-12">
                {experiences.map((exp, index) => (
                  <div key={index} className="relative pl-10 sm:pl-20">
                    {/* Timeline dot */}
                    <div className="absolute left-2 sm:left-6 top-2 w-4 h-4 rounded-full bg-midnight border-2 border-accent" />
                    
                    {/* Content */}
                    <div className="glass-card p-4 sm:p-6 card-lift">
                      <div className="flex flex-col sm:flex-row sm:flex-wrap sm:items-start sm:justify-between gap-2 sm:gap-4 mb-3 sm:mb-4">
                        <div>
                          <span className={`inline-block px-2 py-1 text-xs font-mono rounded mb-2 ${
                            exp.type === 'education' 
                              ? 'text-warm bg-warm/10' 
                              : 'text-accent bg-accent/10'
                          }`}>
                            {exp.type === 'education' ? 'Education' : 'Experience'}
                          </span>
                          <h3 className="font-display text-lg sm:text-xl font-semibold text-ivory">
                            {exp.title}
                          </h3>
                          <p className="text-accent text-sm sm:text-base">{exp.organization}</p>
                        </div>
                        <div className="sm:text-right">
                          <p className="text-silver text-xs sm:text-sm">{exp.period}</p>
                          <p className="text-steel text-xs sm:text-sm">{exp.location}</p>
                        </div>
                      </div>
                      
                      <p className="text-silver mb-3 sm:mb-4 leading-relaxed text-sm sm:text-base">
                        {exp.description}
                      </p>

                      <ul className="space-y-1 sm:space-y-2">
                        {exp.highlights.map((highlight, i) => (
                          <li key={i} className="flex items-start gap-2 text-xs sm:text-sm text-silver">
                            <span className="text-accent mt-1">▹</span>
                            {highlight}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Achievements sidebar */}
          <div className="space-y-4 sm:space-y-6">
            <h3 className="font-display text-lg sm:text-xl font-bold text-ivory mb-4 sm:mb-6">
              Achievements & Activities
            </h3>
            
            {achievements.map((achievement, index) => (
              <div
                key={index}
                className="glass-card p-4 sm:p-5 card-lift"
              >
                <div className="flex items-start gap-3 sm:gap-4">
                  <div className="w-9 h-9 sm:w-10 sm:h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <achievement.icon className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-ivory mb-1 text-sm sm:text-base">
                      {achievement.title}
                    </h4>
                    <p className="text-silver text-xs sm:text-sm">
                      {achievement.description}
                    </p>
                  </div>
                </div>
              </div>
            ))}

            {/* Resume download */}
            <div className="glass-card p-4 sm:p-6 text-center">
              <p className="text-silver mb-3 sm:mb-4 text-sm sm:text-base">
                Want the full picture?
              </p>
              <a href="/resume.pdf" className="btn-primary w-full justify-center text-sm sm:text-base">
                <span>Download Resume</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}