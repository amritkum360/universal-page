'use client';

import SectionRenderer from '../sections/SectionRenderer';
import SectionEditingToolbar from '../toolbars/SectionEditingToolbar';

export default function Canvas({ 
  sections, 
  onAddSection, 
  onEditSection, 
  onDeleteSection, 
  onElementClick, 
  onInlineEdit, 
  inlineEditing, 
  editingMode, 
  showElementMenu, 
  onToggleElementMenu, 
  onStyleChange, 
  onAddElement, 
  onDoneEditing, 
  renderElementToolbar,
  startInlineEdit,
  openSectionEditor
}) {
  return (
    <div className="bg-gray-50 border-3 border-dashed border-gray-300 rounded-2xl min-h-96 flex items-center justify-center relative transition-all duration-300 hover:border-purple-500 hover:bg-gray-100">
      {sections.length === 0 ? (
        <button 
          onClick={onAddSection}
          className="w-20 h-20 bg-gradient-to-br from-purple-500 to-blue-500 border-none rounded-full text-white text-4xl cursor-pointer shadow-lg hover:scale-110 transition-all duration-300 relative overflow-hidden group"
        >
          <span className="relative z-10">+</span>
          <div className="absolute inset-0 bg-white opacity-20 rounded-full scale-0 group-hover:scale-100 transition-transform duration-600"></div>
        </button>
      ) : (
        <div className="w-full space-y-6">
          {sections.map((section) => (
            <div 
              key={section.id}
              className="relative group"
            >
              {/* Live Section Content */}
              <div>
                <SectionRenderer 
                  section={section}
                  onElementClick={onElementClick}
                  onInlineEdit={onInlineEdit}
                  inlineEditing={inlineEditing}
                  renderElementToolbar={renderElementToolbar}
                  startInlineEdit={startInlineEdit}
                />
              </div>
              
              {/* Edit/Delete Controls */}
              <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex gap-2">
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    openSectionEditor(section);
                  }}
                  className="px-3 py-1 bg-blue-500 text-white rounded-lg text-sm hover:bg-blue-600 transition-colors"
                >
                  Edit
                </button>
                <button 
                  onClick={(e) => {
                    e.stopPropagation();
                    onDeleteSection(section.id);
                  }}
                  className="px-3 py-1 bg-red-500 text-white rounded-lg text-sm hover:bg-red-600 transition-colors"
                >
                  Delete
                </button>
              </div>

              {/* Section Editing Toolbar */}
              {editingMode === section.id && (
                <SectionEditingToolbar 
                  section={section}
                  onStyleChange={onStyleChange}
                  onAddElement={onAddElement}
                  showElementMenu={showElementMenu === section.id}
                  onToggleElementMenu={() => onToggleElementMenu(section.id)}
                  onDone={onDoneEditing}
                />
              )}
            </div>
          ))}
          
          <div className="flex justify-center pt-4">
            <button 
              onClick={onAddSection}
              className="px-6 py-3 bg-gradient-to-br from-purple-500 to-blue-500 text-white rounded-xl font-semibold hover:scale-105 transition-all duration-300 shadow-lg"
            >
              + Add Another Section
            </button>
          </div>
        </div>
      )}
      
      {sections.length === 0 && (
        <p className="text-center mt-4 text-gray-500">Click + to add your first section</p>
      )}
    </div>
  );
}
