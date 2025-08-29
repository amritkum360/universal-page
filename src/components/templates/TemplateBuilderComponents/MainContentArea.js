'use client';

import React from 'react';
import TopBar from './TopBar';
import PreviewArea from './PreviewArea';

export default function MainContentArea({ formData }) {
  return (
    <div className="flex-1 flex flex-col">
      <TopBar />
      <PreviewArea formData={formData} />
    </div>
  );
}
