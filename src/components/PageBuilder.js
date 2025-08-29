'use client';

import usePageBuilder from '../hooks/usePageBuilder';
import Canvas from './canvas/Canvas';
import ElementToolbar from './elements/ElementToolbar';
import SectionMenu from './SectionMenu';
import DesignSelector from './DesignSelector';
import SectionEditor from './editors/SectionEditor';

export default function PageBuilder() {
  const {
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
    setShowLinkInput
  } = usePageBuilder();

  const renderElementToolbar = (sectionId, elementId) => {
    if (!elementToolbar || elementToolbar.sectionId !== sectionId || elementToolbar.elementId !== elementId) {
      return null;
    }

    const section = sections.find(s => s.id === sectionId);
    const customElement = section?.elements?.find(e => e.id === elementId);
    
    // Check if it's a custom element or existing section element
    let element;
    if (customElement) {
      element = customElement;
    } else {
      // For existing section elements, create a virtual element object
      const elementType = elementId;
      const styleKey = `${elementType}Styles`;
      element = {
        id: elementId,
        type: elementType,
        styles: section?.content?.[styleKey] || {},
        link: section?.content?.[`${elementType}Link`] || ''
      };
    }

    return (
      <ElementToolbar 
        sectionId={sectionId}
        elementId={elementId}
        element={element}
        onStyleChange={handleElementStyleChange}
        onElementEdit={handleElementEdit}
        onClose={() => setElementToolbar(null)}
      />
    );
  };

  return (
    <div className="max-w-7xl mx-auto space-y-8">
      {/* Step 1: Main Canvas */}
      <div className="bg-white rounded-3xl p-6 shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-3xl">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-1 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded"></div>
          <h2 className="text-2xl font-bold text-gray-800">Step 1: Main Canvas</h2>
        </div>
        
        <div className="flex justify-center gap-3 mb-5">
          <div className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold ${
            currentStep === 1 ? 'bg-gradient-to-br from-purple-500 to-blue-500 text-white' : 'bg-gray-200 text-gray-600'
          }`}>1</div>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold ${
            currentStep === 2 ? 'bg-gradient-to-br from-purple-500 to-blue-500 text-white' : 'bg-gray-200 text-gray-600'
          }`}>2</div>
          <div className={`w-8 h-8 rounded-full flex items-center justify-center font-semibold ${
            currentStep === 3 ? 'bg-gradient-to-br from-purple-500 to-blue-500 text-white' : 'bg-gray-200 text-gray-600'
          }`}>3</div>
        </div>

        <Canvas 
          sections={sections}
          onAddSection={handleAddSection}
          onEditSection={handleEditSection}
          onDeleteSection={deleteSection}
          onElementClick={handleElementClick}
          onInlineEdit={handleInlineEdit}
          inlineEditing={inlineEditing}
          editingMode={editingMode}
          showElementMenu={showElementMenu}
          onToggleElementMenu={toggleElementMenu}
          onStyleChange={handleStyleChange}
          onAddElement={addElement}
          onDoneEditing={doneEditing}
          renderElementToolbar={renderElementToolbar}
          startInlineEdit={startInlineEdit}
          openSectionEditor={openSectionEditor}
        />
      </div>

      {/* Section Selection Menu Popup */}
      {showSectionMenu && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-3xl p-6 shadow-2xl max-w-4xl w-full mx-4 max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-3">
                <div className="w-1 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded"></div>
                <h2 className="text-2xl font-bold text-gray-800">Choose Section Type</h2>
              </div>
              <button 
                onClick={closeModals}
                className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
              >
                ×
              </button>
            </div>
            
            <SectionMenu onSectionSelect={handleSectionSelect} onClose={closeModals} />
          </div>
        </div>
      )}

      {/* Design Selection Popup */}
      {showDesignSelector && (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
          <div className="bg-white rounded-3xl p-6 shadow-2xl max-w-6xl w-full mx-4 max-h-[80vh] overflow-y-auto">
            <div className="flex items-center justify-between mb-5">
              <div className="flex items-center gap-3">
                <div className="w-1 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded"></div>
                <h2 className="text-2xl font-bold text-gray-800">{selectedSection?.charAt(0).toUpperCase() + selectedSection?.slice(1)} Design Selection</h2>
              </div>
              <button 
                onClick={closeModals}
                className="text-gray-500 hover:text-gray-700 text-2xl font-bold"
              >
                ×
              </button>
            </div>

            <DesignSelector 
              sectionType={selectedSection} 
              onDesignSelect={handleDesignSelect}
              onClose={closeModals}
            />
          </div>
        </div>
      )}

      {/* Features Overview */}
      <div className="bg-white rounded-3xl p-6 shadow-2xl transition-all duration-300 hover:-translate-y-1 hover:shadow-3xl">
        <div className="flex items-center gap-3 mb-5">
          <div className="w-1 h-8 bg-gradient-to-br from-purple-500 to-blue-500 rounded"></div>
          <h2 className="text-2xl font-bold text-gray-800">Key Features</h2>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-gray-50 p-5 rounded-xl border-l-4 border-purple-500">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">🎨 Inline Editing</h3>
            <p className="text-gray-600">Click on any element to edit directly. Change text, colors, fonts, and sizes without opening separate panels.</p>
          </div>
          <div className="bg-gray-50 p-5 rounded-xl border-l-4 border-blue-500">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">🎯 Drag & Drop</h3>
            <p className="text-gray-600">Move elements anywhere on the page. Reorder sections, reposition components with simple drag and drop.</p>
          </div>
          <div className="bg-gray-50 p-5 rounded-xl border-l-4 border-pink-500">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">🚀 Pre-built Designs</h3>
            <p className="text-gray-600">Choose from professionally designed templates for each section type. Customize to match your brand.</p>
          </div>
          <div className="bg-gray-50 p-5 rounded-xl border-l-4 border-cyan-500">
            <h3 className="text-lg font-semibold text-gray-800 mb-3">⚡ Real-time Preview</h3>
            <p className="text-gray-600">See changes instantly as you make them. No need to preview in separate tabs or modes.</p>
          </div>
        </div>
      </div>

      {/* Section Editor Popup */}
      {showSectionEditor && editingSection && (
        <SectionEditor
          section={editingSection}
          onClose={closeSectionEditor}
          onSave={saveSectionChanges}
          onDelete={deleteSectionFromEditor}
        />
      )}
    </div>
  );
}
