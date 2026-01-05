'use client';

import { useState } from 'react';
import { Mail, Linkedin, Github, MapPin, Send, ArrowUpRight } from 'lucide-react';

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });
  };

  const socials = [
    {
      name: 'Email',
      value: 'flufwendo@mail.yu.edu',
      href: 'mailto:flufwendo@mail.yu.edu',
      icon: Mail,
    },
    {
      name: 'LinkedIn',
      value: 'francis-lufwendo',
      href: 'https://www.linkedin.com/in/francis-lufwendo',
      icon: Linkedin,
    },
    {
      name: 'GitHub',
      value: 'francium10',
      href: 'https://github.com/francium10',
      icon: Github,
    },
  ];

  return (
    <section id="contact" className="py-16 sm:py-24 lg:py-32 relative">
      {/* Background elements */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] sm:w-[600px] h-[300px] sm:h-[600px] bg-accent/5 rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-16">
          <p className="text-accent font-mono text-xs sm:text-sm tracking-wider uppercase mb-3 sm:mb-4">
            Get In Touch
          </p>
          <h2 className="section-heading text-ivory mb-4 sm:mb-6 text-3xl sm:text-4xl md:text-5xl">
            Let's Build Something Together
          </h2>
          <p className="text-base sm:text-lg text-silver px-4">
            I'm actively seeking a software or biotech Summer 2026 internship.Let's connect!
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-6 sm:gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Contact info */}
          <div className="space-y-4 sm:space-y-8">
            <div className="glass-card p-4 sm:p-8">
              <h3 className="font-display text-lg sm:text-xl font-bold text-ivory mb-4 sm:mb-6">
                Contact Information
              </h3>
              
              <div className="space-y-4 sm:space-y-6">
                {socials.map((social) => (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-3 sm:gap-4 group"
                  >
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-accent/10 flex items-center justify-center group-hover:bg-accent/20 transition-colors flex-shrink-0">
                      <social.icon className="w-4 h-4 sm:w-5 sm:h-5 text-accent" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="text-silver text-xs sm:text-sm">{social.name}</p>
                      <p className="text-ivory font-medium group-hover:text-accent transition-colors text-sm sm:text-base truncate">
                        {social.value}
                      </p>
                    </div>
                    <ArrowUpRight className="w-4 h-4 text-steel opacity-0 group-hover:opacity-100 transition-opacity flex-shrink-0" />
                  </a>
                ))}
              </div>

              <div className="mt-6 sm:mt-8 pt-4 sm:pt-6 border-t border-slate/30">
                <div className="flex items-center gap-3 text-silver text-sm sm:text-base">
                  <MapPin className="w-4 h-4 sm:w-5 sm:h-5 text-accent flex-shrink-0" />
                  <span>New York / New Jersey Area</span>
                </div>
              </div>
            </div>

            {/* Quick CTA */}
            <div className="glass-card p-4 sm:p-6 text-center">
              <p className="text-silver mb-3 sm:mb-4 text-sm sm:text-base">
                Prefer to schedule a call?
              </p>
              <a 
                href="https://meet.google.com/new" 
                target="_blank"
                rel="noopener noreferrer"
                className="btn-secondary inline-flex text-sm sm:text-base"
              >
                Schedule a Google Meet
              </a>
            </div>
          </div>

          {/* Contact form */}
          <div className="glass-card p-4 sm:p-8">
            <h3 className="font-display text-lg sm:text-xl font-bold text-ivory mb-4 sm:mb-6">
              Send a Message
            </h3>

            {submitted ? (
              <div className="text-center py-8 sm:py-12">
                <div className="w-12 h-12 sm:w-16 sm:h-16 mx-auto mb-3 sm:mb-4 rounded-full bg-accent/20 flex items-center justify-center">
                  <Send className="w-6 h-6 sm:w-8 sm:h-8 text-accent" />
                </div>
                <h4 className="font-display text-lg sm:text-xl font-semibold text-ivory mb-2">
                  Message Sent!
                </h4>
                <p className="text-silver text-sm sm:text-base">
                  Thanks for reaching out. I'll get back to you soon!
                </p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-6">
                <div>
                  <label htmlFor="name" className="block text-xs sm:text-sm font-medium text-silver mb-1.5 sm:mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-slate/50 border border-slate/50 rounded-xl text-ivory placeholder:text-steel focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors text-sm sm:text-base"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-xs sm:text-sm font-medium text-silver mb-1.5 sm:mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    required
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-slate/50 border border-slate/50 rounded-xl text-ivory placeholder:text-steel focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors text-sm sm:text-base"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs sm:text-sm font-medium text-silver mb-1.5 sm:mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={4}
                    className="w-full px-3 sm:px-4 py-2.5 sm:py-3 bg-slate/50 border border-slate/50 rounded-xl text-ivory placeholder:text-steel focus:outline-none focus:border-accent focus:ring-1 focus:ring-accent transition-colors resize-none text-sm sm:text-base"
                    placeholder="Tell me about your opportunity or project..."
                  />
                </div>

                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="btn-primary w-full justify-center disabled:opacity-50 disabled:cursor-not-allowed text-sm sm:text-base"
                >
                  <span>{isSubmitting ? 'Sending...' : 'Send Message'}</span>
                  <Send size={16} />
                </button>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
