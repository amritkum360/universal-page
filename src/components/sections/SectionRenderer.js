'use client';

import HeaderSection from './HeaderSection';
import HeroSection from './HeroSection';
import DefaultSection from './DefaultSection';

export default function SectionRenderer({ 
  section, 
  onElementClick, 
  onInlineEdit, 
  inlineEditing, 
  renderElementToolbar,
  startInlineEdit
}) {
  // Map design IDs to section components
  const getSectionComponent = () => {
    switch (section.design?.id) {
      case 'classic':
      case 'centered':
      case 'modern':
        return (
          <HeaderSection 
            section={section}
            onElementClick={onElementClick}
            onInlineEdit={onInlineEdit}
            inlineEditing={inlineEditing}
            renderElementToolbar={renderElementToolbar}
            startInlineEdit={startInlineEdit}
          />
        );
      
      case 'landing':
      case 'split':
        return (
          <HeroSection 
            section={section}
            onElementClick={onElementClick}
            onInlineEdit={onInlineEdit}
            inlineEditing={inlineEditing}
            renderElementToolbar={renderElementToolbar}
            startInlineEdit={startInlineEdit}
          />
        );
      
      default:
        return (
          <DefaultSection 
            section={section}
            onElementClick={onElementClick}
          />
        );
    }
  };

  return getSectionComponent();
}
