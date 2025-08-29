'use client';

import CustomElement from '../elements/CustomElement';

export default function HeroSection({ 
  section, 
  onElementClick, 
  onInlineEdit, 
  inlineEditing, 
  renderElementToolbar,
  startInlineEdit 
}) {
  const content = section.content || {};
  const styles = section.styles || {};

  return (
    <div 
      className="p-8 rounded-xl text-center"
      style={{
        background: styles.backgroundColor || 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: styles.color || '#ffffff',
        fontSize: styles.fontSize || '16px'
      }}
    >
             <h1 
         className="text-3xl font-bold mb-4 cursor-pointer hover:bg-white hover:bg-opacity-10 px-2 py-1 rounded relative"
         onClick={(e) => {
           startInlineEdit(section.id, 'title');
           onElementClick(section.id, 'title', e);
         }}
        style={{
          fontSize: content.titleStyles?.fontSize || '48px',
          color: content.titleStyles?.color || '#ffffff',
          backgroundColor: content.titleStyles?.backgroundColor || 'transparent'
        }}
      >
        {inlineEditing?.sectionId === section.id && inlineEditing?.field === 'title' ? (
          <input
            type="text"
            defaultValue={content.title || 'Welcome to Our Platform'}
            onBlur={(e) => {
              onInlineEdit(section.id, 'title', e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                onInlineEdit(section.id, 'title', e.target.value);
              }
            }}
            className="bg-transparent border-none outline-none text-white text-3xl font-bold text-center w-full"
            autoFocus
          />
        ) : (
          content.title || 'Welcome to Our Platform'
        )}
        {renderElementToolbar(section.id, 'title')}
      </h1>
             <p 
         className="text-lg mb-6 opacity-90 cursor-pointer hover:bg-white hover:bg-opacity-10 px-2 py-1 rounded relative"
         onClick={(e) => {
           startInlineEdit(section.id, 'subtitle');
           onElementClick(section.id, 'subtitle', e);
         }}
        style={{
          fontSize: content.subtitleStyles?.fontSize || '18px',
          color: content.subtitleStyles?.color || '#ffffff',
          backgroundColor: content.subtitleStyles?.backgroundColor || 'transparent'
        }}
      >
        {inlineEditing?.sectionId === section.id && inlineEditing?.field === 'subtitle' ? (
          <input
            type="text"
            defaultValue={content.subtitle || 'Create amazing websites with our powerful builder'}
            onBlur={(e) => {
              onInlineEdit(section.id, 'subtitle', e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                onInlineEdit(section.id, 'subtitle', e.target.value);
              }
            }}
            className="bg-transparent border-none outline-none text-white text-lg opacity-90 text-center w-full"
            autoFocus
          />
        ) : (
          content.subtitle || 'Create amazing websites with our powerful builder'
        )}
        {renderElementToolbar(section.id, 'subtitle')}
      </p>
             <button 
         className="bg-white text-purple-600 px-8 py-3 rounded-full font-semibold cursor-pointer hover:bg-gray-100 relative"
         onClick={(e) => {
           startInlineEdit(section.id, 'cta');
           onElementClick(section.id, 'cta', e);
         }}
        style={{
          fontSize: content.ctaStyles?.fontSize || '16px',
          color: content.ctaStyles?.color || '#7c3aed',
          backgroundColor: content.ctaStyles?.backgroundColor || '#ffffff'
        }}
      >
        {inlineEditing?.sectionId === section.id && inlineEditing?.field === 'cta' ? (
          <input
            type="text"
            defaultValue={content.cta || 'Get Started'}
            onBlur={(e) => {
              onInlineEdit(section.id, 'cta', e.target.value);
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                onInlineEdit(section.id, 'cta', e.target.value);
              }
            }}
            className="bg-transparent border-none outline-none text-purple-600 font-semibold text-center w-full"
            autoFocus
          />
        ) : (
          content.cta || 'Get Started'
        )}
        {renderElementToolbar(section.id, 'cta')}
      </button>
      
      {/* Render Custom Elements */}
      {section.elements && section.elements.length > 0 && (
        <div className="mt-6 flex flex-wrap gap-2 justify-center">
          {section.elements.map((element) => (
            <div key={element.id}>
              <CustomElement 
                sectionId={section.id}
                element={element}
                onElementClick={onElementClick}
              />
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
