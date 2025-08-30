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
    sectionOrder,
    handleInputChange,
    handleToggleSection,
    handleSave,
    moveSectionUp,
    moveSectionDown
  } = useTemplateBuilder({ onClose, onSave });

  return (
    <div className="fixed inset-0 bg-gray-100 flex z-50">
      <Sidebar 
        sidebarCollapsed={sidebarCollapsed}
        setSidebarCollapsed={setSidebarCollapsed}
        formData={formData}
        sectionOrder={sectionOrder}
        onInputChange={handleInputChange}
        onToggleSection={handleToggleSection}
        onSave={handleSave}
        onClose={onClose}
        moveSectionUp={moveSectionUp}
        moveSectionDown={moveSectionDown}
      />
      <MainContentArea formData={formData} sectionOrder={sectionOrder} />
    </div>
  );
}
