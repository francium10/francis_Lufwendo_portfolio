'use client';

import { ExternalLink, Github, ArrowUpRight } from 'lucide-react';

const projects = [
  {
    title: 'RegComplyAI',
    description: 'AI-powered FDA regulatory compliance platform for biotech startups. Features document analysis, compliance checking, and regulatory guidance using machine learning.',
    longDescription: 'Built as part of my venture creation coursework, RegComplyAI helps early-stage biotech companies navigate the complex FDA approval process. Implemented RAG pipeline using LangChain and OpenAI to parse 500+ FDA documents, reducing compliance research time by 60%.',
    tech: ['React', 'Node.js', 'Python', 'LangChain', 'OpenAI', 'MongoDB'],
    image: 'projects/regcomplyai.png',
    liveUrl: 'https://regcomplyai.org',
    githubUrl: 'https://github.com/francium10/regcomplyai',
    featured: true,
    category: 'AI/ML',
  },
  {
    title: 'Education-24 Platform',
    description: 'Scholarship management platform that has helped secure over $2M in educational funding for students across Southern Africa. Co-founded nonprofit initiative.',
    longDescription: 'Co-founded initiative providing free college access support to high-achieving, low-income students. Built and maintained full-stack web platform enabling scalable student outreach and application tracking.',
    tech: ['React', 'Express', 'PostgreSQL', 'Node.js', 'Tailwind'],
    image: 'projects/education24.png',
    liveUrl: 'https://education-24.com',
    githubUrl: 'https://github.com/francium10/education-24',
    featured: true,
    category: 'Social Impact',
  },
  {
    title: 'ESAWAS Data Visualization',
    description: 'Full-stack data visualization platform processing large-scale datasets for regional water & sanitation infrastructure analysis in Zambia.',
    longDescription: 'Built comprehensive data visualization solution for the Eastern and Southern Africa Water and Sanitation organization, enabling stakeholders to analyze infrastructure metrics across regions using Python, React, and SQL databases.',
    tech: ['Python', 'React', 'SQL', 'D3.js', 'PostgreSQL'],
    image: 'projects/esawas.png',
    liveUrl: 'https://esawas.org',
    githubUrl: 'https://github.com/francium10/esawas',
    featured: true,
    category: 'Data Viz',
  },
  {
    title: 'Drug Discovery ML Research',
    description: 'Published research on machine learning applications in pharmaceutical drug discovery, exploring neural network architectures for molecular property prediction.',
    longDescription: 'Co-authored publication in Modern Approaches in Drug Discovery exploring AI and machine learning applications in pharmaceutical R&D.',
    tech: ['Python', 'PyTorch', 'TensorFlow', 'scikit-learn', 'Pandas'],
    image: '/projects/drugml.png',
    githubUrl: 'https://github.com/francium10',
    featured: false,
    category: 'Research',
  },
  {
    title: 'Clinical Trial Tracker',
    description: 'Web application for monitoring clinical trial progress, patient enrollment, and milestone tracking.',
    tech: ['Next.js', 'TypeScript', 'Prisma', 'tRPC', 'PostgreSQL'],
    image: '/projects/clinicaltrial.png',
    githubUrl: 'https://github.com/francium10',
    featured: false,
    category: 'Healthcare',
  },
  {
    title: 'Pharma Supply Chain',
    description: 'Blockchain-based solution prototype for tracking pharmaceutical supply chain integrity.',
    tech: ['Solidity', 'React', 'Ethers.js', 'Hardhat', 'IPFS'],
    image: '/projects/supplychain.png',
    githubUrl: 'https://github.com/francium10',
    featured: false,
    category: 'Blockchain',
  },
];

export default function Projects() {
  const featuredProjects = projects.filter(p => p.featured);
  const otherProjects = projects.filter(p => !p.featured);

  return (
    <section id="projects" className="py-16 sm:py-24 lg:py-32 relative">
      {/* Background accent */}
      <div className="absolute top-1/2 left-0 w-48 sm:w-96 h-48 sm:h-96 bg-accent/5 rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mb-10 sm:mb-16">
          <p className="text-accent font-mono text-xs sm:text-sm tracking-wider uppercase mb-3 sm:mb-4">
            Featured Work
          </p>
          <h2 className="section-heading text-ivory mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl">
            Projects & Creations
          </h2>
          <p className="text-base sm:text-lg text-silver">
            A selection of projects that showcase my work at the intersection of 
            biotechnology and software development.
          </p>
        </div>

        {/* Featured projects */}
        <div className="space-y-12 sm:space-y-16 lg:space-y-24 mb-12 sm:mb-16 lg:mb-24">
          {featuredProjects.map((project, index) => (
            <div
              key={project.title}
              className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 items-center"
            >
              {/* Project image placeholder */}
              <div className={`${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <div className="relative group">
                  <div className="absolute -inset-2 sm:-inset-4 bg-gradient-to-r from-accent/20 to-warm/20 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  <div className="relative glass-card overflow-hidden rounded-xl aspect-video">
                    {/* Placeholder gradient - replace with actual images */}
                    <div className="absolute inset-0 bg-gradient-to-br from-slate to-navy" />
                    <div className="absolute inset-0 flex items-center justify-center">
                      <span className="font-display text-lg sm:text-xl lg:text-2xl text-silver/50 px-4 text-center">
                        {project.title}
                      </span>
                    </div>
                    {/* Hover overlay */}
                    <div className="absolute inset-0 bg-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                      <div className="flex gap-3 sm:gap-4">
                        {project.liveUrl && (
                          <a
                            href={project.liveUrl}
                            className="p-2 sm:p-3 bg-ivory rounded-full text-midnight hover:scale-110 transition-transform"
                            aria-label="View live site"
                          >
                            <ExternalLink size={18} />
                          </a>
                        )}
                        {project.githubUrl && (
                          <a
                            href={project.githubUrl}
                            className="p-2 sm:p-3 bg-ivory rounded-full text-midnight hover:scale-110 transition-transform"
                            aria-label="View source code"
                          >
                            <Github size={18} />
                          </a>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Project info */}
              <div className={`${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <span className="inline-block px-2 sm:px-3 py-1 text-xs font-mono text-accent bg-accent/10 rounded-full mb-3 sm:mb-4">
                  {project.category}
                </span>
                <h3 className="font-display text-2xl sm:text-3xl font-bold text-ivory mb-3 sm:mb-4">
                  {project.title}
                </h3>
                <p className="text-silver mb-4 sm:mb-6 leading-relaxed text-sm sm:text-base">
                  {project.longDescription || project.description}
                </p>
                
                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mb-4 sm:mb-6">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-2 sm:px-3 py-1 text-xs sm:text-sm font-mono text-silver bg-slate/50 rounded-lg"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex flex-wrap gap-4">
                  {project.liveUrl && (
                    <a
                      href={project.liveUrl}
                      className="inline-flex items-center gap-2 text-accent hover:text-accent-light transition-colors text-sm sm:text-base"
                    >
                      <span>Live Demo</span>
                      <ArrowUpRight size={16} />
                    </a>
                  )}
                  {project.githubUrl && (
                    <a
                      href={project.githubUrl}
                      className="inline-flex items-center gap-2 text-silver hover:text-ivory transition-colors text-sm sm:text-base"
                    >
                      <Github size={16} />
                      <span>Source Code</span>
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Other projects grid */}
        <div>
          <h3 className="font-display text-xl sm:text-2xl font-bold text-ivory mb-6 sm:mb-8">
            Other Notable Projects
          </h3>
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {otherProjects.map((project) => (
              <div
                key={project.title}
                className="glass-card glow-border p-4 sm:p-6 card-lift group"
              >
                <div className="flex items-start justify-between mb-3 sm:mb-4">
                  <span className="text-xs font-mono text-accent bg-accent/10 px-2 py-1 rounded">
                    {project.category}
                  </span>
                  <div className="flex gap-2">
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        className="text-silver hover:text-accent transition-colors"
                        aria-label="View source"
                      >
                        <Github size={16} />
                      </a>
                    )}
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        className="text-silver hover:text-accent transition-colors"
                        aria-label="View live"
                      >
                        <ExternalLink size={16} />
                      </a>
                    )}
                  </div>
                </div>
                <h4 className="font-display text-lg sm:text-xl font-semibold text-ivory mb-2 sm:mb-3 group-hover:text-accent transition-colors">
                  {project.title}
                </h4>
                <p className="text-silver text-xs sm:text-sm mb-3 sm:mb-4 leading-relaxed">
                  {project.description}
                </p>
                <div className="flex flex-wrap gap-2">
                  {project.tech.slice(0, 4).map((tech) => (
                    <span
                      key={tech}
                      className="text-xs font-mono text-steel"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
