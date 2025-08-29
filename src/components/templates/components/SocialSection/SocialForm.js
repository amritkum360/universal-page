'use client';

import React from 'react';

export default function SocialForm({ section, onInputChange }) {
  return (
    <div className="space-y-3">
      <div>
        <label className="block text-xs font-medium text-gray-700 mb-1">Title</label>
        <input
          type="text"
          value={section.title || ''}
          onChange={(e) => onInputChange('social', 'title', e.target.value)}
          className="w-full px-2 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          placeholder="Follow Us"
        />
      </div>
      <div>
        <label className="block text-xs font-medium text-gray-700 mb-1">Subtitle</label>
        <input
          type="text"
          value={section.subtitle || ''}
          onChange={(e) => onInputChange('social', 'subtitle', e.target.value)}
          className="w-full px-2 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          placeholder="Stay Connected"
        />
      </div>
      <div>
        <label className="block text-xs font-medium text-gray-700 mb-1">Facebook URL</label>
        <input
          type="url"
          value={section.platforms?.find(p => p.icon === 'facebook')?.url || ''}
          onChange={(e) => {
            const platforms = section.platforms || [];
            const facebookIndex = platforms.findIndex(p => p.icon === 'facebook');
            if (facebookIndex >= 0) {
              platforms[facebookIndex].url = e.target.value;
            } else {
              platforms.push({ name: 'Facebook', url: e.target.value, icon: 'facebook' });
            }
            onInputChange('social', 'platforms', platforms);
          }}
          className="w-full px-2 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          placeholder="https://facebook.com/your-page"
        />
      </div>
      <div>
        <label className="block text-xs font-medium text-gray-700 mb-1">Instagram URL</label>
        <input
          type="url"
          value={section.platforms?.find(p => p.icon === 'instagram')?.url || ''}
          onChange={(e) => {
            const platforms = section.platforms || [];
            const instagramIndex = platforms.findIndex(p => p.icon === 'instagram');
            if (instagramIndex >= 0) {
              platforms[instagramIndex].url = e.target.value;
            } else {
              platforms.push({ name: 'Instagram', url: e.target.value, icon: 'instagram' });
            }
            onInputChange('social', 'platforms', platforms);
          }}
          className="w-full px-2 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          placeholder="https://instagram.com/your-profile"
        />
      </div>
    </div>
  );
}
