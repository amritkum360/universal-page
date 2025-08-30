'use client';

import React from 'react';
import UniversalTemplate from '../UniversalTemplate';

export default function PreviewArea({ formData, sectionOrder }) {
  return (
    <div className="flex-1 bg-gray-50 p-6 overflow-auto">
      <div className="max-w-6xl mx-auto bg-white rounded-lg shadow-lg overflow-hidden">
        <UniversalTemplate data={formData} sectionOrder={sectionOrder} />
      </div>
    </div>
  );
}
