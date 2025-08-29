'use client';

import React from 'react';
import Sidebar from './TemplateBuilderComponents/Sidebar';
import MainContentArea from './TemplateBuilderComponents/MainContentArea';
import useTemplateBuilder from './TemplateBuilderComponents/useTemplateBuilder';

export default function TemplateBuilder({ onClose, onSave }) {
  const {
    formData,
    sidebarCollapsed,
    setSidebarCollapsed,
    handleInputChange,
    handleToggleSection,
    handleSave
  } = useTemplateBuilder({ onClose, onSave });

  return (
    <div className="fixed inset-0 bg-gray-100 flex z-50">
      <Sidebar 
        sidebarCollapsed={sidebarCollapsed}
        setSidebarCollapsed={setSidebarCollapsed}
        formData={formData}
        onInputChange={handleInputChange}
        onToggleSection={handleToggleSection}
        onSave={handleSave}
        onClose={onClose}
      />
      <MainContentArea formData={formData} />
    </div>
  );
}
