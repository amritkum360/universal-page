'use client';

import React from 'react';

export default function TopBar() {
  return (
    <div className="bg-white shadow-sm border-b border-gray-200 px-6 py-4">
      <div className="flex items-center justify-between">
        <div>
          <h1 className="text-xl font-bold text-gray-900">Live Preview</h1>
          <p className="text-sm text-gray-600">Universal template with 18 customizable sections</p>
        </div>
        <div className="flex items-center space-x-4">
          <div className="flex items-center space-x-2">
            <span className="text-sm text-gray-600">Mobile</span>
            <div className="w-12 h-6 bg-gray-200 rounded-full relative">
              <div className="w-6 h-6 bg-blue-500 rounded-full absolute left-0 top-0 transition-transform"></div>
            </div>
            <span className="text-sm text-gray-600">Desktop</span>
          </div>
          <button className="px-4 py-2 bg-green-500 text-white rounded-lg hover:bg-green-600 transition-colors text-sm font-medium">
            Publish Website
          </button>
        </div>
      </div>
    </div>
  );
}
