'use client';

import { useState } from 'react';
import { defaultUniversalData } from './defaultData';

export default function useTemplateBuilder({ onClose, onSave }) {
  const [formData, setFormData] = useState(defaultUniversalData);
  const [sidebarCollapsed, setSidebarCollapsed] = useState(false);
  
  // Define the default section order
  const [sectionOrder, setSectionOrder] = useState([
    'header',
    'hero',
    'about',
    'portfolio',
    'services',
    'testimonials',
    'skills',
    'achievements',
    'gallery',
    'stats',
    'blog',
    'downloadables',
    'faq',
    'pricing',
    'cta',
    'social',
    'contact',
    'footer'
  ]);

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

  // Reorder functions
  const moveSectionUp = (sectionKey) => {
    setSectionOrder(prev => {
      const currentIndex = prev.indexOf(sectionKey);
      if (currentIndex <= 0) return prev; // Already at top
      
      const newOrder = [...prev];
      [newOrder[currentIndex], newOrder[currentIndex - 1]] = [newOrder[currentIndex - 1], newOrder[currentIndex]];
      return newOrder;
    });
  };

  const moveSectionDown = (sectionKey) => {
    setSectionOrder(prev => {
      const currentIndex = prev.indexOf(sectionKey);
      if (currentIndex === -1 || currentIndex >= prev.length - 1) return prev; // Already at bottom
      
      const newOrder = [...prev];
      [newOrder[currentIndex], newOrder[currentIndex + 1]] = [newOrder[currentIndex + 1], newOrder[currentIndex]];
      return newOrder;
    });
  };

  return {
    formData,
    sidebarCollapsed,
    setSidebarCollapsed,
    sectionOrder,
    handleInputChange,
    handleToggleSection,
    handleSave,
    moveSectionUp,
    moveSectionDown
  };
}
