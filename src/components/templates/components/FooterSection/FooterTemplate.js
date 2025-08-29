'use client';

import React from 'react';

export default function FooterTemplate({ section }) {
  return (
    <footer className="bg-gray-900 text-white py-12 px-4" role="contentinfo">
      <div className="container mx-auto">
        <div className="max-w-6xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-center">
            <div className="mb-4 md:mb-0">
              <p className="text-gray-400">{section.copyright}</p>
            </div>
            {section.links && (
              <div className="flex space-x-6">
                {section.links.map((link, index) => (
                  <a
                    key={index}
                    href={link.url}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    {link.name}
                  </a>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </footer>
  );
}
