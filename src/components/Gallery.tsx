'use client';

import { useState } from 'react';
import { X, MapPin, Calendar } from 'lucide-react';

const photos = [
  {
    id: 1,
    src: '/public/photo1.jpg',
    alt: 'Francis at a tech conference',
    caption: 'Speaking at a biotech meetup',
    location: 'New York, NY',
    date: '2025',
  },
  {
    id: 2,
    src: '/public/photo2.jpg',
    alt: 'Francis working on a project',
    caption: 'Late night coding session',
    location: 'Yeshiva University',
    date: '2025',
  },
  {
    id: 3,
    src: '/public/photo3.jpg',
    alt: 'Francis traveling',
    caption: 'Exploring new places',
    location: 'Adventure Mode',
    date: '2024',
  },
  {
    id: 4,
    src: '/public/photo4.jpg',
    alt: 'Francis with team',
    caption: 'Building something great',
    location: 'Team Vibes',
    date: '2024',
  },
];

export default function Gallery() {
  const [selectedPhoto, setSelectedPhoto] = useState<typeof photos[0] | null>(null);

  return (
    <section id="gallery" className="py-16 sm:py-24 lg:py-32 relative overflow-hidden">
      <div className="absolute bottom-0 left-1/4 w-48 sm:w-96 h-48 sm:h-96 bg-accent/5 rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="max-w-3xl mb-10 sm:mb-16">
          <p className="text-accent font-mono text-xs sm:text-sm tracking-wider uppercase mb-3 sm:mb-4">
            Beyond The Code
          </p>
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-display font-bold tracking-tight text-ivory mb-4 sm:mb-6">
            Life in Frames
          </h2>
          <p className="text-base sm:text-lg text-silver">
            A glimpse into my world beyond the terminal — conferences, travels, 
            and the moments that matter.
          </p>
        </div>

        {/* Photo grid */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4">
          {photos.map((photo, index) => (
            <div
              key={photo.id}
              onClick={() => setSelectedPhoto(photo)}
              className={`relative group cursor-pointer overflow-hidden rounded-xl sm:rounded-2xl ${
                index === 0 ? 'col-span-2 row-span-2' : ''
              }`}
            >
              {/* Photo placeholder - replace with actual images */}
              <div className={`w-full bg-gradient-to-br from-slate to-navy ${
                index === 0 ? 'aspect-square' : 'aspect-square'
              }`}>
                {/* Placeholder content */}
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="text-silver/30 font-display text-sm sm:text-base text-center px-4">
                    {photo.caption}
                  </span>
                </div>
                
                {/* Uncomment when you add real images */}
                {/* <img 
                  src={photo.src} 
                  alt={photo.alt}
                  className="w-full h-full object-cover"
                /> */}
              </div>
              
              {/* Hover overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-midnight via-midnight/50 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-300 flex flex-col justify-end p-3 sm:p-4">
                <p className="text-ivory font-medium text-sm sm:text-base mb-1">
                  {photo.caption}
                </p>
                <div className="flex items-center gap-2 text-silver text-xs sm:text-sm">
                  <MapPin size={12} />
                  <span>{photo.location}</span>
                </div>
              </div>

              {/* Glow effect on hover */}
              <div className="absolute -inset-1 bg-gradient-to-r from-accent/20 to-warm/20 rounded-2xl blur opacity-0 group-hover:opacity-100 transition-opacity duration-300 -z-10" />
            </div>
          ))}
        </div>

        {/* Fun fact */}
        <div className="mt-10 sm:mt-12 text-center">
          <p className="text-silver text-sm sm:text-base">
            🌍 <span className="text-ivory">5 languages</span> spoken · 
            <span className="text-ivory"> Always exploring</span> new places and ideas
          </p>
        </div>
      </div>

      {/* Lightbox Modal */}
      {selectedPhoto && (
        <div 
          className="fixed inset-0 z-50 bg-midnight/95 backdrop-blur-xl flex items-center justify-center p-4"
          onClick={() => setSelectedPhoto(null)}
        >
          <button 
            className="absolute top-4 right-4 p-2 text-silver hover:text-ivory transition-colors"
            onClick={() => setSelectedPhoto(null)}
          >
            <X size={24} />
          </button>
          
          <div 
            className="max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Image placeholder */}
            <div className="w-full aspect-video bg-gradient-to-br from-slate to-navy rounded-xl sm:rounded-2xl mb-4 flex items-center justify-center">
              <span className="text-silver/50 font-display text-lg">
                {selectedPhoto.caption}
              </span>
              
              {/* Uncomment when you add real images */}
              {/* <img 
                src={selectedPhoto.src} 
                alt={selectedPhoto.alt}
                className="w-full h-full object-contain rounded-2xl"
              /> */}
            </div>
            
            <div className="text-center">
              <h3 className="font-display text-xl sm:text-2xl font-bold text-ivory mb-2">
                {selectedPhoto.caption}
              </h3>
              <div className="flex items-center justify-center gap-4 text-silver text-sm">
                <span className="flex items-center gap-1">
                  <MapPin size={14} />
                  {selectedPhoto.location}
                </span>
                <span className="flex items-center gap-1">
                  <Calendar size={14} />
                  {selectedPhoto.date}
                </span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}