'use client';

import React, { useRef } from 'react';

export default function HeaderForm({ section, onInputChange }) {
  const fileInputRef = useRef(null);

  const addMenuItem = () => {
    const newNavigation = [...(section.navigation || []), { name: 'New Menu', link: '#new' }];
    onInputChange('header', 'navigation', newNavigation);
  };

  const removeMenuItem = (index) => {
    const newNavigation = section.navigation.filter((_, i) => i !== index);
    onInputChange('header', 'navigation', newNavigation);
  };

  const updateMenuItem = (index, field, value) => {
    const newNavigation = [...section.navigation];
    newNavigation[index] = { ...newNavigation[index], [field]: value };
    onInputChange('header', 'navigation', newNavigation);
  };

  const addCTAButton = () => {
    const newCTAButtons = [...(section.ctaButtons || []), { text: 'New Button', link: '#new', primary: false }];
    onInputChange('header', 'ctaButtons', newCTAButtons);
  };

  const removeCTAButton = (index) => {
    const newCTAButtons = section.ctaButtons.filter((_, i) => i !== index);
    onInputChange('header', 'ctaButtons', newCTAButtons);
  };

  const updateCTAButton = (index, field, value) => {
    const newCTAButtons = [...section.ctaButtons];
    newCTAButtons[index] = { ...newCTAButtons[index], [field]: value };
    onInputChange('header', 'ctaButtons', newCTAButtons);
  };

  const handleLogoUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Create a local URL for the uploaded file
      const imageUrl = URL.createObjectURL(file);
      onInputChange('header', 'logo', imageUrl);
    }
  };

  const handleLogoUrlChange = (event) => {
    onInputChange('header', 'logo', event.target.value);
  };

  return (
    <div className="space-y-4">
      {/* Logo Section */}
      <div>
        <label className="block text-xs font-medium text-gray-700 mb-1">Logo</label>
        <div className="space-y-2">
          {/* File Upload Option */}
          <div>
            <label className="block text-xs text-gray-600 mb-1">Upload from device:</label>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleLogoUpload}
              className="w-full px-2 py-1 text-xs border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          
          {/* OR Divider */}
          <div className="flex items-center">
            <div className="flex-1 border-t border-gray-300"></div>
            <span className="px-2 text-xs text-gray-500">OR</span>
            <div className="flex-1 border-t border-gray-300"></div>
          </div>
          
          {/* URL Input Option */}
          <div>
            <label className="block text-xs text-gray-600 mb-1">Enter URL:</label>
            <input
              type="text"
              value={section.logo || ''}
              onChange={handleLogoUrlChange}
              className="w-full px-2 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
              placeholder="Logo URL"
            />
          </div>
          
          {/* Preview */}
          {section.logo && (
            <div className="mt-2">
              <label className="block text-xs text-gray-600 mb-1">Preview:</label>
              <div className="w-16 h-16 border border-gray-300 rounded-md overflow-hidden">
                <img 
                  src={section.logo} 
                  alt="Logo preview" 
                  className="w-full h-full object-contain"
                  onError={(e) => {
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'flex';
                  }}
                />
                <div className="w-full h-full flex items-center justify-center text-xs text-gray-400 bg-gray-50" style={{display: 'none'}}>
                  Invalid Image
                </div>
              </div>
            </div>
          )}
        </div>
      </div>

      {/* Navigation Menu Section */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <label className="block text-xs font-medium text-gray-700">Navigation Menu</label>
          <button
            type="button"
            onClick={addMenuItem}
            className="px-2 py-1 text-xs bg-blue-500 text-white rounded hover:bg-blue-600 transition-colors"
          >
            + Add Menu Item
          </button>
        </div>
        
        <div className="space-y-2">
          {(section.navigation || []).map((item, index) => (
            <div key={index} className="flex items-center space-x-2 p-2 border border-gray-200 rounded-md">
              <div className="flex-1 space-y-1">
                <input
                  type="text"
                  value={item.name || ''}
                  onChange={(e) => updateMenuItem(index, 'name', e.target.value)}
                  className="w-full px-2 py-1 text-xs border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="Menu Name"
                />
                <input
                  type="text"
                  value={item.link || ''}
                  onChange={(e) => updateMenuItem(index, 'link', e.target.value)}
                  className="w-full px-2 py-1 text-xs border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="Link (e.g., #about, /contact)"
                />
              </div>
              <button
                type="button"
                onClick={() => removeMenuItem(index)}
                className="px-2 py-1 text-xs bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
              >
                ×
              </button>
            </div>
          ))}
          
          {(!section.navigation || section.navigation.length === 0) && (
            <div className="text-xs text-gray-500 text-center py-2">
              No menu items yet. Click "Add Menu Item" to get started.
            </div>
          )}
        </div>
      </div>

      {/* CTA Buttons Section */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <label className="block text-xs font-medium text-gray-700">CTA Buttons</label>
          <button
            type="button"
            onClick={addCTAButton}
            className="px-2 py-1 text-xs bg-green-500 text-white rounded hover:bg-green-600 transition-colors"
          >
            + Add CTA Button
          </button>
        </div>
        
        <div className="space-y-2">
          {(section.ctaButtons || []).map((button, index) => (
            <div key={index} className="flex items-center space-x-2 p-2 border border-gray-200 rounded-md">
              <div className="flex-1 space-y-1">
                <input
                  type="text"
                  value={button.text || ''}
                  onChange={(e) => updateCTAButton(index, 'text', e.target.value)}
                  className="w-full px-2 py-1 text-xs border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="Button Text (e.g., Get Started)"
                />
                <input
                  type="text"
                  value={button.link || ''}
                  onChange={(e) => updateCTAButton(index, 'link', e.target.value)}
                  className="w-full px-2 py-1 text-xs border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
                  placeholder="Button Link (e.g., #contact, /signup)"
                />
                <div className="flex items-center space-x-2">
                  <label className="text-xs text-gray-600">
                    <input
                      type="checkbox"
                      checked={button.primary || false}
                      onChange={(e) => updateCTAButton(index, 'primary', e.target.checked)}
                      className="mr-1"
                    />
                    Primary Button
                  </label>
                </div>
              </div>
              <button
                type="button"
                onClick={() => removeCTAButton(index)}
                className="px-2 py-1 text-xs bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
              >
                ×
              </button>
            </div>
          ))}
          
          {(!section.ctaButtons || section.ctaButtons.length === 0) && (
            <div className="text-xs text-gray-500 text-center py-2">
              No CTA buttons yet. Click "Add CTA Button" to get started.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
