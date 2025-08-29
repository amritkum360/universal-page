'use client';

import React from 'react';

export default function FooterForm({ section, onInputChange }) {
  return (
    <div className="space-y-3">
      <div>
        <label className="block text-xs font-medium text-gray-700 mb-1">Copyright Text</label>
        <input
          type="text"
          value={section.copyright || ''}
          onChange={(e) => onInputChange('footer', 'copyright', e.target.value)}
          className="w-full px-2 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          placeholder="© 2024 Your Business Name. All rights reserved."
        />
      </div>
      <div>
        <label className="block text-xs font-medium text-gray-700 mb-1">Privacy Policy URL</label>
        <input
          type="url"
          value={section.links?.find(l => l.name === 'Privacy Policy')?.url || ''}
          onChange={(e) => {
            const links = section.links || [];
            const privacyIndex = links.findIndex(l => l.name === 'Privacy Policy');
            if (privacyIndex >= 0) {
              links[privacyIndex].url = e.target.value;
            } else {
              links.push({ name: 'Privacy Policy', url: e.target.value });
            }
            onInputChange('footer', 'links', links);
          }}
          className="w-full px-2 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          placeholder="/privacy"
        />
      </div>
      <div>
        <label className="block text-xs font-medium text-gray-700 mb-1">Terms of Service URL</label>
        <input
          type="url"
          value={section.links?.find(l => l.name === 'Terms of Service')?.url || ''}
          onChange={(e) => {
            const links = section.links || [];
            const termsIndex = links.findIndex(l => l.name === 'Terms of Service');
            if (termsIndex >= 0) {
              links[termsIndex].url = e.target.value;
            } else {
              links.push({ name: 'Terms of Service', url: e.target.value });
            }
            onInputChange('footer', 'links', links);
          }}
          className="w-full px-2 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          placeholder="/terms"
        />
      </div>
    </div>
  );
}
