'use client';

import React from 'react';

export default function HeroTemplate({ section }) {
  return (
    <section className="relative py-20 px-4 overflow-hidden" role="banner" aria-label="Hero Section">
      {section.backgroundImage && (
        <div 
          className="absolute inset-0 bg-cover bg-center bg-no-repeat"
          style={{ backgroundImage: `url(${section.backgroundImage})` }}
        />
      )}
      <div className={`absolute inset-0 ${section.backgroundImage ? 'bg-black/40' : 'bg-gradient-to-r from-blue-600/20 to-purple-600/20'}`}></div>
      <div className="container mx-auto text-center relative z-10">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-6 md:mb-8 leading-tight">
            {section.title}
            {section.subtitle && (
              <span className="text-orange-500 block">{section.subtitle}</span>
            )}
          </h2>
          {section.description && (
            <p className="text-lg md:text-2xl text-white mb-8 md:mb-12 leading-relaxed">
              {section.description}
            </p>
          )}
          {section.ctaButtons && (
            <div className="flex flex-col sm:flex-row gap-4 md:gap-6 justify-center">
              {section.ctaButtons.map((button, index) => (
                <a
                  key={index}
                  href={button.link}
                  className={`px-6 md:px-10 py-3 md:py-4 rounded-full font-bold text-lg md:text-xl transition-all duration-300 shadow-2xl transform hover:scale-105 flex items-center justify-center space-x-2 md:space-x-3 ${
                    button.primary 
                      ? 'bg-blue-500 text-white hover:bg-blue-600 hover:shadow-blue-500/50' 
                      : 'bg-white text-gray-800 hover:bg-gray-100 hover:shadow-white/50'
                  }`}
                >
                  <span>{button.text}</span>
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
