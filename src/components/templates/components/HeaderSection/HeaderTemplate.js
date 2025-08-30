'use client';

import React from 'react';
import Image from 'next/image';

export default function HeaderTemplate({ section, businessName, tagline }) {
  return (
    <header className="bg-white/90 backdrop-blur-md shadow-xl sticky top-0 z-40" role="banner">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-4">
            {section.logo && (
              <Image 
                src={section.logo} 
                alt={businessName} 
                width={48}
                height={48}
                className="w-12 h-12 object-contain" 
              />
            )}
            <div>
              <h1 className="text-xl font-bold text-gray-800">{businessName}</h1>
              {tagline && (
                <p className="text-sm text-gray-600">{tagline}</p>
              )}
            </div>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            {section.navigation?.map((item, index) => (
              <a
                key={index}
                href={item.link}
                className="text-gray-700 hover:theme-primary transition-colors font-medium"
              >
                {item.name}
              </a>
            ))}
            {section.ctaButtons?.map((button, index) => (
              <a
                key={index}
                href={button.link}
                className={`px-4 py-2 rounded-lg transition-colors font-medium ${
                  button.primary 
                    ? 'text-white hover:opacity-90' 
                    : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                }`}
                style={button.primary ? { backgroundColor: 'var(--primary-color, #3B82F6)' } : {}}
              >
                {button.text}
              </a>
            ))}
          </div>
        </div>
      </div>
    </header>
  );
}
