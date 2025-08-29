'use client';

import React from 'react';
import { Facebook, Instagram, MessageCircle } from 'lucide-react';

export default function SocialTemplate({ section }) {
  const handleSocialClick = (url) => {
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <section className="py-16 px-4 bg-gradient-to-r from-blue-50 to-purple-50" role="region" aria-label="Social Media">
      <div className="container mx-auto">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold text-gray-800 mb-4">{section.title}</h2>
          {section.subtitle && (
            <p className="text-xl text-gray-600 mb-12">{section.subtitle}</p>
          )}
          {section.platforms && (
            <div className="flex flex-wrap justify-center gap-6">
              {section.platforms.map((platform, index) => (
                <button
                  key={index}
                  onClick={() => handleSocialClick(platform.url)}
                  className="w-16 h-16 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center shadow-2xl hover:scale-110 transition-all duration-300"
                  aria-label={`Follow us on ${platform.name}`}
                >
                  {platform.icon === 'facebook' && <Facebook className="w-6 h-6 text-white" />}
                  {platform.icon === 'instagram' && <Instagram className="w-6 h-6 text-white" />}
                  {platform.icon === 'whatsapp' && <MessageCircle className="w-6 h-6 text-white" />}
                </button>
              ))}
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
