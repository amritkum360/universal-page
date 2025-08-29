'use client';

import { useState } from 'react';
import { defaultUniversalData } from './defaultData';

export default function useTemplateBuilder({ onClose, onSave }) {
  const [formData, setFormData] = useState(defaultUniversalData);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);

  const handleInputChange = (section, field, value) => {
    setFormData(prev => {
      // Handle basic info fields (businessName, tagline, logo, favicon)
      if (['businessName', 'tagline', 'logo', 'favicon'].includes(section)) {
        return {
          ...prev,
          [section]: value
        };
      }
      
      // Handle nested section fields
      return {
        ...prev,
        [section]: {
          ...prev[section],
          [field]: value
        }
      };
    });
  };

  const handleToggleSection = (section) => {
    setFormData(prev => ({
      ...prev,
      [section]: {
        ...prev[section],
        visible: !prev[section].visible
      }
    }));
  };

  const handleSave = () => {
    onSave(formData);
    onClose();
  };

  return {
    formData,
    sidebarCollapsed,
    setSidebarCollapsed,
    handleInputChange,
    handleToggleSection,
    handleSave
  };
}
