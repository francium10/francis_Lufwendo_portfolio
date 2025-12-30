'use client';

import { 
  Code2, 
  Database, 
  Cloud, 
  Beaker, 
  Brain, 
  Wrench,
  Pill,
  FileText,
  Users
} from 'lucide-react';

const skillCategories = [
  {
    title: 'Frontend Development',
    icon: Code2,
    skills: ['React', 'Next.js', 'TypeScript', 'Tailwind CSS', 'HTML/CSS', 'JavaScript'],
    color: 'accent',
  },
  {
    title: 'Backend Development',
    icon: Database,
    skills: ['Node.js', 'Express.js', 'Flask', 'Python', 'PostgreSQL', 'MongoDB', 'MySQL'],
    color: 'warm',
  },
  {
    title: 'Cloud & DevOps',
    icon: Cloud,
    skills: ['AWS', 'Docker', 'Git/GitHub', 'RESTful APIs', 'ElasticSearch', 'Agile/Scrum'],
    color: 'accent',
  },
  {
    title: 'AI & Data Science',
    icon: Brain,
    skills: ['PyTorch', 'TensorFlow', 'LangChain', 'RAG Systems', 'NLP', 'LLM Fine-tuning', 'Pandas'],
    color: 'warm',
  },
  {
    title: 'Pharmaceutical Sciences',
    icon: Pill,
    skills: ['FDA Regulatory Affairs', 'Clinical Research', 'Drug Development', 'Biotech R&D', 'GxP Compliance'],
    color: 'accent',
  },
  {
    title: 'Biotechnology',
    icon: Beaker,
    skills: ['CRISPR', 'Bioinformatics', 'Gene Therapy', 'Molecular Biology', 'Regulatory Affairs'],
    color: 'warm',
  },
];

const tools = [
  'VS Code', 'Figma', 'Postman', 'GitHub', 'Jira', 'Notion', 
  'Slack', 'ChatGPT/Claude', 'Excel/Sheets', 'Tableau'
];

const softSkills = [
  {
    icon: Users,
    title: 'Cross-functional Communication',
    description: 'Bridging technical and business stakeholders',
  },
  {
    icon: FileText,
    title: 'Technical Writing',
    description: 'Documentation, research papers, and proposals',
  },
  {
    icon: Wrench,
    title: 'Problem Solving',
    description: 'Breaking down complex challenges systematically',
  },
];

export default function Skills() {
  return (
    <section id="skills" className="py-32 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-accent/5 rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mb-16">
          <p className="text-accent font-mono text-sm tracking-wider uppercase mb-4">
            Capabilities
          </p>
          <h2 className="section-heading text-ivory mb-6">
            Skills & Expertise
          </h2>
          <p className="text-lg text-silver">
            A unique blend of pharmaceutical domain knowledge and modern software 
            development skills, positioned at the intersection of biotech and tech.
          </p>
        </div>

        {/* Skills grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {skillCategories.map((category, index) => (
            <div
              key={category.title}
              className="glass-card p-6 card-lift group"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className={`w-10 h-10 rounded-lg flex items-center justify-center ${
                  category.color === 'accent' 
                    ? 'bg-accent/10 text-accent' 
                    : 'bg-warm/10 text-warm'
                }`}>
                  <category.icon className="w-5 h-5" />
                </div>
                <h3 className="font-display text-lg font-semibold text-ivory">
                  {category.title}
                </h3>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <span
                    key={skill}
                    className="px-3 py-1.5 text-sm font-mono text-silver bg-slate/50 rounded-lg hover:bg-accent/20 hover:text-accent transition-colors cursor-default"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Tools & Soft Skills */}
        <div className="grid lg:grid-cols-2 gap-8">
          {/* Tools */}
          <div className="glass-card p-8">
            <h3 className="font-display text-xl font-bold text-ivory mb-6">
              Tools I Use Daily
            </h3>
            <div className="flex flex-wrap gap-3">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className="px-4 py-2 text-sm font-medium text-silver border border-slate/50 rounded-full hover:border-accent hover:text-accent transition-colors"
                >
                  {tool}
                </span>
              ))}
            </div>
          </div>

          {/* Soft Skills */}
          <div className="glass-card p-8">
            <h3 className="font-display text-xl font-bold text-ivory mb-6">
              What Sets Me Apart
            </h3>
            <div className="space-y-4">
              {softSkills.map((skill) => (
                <div key={skill.title} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <skill.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-display font-semibold text-ivory mb-1">
                      {skill.title}
                    </h4>
                    <p className="text-silver text-sm">
                      {skill.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Target roles */}
        <div className="mt-16 text-center">
          <p className="text-silver mb-4">Looking for opportunities as</p>
          <div className="flex flex-wrap justify-center gap-4">
            {['Technical Evangelist', 'Developer Advocate', 'Solutions Engineer', 'Product Manager'].map((role) => (
              <span
                key={role}
                className="px-5 py-2 font-display font-medium text-accent border border-accent/30 rounded-full bg-accent/5"
              >
                {role}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
