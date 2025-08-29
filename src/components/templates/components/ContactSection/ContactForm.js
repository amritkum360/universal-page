'use client';

import React from 'react';

export default function ContactForm({ section, onInputChange }) {
  return (
    <div className="space-y-3">
      <div>
        <label className="block text-xs font-medium text-gray-700 mb-1">Title</label>
        <input
          type="text"
          value={section.title || ''}
          onChange={(e) => onInputChange('contact', 'title', e.target.value)}
          className="w-full px-2 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          placeholder="Contact Us"
        />
      </div>
      <div>
        <label className="block text-xs font-medium text-gray-700 mb-1">Address</label>
        <input
          type="text"
          value={section.address || ''}
          onChange={(e) => onInputChange('contact', 'address', e.target.value)}
          className="w-full px-2 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          placeholder="Your Business Address"
        />
      </div>
      <div>
        <label className="block text-xs font-medium text-gray-700 mb-1">Phone</label>
        <input
          type="tel"
          value={section.phone || ''}
          onChange={(e) => onInputChange('contact', 'phone', e.target.value)}
          className="w-full px-2 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          placeholder="+1 234 567 8900"
        />
      </div>
      <div>
        <label className="block text-xs font-medium text-gray-700 mb-1">Email</label>
        <input
          type="email"
          value={section.email || ''}
          onChange={(e) => onInputChange('contact', 'email', e.target.value)}
          className="w-full px-2 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          placeholder="info@yourbusiness.com"
        />
      </div>
      <div>
        <label className="block text-xs font-medium text-gray-700 mb-1">Business Hours</label>
        <input
          type="text"
          value={section.hours || ''}
          onChange={(e) => onInputChange('contact', 'hours', e.target.value)}
          className="w-full px-2 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          placeholder="Monday - Friday: 9:00 AM - 6:00 PM"
        />
      </div>
    </div>
  );
}
