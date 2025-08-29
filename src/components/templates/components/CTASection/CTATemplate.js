'use client';

import React from 'react';

export default function CTATemplate({ section }) {
  return (
    <section className="py-16 px-4 bg-gradient-to-r from-lime-50 to-green-50" role="region" aria-label="Call to Action">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">{section.title}</h2>
          {section.subtitle && (
            <p className="text-xl text-gray-600 mb-8">{section.subtitle}</p>
          )}
          {section.buttonText && (
            <a
              href={section.buttonLink || '#contact'}
              className="inline-block bg-lime-500 text-white px-8 py-4 rounded-full text-xl font-bold hover:bg-lime-600 transition-all duration-300 shadow-2xl hover:shadow-lime-500/50 transform hover:scale-105"
            >
              {section.buttonText}
            </a>
          )}
        </div>
      </div>
    </section>
  );
}
