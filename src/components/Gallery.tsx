'use client';

import { useState } from 'react';
import Image from 'next/image';
import { X, MapPin, Calendar } from 'lucide-react';

const photos = [
  {
    id: 1,
    src: '/gallery/photo1.jpeg',
    alt: 'Francis at a tech conference',
    caption: 'Speaking at a biotech meetup',
    location: 'New York, NY',
    date: '2025',
  },
  {
    id: 2,
    src: '/gallery/photo2.jpg',
    alt: 'Francis working on a project',
    caption: 'Late night coding session',
    location: 'Yeshiva University',
    date: '2025',
  },
  {
    id: 3,
    src: '/gallery/photo3.jpg',
    alt: 'Francis traveling',
    caption: 'Exploring new places',
    location: 'Adventure Mode',
    date: '2024',
  },
  {
    id: 4,
    src: '/gallery/photo4.jpg',
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
              {/* Photo */}
              <div className={`w-full relative bg-slate ${
                index === 0 ? 'aspect-square' : 'aspect-square'
              }`}>
                <Image 
                  src={photo.src} 
                  alt={photo.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes={index === 0 ? '(max-width: 768px) 100vw, 50vw' : '(max-width: 768px) 50vw, 25vw'}
                />
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
            className="absolute top-4 right-4 sm:top-6 sm:right-6 p-2 text-silver hover:text-ivory transition-colors z-10"
            onClick={() => setSelectedPhoto(null)}
          >
            <X size={28} />
          </button>
          
          <div 
            className="max-w-4xl w-full"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Full size image */}
            <div className="relative w-full aspect-[4/3] sm:aspect-video rounded-xl sm:rounded-2xl overflow-hidden mb-4">
              <Image 
                src={selectedPhoto.src} 
                alt={selectedPhoto.alt}
                fill
                className="object-contain"
                sizes="(max-width: 1024px) 100vw, 80vw"
                priority
              />
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
