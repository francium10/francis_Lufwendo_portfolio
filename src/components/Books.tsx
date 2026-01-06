'use client';

import Image from 'next/image';

const books = [
  {
    title: 'The Alchemist',
    author: 'Paulo Coelho',
    image: '/books/alchemist.jpg',
    why: 'A reminder that the journey matters more than the destination. Shaped how I approach my unconventional path from pharmacy to tech.',
    color: 'from-amber-500/20 to-orange-500/20',
  },
  {
    title: 'The Subtle Art of Not Giving a F*ck',
    author: 'Mark Manson',
    image: '/books/subtle-art.jpg',
    why: 'Taught me to focus energy on what truly matters and let go of the rest. Essential for startup life.',
    color: 'from-red-500/20 to-pink-500/20',
  },
  {
    title: 'Born a Crime',
    author: 'Trevor Noah',
    image: '/books/born-a-crime.jpg',
    why: 'A powerful story of resilience and identity. As someone who moved continents, this hit home.',
    color: 'from-cyan-500/20 to-blue-500/20',
  },
  {
    title: 'Everything Is F*cked',
    author: 'Mark Manson',
    image: '/books/everything-is-fcked.jpg',
    why: 'A deep dive into hope, meaning, and what drives us. Changed how I think about motivation.',
    color: 'from-purple-500/20 to-indigo-500/20',
  },
  {
    title: 'Spud',
    author: 'John van de Ruit',
    image: '/books/spud.jpg',
    why: 'Pure nostalgia. A hilarious coming-of-age story that reminds me not to take life too seriously.',
    color: 'from-green-500/20 to-emerald-500/20',
  },
  {
    title: 'The Way of the Superior Man',
    author: 'David Deida',
    image: '/books/superior-man.jpg',
    why: 'Insights on purpose, relationships, and living with intention. A book I revisit often.',
    color: 'from-slate-500/20 to-zinc-500/20',
  },
];

export default function Books() {
  return (
    <section id="books" className="py-16 sm:py-24 lg:py-32 relative">
      <div className="absolute top-1/2 right-0 w-48 sm:w-96 h-48 sm:h-96 bg-warm/5 rounded-full blur-3xl -translate-y-1/2" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mb-10 sm:mb-16">
          <p className="text-accent font-mono text-xs sm:text-sm tracking-wider uppercase mb-3 sm:mb-4">
            Bookshelf
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-ivory mb-4 sm:mb-6">
            Books That Shaped Me
          </h2>
          <p className="text-base sm:text-lg text-silver">
            Reading has been a constant companion through my journey. These books 
            have influenced how I think, build, and navigate life.
          </p>
        </div>

        {/* Books grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
          {books.map((book, index) => (
            <div
              key={book.title}
              className="glass-card p-4 sm:p-6 card-lift group"
            >
              {/* Book cover */}
              <div className={`w-full aspect-[3/4] rounded-lg bg-gradient-to-br ${book.color} mb-4 relative overflow-hidden`}>
                {/* Fallback gradient background */}
                <div className="absolute inset-0 bg-midnight/20" />
                
                {/* Book spine effect */}
                <div className="absolute left-0 top-0 bottom-0 w-2 sm:w-3 bg-black/30" />
                
                {/* Actual book cover image */}
                <img
                  src={book.image}
                  alt={`${book.title} by ${book.author}`}
                  className="absolute inset-0 w-full h-full object-cover rounded-lg"
                  onError={(e) => {
                    // Hide image on error, fallback gradient will show
                    (e.target as HTMLImageElement).style.display = 'none';
                  }}
                />
                
                {/* Fallback text (shows if image fails) */}
                <div className="absolute inset-0 flex items-center justify-center p-4">
                  <span className="text-ivory/30 font-display text-sm text-center">
                    {book.title}
                  </span>
                </div>
              </div>
              
              <h3 className="font-display text-base sm:text-lg font-semibold text-ivory mb-1 group-hover:text-accent transition-colors">
                {book.title}
              </h3>
              <p className="text-accent text-xs sm:text-sm mb-2 sm:mb-3">
                {book.author}
              </p>
              <p className="text-silver text-xs sm:text-sm leading-relaxed">
                {book.why}
              </p>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-10 sm:mt-12 text-center">
          <p className="text-silver text-sm sm:text-base">
            Always open to recommendations! <a href="#contact" className="text-accent hover:text-accent-light transition-colors">Send me your favorites →</a>
          </p>
        </div>
      </div>
    </section>
  );
}
