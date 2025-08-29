'use client';

import { useState } from 'react';

export default function usePageBuilder() {
  const [currentStep, setCurrentStep] = useState(1);
  const [showSectionMenu, setShowSectionMenu] = useState(false);
  const [showDesignSelector, setShowDesignSelector] = useState(false);
  const [selectedSection, setSelectedSection] = useState(null);
  const [selectedDesign, setSelectedDesign] = useState(null);
  const [sections, setSections] = useState([]);
  const [inlineEditing, setInlineEditing] = useState(null);
  const [editingMode, setEditingMode] = useState(null);
  const [showElementMenu, setShowElementMenu] = useState(null);
  const [elementToolbar, setElementToolbar] = useState(null);
  const [showLinkInput, setShowLinkInput] = useState(null);
  const [editingSection, setEditingSection] = useState(null);
  const [showSectionEditor, setShowSectionEditor] = useState(false);

  const handleAddSection = () => {
    setShowSectionMenu(true);
  };

  const handleSectionSelect = (section) => {
    setSelectedSection(section);
    setShowSectionMenu(false);
    setShowDesignSelector(true);
  };

  const handleDesignSelect = (design) => {
    setSelectedDesign(design);
    setShowDesignSelector(false);
    
    const newSection = {
      id: Date.now(),
      type: selectedSection,
      design: design,
      content: design.defaultContent,
      styles: design.defaultStyles,
      elements: []
    };
    
    setSections([...sections, newSection]);
  };

  const handleEditSection = (section) => {
    setEditingMode(section.id);
  };

  const handleInlineEdit = (sectionId, field, value) => {
    setSections(sections.map(section => {
      if (section.id === sectionId) {
        return {
          ...section,
          content: {
            ...section.content,
            [field]: value
          }
        };
      }
      return section;
    }));
    // Clear inline editing state after saving
    setInlineEditing(null);
  };

  const startInlineEdit = (sectionId, field) => {
    setInlineEditing({ sectionId, field });
  };

  const stopInlineEdit = () => {
    setInlineEditing(null);
  };

  const handleElementEdit = (sectionId, elementId, field, value) => {
    setSections(sections.map(section => {
      if (section.id === sectionId) {
        // Check if it's a custom element or existing section element
        const customElement = section.elements?.find(e => e.id === elementId);
        
        if (customElement) {
          // Handle custom elements
          return {
            ...section,
            elements: section.elements?.map(element => {
              if (element.id === elementId) {
                return {
                  ...element,
                  [field]: value
                };
              }
              return element;
            }) || []
          };
        } else {
          // Handle existing section elements (logo, title, subtitle, etc.)
          const elementType = elementId; // elementId is actually the element type for existing elements
          
          // Special handling for navigation items
          if (elementType.startsWith('navItem')) {
            const navIndex = parseInt(elementType.replace('navItem', ''));
            const fieldKey = `navItem${field.charAt(0).toUpperCase() + field.slice(1)}`; // e.g., navItemLink
            
            return {
              ...section,
              content: {
                ...section.content,
                [fieldKey]: {
                  ...section.content[fieldKey],
                  [navIndex]: value
                }
              }
            };
          } else {
            // Handle other elements (logo, title, subtitle, etc.)
            const fieldKey = `${elementType}${field.charAt(0).toUpperCase() + field.slice(1)}`; // e.g., logoLink
            
            return {
              ...section,
              content: {
                ...section.content,
                [fieldKey]: value
              }
            };
          }
        }
      }
      return section;
    }));
  };

  const handleElementStyleChange = (sectionId, elementId, styleType, value) => {
    setSections(sections.map(section => {
      if (section.id === sectionId) {
        // Check if it's a custom element or existing section element
        const customElement = section.elements?.find(e => e.id === elementId);
        
        if (customElement) {
          // Handle custom elements
          return {
            ...section,
            elements: section.elements?.map(element => {
              if (element.id === elementId) {
                return {
                  ...element,
                  styles: {
                    ...element.styles,
                    [styleType]: value
                  }
                };
              }
              return element;
            }) || []
          };
        } else {
          // Handle existing section elements (logo, title, subtitle, etc.)
          const elementType = elementId; // elementId is actually the element type for existing elements
          
          // Special handling for navigation items
          if (elementType.startsWith('navItem')) {
            const navIndex = parseInt(elementType.replace('navItem', ''));
            const styleKey = 'navItemStyles';
            
            return {
              ...section,
              content: {
                ...section.content,
                [styleKey]: {
                  ...section.content[styleKey],
                  [navIndex]: {
                    ...section.content[styleKey]?.[navIndex],
                    [styleType]: value
                  }
                }
              }
            };
          } else {
            // Handle other elements (logo, title, subtitle, etc.)
            const styleKey = `${elementType}Styles`;
            
            return {
              ...section,
              content: {
                ...section.content,
                [styleKey]: {
                  ...section.content[styleKey],
                  [styleType]: value
                }
              }
            };
          }
        }
      }
      return section;
    }));
  };

  const handleStyleChange = (sectionId, styleType, value) => {
    setSections(sections.map(section => {
      if (section.id === sectionId) {
        return {
          ...section,
          styles: {
            ...section.styles,
            [styleType]: value
          }
        };
      }
      return section;
    }));
  };

  const deleteSection = (sectionId) => {
    setSections(sections.filter(section => section.id !== sectionId));
    if (editingMode === sectionId) {
      setEditingMode(null);
    }
  };

  const addElement = (sectionId, elementType) => {
    setSections(sections.map(section => {
      if (section.id === sectionId) {
        const newElement = {
          id: Date.now(),
          type: elementType,
          content: elementType === 'image' ? 'https://via.placeholder.com/300x200' : 'New Element',
          styles: {},
          link: ''
        };
        return {
          ...section,
          elements: [...(section.elements || []), newElement]
        };
      }
      return section;
    }));
    setShowElementMenu(null);
  };

  const handleElementClick = (sectionId, elementId, event) => {
    event.stopPropagation();
    setElementToolbar({ sectionId, elementId });
  };

  const toggleElementMenu = (sectionId) => {
    setShowElementMenu(showElementMenu === sectionId ? null : sectionId);
  };

  const doneEditing = () => {
    setEditingMode(null);
  };

  const closeModals = () => {
    setShowSectionMenu(false);
    setShowDesignSelector(false);
  };

  const openSectionEditor = (section) => {
    setEditingSection(section);
    setShowSectionEditor(true);
  };

  const closeSectionEditor = () => {
    setShowSectionEditor(false);
    setEditingSection(null);
  };

  const saveSectionChanges = (updatedSection) => {
    setSections(sections.map(section => 
      section.id === updatedSection.id ? updatedSection : section
    ));
  };

  const deleteSectionFromEditor = () => {
    if (editingSection) {
      setSections(sections.filter(section => section.id !== editingSection.id));
      closeSectionEditor();
    }
  };

  return {
    // State
    currentStep,
    showSectionMenu,
    showDesignSelector,
    selectedSection,
    selectedDesign,
    sections,
    inlineEditing,
    editingMode,
    showElementMenu,
    elementToolbar,
    showLinkInput,
    editingSection,
    showSectionEditor,
    
    // Actions
    handleAddSection,
    handleSectionSelect,
    handleDesignSelect,
    handleEditSection,
    handleInlineEdit,
    handleElementEdit,
    handleElementStyleChange,
    handleStyleChange,
    deleteSection,
    addElement,
    handleElementClick,
    toggleElementMenu,
    doneEditing,
    closeModals,
    startInlineEdit,
    openSectionEditor,
    closeSectionEditor,
    saveSectionChanges,
    deleteSectionFromEditor,
    
    // Setters
    setInlineEditing,
    setElementToolbar,
    setShowLinkInput,
    setEditingSection,
    setShowSectionEditor
  };
}
