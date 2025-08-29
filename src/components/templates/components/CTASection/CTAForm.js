'use client';

import React from 'react';

export default function CTAForm({ section, onInputChange }) {
  return (
    <div className="space-y-4">
      <div>
        <label className="block text-xs font-medium text-gray-700 mb-1">Title</label>
        <input
          type="text"
          value={section.title || ''}
          onChange={(e) => onInputChange('cta', 'title', e.target.value)}
          className="w-full px-2 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          placeholder="Ready to Get Started?"
        />
      </div>
      
      <div>
        <label className="block text-xs font-medium text-gray-700 mb-1">Subtitle</label>
        <input
          type="text"
          value={section.subtitle || ''}
          onChange={(e) => onInputChange('cta', 'subtitle', e.target.value)}
          className="w-full px-2 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          placeholder="Join thousands of satisfied customers today"
        />
      </div>

      <div>
        <label className="block text-xs font-medium text-gray-700 mb-1">Button Text</label>
        <input
          type="text"
          value={section.buttonText || ''}
          onChange={(e) => onInputChange('cta', 'buttonText', e.target.value)}
          className="w-full px-2 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          placeholder="Get Started Now"
        />
      </div>

      <div>
        <label className="block text-xs font-medium text-gray-700 mb-1">Button Link</label>
        <input
          type="text"
          value={section.buttonLink || ''}
          onChange={(e) => onInputChange('cta', 'buttonLink', e.target.value)}
          className="w-full px-2 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          placeholder="#contact or https://example.com"
        />
      </div>
    </div>
  );
}
