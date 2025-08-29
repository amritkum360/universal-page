'use client';

import Image from 'next/image';
import React from 'react';

export default function GalleryTemplate({ section }) {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-teal-50 to-cyan-50" role="region" aria-label="Gallery">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">{section.title}</h2>
            {section.subtitle && (
              <p className="text-xl text-gray-600">{section.subtitle}</p>
            )}
          </div>
          {section.images && (
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                             {section.images.map((image, index) => (
                 <div key={index} className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-xl transition-all duration-300 transform hover:scale-105">
                   {image.image ? (
                     <div className="h-48 overflow-hidden">
                       <Image
                         src={image.image}
                         alt={image.title || 'Gallery image'}
                         className="w-full h-full object-cover"
                         onError={(e) => {
                           e.target.style.display = 'none';
                           e.target.nextSibling.style.display = 'flex';
                         }}
                       />
                       <div className="w-full h-full bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center" style={{display: 'none'}}>
                         <span className="text-4xl">🖼️</span>
                       </div>
                     </div>
                   ) : (
                     <div className="h-48 bg-gradient-to-br from-teal-400 to-cyan-500 flex items-center justify-center">
                       <span className="text-4xl">🖼️</span>
                     </div>
                   )}
                   <div className="p-4">
                     <h3 className="font-semibold text-gray-800">{image.title}</h3>
                     {image.description && (
                       <p className="text-sm text-gray-600 mt-1">{image.description}</p>
                     )}
                   </div>
                 </div>
               ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
