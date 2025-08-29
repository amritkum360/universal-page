'use client';

import CustomElement from '../elements/CustomElement';

export default function HeaderSection({ 
  section, 
  onElementClick, 
  onInlineEdit, 
  inlineEditing, 
  renderElementToolbar,
  startInlineEdit 
}) {
  const content = section.content || {};
  const styles = section.styles || {};
  const designId = section.design?.id;

  const renderClassicHeader = () => (
    <div className="flex items-center justify-between">
      <div className="flex items-center">
        <div className="w-10 h-10 bg-white bg-opacity-20 rounded-lg mr-4"></div>
                           <span 
           className="font-semibold cursor-pointer hover:bg-white hover:bg-opacity-10 px-2 py-1 rounded relative"
           onClick={(e) => {
             startInlineEdit(section.id, 'logo');
             onElementClick(section.id, 'logo', e);
           }}
          style={{
            fontSize: content.logoStyles?.fontSize || '16px',
            color: content.logoStyles?.color || '#ffffff',
            backgroundColor: content.logoStyles?.backgroundColor || 'transparent'
          }}
        >
          {inlineEditing?.sectionId === section.id && inlineEditing?.field === 'logo' ? (
            <input
              type="text"
              defaultValue={content.logo || 'Your Brand'}
              onBlur={(e) => {
                onInlineEdit(section.id, 'logo', e.target.value);
              }}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  onInlineEdit(section.id, 'logo', e.target.value);
                }
              }}
              className="bg-transparent border-none outline-none text-white font-semibold"
              autoFocus
            />
          ) : (
            content.logo || 'Your Brand'
          )}
          {renderElementToolbar(section.id, 'logo')}
        </span>
      </div>
      <div className="flex gap-5 items-center">
        {(content.navItems || ['Home', 'About', 'Services', 'Contact']).map((item, index) => (
                     <span 
             key={index} 
             className="px-4 py-2 bg-white bg-opacity-10 rounded-full text-sm cursor-pointer hover:bg-opacity-20 relative"
             onClick={(e) => {
               startInlineEdit(section.id, `navItem${index}`);
               onElementClick(section.id, `navItem${index}`, e);
             }}
            style={{
              fontSize: content.navItemStyles?.[index]?.fontSize || '14px',
              color: content.navItemStyles?.[index]?.color || '#ffffff',
              backgroundColor: content.navItemStyles?.[index]?.backgroundColor || 'rgba(255,255,255,0.1)'
            }}
          >
            {inlineEditing?.sectionId === section.id && inlineEditing?.field === `navItem${index}` ? (
              <input
                type="text"
                defaultValue={item}
                onBlur={(e) => {
                  const newNavItems = [...(content.navItems || ['Home', 'About', 'Services', 'Contact'])];
                  newNavItems[index] = e.target.value;
                  onInlineEdit(section.id, 'navItems', newNavItems);
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    const newNavItems = [...(content.navItems || ['Home', 'About', 'Services', 'Contact'])];
                    newNavItems[index] = e.target.value;
                    onInlineEdit(section.id, 'navItems', newNavItems);
                  }
                }}
                className="bg-transparent border-none outline-none text-white text-sm w-16"
                autoFocus
              />
            ) : (
              item
            )}
            {renderElementToolbar(section.id, `navItem${index}`)}
          </span>
        ))}
      </div>
    </div>
  );

  const renderCenteredHeader = () => (
    <div className="text-center">
      <div className="mb-4">
                 <span 
           className="text-2xl font-bold cursor-pointer hover:bg-white hover:bg-opacity-10 px-2 py-1 rounded relative"
           onClick={(e) => {
             startInlineEdit(section.id, 'logo');
             onElementClick(section.id, 'logo', e);
           }}
          style={{
            fontSize: content.logoStyles?.fontSize || '24px',
            color: content.logoStyles?.color || '#ffffff',
            backgroundColor: content.logoStyles?.backgroundColor || 'transparent'
          }}
        >
          {inlineEditing?.sectionId === section.id && inlineEditing?.field === 'logo' ? (
            <input
              type="text"
              defaultValue={content.logo || 'Brand Name'}
              onBlur={(e) => onInlineEdit(section.id, 'logo', e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  onInlineEdit(section.id, 'logo', e.target.value);
                }
              }}
              className="bg-transparent border-none outline-none text-white text-2xl font-bold text-center w-full"
              autoFocus
            />
          ) : (
            content.logo || 'Brand Name'
          )}
          {renderElementToolbar(section.id, 'logo')}
        </span>
        {content.tagline && (
          <p 
            className="text-sm opacity-80 cursor-pointer hover:bg-white hover:bg-opacity-10 px-2 py-1 rounded relative"
            onClick={(e) => onElementClick(section.id, 'tagline', e)}
            style={{
              fontSize: content.taglineStyles?.fontSize || '14px',
              color: content.taglineStyles?.color || '#ffffff',
              backgroundColor: content.taglineStyles?.backgroundColor || 'transparent'
            }}
          >
            {inlineEditing?.sectionId === section.id && inlineEditing?.field === 'tagline' ? (
              <input
                type="text"
                defaultValue={content.tagline}
                onBlur={(e) => onInlineEdit(section.id, 'tagline', e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    onInlineEdit(section.id, 'tagline', e.target.value);
                  }
                }}
                className="bg-transparent border-none outline-none text-white text-sm text-center w-full"
                autoFocus
              />
            ) : (
              content.tagline
            )}
            {renderElementToolbar(section.id, 'tagline')}
          </p>
        )}
      </div>
      <div className="flex justify-center gap-4">
        {(content.navItems || ['Home', 'Products', 'About', 'Contact']).map((item, index) => (
                     <span 
             key={index} 
             className="px-3 py-1 cursor-pointer hover:bg-white hover:bg-opacity-10 rounded relative"
             onClick={(e) => {
               startInlineEdit(section.id, `navItem${index}`);
               onElementClick(section.id, `navItem${index}`, e);
             }}
            style={{
              fontSize: content.navItemStyles?.[index]?.fontSize || '14px',
              color: content.navItemStyles?.[index]?.color || '#ffffff',
              backgroundColor: content.navItemStyles?.[index]?.backgroundColor || 'transparent'
            }}
          >
            {inlineEditing?.sectionId === section.id && inlineEditing?.field === `navItem${index}` ? (
              <input
                type="text"
                defaultValue={item}
                onBlur={(e) => {
                  const newNavItems = [...(content.navItems || ['Home', 'Products', 'About', 'Contact'])];
                  newNavItems[index] = e.target.value;
                  onInlineEdit(section.id, 'navItems', newNavItems);
                }}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    const newNavItems = [...(content.navItems || ['Home', 'Products', 'About', 'Contact'])];
                    newNavItems[index] = e.target.value;
                    onInlineEdit(section.id, 'navItems', newNavItems);
                  }
                }}
                className="bg-transparent border-none outline-none text-white text-sm w-16"
                autoFocus
              />
            ) : (
              item
            )}
            {renderElementToolbar(section.id, `navItem${index}`)}
          </span>
        ))}
      </div>
    </div>
  );

  const renderModernHeader = () => (
    <div className="flex justify-between items-center">
      <div className="flex items-center gap-4">
                 <span 
           className="text-xl font-bold cursor-pointer hover:bg-white hover:bg-opacity-10 px-2 py-1 rounded relative"
           onClick={(e) => {
             startInlineEdit(section.id, 'logo');
             onElementClick(section.id, 'logo', e);
           }}
          style={{
            fontSize: content.logoStyles?.fontSize || '20px',
            color: content.logoStyles?.color || '#ffffff',
            backgroundColor: content.logoStyles?.backgroundColor || 'transparent'
          }}
        >
          {inlineEditing?.sectionId === section.id && inlineEditing?.field === 'logo' ? (
            <input
              type="text"
              defaultValue={content.logo || 'Studio'}
              onBlur={(e) => onInlineEdit(section.id, 'logo', e.target.value)}
              onKeyDown={(e) => {
                if (e.key === 'Enter') {
                  onInlineEdit(section.id, 'logo', e.target.value);
                }
              }}
              className="bg-transparent border-none outline-none text-white text-xl font-bold"
              autoFocus
            />
          ) : (
            content.logo || 'Studio'
          )}
          {renderElementToolbar(section.id, 'logo')}
        </span>
        {content.tagline && (
          <p 
            className="text-sm opacity-80 cursor-pointer hover:bg-white hover:bg-opacity-10 px-2 py-1 rounded relative"
            onClick={(e) => onElementClick(section.id, 'tagline', e)}
            style={{
              fontSize: content.taglineStyles?.fontSize || '14px',
              color: content.taglineStyles?.color || '#ffffff',
              backgroundColor: content.taglineStyles?.backgroundColor || 'transparent'
            }}
          >
            {inlineEditing?.sectionId === section.id && inlineEditing?.field === 'tagline' ? (
              <input
                type="text"
                defaultValue={content.tagline}
                onBlur={(e) => onInlineEdit(section.id, 'tagline', e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    onInlineEdit(section.id, 'tagline', e.target.value);
                  }
                }}
                className="bg-transparent border-none outline-none text-white text-sm"
                autoFocus
              />
            ) : (
              content.tagline
            )}
            {renderElementToolbar(section.id, 'tagline')}
          </p>
        )}
      </div>
      <div className="flex items-center gap-6">
        <div className="flex gap-4">
          {(content.navItems || ['Work', 'Services', 'About', 'Contact']).map((item, index) => (
                         <span 
               key={index} 
               className="cursor-pointer hover:bg-white hover:bg-opacity-10 px-2 py-1 rounded relative"
               onClick={(e) => {
                 startInlineEdit(section.id, `navItem${index}`);
                 onElementClick(section.id, `navItem${index}`, e);
               }}
              style={{
                fontSize: content.navItemStyles?.[index]?.fontSize || '14px',
                color: content.navItemStyles?.[index]?.color || '#ffffff',
                backgroundColor: content.navItemStyles?.[index]?.backgroundColor || 'transparent'
              }}
            >
              {inlineEditing?.sectionId === section.id && inlineEditing?.field === `navItem${index}` ? (
                <input
                  type="text"
                  defaultValue={item}
                  onBlur={(e) => {
                    const newNavItems = [...(content.navItems || ['Work', 'Services', 'About', 'Contact'])];
                    newNavItems[index] = e.target.value;
                    onInlineEdit(section.id, 'navItems', newNavItems);
                  }}
                  onKeyDown={(e) => {
                    if (e.key === 'Enter') {
                      const newNavItems = [...(content.navItems || ['Work', 'Services', 'About', 'Contact'])];
                      newNavItems[index] = e.target.value;
                      onInlineEdit(section.id, 'navItems', newNavItems);
                    }
                  }}
                  className="bg-transparent border-none outline-none text-white text-sm w-16"
                  autoFocus
                />
              ) : (
                item
              )}
              {renderElementToolbar(section.id, `navItem${index}`)}
            </span>
          ))}
        </div>
        {content.cta && (
                     <button 
             className="bg-white text-purple-600 px-4 py-2 rounded-full font-semibold cursor-pointer hover:bg-gray-100 relative"
             onClick={(e) => {
               startInlineEdit(section.id, 'cta');
               onElementClick(section.id, 'cta', e);
             }}
            style={{
              fontSize: content.ctaStyles?.fontSize || '14px',
              color: content.ctaStyles?.color || '#7c3aed',
              backgroundColor: content.ctaStyles?.backgroundColor || '#ffffff'
            }}
          >
            {inlineEditing?.sectionId === section.id && inlineEditing?.field === 'cta' ? (
              <input
                type="text"
                defaultValue={content.cta}
                onBlur={(e) => onInlineEdit(section.id, 'cta', e.target.value)}
                onKeyDown={(e) => {
                  if (e.key === 'Enter') {
                    onInlineEdit(section.id, 'cta', e.target.value);
                  }
                }}
                className="bg-transparent border-none outline-none text-purple-600 font-semibold text-center w-full"
                autoFocus
              />
            ) : (
              content.cta
            )}
            {renderElementToolbar(section.id, 'cta')}
          </button>
        )}
      </div>
    </div>
  );

  const getHeaderLayout = () => {
    switch (designId) {
      case 'classic':
        return renderClassicHeader();
      case 'centered':
        return renderCenteredHeader();
      case 'modern':
        return renderModernHeader();
      default:
        return renderClassicHeader();
    }
  };

  return (
    <div 
      className="p-5 rounded-xl relative"
      style={{
        background: styles.backgroundColor || 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
        color: styles.color || '#ffffff',
        fontSize: styles.fontSize || '16px'
      }}
    >
      {getHeaderLayout()}
      
      {/* Render Custom Elements */}
      {section.elements && section.elements.length > 0 && (
        <div className="mt-4 flex flex-wrap gap-2">
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
