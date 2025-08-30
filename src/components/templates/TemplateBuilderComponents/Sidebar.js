'use client';

import React from 'react';
import UniversalForm from '../UniversalForm';

export default function Sidebar({ 
  sidebarCollapsed, 
  setSidebarCollapsed, 
  formData, 
  sectionOrder,
  onInputChange, 
  onToggleSection, 
  onSave, 
  onClose,
  moveSectionUp,
  moveSectionDown
}) {
  return (
    <div className={`bg-white shadow-2xl transition-all duration-300 flex flex-col ${sidebarCollapsed ? 'w-16' : 'w-80'}`}>
      {/* Sidebar Header */}
      <div className="p-4 border-b border-gray-200 flex items-center justify-between">
        {!sidebarCollapsed && (
          <div>
            <h2 className="text-lg font-bold text-gray-900">Universal Website Builder</h2>
            <p className="text-xs text-gray-600">Mother of All Templates</p>
          </div>
        )}
        <button
          onClick={() => setSidebarCollapsed(!sidebarCollapsed)}
          className="p-2 rounded-lg hover:bg-gray-100 transition-colors"
        >
          {sidebarCollapsed ? (
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 5l7 7-7 7M5 5l7 7-7 7" />
            </svg>
          ) : (
            <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11 19l-7-7 7-7m8 14l-7-7 7-7" />
            </svg>
          )}
        </button>
      </div>

      {/* Sidebar Content */}
      <div className="flex-1 overflow-y-auto">
        {!sidebarCollapsed && (
          <div className="p-4">
            <UniversalForm 
              data={formData}
              sectionOrder={sectionOrder}
              onInputChange={onInputChange}
              onToggleSection={onToggleSection}
              moveSectionUp={moveSectionUp}
              moveSectionDown={moveSectionDown}
            />
          </div>
        )}
      </div>

      {/* Sidebar Footer */}
      <div className="p-4 border-t border-gray-200">
        {!sidebarCollapsed ? (
          <div className="space-y-2">
            <button
              onClick={onSave}
              className="w-full bg-blue-500 text-white py-2 px-4 rounded-lg hover:bg-blue-600 transition-colors font-medium"
            >
              Save Website
            </button>
            <button
              onClick={onClose}
              className="w-full bg-gray-500 text-white py-2 px-4 rounded-lg hover:bg-gray-600 transition-colors font-medium"
            >
              Cancel
            </button>
          </div>
        ) : (
          <div className="flex flex-col space-y-2">
            <button
              onClick={onSave}
              className="p-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
              title="Save Website"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7H5a2 2 0 00-2 2v9a2 2 0 002 2h14a2 2 0 002-2V9a2 2 0 00-2-2h-3m-1 4l-3 3m0 0l-3-3m3 3V4" />
              </svg>
            </button>
            <button
              onClick={onClose}
              className="p-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
              title="Cancel"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>
        )}
      </div>
    </div>
  );
}
