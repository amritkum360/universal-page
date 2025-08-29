'use client';

import { useState } from 'react';

export default function LiveEditor({ section, onUpdate, onClose }) {
  const [editingElement, setEditingElement] = useState(null);
  const [editValue, setEditValue] = useState('');

  const handleElementClick = (elementKey, currentValue) => {
    setEditingElement(elementKey);
    setEditValue(currentValue);
  };

  const handleSaveEdit = () => {
    if (editingElement) {
      const updatedContent = { ...section.content };
      updatedContent[editingElement] = editValue;
      onUpdate(section.id, { content: updatedContent });
      setEditingElement(null);
      setEditValue('');
    }
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter' && !e.shiftKey) {
      e.preventDefault();
      handleSaveEdit();
    } else if (e.key === 'Escape') {
      setEditingElement(null);
      setEditValue('');
    }
  };

  const renderEditableElement = (elementKey, content, className = '') => (
    <span 
      className={`inline-block p-2 border-2 border-dashed border-transparent rounded-lg cursor-pointer transition-all duration-300 hover:border-purple-500 hover:bg-purple-50 relative group ${className}`}
      onClick={() => handleElementClick(elementKey, content)}
    >
      {editingElement === elementKey ? (
        <input
          type="text"
          value={editValue}
          onChange={(e) => setEditValue(e.target.value)}
          onKeyDown={handleKeyDown}
          onBlur={handleSaveEdit}
          className="outline-none bg-transparent w-full"
          autoFocus
        />
      ) : (
        content
      )}
      
      {/* Edit Toolbar */}
      <div className="absolute -top-12 left-1/2 transform -translate-x-1/2 bg-white p-2 rounded-lg shadow-lg border border-gray-200 hidden group-hover:flex gap-1">
        <button className="w-8 h-8 border-none bg-gray-100 rounded-md cursor-pointer text-xs transition-all duration-200 hover:bg-purple-500 hover:text-white" title="Text Color">🎨</button>
        <button className="w-8 h-8 border-none bg-gray-100 rounded-md cursor-pointer text-xs transition-all duration-200 hover:bg-purple-500 hover:text-white" title="Font Size">Aa</button>
        <button className="w-8 h-8 border-none bg-gray-100 rounded-md cursor-pointer text-xs transition-all duration-200 hover:bg-purple-500 hover:text-white" title="Add Link">🔗</button>
        <button className="w-8 h-8 border-none bg-gray-100 rounded-md cursor-pointer text-xs transition-all duration-200 hover:bg-purple-500 hover:text-white" title="Bold">B</button>
      </div>
      
      {/* Drag Handle */}
      <div className="absolute -top-2 -right-2 w-5 h-5 bg-purple-500 rounded-full cursor-move hidden group-hover:flex items-center justify-center text-white text-xs">⋮⋮</div>
    </span>
  );

  const renderHeaderSection = () => {
    const content = section.content || {};
    const styles = section.styles || {};
    
    return (
      <div 
        className="p-5 rounded-xl relative"
        style={{
          background: styles.backgroundColor || 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: styles.color || '#ffffff'
        }}
      >
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            {renderEditableElement('logo', content.logo || 'Your Logo', 'font-semibold')}
          </div>
          <div className="flex gap-5 items-center">
            {(content.navItems || ['Home', 'About', 'Contact']).map((item, index) => (
              <span key={index} className="px-4 py-2 bg-white bg-opacity-10 rounded-full text-sm">
                {renderEditableElement(`navItem${index}`, item)}
              </span>
            ))}
          </div>
        </div>
      </div>
    );
  };

  const renderHeroSection = () => {
    const content = section.content || {};
    const styles = section.styles || {};
    
    return (
      <div 
        className="p-8 rounded-xl text-center"
        style={{
          background: styles.backgroundColor || 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          color: styles.color || '#ffffff'
        }}
      >
        <h1 className="text-3xl font-bold mb-4">
          {renderEditableElement('title', content.title || 'Welcome to Our Platform')}
        </h1>
        <p className="text-lg mb-6 opacity-90">
          {renderEditableElement('subtitle', content.subtitle || 'Create amazing websites with our powerful builder')}
        </p>
        <button className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold">
          {renderEditableElement('cta', content.cta || 'Get Started')}
        </button>
      </div>
    );
  };

  const renderContentSection = () => {
    const content = section.content || {};
    
    if (content.features) {
      return (
        <div className="bg-white border border-gray-200 p-6 rounded-xl">
          <h2 className="text-2xl font-bold text-gray-800 mb-6 text-center">
            {renderEditableElement('title', content.title || 'Our Features')}
          </h2>
          <div className="grid grid-cols-3 gap-4">
            {content.features.map((feature, index) => (
              <div key={index} className="text-center">
                <div className="w-12 h-12 bg-purple-100 rounded-lg mx-auto mb-3 flex items-center justify-center">
                  {renderEditableElement(`featureIcon${index}`, feature.icon || '🚀')}
                </div>
                <h3 className="font-semibold text-gray-800">
                  {renderEditableElement(`featureTitle${index}`, feature.title || 'Feature')}
                </h3>
              </div>
            ))}
          </div>
        </div>
      );
    }
    
    return (
      <div className="bg-white border border-gray-200 p-6 rounded-xl">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          {renderEditableElement('title', content.title || 'About Our Company')}
        </h2>
        <p className="text-gray-600 leading-relaxed">
          {renderEditableElement('content', content.content || 'We are passionate about creating amazing digital experiences.')}
        </p>
      </div>
    );
  };

  const renderContactSection = () => {
    const content = section.content || {};
    
    return (
      <div className="bg-white border border-gray-200 p-6 rounded-xl">
        <h2 className="text-2xl font-bold text-gray-800 mb-6">
          {renderEditableElement('title', content.title || 'Get In Touch')}
        </h2>
        <div className="space-y-4">
          <input type="text" placeholder="Your Name" className="w-full p-3 border border-gray-300 rounded-lg" />
          <input type="email" placeholder="Your Email" className="w-full p-3 border border-gray-300 rounded-lg" />
          <textarea placeholder="Your Message" className="w-full p-3 border border-gray-300 rounded-lg h-24"></textarea>
          <button className="bg-purple-600 text-white px-6 py-3 rounded-lg font-semibold">
            {renderEditableElement('button', content.button || 'Send Message')}
          </button>
        </div>
      </div>
    );
  };

  const renderSection = () => {
    switch (section.design?.id) {
      case 'classic':
      case 'centered':
      case 'modern':
        return renderHeaderSection();
      case 'landing':
      case 'split':
        return renderHeroSection();
      case 'text-block':
      case 'features':
        return renderContentSection();
      case 'form':
        return renderContactSection();
      default:
        return renderHeaderSection();
    }
  };

  return (
    <div className="bg-gray-50 rounded-2xl p-6 border-2 border-gray-200">
      {renderSection()}
      
      <div className="mt-4 text-center text-gray-500 text-sm">
        ✨ Hover over any element to edit • Drag the handles to reposition
      </div>
      
      <div className="mt-4 flex justify-end">
        <button 
          onClick={onClose}
          className="px-6 py-2 bg-gray-500 text-white rounded-lg hover:bg-gray-600 transition-colors"
        >
          Done Editing
        </button>
      </div>
    </div>
  );
}
