'use client';

import Image from 'next/image';
import React, { useRef } from 'react';

export default function HeroForm({ section, onInputChange }) {
  const fileInputRef = useRef(null);

  // Template selection handler
  const handleTemplateChange = (templateNumber) => {
    onInputChange('hero', 'template', templateNumber);
  };

  const handleBackgroundImageUpload = (event) => {
    const file = event.target.files[0];
    if (file) {
      // Create a local URL for the uploaded file
      const imageUrl = URL.createObjectURL(file);
      onInputChange('hero', 'backgroundImage', imageUrl);
    }
  };

  const removeBackgroundImage = () => {
    onInputChange('hero', 'backgroundImage', '');
    if (fileInputRef.current) {
      fileInputRef.current.value = '';
    }
  };

  const addCTAButton = () => {
    const newCTAButtons = [...(section.ctaButtons || []), { text: 'New Button', link: '#new', primary: false }];
    onInputChange('hero', 'ctaButtons', newCTAButtons);
  };

  const removeCTAButton = (index) => {
    const newCTAButtons = section.ctaButtons.filter((_, i) => i !== index);
    onInputChange('hero', 'ctaButtons', newCTAButtons);
  };

  const updateCTAButton = (index, field, value) => {
    const newCTAButtons = [...section.ctaButtons];
    newCTAButtons[index] = { ...newCTAButtons[index], [field]: value };
    onInputChange('hero', 'ctaButtons', newCTAButtons);
  };

  return (
    <div className="space-y-3">
      {/* Template Selection */}
      <div>
        <label className="block text-xs font-medium text-gray-700 mb-2">Hero Template</label>
        <div className="flex space-x-2">
          <button
            type="button"
            onClick={() => handleTemplateChange(1)}
            className={`flex-1 py-2 px-3 text-xs font-medium rounded-md transition-colors ${
              (section.template || 1) === 1
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Template 1
            <div className="text-xs opacity-75 mt-1">Full-width background</div>
          </button>
          <button
            type="button"
            onClick={() => handleTemplateChange(2)}
            className={`flex-1 py-2 px-3 text-xs font-medium rounded-md transition-colors ${
              (section.template || 1) === 2
                ? 'bg-blue-500 text-white'
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
            }`}
          >
            Template 2
            <div className="text-xs opacity-75 mt-1">Image right, content left</div>
          </button>
        </div>
      </div>

      <div>
        <label className="block text-xs font-medium text-gray-700 mb-1">Title</label>
        <input
          type="text"
          value={section.title || ''}
          onChange={(e) => onInputChange('hero', 'title', e.target.value)}
          className="w-full px-2 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          placeholder="Welcome to Our Business"
        />
      </div>
      <div>
        <label className="block text-xs font-medium text-gray-700 mb-1">Subtitle</label>
        <input
          type="text"
          value={section.subtitle || ''}
          onChange={(e) => onInputChange('hero', 'subtitle', e.target.value)}
          className="w-full px-2 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          placeholder="Professional Solutions"
        />
      </div>
      <div>
        <label className="block text-xs font-medium text-gray-700 mb-1">Description</label>
        <textarea
          value={section.description || ''}
          onChange={(e) => onInputChange('hero', 'description', e.target.value)}
          rows={2}
          className="w-full px-2 py-1 text-sm border border-gray-300 rounded-md focus:outline-none focus:ring-1 focus:ring-blue-500"
          placeholder="Hero description..."
        />
      </div>
      <div>
        <label className="block text-xs font-medium text-gray-700 mb-1">Background Image</label>
        <div className="space-y-2">
          {/* File Upload Option */}
          <div>
            <input
              ref={fileInputRef}
              type="file"
              accept="image/*"
              onChange={handleBackgroundImageUpload}
              className="w-full px-2 py-1 text-xs border border-gray-300 rounded focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
          
          {/* Preview and Remove Button */}
          {section.backgroundImage && (
            <div className="mt-2">
              <div className="flex items-center justify-between mb-1">
                <label className="block text-xs text-gray-600">Preview:</label>
                <button
                  type="button"
                  onClick={removeBackgroundImage}
                  className="px-2 py-1 text-xs bg-red-500 text-white rounded hover:bg-red-600 transition-colors"
                >
                  Remove Image
                </button>
              </div>
              <div className="w-full h-24 border border-gray-300 rounded-md overflow-hidden">
                <Image
                  src={section.backgroundImage} 
                  alt="Background preview" 
                  width={400}
                  height={96}
                  className="w-full h-full object-cover"
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

      {/* Image Border Radius (for Template 2) */}
      {(section.template || 1) === 2 && (
        <div>
          <label className="block text-xs font-medium text-gray-700 mb-2">
            Image Border Radius: {section.imageBorderRadius || 50}%
          </label>
          <input
            type="range"
            min="0"
            max="100"
            value={section.imageBorderRadius || 50}
            onChange={(e) => onInputChange('hero', 'imageBorderRadius', parseInt(e.target.value))}
            className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer slider"
          />
          <div className="flex justify-between text-xs text-gray-500 mt-1">
            <span>Square (0%)</span>
            <span>Round (50%)</span>
            <span>Oval (100%)</span>
          </div>
        </div>
      )}

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
              No CTA buttons yet. Click &quot;Add CTA Button&quot; to get started.
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
