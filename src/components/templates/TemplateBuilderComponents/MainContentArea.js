'use client';

import React from 'react';
import TopBar from './TopBar';
import PreviewArea from './PreviewArea';

export default function MainContentArea({ formData, sectionOrder }) {
  return (
    <div className="flex-1 flex flex-col">
      <TopBar />
      <PreviewArea formData={formData} sectionOrder={sectionOrder} />
    </div>
  );
}
