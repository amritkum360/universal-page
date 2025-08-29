'use client';

import { useState } from 'react';
import SectionRenderer from '../sections/SectionRenderer';

export default function SectionEditor({ 
  section, 
  onClose, 
  onSave,
  onDelete 
}) {
  const [activeTab, setActiveTab] = useState('content');
  const [editedSection, setEditedSection] = useState({
    ...section,
    content: { ...section.content },
    styles: { ...section.styles }
  });

  const handleContentChange = (field, value) => {
    setEditedSection(prev => ({
      ...prev,
      content: {
        ...prev.content,
        [field]: value
      }
    }));
  };

  const handleStyleChange = (field, value) => {
    setEditedSection(prev => ({
      ...prev,
      styles: {
        ...prev.styles,
        [field]: value
      }
    }));
  };

  const handleSave = () => {
    onSave(editedSection);
    onClose();
  };

  const getSectionTypeName = () => {
    if (section.design?.id === 'classic' || section.design?.id === 'centered' || section.design?.id === 'modern') {
      return 'Header';
    } else if (section.design?.id === 'landing' || section.design?.id === 'split') {
      return 'Hero';
    }
    return 'Section';
  };

  const renderContentTab = () => {
    const content = editedSection.content || {};
    
    if (section.design?.id === 'classic' || section.design?.id === 'centered' || section.design?.id === 'modern') {
      return (
        <div className="space-y-4">
          {/* Logo */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Logo/Brand Name</label>
            <input
              type="text"
              value={content.logo || ''}
              onChange={(e) => handleContentChange('logo', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Brand"
            />
          </div>

          {/* Tagline */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Tagline</label>
            <input
              type="text"
              value={content.tagline || ''}
              onChange={(e) => handleContentChange('tagline', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Professional tagline"
            />
          </div>

          {/* Navigation Items */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Navigation Items</label>
            <div className="space-y-2">
              {(content.navItems || ['Home', 'About', 'Services', 'Contact']).map((item, index) => (
                <div key={index} className="flex gap-2">
                  <input
                    type="text"
                    value={item}
                    onChange={(e) => {
                      const newNavItems = [...(content.navItems || ['Home', 'About', 'Services', 'Contact'])];
                      newNavItems[index] = e.target.value;
                      handleContentChange('navItems', newNavItems);
                    }}
                    className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder={`Menu item ${index + 1}`}
                  />
                  <button
                    onClick={() => {
                      const newNavItems = content.navItems?.filter((_, i) => i !== index) || [];
                      handleContentChange('navItems', newNavItems);
                    }}
                    className="px-3 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
                  >
                    ✕
                  </button>
                </div>
              ))}
              <button
                onClick={() => {
                  const newNavItems = [...(content.navItems || []), 'New Item'];
                  handleContentChange('navItems', newNavItems);
                }}
                className="w-full px-3 py-2 bg-green-500 text-white rounded-md hover:bg-green-600"
              >
                + Add Menu Item
              </button>
            </div>
          </div>

          {/* CTA Button */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">CTA Button Text</label>
            <input
              type="text"
              value={content.cta || ''}
              onChange={(e) => handleContentChange('cta', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Get Started"
            />
          </div>
        </div>
      );
    }

    if (section.design?.id === 'landing' || section.design?.id === 'split') {
      return (
        <div className="space-y-4">
          {/* Title */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Main Title</label>
            <input
              type="text"
              value={content.title || ''}
              onChange={(e) => handleContentChange('title', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Welcome to Our Platform"
            />
          </div>

          {/* Subtitle */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">Subtitle/Description</label>
            <textarea
              value={content.subtitle || ''}
              onChange={(e) => handleContentChange('subtitle', e.target.value)}
              rows={3}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Create amazing websites with our powerful builder"
            />
          </div>

          {/* CTA Button */}
          <div>
            <label className="block text-sm font-medium text-gray-700 mb-2">CTA Button Text</label>
            <input
              type="text"
              value={content.cta || ''}
              onChange={(e) => handleContentChange('cta', e.target.value)}
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Get Started"
            />
          </div>
        </div>
      );
    }

    return (
      <div className="text-center py-8 text-gray-500">
        Content editing not available for this section type
      </div>
    );
  };

  const renderStylingTab = () => {
    const styles = editedSection.styles || {};
    
    return (
      <div className="space-y-4">
        {/* Background */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Background Color</label>
          <div className="flex gap-2">
            <input
              type="color"
              value={styles.backgroundColor || '#667eea'}
              onChange={(e) => handleStyleChange('backgroundColor', e.target.value)}
              className="w-12 h-10 border border-gray-300 rounded-md cursor-pointer"
            />
            <input
              type="text"
              value={styles.backgroundColor || ''}
              onChange={(e) => handleStyleChange('backgroundColor', e.target.value)}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
            />
          </div>
        </div>

        {/* Text Color */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Text Color</label>
          <div className="flex gap-2">
            <input
              type="color"
              value={styles.color || '#ffffff'}
              onChange={(e) => handleStyleChange('color', e.target.value)}
              className="w-12 h-10 border border-gray-300 rounded-md cursor-pointer"
            />
            <input
              type="text"
              value={styles.color || ''}
              onChange={(e) => handleStyleChange('color', e.target.value)}
              className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="#ffffff"
            />
          </div>
        </div>

        {/* Font Size */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Base Font Size</label>
          <select
            value={styles.fontSize || '16px'}
            onChange={(e) => handleStyleChange('fontSize', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="12px">12px</option>
            <option value="14px">14px</option>
            <option value="16px">16px</option>
            <option value="18px">18px</option>
            <option value="20px">20px</option>
            <option value="24px">24px</option>
          </select>
        </div>

        {/* Padding */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Padding</label>
          <select
            value={styles.padding || 'p-5'}
            onChange={(e) => handleStyleChange('padding', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="p-2">Small (p-2)</option>
            <option value="p-4">Medium (p-4)</option>
            <option value="p-5">Large (p-5)</option>
            <option value="p-8">Extra Large (p-8)</option>
          </select>
        </div>
      </div>
    );
  };

  const renderLinksTab = () => {
    const content = editedSection.content || {};
    
    return (
      <div className="space-y-4">
        <div className="text-sm text-gray-600 mb-4">
          Add links to your elements. These will be applied when users click on the respective elements.
        </div>

        {/* Logo Link */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Logo Link</label>
          <input
            type="url"
            value={content.logoLink || ''}
            onChange={(e) => handleContentChange('logoLink', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="https://yourwebsite.com"
          />
        </div>

        {/* Navigation Links */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">Navigation Links</label>
          <div className="space-y-2">
            {(content.navItems || []).map((item, index) => (
              <div key={index} className="flex gap-2 items-center">
                <span className="text-sm text-gray-600 w-20">{item}:</span>
                <input
                  type="url"
                  value={content.navItemLinks?.[index] || ''}
                  onChange={(e) => {
                    const newLinks = { ...content.navItemLinks };
                    newLinks[index] = e.target.value;
                    handleContentChange('navItemLinks', newLinks);
                  }}
                  className="flex-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  placeholder="https://..."
                />
              </div>
            ))}
          </div>
        </div>

        {/* CTA Link */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-2">CTA Button Link</label>
          <input
            type="url"
            value={content.ctaLink || ''}
            onChange={(e) => handleContentChange('ctaLink', e.target.value)}
            className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            placeholder="https://..."
          />
        </div>
      </div>
    );
  };

  const renderElementsTab = () => {
    const elements = editedSection.elements || [];
    
    return (
      <div className="space-y-4">
        <div className="flex justify-between items-center mb-4">
          <h3 className="text-lg font-medium text-gray-900">Custom Elements</h3>
          <button
            onClick={() => {
              const newElement = {
                id: Date.now(),
                type: 'text',
                content: 'New Element',
                styles: {},
                link: ''
              };
              setEditedSection(prev => ({
                ...prev,
                elements: [...(prev.elements || []), newElement]
              }));
            }}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          >
            + Add Element
          </button>
        </div>

        {elements.length === 0 ? (
          <div className="text-center py-8 text-gray-500">
            No custom elements added yet. Click "Add Element" to get started.
          </div>
        ) : (
          <div className="space-y-3">
            {elements.map((element, index) => (
              <div key={element.id} className="border border-gray-200 rounded-lg p-4">
                <div className="flex justify-between items-start mb-3">
                  <h4 className="font-medium text-gray-900">Element {index + 1}</h4>
                  <button
                    onClick={() => {
                      const newElements = elements.filter((_, i) => i !== index);
                      setEditedSection(prev => ({
                        ...prev,
                        elements: newElements
                      }));
                    }}
                    className="text-red-500 hover:text-red-700"
                  >
                    ✕
                  </button>
                </div>

                {/* Element Type */}
                <div className="mb-3">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Type</label>
                  <select
                    value={element.type}
                    onChange={(e) => {
                      const newElements = [...elements];
                      newElements[index] = { ...element, type: e.target.value };
                      setEditedSection(prev => ({
                        ...prev,
                        elements: newElements
                      }));
                    }}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                  >
                    <option value="text">Text</option>
                    <option value="image">Image</option>
                    <option value="button">Button</option>
                    <option value="divider">Divider</option>
                  </select>
                </div>

                {/* Element Content */}
                <div className="mb-3">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Content</label>
                  {element.type === 'image' ? (
                    <input
                      type="url"
                      value={element.content}
                      onChange={(e) => {
                        const newElements = [...elements];
                        newElements[index] = { ...element, content: e.target.value };
                        setEditedSection(prev => ({
                          ...prev,
                          elements: newElements
                        }));
                      }}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="https://via.placeholder.com/300x200"
                    />
                  ) : (
                    <input
                      type="text"
                      value={element.content}
                      onChange={(e) => {
                        const newElements = [...elements];
                        newElements[index] = { ...element, content: e.target.value };
                        setEditedSection(prev => ({
                          ...prev,
                          elements: newElements
                        }));
                      }}
                      className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                      placeholder="Element content"
                    />
                  )}
                </div>

                {/* Element Link */}
                <div className="mb-3">
                  <label className="block text-sm font-medium text-gray-700 mb-1">Link (Optional)</label>
                  <input
                    type="url"
                    value={element.link || ''}
                    onChange={(e) => {
                      const newElements = [...elements];
                      newElements[index] = { ...element, link: e.target.value };
                      setEditedSection(prev => ({
                        ...prev,
                        elements: newElements
                      }));
                    }}
                    className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                    placeholder="https://..."
                  />
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };

  // Mock functions for SectionRenderer
  const mockElementClick = () => {};
  const mockInlineEdit = () => {};
  const mockRenderElementToolbar = () => null;
  const mockStartInlineEdit = () => {};

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className="bg-white rounded-2xl shadow-2xl max-w-7xl w-full max-h-[90vh] overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between p-6 border-b border-gray-200">
          <div>
            <h2 className="text-2xl font-bold text-gray-900">
              Edit {getSectionTypeName()} Section
            </h2>
            <p className="text-gray-600 mt-1">
              {section.design?.name || 'Custom Section'}
            </p>
          </div>
          <div className="flex gap-2">
            <button
              onClick={onDelete}
              className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors"
            >
              Delete
            </button>
            <button
              onClick={onClose}
              className="px-4 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
            >
              Cancel
            </button>
            <button
              onClick={handleSave}
              className="px-6 py-2 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-colors"
            >
              Save Changes
            </button>
          </div>
        </div>

        <div className="flex h-[calc(90vh-120px)]">
          {/* Left Side - Controls */}
          <div className="w-1/2 border-r border-gray-200 flex flex-col">
            {/* Tabs */}
            <div className="flex border-b border-gray-200">
              {['content', 'styling', 'links', 'elements'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`px-6 py-3 text-sm font-medium border-b-2 transition-colors ${
                    activeTab === tab
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700'
                  }`}
                >
                  {tab.charAt(0).toUpperCase() + tab.slice(1)}
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="p-6 overflow-y-auto flex-1">
              {activeTab === 'content' && renderContentTab()}
              {activeTab === 'styling' && renderStylingTab()}
              {activeTab === 'links' && renderLinksTab()}
              {activeTab === 'elements' && renderElementsTab()}
            </div>
          </div>

          {/* Right Side - Live Preview */}
          <div className="w-1/2 p-6 bg-gray-50">
            <div className="mb-4">
              <h3 className="text-lg font-medium text-gray-900 mb-2">Live Preview</h3>
              <p className="text-sm text-gray-600">See your changes in real-time</p>
            </div>
            
            <div className="bg-white rounded-lg shadow-lg overflow-hidden">
              <SectionRenderer 
                section={editedSection}
                onElementClick={mockElementClick}
                onInlineEdit={mockInlineEdit}
                inlineEditing={null}
                renderElementToolbar={mockRenderElementToolbar}
                startInlineEdit={mockStartInlineEdit}
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
