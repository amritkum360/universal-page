'use client';

import { useState } from 'react';

export default function ElementToolbar({ 
  sectionId, 
  elementId, 
  element, 
  onStyleChange, 
  onElementEdit, 
  onClose 
}) {
  const [showLinkInput, setShowLinkInput] = useState(false);

  if (!element) return null;

  const handleClose = (e) => {
    e.stopPropagation(); // Prevent event bubbling
    console.log('Close button clicked!', { sectionId, elementId, onClose: !!onClose });
    if (onClose) {
      console.log('Calling onClose function...');
      onClose();
    } else {
      console.log('onClose function is not provided!');
    }
  };

  return (
    <div 
      className="absolute -top-16 left-1/2 transform -translate-x-1/2 bg-white rounded-lg shadow-lg border border-gray-200 p-2 z-50 min-w-max"
      style={{
        // Force independent styling to prevent color inheritance
        color: '#000000 !important',
        backgroundColor: '#ffffff !important',
        borderColor: '#d1d5db !important'
      }}
    >
      <div className="flex items-center gap-2">
        {/* Font Size */}
        <select
          value={element?.styles?.fontSize || '16px'}
          onChange={(e) => onStyleChange(sectionId, elementId, 'fontSize', e.target.value)}
          className="text-xs border rounded px-1"
          style={{
            color: '#000000',
            backgroundColor: '#ffffff',
            borderColor: '#d1d5db'
          }}
        >
          <option value="12px">12px</option>
          <option value="14px">14px</option>
          <option value="16px">16px</option>
          <option value="18px">18px</option>
          <option value="20px">20px</option>
          <option value="24px">24px</option>
          <option value="32px">32px</option>
        </select>

        {/* Text Color */}
        <input
          type="color"
          value={element?.styles?.color || '#000000'}
          onChange={(e) => onStyleChange(sectionId, elementId, 'color', e.target.value)}
          className="w-6 h-6 rounded border cursor-pointer"
          title="Text Color"
          style={{
            borderColor: '#d1d5db'
          }}
        />

        {/* Background Color */}
        <input
          type="color"
          value={element?.styles?.backgroundColor || '#ffffff'}
          onChange={(e) => onStyleChange(sectionId, elementId, 'backgroundColor', e.target.value)}
          className="w-6 h-6 rounded border cursor-pointer"
          title="Background Color"
          style={{
            borderColor: '#d1d5db'
          }}
        />

        {/* Link Button */}
        <button
          onClick={() => setShowLinkInput(!showLinkInput)}
          className="w-6 h-6 bg-blue-500 text-white rounded text-xs flex items-center justify-center hover:bg-blue-600 transition-colors"
          title="Add Link"
          style={{
            color: '#ffffff',
            backgroundColor: '#3b82f6'
          }}
        >
          🔗
        </button>

        {/* Close Button - Enhanced styling and debugging */}
        <button
          onClick={handleClose}
          className="w-6 h-6 bg-red-500 text-white rounded text-xs flex items-center justify-center hover:bg-red-600 transition-colors font-bold cursor-pointer"
          title="Close Toolbar"
          style={{ 
            pointerEvents: 'auto',
            color: '#ffffff',
            backgroundColor: '#ef4444'
          }}
        >
          ✕
        </button>
      </div>

      {/* Link Input */}
      {showLinkInput && (
        <div 
          className="absolute top-full left-0 mt-2 bg-white rounded-lg shadow-lg border border-gray-200 p-2 z-50"
          style={{
            color: '#000000',
            backgroundColor: '#ffffff',
            borderColor: '#d1d5db'
          }}
        >
          <input
            type="text"
            placeholder="Enter URL..."
            value={element?.link || ''}
            onChange={(e) => onElementEdit(sectionId, elementId, 'link', e.target.value)}
            className="text-xs border rounded px-2 py-1 w-32"
            autoFocus
            style={{
              color: '#000000',
              backgroundColor: '#ffffff',
              borderColor: '#d1d5db'
            }}
          />
          <button
            onClick={() => setShowLinkInput(false)}
            className="ml-1 text-xs bg-green-500 text-white px-2 py-1 rounded hover:bg-green-600"
            style={{
              color: '#ffffff',
              backgroundColor: '#10b981'
            }}
          >
            ✓
          </button>
        </div>
      )}
    </div>
  );
}